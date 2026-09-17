# AWS Security Review

## Scope

Apply when the repository includes AWS SDK usage, IAM policies, Terraform, CloudFormation, CDK, SAM, Serverless Framework, ECS, EKS, Lambda, S3, RDS, DynamoDB, KMS, Secrets Manager, Bedrock, or AWS CI/CD integration.

## Checks

- IAM least privilege, resource scoping, condition keys, trust policies, and permission boundaries.
- Public S3 buckets, object ACLs, bucket policies, block public access, encryption, versioning, and logging.
- KMS key policies, rotation, cross-account access, and grants.
- Secrets Manager and SSM Parameter Store access, rotation, and log exposure.
- Lambda execution roles, environment secrets, public URLs, layers, and event source permissions.
- Security groups, NACLs, public subnets, VPC endpoints, and private service access.
- RDS, DynamoDB, OpenSearch, ElastiCache, and queue encryption and access control.
- ECR image scanning, tag immutability, and image provenance.
- Bedrock model access, prompt logging, data handling, agent tool permissions, and guardrails.

## Common Findings

- IAM policy uses `Action: "*"` and `Resource: "*"` for runtime roles.
- S3 bucket allows public reads or writes.
- Lambda role can administer unrelated AWS services.
- Secret value is stored in Lambda environment without controlled access or rotation.
- Security group exposes database ports to the internet.

## Evidence Required

Show the AWS resource, policy statement, principal, action, resource scope, and reachable impact.
