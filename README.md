# Minecraft Griefing Group Website

A full-stack web application for a Minecraft griefing group featuring a public website, member authentication, admin panel, and REST API.

## Tech Stack

### Frontend
- React 18 with TypeScript
- React Router for navigation
- Tailwind CSS for styling
- Axios for API communication
- React Query for state management

### Backend
- Node.js with Express.js
- TypeScript
- PostgreSQL database
- Prisma ORM
- JWT authentication
- bcrypt for password hashing

### Infrastructure
- Docker & Docker Compose
- Environment-based configuration

## Project Structure

```
├── backend/                 # Node.js/Express API
│   ├── src/                # Source code
│   ├── prisma/             # Database schema and migrations
│   ├── package.json        # Backend dependencies
│   ├── tsconfig.json       # TypeScript configuration
│   └── Dockerfile.dev      # Development Docker image
├── frontend/               # React application
│   ├── src/                # Source code
│   ├── public/             # Static assets
│   ├── package.json        # Frontend dependencies
│   ├── tsconfig.json       # TypeScript configuration
│   └── Dockerfile.dev      # Development Docker image
├── docker-compose.yml      # Development environment
└── README.md              # This file
```

## Getting Started

### Prerequisites
- Docker and Docker Compose
- Node.js 18+ (for local development)

### Development Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd minecraft-griefing-website
   ```

2. **Set up environment variables**
   ```bash
   cp backend/.env.example backend/.env
   # Edit backend/.env with your configuration
   ```

3. **Start the development environment**
   ```bash
   docker-compose up --build
   ```

4. **Access the applications**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001
   - Health check: http://localhost:3001/health

### Local Development (without Docker)

1. **Backend setup**
   ```bash
   cd backend
   npm install
   npm run dev
   ```

2. **Frontend setup**
   ```bash
   cd frontend
   npm install
   npm start
   ```

## Features

### Public Features
- Group information and statistics
- Public gallery of achievements
- Responsive design for all devices

### Member Features
- Secure authentication system
- Member dashboard
- Private gallery with upload capabilities
- Profile management

### Admin Features
- Member management
- Content management system
- Group information editing

### API Features
- RESTful API endpoints
- JWT authentication
- Rate limiting
- Comprehensive error handling

## Development Workflow

The project follows a task-driven development approach with the following phases:

1. ✅ Project structure and development environment
2. 🔄 Database schema and models
3. 🔄 Authentication system
4. 🔄 Core API endpoints
5. 🔄 React frontend foundation
6. 🔄 Public website pages
7. 🔄 Member-only features
8. 🔄 Admin panel features
9. 🔄 Advanced features and optimization
10. 🔄 Testing and quality assurance
11. 🔄 Deployment preparation

## Contributing

1. Follow the existing code style and conventions
2. Write tests for new features
3. Update documentation as needed
4. Use meaningful commit messages

## License

This project is for educational purposes.