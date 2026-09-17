# LLM Application Security Review

## Scope

Apply to code that sends prompts, retrieved context, files, user input, tools, or system instructions to an LLM provider or local model.

## Checks

- Prompt boundaries distinguish system, developer, user, retrieved, tool, and memory content.
- Sensitive data is minimized before sending to a model provider.
- Model output is not trusted for authorization, identity, compliance, or financial decisions without deterministic checks.
- Logging redacts prompts, completions, files, embeddings, and tool results when sensitive.
- Model provider configuration handles retention, training use, region, tenancy, and access controls.
- Token limits and cost controls prevent denial-of-wallet.
- Prompt templates do not expose secrets, internal policies, or privileged instructions to users.
- Safety filters are treated as defense in depth, not primary authorization.

## Common Findings

- System prompt or API key can be leaked through model output.
- User-provided text is concatenated into privileged instructions without boundaries.
- Model result directly grants access or approves a transaction.
- Prompts containing customer secrets are stored in unrestricted logs.
- Token usage can be amplified without limits.

## Evidence Required

Show prompt construction, provider call, sensitive data flow, model output trust boundary, or logging sink.
