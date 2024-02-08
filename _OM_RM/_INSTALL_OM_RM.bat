@echo off
setlocal enabledelayedexpansion

REM Set the paths for ScriptUI Panel
set "rootFolder=%~dp0"
set "modules_STRUCTURE1=%~dp0\23.5"
set "modules_STRUCTURE2=%~dp0\23.6"
set "modules_STRUCTURE3=%~dp0\24.0"
set "modules_STRUCTURE4=%~dp0\24.1"
set "modules_STRUCTURE5=%~dp0\24.2"

REM Assuming the script is one level above the "_BUILDS" folder
set "BASE_PATH=%APPDATA%\Adobe\After Effects"
set "FOLDER_STRUCTURE1=23.5"
set "FOLDER_STRUCTURE2=23.6"
set "FOLDER_STRUCTURE3=24.0"
set "FOLDER_STRUCTURE4=24.1"
set "FOLDER_STRUCTURE5=24.2"

REM Check if target folders exist and copy content if they do
for /l %%i in (1, 1, 5) do (
    set "SOURCE=!modules_STRUCTURE%%i!"
    set "TARGET=!BASE_PATH!\!FOLDER_STRUCTURE%%i!"

    if exist "!TARGET!\" (
        xcopy /E /Y "!SOURCE!\*" "!TARGET!\" >nul
    ) else (
        mkdir "!TARGET!" 2>nul
        xcopy /E /Y "!SOURCE!\*" "!TARGET!\" >nul
    )
)

endlocal