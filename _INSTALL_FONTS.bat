@echo off
set "fontFolder=%~dp0_FONTS"

echo Installing fonts from %fontFolder%...

for %%i in (%fontFolder%\*.ttf %fontFolder%\*.otf) do (
    echo Installing: %%i
    copy "%%i" "%userprofile%\AppData\Local\Microsoft\Windows\Fonts"
)

echo Fonts installed successfully.
pause