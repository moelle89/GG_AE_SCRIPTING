@echo off
setlocal

REM Set the paths
set "sourceFolder=%~dp0_BOILERPLATES"
set "destinationFolder=C:\data_driven_ae_template-1"
set "fileName=___boilerplate_23.aep"
set "fullSourcePath=%sourceFolder%\%fileName%"
set "fullDestinationPath=%destinationFolder%\%fileName%"

REM Check if the source file exists
if not exist "%fullSourcePath%" (
    echo Source file "%fileName%" not found in "%sourceFolder%".
    pause
    exit /b 1
)

REM Copy the file with silent overwrite
copy /y "%fullSourcePath%" "%fullDestinationPath%" >nul

if errorlevel 1 (
    echo Failed to copy "%fileName%" to "%destinationFolder%".
    pause
    exit /b 1
) else (
    echo File "%fileName%" copied to "%destinationFolder%" with silent overwrite.
)

pause
exit /b 0