# Azure Security Review

## Scope

Apply when the repository includes Azure SDK usage, Bicep, ARM, Terraform for Azure, Azure Functions, App Service, AKS, Key Vault, Storage Accounts, Managed Identity, Azure OpenAI, or Azure DevOps.

## Checks

- Managed Identity use, role assignments, scope, and privilege boundaries.
- Key Vault access policies, RBAC, purge protection, soft delete, private endpoints, and secret rotation.
- Storage account public access, shared keys, SAS tokens, encryption, and network rules.
- App Service and Functions authentication, public access, TLS, and environment secrets.
- AKS RBAC, workload identity, network policy, image provenance, and pod security.
- Azure SQL, Cosmos DB, Service Bus, Event Grid, and queue access controls.
- Azure OpenAI network, logging, data handling, content filters, and key protection.
- Azure DevOps service connections, variable groups, approvals, and OIDC/federated credentials.

## Common Findings

- Key Vault public network access without private endpoint requirements.
- Storage Account allows public blob access for sensitive data.
- Managed Identity assigned broad subscription-level roles.
- SAS token has excessive lifetime or permissions.
- Azure DevOps pipeline exposes secrets to pull requests.

## Evidence Required

Show the identity, role assignment, resource scope, network exposure, and affected data or action.
