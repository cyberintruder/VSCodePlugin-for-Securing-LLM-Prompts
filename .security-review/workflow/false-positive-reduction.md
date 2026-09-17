# False Positive Reduction

The reviewer must optimize for accurate, actionable findings.

## Ignore By Default

Ignore these unless they directly create a security vulnerability:

- Formatting.
- Naming.
- Code style.
- Generic architecture preferences.
- Maintainability.
- Performance.
- Documentation.
- Test organization.
- Refactoring preferences.

## Do Not Assume

Do not assume:

- Hidden authentication.
- Hidden authorization.
- Hidden validation.
- Unlisted endpoints.
- Unseen middleware.
- Production configuration.
- Network reachability.
- Database schema constraints.
- Cloud account policies.
- Secret rotation.
- AI guardrails.

## Evidence Standard

Every finding should include at least one of:

- File and line.
- Function or route name.
- Configuration key.
- Manifest resource.
- CI workflow step.
- Policy statement.
- Prompt, tool, or agent boundary.

Findings without evidence should be converted to questions or `Potential Issue - Requires Verification`.
