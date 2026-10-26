# Quiz Application - React + Vite

A quiz application built with React and Vite that fetches questions from QuizAPI.io.

## 🚀 Quick Start (Follow These Steps)

### Step 1: Install Dependencies
```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
npm install
cd ..
```

### Step 2: Start Backend Server (IMPORTANT - Do This First!)
Open a terminal and run:
```bash
cd backend
node server.js
```

You should see: `Quiz proxy backend running on http://localhost:5000`

**⚠️ Keep this terminal running! Don't close it.**

### Step 3: Start Frontend (In a New Terminal)
Open a **NEW** terminal and run:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

### Step 4: Test
Open your browser to `http://localhost:5173` and try selecting a difficulty level.

## 🔧 Troubleshooting

### Error: "Backend server is not running"
- Make sure you started the backend server first (Step 2)
- Check if port 5000 is available
- Look for the message: `Quiz proxy backend running on http://localhost:5000`

### Test Backend Connection
Run this command to test if backend is working:
```bash
node test-backend.cjs
```

### Still Not Working?
1. Check if both terminals are running
2. Make sure `.env` file exists in the root directory
3. Restart both servers

## 📁 Project Structure

```
├── backend/
│   ├── server.js          # Backend proxy server
│   └── package.json
├── src/
│   ├── Componts/
│   │   ├── Quiz.jsx       # Main quiz component
│   │   └── Home.jsx
│   └── App.jsx
├── .env                   # API key (already configured)
└── package.json
```

## 🎯 How It Works

1. Frontend (React) → Backend (Express) → QuizAPI.io
2. Backend adds the API key securely
3. No CORS issues because API key is sent from server

## ✨ Features

- Multiple difficulty levels (Easy, Medium, Hard)
- Timed questions
- Score tracking
- Detailed review of answers
- Multiple quiz categories
