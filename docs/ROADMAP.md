# Velora Roadmap

This document is the authoritative record of all approved sprints. Each sprint has a defined scope and a definition of done. Scope does not change mid-sprint without an explicit decision recorded here.

**Status key:** ✅ Done · ⏳ Planned · 🚧 In Progress · ❌ Blocked

---

## Sprint 0 — Project Foundation ✅

**Goal:** Establish the repository and collaboration infrastructure before any code is written.

**Scope:**
- Repository created with branch protection on `main` and `develop`
- `.gitignore`, `.editorconfig`, `LICENSE` committed
- GitHub Actions CI scaffold (placeholder pipeline)
- PR template and issue templates
- Folder structure defined: `frontend/`, `backend/`, `docs/`, `docker/`, `.github/`

**Definition of Done:** A collaborator can clone the repository and understand the project structure without running any code.

---

## Sprint 0.5 — Project Documentation ✅

**Goal:** Document the vision, stack, and architecture before implementation begins.

**Scope:**
- `README.md` — vision, stack table, architecture diagram, repo structure, development roadmap
- Stack finalized: Next.js 16, NestJS 11, Prisma 7, PostgreSQL 17, Material UI, Framer Motion, Zustand, TanStack Query
- Architecture decision: intentional monolith for MVP
- Payment decision: Cash on Delivery only for MVP
- Technologies explicitly deferred: Redis, Kafka, Elasticsearch, AWS, Stripe, OAuth providers

**Definition of Done:** The README communicates the full product and technical vision to a new contributor without any verbal explanation.

---

## Sprint 1.1 — Workspace Initialization ✅

**Goal:** Bootstrap both applications and verify the local development environment runs end to end.

**Scope:**
- Next.js 16 initialized (App Router, TypeScript strict, `src/` directory, `@/*` alias)
- NestJS 11 initialized (modular structure, TypeScript strict, ESLint, Prettier)
- Prisma 7 configured (`prisma.config.ts`, `schema.prisma` with PostgreSQL datasource, `generated/prisma/` output)
- Docker Compose configured: PostgreSQL 17-alpine on port 5433
- Frontend running on `localhost:3000`, backend on `localhost:4000`
- Both applications compile and start without errors

**Definition of Done:** `docker compose up`, `npm run dev` (frontend), and `npm run start:dev` (backend) all succeed. `curl localhost:4000` and `curl localhost:3000` both return 200.

---

## Sprint 1.2 — CI Pipeline & Environment Conventions ⏳

**Goal:** Establish the automated quality gates and environment variable conventions that all future sprints will rely on.

**Scope:**
- GitHub Actions workflow: lint, type-check, and build for both frontend and backend on every PR
- Environment variable conventions documented and `.env.example` files finalized
- `prisma generate` included in CI build step
- Branch naming and commit message conventions enforced (documented in `CODING_STANDARDS.md`)
- `CLAUDE.md` and `docs/` in place as reference for all future work

**Definition of Done:** A PR to `develop` triggers CI. All checks pass on a clean checkout. No environment-specific values are hardcoded in source files.

---

## Sprint 2 — Brand Identity & Design System ⏳

**Goal:** Establish the visual foundation that all UI sprints build on.

**Scope:**
- Material UI theme configured: color tokens, typography scale, spacing scale, shape, shadows
- Design tokens defined as TypeScript constants (`src/lib/tokens/`)
- Framer Motion animation constants defined (duration, easing, transition presets)
- Core UI primitives built and documented:
  - `Button` (primary, secondary, ghost, icon variants)
  - `Input` (text, password, with error state)
  - `Card` (base container)
  - `Layout` (page wrapper, section, container)
  - `Typography` (heading, body, label, caption variants)
- Dark mode supported from day one
- All primitives keyboard-accessible, ARIA-correct

**Definition of Done:** A developer can build any page using only the design system primitives and produce a result that matches the DESIGN_BIBLE visual language.

---

## Sprint 3 — Landing Page ⏳

**Goal:** Ship the public-facing entry point of the product.

