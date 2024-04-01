@echo off
setlocal EnableDelayedExpansion
REM Set the specific folder path
set "specificFolder=C:\data_driven_ae_template-1\_assets\packs\%~2"

if exist "%~1" (
REM Delete existing files in Footage folder that also exist in specificFolder
for %%F in ("%specificFolder%\*.*") do (
    set "file=%~1\%%~nxF"
    if exist "!file!" del "!file!"
)
REM Introduce a sleep delay of 1 seconds
timeout /t 1 /nobreak >nul

REM Copy the content of the specific folder to the Footage folder
xcopy "%specificFolder%" "%~1" /E /I /H /C /K /Y
) else (
    echo "Footage folder does not exist."
)
exit