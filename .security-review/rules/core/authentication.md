# Authentication Review

## Scope

Review how identities are established, verified, renewed, revoked, and bound to requests.

## Checks

- Login, registration, password reset, MFA, SSO, OAuth, OIDC, SAML, magic-link, and API-token flows.
- Server-side enforcement of authentication on protected routes.
- Password hashing using slow, salted, memory-hard or work-factor controlled algorithms.
- MFA enrollment, reset, bypass, recovery code, and step-up behavior.
- OAuth/OIDC state, nonce, redirect URI, audience, issuer, token lifetime, and token validation.
- Account lockout, throttling, credential stuffing resistance, and enumeration prevention.
- Session fixation protection after login and privilege changes.
- Service-to-service authentication and webhook signature validation.

## Common Findings

- Authentication enforced only in frontend code.
- Missing verification of OIDC issuer, audience, nonce, or signature.
- Password reset token reuse, long lifetime, or leakage in logs.
- Magic links or one-time codes not bound to user, device, or expiration.
- API keys accepted without rotation, scope, or revocation model.

## Evidence Required

Show the route, middleware, filter, policy, or handler where authentication is missing or incorrectly implemented. Do not assume a route is protected unless the control is visible.
