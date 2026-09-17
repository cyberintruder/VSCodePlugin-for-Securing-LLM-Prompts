# Node.js Security Review

## Detection

Apply when the repository includes `package.json`, Express, Fastify, NestJS, Next.js, Koa, Hapi, Prisma, Sequelize, Mongoose, or Node workers.

## Checks

- Middleware ordering for authentication, authorization, body parsing, CORS, CSRF, and error handling.
- Route-level and object-level authorization.
- ORM raw queries, NoSQL operators, template injection, and command execution.
- Prototype pollution through deep merge, query parsing, or untrusted JSON.
- JWT verification and session cookie security.
- SSRF in URL fetchers, webhook testers, importers, and preview generators.
- Dependency scripts, lockfiles, package manager configuration, and untrusted actions.
- Next.js server/client boundary and environment variable exposure.

## Common Findings

- Express route mounted before authentication middleware.
- Mongo query accepts user-controlled operators.
- `child_process.exec` receives request input.
- `NEXT_PUBLIC_` variable exposes a secret.
- `res.send` or template render outputs stored HTML without sanitization.
