# Data Classification

Classify data before evaluating impact.

## Sensitive Data Classes

- Credentials: passwords, tokens, API keys, SSH keys, signing keys, certificates.
- PII: names, emails, addresses, phone numbers, government IDs.
- PHI: health records and medical identifiers.
- PCI: cardholder data and payment authentication data.
- Financial: account balances, invoices, payroll, bank details.
- Location: GPS, trip, route, and geofence data.
- Vehicle and device telemetry.
- Source code, proprietary algorithms, and internal documentation.
- Customer content, documents, files, tickets, and chats.
- Prompts, completions, embeddings, vector records, and agent memory.

## Impact Adjustment

Increase impact when exposure crosses:

- Tenant boundaries.
- Privilege boundaries.
- Regulatory boundaries.
- Public internet boundaries.
- Third-party provider boundaries.
- AI context or model-training boundaries.
