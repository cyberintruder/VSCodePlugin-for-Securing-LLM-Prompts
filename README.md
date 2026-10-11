# SP-Secure-Code-Plugin

SP-Secure-Code-Plugin contains Secure Coding Framework v2, a reusable AI-assisted secure-coding and application security kit for GitHub Copilot, VS Code, Cursor, Claude Code, Cline, Windsurf, Gemini CLI, and similar coding assistants.

It turns an AI assistant from a generic checklist reader into a structured security reviewer that first understands architecture, then traces attacker-controlled data, validates exploitability, and reports evidence-backed findings with severity, confidence, CWE, OWASP, ASVS, CAPEC, and remediation guidance.

## What Is Included

- Root Copilot bootstrap instructions in `.github/copilot-instructions.md`.
- Prompt files for quick reviews, deep reviews, PR reviews, threat models, architecture reviews, AI security reviews, and fix validation.
- A modular framework under `.security-review/`.
- Core AppSec rules for authentication, authorization, input validation, API security, secrets, sessions, cryptography, logging, file handling, configuration, and business logic.
- Cloud and DevSecOps rules for AWS, Azure, GCP, Kubernetes, Docker, Terraform, CI/CD, and supply chain.
- AI security rules for LLM apps, prompt injection, RAG, agents, MCP, tools, and AI threat modeling.
- Technology packs for Java/Spring, .NET, Node.js, Python, Go, frontend apps, and mobile/Flutter.
- JSON schemas for findings and full reports.
- Example report data.
- A self-contained interactive HTML report template in `.security-review/templates/security-dashboard.html`.
- Compatibility entry points in the existing `security/`, `cloud/`, `ai-security/`, `standards/`, and `templates/` folders.

## Recommended Repository Layout

When using this framework inside an application repository, keep the Copilot bootstrap at the repository root:

```text
your-application/
  .github/
    copilot-instructions.md
    prompts/
  .security-review/
    framework-manifest.json
    workflow/
    rules/
    schemas/
    templates/
  src/
```

GitHub Copilot automatically discovers only the root `.github/copilot-instructions.md`. If this framework is copied into a nested folder, add a small root `.github/copilot-instructions.md` in the target repository that points Copilot to the nested framework.

## Quick Start

1. Copy this repository into the root of the codebase you want to review, or add it as a submodule.
2. Keep `.github/copilot-instructions.md` at the target repository root.
3. Open the target repository in VS Code.
4. Use a prompt from `.github/prompts/`, such as `deep-review.prompt.md` or `pr-review.prompt.md`.
5. Ask the assistant to output JSON matching `.security-review/schemas/report.schema.json`.
6. Render the result with `.security-review/templates/security-dashboard.html`.

See [SETUP.md](SETUP.md) for the developer setup and daily workflow.

## VS Code Extension

This repository now includes a Phase 1 standalone VS Code extension scaffold.

Available commands:

- `Security Review: Quick Review Current File`
- `Security Review: Deep Review Workspace`
- `Security Review: AI/LLM Security Review`
- `Security Review: Fix Validation Prompt`
- `Security Review: Open Dashboard`
- `Security Review: Open Framework Manifest`

Phase 1 is intentionally dependency-free. It generates AI-ready prompts from the embedded framework and opens the interactive dashboard as a VS Code Webview.

See [docs/vscode-extension-phase1.md](docs/vscode-extension-phase1.md).

Build and rebuild instructions are in [docs/build-and-rebuild-vscode-extension.md](docs/build-and-rebuild-vscode-extension.md).

## Review Philosophy

This framework intentionally avoids noisy static-checklist behavior.

The assistant must:

- Report security issues only when supported by visible code, configuration, logs, manifests, or review context.
- Mark incomplete evidence as `Potential Issue - Requires Verification`.
- Ignore naming, formatting, style, and maintainability unless they directly create security risk.
- Trace source-to-sink data flow before reporting injection, exposure, authorization, or unsafe tool-use findings.
- Include confidence and exploitability reasoning with every finding.

## Version

Current version: `2.0.3`

See [SECURITY_REVIEW_VERSION.md](SECURITY_REVIEW_VERSION.md).
