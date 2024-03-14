@echo off
setlocal EnableDelayedExpansion
REM root location of the script
set "Folder=%~dp0"
REM output folder
set "RenderedFolder=%Folder%\_rendered"

if not exist "%RenderedFolder%" mkdir "%RenderedFolder%"
REM iterate through all .aep files that use the prefix "comp_"
for %%i in (comp_*.aep) do (
    set "inputFile=%%i"
	set "comp_aep=%%i"
    for /f "delims=." %%a in ("%%~ni") do set "compName=%%a"
    echo !comp_aep!
REM aerender task for comp using -RStemplate "getgenius_preview" -OMtemplate "getgenius_jpg_preview" to export 8 jpg frames evenly distributed over the whole duration of the composition
    "C:\Program Files\Adobe\Adobe After Effects 2023\Support Files\aerender.exe" -project "%Folder%\!inputFile!" -comp "!compName!" -v ERRORS -mp -RStemplate "getgenius_preview" -OMtemplate "getgenius_jpg_preview" -output "%RenderedFolder%\[compName]_[###].jpg"
REM convert the exported frames into a .webm video using ffmpeg
	"C:\ffmpeg\bin\ffmpeg.exe" -framerate 5 -start_number 0 -i "%RenderedFolder%\!compName!_%%03d.jpg" -c:v libvpx-vp9 -quality good -speed 14 -crf 23 -c:a libopus "%Folder%\!compName!.webm"
REM aerender task for comp_square using -RStemplate "getgenius_preview" -OMtemplate "getgenius_jpg_preview" to export 8 jpg frames evenly distributed over the whole duration of the composition
    "C:\Program Files\Adobe\Adobe After Effects 2023\Support Files\aerender.exe" -project "%Folder%\!inputFile!" -comp "!compName!_square" -v ERRORS -mp -RStemplate "getgenius_preview" -OMtemplate "getgenius_jpg_preview" -output "%RenderedFolder%\[compName]_[###].jpg"
REM convert the exported frames into a .webm video using ffmpeg
	"C:\ffmpeg\bin\ffmpeg.exe" -framerate 5 -start_number 0 -i "%RenderedFolder%\!compName!_square_%%03d.jpg" -c:v libvpx-vp9 -quality good -speed 14 -crf 23 -c:a libopus "%Folder%\!compName!_square.webm"
REM aerender task for comp_1920 using -RStemplate "getgenius_preview" -OMtemplate "getgenius_jpg_preview" to export 8 jpg frames evenly distributed over the whole duration of the composition
    "C:\Program Files\Adobe\Adobe After Effects 2023\Support Files\aerender.exe" -project "%Folder%\!inputFile!" -comp "!compName!_1920" -v ERRORS -mp -RStemplate "getgenius_preview" -OMtemplate "getgenius_jpg_preview" -output "%RenderedFolder%\[compName]_[###].jpg"
REM convert the exported frames into a .webm video using ffmpeg
	"C:\ffmpeg\bin\ffmpeg.exe" -framerate 5 -start_number 0 -i "%RenderedFolder%\!compName!_1920_%%03d.jpg" -c:v libvpx-vp9 -quality good -speed 14 -crf 23 -c:a libopus "%Folder%\!compName!_1920.webm"
REM delete all of the exported frames once all ffmpeg conversions are done
	for %%i in (%RenderedFolder%\*.jpg) do (
		set "inputFile1=%%i"
		 del "!inputFile1!"
	)
)
endlocal
exit
