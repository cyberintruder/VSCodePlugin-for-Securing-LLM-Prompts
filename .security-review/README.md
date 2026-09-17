# Secure Coding Framework v2 Internals

This folder is the source of truth for Secure Coding Framework v2.

Use it in this order:

1. Read `framework-manifest.json`.
2. Follow `workflow/review-workflow.md`.
3. Detect applicable technologies with `workflow/technology-detection.md`.
4. Trace source-to-sink flows using `workflow/data-flow-analysis.md`.
5. Validate findings with `workflow/exploitability-validation.md`.
6. Reduce false positives with `workflow/false-positive-reduction.md`.
7. Apply relevant rule packs under `rules/`.
8. Output findings using `schemas/finding.schema.json` or `schemas/report.schema.json`.
9. Render reports with `templates/security-dashboard.html`.

## Directory Map

```text
.security-review/
  workflow/       Review process and scoring rules
  rules/          Modular security review packs
  schemas/        Structured output formats
  examples/       Example JSON output
  templates/      HTML report dashboard
  prompts/        Assistant command patterns
  setup/          Adoption guides
```

## Design Principle

Do not apply every checklist to every repository. Detect the stack first, then apply only relevant controls. A missing Kubernetes NetworkPolicy is not a finding in a repository with no Kubernetes deployment path.
