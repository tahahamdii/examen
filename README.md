# Event Management API

A REST API for managing events and reservations built with NestJS and MongoDB Atlas.

## Features

- User authentication with JWT tokens
- Event management (CRUD) for administrators
- Event reservation system for authenticated users
- Logger middleware for request logging
- Containerization with Docker

## Prerequisites

- Node.js (v18 or higher)
- MongoDB Atlas account
- Docker

## Installation

1. Clone the repository
2. Copy `.env.example` to `.env` and update the configuration
3. Install dependencies:
   ```bash
   npm install
   ```

## Running the application

### Development
```bash
npm run start:dev
```

### Production
```bash
npm run start:prod
```

### Docker
```bash
docker build -t event-management-api .
docker run -p 3000:3000 event-management-api
```

## API Endpoints

### Authentication
- POST /auth/register - Register a new user
- POST /auth/login - Login and get JWT token

### Events (Admin only)
- POST /events - Create a new event
- GET /events - Get all events
- GET /events/:id - Get event details
- PUT /events/:id - Update event
- DELETE /events/:id - Delete event

### Reservations (Authenticated users)
- POST /reservations/:eventId - Create reservation
- DELETE /reservations/:id - Cancel reservation
- GET /reservations/user - Get user's reservations

## Security

- JWT authentication for all protected routes
- Role-based access control (Admin/User)
- Password hashing with bcrypt
- Input validation with class-validator

## License

MIT
