# 🔐 JWT Authentication API with Express & MongoDB

This is a simple and clean JWT-based authentication API built with **Node.js**, **Express**, and **MongoDB**. It includes user registration, login, token-based authentication, and protected routes using middleware.

---

## 📁 Folder Structure

JWT_production_setup-root/
│
├── controllers/ # Business logic (register, login, user profile)
│ ├── authController.js
│ └── userController.js
│
├── middleware/ # JWT auth middleware
│ └── authMiddleware.js
│
├── models/ # Mongoose user schema
│ └── userModel.js
│
├── routes/ # API route definitions
│ ├── authRoutes.js
│ └── userRoutes.js
│
├── config/ # MongoDB connection setup
│ └── db.js
│
├── .env # Secrets and environment variables
├── .gitignore
├── package.json
├── index.js # Entry point
└── README.md

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

Install dependencies
npm install express mongoose dotenv bcryptjs jsonwebtoken
