# Developer Workflow

## Local Feature Workflow

1. Build the feature.
2. Run local tests.
3. Ask for a quick security review.
4. Fix confirmed issues.
5. Re-run the quick review if the change touched auth, data access, files, cloud, CI/CD, or AI behavior.

## Pull Request Workflow

1. Ask for a PR review using `.github/prompts/pr-review.prompt.md`.
2. Review only changed files and directly impacted code paths.
3. Require severity, confidence, CWE, OWASP, evidence, exploitability, and remediation for every finding.
4. Convert unclear findings to `Potential Issue - Requires Verification`.
5. Validate fixes before merge.

## Release Workflow

1. Run a deep review.
2. Generate JSON matching `.security-review/schemas/report.schema.json`.
3. Render the JSON with `.security-review/templates/security-dashboard.html`.
4. Store the report as a release artifact.
5. Track remediation actions by priority.
