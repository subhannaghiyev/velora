# Velora Architecture

This document records the architectural decisions for the Velora platform. It describes **why** the stack was chosen and how the layers relate to one another. Implementation specifics live in code, not here.

---

## 1. Guiding Philosophy

The architecture was designed for **clarity during the MVP phase** and **extractability at scale**.

The MVP is a deliberate monolith. Not because microservices are wrong — but because premature distribution introduces coordination overhead, deployment complexity, and operational cost that is unjustifiable before product-market fit. The monolith is structured so that its internal boundaries are clean enough to extract services from later without a rewrite.

Every architectural decision was made against three questions:

1. Does this serve the MVP scope?
2. Does this avoid locking us into a decision we cannot reverse?
3. Does this keep the development loop fast?

---

## 2. Technology Decisions

### 2.1 Next.js 16 (App Router) — Frontend

**Decision:** Next.js with the App Router, TypeScript strict mode, React 19.

**Why:**
Next.js is the industry standard for production React applications. The App Router model enables React Server Components, which allow the frontend to handle data fetching at the component level without waterfalls, reducing client-side JavaScript and improving time-to-first-byte. For a product where the landing page and catalog must rank in search engines, server rendering is not optional — it is a competitive requirement.

The 3D designer and interactive UI components run as Client Components. The separation is enforced by the App Router's file conventions, making the boundary between server and client explicit and auditable.

**Constraints:**
- All routing is App Router. Pages Router is not used.
- `src/` directory is the source root.
- The `@/*` path alias maps to `src/*`.

---

### 2.2 NestJS 11 — Backend

**Decision:** NestJS as the backend application framework, TypeScript strict mode.

**Why:**
NestJS imposes a module-based structure that maps directly to domain boundaries. Each feature (auth, products, orders, users) is a self-contained NestJS module with its own controller, service, and DTOs. This structure makes it natural to reason about what a feature does and how it connects to the rest of the application — and makes it straightforward to extract a module into an independent service if scale requires.

NestJS's built-in dependency injection, guard system, and interceptor pipeline eliminate the need for a bespoke middleware layer. The conventions are well-documented and widely understood, reducing onboarding cost for future contributors.

**Constraints:**
- One module per domain. Modules do not import from sibling feature modules — they communicate through service interfaces or shared modules.
- HTTP transport only. No WebSocket or gRPC in the MVP.

---

### 2.3 Prisma 7 — ORM

**Decision:** Prisma as the database access layer, TypeScript configuration via `prisma.config.ts`.

**Why:**
Prisma provides type-safe database access with a schema-first approach that makes data model changes explicit, reviewable, and reversible through migrations. The generated client eliminates a category of runtime errors by making incorrect queries fail at compile time.

Prisma 7 uses a TypeScript configuration file (`prisma.config.ts`) rather than a `.env`-driven URL in `schema.prisma`. The `DATABASE_URL` is passed directly to the `PrismaClient` constructor at runtime in the NestJS service. This keeps environment configuration in the application layer, not the tooling layer.

The generated client is output to `backend/generated/prisma/` and is gitignored. It is always generated as part of the setup and build processes.

**Constraints:**
- Schema changes always go through a migration. No `prisma db push` in production.
- Raw SQL is used only when Prisma's query API is provably insufficient for a performance requirement.

---

### 2.4 PostgreSQL 17 — Database

**Decision:** PostgreSQL 17, containerized via Docker for local development.

**Why:**
PostgreSQL is the standard relational database for TypeScript/Node.js production applications. It provides the transactional guarantees, JSON field support, and full-text search capability that the platform will use in later sprints. It is supported natively by Prisma.

