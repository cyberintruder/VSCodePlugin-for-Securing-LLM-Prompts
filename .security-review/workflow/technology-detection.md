# Technology Detection

Detect technologies before applying rules. Use file names, package manifests, imports, Dockerfiles, IaC manifests, CI workflows, and runtime configuration.

## Signals

Java and Spring:

- `pom.xml`, `build.gradle`, `spring-boot`, `@RestController`, `SecurityFilterChain`

.NET:

- `.csproj`, `Program.cs`, `Startup.cs`, `Microsoft.AspNetCore`, `[Authorize]`

Node.js:

- `package.json`, `express`, `fastify`, `next`, `nestjs`, `sequelize`, `prisma`

Python:

- `requirements.txt`, `pyproject.toml`, `django`, `flask`, `fastapi`, `sqlalchemy`

Go:

- `go.mod`, `net/http`, `gin`, `echo`, `gorm`

Frontend:

- `react`, `angular`, `vue`, `next`, `vite`, `webpack`

Mobile:

- `pubspec.yaml`, `android/`, `ios/`, `flutter`, `react-native`

Cloud and DevSecOps:

- `.github/workflows`, `azure-pipelines.yml`, `Jenkinsfile`, `Dockerfile`, `docker-compose.yml`, `*.tf`, `Chart.yaml`, `k8s`, `helm`

AI:

- `openai`, `anthropic`, `langchain`, `llamaindex`, `semantic-kernel`, `bedrock`, `vertexai`, `azure-ai`, `mcp`, `tools`, `agents`, `embeddings`, `vector`

## Rule Selection

Do not report missing controls for technologies that are not present. If a technology is implied but not confirmed, note the uncertainty before applying its rules.
