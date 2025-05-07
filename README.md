# 🔐 JWT Authentication API with Express & MongoDB

This is a simple and clean JWT-based authentication API built with **Node.js**, **Express**, and **MongoDB**. It includes user registration, login, token-based authentication, and protected routes using middleware.

---

## 📁 Folder Structure

JWT_production_setup-root/
│
├── controllers/
│   ├── authController.js       # Handles register and login logic
│   └── userController.js       # Handles protected user routes like profile/dashboard
│
├── middleware/
│   └── authMiddleware.js       # JWT token verification middleware
│
├── models/
│   └── userModel.js            # Mongoose schema for users
│
├── routes/
│   ├── authRoutes.js           # Defines /register and /login routes
│   └── userRoutes.js           # Defines protected routes like /profile
│
├── config/
│   └── db.js                   # MongoDB connection setup
│
├── .env                        # Environment variables (e.g., JWT secret, DB URI, PORT)
├── .gitignore                  # Ignore node_modules, .env, etc.
├── package.json                # Project metadata and dependencies
├── index.js                    # Entry point, sets up Express server and routes
└── README.md                   # Project documentation

---

## ⚙️ Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- bcryptjs (password hashing)
- dotenv (env config)

---

## 🚀 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/amankhan-7/JWT_production_setup.git
   
2. **Dependencies**
npm install express mongoose dotenv bcryptjs jsonwebtoken
