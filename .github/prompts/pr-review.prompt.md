# Pull Request Security Review

Use Security Review Framework v2 to review this pull request.

## Scope

Review:

- Changed files
- Directly impacted call paths
- New or modified routes, jobs, commands, events, APIs, permissions, policies, workflows, manifests, and infrastructure
- New dependencies and build steps
- Tests only when they reveal security behavior

Do not review unrelated files except where required to understand exploitability.

## Required Analysis

1. Summarize the security-relevant change.
2. Identify new attack surface.
3. Trace changed source-to-sink flows.
4. Check authentication and authorization impact.
5. Check data validation and output encoding.
6. Check business logic, replay, race, workflow bypass, and privilege chaining.
7. Check secrets, logging, and error leakage.
8. Check dependency, CI/CD, IaC, cloud, container, Kubernetes, and AI changes when present.
9. Validate exploitability before reporting.

## Output

Lead with findings. If no confirmed issues are found, say so clearly and list residual risks or review gaps.

For each finding include severity, confidence, CWE, OWASP, file, line, evidence, exploitability, attack scenario, impact, and remediation.
