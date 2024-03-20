@echo off
call taskkill /f /im AfterFX.exe /im aerender.exe  /im AfterFX.com >nul 2>&1
exit /b 0