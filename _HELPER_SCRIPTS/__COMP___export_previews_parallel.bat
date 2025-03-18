@echo off
setlocal EnableDelayedExpansion

REM ===== Parallel rendering script for After Effects optimized for high-end CPUs =====
echo [INFO] Starting After Effects parallel batch rendering script
echo [INFO] Time started: %date% %time%

REM Set up paths and check if they exist
set "scriptPath=%~dp0"
set "Folder=%scriptPath%"
set "ffmpegPath=C:\ffmpeg\bin\ffmpeg.exe"
set "aePath=C:\Program Files\Adobe\Adobe After Effects 2024\Support Files\aerender.exe"
set "tempDir=%Folder%\temp_scripts"

REM Add a pause for debugging if needed
REM pause

REM CPU Detection and optimal process count calculation
echo [INFO] Detecting CPU configuration...
for /f "tokens=*" %%i in ('wmic cpu get NumberOfCores /value ^| find "="') do set %%i
for /f "tokens=*" %%i in ('wmic cpu get NumberOfLogicalProcessors /value ^| find "="') do set %%i

if not defined NumberOfLogicalProcessors (
    echo [WARNING] Could not detect CPU cores, using default settings
    set "NumberOfLogicalProcessors=8"
)

echo [INFO] Detected !NumberOfLogicalProcessors! logical processors

REM For an i9-13900K with 24 cores/32 threads, optimal settings are:
REM - Reserve 2-4 threads for system and After Effects itself
REM - Use about 75% of available threads for parallel rendering
REM - For other CPUs, calculate dynamically
if !NumberOfLogicalProcessors! GEQ 32 (
    REM i9-13900K or similar high-end CPU detected
    set "MAX_PROCESSES=10"
    echo [INFO] Using optimized settings for high-end CPU (i9-13900K or similar)
) else (
    REM Calculate optimal process count for other CPUs
    REM Formula: 75% of logical processors minus 2 (for system overhead)
    set /a "MAX_PROCESSES=(!NumberOfLogicalProcessors! * 3 / 4) - 2"
    if !MAX_PROCESSES! LSS 2 set "MAX_PROCESSES=2"
)

echo [INFO] Using !MAX_PROCESSES! parallel render processes

REM Check if aerender.exe exists
if not exist "!aePath!" (
    echo [ERROR] aerender.exe not found at: !aePath!
    echo [INFO] Checking alternative locations...

    REM Check for other AE versions
    for %%v in (2023 2022 2021 2020 CC2019 CC2018 CC2017) do (
        set "altPath=C:\Program Files\Adobe\Adobe After Effects %%v\Support Files\aerender.exe"
        if exist "!altPath!" (
            set "aePath=!altPath!"
            echo [INFO] Found aerender at: !aePath!
            goto :aerender_found
        )
    )

    echo [ERROR] Could not find aerender.exe. Please check your After Effects installation.
    goto :error_exit
)

:aerender_found

REM Check if ffmpeg exists
if not exist "!ffmpegPath!" (
    echo [WARNING] ffmpeg not found at: !ffmpegPath!
    echo [INFO] Checking if ffmpeg is in PATH...

    where ffmpeg >nul 2>&1
    if !errorlevel! equ 0 (
        set "ffmpegPath=ffmpeg"
        echo [INFO] Using ffmpeg from PATH
    ) else (
        echo [ERROR] ffmpeg not found. Media conversion will be skipped.
        set "skipConversion=1"
    )
)

REM Create logs directory
set "logsDir=%Folder%\render_logs"
if not exist "!logsDir!" mkdir "!logsDir!"

REM Create temp directory for render scripts
if not exist "!tempDir!" mkdir "!tempDir!"

REM Count total projects for progress tracking
set "totalProjects=0"
for %%i in (comp_*.aep) do set /a "totalProjects+=1"

if %totalProjects% equ 0 (
    echo [WARNING] No comp_*.aep files found in %Folder%
    goto :error_exit
)

echo [INFO] Found %totalProjects% project(s) to render
echo [INFO] Using maximum of %MAX_PROCESSES% parallel processes

REM Create a list of all projects to process
set "projectList=%tempDir%\project_list.txt"
if exist "!projectList!" del "!projectList!"
for %%i in (comp_*.aep) do (
    echo %%i >> "!projectList!"
)

