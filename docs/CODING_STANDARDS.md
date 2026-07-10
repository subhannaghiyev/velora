# Velora Coding Standards

This document defines the engineering rules for the Velora codebase. All contributors — human and AI — follow these conventions without exception. When in doubt, prefer consistency with what already exists over personal preference.

---

## 1. Naming Conventions

### General
- Names communicate intent. If a name requires a comment to explain it, the name is wrong.
- Abbreviations are avoided unless the abbreviation is universally understood (`id`, `url`, `dto`, `api`).

### TypeScript
| Construct | Convention | Example |
|---|---|---|
| Variables and functions | `camelCase` | `getUserById`, `cartItems` |
| React components | `PascalCase` | `ProductCard`, `CartDrawer` |
| TypeScript interfaces | `PascalCase`, no `I` prefix | `User`, `ProductVariant` |
| TypeScript types | `PascalCase` | `ApiResponse<T>`, `CartItem` |
| Enums | `PascalCase` (name), `SCREAMING_SNAKE_CASE` (values) | `OrderStatus.PENDING` |
| Constants (module-level) | `SCREAMING_SNAKE_CASE` | `MAX_CART_ITEMS`, `JWT_EXPIRY` |
| Boolean variables | `is`, `has`, `can`, `should` prefix | `isLoading`, `hasError`, `canCheckout` |
| Event handlers | `handle` prefix | `handleSubmit`, `handleQuantityChange` |

### Files and Folders
| Type | Convention | Example |
|---|---|---|
| React component files | `PascalCase.tsx` | `ProductCard.tsx` |
| Hook files | `camelCase.ts` with `use` prefix | `useCart.ts` |
| Utility files | `camelCase.ts` | `formatPrice.ts` |
| NestJS files | `kebab-case.<type>.ts` | `auth.service.ts`, `create-user.dto.ts` |
| Test files | same name + `.spec.ts` / `.test.ts` | `auth.service.spec.ts` |
| Type definition files | `camelCase.types.ts` | `api.types.ts` |

### API Routes
- Snake_case is never used in URLs. Hyphens separate words: `/api/v1/product-categories`.
- Resource names are plural nouns: `/users`, `/products`, `/orders`.
- Actions that are not CRUD use verb-noun: `/auth/refresh-token`, `/orders/:id/cancel`.

---

## 2. Folder Organization

### Frontend (`frontend/src/`)

```
src/
├── app/                    # Next.js App Router — routes and layouts only
│   └── (route-groups)/
├── components/             # Design system primitives (Button, Input, Card, etc.)
│   └── ui/
├── features/               # Feature-scoped components and hooks
│   └── <feature>/
│       ├── components/
│       ├── hooks/
│       └── types.ts
├── hooks/                  # Shared, feature-agnostic hooks
├── lib/                    # API client, utilities, constants, tokens
│   ├── api/
│   └── tokens/
├── store/                  # Zustand store slices (one file per domain)
└── types/                  # Shared TypeScript types
```

**Rules:**
- `app/` contains only layouts, pages, and route files. No business logic, no component definitions.
- Design system primitives live in `components/`. They have no feature dependencies.
- Feature-specific components live in `features/<feature>/components/`. They may use design system components but never import from other feature directories.
- Zustand stores are one file per domain in `store/`. No single global store file.

### Backend (`backend/src/`)

```
src/
├── modules/                # Feature modules
│   └── <feature>/
│       ├── <feature>.module.ts
│       ├── <feature>.controller.ts
│       ├── <feature>.service.ts
│       └── dto/
│           ├── create-<feature>.dto.ts
│           └── update-<feature>.dto.ts
├── common/                 # Shared across modules
│   ├── decorators/
│   ├── filters/
│   ├── guards/
│   ├── interceptors/
│   └── pipes/
├── prisma/                 # PrismaModule and PrismaService
└── main.ts
```

**Rules:**
- One folder per module, one module per domain. No exceptions.
- Services do not reach into other modules' private internals — they import the other module and use its exported service.
- `common/` contains infrastructure concerns only (auth guard, global exception filter, validation pipe). No business logic.

---

## 3. Component Rules

### Frontend Components
- Every component has a single, named export. No anonymous default exports for components.
- Props are defined as a TypeScript `interface` directly above the component. No inline type literals in the function signature.
- Components do not manage data fetching. Data flows in via props or is accessed through a hook. Components render.
- A component file that exceeds ~200 lines is a signal to split.
- No inline styles. Styling goes through the Material UI `sx` prop or the theme. One-off hardcoded values are not permitted.
- Client Components (`'use client'`) are used only when the component requires browser APIs, event handlers, or React state. Everything else is a Server Component by default.

### NestJS Controllers
- Controllers handle routing and request/response mapping only. No business logic.
- Every endpoint uses a DTO for input. Raw `body` access without a DTO is not permitted.
- Every endpoint has an explicit HTTP method decorator and a documented response status.
- Auth guard is applied at the controller class level; public endpoints are marked explicitly with a `@Public()` decorator.

---

## 4. API Rules

### Request/Response
- All request bodies are validated via `class-validator` DTOs with Nest's `ValidationPipe` enabled globally.
- All responses follow a consistent shape. Endpoints do not return raw Prisma model objects — they return mapped DTOs or response classes.
- Paginated list responses always include `data`, `total`, `page`, and `limit` fields.

