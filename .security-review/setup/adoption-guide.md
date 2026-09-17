# Adoption Guide

## For A Single Repository

1. Copy `.github/` and `.security-review/` to the target repository root.
2. Keep `.github/copilot-instructions.md` at the root.
3. Commit the framework files.
4. Ask Copilot to run a quick review on each feature branch.
5. Ask Copilot to run a PR review before merge.
6. Generate a dashboard JSON report for major changes.

## For Multiple Repositories

Use a submodule or subtree so the framework can be updated centrally.

Each application repository still needs a root `.github/copilot-instructions.md` that points to the framework path.

## Governance Recommendations

- Require high and critical findings to be resolved or risk-accepted before merge.
- Require fix validation for every high and critical finding.
- Store generated JSON reports as build artifacts for major releases.
- Track recurring finding categories to improve secure-by-default libraries and templates.
- Review the AI and cloud packs quarterly because those control surfaces change quickly.