REM Create individual render scripts for each composition
echo [INFO] Creating render scripts for each composition...
set "scriptCounter=0"
for /f "usebackq delims=" %%i in ("!projectList!") do (
    set /a "scriptCounter+=1"
    set "inputFile=%%i"

    REM Extract composition name from filename
    for /f "delims=." %%a in ("%%~ni") do set "compName=%%a"

    REM Create an individual render script
    set "renderScript=!tempDir!\render_!scriptCounter!.bat"

    echo @echo off > "!renderScript!"
    echo setlocal EnableDelayedExpansion >> "!renderScript!"
    echo echo [INFO] Starting render job for !compName! >> "!renderScript!"
    echo echo [INFO] Process ID: !scriptCounter! >> "!renderScript!"

    REM Create log file path with proper escaping
    echo set "logFile=!logsDir!\!compName!_render.log" >> "!renderScript!"

    REM Create output folder
    echo if not exist "!Folder!\!compName!" mkdir "!Folder!\!compName!" >> "!renderScript!"

    REM Add start time to log
    echo echo [%%date%% %%time%%] Started rendering !compName! ^>^> "%%logFile%%" >> "!renderScript!"

    REM Add JPG rendering commands
    echo echo [INFO] Rendering JPG stills for !compName!... >> "!renderScript!"

    echo echo [INFO] Rendering main composition... >> "!renderScript!"
    echo call "!aePath!" -project "!Folder!\!inputFile!" -comp "!compName!" -s 0 -e 0 -v ERRORS -mp -RStemplate "getgenius_default" ^^^
        -OMtemplate "getgenius_jpg_default" -output "!Folder!\!compName!_[#].jpg" ^>^> "%%logFile%%" 2^>^&1 >> "!renderScript!"
    echo if %%errorlevel%% neq 0 echo [WARNING] Error rendering main composition ^>^> "%%logFile%%" >> "!renderScript!"

    echo echo [INFO] Rendering square composition... >> "!renderScript!"
    echo call "!aePath!" -project "!Folder!\!inputFile!" -comp "!compName!_square" -s 0 -e 0 -v ERRORS -mp -RStemplate "getgenius_default" ^^^
        -OMtemplate "getgenius_jpg_default" -output "!Folder!\!compName!_[#].jpg" ^>^> "%%logFile%%" 2^>^&1 >> "!renderScript!"
    echo if %%errorlevel%% neq 0 echo [WARNING] Error rendering square composition ^>^> "%%logFile%%" >> "!renderScript!"

    echo echo [INFO] Rendering 1920 composition... >> "!renderScript!"
    echo call "!aePath!" -project "!Folder!\!inputFile!" -comp "!compName!_1920" -s 0 -e 0 -v ERRORS -mp -RStemplate "getgenius_default" ^^^
        -OMtemplate "getgenius_jpg_default" -output "!Folder!\!compName!_[#].jpg" ^>^> "%%logFile%%" 2^>^&1 >> "!renderScript!"
    echo if %%errorlevel%% neq 0 echo [WARNING] Error rendering 1920 composition ^>^> "%%logFile%%" >> "!renderScript!"

    REM Add MP4 rendering commands
    echo echo [INFO] Rendering H264 videos for !compName!... >> "!renderScript!"

    echo echo [INFO] Rendering main video... >> "!renderScript!"
    echo call "!aePath!" -project "!Folder!\!inputFile!" -comp "!compName!" -v ERRORS -mp -RStemplate "getgenius_default" ^^^
        -OMtemplate "getgenius_h264_default" -output "!Folder!\!compName!.[fileExtension]" ^>^> "%%logFile%%" 2^>^&1 >> "!renderScript!"
    echo if %%errorlevel%% neq 0 echo [WARNING] Error rendering main video ^>^> "%%logFile%%" >> "!renderScript!"

    echo echo [INFO] Rendering square video... >> "!renderScript!"
    echo call "!aePath!" -project "!Folder!\!inputFile!" -comp "!compName!_square" -v ERRORS -mp -RStemplate "getgenius_default" ^^^
        -OMtemplate "getgenius_h264_default" -output "!Folder!\!compName!.[fileExtension]" ^>^> "%%logFile%%" 2^>^&1 >> "!renderScript!"
    echo if %%errorlevel%% neq 0 echo [WARNING] Error rendering square video ^>^> "%%logFile%%" >> "!renderScript!"

    echo echo [INFO] Rendering 1920 video... >> "!renderScript!"
    echo call "!aePath!" -project "!Folder!\!inputFile!" -comp "!compName!_1920" -v ERRORS -mp -RStemplate "getgenius_default" ^^^
        -OMtemplate "getgenius_h264_default" -output "!Folder!\!compName!.[fileExtension]" ^>^> "%%logFile%%" 2^>^&1 >> "!renderScript!"
    echo if %%errorlevel%% neq 0 echo [WARNING] Error rendering 1920 video ^>^> "%%logFile%%" >> "!renderScript!"

    REM Add file conversion commands
    echo if not exist "!ffmpegPath!" goto :skip_conversion >> "!renderScript!"

    REM JPG to WEBP conversion
    echo echo [INFO] Converting JPG to WEBP... >> "!renderScript!"
    echo for %%%%j in ("!Folder!\!compName!*.jpg") do ( >> "!renderScript!"
    echo     if exist "%%%%j" ( >> "!renderScript!"
    echo         set "inputFile1=%%%%j" >> "!renderScript!"
    echo         for /f "delims=." %%%%a in ("%%%%~nj") do ( >> "!renderScript!"
    echo             set "name=%%%%a" >> "!renderScript!"
    echo             set "name=!name:~0,-2!" >> "!renderScript!"
    echo         ) >> "!renderScript!"
    echo         echo [INFO] Converting: !inputFile1! to WEBP >> "!renderScript!"
    echo         call "!ffmpegPath!" -i "%%%%inputFile1%%%%" -y "!Folder!\%%%%name%%%%.webp" ^>^> "%%logFile%%" 2^>^&1 >> "!renderScript!"
    echo         if %%errorlevel%% equ 0 ( >> "!renderScript!"
    echo             del "%%%%inputFile1%%%%" >> "!renderScript!"
    echo         ) else ( >> "!renderScript!"
    echo             echo [WARNING] Error converting !inputFile1! to WEBP. JPG file preserved. ^>^> "%%logFile%%" >> "!renderScript!"
    echo         ) >> "!renderScript!"
    echo     ) >> "!renderScript!"
    echo ) >> "!renderScript!"

    REM MP4 to WEBM conversion - optimize for high CPU cores
    echo echo [INFO] Converting MP4 to WEBM with optimized settings... >> "!renderScript!"
    echo for %%%%j in ("!Folder!\!compName!*.mp4") do ( >> "!renderScript!"
    echo     if exist "%%%%j" ( >> "!renderScript!"
    echo         set "inputFile2=%%%%j" >> "!renderScript!"
    echo         for /f "delims=." %%%%a in ("%%%%~nj") do set "name=%%%%a" >> "!renderScript!"
    echo         echo [INFO] Converting: %%%%inputFile2%%%% to WEBM >> "!renderScript!"
    echo         call "!ffmpegPath!" -i "%%%%inputFile2%%%%" -y -c:v libvpx-vp9 -crf 40 -b:v 0 -row-mt 1 -tile-columns 2 -threads 4 -b:a 128k -c:a libopus "!Folder!\%%%%name%%%%.webm" ^>^> "%%logFile%%" 2^>^&1 >> "!renderScript!"
    echo         if %%errorlevel%% equ 0 ( >> "!renderScript!"
    echo             del "%%%%inputFile2%%%%" >> "!renderScript!"
    echo         ) else ( >> "!renderScript!"
    echo             echo [WARNING] Error converting !inputFile2! to WEBM. MP4 file preserved. ^>^> "%%logFile%%" >> "!renderScript!"
    echo         ) >> "!renderScript!"
    echo     ) >> "!renderScript!"
    echo ) >> "!renderScript!"

    echo :skip_conversion >> "!renderScript!"

    REM Move files to project folder
    echo echo [INFO] Moving files to project folder: !compName! >> "!renderScript!"
    echo for /R "!Folder!" %%%%j in (!compName!*.*) do ( >> "!renderScript!"
    echo     if exist "%%%%j" ( >> "!renderScript!"
    echo         move "%%%%j" "!Folder!\!compName!\" ^> nul >> "!renderScript!"
    echo         if %%errorlevel%% neq 0 echo [WARNING] Failed to move: %%%%j ^>^> "%%logFile%%" >> "!renderScript!"
    echo     ) >> "!renderScript!"
    echo ) >> "!renderScript!"

    REM Copy project file to folder
    echo echo [INFO] Copying project file to: !compName! >> "!renderScript!"
    echo copy "!Folder!\!inputFile!" "!Folder!\!compName!\" ^> nul >> "!renderScript!"
    echo if %%errorlevel%% neq 0 echo [WARNING] Failed to copy project file: !inputFile! ^>^> "%%logFile%%" >> "!renderScript!"

    REM Add end time to log
    echo echo [%%date%% %%time%%] Completed rendering !compName! ^>^> "%%logFile%%" >> "!renderScript!"

    echo echo [INFO] Completed processing !compName! >> "!renderScript!"
    echo echo DONE^>"!tempDir!\!scriptCounter!.done" >> "!renderScript!"
    echo exit /b 0 >> "!renderScript!"
)

