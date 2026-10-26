# 🚀 START HERE - Quiz App Setup Guide

## ⚠️ IMPORTANT: You Need 2 Terminals Running!

### Method 1: Using Batch Files (Easiest for Windows)

1. **Double-click `start-backend.bat`**
   - A terminal will open showing "Quiz proxy backend running on http://localhost:5000"
   - ✅ Keep this window open!

2. **Double-click `start-frontend.bat`**
   - Another terminal will open
   - Wait for "Local: http://localhost:5173"
   - ✅ Keep this window open too!

3. **Open browser**: http://localhost:5173

---

### Method 2: Manual Terminal Commands

#### Terminal 1 (Backend):
```bash
cd backend
node server.js
```
**Wait for**: `Quiz proxy backend running on http://localhost:5000`

#### Terminal 2 (Frontend):
```bash
npm run dev
```
**Wait for**: `Local: http://localhost:5173`

---

## 🧪 Test If Backend Is Working

Run this in a terminal:
```bash
node test-backend.cjs
```

You should see: `✅ Backend is working!`

---

## ❌ Common Errors & Solutions

### Error: "Backend server is not running"
**Solution**: Start the backend first!
```bash
cd backend
node server.js
```

### Error: "Port 5000 is already in use"
**Solution**: Kill the process using port 5000:
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID_NUMBER> /F

# Then restart backend
cd backend
node server.js
```

### Error: "Failed to fetch questions"
**Checklist**:
- ✅ Is backend running? (Check Terminal 1)
- ✅ Do you see "Quiz proxy backend running on http://localhost:5000"?
- ✅ Is `.env` file present in root folder?
- ✅ Run `node test-backend.cjs` to verify

---

## 📝 Quick Checklist

Before using the app:
- [ ] Backend dependencies installed (`cd backend && npm install`)
- [ ] Frontend dependencies installed (`npm install`)
- [ ] `.env` file exists in root folder
- [ ] Backend server running (Terminal 1)
- [ ] Frontend server running (Terminal 2)
- [ ] Browser open at http://localhost:5173

---

## 🎯 How to Use the App

1. Open http://localhost:5173
2. Select a quiz category (HTML, JavaScript, etc.)
3. Choose difficulty (Easy, Medium, Hard)
4. Answer questions within the time limit
5. View your score and review answers

---

## 🆘 Still Having Issues?

1. Close both terminals
2. Run test: `node test-backend.cjs`
3. If test fails, check if port 5000 is free
4. Restart backend: `cd backend && node server.js`
5. Restart frontend: `npm run dev`

**Need more help?** Check the console logs in both terminals for error messages.
