# Credentials Dashboard

Welcome to the **Credentials Dashboard** repository. This project consists of a modern web application built with React for the frontend and Node.js/Express for the backend. The application provides a secure and efficient way to manage user credentials and includes robust authentication and authorization mechanisms.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Frontend](#frontend)
  - [Installation](#installation-frontend)
  - [Usage](#usage-frontend)
  - [Project Structure](#project-structure-frontend)
- [Backend](#backend)
  - [Installation](#installation-backend)
  - [Usage](#usage-backend)
  - [Project Structure](#project-structure-backend)
- [Tech Stack](#tech-stack)
- [API Endpoints](#api-endpoints)
- [License](#license)

---

## Overview

The Credentials Dashboard is designed to offer a user-friendly interface for managing credentials. Users can register, log in, and access a secure dashboard where they can add, view, and update credentials. The backend handles user authentication, authorization, and credential management using JWT, Express, and MongoDB.

---

## Features

- **User Authentication:** Secure login and registration using JWT authentication.
- **Role-Based Authorization:** Different access levels for users (e.g., normal users, management, and admin roles).
- **Credential Management:** Add, view, and update credentials associated with different divisions.
- **Division and OU Structure:** Organizes credentials into divisions and organizational units (OUs).
- **Secure Storage:** Passwords are encrypted before storage.
- **REST API Integration:** Communicates with a backend using secure API endpoints.
- **Error Handling:** Displays user-friendly messages when errors occur.
- **Responsive Design:** Built with Bootstrap for a seamless experience across devices.
- **Notifications:** Uses React Toastify for success and error messages.

---

## Frontend

### Installation (Frontend)

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/credentials-dashboard.git
   cd credentials-dashboard
   ```

2. **Install Frontend Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Frontend Development Server:**
   ```bash
   npm start
   ```

*Ensure that the backend server is running to support API operations.*

### Usage (Frontend)

- **Login:** Navigate to the root URL (`/`) to log in using your email and password.
- **Register:** New users can sign up via the `/register` route.
- **Dashboard:** After logging in, access `/dashboard` to view, add, and manage credentials.

The frontend uses React Router for client-side navigation, ensuring a smooth and responsive user experience.

### Project Structure (Frontend)

```
frontend/
├── src
│   ├── pages
│   │   ├── Dashboard.jsx   # Credential management view
│   │   ├── Login.jsx       # User login view
│   │   └── Register.jsx    # User registration view
│   ├── App.js              # Main application component with routing
│   └── index.css           # Global styling
└── package.json            # Frontend dependencies and scripts
```

---

## Backend

### Installation (Backend)

1. **Navigate to the Backend Directory:**
   ```bash
   cd backend
   ```

2. **Install Backend Dependencies:**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**

   Create a `.env` file in the `backend` directory with the following content:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the Backend Server:**
   ```bash
   npm run dev
   ```
   *Alternatively, use `node server.js` (or `node app.js`) if a development script is not defined.*

### Usage (Backend)

The backend server provides API endpoints for user authentication and credential management. It connects to a MongoDB database and uses JWT for secure authentication and authorization. Requests to protected routes require a valid JWT in the `Authorization` header.

### Project Structure (Backend)

```
backend/
├── config
│   └── db.js               # MongoDB connection configuration
├── middleware
│   └── authMiddleware.js   # Authentication and authorization middleware
├── models
│   ├── Credential.js       # Credential schema and model
│   ├── Division.js         # Division schema and model
│   ├── OU.js               # Organizational Unit schema and model
│   └── User.js             # User schema and model (with password hashing)
├── routes
│   ├── authRoutes.js       # Routes for user registration and login
│   └── credentialRoutes.js # Routes for managing credentials
├── .env                    # Environment variables (MONGO_URI and JWT_SECRET)
└── server.js (or app.js)   # Main server file to start the backend
```

---

## Tech Stack

- **Frontend:**
  - **React:** JavaScript library for building user interfaces.
  - **Axios:** For making HTTP requests.
  - **React Router:** For client-side routing.
  - **Bootstrap:** For responsive design and pre-built components.
  - **React Toastify:** For notifications.

- **Backend:**
  - **Node.js & Express:** Server-side framework for building RESTful APIs.
  - **MongoDB & Mongoose:** Database and ODM for data persistence.
  - **JWT (jsonwebtoken):** For secure authentication.
  - **bcryptjs:** For password hashing.

---

## API Endpoints

The application interacts with a backend server running on `http://localhost:5000/api`. Key endpoints include:

- **Authentication:**
  - `POST /api/auth/register` — Register a new user.
  - `POST /api/auth/login` — Authenticate a user and return a JWT.

- **Credential Management:**
  - `GET /api/credentials/{divisionId}` — Retrieve credentials for a specific division.
  - `POST /api/credentials/{divisionId}` — Add a new credential.
  - `PUT /api/credentials/{id}` — Update an existing credential (management users and above).

*Ensure that the backend service is configured correctly to handle these endpoints.*

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

