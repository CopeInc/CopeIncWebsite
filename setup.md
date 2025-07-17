# Quick Setup Guide

## Install Dependencies

### Option 1: Using Docker (Recommended)
```bash
docker-compose up --build
```

### Option 2: Manual Installation

1. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Start Development Servers**
   
   Backend (in backend directory):
   ```bash
   npm run dev
   ```
   
   Frontend (in frontend directory):
   ```bash
   npm start
   ```

## After Dependencies are Installed

Once you have the dependencies installed, I can update the App.tsx to include the full routing and React Query setup.

## Current Status
- ✅ Project structure complete
- ✅ Basic React app working (without routing)
- ✅ Backend API ready
- 🔄 Dependencies need to be installed
- 🔄 Full React app with routing (after dependencies)

## Next Steps
1. Install dependencies using one of the methods above
2. Let me know when ready, and I'll restore the full App.tsx with routing
3. Continue with database setup (Task 2)