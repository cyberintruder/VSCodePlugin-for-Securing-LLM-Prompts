# Terraform And IaC Security Review

## Scope

Apply to Terraform modules, variables, state handling, providers, and generated cloud resources.

## Checks

- IAM policies and role assignments use least privilege.
- Public exposure is explicit, justified, and constrained.
- Storage, databases, queues, logs, and backups are encrypted.
- Secrets are not stored in variables, outputs, state, or logs without protection.
- Security groups, firewall rules, and network ACLs avoid broad exposure.
- KMS or cloud key management is used for sensitive workloads.
- Terraform state is remotely stored, encrypted, locked, and access-controlled.
- Providers and modules are pinned and sourced from trusted locations.
- Destructive changes and privileged modules require review.

## Common Findings

- `0.0.0.0/0` allowed to management ports.
- IAM policy allows wildcard actions on all resources.
- Secret output marked non-sensitive.
- Public bucket or storage account created by default.
- Provider or module source unpinned or untrusted.

## Evidence Required

Show the resource, variable, policy, network rule, output, or module that creates the risk.
