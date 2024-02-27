# Task Manager

This is a simple Task Manager application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack.

## Prerequisites

Before running the application, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Getting Started

### Backend

1. Navigate to the `backend` directory.

    ```bash
    cd backend
    ```

2. Install backend dependencies.

    ```bash
    npm install
    ```

3. Open the `server.js` file and replace `'mongodb://localhost:27017'` with your MongoDB connection string.

4. Start the backend server.

    ```bash
    node server.js
    ```

   The server will be running at http://localhost:5000.

### Frontend

1. Open a new terminal window.

2. Navigate to the `frontend` directory.

    ```bash
    cd frontend
    ```

3. Install frontend dependencies.

    ```bash
    npm install
    ```

4. Update the `proxy` field in `package.json` to point to your backend server.

    ```json
    "proxy": "http://localhost:5000",
    ```

5. Start the React app.

    ```bash
    npm start
    ```

   The app will be running at http://localhost:3000.

## Usage

1. Open your web browser and go to http://localhost:3000.

2. Use the Task Manager to add, update, mark as complete/incomplete, and delete tasks.
