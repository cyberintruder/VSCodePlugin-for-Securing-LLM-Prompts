# Review Workflow

Follow this workflow for every review. Do not jump directly to findings.

## Phase 1: Repository Understanding

Identify:

- Application purpose and main user flows.
- Frameworks, languages, package managers, and runtime.
- Authentication and authorization model.
- Data stores, queues, caches, object storage, and search indexes.
- External APIs, webhooks, SaaS integrations, and third-party services.
- Admin, support, batch, migration, and background-job paths.
- Cloud, container, Kubernetes, IaC, CI/CD, and AI components.

## Phase 2: Security Context

Document:

- Assets.
- Sensitive data classes.
- Actors and roles.
- Entry points.
- Trust boundaries.
- Privilege boundaries.
- Expected security controls.

## Phase 3: Applicable Rule Selection

Select only relevant rule packs. Examples:

- Web API: core API, authentication, authorization, input validation, logging, secrets.
- Kubernetes manifests: Kubernetes, container, supply chain.
- Terraform: cloud provider, IAM, secrets, network exposure, encryption.
- LLM app: AI security, prompt injection, RAG, tools, agents, data leakage.

## Phase 4: Source-To-Sink Review

Trace attacker-controlled input from source to:

- Validation and normalization.
- Authorization checks.
- Business logic decisions.
- Database, command, template, file, log, network, cloud, queue, and AI sinks.
- External output and user-visible response.

## Phase 5: Exploitability Validation

Before reporting, confirm:

- Attacker control exists.
- The path is reachable.
- Existing controls are absent, bypassable, or ineffective.
- The sink has security impact.
- A realistic attack scenario exists.

## Phase 6: Findings And Report

Report only security-relevant issues. Use the standard schema. Order by severity, then confidence, then exploitability.

If no confirmed findings exist, say so clearly and list review limitations.
