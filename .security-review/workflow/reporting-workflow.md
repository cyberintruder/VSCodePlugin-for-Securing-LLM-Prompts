# Reporting Workflow

Reports should be useful to engineers and executives.

## Executive Summary

Include:

- Overall risk.
- Security score.
- Finding counts by severity.
- Top risks.
- Review scope.
- Review limitations.
- Recommended immediate actions.

## Technical Details

Each finding must include:

- Stable ID.
- Title.
- Severity.
- Confidence.
- Status.
- CWE, OWASP, ASVS, CAPEC when relevant.
- Affected file and line.
- Evidence.
- Source-to-sink path.
- Exploitability reasoning.
- Attack scenario.
- Business impact.
- Likelihood.
- Remediation.
- Secure example when practical.
- References.

## Prioritization

Group remediation into:

- Immediate: critical issues and broad secret exposure.
- Sprint: high severity issues and likely exploit paths.
- Backlog: medium and low severity issues.
- Hardening: informational and defense-in-depth recommendations.

## Output Formats

Preferred machine-readable output:

- `.security-review/schemas/report.schema.json`

Preferred human-readable output:

- `.security-review/templates/security-dashboard.html`
