# Todo List Full Stack App

A simple full stack todo list application built with React (TypeScript) for the frontend and Node.js/Express for the backend.

## Features

- Create new todos
- Mark todos as completed
- Delete todos
- Simple and clean UI
- Full stack application with API endpoints

## Project Structure

- `frontend/` - React TypeScript frontend
- `backend/` - Node.js/Express backend API

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

The backend server will run on http://localhost:5000

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

The frontend application will run on http://localhost:3000

## API Endpoints

- `GET /api/todos` - Get all todos
- `GET /api/todos/:id` - Get a specific todo
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo

## Technologies Used

- **Frontend**:
  - React
  - TypeScript
  - Context API for state management
  - Axios for API requests

- **Backend**:
  - Node.js
  - Express
  - TypeScript

## Future Improvements

- Add user authentication
- Add categories or tags for todos
- Add due dates for todos
- Implement filtering and sorting 