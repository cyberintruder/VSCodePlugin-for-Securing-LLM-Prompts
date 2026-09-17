# RAG And Embedding Security Review

## Scope

Apply to retrieval-augmented generation, vector stores, embedding pipelines, document ingestion, search, and knowledge-base integrations.

## Checks

- Ingestion enforces tenant, owner, source, and document trust metadata.
- Retrieval filters by tenant, user, permission, classification, and purpose.
- Retrieved content is treated as untrusted input.
- Sensitive documents are excluded from unauthorized embeddings and search indexes.
- Embeddings and vector records do not create cross-tenant leakage.
- Document poisoning and malicious instructions are considered.
- Deletion and retention apply to source documents, chunks, embeddings, caches, and backups.
- Citations and provenance are preserved for user-visible answers.

## Common Findings

- Vector search filters only by query similarity, not tenant or authorization.
- Low-privilege user can poison shared knowledge base content.
- Retrieved documents can inject tool instructions into an agent.
- Deleted documents remain in embeddings.
- Prompt logs include sensitive RAG chunks.

## Evidence Required

Show document ingestion, metadata assignment, retrieval filters, prompt assembly, and access control behavior.
