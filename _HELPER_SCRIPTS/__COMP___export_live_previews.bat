@echo off
setlocal EnableDelayedExpansion

set "Folder=%~dp0"
set "RenderedFolder=%scriptPath%\_rendered"

if not exist "%RenderedFolder%" mkdir "%RenderedFolder%" 

for %%i in (comp_*.aep) do (
    set "inputFile=%%i"
	set "comp_aep=%%i"
    for /f "delims=." %%a in ("%%~ni") do set "compName=%%a"
    echo !comp_aep!
    "C:\Program Files\Adobe\Adobe After Effects 2023\Support Files\aerender.exe" -project "%Folder%\!inputFile!" -comp "!compName!" -v ERRORS -mp -RStemplate "getgenius_preview" -OMtemplate "getgenius_jpg_preview" -output "%RenderedFolder%\[compName]_[###].jpg" 
	"C:\ffmpeg\bin\ffmpeg.exe" -framerate 5 -start_number 0 -i "%RenderedFolder%\!compName!_%%03d.jpg" -c:v libvpx -pix_fmt yuv422p -quality good -speed 12 -crf 23 "%Folder%\!compName!.webm"
	
    "C:\Program Files\Adobe\Adobe After Effects 2023\Support Files\aerender.exe" -project "%Folder%\!inputFile!" -comp "!compName!_square" -v ERRORS -mp -RStemplate "getgenius_preview" -OMtemplate "getgenius_jpg_preview" -output "%RenderedFolder%\[compName]_[###].jpg"
	"C:\ffmpeg\bin\ffmpeg.exe" -framerate 5 -start_number 0 -i "%RenderedFolder%\!compName!_square_%%03d.jpg" -c:v libvpx -pix_fmt yuv422p -quality good -speed 12 -crf 23 "%Folder%\!compName!_square.webm"
	
    "C:\Program Files\Adobe\Adobe After Effects 2023\Support Files\aerender.exe" -project "%Folder%\!inputFile!" -comp "!compName!_1920" -v ERRORS -mp -RStemplate "getgenius_preview" -OMtemplate "getgenius_jpg_preview" -output "%RenderedFolder%\[compName]_[###].jpg"
	"C:\ffmpeg\bin\ffmpeg.exe" -framerate 5 -start_number 0 -i "%RenderedFolder%\!compName!_1920_%%03d.jpg" -c:v libvpx -pix_fmt yuv422p -quality good -speed 12 -crf 23  "%Folder%\!compName!_1920.webm"
	
	REM webp conversion
	for %%i in (%RenderedFolder%\*.jpg) do (
		set "inputFile1=%%i"
		 del "!inputFile1!"
	)
)
endlocal
exit