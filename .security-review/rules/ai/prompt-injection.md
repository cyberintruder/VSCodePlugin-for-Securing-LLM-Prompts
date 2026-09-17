# Prompt Injection Review

## Scope

Apply to direct user prompts and indirect content such as retrieved documents, web pages, emails, tickets, files, tool results, and previous conversation memory.

## Checks

- Untrusted content is isolated from system and developer instructions.
- Retrieved content cannot override tool policy, data access policy, or output policy.
- The app uses deterministic authorization before tool calls and data access.
- The model is instructed to treat retrieved content as data, but security does not rely only on instruction.
- Tool results from untrusted services cannot inject follow-up tool calls.
- Output channels avoid mixing hidden instructions and user-visible text.

## Common Findings

- RAG context can instruct the model to reveal secrets or call tools.
- Web page content is summarized by an agent with filesystem or cloud access.
- Tool output is reinserted as trusted instruction.
- Prompt templates wrap user input in weak delimiters but still grant tool access.
- The app asks the model to decide whether a user is authorized.

## Evidence Required

Show the untrusted content source, prompt assembly, model instruction boundary, tool or data action, and missing deterministic control.