### Error Responses
All error responses conform to:
```json
{
  "statusCode": 400,
  "message": "Human-readable description",
  "errors": [
    { "field": "email", "message": "must be a valid email" }
  ]
}
```
- `errors` is omitted when there are no field-level errors (e.g., 404 responses).
- Error messages are written in sentence case and end with a period. They are calm and actionable.

### HTTP Status Codes
| Situation | Code |
|---|---|
| Successful read | 200 |
| Successful creation | 201 |
| Successful update with no body | 204 |
| Validation failure | 400 |
| Unauthenticated | 401 |
| Authenticated but forbidden | 403 |
| Resource not found | 404 |
| Conflict (duplicate) | 409 |
| Server error | 500 |

---

## 5. Error Handling

### Frontend
- All TanStack Query errors are handled at the query level with an `onError` callback or `error` state — not with try/catch in components.
- Every page and major feature has an error boundary. Errors do not propagate to the root and crash the full application.
- Every async action in a Client Component has a loading state and an error state. Neither state is silent.
- Error messages shown to users are written for users, not developers. Stack traces and technical details are logged to the console, not displayed in the UI.

### Backend
- Services throw typed NestJS exceptions (`NotFoundException`, `BadRequestException`, `ConflictException`). They do not throw generic `Error`.
- A global exception filter catches all unhandled exceptions, logs them, and returns a consistent error response shape.
- Prisma errors are caught at the service level and translated to appropriate HTTP exceptions before reaching the controller.
- All unhandled promise rejections are caught and logged.

---

## 6. Git Commit Convention

Commits follow [Conventional Commits](https://www.conventionalcommits.org/).

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Types:**
| Type | Use |
|---|---|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation only |
| `style` | Formatting, no logic change |
| `refactor` | Code restructure, no behavior change |
| `test` | Adding or updating tests |
| `chore` | Tooling, config, dependencies |
| `perf` | Performance improvement |
| `ci` | CI/CD configuration |

**Scopes** (use the feature or layer): `auth`, `products`, `cart`, `orders`, `admin`, `3d`, `design-system`, `api`, `db`, `ci`

**Rules:**
- Description is lowercase, imperative mood, no period at the end. "add refresh token rotation", not "Added refresh token rotation."
- Subject line is 72 characters or fewer.
- Breaking changes are marked with `!` after the type/scope: `feat(auth)!: change token response shape`
- No merge commits on `main` or `develop`. Rebase before merging.

**Branch naming:** `type/short-description` — e.g., `feat/auth-login`, `fix/cart-quantity-bug`, `chore/update-prisma`

---

## 7. Code Review Checklist

Before approving a PR, verify:

**Correctness**
- [ ] The code does what the PR description says it does.
- [ ] Edge cases and error paths are handled.
- [ ] No data can be lost or corrupted by the change.

**Design**
- [ ] The change fits the established architecture (no layer violations).
- [ ] No logic has been added to a layer that doesn't own it (e.g., business logic in a controller).
- [ ] New components follow the component rules.

**Quality**
- [ ] All new code follows naming conventions.
- [ ] No hardcoded values that should be constants or environment variables.
- [ ] No `console.log`, `TODO`, `FIXME`, or commented-out code left in.
- [ ] No unnecessary dependencies added.

**Tests**
- [ ] New service logic has unit tests.
- [ ] Critical flows have integration tests.
- [ ] All existing tests pass.

**Security**
- [ ] All user inputs are validated.
- [ ] Protected endpoints require authentication.
- [ ] No secrets or credentials in source code.

**Performance**
- [ ] No N+1 database queries introduced.
- [ ] No new large dependencies without bundle impact justification.

---

## 8. Testing Expectations

### Unit Tests
- NestJS services are unit-tested in isolation. Dependencies are mocked.
- Utility functions and custom hooks have unit tests.
- Coverage target: 80% for service layer.

### Integration Tests
- Auth flows are integration-tested against a real database (test database).
- Critical API endpoints have integration tests: happy path + key error cases.
- Prisma is not mocked in integration tests.

### End-to-End Tests
- E2E tests are not required for the MVP. They are introduced in Sprint 12 for critical user paths (registration, login, add to cart, checkout).

### What is not tested
- Presentational components with no logic (snapshot tests have no value here).
- Framework internals (NestJS routing, Prisma query building).
- Third-party library behavior.

### Test file location
- Backend: colocated with the file under test (`auth.service.spec.ts` next to `auth.service.ts`).
- Frontend: colocated with the component (`ProductCard.test.tsx` next to `ProductCard.tsx`).

---

## 9. Definition of Done

A piece of work is done when **all** of the following are true:

- [ ] The feature works as described in the sprint scope.
- [ ] The code compiles without TypeScript errors (`tsc --noEmit`).
- [ ] ESLint passes with zero warnings.
- [ ] All existing tests pass.
- [ ] New logic has corresponding tests.
- [ ] There are no `console.log`, `TODO`, or placeholder strings in the changed files.
- [ ] The PR has been reviewed and approved.
- [ ] CI checks pass on the PR branch.
- [ ] The feature has been manually tested against the acceptance criteria in the sprint definition.
- [ ] Loading, error, and empty states are implemented for any async operation introduced.
- [ ] The change does not introduce any WCAG 2.1 AA regressions (for UI changes).
