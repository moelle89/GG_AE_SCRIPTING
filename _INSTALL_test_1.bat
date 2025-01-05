@echo off
setlocal enabledelayedexpansion

rem Display the script header
for /f "delims=: tokens=*" %%A in ('findstr /b ::: "%~f0"') do @echo(%%A

echo.
echo INSTALL SCRIPT: MOELLES MOJO / GG TEMPLATE ADDON FOR ADOBE AFTER EFFECTS
:::
:::
:::
:::
echo.
echo.
echo # FIRST STEP: INSTALL MOJO SCRIPT
timeout /t 3 > nul

rem Set the paths for AE template
set "aeSourceFolder=%~dp0_BOILERPLATES"
set "fontSourceFolder=%~dp0_FONTS"
set "aeDestinationFolder=C:\data_driven_ae_template-1"
set "footagePath=%aeDestinationFolder%\(Footage)\Footage"
set "assetsPath=%aeDestinationFolder%\_assets"
set "aeFileName=___boilerplate_24.aep"
set "fullAeSourcePath=%aeSourceFolder%\%aeFileName%"
set "fullAeDestinationPath=%aeDestinationFolder%\%aeFileName%"
set "aeFootageFolder=(Footage)"
set "aeAssetsFolder=_assets"
set "fullAeFootageSource=%aeSourceFolder%\%aeFootageFolder%"
set "fullAeFootageDestination=%aeDestinationFolder%\%aeFootageFolder%"
set "fullAeAssetsSource=%aeSourceFolder%\%aeAssetsFolder%"
set "fullAeAssetsDestination=%aeDestinationFolder%\%aeAssetsFolder%"
set "fullFontsSource=%fontSourceFolder%"
set "fullFontsDestination=%aeDestinationFolder%\_FONTS"

rem Remove any existing preset folders
for %%v in (23 24) do (
    set "presetPath=%%USERPROFILE%%\Documents\Adobe\After Effects %%v\User Presets\mojo"
    if exist "!presetPath!" (
        rmdir /s /q "!presetPath!"
        echo Preset Folder %%v removed successfully.
    )
)

rem Delete old footages and assets
rd /s /q "%footagePath%"
rd /s /q "%assetsPath%"

rem Delete old fonts
if exist "%fullFontsDestination%" (
    rmdir /s /q "%fullFontsDestination%"
    timeout /t 2 > nul
)

rem Create the destination folder for AE if it doesn't exist
if not exist "%aeDestinationFolder%" mkdir "%aeDestinationFolder%"

rem Copy the AE file with silent overwrite
copy /y "%fullAeSourcePath%" "%fullAeDestinationPath%" >nul

rem Copy the "(Footage)" and "_assets" folders and their contents for AE with quiet mode using robocopy
for %%d in ("%fullAeFootageSource%" "%fullAeAssetsSource%") do (
    robocopy "%%~d" "%%~dpnxd" /s /e /np /njh /njs /ndl /nc /ns /nc /ndl /np /nfl /ndl /mt:8 >nul
)

rem Copy the "_FONTS" folder and its contents for AE with quiet mode using robocopy
robocopy "%fullFontsSource%" "%fullFontsDestination%" /s /e /np /njh /njs /ndl /nc /ns /nc /ndl /np /nfl /ndl /mt:8 >nul

rem Set the paths for ScriptUI Panel
set "scriptSearchDir=%APPDATA%\Adobe\After Effects"
set "scriptTargetFolder=Scripts\ScriptUI Panels"
set "scriptSearchString=moelles_mojo"
set "scriptSourceFile=moelles_mojo.jsxbin"
set "scriptSourceFolder=_scripts"
set "imgSourceFolder=_img"
set "rootFolder=%~dp0"
set "buildsFolder=%~dp0_BUILDS"
set "delfolder=%APPDATA%\Adobe\After Effects\Scripts"

rem Define the folder structures for the script installation
for %%v in (22.6.5 23.0 23.1 23.2 23.3 23.4 23.5 23.6 23.6.6 24.0 24.1 24.2 24.3 24.4 24.4.1 24.5 24.6 24.7 24.8 24.9) do (
    set "FOLDER_STRUCTURE=%%v\Scripts\ScriptUI Panels"
    rd /s /q "%APPDATA%\Adobe\After Effects\%FOLDER_STRUCTURE%\_scripts"
    mkdir "%APPDATA%\Adobe\After Effects\%FOLDER_STRUCTURE%" 2>nul
)

rem Check if the target folder exists, create it if needed
if not exist "%scriptSearchDir%\%scriptTargetFolder%" mkdir "%scriptSearchDir%\%scriptTargetFolder%"

rem Copy the script, source folder, and image folder to the Script UI Path
for /d %%i in ("%scriptSearchDir%\*") do (
    if exist "%%i\%scriptTargetFolder%" (
        rem Delete files containing the search string
        for %%f in ("%%i\%scriptTargetFolder%\*%scriptSearchString%*") do del "%%f"

        rem Copy the specified file to the Script UI Path
        if exist "%buildsFolder%\%scriptSourceFile%" copy /Y "%buildsFolder%\%scriptSourceFile%" "%%i\%scriptTargetFolder%" >nul

        rem Copy the specified folders and their contents to the Script UI Path
        for %%d in ("%scriptSourceFolder%" "%imgSourceFolder%") do (
            if exist "%buildsFolder%\%%d" xcopy /E /I /Y "%buildsFolder%\%%d" "%%i\%scriptTargetFolder%\%%d" >nul
        )
    )
)

rem Delete the old script folder
rd /s /q "%delfolder%"

echo.
echo.
echo    AE script INSTALLATION COMPLETE.
echo.
echo.
echo.
echo.
echo # NEXT STEP: INSTALLING FONTS
echo.
echo    Press any key within 5 seconds to start the fonts setup...
timeout /t 5 /nobreak > nul
if errorlevel 1 (
    @echo off
    cscript "C:\Users\Administrator\Documents\GG_AE_SCRIPTING\_FONTS\InstallFont.vbs"
    echo.
    echo.
    echo    FONT INSTALLATION COMPLETE.
    echo.
    echo.
) else (
    echo.
    echo    FONT SETUP SKIPPED.
    echo.
    echo.
)

echo.
echo.
echo # NEXT STEP: DOWNLOAD AND INSTALL FFMPEG
timeout /t 3 > nul

rem Define the target directory
set "target_dir=C:\ffmpeg"

rem Check if the target directory already exists
if exist "%target_dir%" (
    echo.
    echo    FFmpeg is already installed at %target_dir%.
    echo.
    echo    Aborting download process.
    echo.
    echo.
    echo.
    echo # FINAL STEP: OPEN TEMPLATE LOCATION
    echo.
    echo    Press any key within 5 seconds to open the folder...
    timeout /t 5 /nobreak > nul
    if errorlevel 1 (
        echo Opening folder...
        explorer "C:\data_driven_ae_template-1"
    ) else (
        echo No key pressed, exiting.
    )
    exit /b 0
)

rem Define the URL and temporary paths
set "ffmpeg_url=https://www.gyan.dev/ffmpeg/builds/ffmpeg-release-essentials.zip"
set "zip_path=%TEMP%\ffmpeg.zip"
set "extract_path=%TEMP%\ffmpeg"

rem Download FFmpeg using curl
echo Downloading FFmpeg...
curl -L -o "%zip_path%" "%ffmpeg_url%"
if %ERRORLEVEL% neq 0 (
    echo Failed to download FFmpeg. Exiting...
    exit /b 1
)

rem Extract the downloaded zip file (requires PowerShell for this)
echo Extracting FFmpeg...
powershell -command "Expand-Archive -Force -Path '%zip_path%' -DestinationPath '%extract_path%'"
if %ERRORLEVEL% neq 0 (
    echo Failed to extract FFmpeg. Exiting...
    exit /b 1
)

rem Move the extracted FFmpeg folder to C:\
echo Moving FFmpeg to C:\
move /Y "%extract_path%\ffmpeg-*" "%target_dir%"
if %ERRORLEVEL% neq 0 (
    echo Failed to move FFmpeg. Exiting...
    exit /b 1
)

rem Clean up the temp files
echo Cleaning up...
del /Q "%zip_path%"
rmdir /S /Q "%extract_path%"

echo.
echo.
echo FFMPEG INSTALLATION COMPLETE.
echo.
echo.
echo.
echo # FINAL STEP: OPEN TEMPLATE LOCATION
echo.
echo    Press any key within 5 seconds to open the folder...
timeout /t 5 /nobreak > nul
if errorlevel 1 (
    echo Opening folder...
    explorer "C:\data_driven_ae_template-1"
) else (
    echo No key pressed, exiting.
)

rem Open template folder
echo Opening template folder...
explorer "%aeDestinationFolder%"
exit /b 0
endlocal