# KnowFlow Architecture

## Purpose

This document will describe the long-term architecture of KnowFlow as the system evolves from scaffold to production-grade SaaS application.

## Architectural Goals

- Isolate business logic from HTTP and framework concerns.
- Keep frontend, backend, infrastructure, and documentation responsibilities separate.
- Make security boundaries explicit.
- Design modules so features can be tested independently.
- Support future multi-tenant enterprise requirements.
- Keep deployment topology reproducible with Docker Compose during development.

## Planned Backend Layers

```text
API routes -> Application services -> Repositories -> Database
                 |
                 v
              Domain rules
```

API routes will be responsible for request validation, authentication context, and response mapping. Application services will coordinate use cases. Repositories will encapsulate persistence. Domain rules will remain independent of FastAPI and SQLAlchemy whenever practical.

## Planned Frontend Boundaries

```text
Routes -> Feature/UI components -> Hooks/query layer -> API clients
```

Route modules will compose screens. Components will focus on presentation and interaction. Hooks and TanStack Query functions will own server-state coordination. API clients will isolate HTTP details.

## Infrastructure Direction

The initial local platform is expected to include:

- PostgreSQL as the primary relational database.
- pgvector for semantic search indexes.
- Redis for caching and background workflow coordination.
- Backend and frontend containers once application foundations exist.

## Open Decisions

- Background job processor selection.
- Object storage provider for uploaded documents.
- Embedding provider and model strategy.
- Tenant isolation model.
- Production deployment target.