REM Debug: Check if any render scripts were created
echo [INFO] Created !scriptCounter! render scripts
if !scriptCounter! LEQ 0 (
    echo [ERROR] Failed to create render scripts. No render jobs found.
    goto :error_exit
)

REM Run the render scripts in parallel
echo [INFO] Starting parallel rendering with !MAX_PROCESSES! processes...
set "currentScript=1"
set "completedScripts=0"
set "runningProcesses=0"
set "loop_count=0"

REM Display processing info with CPU utilization
echo [INFO] CPU: !NumberOfLogicalProcessors! logical processors
echo [INFO] Running with !MAX_PROCESSES! parallel render processes

REM Create a process status file to track completion time for each process
set "statusFile=!tempDir!\process_status.txt"
echo Process Status - Started at %date% %time% > "!statusFile!"

echo [INFO] Press Ctrl+C to abort rendering

:process_loop
REM Check if we've processed all scripts
if !completedScripts! equ !totalProjects! goto :all_complete

REM Start new processes if we have available slots and more scripts to run
if !currentScript! leq !totalProjects! (
    if !runningProcesses! lss !MAX_PROCESSES! (
        echo [INFO] Starting render job !currentScript! of !totalProjects!
        echo Process !currentScript! - Started at %time% >> "!statusFile!"

        REM Debug: Verify script exists before running
        if not exist "!tempDir!\render_!currentScript!.bat" (
            echo [ERROR] Render script !currentScript! does not exist
            goto :error_exit
        )

        REM Run the script in a new CMD window with title for tracking
        start "AE Render !currentScript!" /B cmd /c "!tempDir!\render_!currentScript!.bat"

        set /a "currentScript+=1"
        set /a "runningProcesses+=1"
    )
)

