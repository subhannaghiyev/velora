# CLAUDE.md — Velora

This file defines how you must work inside this repository. Read it before doing anything else. It is not a suggestion.

---

## Before Every Session

1. Read `docs/DESIGN_BIBLE.md` — understand the visual and product principles before touching any frontend code.
2. Read `docs/ROADMAP.md` — confirm the current sprint and its scope.
3. Read `docs/ARCHITECTURE.md` — confirm which layer you are working in and what its rules are.
4. Read `docs/CODING_STANDARDS.md` — apply the naming, structure, and quality rules.

Do not skip these reads. If the session is a continuation and the context is clear, you may proceed — but any architectural or design uncertainty is resolved by re-reading the relevant document, not by guessing.

---

## Stack (Locked)

Do not suggest, introduce, or use any technology not in this list.

| Layer | Technology |
|---|---|
| Frontend | Next.js 16 (App Router), TypeScript, React 19 |
| 3D | React Three Fiber, Three.js |
| UI | Material UI, Framer Motion |
| State | Zustand, TanStack Query |
| Backend | NestJS 11 |
| ORM | Prisma 7 (`prisma.config.ts` — not schema.prisma url) |
| Database | PostgreSQL 17 (Docker, port 5433) |
| Auth | JWT, email verification, password reset |
| Infrastructure | Docker, GitHub Actions |

**Explicitly off the table for MVP:** Redis, Kafka, Elasticsearch, AWS services, Stripe, OAuth providers, microservices, WebSockets.

---

## Sprint Rules

- **Never implement outside the current sprint.** If a request touches a future sprint's scope, name the sprint it belongs to and decline to implement it now.
- **Never anticipate future sprints in current code.** Do not add hooks, abstractions, or placeholder structures for things that are not in the current sprint scope.
- **Scope is defined in `docs/ROADMAP.md`.** If a task is not in the current sprint's scope, say so explicitly before asking for confirmation to proceed.

---

## Engineering Rules

### What you must always do
- Fix existing errors before adding new features. A broken build is the highest priority.
- Verify that `tsc --noEmit` and `eslint` pass before declaring work done.
- Follow the naming, folder, and architecture conventions in `docs/CODING_STANDARDS.md` exactly.
- Write only what the current task requires. No speculative abstractions, no "while I'm here" refactors.
- Use the approved stack. If an approved library can do the job, use it. Do not introduce a new dependency without explicit approval.

### What you must never do
- **Never create mock data unless explicitly requested.** If data is needed for a UI, it comes from the API or a documented fixture.
- **Never over-engineer.** The simplest implementation that satisfies the sprint scope is the right one.
- **Never add TODO comments to committed code.** If something is incomplete, it does not ship.
- **Never bypass TypeScript strict mode.** No `any`, no `@ts-ignore`, no `as unknown as T` without a documented reason.
- **Never hardcode values** that belong in environment variables, constants, or design tokens.
- **Never modify the database directly.** All schema changes go through Prisma migrations.
- **Never use `!important` in styles** without a documented override justification.
- **Never route around the design system** by hardcoding one-off colors, font sizes, or spacing values.

---

## Architecture Rules

- The frontend communicates with the backend via REST only. No direct database access from the frontend.
- Controllers contain no business logic. Services contain business logic. Prisma is accessed through `PrismaService` only.
- Cross-module communication in NestJS goes through imported modules and their exported services — never through direct repository access into another module.
- Server Components are the default in Next.js. Client Components are used only when browser APIs, event listeners, or React state are required.
- State management: TanStack Query owns server state. Zustand owns shared client state. URL owns filter/pagination state. `useState` owns local ephemeral state.

---

## Quality Gates

Do not declare a task done until:

- [ ] TypeScript compiles without errors.
- [ ] ESLint reports zero warnings.
- [ ] All existing tests pass.
- [ ] New logic has tests.
- [ ] Loading, error, and empty states exist for any async operation.
- [ ] No `console.log`, `TODO`, or placeholder text remains in changed files.

---

## Sprint Deliverable Format

At the end of every sprint, provide a structured report with exactly these four sections:

### Completed Work
List every item from the sprint scope, with a one-line note on what was delivered. If something was descoped, say so and why.

### Remaining Work
List anything from the sprint scope that was not completed. Be specific about what is missing and why.

### Risks
List any technical risks, unresolved decisions, or known issues that could affect the next sprint. Be direct. Do not minimize risks.

### Next Sprint Recommendation
State whether the next sprint in `docs/ROADMAP.md` is ready to begin, or whether something must be resolved first. Include any suggested scope adjustments based on what was learned in the current sprint.

---

## Local Development Reference

| Service | URL / Connection |
|---|---|
| Frontend | `http://localhost:3000` |
| Backend | `http://localhost:4000` |
| PostgreSQL (Docker) | `localhost:5433` / `velora:velora@velora_db` |

Start order: `docker compose up -d postgres` → `npm run start:dev` (backend) → `npm run dev` (frontend).

The Prisma client is generated at `backend/generated/prisma/`. Run `prisma generate` after any schema change. Run `prisma migrate dev` to apply schema changes to the local database.

---

## Prisma 7 Notes

Prisma 7 does not read the database URL from `schema.prisma`. Configuration lives in `prisma.config.ts`. The `DATABASE_URL` is passed to `PrismaClient` in the NestJS `PrismaService` constructor. Do not add a `url` field to `schema.prisma`.
