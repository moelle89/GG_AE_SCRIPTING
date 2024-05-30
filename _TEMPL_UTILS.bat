@echo off
cls

set "scriptPath=%~dp0"
set "Folder=%scriptPath%"
set "aeDestinationFolder=C:\data_driven_ae_template-1\_assets\packs\01"
set "aeFootageFolder=(Footage)"
set "aeFootageFolderPath=%Folder%\%aeFootageFolder%"
set "fullAeFootageDestination=%aeDestinationFolder%\%aeFootageFolder%"
set ffmpeg = "C:\ffmpeg\bin\ffmpeg.exe"

:menu
echo Please select an option:
echo.
echo 1. Export previews of comp_ aeps
echo 2. Export previews of post_ aeps
echo 3. Import (Footage) Folder 
echo 4. Delete (Footage) Folder
echo 5. Exit
echo.
set /p choice=Enter your choice: 

if "%choice%"=="1" (
	echo.
	echo Export previews of all comp_.aep files inside of this folder.
	echo.
	
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
			
			ffmpeg -i "!inputFile1!" -y "%Folder%\!name!.webp"
			 del "!inputFile1!"
		)
		REM webm conversion
		for %%i in (%Folder%\*.mp4) do (
			set "inputFile2=%%i"
			for /f "delims=." %%a in ("%%~ni") do set "name=%%a"
			echo !name!
			ffmpeg -i "!inputFile2!" -c:v libvpx-vp9 -quality good -speed 14 -crf 26 -b:v 0 -b:a 128k -c:a libopus "%Folder%\!name!.webm"
			 del "!inputFile2!"
		)
		
		md "%Folder%\!compName!"
		for /R "%Folder%" %%i in (!compName!*.*) do (
			if exist "%%i" move "%%i" "%Folder%\!compName!\"
		)
		copy "!inputFile!" "%Folder%\!compName!\"
	)
	echo.
	echo Conversion complete.
	echo. 
	echo.
	goto menu	
	
) else if "%choice%"=="2" (
	echo.
	echo Export previews of all post_.aep files inside of this folder.
	echo.
    rem Add your actions for Option 2 here
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

	echo.
	echo Conversion complete.
	echo. 
	echo.
	goto menu	

) else if "%choice%"=="3" (
	echo.
	echo Get the footage folder.
	echo.
    rem Add your actions for Option 2 here
	if not exist "%aeFootageFolderPath%" (
		mkdir "%aeFootageFolderPath%"
	)
	xcopy /E /I /Y "%fullAeFootageDestination%" "%aeFootageFolderPath%"

	echo.
	echo Footage folder imported.
	echo. 
	echo.
	goto menu	
	
) else if "%choice%"=="4" (
	echo.
	echo Delete the footage folder.
	echo.
    REM exit /b
	rd /s /q "%aeFootageFolderPath%"
	
	echo.
	echo Footage folder deleted.
	echo. 
	echo.
	goto menu	
	
) else if "%choice%"=="5" (
    echo Exiting script...
    exit /b
) else (
    echo Invalid choice. Please try again.
    goto menu
)

cmd /k