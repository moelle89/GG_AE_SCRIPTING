@echo off
setlocal enabledelayedexpansion

REM Set the paths for the files and folders to include in the zip archive
set "INSTALL_SCRIPT=_INSTALL.bat"
set "BOILERPLATES_FOLDER=_BOILERPLATES"
set "BUILDS_FOLDER=_BUILDS"
set "BUILDS_SCRIPTS_FOLDER=_BUILDS\_scripts"
set "BUILDS_MOJO_FILE=_BUILDS\moelles_mojo.jsxbin"

REM Set the output zip file name
set "OUTPUT_ZIP=moelles_mojo.zip"

REM Create a temporary directory to store the files and folders
set "TEMP_DIR=%TEMP%\ZipTemp"
mkdir "%TEMP_DIR%" 2>nul

REM Copy the specified files and folders to the temporary directory
copy "%INSTALL_SCRIPT%" "%TEMP_DIR%"
xcopy "%BOILERPLATES_FOLDER%" "%TEMP_DIR%\%BOILERPLATES_FOLDER%\" /s /e /i
xcopy "%BUILDS_SCRIPTS_FOLDER%" "%TEMP_DIR%\%BUILDS_SCRIPTS_FOLDER%\" /s /e /i
copy "%BUILDS_MOJO_FILE%" "%TEMP_DIR%\%BUILDS_FOLDER%"

REM Check if the zip file already exists and delete it
if exist "%OUTPUT_ZIP%" del "%OUTPUT_ZIP%"

REM Use PowerShell to create the zip archive
powershell -nologo -noprofile -command "& {Add-Type -A 'System.IO.Compression.FileSystem'; [IO.Compression.ZipFile]::CreateFromDirectory('%TEMP_DIR%', '%OUTPUT_ZIP%');}"

REM Clean up the temporary directory
rmdir /s /q "%TEMP_DIR%"

echo "Zip archive created: %OUTPUT_ZIP%"