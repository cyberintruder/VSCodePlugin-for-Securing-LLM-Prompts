# Docker And Container Security Review

## Scope

Apply to Dockerfiles, Compose files, container build scripts, image metadata, and runtime configuration.

## Checks

- Minimal and trusted base images.
- Pinned image versions or digests for critical workloads.
- Non-root runtime user.
- No secrets copied into image layers.
- Package manager cache and build credentials removed.
- Multi-stage builds separate build-time tools from runtime image.
- Health checks and read-only filesystem where practical.
- Avoid privileged containers, host mounts, Docker socket mounts, and host networking.
- Expose only required ports.
- Image scanning and provenance for release artifacts.

## Common Findings

- `USER root` or missing non-root user in runtime image.
- `.env`, SSH key, npm token, or cloud credential copied into image.
- Docker socket mounted into application container.
- Base image uses mutable `latest` tag.
- Build stage secrets remain in image history.

## Evidence Required

Show the Dockerfile instruction, Compose service, build argument, mount, user, or exposed port.
