@echo off
setlocal enabledelayedexpansion

REM Set the paths for ScriptUI Panel
set "rootFolder=%~dp0"
set "modules_STRUCTURE1=%~dp0\23.6"
set "modules_STRUCTURE2=%~dp0\24.0"
set "modules_STRUCTURE3=%~dp0\24.1"
set "modules_STRUCTURE4=%~dp0\24.2"
set "modules_STRUCTURE5=%~dp0\24.3"
set "modules_STRUCTURE6=%~dp0\24.4"
set "modules_STRUCTURE7=%~dp0\24.4.1"
set "modules_STRUCTURE8=%~dp0\24.5"
set "modules_STRUCTURE9=%~dp0\24.6"
set "modules_STRUCTURE10=%~dp0\24.7"
set "modules_STRUCTURE11=%~dp0\24.8"
set "modules_STRUCTURE12=%~dp0\24.9"
set "modules_STRUCTURE13=%~dp0\25.0"
set "modules_STRUCTURE14=%~dp0\25.1"
set "modules_STRUCTURE15=%~dp0\25.2"
set "modules_STRUCTURE16=%~dp0\25.3"
set "modules_STRUCTURE17=%~dp0\25.4"
set "modules_STRUCTURE18=%~dp0\25.5"
set "modules_STRUCTURE19=%~dp0\25.6"
set "modules_STRUCTURE20=%~dp0\25.7"
set "modules_STRUCTURE21=%~dp0\25.8"
set "modules_STRUCTURE22=%~dp0\25.9"
set "modules_STRUCTURE23=%~dp0\26.0"
set "modules_STRUCTURE24=%~dp0\24.6.2"

REM Assuming the script is one level above the "_BUILDS" folder
set "BASE_PATH=%APPDATA%\Adobe\After Effects"
set "FOLDER_STRUCTURE1=23.6"
set "FOLDER_STRUCTURE2=24.0"
set "FOLDER_STRUCTURE3=24.1"
set "FOLDER_STRUCTURE4=24.2"
set "FOLDER_STRUCTURE5=24.3"
set "FOLDER_STRUCTURE6=24.4"
set "FOLDER_STRUCTURE7=24.4.1"
set "FOLDER_STRUCTURE8=24.5"
set "FOLDER_STRUCTURE9=24.6"
set "FOLDER_STRUCTURE10=24.7"
set "FOLDER_STRUCTURE11=24.8"
set "FOLDER_STRUCTURE12=24.9"
set "FOLDER_STRUCTURE13=25.0"
set "FOLDER_STRUCTURE14=25.1"
set "FOLDER_STRUCTURE15=25.2"
set "FOLDER_STRUCTURE16=25.3"
set "FOLDER_STRUCTURE17=25.4"
set "FOLDER_STRUCTURE18=25.5"
set "FOLDER_STRUCTURE19=25.6"
set "FOLDER_STRUCTURE20=25.7"
set "FOLDER_STRUCTURE21=25.8"
set "FOLDER_STRUCTURE22=25.9"
set "FOLDER_STRUCTURE23=26.0"
set "FOLDER_STRUCTURE24=24.6.2"

REM Check if target folders exist and copy content if they do
for /l %%i in (1, 1, 24) do (
    set "SOURCE=!modules_STRUCTURE%%i!"
    set "TARGET=!BASE_PATH!\!FOLDER_STRUCTURE%%i!"

    if exist "!TARGET!\" (
        xcopy /E /Y "!SOURCE!\*" "!TARGET!\" >nul
    ) else (
        mkdir "!TARGET!" 2>nul
        xcopy /E /Y "!SOURCE!\*" "!TARGET!\" >nul
    )
)

echo render- and output-modules updated.
echo this window will close after 5 seconds.
endlocal
timeout /t 5 >nul
exit