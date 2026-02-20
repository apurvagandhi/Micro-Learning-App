# Backend

> **⚠️ PLACEHOLDER**: This will be a **Java + Spring Boot** API server (placeholder decision). Final backend framework will be decided through team discussion and GitHub Discussions.

Java + Spring Boot API server for the Micro-Learning App.

## Quick Start

```bash
mvn spring-boot:run
```

Server runs on `http://localhost:3000/api/v1`

## Setup

See [docs/BACKEND_SETUP.md](../docs/BACKEND_SETUP.md) for detailed instructions.

### Prerequisites

- Java 17+
- Maven 3.8+
- PostgreSQL (or use Docker)

### Environment Variables

Create `.env` or configure in `application.yml`:
```yaml
server:
  port: 3000
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/micro_learning
    username: postgres
    password: postgres
jwt:
  secret: your-secret-key
```

## Scripts

- `mvn spring-boot:run` - Start dev server
- `mvn clean package` - Build for production
- `mvn test` - Run tests
- `mvn clean install` - Clean install dependencies

## Project Structure

```
src/
├── main/java/com/microlearning/api/
│   ├── controller/    # API endpoints
│   ├── service/       # Business logic
│   ├── repository/     # Database access
│   ├── model/          # Entity models
│   ├── dto/            # Data transfer objects
│   └── Application.java # Entry point
└── resources/
    └── application.yml # Configuration
```

## API

See [docs/API.md](../docs/API.md) for complete API reference.

## Tech Stack (Placeholder)

- **Java 17+** (language - placeholder)
- **Spring Boot** (framework - placeholder)
- PostgreSQL (database)
- JWT Authentication
- Docker
- Maven

> **Note**: Backend framework selection (Java vs Python vs Node.js) will be decided based on team discussion and pros/cons review.

---

See [../docs/BACKEND_SETUP.md](../docs/BACKEND_SETUP.md) for complete documentation.
