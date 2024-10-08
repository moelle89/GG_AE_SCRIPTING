@echo off
setlocal enabledelayedexpansion

:: Print ASCII art header
for /f "delims=: tokens=*" %%A in ('findstr /b ::: "%~f0"') do @echo(%%A

echo.
echo INSTALL SCRIPT: MOELLES MOJO / GG TEMPLATE ADDON FOR ADOBE AFTER EFFECTS
echo.
echo.
timeout /t 3 >nul

:: Define folder paths
set "aeSourceFolder=%~dp0_BOILERPLATES"
set "fontSourceFolder=%~dp0_FONTS"
set "aeDestinationFolder=C:\data_driven_ae_template-1"
set "footagePath=%aeDestinationFolder%\Footage\Footage"
set "assetsPath=%aeDestinationFolder%\_assets"
set "aeFileName=___boilerplate_24.aep"
set "fullAeSourcePath=%aeSourceFolder%\%aeFileName%"
set "fullAeDestinationPath=%aeDestinationFolder%\%aeFileName%"
set "fullAeFootageSource=%aeSourceFolder%\Footage"
set "fullAeAssetsSource=%aeSourceFolder%\_assets"
set "fullFontsSource=%fontSourceFolder%"
set "fullFontsDestination=%aeDestinationFolder%\_FONTS"
set "presetPaths=%USERPROFILE%\Documents\Adobe\After Effects 2023\User Presets\mojo;%USERPROFILE%\Documents\Adobe\After Effects 2024\User Presets\mojo"

:: Remove preset folders
for %%p in (%presetPaths%) do (
    if exist "%%p" (
        rmdir /s /q "%%p"
        echo Preset folder %%p removed successfully.
    )
)

:: Delete old footages, assets, and fonts
rd /s /q "%footagePath%" "%assetsPath%"
if exist "%fullFontsDestination%" rmdir /s /q "%fullFontsDestination%"

:: Create AE destination folder if it doesn't exist
if not exist "%aeDestinationFolder%" mkdir "%aeDestinationFolder%"

:: Copy AE files and assets using robocopy
copy /y "%fullAeSourcePath%" "%fullAeDestinationPath%" >nul
robocopy "%fullAeFootageSource%" "%aeDestinationFolder%\Footage" /s /e /mt:8 >nul
robocopy "%fullAeAssetsSource%" "%aeDestinationFolder%\_assets" /s /e /mt:8 >nul
robocopy "%fullFontsSource%" "%fullFontsDestination%" /s /e /mt:8 >nul

:: Handle ScriptUI Panel folders
set "scriptSearchDir=%APPDATA%\Adobe\After Effects"
set "scriptTargetFolder=Scripts\ScriptUI Panels"
set "buildsFolder=%~dp0_BUILDS"
set "scriptSourceFile=moelles_mojo.jsxbin"
set "scriptSourceFolder=_scripts"
set "imgSourceFolder=_img"

:: Remove old scripts and copy new ones
for /d %%i in ("%scriptSearchDir%\*") do (
    if exist "%%i\%scriptTargetFolder%" (
        for %%f in ("%%i\%scriptTargetFolder%\*moelles_mojo*") do del "%%f"
        copy /y "%buildsFolder%\%scriptSourceFile%" "%%i\%scriptTargetFolder%" >nul
        xcopy /e /i /y "%buildsFolder%\%scriptSourceFolder%" "%%i\%scriptTargetFolder%\%scriptSourceFolder%" >nul
        xcopy /e /i /y "%buildsFolder%\%imgSourceFolder%" "%%i\%scriptTargetFolder%\%imgSourceFolder%" >nul
    )
)

rd /s /q "%scriptSearchDir%\_scripts"

:: Font installation
echo Installing fonts...
timeout /t 5 /nobreak >nul
cscript "%fontSourceFolder%\InstallFont.vbs"
echo Font installation complete.

:: FFmpeg installation
set "target_dir=C:\ffmpeg"
if not exist "%target_dir%" (
    set "ffmpeg_url=https://www.gyan.dev/ffmpeg/builds/ffmpeg-release-essentials.zip"
    set "zip_path=%TEMP%\ffmpeg.zip"
    set "extract_path=%TEMP%\ffmpeg"
    
    echo Downloading FFmpeg...
    curl -L -o "%zip_path%" "%ffmpeg_url%"
    if %ERRORLEVEL% neq 0 (
        echo Failed to download FFmpeg. Exiting...
        exit /b 1
    )
    
    echo Extracting FFmpeg...
    powershell -command "Expand-Archive -Force -Path '%zip_path%' -DestinationPath '%extract_path%'"
    
    move /y "%extract_path%\ffmpeg-*" "%target_dir%"
    del /q "%zip_path%"
    rmdir /s /q "%extract_path%"
    echo FFmpeg installation complete.
)

:: Open template folder
echo Opening template folder...
explorer "%aeDestinationFolder%"
exit /b 0
endlocal