**Scope:**
- Hero section with headline, subheadline, primary CTA, and 3D accent element
- Product highlights / feature section
- Navigation bar (logo, links, auth actions)
- Footer (links, brand statement)
- Fully responsive across mobile, tablet, and desktop breakpoints
- Deployed and passing Core Web Vitals thresholds

**Definition of Done:** The landing page renders correctly on all target breakpoints, passes Lighthouse accessibility audit (score ≥ 90), and loads within Core Web Vitals LCP target.

---

## Sprint 4 — Authentication ⏳

**Goal:** Implement the full identity layer: registration, login, email verification, and password reset.

**Scope:**

**Backend:**
- `UsersModule`: user entity, repository, service
- `AuthModule`: registration, login, JWT access + refresh token issuance
- Email verification flow: token generation, verification endpoint
- Password reset flow: token generation, reset endpoint
- Auth guard applied to protected routes via decorator
- Passwords hashed with bcrypt; tokens signed with asymmetric key or strong secret

**Frontend:**
- Registration form with validation
- Login form with validation
- Email verification page (token from URL)
- Password reset request form
- Password reset confirmation form
- Protected route middleware: redirect to login if unauthenticated
- Auth state in Zustand; tokens managed securely

**Definition of Done:** A user can register, verify their email, log in, access a protected page, and reset their password. Expired or invalid tokens produce appropriate error messages.

---

## Sprint 5 — Shop / Product Catalog ⏳

**Goal:** Enable users to browse, filter, and discover products.

**Scope:**

**Backend:**
- `ProductsModule`: product entity, category, variant model
- Endpoints: list products (with pagination), filter by category/price/size, get product by slug

**Frontend:**
- Product listing page (`/shop`)
- Category sidebar with filter controls
- Product card component (image, name, price, quick-view action)
- Pagination or infinite scroll (decision made at sprint start)
- URL-driven filters: category, price range, size — shareable and browser-back-compatible
- Loading skeleton states for all list views

**Definition of Done:** A user can navigate to `/shop`, filter by category and size, and see paginated results. Filters survive a page refresh via URL state.

---

## Sprint 6 — Product Detail Page ⏳

**Goal:** Present a single product with all information needed to make a purchase decision.

**Scope:**

**Backend:**
- Product detail endpoint: full product data including variants, images, stock per variant

**Frontend:**
- Product detail page (`/shop/[slug]`)
- Image gallery (primary image + thumbnail strip)
- Product name, description, price
- Size selector (variant-aware)
- Color/material selector
- Stock availability indicator
- "Add to Cart" action
- "Customize in 3D" CTA (navigates to Sprint 7 designer)
- Breadcrumb navigation

**Definition of Done:** A user can view a product, select a size and color, see stock availability, and add it to cart.

---

## Sprint 7 — 3D Designer ⏳

**Goal:** Deliver the core differentiating feature: real-time 3D garment customization.

**Scope:**
- React Three Fiber scene setup with environment lighting
- Load product GLB model from backend/storage
- Orbit controls (drag to rotate, pinch to zoom)
- Color picker mapped to material slots on the model
- Material type selector (matte, satin, denim, etc.) where applicable
- Real-time preview: changes reflect immediately without reload
- "Save Configuration" action stores selected color + material
- Configuration is passed to cart as part of the product item
- Performance budget enforced: 60fps target on mid-range devices
- Graceful fallback to image gallery when WebGL is unavailable

**Definition of Done:** A user can load a 3D model, change its color and material, see the change in real time, save the configuration, and add the customized product to cart.

---

## Sprint 8 — Cart ⏳

**Goal:** Implement persistent cart state with full item management.

**Scope:**
- Cart state managed in Zustand with localStorage persistence
- Add item (with variant + custom configuration)
- Update item quantity
- Remove item
- Clear cart
- Cart drawer (slide-in panel, accessible, closeable)
- Cart page (`/cart`) for full review
- Order summary: subtotal, item count, estimated delivery note
- Cart syncs to backend on login (guest → authenticated merge)

**Definition of Done:** A user can add multiple items (including customized ones), update quantities, and remove items. Cart contents persist after a page refresh. Logged-in users see their cart after returning to the site.

---

## Sprint 9 — Checkout ⏳

**Goal:** Enable a user to place an order with Cash on Delivery.

