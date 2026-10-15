# KnowFlow

KnowFlow is an Enterprise AI Knowledge Platform for securely uploading internal documents and interacting with them using AI.

This repository is intended to grow into a production-grade SaaS application with clean architecture, strong security boundaries, maintainable modules, and excellent developer experience.

## Current Status

Project scaffold only.

No authentication, document ingestion, AI workflows, API routes, database models, or business logic have been implemented yet.

## Technology Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- TanStack Query
- shadcn/ui

### Backend

- Python
- FastAPI
- SQLAlchemy 2.x
- Alembic
- Pydantic v2

### Platform

- PostgreSQL
- pgvector
- Redis
- Docker
- Docker Compose
- pytest

## Repository Layout

```text
knowflow/
  backend/              FastAPI application, domain modules, database, tests
  frontend/             React application and UI layer
  docs/                 Architecture, roadmap, and engineering documentation
  infrastructure/       Docker Compose and deployment scaffolding
  .github/workflows/    CI workflow definitions
```

## Engineering Principles

- Keep business logic outside API route handlers.
- Prefer explicit module boundaries over large shared files.
- Use type hints and typed contracts throughout the codebase.
- Keep infrastructure concerns separate from application code.
- Prefer composition over inheritance.
- Make every feature testable by design.
- Avoid unnecessary abstractions until the codebase needs them.
- Treat security, maintainability, and developer experience as first-class requirements.

## Local Development

Runtime setup will be added after the initial backend and frontend foundations are implemented.

The Docker Compose files currently exist as placeholders for the future application, database, vector search, and cache services.

## Documentation

- [Architecture](docs/architecture.md)
- [Roadmap](docs/roadmap.md)

## License

This project is licensed under the Apache License 2.0. See [LICENSE](LICENSE).