REM Check for completed processes
for /l %%i in (1, 1, !currentScript!) do (
    if exist "!tempDir!\%%i.done" (
        del "!tempDir!\%%i.done" >nul 2>&1
        set /a "completedScripts+=1"
        set /a "runningProcesses-=1"
        echo Process %%i - Completed at %time% >> "!statusFile!"
        echo [INFO] Process %%i completed. Progress: !completedScripts! of !totalProjects! complete [!runningProcesses! active]
    )
)

REM Display current status every 10 iterations
set /a "loop_count+=1"
if !loop_count! GEQ 10 (
    echo [INFO] Status: !completedScripts! of !totalProjects! complete, !runningProcesses! processes active
    set "loop_count=0"
)

REM Short delay before checking again (reduced for high-end systems)
timeout /t 1 /nobreak >nul
goto :process_loop

:all_complete
echo [INFO] All render jobs completed!
echo All processes completed at %time% >> "!statusFile!"

REM Calculate total execution time
echo [INFO] Calculating performance statistics...
echo [INFO] Time finished: %date% %time%
echo [INFO] Log files available in: !logsDir!
echo [INFO] Process statistics saved to: !statusFile!

REM Keep temp folder for debugging
echo [INFO] Temporary files preserved in: !tempDir!

REM Finishing message with next steps
echo.
echo [INFO] Rendering completed successfully!
echo [INFO] Check !logsDir! for detailed logs
echo.
echo Press any key to exit...
pause >nul

goto :script_end

:error_exit
echo [ERROR] Script terminated due to errors

REM Debug output for error diagnosis
echo [DEBUG] Script path: !scriptPath!
echo [DEBUG] Current folder: !Folder!
echo [DEBUG] Aerender path: !aePath!
echo [DEBUG] FFMPEG path: !ffmpegPath!
echo [DEBUG] Projects found: !totalProjects!
echo [DEBUG] Total processes: !MAX_PROCESSES!

echo Press any key to exit...
pause >nul
exit /b 1

:script_end
echo [INFO] Parallel rendering completed successfully
endlocal
exit /b 0