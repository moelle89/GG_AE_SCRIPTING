@echo off
setlocal enabledelayedexpansion

REM Set the paths for AE template
set "aeSourceFolder=%~dp0_BOILERPLATES"
set "aeDestinationFolder=C:\data_driven_ae_template-1"
set "footagePath=C:\data_driven_ae_template-1\(Footage)\Footage"
set "assetsPath=C:\data_driven_ae_template-1\_assets"
set "aeFileName=___boilerplate_24.aep"
set "fullAeSourcePath=%aeSourceFolder%\%aeFileName%"
set "fullAeDestinationPath=%aeDestinationFolder%\%aeFileName%"
set "aeFootageFolder=(Footage)"
set "aeAssetsFolder=_assets"
set "fullAeFootageSource=%aeSourceFolder%\%aeFootageFolder%"
set "fullAeFootageDestination=%aeDestinationFolder%\%aeFootageFolder%"
set "fullAeAssetsSource=%aeSourceFolder%\%aeAssetsFolder%"
set "fullAeAssetsDestination=%aeDestinationFolder%\%aeAssetsFolder%"

set "presetPath23=%USERPROFILE%\Documents\Adobe\After Effects 2023\User Presets\mojo"
set "presetPath24=%USERPROFILE%\Documents\Adobe\After Effects 2024\User Presets\mojo"

if exist "%presetPath23%" (
    rmdir /s /q "%presetPath23%"
    echo Preset Folder 23 removed successfully.
)

if exist "%presetPath24%" (
    rmdir /s /q "%presetPath24%"
    echo Preset Folder 24 removed successfully.
)

REM DELETE OLD FOOTAGES AND ASSETS
 rd /s /q "%footagePath%"
 rd /s /q "%assetsPath%"

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
set "delfolder=%APPDATA%\Adobe\After Effects\Scripts"

set "BASE_PATH=%APPDATA%\Adobe\After Effects"
set "FOLDER_STRUCTURE1=22.6.5\Scripts\ScriptUI Panels"
set "FOLDER_STRUCTURE2=23.0\Scripts\ScriptUI Panels"
set "FOLDER_STRUCTURE3=23.1\Scripts\ScriptUI Panels"
set "FOLDER_STRUCTURE4=23.2\Scripts\ScriptUI Panels"
set "FOLDER_STRUCTURE5=23.3\Scripts\ScriptUI Panels"
set "FOLDER_STRUCTURE6=23.4\Scripts\ScriptUI Panels"
set "FOLDER_STRUCTURE7=23.5\Scripts\ScriptUI Panels"
set "FOLDER_STRUCTURE8=23.6\Scripts\ScriptUI Panels"
set "FOLDER_STRUCTURE9=23.6.6\Scripts\ScriptUI Panels"
set "FOLDER_STRUCTURE10=24.0\Scripts\ScriptUI Panels"
set "FOLDER_STRUCTURE11=24.1\Scripts\ScriptUI Panels"
set "FOLDER_STRUCTURE12=24.2\Scripts\ScriptUI Panels"
set "FOLDER_STRUCTURE13=24.3\Scripts\ScriptUI Panels"
set "FOLDER_STRUCTURE14=24.4\Scripts\ScriptUI Panels"
set "FOLDER_STRUCTURE15=24.4.1\Scripts\ScriptUI Panels"
set "FOLDER_STRUCTURE16=24.5\Scripts\ScriptUI Panels"
set "FOLDER_STRUCTURE17=24.6\Scripts\ScriptUI Panels"
set "FOLDER_STRUCTURE18=24.7\Scripts\ScriptUI Panels"
set "FOLDER_STRUCTURE19=24.8\Scripts\ScriptUI Panels"
set "FOLDER_STRUCTURE20=24.9\Scripts\ScriptUI Panels"

