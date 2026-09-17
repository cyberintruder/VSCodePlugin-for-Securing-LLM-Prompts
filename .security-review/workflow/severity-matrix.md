# Severity Matrix

Use severity to describe business and technical impact, not reviewer concern.

## Critical

Use when exploitation can reasonably lead to:

- Remote code execution.
- Authentication bypass for privileged access.
- Cross-tenant compromise.
- Mass sensitive data disclosure.
- Cloud account or production environment takeover.
- Secret/key compromise with broad blast radius.
- Unsafe AI agent action with privileged external effects.

## High

Use when exploitation can reasonably lead to:

- Unauthorized access to sensitive data.
- Privilege escalation within the application.
- Significant financial, payment, or workflow abuse.
- Persistent stored XSS affecting privileged users.
- Write access to critical resources.
- Exposed production secrets with limited blast radius.

## Medium

Use when exploitation can reasonably lead to:

- Limited data exposure.
- Object-level authorization bypass with constrained impact.
- Reflected XSS with meaningful user impact.
- Security control bypass requiring unusual conditions.
- Log injection, request smuggling, SSRF, or DoS with constrained scope.

## Low

Use when exploitation has limited impact or requires strong preconditions:

- Minor information disclosure.
- Missing hardening header with limited exploitability.
- Non-sensitive debug detail.
- Weak control defense-in-depth issue.

## Informational

Use for security observations, coverage gaps, or hardening suggestions that are not vulnerabilities.
