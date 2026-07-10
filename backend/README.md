# Velora — Backend

REST API powering the Velora platform. Built with NestJS and Prisma, backed by PostgreSQL.

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Runtime | Node.js | 20+ |
| Framework | NestJS | 11 |
| Language | TypeScript | 5.7 |
| ORM | Prisma | 7 |
| Database | PostgreSQL | 17 |
| Linter | ESLint + Prettier | 9 / 3 |

---

## Prerequisites

Ensure the following are installed before proceeding:

- [Node.js](https://nodejs.org) v20 or higher
- [npm](https://www.npmjs.com) v9 or higher
- [Docker Desktop](https://www.docker.com/products/docker-desktop) (for PostgreSQL)

---

## Installation

**1. Clone the repository**

```bash
git clone <repository-url>
cd velora
```

**2. Set up environment variables**

```bash
cp backend/.env.example backend/.env
```

Open `backend/.env` and fill in the values. For local development the defaults in `.env.example` work out of the box with the Docker Compose setup.

**3. Start the database**

```bash
docker compose up -d
```

Wait until the container status shows `(healthy)`:

```bash
docker compose ps
```

**4. Install dependencies**

```bash
cd backend
npm install
```

**5. Generate the Prisma client**

```bash
npx prisma generate
```

**6. Sync the schema to the database**

```bash
npx prisma db push
```

**7. Start the development server**

```bash
npm run start:dev
```

The API is available at **`http://localhost:4000`**.

---

## Environment Variables

Copy `.env.example` to `.env` and adjust as needed.

| Variable | Description | Example |
|---|---|---|
| `PORT` | Port the NestJS server listens on | `4000` |
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://velora:velora@localhost:5433/velora_db` |

> **Note:** The Docker Compose setup maps PostgreSQL to port **5433** on the host (not 5432) to avoid conflicts with any locally installed PostgreSQL instance.

---

## Run PostgreSQL with Docker

All database commands are run from the **project root** (not `backend/`).

```bash
# Start (detached)
docker compose up -d

# Check status
docker compose ps

# Stop
docker compose down

# Stop and remove all data
docker compose down -v
```

---

## Run Backend

All `npm` commands are run from the `backend/` directory.

```bash
# Development (watch mode)
npm run start:dev

# Debug mode
npm run start:debug

# Production (requires a prior build)
npm run build
npm run start:prod
```

---

## Prisma Commands

```bash
# Generate the Prisma client after schema changes
npx prisma generate

# Sync the Prisma schema to the database (no migration history)
npx prisma db push

# Create and apply a migration (use during feature development)
npx prisma migrate dev --name <migration-name>

# Apply pending migrations (CI / production)
npx prisma migrate deploy

# Open the visual database browser
npx prisma studio
```

> **Prisma 7 note:** Connection URL is configured in `prisma.config.ts`, not in `schema.prisma`. The `url` field has been removed from the datasource block in Prisma 7.

---

## Build

```bash
npm run build
```

Compiled output is written to `dist/`. The `dist/` directory is gitignored.

---

## Test

```bash
# Unit tests
npm run test

# Unit tests in watch mode
npm run test:watch

# Unit tests with coverage report
npm run test:cov

# End-to-end tests
npm run test:e2e
```

---

## Lint & Format

```bash
# Lint and auto-fix
npm run lint

# Format with Prettier
npm run format
```

---

## Project Structure

```
backend/
├── src/
│   ├── app.controller.ts       # Root route handler
│   ├── app.controller.spec.ts  # Unit tests for root controller
│   ├── app.module.ts           # Root application module
│   ├── app.service.ts          # Root service
│   └── main.ts                 # Application entry point
├── test/
│   └── app.e2e-spec.ts         # End-to-end test suite
├── prisma/
│   └── schema.prisma           # Prisma schema (models added in Sprint 4+)
├── generated/
│   └── prisma/                 # Generated Prisma client — gitignored
├── prisma.config.ts            # Prisma 7 TypeScript configuration
├── nest-cli.json               # NestJS CLI configuration
├── tsconfig.json               # TypeScript compiler options
├── tsconfig.build.json         # TypeScript build options
├── .env                        # Local environment variables — gitignored
├── .env.example                # Environment variable template
└── package.json
```

---

## Troubleshooting

**`P1010: User was denied access` from Prisma**

The Docker container is either not running or not yet healthy.

```bash
docker compose ps        # Check status — must show (healthy)
docker compose up -d     # Start if not running
```

**`EADDRINUSE: Port 4000 already in use`**

Another process is occupying port 4000. Find and stop it:

```bash
lsof -i :4000
kill -9 <PID>
```

**`Cannot find module './generated/prisma'`**

The Prisma client has not been generated yet.

```bash
npx prisma generate
```

**`Port 5432` vs `Port 5433`**

This project's Docker PostgreSQL is intentionally bound to **5433** because port 5432 may already be occupied by a locally installed PostgreSQL instance. Verify your `DATABASE_URL` uses port `5433`.

**Changes to `prisma/schema.prisma` are not reflected**

Run both commands after every schema change:

```bash
npx prisma generate    # Regenerates the client
npx prisma db push     # Applies changes to the database
```
