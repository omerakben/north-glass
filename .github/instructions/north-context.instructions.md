---
applyTo: "**"
---

> TEMPLATE (inactive). To activate: copy into a project at `.github/instructions/context.instructions.md` and change front matter `applyTo: "*"` (or a narrower glob like `src/**`).

# Project Context Template

<!--
This file contains PROJECT-SPECIFIC information only.
Keep it focused on WHAT (tech stack, conventions) not HOW (behaviors, patterns).
The HOW is handled by copilot-instructions.md
-->

## Technology Stack

<!-- Specify your project's technology choices -->

### Frontend

- Framework: <!-- e.g., Next.js 14, React 18, Vue 3, Angular 17 -->
- UI Library: <!-- e.g., Tailwind CSS, Material-UI, Ant Design -->
- State Management: <!-- e.g., Redux, Zustand, Context API -->
- Build Tool: <!-- e.g., Vite, Webpack, Turbopack -->

### Backend

- Language: <!-- e.g., Node.js, Python, Java, Go -->
- Framework: <!-- e.g., Express, FastAPI, Spring Boot, Gin -->
- Database: <!-- e.g., PostgreSQL, MongoDB, Redis -->
- Authentication: <!-- e.g., JWT, OAuth2, Auth0 -->

### Infrastructure

- Hosting: <!-- e.g., AWS, Vercel, Railway, Heroku -->
- CI/CD: <!-- e.g., GitHub Actions, GitLab CI, Jenkins -->
- Monitoring: <!-- e.g., Sentry, DataDog, New Relic -->
- Container: <!-- e.g., Docker, Kubernetes -->
- Orchestration: <!-- e.g., ECS, Nomad, AKS, EKS, GKE -->
- Messaging: <!-- e.g., Kafka, RabbitMQ, SQS, NATS -->
- Caching: <!-- e.g., Redis, Memcached, CDN Provider -->
- Search: <!-- e.g., Elasticsearch, OpenSearch, Meilisearch, Algolia -->
- Feature Flags: <!-- e.g., LaunchDarkly, Unleash -->
- Secrets Mgmt: <!-- e.g., Vault, SSM Parameter Store, Secret Manager -->

## Project Conventions

<!-- Your team's specific standards -->

### Code Style

- Naming: <!-- e.g., camelCase for functions, PascalCase for components -->
- File structure: <!-- e.g., feature-based, layer-based -->
- Import order: <!-- e.g., external, internal, styles -->
- Comment style: <!-- e.g., JSDoc, inline, block -->

### Git Workflow

