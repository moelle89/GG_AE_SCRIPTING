@echo off
setlocal EnableDelayedExpansion

set "Folder=%~dp0"
set "RenderedFolder=%Folder%\_frames"

if not exist "%RenderedFolder%" mkdir "%RenderedFolder%" 

for %%i in (comp_*.aep) do (
    set "inputFile=%%i"
	set "comp_aep=%%i"
    for /f "delims=." %%a in ("%%~ni") do set "compName=%%a"
    echo !comp_aep!
	
	REM START BENCHMARK
	set "benchmarkStart1=!time!"
	
    "C:\Program Files\Adobe\Adobe After Effects 2023\Support Files\aerender.exe" -project "%Folder%\!inputFile!" -comp "!compName!" -v ERRORS -mp -RStemplate "getgenius_preview" -OMtemplate "getgenius_jpg_preview" -output "%RenderedFolder%\[compName]_[###].jpg"
	"C:\ffmpeg\bin\ffmpeg.exe" -framerate 5 -start_number 0 -i "%RenderedFolder%\!compName!_%%03d.jpg" -c:v libvpx-vp9 -quality good -speed 14 -crf 23 -c:a libopus "%Folder%\!compName!.webm"
	
	REM END BENCHMARK
	set "benchmarkEnd1=!time!"
	call :calculateElapsedTime benchmarkElapsed1 !benchmarkStart1! !benchmarkEnd1!
	echo .
	echo .	
	echo .
	echo ############################################################
	echo .
	echo Elapsed time between START and END BENCHMARK: !benchmarkElapsed1!
	echo .
	echo ############################################################
	echo.
	echo.
	echo.
	
	REM START BENCHMARK
	set "benchmarkStart2=!time!"
	
	"C:\Program Files\Adobe\Adobe After Effects 2023\Support Files\aerender.exe" -project "%Folder%\!inputFile!" -comp "!compName!_square" -v ERRORS -mp -RStemplate "getgenius_preview" -OMtemplate "getgenius_jpg_preview" -output "%RenderedFolder%\[compName]_[###].jpg" -reuse
	"C:\ffmpeg\bin\ffmpeg.exe" -framerate 5 -start_number 0 -i "%RenderedFolder%\!compName!_square_%%03d.jpg" -c:v libvpx-vp9 -quality good -speed 14 -crf 23 -c:a libopus "%Folder%\!compName!_square.webm"
		
	REM END BENCHMARK
	set "benchmarkEnd2=!time!"
	call :calculateElapsedTime benchmarkElapsed2 !benchmarkStart2! !benchmarkEnd2!
	echo .
	echo .	
	echo .
	echo ############################################################
	echo .
	echo Elapsed time between START and END BENCHMARK: !benchmarkElapsed2!
	echo .
	echo ############################################################
	echo.
	echo.
	echo.
	
	REM START BENCHMARK
	set "benchmarkStart3=!time!"
	
	"C:\Program Files\Adobe\Adobe After Effects 2023\Support Files\aerender.exe" -project "%Folder%\!inputFile!" -comp "!compName!_1920" -v ERRORS -mp -RStemplate "getgenius_preview" -OMtemplate "getgenius_jpg_preview" -output "%RenderedFolder%\[compName]_[###].jpg"
	"C:\ffmpeg\bin\ffmpeg.exe" -framerate 5 -start_number 0 -i "%RenderedFolder%\!compName!_1920_%%03d.jpg" -c:v libvpx-vp9 -quality good -speed 14 -crf 23 -c:a libopus "%Folder%\!compName!_1920.webm"
		
	REM END BENCHMARK
	set "benchmarkEnd3=!time!"
	call :calculateElapsedTime benchmarkElapsed3 !benchmarkStart3! !benchmarkEnd3!
	echo .
	echo .	
	echo .
	echo ############################################################
	echo .
	echo Elapsed time between START and END BENCHMARK: !benchmarkElapsed3!
	echo .
	echo ############################################################
	echo.
	echo.
	echo.
	
	REM webp conversion
	for %%i in (%RenderedFolder%\*.jpg) do (
		set "inputFile1=%%i"
		 del "!inputFile1!"
	)
)
endlocal
cmd /k

:calculateElapsedTime
setlocal
set "startTime=%~2"
set "endTime=%~3"

REM Splitting the start time into hours, minutes, and seconds
for /f "tokens=1-4 delims=:." %%a in ("%startTime%") do (
    set "startHour=%%a"
    set "startMinute=%%b"
    set "startSecond=%%c"
    set "startMilliseconds=%%d"
)

REM Splitting the end time into hours, minutes, and seconds
for /f "tokens=1-4 delims=:." %%a in ("%endTime%") do (
    set "endHour=%%a"
    set "endMinute=%%b"
    set "endSecond=%%c"
    set "endMilliseconds=%%d"
)

REM Converting the hours, minutes, and seconds to milliseconds
set /a "startTotalMilliseconds=startHour*60*60*100 + startMinute*60*100 + startSecond*100 + startMilliseconds"
set /a "endTotalMilliseconds=endHour*60*60*100 + endMinute*60*100 + endSecond*100 + endMilliseconds"

REM Calculating the elapsed time in milliseconds
set /a "elapsedMilliseconds=endTotalMilliseconds-startTotalMilliseconds"

REM Calculating the elapsed time in hours, minutes, and seconds
set /a "elapsedHour=elapsedMilliseconds/(60*60*100)"
set /a "elapsedMinute=(elapsedMilliseconds-(elapsedHour*60*60*100))/(60*100)"
set /a "elapsedSecond=(elapsedMilliseconds-(elapsedHour*60*60*100)-(elapsedMinute*60*100))/100"
set /a "elapsedMilliseconds=elapsedMilliseconds-(elapsedHour*60*60*100)-(elapsedMinute*60*100)-(elapsedSecond*100)"

REM Formatting the elapsed time
if !elapsedHour! lss 10 set "elapsedHour=0!elapsedHour!"
if !elapsedMinute! lss 10 set "elapsedMinute=0!elapsedMinute!"
if !elapsedSecond! lss 10 set "elapsedSecond=0!elapsedSecond!"
if !elapsedMilliseconds! lss 10 set "elapsedMilliseconds=0!elapsedMilliseconds!"
if !elapsedMilliseconds! lss 100 set "elapsedMilliseconds=0!elapsedMilliseconds!"

REM Returning the elapsed time
endlocal & set "%~1=%elapsedHour%:%elapsedMinute%:%elapsedSecond%.%elapsedMilliseconds%"