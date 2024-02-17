@echo off
setlocal EnableDelayedExpansion

set "scriptPath=%~dp0"
set "Folder=%scriptPath%"
set "RenderedFolder=%scriptPath%\_rendered"

if not exist "%RenderedFolder%" mkdir "%RenderedFolder%" 

for %%i in (comp_*.aep) do (
    set "inputFile=%%i"
	set "comp_aep=%%i"
    for /f "delims=." %%a in ("%%~ni") do set "compName=%%a"
    echo !comp_aep!    
	echo !compName!
    "C:\Program Files\Adobe\Adobe After Effects 2023\Support Files\aerender.exe" -project "%Folder%\!inputFile!" -comp "!compName!" -s 0 -e 0 -v ERRORS -mp -RStemplate "Best Settings" -OMtemplate "PNG" -output "%RenderedFolder%\[compName]_[#].png"
    "C:\Program Files\Adobe\Adobe After Effects 2023\Support Files\aerender.exe" -project "%Folder%\!inputFile!" -comp "!compName!_square" -s 0 -e 0 -v ERRORS -mp -RStemplate "Best Settings" -OMtemplate "PNG" -output "%RenderedFolder%\[compName]_[#].png"
    "C:\Program Files\Adobe\Adobe After Effects 2023\Support Files\aerender.exe" -project "%Folder%\!inputFile!" -comp "!compName!_1920" -s 0 -e 0 -v ERRORS -mp -RStemplate "Best Settings" -OMtemplate "PNG" -output "%RenderedFolder%\[compName]_[#].png"
    
    "C:\Program Files\Adobe\Adobe After Effects 2023\Support Files\aerender.exe" -project "%Folder%\!inputFile!" -comp "!compName!" -v ERRORS -mp -RStemplate "Best Settings" -OMtemplate "MP4" -output "%RenderedFolder%\[compName].[fileExtension]"
    "C:\Program Files\Adobe\Adobe After Effects 2023\Support Files\aerender.exe" -project "%Folder%\!inputFile!" -comp "!compName!_square" -v ERRORS -mp -RStemplate "Best Settings" -OMtemplate "MP4" -output "%RenderedFolder%\[compName].[fileExtension]"
    "C:\Program Files\Adobe\Adobe After Effects 2023\Support Files\aerender.exe" -project "%Folder%\!inputFile!" -comp "!compName!_1920" -v ERRORS -mp -RStemplate "Best Settings" -OMtemplate "MP4" -output "%RenderedFolder%\[compName].[fileExtension]"
	
	REM webp conversion
	for %%i in (%RenderedFolder%\*.png) do (
		set "inputFile1=%%i"
		echo Processing PNG: !inputFile1!
		
		for /f "delims=." %%a in ("%%~ni") do (
			set "name=%%a"
			set "name=!name:~0,-2!"  
			REM Strip the last two characters
		)
		echo !name!
		
		"C:\ffmpeg\bin\ffmpeg.exe" -i "!inputFile1!" -y "%RenderedFolder%\!name!.webp"
		 del "!inputFile1!"
	)
	REM webm conversion
	for %%i in (%RenderedFolder%\*.mp4) do (
		set "inputFile2=%%i"
		for /f "delims=." %%a in ("%%~ni") do set "name=%%a"
		echo !name!
		"C:\ffmpeg\bin\ffmpeg.exe" -i "!inputFile2!" -y -c:v libvpx-vp9 -crf 28 -b:v 0 -b:a 128k -c:a libopus "%RenderedFolder%\!name!.webm"
		 del "!inputFile2!"
	)
	
    md "%RenderedFolder%\!compName!"
    for /R "%RenderedFolder%" %%i in (!compName!*.*) do (
        if exist "%%i" move "%%i" "%RenderedFolder%\!compName!\"
    )
	copy "!inputFile!" "%RenderedFolder%\!compName!\"
)

echo Conversion complete.
endlocal
exit