@echo off
setlocal enabledelayedexpansion

REM Set the paths for AE template
set "aeSourceFolder=%~dp0_BOILERPLATES"
set "aeDestinationFolder=C:\data_driven_ae_template-1"
set "aeFileName=___boilerplate_23.aep"
set "fullAeSourcePath=%aeSourceFolder%\%aeFileName%"
set "fullAeDestinationPath=%aeDestinationFolder%\%aeFileName%"
set "aeFootageFolder=(Footage)"
set "aeAssetsFolder=_assets"
set "fullAeFootageSource=%aeSourceFolder%\%aeFootageFolder%"
set "fullAeFootageDestination=%aeDestinationFolder%\%aeFootageFolder%"
set "fullAeAssetsSource=%aeSourceFolder%\%aeAssetsFolder%"
set "fullAeAssetsDestination=%aeDestinationFolder%\%aeAssetsFolder%"

REM Check if the destination folder for AE exists, create it if not
if not exist "%aeDestinationFolder%" (
    mkdir "%aeDestinationFolder%"
)

REM Copy the AE file with silent overwrite
copy /y "%fullAeSourcePath%" "%fullAeDestinationPath%" >nul

REM Copy the "(Footage)" folder and its contents for AE with quiet mode using robocopy
robocopy "%fullAeFootageSource%" "%fullAeFootageDestination%" /s /e /np /njh /njs /ndl /nc /ns /nc /ndl /np /nfl /ndl /mt:8 >nul
robocopy "%fullAeAssetsSource%" "%fullAeAssetsDestination%" /s /e /np /njh /njs /ndl /nc /ns /nc /ndl /np /nfl /ndl /mt:8 >nul

REM Set the paths for ScriptUI Panel
set "scriptSearchDir=%APPDATA%\Adobe\After Effects"
set "scriptTargetFolder=Scripts\ScriptUI Panels"
set "scriptSearchString=moelles_mojo"
set "scriptSourceFile=moelles_mojo.jsxbin"
set "scriptSourceFolder=_scripts"
set "imgSourceFolder=_img"
set "rootFolder=%~dp0"
REM Assuming the script is one level above the "_BUILDS" folder
set "buildsFolder=%~dp0_BUILDS"
set "delfolder=%APPDATA%\Adobe\After Effects\Scripts

set "BASE_PATH=%APPDATA%\Adobe\After Effects"
set "FOLDER_STRUCTURE1=22.6.5\Scripts\ScriptUI Panels"
set "FOLDER_STRUCTURE2=23.0\Scripts\ScriptUI Panels"
set "FOLDER_STRUCTURE3=23.1\Scripts\ScriptUI Panels"
set "FOLDER_STRUCTURE4=23.2\Scripts\ScriptUI Panels"
set "FOLDER_STRUCTURE5=23.3\Scripts\ScriptUI Panels"
set "FOLDER_STRUCTURE6=23.4\Scripts\ScriptUI Panels"
set "FOLDER_STRUCTURE7=23.5\Scripts\ScriptUI Panels"
set "FOLDER_STRUCTURE8=23.6\Scripts\ScriptUI Panels"
set "FOLDER_STRUCTURE9=23.6.2\Scripts\ScriptUI Panels"
set "FOLDER_STRUCTURE10=24.0\Scripts\ScriptUI Panels"
set "FOLDER_STRUCTURE11=24.1\Scripts\ScriptUI Panels"
set "FOLDER_STRUCTURE12=24.2\Scripts\ScriptUI Panels"

mkdir "%BASE_PATH%\%FOLDER_STRUCTURE1%" 2>nul
mkdir "%BASE_PATH%\%FOLDER_STRUCTURE2%" 2>nul
mkdir "%BASE_PATH%\%FOLDER_STRUCTURE3%" 2>nul
mkdir "%BASE_PATH%\%FOLDER_STRUCTURE4%" 2>nul
mkdir "%BASE_PATH%\%FOLDER_STRUCTURE5%" 2>nul
mkdir "%BASE_PATH%\%FOLDER_STRUCTURE6%" 2>nul
mkdir "%BASE_PATH%\%FOLDER_STRUCTURE7%" 2>nul
mkdir "%BASE_PATH%\%FOLDER_STRUCTURE8%" 2>nul
mkdir "%BASE_PATH%\%FOLDER_STRUCTURE9%" 2>nul
mkdir "%BASE_PATH%\%FOLDER_STRUCTURE10%" 2>nul
mkdir "%BASE_PATH%\%FOLDER_STRUCTURE11%" 2>nul
mkdir "%BASE_PATH%\%FOLDER_STRUCTURE12%" 2>nul

REM Check if the target folder exists, create it if needed
if not exist "%scriptSearchDir%\%scriptTargetFolder%" (
    mkdir "%scriptSearchDir%\%scriptTargetFolder%"
)

for /d %%i in ("%scriptSearchDir%\*") do (
    if exist "%%i\%scriptTargetFolder%" (
        
        rem Delete files containing the search string
        for %%f in ("%%i\%scriptTargetFolder%\*%scriptSearchString%*") do (
            del "%%f"
        )

        rem Copy the specified file to the Script UI Path
        if exist "%buildsFolder%\%scriptSourceFile%" (
            copy /Y "%buildsFolder%\%scriptSourceFile%" "%%i\%scriptTargetFolder%"
        )

        rem Copy the specified folder and its contents to the Script UI Path
        if exist "%buildsFolder%\%scriptSourceFolder%" (
            xcopy /E /I /Y "%buildsFolder%\%scriptSourceFolder%" "%%i\%scriptTargetFolder%\%scriptSourceFolder%"
        )
		
        rem Copy the specified folder and its contents to the Script UI Path
        if exist "%buildsFolder%\%imgSourceFolder%" (
            xcopy /E /I /Y "%buildsFolder%\%imgSourceFolder%" "%%i\%scriptTargetFolder%\%imgSourceFolder%"
        )
    )
)

rd /s /q "%delfolder%"
endlocal