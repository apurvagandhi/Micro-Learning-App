# API Documentation

Complete API reference for the Micro-Learning App backend.

## Base URL

- **Development**: `http://localhost:3000/api/v1`
- **Production**: `https://micro-learning-api.railway.app/api/v1`

## Authentication

All protected endpoints require JWT token in Authorization header:

```
Authorization: Bearer <token>
```

### Get JWT Token

```bash
curl -X POST http://localhost:3000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password123"}'
```

---

## Endpoints

### Authentication

#### Register User
```
POST /auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securepassword123",
  "username": "john_doe"
}

Response (201):
{
  "id": 1,
  "email": "user@example.com",
  "username": "john_doe",
  "token": "eyJhbGc...",
  "createdAt": "2026-02-08T10:30:00Z"
}
```

#### Login User
```
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securepassword123"
}

Response (200):
{
  "token": "eyJhbGc...",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "username": "john_doe"
  },
  "expiresIn": 604800
}
```

#### Refresh Token
```
POST /auth/refresh
Authorization: Bearer <token>

Response (200):
{
  "token": "eyJhbGc...",
  "expiresIn": 604800
}
```

#### Logout
```
POST /auth/logout
Authorization: Bearer <token>

Response (200):
{
  "message": "Logged out successfully"
}
```

---

### Users

#### Get User Profile
```
GET /users/:id
Authorization: Bearer <token>

Response (200):
{
  "id": 1,
  "email": "user@example.com",
  "username": "john_doe",
  "bio": "Learning enthusiast",
  "avatar": "https://...",
  "createdAt": "2026-02-08T10:30:00Z"
}
```

#### Update User Profile
```
PUT /users/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "username": "john_updated",
  "bio": "New bio",
  "avatar": "https://..."
}

Response (200):
{
  "id": 1,
  "username": "john_updated",
  "bio": "New bio",
  "updatedAt": "2026-02-08T11:00:00Z"
}
```

#### Delete User
```
DELETE /users/:id
Authorization: Bearer <token>

Response (200):
{
  "message": "User deleted successfully"
}
```

#### List Users (Admin)
```
GET /users?skip=0&take=10
Authorization: Bearer <admin-token>

Response (200):
{
  "total": 50,
  "skip": 0,
  "take": 10,
  "users": [...]
}
```

---

### Lessons

#### List All Lessons
```
GET /lessons?category=programming&skip=0&take=20
Authorization: Bearer <token> (optional)

Response (200):
{
  "total": 100,
  "skip": 0,
  "take": 20,
  "lessons": [
    {
      "id": 1,
      "title": "Introduction to React",
      "description": "Learn React basics",
      "category": "programming",
      "difficulty": "beginner",
      "creator": {
        "id": 5,
        "username": "instructor"
      },
      "contentCount": 5,
      "createdAt": "2026-02-07T08:00:00Z"
    }
  ]
}
```

#### Get Lesson Details
```
GET /lessons/:id
Authorization: Bearer <token> (optional)

Response (200):
{
  "id": 1,
  "title": "Introduction to React",
  "description": "Learn React basics",
  "category": "programming",
  "difficulty": "beginner",
  "content": [
    {
      "id": 1,
      "type": "text",
      "title": "React Fundamentals",
      "content": "React is a library...",
      "order": 1
    },
    {
      "id": 2,
      "type": "video",
      "title": "React Tutorial",
      "url": "https://...",
      "order": 2
    }
  ],
  "creator": { ... },
  "createdAt": "2026-02-07T08:00:00Z"
}
```

#### Create Lesson
```
POST /lessons
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Advanced JavaScript",
  "description": "Deep dive into JS",
  "category": "programming",
  "difficulty": "advanced"
}

Response (201):
{
  "id": 42,
  "title": "Advanced JavaScript",
  "description": "Deep dive into JS",
  "category": "programming",
  "difficulty": "advanced",
  "creator": {
    "id": 1,
    "username": "user"
  },
  "createdAt": "2026-02-08T10:00:00Z"
}
```

#### Update Lesson
```
PUT /lessons/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Updated Title",
  "description": "Updated description"
}

Response (200):
{
  "id": 42,
  "title": "Updated Title",
  "description": "Updated description",
  "updatedAt": "2026-02-08T11:00:00Z"
}
```

#### Delete Lesson
```
DELETE /lessons/:id
Authorization: Bearer <token>

Response (200):
{
  "message": "Lesson deleted successfully"
}
```

---

### Content (Multi-modal)

