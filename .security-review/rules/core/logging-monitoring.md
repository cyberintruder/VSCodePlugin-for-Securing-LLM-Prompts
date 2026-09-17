# Logging, Monitoring, And Audit Review

## Scope

Review security event logging, sensitive data handling in logs, audit trails, and alerting.

## Checks

- Authentication, authorization, admin, payment, data export, configuration, secret, and privilege-change events.
- Actor, target, action, result, time, source, correlation ID, and tenant context.
- Redaction of passwords, tokens, cookies, API keys, PII, PHI, PCI, prompts, completions, and embeddings.
- Tamper resistance and access controls for audit logs.
- Alerting for suspicious behavior and security control failures.
- Log retention and data classification.

## Common Findings

- Authorization failures not logged.
- Admin impersonation lacks audit trail.
- Authorization headers, cookies, or reset tokens logged.
- Logs contain prompt context with customer secrets.
- Audit log entries can be modified by application users.

## Evidence Required

Show logged fields and missing or unsafe redaction. If log pipeline behavior is outside the repository, mark as verification required.
