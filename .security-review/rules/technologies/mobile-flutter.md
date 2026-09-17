# Mobile And Flutter Security Review

## Detection

Apply when the repository includes Flutter, React Native, Android, iOS, `pubspec.yaml`, Gradle, Xcode projects, or mobile API clients.

## Checks

- Secrets and API keys embedded in app bundles.
- Token storage using secure platform storage.
- Certificate validation and pinning decisions for sensitive apps.
- Deep link and universal link validation.
- Local database encryption for sensitive data.
- Biometric and device credential flows.
- Jailbreak/root detection only as defense in depth.
- Mobile-to-API authorization, object ownership, and tenant isolation.
- Logging of tokens, PII, prompts, files, or model responses.

## Common Findings

- Long-lived API key embedded in mobile app.
- Access token stored in plaintext preferences.
- Deep link performs privileged action without server verification.
- TLS certificate validation disabled for debug and carried into release.
- Local cache stores sensitive documents without encryption.
