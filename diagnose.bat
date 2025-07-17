@echo off
echo 🔍 Diagnosing frontend issues...
echo.

echo 📋 Checking Node.js version:
node --version
echo.

echo 📋 Checking npm version:
npm --version
echo.

echo 📋 Checking if port 3000 is in use:
netstat -ano | findstr :3000
echo.

echo 📋 Checking frontend directory:
if exist "frontend\package.json" (
    echo ✅ Frontend package.json found
) else (
    echo ❌ Frontend package.json missing
)

if exist "frontend\node_modules" (
    echo ✅ Frontend node_modules found
) else (
    echo ❌ Frontend node_modules missing - run 'npm install' in frontend directory
)

if exist "frontend\src\index.tsx" (
    echo ✅ Frontend index.tsx found
) else (
    echo ❌ Frontend index.tsx missing
)

if exist "frontend\public\index.html" (
    echo ✅ Frontend index.html found
) else (
    echo ❌ Frontend index.html missing
)

echo.
echo 📋 Checking backend directory:
if exist "backend\package.json" (
    echo ✅ Backend package.json found
) else (
    echo ❌ Backend package.json missing
)

if exist "backend\node_modules" (
    echo ✅ Backend node_modules found
) else (
    echo ❌ Backend node_modules missing - run 'npm install' in backend directory
)

echo.
echo 🔧 Suggested next steps:
echo 1. If node_modules are missing, run: npm install
echo 2. Try starting frontend with: cd frontend && npm start
echo 3. Check browser at: http://localhost:3000
echo 4. If port 3000 is busy, try: set PORT=3001 && npm start
echo.
pause