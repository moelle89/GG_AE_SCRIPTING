@echo off
setlocal EnableDelayedExpansion
set "specificFolder=C:\data_driven_ae_template-1\_assets\packs\07"
set "footageFolder=C:\data_driven_ae_template-1\(Footage)\Footage"

REM Check if the files to copy exist in the Footage folder
if exist "%footageFolder%\" (

    REM Delete existing files in Footage folder that also exist in specificFolder
    for %%F in ("%specificFolder%\*.*") do (
        set "file=%footageFolder%\%%~nxF"
        if exist "!file!" del "!file!"
    )

    REM Introduce a sleep delay of 5 seconds
    timeout /t 1 /nobreak >nul

    REM Copy the content of the specific folder to the Footage folder
    xcopy "%specificFolder%" "%footageFolder%" /E /I /H /C /K /Y
) else (
    echo "Footage folder does not exist."
)
exit