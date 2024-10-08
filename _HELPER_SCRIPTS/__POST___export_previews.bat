@echo off
setlocal EnableDelayedExpansion

set "scriptPath=%~dp0"
set "Folder=%scriptPath%"
set ffmpeg = "C:\ffmpeg\bin\ffmpeg.exe"

for %%i in (post_*.aep) do (
    set "inputFile=%%i"
	set "post_aep=%%i"
    for /f "delims=." %%a in ("%%~ni") do set "compName=%%a"
    echo !post_aep! 
    echo !compName!
    "C:\Program Files\Adobe\Adobe After Effects 2024\Support Files\aerender.exe" -project "%Folder%\!inputFile!" -comp "!compName!" -s 0 -e 0 -v ERRORS -mp -RStemplate "getgenius_default" -OMtemplate "getgenius_jpg_default" -output "%Folder%\[compName]_[#].jpg"
    "C:\Program Files\Adobe\Adobe After Effects 2024\Support Files\aerender.exe" -project "%Folder%\!inputFile!" -comp "!compName!_square" -s 0 -e 0 -v ERRORS -mp -RStemplate "getgenius_default" -OMtemplate "getgenius_jpg_default" -output "%Folder%\[compName]_[#].jpg"
    "C:\Program Files\Adobe\Adobe After Effects 2024\Support Files\aerender.exe" -project "%Folder%\!inputFile!" -comp "!compName!_1920" -s 0 -e 0 -v ERRORS -mp -RStemplate "getgenius_default" -OMtemplate "getgenius_jpg_default" -output "%Folder%\[compName]_[#].jpg"

	REM webp conversion
	for %%i in (%Folder%\*.jpg) do (
		set "inputFile1=%%i"
		echo Processing JPG: !inputFile1!
		
		for /f "delims=." %%a in ("%%~ni") do (
			set "name=%%a"
			set "name=!name:~0,-2!"  
			REM Strip the last two characters
		)
		echo !name!
		
		ffmpeg -i "!inputFile1!" -y "%Folder%\!name!.webp"
		 del "!inputFile1!"
	)
	REM webm conversion
	for %%i in (%Folder%\*.mp4) do (
		set "inputFile2=%%i"
		for /f "delims=." %%a in ("%%~ni") do set "name=%%a"
		echo !name!
		ffmpeg -i "!inputFile2!" -y -c:v libvpx-vp9 -crf 28 -b:v 0 -b:a 128k -c:a libopus "%Folder%\!name!.webm"
		 del "!inputFile2!"
	)
	
    md "%Folder%\!compName!"
    for /R "%Folder%" %%i in (!compName!*.*) do (
        if exist "%%i" move "%%i" "%Folder%\!compName!\"
    )
	copy "!inputFile!" "%Folder%\!compName!\"
)

echo Conversion complete.
endlocal
exit