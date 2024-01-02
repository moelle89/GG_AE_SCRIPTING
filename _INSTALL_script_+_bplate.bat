@echo off
setlocal enabledelayedexpansion

REM Set the paths for AE template
set "aeSourceFolder=%~dp0_BOILERPLATES"
set "aeDestinationFolder=C:\data_driven_ae_template-1"
set "aeFileName=___boilerplate_23.aep"
set "fullAeSourcePath=%aeSourceFolder%\%aeFileName%"
set "fullAeDestinationPath=%aeDestinationFolder%\%aeFileName%"
set "aeFootageFolder=(Footage)"
set "fullAeFootageSource=%aeSourceFolder%\%aeFootageFolder%"
set "fullAeFootageDestination=%aeDestinationFolder%\%aeFootageFolder%"

REM Check if the AE source file exists
if not exist "%fullAeSourcePath%" (
    echo Source file "%aeFileName%" not found in "%aeSourceFolder%".
    pause
    exit /b 1
)

REM Check if the AE footage folder exists in the source directory
if not exist "%fullAeFootageSource%" (
    echo Source folder "%aeFootageFolder%" not found in "%aeSourceFolder%".
    pause
    exit /b 1
)

REM Check if the destination folder for AE exists, create it if not
if not exist "%aeDestinationFolder%" (
    mkdir "%aeDestinationFolder%"
    echo Destination folder "%aeDestinationFolder%" created.
)

REM Copy the AE file with silent overwrite
copy /y "%fullAeSourcePath%" "%fullAeDestinationPath%" >nul

if errorlevel 1 (
    echo Failed to copy "%aeFileName%" to "%aeDestinationFolder%".
    pause
    exit /b 1
) else (
    echo File "%aeFileName%" copied to "%aeDestinationFolder%" with silent overwrite.
)

REM Copy the "(Footage)" folder and its contents for AE with quiet mode using robocopy
robocopy "%fullAeFootageSource%" "%fullAeFootageDestination%" /s /e /np /njh /njs /ndl /nc /ns /nc /ndl /np /nfl /ndl /mt:8 >nul

rem Check if robocopy reported any failures for AE
if not %errorlevel% leq 7 (
    echo Failed to copy "%aeFootageFolder%" folder to "%aeDestinationFolder%".
    pause
    exit /b 1
) else (
    echo Folder "%aeFootageFolder%" copied to "%aeDestinationFolder%" with silent overwrite.
)

REM Set the paths for ScriptUI Panel
REM Set the paths for ScriptUI Panel
set "scriptSearchDir=%APPDATA%\Adobe\After Effects"
set "scriptTargetFolder=Scripts\ScriptUI Panels"
set "scriptSearchString=moelles_mojo"
set "scriptSourceFile=moelles_mojo.jsxbin"
set "scriptSourceFolder=_scripts"

REM Assuming the script is one level above the "_BUILDS" folder
set "buildsFolder=%~dp0_BUILDS"

for /d %%i in ("%scriptSearchDir%\*") do (
    if exist "%%i\%scriptTargetFolder%" (
        echo Processing files in %%i\%scriptTargetFolder%
        
        rem Delete files containing the search string
        for %%f in ("%%i\%scriptTargetFolder%\*%scriptSearchString%*") do (
            echo Deleting: %%f
            del "%%f"
        )

        rem Copy the specified file to the Script UI Path
        if exist "%buildsFolder%\%scriptSourceFile%" (
            echo Copying: %scriptSourceFile% to %%i\%scriptTargetFolder%
            copy /Y "%buildsFolder%\%scriptSourceFile%" "%%i\%scriptTargetFolder%"
        ) else (
            echo Warning: Source file %scriptSourceFile% not found.
        )

        rem Copy the specified folder and its contents to the Script UI Path
        if exist "%buildsFolder%\%scriptSourceFolder%" (
            echo Copying folder: %scriptSourceFolder% to %%i\%scriptTargetFolder%
            xcopy /E /I /Y "%buildsFolder%\%scriptSourceFolder%" "%%i\%scriptTargetFolder%\%scriptSourceFolder%"
        ) else (
            echo Warning: Source folder %scriptSourceFolder% not found.
        )
    )
)

pause
exit /b 0