rd /s /q "%BASE_PATH%\%FOLDER_STRUCTURE1%\_scripts"
rd /s /q "%BASE_PATH%\%FOLDER_STRUCTURE2%\_scripts"
rd /s /q "%BASE_PATH%\%FOLDER_STRUCTURE3%\_scripts"
rd /s /q "%BASE_PATH%\%FOLDER_STRUCTURE4%\_scripts"
rd /s /q "%BASE_PATH%\%FOLDER_STRUCTURE5%\_scripts"
rd /s /q "%BASE_PATH%\%FOLDER_STRUCTURE6%\_scripts"
rd /s /q "%BASE_PATH%\%FOLDER_STRUCTURE7%\_scripts"
rd /s /q "%BASE_PATH%\%FOLDER_STRUCTURE8%\_scripts"
rd /s /q "%BASE_PATH%\%FOLDER_STRUCTURE9%\_scripts"
rd /s /q "%BASE_PATH%\%FOLDER_STRUCTURE10%\_scripts"
rd /s /q "%BASE_PATH%\%FOLDER_STRUCTURE11%\_scripts"
rd /s /q "%BASE_PATH%\%FOLDER_STRUCTURE12%\_scripts"
rd /s /q "%BASE_PATH%\%FOLDER_STRUCTURE13%\_scripts"
rd /s /q "%BASE_PATH%\%FOLDER_STRUCTURE14%\_scripts"
rd /s /q "%BASE_PATH%\%FOLDER_STRUCTURE15%\_scripts"
rd /s /q "%BASE_PATH%\%FOLDER_STRUCTURE16%\_scripts"
rd /s /q "%BASE_PATH%\%FOLDER_STRUCTURE17%\_scripts"
rd /s /q "%BASE_PATH%\%FOLDER_STRUCTURE18%\_scripts"
rd /s /q "%BASE_PATH%\%FOLDER_STRUCTURE19%\_scripts"
rd /s /q "%BASE_PATH%\%FOLDER_STRUCTURE20%\_scripts"

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
mkdir "%BASE_PATH%\%FOLDER_STRUCTURE13%" 2>nul
mkdir "%BASE_PATH%\%FOLDER_STRUCTURE14%" 2>nul
mkdir "%BASE_PATH%\%FOLDER_STRUCTURE15%" 2>nul
mkdir "%BASE_PATH%\%FOLDER_STRUCTURE16%" 2>nul
mkdir "%BASE_PATH%\%FOLDER_STRUCTURE17%" 2>nul
mkdir "%BASE_PATH%\%FOLDER_STRUCTURE18%" 2>nul
mkdir "%BASE_PATH%\%FOLDER_STRUCTURE19%" 2>nul
mkdir "%BASE_PATH%\%FOLDER_STRUCTURE20%" 2>nul

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

setlocal

:: Define the target directory
set "target_dir=C:\ffmpeg"

:: Check if the target directory already exists
if exist "%target_dir%" (
    echo FFmpeg is already installed at %target_dir%.
    echo Aborting download process.
    pause
	explorer "C:\data_driven_ae_template-1"
    exit /b 0
)

:: Define the URL and temporary paths
set "ffmpeg_url=https://www.gyan.dev/ffmpeg/builds/ffmpeg-release-essentials.zip"
set "zip_path=%TEMP%\ffmpeg.zip"
set "extract_path=%TEMP%\ffmpeg"

:: Download FFmpeg using curl
echo Downloading FFmpeg...
curl -L -o "%zip_path%" "%ffmpeg_url%"
if %ERRORLEVEL% neq 0 (
    echo Failed to download FFmpeg. Exiting...
    exit /b 1
)

:: Extract the downloaded zip file (requires PowerShell for this)
echo Extracting FFmpeg...
powershell -command "Expand-Archive -Force -Path '%zip_path%' -DestinationPath '%extract_path%'"
if %ERRORLEVEL% neq 0 (
    echo Failed to extract FFmpeg. Exiting...
    exit /b 1
)

:: Move the extracted FFmpeg folder to C:\
echo Moving FFmpeg to C:\
move /Y "%extract_path%\ffmpeg-*" "%target_dir%"
if %ERRORLEVEL% neq 0 (
    echo Failed to move FFmpeg. Exiting...
    exit /b 1
)

:: Clean up the temp files
echo Cleaning up...
del /Q "%zip_path%"
rmdir /S /Q "%extract_path%"

echo FFmpeg installation completed at %target_dir%.
pause


explorer "C:\data_driven_ae_template-1"
endlocal