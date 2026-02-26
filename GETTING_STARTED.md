# Getting Started - Micro-Learning App

Welcome! This guide gets you up and running in 5 minutes.

> **Note:** These docs are a starting point. As you work on the project, **please update them** to reflect what you learn and how the project evolves. Good documentation is a shared responsibility!

---

## 🚀 Setup in 5 Minutes

> **Windows Users**: Use Command Prompt (cmd.exe), not PowerShell, to avoid npm execution policy issues.

### 1. Clone the repo
```bash
git clone https://github.com/YOUR-ORG/micro-learning-app.git
cd micro-learning-app
```

### 2. Setup your track

**Frontend (React + Vite):**
```bash
cd frontend
npm install
npm run dev
# Open http://localhost:5173
```

**Backend (Java + Spring Boot):**
```bash
cd backend
.\mvnw.cmd spring-boot:run
# API runs at http://localhost:8080
```

### 3. Find work & contribute
- Go to [GitHub Issues](../../issues) - look for `good first issue`
- Create a branch: `git checkout -b feature/issue-123-name`
- Make your changes, commit, push
- Create a pull request
- Celebrate when merged! 🎉

---

## 📚 Docs Map

| Need | Read This |
|------|-----------|
| How to contribute | [CONTRIBUTING.md](CONTRIBUTING.md) |
| System architecture | [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) |
| Frontend setup help | [docs/FRONTEND_SETUP.md](docs/FRONTEND_SETUP.md) |
| Backend setup help | [docs/BACKEND_SETUP.md](docs/BACKEND_SETUP.md) |
| Project management | [docs/PROJECT_MANAGEMENT.md](docs/PROJECT_MANAGEMENT.md) |
| Deployment | [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) |
| API reference | [docs/API.md](docs/API.md) |
| Organizer setup | [docs/EXTERNAL_SETUP.md](docs/EXTERNAL_SETUP.md) |

---

## 👥 Team Roles (Suggested)

Pick 14 students, organize into roles:

```
Frontend (4 students)
├─ Frontend Lead 1
├─ Frontend Lead 2
├─ Frontend Developer 1
└─ Frontend Developer 2

Backend (4 students)
├─ Backend Lead 1
├─ Backend Lead 2
├─ Backend Developer 1
└─ Backend Developer 2

DevOps & QA (3 students)
├─ DevOps Engineer
├─ QA Engineer 1
└─ QA Engineer 2

Design & Management (3 students)
├─ UI/UX Designer
├─ Technical Writer
└─ Project Manager
```

---

## 🗓️ 10-Day Timeline

### Day 1-2: Architecture & Setup
- Review system architecture (React + Spring Boot + PostgreSQL)
- Set up development environments
- Run frontend and backend locally
- Configure CI/CD pipeline
- Create GitHub issues

**Target**: All environments working, 50+ issues created

### Day 3-5: Core Development
- Implement authentication
- Build core APIs
- Create frontend layout
- Get frontend/backend talking

**Target**: 30+ PRs merged, core features working

### Day 6-8: Features & Testing
- Implement lesson management
- Add multi-modal content support
- Write tests
- Fix bugs

**Target**: 60+ PRs merged, core features complete

### Day 9: Polish & Optimization
- Code optimization
- Performance tuning
- UI/UX refinement
- Documentation updates

**Target**: All tests passing, no linting errors

### Day 10: Deployment & Demo
- Deploy to production
- Run final tests
- Prepare and deliver demo
- Celebrate! 🎉

**Target**: Production deployment complete, impressive demo

---

## 🛠️ Tech Stack

### Frontend
- **React 18** with Vite
- **TailwindCSS** for styling
- **Zustand** for state management
- **React Router** for navigation

### Backend
- **Node.js** + **Express.js**
- **PostgreSQL** for database
- **JWT** for authentication
- **Docker** for containerization

