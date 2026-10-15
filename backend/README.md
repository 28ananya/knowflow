# KnowFlow Backend

FastAPI backend scaffold for KnowFlow.

## Intended Structure

```text
backend/
  app/
    api/            HTTP route modules and request boundary concerns
    core/           Configuration, security primitives, and shared app setup
    db/             SQLAlchemy session and database integration
    models/         SQLAlchemy ORM models
    repositories/   Persistence abstractions
    schemas/        Pydantic request and response contracts
    services/       Business use cases and application services
  migrations/       Alembic migrations
  tests/            pytest test suite
```

## Current Status

Scaffold only. No API routes, authentication, database models, or business logic are implemented yet.
