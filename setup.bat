@echo off
echo ========================================
echo Property Rental Dashboard Setup
echo ========================================
echo.

echo Step 1: Installing dependencies...
call npm install
echo.

echo Step 2: Initializing Git repository...
git init
git add .
git commit -m "Initial commit: Property Rental Dashboard with GPS integration"
echo.

echo ========================================
echo Setup Complete! 
echo ========================================
echo.
echo Next steps:
echo.
echo 1. Create a GitHub repository at https://github.com/new
echo 2. Run these commands (replace YOUR_USERNAME):
echo.
echo    git remote add origin https://github.com/YOUR_USERNAME/property-rental-dashboard.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo 3. To run the development server:
echo    npm run dev
echo.
echo 4. To deploy, see DEPLOYMENT_GUIDE.md
echo.
echo ========================================
pause
