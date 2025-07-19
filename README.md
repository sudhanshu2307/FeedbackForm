text
# Feedback Collection Platform

A modern full-stack (MERN) web application for creating, sharing, and analyzing feedback forms.

## Features

- **Admin registration and login** (JWT authentication)
- **Admin dashboard** to create feedback forms (3–5 questions, text or MCQ)
- **Public link** for anyone to submit feedback, no login required
- **Admin view of responses** with summary for MCQ answers
- **Modern UI** using Material-UI (MUI)
- **Responsive, usable, and extensible interfaces**

## Tech Stack

- **Frontend:** React, React Router, Axios, Material UI (MUI)
- **Backend:** Express, Node.js, MongoDB, Mongoose, JWT, bcryptjs, CORS, dotenv
- **Database:** Local MongoDB instance (localhost)

> **Note:**  
> This project uses a **local MongoDB instance** (`mongodb://localhost:27017/feedback-platform`).  
> You do **not** need a MongoDB Atlas/cloud account to run or test.

## Folder Structure

feedback-platform/
├── backend/
│ ├── models/
│ ├── controllers/
│ ├── routes/
│ ├── middleware/
│ ├── .env
│ └── server.js
└── frontend/
├── src/
│ ├── api/
│ ├── components/
│ │ ├── Admin/
│ │ ├── Auth/
│ │ ├── Form/
│ └── App.js
└── package.json

text

## Local Setup Instructions

### 1. **Install and Start Local MongoDB**

- Install [MongoDB Community Edition](https://www.mongodb.com/try/download/community) for your OS.
- **Start MongoDB** on default port `27017` (most systems auto-start after install).

### 2. **Backend Setup**

cd backend
npm install

text

- Create a `.env` file in the backend folder:

    ```
    MONGO_URI=mongodb://localhost:27017/feedback-platform
    JWT_SECRET=anysecretkeyyouwant
    ```

- Start the backend server:
    ```
    npm run dev
    ```
- You’ll see: `Server running on port 5000`

### 3. **Frontend Setup**

cd ../frontend
npm install

text

- Start the React app:
    ```
    npm start
    ```
- Open [http://localhost:3000](http://localhost:3000) in your browser.

## How to Use

1. **Register as Admin:**  
   Go to `/register`, create an admin account.

2. **Login as Admin:**  
   Go to `/login` and sign in.

3. **Create Feedback Form:**  
   Use the dashboard to create forms (3–5 questions, any type).

4. **Distribute the form:**  
   Copy the “public link” for your form—anyone can fill out and submit feedback.

5. **View & Analyze Responses:**  
   In your dashboard, click “View Responses” to see all submissions and MCQ answer summaries.

## Environment Variables

- See `.env.example` or above.  
- Key variable:  
    ```
    MONGO_URI=mongodb://localhost:27017/feedback-platform
    ```
- If running MongoDB on another host/port, update this URI.

