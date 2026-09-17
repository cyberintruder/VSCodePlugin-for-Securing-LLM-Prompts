# Session Management Review

## Scope

Review session cookies, JWTs, refresh tokens, CSRF controls, logout, expiration, and revocation.

## Checks

- Secure cookie attributes: `HttpOnly`, `Secure`, `SameSite`, path, domain, expiration.
- CSRF protection for cookie-authenticated state-changing requests.
- Session rotation after login and privilege changes.
- Server-side revocation for logout, password reset, MFA reset, and account disablement.
- JWT signature, algorithm, issuer, audience, expiration, and key rotation.
- Refresh token reuse detection and rotation.
- Token storage in frontend, mobile, local storage, cookies, and logs.

## Common Findings

- JWT accepted with missing audience or issuer validation.
- Refresh token not rotated and not revoked on password reset.
- Session cookie lacks `HttpOnly` or `Secure`.
- CSRF absent on cookie-authenticated forms or APIs.
- Logout only deletes client state while server token remains valid.

## Evidence Required

Show token issuance, validation, storage, and revocation behavior where relevant.
