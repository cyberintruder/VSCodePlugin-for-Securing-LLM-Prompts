# Security Architecture Review

Use Secure Coding Framework v2 to review architecture and design risks.

## Focus

Review architecture, not code style.

Analyze:

- Application boundaries
- Authentication flows
- Authorization model
- Tenant isolation
- Sensitive data handling
- Secrets lifecycle
- Cryptographic trust anchors
- External integrations
- Admin and support workflows
- Background jobs and scheduled tasks
- Cloud boundaries
- AI, agent, RAG, and tool boundaries
- Observability and auditability

## Questions To Answer

- What assets need protection?
- Which components accept attacker-controlled input?
- Which components make privileged decisions?
- Where can trust be confused or bypassed?
- What controls are expected but not visible?
- Which design choices increase blast radius?

## Output

Provide architecture findings with severity, confidence, evidence, risk, and recommended design changes. Use `Potential Issue - Requires Verification` where implementation details are missing.