#### Get All Content for Lesson
```
GET /content/lessons/:lessonId
Authorization: Bearer <token> (optional)

Response (200):
{
  "lessonId": 1,
  "content": [
    {
      "id": 1,
      "type": "text",
      "title": "Introduction",
      "data": {
        "text": "Learn the basics...",
        "readTime": 5
      },
      "order": 1,
      "createdAt": "2026-02-07T08:00:00Z"
    },
    {
      "id": 2,
      "type": "audio",
      "title": "Audio Lesson",
      "data": {
        "url": "https://...",
        "duration": 300
      },
      "order": 2
    },
    {
      "id": 3,
      "type": "image",
      "title": "Diagram",
      "data": {
        "url": "https://...",
        "caption": "System architecture"
      },
      "order": 3
    }
  ]
}
```

#### Add Content to Lesson
```
POST /content
Authorization: Bearer <token>
Content-Type: application/json

{
  "lessonId": 1,
  "type": "text",
  "title": "Core Concepts",
  "data": {
    "text": "Key concepts are...",
    "readTime": 8
  },
  "order": 1
}

Response (201):
{
  "id": 10,
  "lessonId": 1,
  "type": "text",
  "title": "Core Concepts",
  "order": 1,
  "createdAt": "2026-02-08T10:00:00Z"
}
```

#### Update Content
```
PUT /content/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Updated Title",
  "data": {
    "text": "Updated content..."
  }
}

Response (200):
{
  "id": 10,
  "title": "Updated Title",
  "updatedAt": "2026-02-08T11:00:00Z"
}
```

#### Delete Content
```
DELETE /content/:id
Authorization: Bearer <token>

Response (200):
{
  "message": "Content deleted successfully"
}
```

#### Content Types Supported

```
- text        : Lesson text with metadata
- audio       : Audio files or podcasts
- image       : Diagrams, infographics
- video       : Embedded videos
- interactive : Quizzes, exercises
```

---

### Progress & Learning

#### Get User Progress
```
GET /progress/user/:userId
Authorization: Bearer <token>

Response (200):
{
  "userId": 1,
  "lessonsCompleted": 5,
  "lessonsInProgress": 3,
  "totalLessons": 20,
  "completionPercentage": 25,
  "progress": [
    {
      "lessonId": 1,
      "title": "React Basics",
      "status": "completed",
      "score": 95,
      "completedAt": "2026-02-08T10:00:00Z"
    }
  ]
}
```

#### Track Progress
```
POST /progress
Authorization: Bearer <token>
Content-Type: application/json

{
  "lessonId": 1,
  "contentId": 5,
  "status": "in_progress",
  "score": 85
}

Response (201):
{
  "id": 42,
  "userId": 1,
  "lessonId": 1,
  "contentId": 5,
  "status": "in_progress",
  "score": 85,
  "createdAt": "2026-02-08T10:00:00Z"
}
```

#### Get Lesson Statistics
```
GET /progress/lesson/:lessonId/stats
Authorization: Bearer <token>

Response (200):
{
  "lessonId": 1,
  "totalUsers": 150,
  "completionRate": 45,
  "averageScore": 78,
  "averageTime": 1200
}
```

---

## Error Responses

### 400 Bad Request
```json
{
  "error": "Validation Error",
  "details": {
    "email": "Invalid email format"
  }
}
```

### 401 Unauthorized
```json
{
  "error": "Authentication required",
  "message": "No valid token provided"
}
```

### 403 Forbidden
```json
{
  "error": "Permission denied",
  "message": "You don't have permission to modify this resource"
}
```

### 404 Not Found
```json
{
  "error": "Not Found",
  "message": "Lesson with id 999 not found"
}
```

### 500 Server Error
```json
{
  "error": "Internal Server Error",
  "message": "An unexpected error occurred"
}
```

---

## Rate Limiting

- **Rate Limit**: 100 requests per minute per IP
- **Header**: `X-RateLimit-Remaining`

---

## Examples

### JavaScript/Fetch
```javascript
// Register
const res = await fetch('/api/v1/auth/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'user@example.com',
    password: 'password123'
  })
});
const data = await res.json();
localStorage.setItem('token', data.token);

// Get lessons with token
const lessons = await fetch('/api/v1/lessons', {
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
});
```

### Python/Requests
```python
import requests

# Login
response = requests.post(
  'http://localhost:3000/api/v1/auth/login',
  json={'email': 'user@example.com', 'password': 'password123'}
)
token = response.json()['token']

# Get lessons
headers = {'Authorization': f'Bearer {token}'}
lessons = requests.get(
  'http://localhost:3000/api/v1/lessons',
  headers=headers
)
```

---

**Last Updated:** February 8, 2026 
