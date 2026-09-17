# Kubernetes Security Review

## Scope

Apply to Kubernetes YAML, Helm charts, Kustomize overlays, operators, admission policies, and Kubernetes deployment scripts.

## Checks

- Pods do not run as root unless justified.
- `allowPrivilegeEscalation` is false.
- Privileged containers, host networking, host PID, host IPC, and host paths are avoided or justified.
- Linux capabilities are dropped and only required capabilities are added.
- `readOnlyRootFilesystem` is enabled where practical.
- Seccomp and AppArmor profiles are configured.
- Resource requests and limits are set.
- NetworkPolicies isolate sensitive services.
- RBAC is least privilege and avoids broad cluster roles.
- Secrets are not hardcoded in manifests or mounted unnecessarily.
- Image tags are pinned and provenance/scanning is considered.
- Admission controls enforce baseline or restricted policies.

## Common Findings

- Container runs as root with privilege escalation allowed.
- Service account has cluster-admin permissions.
- No NetworkPolicy protects internal admin or database services.
- Secret values are embedded in plain YAML.
- Deployment uses mutable `latest` image tag.

## Evidence Required

Show the manifest resource, namespace, service account, container security context, RBAC binding, or network policy gap.