The local development instance runs in Docker to avoid requiring contributors to install and configure PostgreSQL natively, and to avoid conflicts with pre-existing local installations. In development, the Docker container is exposed on port **5433** (the host machine's native PostgreSQL occupies 5432).

**Constraints:**
- All schema changes go through Prisma migrations. The database is never modified directly.
- The `velora_db` database, `velora` user, and `velora` password are for local development only. Production credentials are managed separately.

---

## 3. Folder Structure

The repository is a monorepo with two application directories: `frontend/` and `backend/`. They are independent applications that share nothing at the code level — no shared package, no symlinked module. The shared contract is the REST API.

```
velora/
├── frontend/                   # Next.js 16 application
│   └── src/
│       ├── app/                # App Router — pages and layouts
│       ├── components/         # Shared UI components (design system)
│       ├── features/           # Feature-scoped components and logic
│       ├── hooks/              # Shared React hooks
│       ├── lib/                # Utilities, API client, constants
│       ├── store/              # Zustand state slices
│       └── types/              # Shared TypeScript types
│
├── backend/                    # NestJS 11 application
│   ├── src/
│   │   ├── modules/            # Feature modules (auth, users, products, …)
│   │   │   └── <feature>/
│   │   │       ├── <feature>.module.ts
│   │   │       ├── <feature>.controller.ts
│   │   │       ├── <feature>.service.ts
│   │   │       └── dto/
│   │   ├── common/             # Guards, interceptors, decorators, filters
│   │   ├── prisma/             # PrismaModule and PrismaService
│   │   └── main.ts
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── migrations/
│   ├── prisma.config.ts        # Prisma 7 CLI configuration
│   └── generated/prisma/       # Generated Prisma client (gitignored)
│
├── docs/                       # Architecture, design, and roadmap
├── docker/                     # Dockerfile templates
├── docker-compose.yml          # Local development services
└── .github/workflows/          # CI/CD pipelines
```

---

## 4. Layer Separation

```
┌─────────────────────────────────┐
│         Next.js Frontend        │
│   RSC (server) + Client (3D/UI) │
│   TanStack Query for data fetch │
│   Zustand for client-side state │
└───────────────┬─────────────────┘
                │  REST API (HTTP/JSON)
┌───────────────▼─────────────────┐
│          NestJS Backend         │
│  Controllers → Services → DTOs  │
│  Guards (auth) · Pipes (valid.) │
└───────────────┬─────────────────┘
                │
┌───────────────▼─────────────────┐
│           Prisma ORM            │
│   Type-safe queries · Migrations│
└───────────────┬─────────────────┘
                │
┌───────────────▼─────────────────┐
│          PostgreSQL 17          │
└─────────────────────────────────┘
```

**Rules of layer interaction:**

- The frontend communicates with the backend exclusively via REST. There is no direct database access from the frontend.
- Controllers receive requests, validate input via DTOs/pipes, delegate to services, and return responses. They contain no business logic.
- Services contain business logic. They interact with Prisma and with other services within their own module.
- Cross-module communication happens through injected services, not direct repository calls across modules.
- Prisma is accessed only through a centrally provided `PrismaService`. No feature module instantiates a `PrismaClient` directly.

---

## 5. API Communication

**Protocol:** REST over HTTP/HTTPS. JSON request and response bodies.

**Versioning:** API routes are prefixed with `/api/v1/`. Version is incremented only on breaking changes. There are no breaking changes without a migration path.

**Authentication:** JWT-based. Access tokens are short-lived. Refresh tokens are stored securely (httpOnly cookie or encrypted storage). The auth guard is applied at the controller method level via decorators.

**Error responses:** All errors follow a consistent shape:

```json
{
  "statusCode": 400,
  "message": "Validation failed",
  "errors": [{ "field": "email", "message": "must be a valid email" }]
}
```

**Frontend data fetching:**
- Server Components fetch data directly via the REST API at render time — no client-side request for initial data.
- Client Components use TanStack Query for mutations, real-time updates, and interactions that require client-side cache management.
- The API base URL is set via environment variable. The fetch layer is abstracted behind a typed API client in `src/lib/api/`.

---

## 6. State Management Boundaries

State is categorized by where it lives and why.

| Category | Tool | Examples |
|---|---|---|
| Server state (remote data) | TanStack Query | Products, orders, user profile |
| Client UI state (ephemeral) | React `useState` / `useReducer` | Modal open/closed, form field focus |
| Client app state (shared, persisted) | Zustand | Cart contents, active design configuration |
| URL state | Next.js router / `searchParams` | Filters, pagination, active tab |

**Rules:**
- Server state is never duplicated into Zustand. TanStack Query is the source of truth for any data that comes from the API.
- Zustand stores are scoped by domain. No single global store. Each store is a slice: `useCartStore`, `useDesignStore`.
- URL state is preferred over component state when a value should survive a page refresh or be shareable as a link (filters, product view, selected variant).

---

## 7. Future Scalability

These decisions preserve the ability to scale without rewriting.

**Caching layer (not in MVP):** The NestJS service layer is designed so that a Redis cache can be inserted between the service method and the Prisma call without changing the controller or the API contract.

**Search (not in MVP):** Product queries use Prisma's full-text search for the MVP. The query interface is abstracted behind a `ProductSearchService` so that Elasticsearch or a third-party search provider can be substituted later.

**Background jobs (not in MVP):** Email sending is handled inline for the MVP. The NestJS module structure supports the addition of a queue (Bull/BullMQ) without changes to feature modules — a job module would be added and the relevant service methods would enqueue rather than execute directly.

**Microservices (not in MVP):** The module structure of NestJS maps naturally to service boundaries. Auth, Orders, and Products are candidates for extraction. The clean separation enforced now means that extraction is a deployment decision, not a code restructure.

**Payments (not in MVP):** Cash on Delivery is the only payment method. The checkout flow and order model are designed to accommodate a `paymentMethod` field and a `PaymentService` without schema changes to existing fields.

---

## 8. Decisions That Are Off the Table for MVP

These are not reconsidered in sprint planning unless explicitly approved.

| What | Why |
|---|---|
| Redis | Premature caching before load is understood |
| Kafka / message queue | No async workflows justify it yet |
| Elasticsearch | Prisma full-text search is sufficient at MVP scale |
| AWS / cloud infra | Not required until deployment sprint |
| OAuth (Google, GitHub) | JWT email/password covers MVP auth needs |
| Stripe / online payment | Cash on Delivery is the MVP contract |
| Microservices | Unjustifiable operational overhead before scale |
