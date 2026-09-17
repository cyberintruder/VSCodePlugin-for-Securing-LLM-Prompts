# Supply Chain Security Review

## Scope

Apply to dependencies, package managers, lockfiles, build systems, release artifacts, container images, and third-party automation.

## Checks

- Lockfiles are present and used in CI.
- Dependencies are sourced from trusted registries.
- Internal package names are protected against dependency confusion.
- Package versions are pinned or constrained appropriately.
- Checksums, signatures, provenance, or trusted publishing are used where available.
- SBOM generation and vulnerability scanning are considered.
- Build scripts do not execute untrusted code unexpectedly.
- Third-party actions, images, and modules are pinned and reviewed.
- Release artifacts are signed or otherwise integrity protected.

## Common Findings

- CI installs dependencies without a lockfile.
- Private package namespace can be shadowed by a public package.
- Package postinstall scripts run in privileged CI context.
- Container image uses untrusted registry or mutable tag.
- Build artifact can be replaced before deployment.

## Evidence Required

Show the package manifest, lockfile gap, registry configuration, workflow step, release process, or artifact trust boundary.
