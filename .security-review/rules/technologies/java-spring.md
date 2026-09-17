# Java And Spring Security Review

## Detection

Apply when the repository includes `pom.xml`, `build.gradle`, Spring Boot, Spring MVC, Spring Security, JPA, Hibernate, MyBatis, or Java web APIs.

## Checks

- Spring Security filter chains, route matchers, method security, and default-deny posture.
- CSRF configuration aligned with cookie-based or token-based authentication.
- JWT issuer, audience, algorithm, expiration, and key validation.
- JPA/Hibernate queries avoid string concatenation and unsafe native queries.
- SpEL, expression evaluation, reflection, deserialization, XML, and template engines.
- Actuator exposure, management ports, and sensitive endpoints.
- File upload handling and path canonicalization.
- Secrets in `application.yml`, `application.properties`, environment, and logs.

## Common Findings

- `permitAll()` matcher unintentionally covers protected routes.
- `csrf().disable()` on cookie-authenticated app.
- Native query uses request input.
- Actuator endpoints exposed without authentication.
- Trust manager accepts all certificates.
