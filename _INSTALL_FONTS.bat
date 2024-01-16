@echo off
setlocal enabledelayedexpansion

set "script_dir=%~dp0"
set "fonts_dir=%script_dir%_FONTS"

echo Installing fonts from %fonts_dir%...

for %%F in ("%fonts_dir%\*.ttf" "%fonts_dir%\*.otf" "%fonts_dir%\*.fon") do (
    echo Installing %%~nxF...
    start "" /w fontview /install "%%F"
)

echo All fonts installed successfully.
cmd /k 
endlocal