@echo off
setlocal EnableDelayedExpansion

set "scriptPath=%~dp0"
set "Folder=%scriptPath%"

for %%i in (comp_*.aep) do (
    set "inputFile=%%i"
	set "comp_aep=%%i"
    for /f "delims=." %%a in ("%%~ni") do set "compName=%%a"
    echo !comp_aep!    
	echo !compName!
    "C:\Program Files\Adobe\Adobe After Effects 2024\Support Files\aerender.exe" -project "%Folder%\!inputFile!" -comp "!compName!" -s 0 -e 0 -v ERRORS -mp -RStemplate "getgenius_default" -OMtemplate "getgenius_jpg_default" -output "%Folder%\[compName]_[#].jpg"
    "C:\Program Files\Adobe\Adobe After Effects 2024\Support Files\aerender.exe" -project "%Folder%\!inputFile!" -comp "!compName!_square" -s 0 -e 0 -v ERRORS -mp -RStemplate "getgenius_default" -OMtemplate "getgenius_jpg_default" -output "%Folder%\[compName]_[#].jpg"
    "C:\Program Files\Adobe\Adobe After Effects 2024\Support Files\aerender.exe" -project "%Folder%\!inputFile!" -comp "!compName!_1920" -s 0 -e 0 -v ERRORS -mp -RStemplate "getgenius_default" -OMtemplate "getgenius_jpg_default" -output "%Folder%\[compName]_[#].jpg"
    
    "C:\Program Files\Adobe\Adobe After Effects 2024\Support Files\aerender.exe" -project "%Folder%\!inputFile!" -comp "!compName!" -v ERRORS -mp -RStemplate "getgenius_default" -OMtemplate "getgenius_h264_default" -output "%Folder%\[compName].[fileExtension]"
    "C:\Program Files\Adobe\Adobe After Effects 2024\Support Files\aerender.exe" -project "%Folder%\!inputFile!" -comp "!compName!_square" -v ERRORS -mp -RStemplate "getgenius_default" -OMtemplate "getgenius_h264_default" -output "%Folder%\[compName].[fileExtension]"
    "C:\Program Files\Adobe\Adobe After Effects 2024\Support Files\aerender.exe" -project "%Folder%\!inputFile!" -comp "!compName!_1920" -v ERRORS -mp -RStemplate "getgenius_default" -OMtemplate "getgenius_h264_default" -output "%Folder%\[compName].[fileExtension]"
	
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
		
		"C:\ffmpeg\bin\ffmpeg.exe" -i "!inputFile1!" -y "%Folder%\!name!.webp"
		 del "!inputFile1!"
	)
	REM webm conversion
	for %%i in (%Folder%\*.mp4) do (
		set "inputFile2=%%i"
		for /f "delims=." %%a in ("%%~ni") do set "name=%%a"
		echo !name!
		"C:\ffmpeg\bin\ffmpeg.exe" -i "!inputFile2!" -y -c:v libvpx-vp9 -crf 28 -b:v 0 -b:a 128k -c:a libopus "%Folder%\!name!.webm"
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