# Employee_leave_Mangement

A full-stack Employee Leave Management System developed using the MERN Stack (MongoDB, Express.js, React.js, and Node.js). The application enables employees to register, log in, apply for leave, and manage their leave requests through a user-friendly interface.

## Features

- Employee Registration and Login
- Secure Authentication
- Employee Dashboard
- Apply for Leave
- Leave History Management
- Profile Management
- RESTful API Integration
- MongoDB Atlas Database

## Technologies Used

### Frontend
- React.js
- React Router DOM
- Axios
- HTML5
- CSS3

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcrypt.js

## Project Structure

```
Employee_Leave_Management_System
│
├── Backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── .env
│   ├── package.json
│   └── server.js
│
└── Frontend
    ├── public
    ├── src
    │   ├── assets
    │   ├── pages
    │   ├── services
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── package.json
    └── vite.config.js
```

## Installation

### Backend

```bash
cd Backend
npm install
npm run dev
```

### Frontend

```bash
cd Frontend
npm install
npm run dev
```

## Environment Variables

Create a `.env` file inside the Backend folder and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## Author

**Rajesh Pilli**
