# MITRE ATT&CK Mapping

Use MITRE ATT&CK when findings relate to attacker tactics and enterprise detection.

## Common Mappings

- Initial Access: exposed admin interfaces, vulnerable public apps, stolen credentials.
- Execution: command injection, unsafe agent tool execution, CI script injection.
- Persistence: long-lived tokens, service account misuse, malicious pipeline changes.
- Privilege Escalation: weak roles, broad IAM, container breakout conditions.
- Defense Evasion: log tampering, missing audit trails, disabled monitoring.
- Credential Access: secrets in code, logs, images, CI artifacts, or prompts.
- Discovery: exposed metadata services, cloud inventory permissions.
- Lateral Movement: overbroad service roles and network access.
- Collection: excessive data access, RAG over-retrieval, log exports.
- Exfiltration: SSRF, public buckets, prompt or tool-mediated leakage.
- Impact: destructive cloud permissions, unsafe deployment workflows, agent actions.

## Usage

Include ATT&CK mapping only when it adds operational security context.
