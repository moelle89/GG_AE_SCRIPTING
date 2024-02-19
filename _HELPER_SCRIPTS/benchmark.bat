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

    REM Loop through the three compositions
    for %%C in (!compName! !compName!_square !compName!_1920) do (
	
		REM START BENCHMARK
		set "benchmarkStart=!time!"
	
        "C:\Program Files\Adobe\Adobe After Effects 2024\Support Files\aerender.exe" -project "%Folder%\!inputFile!" -comp "%%C" -v ERRORS -mp -RStemplate "getgenius_preview" -OMtemplate "getgenius_jpg_preview" -output "%RenderedFolder%\[compName]_[###].jpg"
		"C:\ffmpeg\bin\ffmpeg.exe" -loglevel panic -framerate 5 -start_number 0 -i "%RenderedFolder%\%%C_%%03d.jpg" -c:v libvpx-vp9 -quality good -speed 14 -crf 23 -c:a libopus "%Folder%\%%C.webm"

		REM END BENCHMARK
		set "benchmarkEnd=!time!"
		call :calculateElapsedTime benchmarkElapsed !benchmarkStart! !benchmarkEnd!
		echo.
		echo ############################################################
		echo.
		echo BENCHMARK time of %%C : !benchmarkElapsed!
		echo.
		echo ############################################################
		echo.
    )

    REM webp conversion
    for %%i in ("%RenderedFolder%\*.jpg") do (
        set "inputFile1=%%i"
        del "!inputFile1!"
    )
)

:end
endlocal
cmd /k

:calculateElapsedTime
setlocal
set "start=%~2"
set "end=%~3"

set /a "hours=1%end:~0,2%-1%start:~0,2%, minutes=1%end:~3,2%-1%start:~3,2%, seconds=1%end:~6,2%-1%start:~6,2%"

if %hours% lss 0 set /a hours+=24
if %minutes% lss 0 set /a minutes+=60 & set /a hours-=1
if %seconds% lss 0 set /a seconds+=60 & set /a minutes-=1

set "elapsedTime=!hours!:!minutes!:!seconds!"

endlocal & set "%1=%elapsedTime%"
exit /b