@echo off
echo 🚀 Setting up Minecraft Griefing Website...
echo.

echo 📦 Installing frontend dependencies...
cd frontend
call npm install
if %errorlevel% neq 0 (
    echo ❌ Frontend installation failed
    pause
    exit /b 1
)
echo ✅ Frontend dependencies installed
echo.

echo 📦 Installing backend dependencies...
cd ..\backend
call npm install
if %errorlevel% neq 0 (
    echo ❌ Backend installation failed
    pause
    exit /b 1
)
echo ✅ Backend dependencies installed
echo.

echo 📝 Setting up environment variables...
if not exist .env (
    copy .env.example .env
    echo ✅ Environment file created
) else (
    echo ℹ️ Environment file already exists
)
echo.

echo 🎉 Setup complete!
echo.
echo To start the development servers:
echo 1. Backend: cd backend && npm run dev
echo 2. Frontend: cd frontend && npm start
echo.
pause