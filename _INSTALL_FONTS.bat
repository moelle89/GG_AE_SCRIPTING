@echo off

net session >nul 2>&1
if %errorLevel% == 0 (
    set "isAdmin=true"
) else (
    set "isAdmin=false"
)
set "fontFolder=%~dp0_FONTS"
if %isAdmin% == true (
    echo You have admin rights.
	echo Installing fonts from %fontFolder%...

	for %%i in (%fontFolder%\*.ttf %fontFolder%\*.otf) do (
		echo Installing: %%i
		copy "%%i" "%userprofile%\AppData\Local\Microsoft\Windows\Fonts"
	)

	echo Fonts installed successfully.	
	
) else (
    echo You do not have admin rights. Please open "_FONTS", select all files and right click "install..." 
)
pause