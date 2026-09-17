# .NET Security Review

## Detection

Apply when the repository includes `.csproj`, ASP.NET Core, MVC, Minimal APIs, Entity Framework, Identity, Razor, Blazor, or Azure integrations.

## Checks

- `[Authorize]`, endpoint policies, fallback policies, and role/claim mapping.
- Anti-forgery tokens for cookie-authenticated state-changing requests.
- Model binding and over-posting protections.
- Entity Framework raw SQL and interpolated SQL usage.
- Data Protection key storage and environment separation.
- JWT bearer validation for issuer, audience, expiration, signature, and clock skew.
- CORS, forwarded headers, HTTPS redirection, HSTS, and cookie settings.
- Razor output encoding and unsafe HTML rendering.

## Common Findings

- Controller action lacks `[Authorize]` while surrounding actions are protected.
- Entity Framework `FromSqlRaw` uses request input.
- Bound DTO includes privileged fields such as role or tenant.
- CORS allows any origin with credentials.
- Data Protection keys are ephemeral or shared insecurely across environments.
