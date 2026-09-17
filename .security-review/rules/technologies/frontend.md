# Frontend Security Review

## Detection

Apply when the repository includes React, Angular, Vue, Svelte, Next.js, Remix, Vite, Webpack, browser extensions, or frontend bundles.

## Checks

- XSS through unsafe HTML rendering, Markdown, rich text, SVG, template injection, or third-party widgets.
- Client-side authorization assumptions and hidden admin features.
- Token storage in local storage, session storage, cookies, IndexedDB, and memory.
- CSRF exposure when using cookies.
- CSP, iframe, clickjacking, postMessage, CORS, and service worker behavior.
- Sensitive environment variables exposed to browser bundles.
- Dependency and supply-chain risks in build tooling.
- AI prompts, transcripts, and uploaded files exposed in browser logs or analytics.

## Common Findings

- `dangerouslySetInnerHTML` renders untrusted content.
- Browser stores long-lived refresh token in local storage.
- Admin action hidden in UI but backend endpoint is callable.
- `postMessage` accepts any origin.
- Public bundle includes API secret or internal endpoint token.
