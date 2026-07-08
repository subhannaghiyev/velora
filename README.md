# VELORA

> **Wear Your Identity.**

Velora is a premium fashion platform that allows users to personalize clothing through an immersive 3D experience. The product is designed to feel like an experience rather than a traditional online store — shoppers design, personalize, and claim garments as their own before they ever reach checkout.

---

## Vision

Most fashion platforms are catalogues. Velora is a canvas.

The core idea is simple: give every shopper the ability to interact with a garment in three dimensions, swap materials, add personal touches, and see the result in real time — before placing an order. The 3D designer is not a feature bolted on top of a store; it is the store.

The MVP establishes the full vertical: identity, discovery, personalization, and order placement. Everything is scoped to deliver that experience with production-grade quality from day one.

---

## Technology Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js (App Router), TypeScript |
| 3D Rendering | React Three Fiber, Three.js |
| UI | Material UI, Framer Motion |
| State & Data | Zustand, TanStack Query |
| Backend | NestJS |
| ORM | Prisma |
| Database | PostgreSQL |
| Auth | JWT, Email Verification, Password Reset |
| Infrastructure | Docker, GitHub Actions |

---

## Architecture

```
┌──────────────────────────────┐
│      Next.js Frontend        │
│  App Router · RSC · Three.js │
└──────────────┬───────────────┘
               │ REST API
┌──────────────▼───────────────┐
│       NestJS Backend         │
│   Modules · Guards · DTOs    │
└──────────────┬───────────────┘
               │
┌──────────────▼───────────────┐
│          Prisma ORM          │
└──────────────┬───────────────┘
               │
┌──────────────▼───────────────┐
│         PostgreSQL           │
└──────────────────────────────┘
```

The architecture is intentionally monolithic for the MVP. Every layer is clearly separated by module boundaries, making it straightforward to extract individual services into a microservices topology in a future release if scale demands it.

**Payment:** The MVP supports Cash on Delivery only. Online payment integration is planned for a future release.

---

## Repository Structure

```
velora/
├── frontend/          # Next.js application
├── backend/           # NestJS application
├── docs/              # Architecture decisions, API specs, diagrams
├── docker/            # Compose files and Dockerfile templates
├── .github/
│   ├── workflows/     # GitHub Actions CI/CD pipelines
│   └── ISSUE_TEMPLATE/
├── README.md
├── LICENSE
├── .gitignore
└── .editorconfig
```

---

## Repository Philosophy

- **Sprint-based development.** Work is planned and delivered in focused, time-boxed sprints. Each sprint has a clear scope and a definition of done.
- **Production-ready code only.** Nothing is merged unless it meets the quality bar that would be acceptable in a live environment.
- **Small iterative milestones.** Each sprint ships something complete and working — not a half-finished feature waiting on a future sprint.
- **No placeholder implementations.** If it ships, it works. Stubs and TODO-driven commits do not belong on `main`.
- **Clean architecture.** Clear boundaries between layers. Backend modules do not bleed into each other; the frontend does not bypass the API.
- **Maintainability first.** Code is written to be read, extended, and debugged by future contributors, not optimized for the shortest path to done.

---

## Development Roadmap

### Sprint 0 — Project Foundation
- [x] Repository structure, `.gitignore`, `.editorconfig`, `LICENSE`
- [x] GitHub Actions CI scaffold
- [x] PR and issue templates

### Sprint 0.5 — Project Documentation
- [x] Vision, stack, architecture, philosophy, and roadmap documented
- [x] Repository structure finalized before any code is written

### Sprint 1 — Project Initialization
- [ ] Next.js project init (App Router, TypeScript, strict mode)
- [ ] NestJS project init (modular structure)
- [ ] Prisma configured, initial schema, first migration
- [ ] Docker Compose for local development (app containers + PostgreSQL)
- [ ] CI pipeline wired up (lint, type-check, build)
- [ ] Environment variable conventions established

### Sprint 2 — Brand Identity & Design System
- [ ] Color palette, typography, and spacing tokens
- [ ] Material UI theme configured
- [ ] Core UI primitives (Button, Input, Card, Layout)
- [ ] Framer Motion animation constants

### Sprint 3 — Landing Page
- [ ] Hero section with 3D accent
- [ ] Product highlights
- [ ] Navigation and footer
- [ ] Fully responsive

### Sprint 4 — Authentication
- [ ] Registration with email verification
- [ ] Login with JWT (access + refresh tokens)
- [ ] Password reset flow
- [ ] Protected route middleware (frontend + backend)

### Sprint 5 — Shop
- [ ] Product listing page
- [ ] Category and filter sidebar
- [ ] Pagination / infinite scroll
- [ ] Product card component

### Sprint 6 — Product Details
- [ ] Product detail page
- [ ] Image gallery
- [ ] Size and variant selection
- [ ] Add to cart action

### Sprint 7 — 3D Designer
- [ ] Three.js scene setup in React Three Fiber
- [ ] Load product GLB model
- [ ] Color and material swap
- [ ] Real-time preview
- [ ] Save custom configuration

### Sprint 8 — Cart
- [ ] Cart state with Zustand
- [ ] Add, update, remove items
- [ ] Cart drawer / page
- [ ] Persist cart across sessions

### Sprint 9 — Checkout (Cash on Delivery)
- [ ] Shipping address form
- [ ] Order summary review
- [ ] Place order (Cash on Delivery)
- [ ] Confirmation screen

### Sprint 10 — Orders
- [ ] Order history page (user)
- [ ] Order detail view
- [ ] Order status lifecycle (backend)

### Sprint 11 — Admin Panel
- [ ] Product management (CRUD)
- [ ] Order management and status updates
- [ ] Basic inventory overview

### Sprint 12 — Production Polish
- [ ] Accessibility audit
- [ ] Performance audit (Core Web Vitals)
- [ ] Error handling and loading states across all flows
- [ ] Security review (auth, input validation, headers)

### Sprint 13 — Deployment
- [ ] Production Docker build
- [ ] Environment configuration for production
- [ ] CI/CD deployment pipeline
- [ ] Go-live

---

## Getting Started

> Setup instructions will be added at the end of Sprint 1 once both applications are initialized.

---

## Contributing

1. Branch from `develop` using the convention `type/short-description` (e.g. `feat/auth-login`).
2. Commit messages follow `type(scope): description` (e.g. `feat(auth): add refresh token rotation`).
3. Open a pull request against `develop` and complete the PR template.
4. All CI checks must pass. No exceptions.

---

## License

[MIT](LICENSE) © 2026 Velora