### DevOps
- **GitHub Actions** for CI/CD
- **Vercel** for frontend hosting
- **Railway** for backend hosting

---

## 📞 Communication

### Daily Standup
**Time**: 9:00 AM (or your start time)
**Location**: Video call or [GitHub Discussions](../../discussions)
**Format**:
- What did you do yesterday?
- What are you doing today?
- Any blockers?

### Getting Help
1. **Check documentation first** - Most answers are in docs/
2. **Search closed issues** - Someone probably had the issue
3. **Create a new issue** - If stuck, document it
4. **Ask in Slack/Discord** - For quick questions
5. **Start a discussion** - For architecture questions

### Reporting Progress
- Update GitHub issues regularly
- Move cards on [GitHub Projects](../../projects) board
- Comment on PRs with progress
- Celebrate wins in Slack! 🎉

---

## 🎯 Success Criteria

By the end of Day 10, you should have:

- ✅ 80+ PRs merged
- ✅ 120+ issues closed
- ✅ 70%+ code coverage
- ✅ All tests passing
- ✅ Frontend deployed to Vercel
- ✅ Backend deployed to Railway
- ✅ Working authentication
- ✅ Users can create and view lessons
- ✅ Multi-modal content support
- ✅ Progress tracking
- ✅ Complete documentation
- ✅ Impressive demo

---

## 🚨 Important Reminders

### ⚠️ DO NOT
- Commit `.env` files with secrets
- Commit `node_modules/` or `__pycache__/`
- Force push to `main` branch
- Merge without code review
- Skip writing tests
- Leave broken code in main

### ✅ DO
- Write clear commit messages
- Ask for help early
- Review others' PRs quickly
- Test your code locally first
- Update documentation
- Keep branches small and focused
- Communicate often

---

## 🎓 Learning Outcomes

After this hackathon, you'll understand:

1. **Open Source Development**
   - How to contribute to projects
   - Code review best practices
   - Collaborative development

2. **Full-Stack Development**
   - Frontend frameworks (React)
   - Backend APIs (Node.js)
   - Databases (PostgreSQL)

3. **DevOps & Deployment**
   - CI/CD pipelines
   - Docker containerization
   - Cloud deployment

4. **Project Management**
   - Using GitHub Issues effectively
   - Working in agile sprints
   - Team coordination

5. **Software Engineering**
   - Code quality
   - Testing practices
   - Documentation

---

## 📊 Track Your Progress

Check these metrics throughout the hackathon:

```
Day 1   |████░░░░░░░░░░░░░░░░ 20% - Architecture done
Day 3   |████████░░░░░░░░░░░░ 40% - Core APIs working
Day 5   |████████████░░░░░░░░ 60% - Features implemented
Day 8   |████████████████░░░░ 80% - Polishing
Day 10  |████████████████████ 100% - LAUNCHED! 🚀
```

---

## 🎉 Final Notes

This is a real open-source project. Everything you build will be:
- **Public** - Available on GitHub
- **Useful** - Actually helps people learn
- **Professional** - Follows industry standards
- **Educational** - You'll learn real skills

Be proud of your work!

---

## 🤝 Community

This project is open source. After the hackathon:
- Keep the repo public
- Accept contributions from others
- Share your experience
- Help future contributors
- Maybe it becomes a real tool!

---

## 📖 Next Steps

1. **Read** [CONTRIBUTING.md](CONTRIBUTING.md)
2. **Set up** your development environment
3. **Check** [GitHub Issues](../../issues) for first task
4. **Join** the daily standup
5. **Have fun** building!

---

**Ready to build something amazing?**

```
git clone https://github.com/YOUR-ORG/micro-learning-app.git
cd micro-learning-app
# Pick your track and start coding!
```

**Questions?** Create an issue or start a discussion.

**Let's go!** 🚀

---

**Last Updated:** February 8, 2026

**Built with ❤️ for NC State University Computer Science Students**
