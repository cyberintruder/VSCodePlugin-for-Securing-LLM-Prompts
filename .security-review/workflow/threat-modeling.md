# Threat Modeling

Use this lightweight STRIDE model for architecture and deep reviews.

## Assets

Identify:

- Credentials, tokens, API keys, signing keys, certificates, session cookies.
- PII, PHI, PCI, financial data, location data, vehicle data, telemetry, logs.
- Admin actions, payment flows, entitlements, approvals, and audit records.
- Prompts, retrieved documents, embeddings, agent memory, and tool credentials.

## Actors

Identify:

- Anonymous users.
- Authenticated users.
- Privileged users.
- Administrators and support staff.
- Service accounts.
- CI/CD identities.
- External providers and webhooks.
- Malicious insiders.

## STRIDE Questions

Spoofing:

- Can identity, tenant, role, webhook sender, or service account be forged?

Tampering:

- Can users modify state, policy, prompts, artifacts, jobs, or infrastructure they should not control?

Repudiation:

- Are security-sensitive actions audited with actor, target, time, source, and result?

Information disclosure:

- Can sensitive data leak through responses, logs, errors, prompts, embeddings, analytics, or external calls?

Denial of service:

- Can cost, compute, queue, storage, model tokens, or database load be amplified?

Elevation of privilege:

- Can users chain weak controls to become another user, tenant, role, service, or agent?

## Output

Separate confirmed facts from assumptions. Convert threats into findings only when supported by code or configuration evidence.
