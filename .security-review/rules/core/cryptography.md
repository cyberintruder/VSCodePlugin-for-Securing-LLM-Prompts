# Cryptography Review

## Scope

Review cryptographic design, key management, algorithms, protocol use, and random number generation.

## Checks

- Approved algorithms and modes for encryption, hashing, signing, and password storage.
- Authenticated encryption for sensitive data at rest or in messages.
- Strong randomness for tokens, nonces, salts, keys, and reset codes.
- Key generation, storage, rotation, access control, and separation of duties.
- TLS certificate validation, pinning decisions, and insecure protocol fallback.
- JWT and token signing algorithms, key confusion, and `none` algorithm rejection.
- Avoid custom cryptographic protocols unless formally reviewed.

## Common Findings

- MD5/SHA1 for password hashing or security-sensitive integrity.
- AES-CBC without authentication.
- Static IVs or predictable reset tokens.
- Disabled certificate validation.
- Signing key shared across environments or tenants.

## Evidence Required

Show algorithm, key source, mode, randomness source, or protocol setting. Explain why the usage is unsafe in this context.
