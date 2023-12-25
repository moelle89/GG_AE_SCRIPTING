@echo off
setlocal

REM Set the paths
set "sourceFolder=%~dp0_BOILERPLATES"
set "destinationFolder=C:\data_driven_ae_template-1"
set "fileName=___boilerplate_23.aep"
set "fullSourcePath=%sourceFolder%\%fileName%"
set "fullDestinationPath=%destinationFolder%\%fileName%"
set "footageFolder=(Footage)"
set "fullFootageSource=%sourceFolder%\%footageFolder%"
set "fullFootageDestination=%destinationFolder%\%footageFolder%"

REM Check if the source file exists
if not exist "%fullSourcePath%" (
    echo Source file "%fileName%" not found in "%sourceFolder%".
    pause
    exit /b 1
)

REM Check if the footage folder exists in the source directory
if not exist "%fullFootageSource%" (
    echo Source folder "%footageFolder%" not found in "%sourceFolder%".
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

REM Copy the "(Footage)" folder and its contents
xcopy /s /y "%fullFootageSource%" "%fullFootageDestination%" >nul

if errorlevel 1 (
    echo Failed to copy "%footageFolder%" folder to "%destinationFolder%".
    pause
    exit /b 1
) else (
    echo Folder "%footageFolder%" copied to "%destinationFolder%" with silent overwrite.
)

pause
exit /b 0