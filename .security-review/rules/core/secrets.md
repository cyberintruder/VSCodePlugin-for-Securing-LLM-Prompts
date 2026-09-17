# Secrets Review

## Scope

Review secret storage, retrieval, use, logging, rotation, and exposure.

## Checks

- Hardcoded credentials, tokens, private keys, certificates, passwords, and connection strings.
- Secrets committed in examples, tests, docs, Docker images, CI logs, crash reports, and generated files.
- Environment variables exposed to frontend bundles, client apps, logs, or model prompts.
- Use of cloud secrets managers or equivalent secure stores.
- Secret scope, least privilege, rotation, and revocation.
- CI/CD secret access in pull requests, forks, and third-party actions.
- AI prompt, completion, embedding, and tool logs containing secrets.

## Common Findings

- Production credential committed to repository.
- `.env` file included in Docker image or artifact.
- CI workflow echoes secrets or passes them to untrusted actions.
- Server secret exposed via frontend build variable prefix.
- API key sent to an LLM provider in user-visible context.

## Evidence Required

Do not print full secrets in findings. Show a redacted value, file, line, and blast-radius assessment.
