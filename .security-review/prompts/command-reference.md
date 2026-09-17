# Command Reference

These are prompt patterns for assistants that do not support `.github/prompts/*.prompt.md`.

## Quick Review

```text
Use Secure Coding Framework v2. Review the current changes only. Trace attacker-controlled input to sinks and report only evidence-backed security findings.
```

## Pull Request Review

```text
Use Secure Coding Framework v2. Review only changed files and directly impacted call paths. Lead with confirmed security findings, then list residual risks.
```

## Deep Review

```text
Use Secure Coding Framework v2. First identify architecture, technologies, trust boundaries, authentication, authorization, data flows, cloud/IaC/CI/CD, and AI components. Then generate JSON matching .security-review/schemas/report.schema.json.
```

## Fix Validation

```text
Use Secure Coding Framework v2. Validate that the remediation blocks the original exploit path and does not introduce bypasses or regressions.
```
