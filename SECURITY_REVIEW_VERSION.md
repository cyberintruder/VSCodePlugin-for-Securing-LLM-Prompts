# Security Review Framework Version

Version: `2.0.0`

Release date: `2026-06-29`

Compatibility:

- GitHub Copilot Chat and Copilot coding agent
- VS Code prompt files
- Cursor, Claude Code, Cline, Windsurf, Gemini CLI, and other assistants that can read repository files
- Static use in repositories without a backend service

## v2 Goals

Security Review Framework v2 upgrades the starter checklist into a reusable security review system:

- Modular repository structure.
- Root Copilot bootstrap instructions.
- Multi-stage review workflow.
- Source-to-sink analysis.
- Threat modeling and trust-boundary review.
- Exploitability and confidence scoring.
- AI, cloud, Kubernetes, IaC, CI/CD, and supply-chain coverage.
- Structured JSON output.
- Interactive self-contained HTML reporting.

## Compatibility Policy

The `.security-review/` folder is the source of truth for v2. Existing top-level folders are retained as compatibility entry points and should point readers back to `.security-review/`.

Breaking changes to schema fields should require a major version bump.