**Scope:**

**Backend:**
- `OrdersModule`: order entity, order items, status enum
- Create order endpoint: validate cart, reserve stock, create order record
- Address entity linked to user

**Frontend:**
- Checkout flow (single page or stepped):
  1. Shipping address form (name, address, city, phone)
  2. Order summary review (items, quantities, configurations)
  3. Payment method display (Cash on Delivery — read-only)
  4. Place Order button
- Order confirmation page with order number and summary
- Empty cart on successful order

**Definition of Done:** A user can complete checkout, receive an order number on the confirmation page, and find the order in the database with correct status and items.

---

## Sprint 10 — Order History ⏳

**Goal:** Give users visibility into their past and current orders.

**Scope:**

**Backend:**
- Get orders for authenticated user endpoint (paginated)
- Get single order detail endpoint
- Order status lifecycle: `pending → confirmed → processing → shipped → delivered`

**Frontend:**
- Order history page (`/account/orders`)
- Order list: order number, date, status, total
- Order detail page (`/account/orders/[id]`): full item list, shipping address, status timeline
- Status displayed with clear label and color (never color alone)

**Definition of Done:** A logged-in user can view all past orders, click into a specific order, and see the full detail including current status.

---

## Sprint 11 — Admin Panel ⏳

**Goal:** Enable internal management of products and orders without direct database access.

**Scope:**
- Admin role added to user model; admin guard for all admin routes
- Admin routes under `/admin` (protected)

**Product management:**
- List all products (with search)
- Create product (name, description, price, category, images, variants, GLB model upload)
- Edit product
- Delete product (soft delete)

**Order management:**
- List all orders (with filter by status)
- View order detail
- Update order status

**Inventory:**
- Stock count per variant visible on product edit

**Definition of Done:** An admin user can log in, create and edit a product (including uploading a 3D model), view all orders, and update order statuses.

---

## Sprint 12 — Production Polish ⏳

**Goal:** Harden the product for production: accessibility, performance, error handling, and security.

**Scope:**
- Accessibility audit across all flows; remediate all WCAG 2.1 AA failures
- Core Web Vitals audit; remediate any LCP, CLS, or INP regressions
- Error boundaries on all page and feature components
- Loading states on all async operations
- Empty states on all list views
- Form validation error messages reviewed for tone (calm, helpful)
- Security review:
  - Auth: token expiry, rotation, invalidation on logout
  - Input validation: all endpoints protected by DTOs with class-validator
  - HTTP headers: CORS, CSP, HSTS configured
  - Rate limiting on auth endpoints
- No `console.log`, `TODO`, or `FIXME` comments in production code

**Definition of Done:** All Lighthouse scores ≥ 90 (Performance, Accessibility, Best Practices). All WCAG 2.1 AA violations resolved. Security checklist signed off.

---

## Sprint 13 — Deployment ⏳

**Goal:** Deploy the application to a production environment and establish a repeatable deployment pipeline.

**Scope:**
- Production Dockerfiles for frontend and backend (multi-stage, minimal images)
- Production `docker-compose.yml` or deployment manifests
- Environment variable management for production (no secrets in source)
- GitHub Actions CD pipeline: build → test → deploy on merge to `main`
- Production database migration strategy (Prisma migrate deploy)
- Health check endpoints on backend (`/health`)
- Uptime monitoring configured
- Domain, SSL, and reverse proxy configured

**Definition of Done:** A push to `main` triggers the full CI/CD pipeline. The application is accessible at the production URL over HTTPS. Health checks pass. A rollback procedure is documented.

---

## Post-MVP Backlog

Items below are approved in concept but not scheduled. They are not touched until Sprint 13 ships.

| Feature | Notes |
|---|---|
| Online payment (Stripe) | Requires payment compliance review |
| OAuth login (Google) | Nice to have; not MVP |
| Product search (Elasticsearch) | Replace Prisma full-text at scale |
| Redis caching | Add when load profiling identifies the need |
| Email service (Resend / SES) | Replace inline SMTP |
| Customer reviews | Post-launch feature |
| Wishlist | Post-launch feature |
| Referral / loyalty program | Growth phase |
| Mobile app | Not in scope |
