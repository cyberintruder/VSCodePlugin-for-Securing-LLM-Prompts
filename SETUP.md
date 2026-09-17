# Developer Setup Guide

This guide explains how to install and use Security Review Framework v2 in an application repository.

## Prerequisites

Use any AI coding assistant that can read repository files:

- GitHub Copilot Chat in VS Code
- GitHub Copilot coding agent
- Cursor
- Claude Code
- Cline
- Windsurf
- Gemini CLI

No backend service is required. The HTML dashboard is a static file.

## Option 1: Copy Into A Project

Copy these folders into the root of the target project:

```text
.github/
.security-review/
```

The target project should look like this:

```text
my-project/
  .github/
    copilot-instructions.md
    prompts/
  .security-review/
  src/
```

Copilot automatically reads only the root `.github/copilot-instructions.md`.

## Option 2: Use As A Submodule

Keep this framework as a separate repository and add it to application repositories as a submodule:

```bash
git submodule add <framework-repository-url> .security-review-framework
```

Then create this file in the application repository:

```text
.github/copilot-instructions.md
```

Use this content:

```markdown
# Copilot Security Review Instructions

Use `.security-review-framework/.security-review/` as the authoritative Security Review Framework.
Start with `.security-review-framework/.security-review/framework-manifest.json`.
Follow the workflow and rules before reporting findings.
Only report evidence-backed security issues.
```

## Daily Developer Workflow

1. Implement the feature.
2. Run local tests.
3. Ask for a quick review using `.github/prompts/quick-review.prompt.md`.
4. Fix confirmed issues.
5. Open a pull request.
6. Ask for a PR review using `.github/prompts/pr-review.prompt.md`.
7. For major changes, run a deep review using `.github/prompts/deep-review.prompt.md`.
8. Generate structured JSON using `.security-review/schemas/report.schema.json`.
9. Render the report in `.security-review/templates/security-dashboard.html`.
10. Validate fixes using `.github/prompts/fix-validation.prompt.md`.

## Recommended Prompts

Quick review:

```text
Use .github/prompts/quick-review.prompt.md and review the current changes.
Only report evidence-backed security issues.
```

Pull request review:

```text
Use .github/prompts/pr-review.prompt.md.
Review only changed files and directly impacted code paths.
Output findings using .security-review/schemas/report.schema.json.
```

Full repository review:

```text
Use .github/prompts/deep-review.prompt.md.
First identify architecture, technologies, trust boundaries, authentication model, data flows, cloud/IaC, CI/CD, and AI components.
Then produce an executive summary and detailed findings.
```

AI security review:

```text
Use .github/prompts/ai-security-review.prompt.md.
Review prompt injection, unsafe tool invocation, RAG poisoning, agent permissions, MCP exposure, and sensitive context leakage.
```

## HTML Report

The dashboard is a single static file:

```text
.security-review/templates/security-dashboard.html
```

Open it in a browser, paste JSON matching `.security-review/schemas/report.schema.json`, and click `Render Report`.

The older `templates/report-template.html` file redirects users to the v2 dashboard.
