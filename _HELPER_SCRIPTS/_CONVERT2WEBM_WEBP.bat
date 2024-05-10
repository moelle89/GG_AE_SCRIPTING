@echo off
setlocal EnableDelayedExpansion

set "scriptPath=%~dp0"
set "Folder=%scriptPath%"
set ffmpeg = "C:\ffmpeg\bin\ffmpeg.exe"

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
	)
	REM webm conversion
	for %%i in (%Folder%\*.mp4) do (
		set "inputFile2=%%i"
		for /f "delims=." %%a in ("%%~ni") do set "name=%%a"
		echo !name!
	   ffmpeg -i "!inputFile2!" -c:v libvpx-vp9 -quality good -speed 14 -crf 26 -b:v 0 -b:a 128k -c:a libopus "%Folder%\!name!.webm"
	   REM ffmpeg -i "!inputFile2!" -c:v libvpx-vp9 -b:v 2M -c:a libvorbis "%Folder%\!name!.webm"
	)

echo Conversion complete.
REM cmd /k
endlocal
exit