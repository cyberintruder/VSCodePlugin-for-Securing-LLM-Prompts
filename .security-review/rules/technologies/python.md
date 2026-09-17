# Python Security Review

## Detection

Apply when the repository includes `requirements.txt`, `pyproject.toml`, Django, Flask, FastAPI, SQLAlchemy, Celery, Pydantic, or Python workers.

## Checks

- Django, Flask, and FastAPI authentication and dependency enforcement.
- CSRF configuration for cookie-authenticated apps.
- SQLAlchemy raw SQL, Django `.extra()`, unsafe filters, and NoSQL query construction.
- Jinja2 autoescape, Markup usage, and template injection.
- Pickle, YAML, XML, eval, exec, and dynamic imports.
- File path handling, uploads, and archive extraction.
- Celery task authorization, trusted message sources, and sensitive task args.
- Secrets in settings, `.env`, notebooks, logs, and exception reports.

## Common Findings

- `yaml.load` used without a safe loader.
- Flask route missing auth decorator.
- Raw SQL string uses request input.
- Debug mode enabled in deployment config.
- Celery task performs privileged action based on untrusted message.
