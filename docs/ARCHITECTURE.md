# Architecture Decision Record

## System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                     Micro-Learning Platform                      │
└─────────────────────────────────────────────────────────────────┘

┌──────────────────────────┐         ┌──────────────────────────┐
│   Frontend (React)       │         │   Backend (Java)         │
│  React + Vite            │◄───────►│   Spring Boot 4.0.3      │
│                          │         │                          │
│  - Dashboard             │         │  - Authentication        │
│  - Lesson Creator        │         │  - Lesson APIs           │
│  - Lesson Player         │         │  - Content Management    │
│  - User Profile          │         │  - User Management       │
│  - Analytics View        │         │  - Analytics APIs        │
└──────────────────────────┘         └──────────────────────────┘
          ▲                                      ▲
          │                                      │
          └──────────────────┬───────────────────┘
                             │
                    ┌────────▼────────┐
                    │   Database      │
                    │  (PostgreSQL)   │
                    │  (AWS RDS)      │
                    └─────────────────┘
```

## Tech Stack Decisions

### Frontend
- **Framework**: React 19.2.0
  - Fast, lightweight virtual DOM
  - Excellent component reusability
  - Large ecosystem and community support
  - Zero-config build with Vite
  
- **Build Tool**: Vite
  - Lightning-fast dev server
  - Instant HMR (Hot Module Replacement)
  - Optimized production builds
  - Next-generation tooling
  
- **State Management**: React Hooks
  - Built-in React Context API for global state
  - Simple and performant for most use cases
  - Optional: Redux for complex state if needed

### Backend
- **Runtime Options** (voting on Tuesday):
  1. **Python + FastAPI**
     - Fast, modern, easy to learn
     - Automatic API documentation (Swagger)
     - Performance comparable to Node.js
     - Great for ML/data features
  2. **Java + Spring Boot**
     - Mature ecosystem
     - Strong typing
     - Scalable enterprise solution
     - Rich framework features

- **Database**: PostgreSQL on AWS RDS
  - Structured data for lessons, users
  - ACID compliance
  - Managed by AWS (automatic backups, scaling)
  - Free tier available
  
- **Authentication**: JWT + bcrypt
  - Stateless, scalable
  - Industry standard
  - Simple to implement in 10 days

### DevOps & Deployment
- **Containerization**: Docker
  - Consistent environment across all machines
  - Easy deployment to AWS
  - Version control for infrastructure
  
- **CI/CD Pipeline Options** (voting on Tuesday):
  1. **Jenkins**
     - Self-hosted on AWS EC2
     - Full control over pipeline
     - Extensive plugin ecosystem
  2. **GitHub Actions**
     - Integrated with GitHub
     - Free for public repos
     - Simple YAML configuration
     - Less operational overhead
  
- **Deployment Infrastructure**: AWS
  - **Frontend**: S3 + CloudFront CDN
    - Static hosting for Angular SPA
    - Global content delivery
  - **Backend**: EC2 instances (or Elastic Container Service)
    - Docker container deployment
    - Auto-scaling capability
  - **Database**: RDS (Managed PostgreSQL)
    - Automated backups
    - High availability option
    - Monitoring included

## API Design Principles

### REST Endpoints Structure
```
/api/v1/
├── /auth
│   ├── POST /register
│   ├── POST /login
│   └── POST /refresh
├── /users
│   ├── GET /:id
│   ├── PUT /:id
│   └── DELETE /:id
├── /lessons
│   ├── GET (list)
│   ├── POST (create)
│   ├── GET /:id
│   ├── PUT /:id
│   └── DELETE /:id
├── /content
│   ├── GET /lessons/:lessonId (get all content)
│   ├── POST /lessons/:lessonId (create content)
│   └── DELETE /:contentId
└── /progress
    ├── GET /user/:userId
    ├── POST (track progress)
    └── GET /lesson/:lessonId
```

## Database Schema (High Level)

```sql
-- Users
users (id, email, password_hash, username, created_at, updated_at)

-- Lessons
lessons (id, title, description, creator_id, category, created_at, updated_at)

-- Content (multi-modal)
content (id, lesson_id, type, content, order, created_at)
-- type: 'text', 'audio', 'image', 'video'

-- Progress Tracking
progress (id, user_id, lesson_id, completed, score, created_at, updated_at)

-- User Sessions
sessions (id, user_id, token, expires_at)
```

## Deployment Pipeline

```
┌─────────────────────┐
│  Developer Push     │
└──────────┬──────────┘
           │
    ┌──────▼──────┐
    │ GitHub Push │
    └──────┬──────┘
           │
  ┌────────▼─────────┐
  │ GitHub Actions   │
  │ (CI/CD Pipeline) │
  └────────┬─────────┘
           │
    ┌──────┴───────┬──────────┐
    │              │          │
┌───▼────┐  ┌─────▼──┐  ┌────▼────┐
│ Lint & │  │ Build  │  │  Test   │
│ Format │  │        │  │         │
└────────┘  └────────┘  └────────┘
    │          │          │
    └──────────┴──────────┘
           │
    ┌──────▼──────┐
    │ Docker Build│
    │ & Push      │
    └──────┬──────┘
           │
    ┌──────▼──────────┐
    │  Deploy to Prod │
    │  (Vercel/       │
    │   Railway)      │
    └─────────────────┘
```

## Key Decisions for 10-Day Timeline

1. **Use existing frameworks** - Don't build from scratch
2. **Monorepo structure** - Everything in one repo for easy management
3. **Simple auth** - JWT only, no OAuth initially
4. **Minimal features** - Core functionality only
5. **Automated testing** - CI/CD catches bugs early
6. **Docker from day 1** - Avoids "works on my machine"
7. **Database schema finalized on Day 1** - No major changes later

## Risks & Mitigations

| Risk | Mitigation |
|------|-----------|
| Students unfamiliar with tech stack | Pair programming, clear docs, example code |
| Deployment issues on Day 10 | Set up CI/CD pipeline Day 1, test early |
| Merge conflicts | Small focused PRs, coordinate via issues |
| Database schema changes late | Lock schema on Day 2 |
| Feature creep | Define MVP strictly, use GitHub milestones |
| Communication gaps | Daily standups, GitHub Discussions |

---

**Last Updated:** February 8, 2026