- Branch naming: <!-- e.g., feature/*, bugfix/*, hotfix/* -->
- Commit format: <!-- e.g., conventional commits, gitmoji -->
- PR process: <!-- e.g., review requirements, CI checks -->

### API Standards

- Style: <!-- e.g., RESTful, GraphQL, gRPC -->
- Versioning: <!-- e.g., URL path, header, query param -->
- Error format: <!-- e.g., problem+json, custom schema -->
- Documentation: <!-- e.g., OpenAPI, GraphQL schema -->
- Rate Limiting: <!-- strategy/tool e.g., token bucket, Envoy, NGINX -->
- Pagination Pattern: <!-- e.g., cursor, offset-limit, keyset -->
- Idempotency Strategy: <!-- e.g., idempotency keys, safe PUT semantics -->

## Constraints & Requirements

<!-- Non-negotiable project requirements -->

### Performance

- Load time: <!-- e.g., < 3s initial, < 1s subsequent -->
- API response: <!-- e.g., p99 < 200ms -->
- Bundle size: <!-- e.g., < 500KB initial -->
- Throughput Targets: <!-- e.g., X req/s sustained -->
- Concurrency Constraints: <!-- e.g., DB connection cap 50 -->
- Latency Budgets: <!-- e.g., cache lookups <5ms -->

### Browser Support

- Minimum versions: <!-- e.g., Chrome 90+, Safari 14+ -->
- Mobile support: <!-- e.g., iOS 14+, Android 10+ -->
- Accessibility: <!-- e.g., WCAG 2.1 AA -->

### Security

- Compliance: <!-- e.g., GDPR, HIPAA, SOC2 -->
- Authentication: <!-- e.g., MFA required, SSO -->
- Data encryption: <!-- e.g., at rest, in transit -->
- Data Classification: <!-- e.g., Public, Internal, Confidential, Restricted -->
- PII Handling Rules: <!-- brief statement -->
- Threat Model Notes: <!-- high-level assets & primary threats -->

### Dependencies

- Approved packages: <!-- List of allowed libraries -->
- Restricted packages: <!-- List of prohibited libraries -->
- Version policy: <!-- e.g., LTS only, security updates -->
- Update Cadence: <!-- e.g., monthly minor, quarterly major review -->
- License Constraints: <!-- e.g., disallow AGPL -->

## Domain Knowledge

<!-- Business context and terminology -->

### Business Context

- Industry: <!-- e.g., FinTech, HealthTech, E-commerce -->
- Users: <!-- e.g., B2B SaaS, Consumer app -->
- Scale: <!-- e.g., 10K MAU, 1M requests/day -->
- Geographic Footprint: <!-- e.g., EU/US multi-region, single region -->
- SLAs (External): <!-- e.g., 99.9% uptime -->
- SLOs (Internal): <!-- e.g., 99.95% availability, <1% error rate -->

### Core Features

<!-- Key functionality areas -->

1. <!-- e.g., User authentication and profiles -->
2. <!-- e.g., Payment processing -->
3. <!-- e.g., Real-time notifications -->
4. <!-- Add more lines as needed -->

### Technical Debt

<!-- Known issues to be aware of -->

- <!-- e.g., Legacy auth system being migrated -->
- <!-- e.g., Database schema needs optimization -->
- <!-- e.g., Test coverage below 60% -->
- <!-- e.g., Monolith boundaries unclear -->
- <!-- e.g., Observability gaps (missing traces) -->

### Roadmap

<!-- Upcoming changes that affect development -->

- Q1: <!-- e.g., Migrate to TypeScript -->
- Q2: <!-- e.g., Implement micro-frontends -->
- Q3: <!-- e.g., Add GraphQL API -->
- Q4: <!-- e.g., Multi-region failover -->

## Environment Variables

<!-- Required configuration -->

```env
# Example environment variables (don't commit actual values)
DATABASE_URL=
API_KEY=
AUTH_SECRET=
```

## Quick Start Commands

<!-- Common development commands -->

```bash
# Install dependencies
npm install  # or yarn, pnpm, etc.

# Development
npm run dev

# Testing
npm run test

# Build
npm run build

# Deploy
npm run deploy
```

## Important Links

<!-- Project resources -->

- Documentation: <!-- URL -->
- Design System: <!-- URL -->
- API Reference: <!-- URL -->
- Deployment Guide: <!-- URL -->
- Runbook Index: <!-- URL -->
- Incident Guide: <!-- URL -->
- Architecture Decision Records: <!-- URL or path -->

## Architectural Constraints

<!-- Non-negotiable technical boundaries (e.g., Must remain stateless between requests; No direct DB access from edge functions; Only allow async processing via queue X) -->

## Data Model Highlights

<!-- List critical entities & brief purpose (User, Subscription, Invoice, AuditLog) -->

## Integration Matrix

<!-- External/internal systems: Name | Type (API/webhook/queue) | Direction (in/out/bidi) | Auth (OAuth2, HMAC) | Retry policy -->

## Observability Baseline

<!-- Logging standards (levels), Metrics (key counters/gauges), Tracing coverage %, Alerting thresholds -->

## Reliability & Resilience

<!-- Retry/backoff strategy, Circuit breaker config, Graceful degradation paths -->

## Internationalization / Localization

<!-- Supported locales, default timezone, number/date format considerations -->

## Accessibility Targets

<!-- WCAG level, testing tools (e.g., axe), keyboard nav requirements -->

## Prompt Mapping (Reference Only)

<!--
Link how sections feed universal prompts (pure mapping; keep WHAT, not HOW):
 - /analyze: Technology Stack, Technical Debt, Architectural Constraints
 - /design: Architectural Constraints, Data Model Highlights, Integration Matrix, Reliability & Resilience
 - /implement: Core Features, Dependencies, Environment Variables
 - /validate: Performance, SLAs/SLOs, Observability Baseline
 - /security: Security, Data Classification, Integration Matrix
 - /performance: Performance, Observability Baseline, Reliability & Resilience
 - /research: Roadmap, Business Context trends
 - /adaptive: ALL sections (auto synthesis)
-->

## Domain Glossary

<!-- Term | Definition (Keep concise; supports consistent language) -->

## Risk Register (Top 5 Active)

<!-- ID | Risk | Impact | Mitigation | Owner -->

## Compliance Notes

<!-- Data residency, audit log retention policy, privacy requests handling SLA -->

## Decommissioning / Sunset Considerations

<!-- Known legacy modules scheduled for removal + tentative dates -->

## Filling Guidance (Comment Only)

<!--
Aim for brevity. Omit empty sections rather than leaving placeholders in committed version.
Avoid secrets; reference env vars instead.
Review quarterly or upon major architectural change.
-->

---

<!--
Remember: This is an inactive template. After copying into a project and
activating (adding applyTo), keep it factual (WHAT), omit behavioral HOW.
-->
