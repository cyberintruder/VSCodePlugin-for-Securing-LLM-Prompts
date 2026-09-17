# CI/CD Security Review

## Scope

Apply to GitHub Actions, Azure DevOps, Jenkins, GitLab CI, CircleCI, Buildkite, deployment scripts, release workflows, and automation accounts.

## Checks

- Workflow permissions are least privilege.
- Secrets are not exposed to forks, untrusted pull requests, logs, or third-party actions.
- OIDC or federated identity is preferred over long-lived cloud keys.
- Third-party actions and reusable workflows are pinned to commit SHAs where appropriate.
- Build artifacts are integrity protected and signed when required.
- Branch protection, required reviews, status checks, and environment approvals are enforced.
- Deployment jobs separate build, test, signing, and deploy permissions.
- Scripts avoid command injection through branch names, PR titles, tags, or user-controlled inputs.
- Cache keys and artifacts do not leak secrets or enable dependency poisoning.

## Common Findings

- `pull_request_target` runs untrusted code with secrets.
- Workflow grants `contents: write` or cloud deploy permissions broadly.
- Third-party action is pinned to a mutable tag.
- Deployment uses a long-lived cloud secret.
- User-controlled PR metadata is interpolated into shell commands.

## Evidence Required

Show the workflow, trigger, permissions, secret use, external action, shell command, or deployment identity.
