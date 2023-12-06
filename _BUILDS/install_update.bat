@echo off
setlocal enabledelayedexpansion

set "searchDir=%APPDATA%\Adobe\After Effects"
set "targetFolder=Scripts\ScriptUI Panels"
set "searchString=moelles_mojo"
set "sourceFile=moelles_mojo.jsxbin"

for /d %%i in ("%searchDir%\*") do (
    if exist "%%i\%targetFolder%" (
        echo Processing files in %%i\%targetFolder%
        
        rem Delete files containing the search string
        for %%f in ("%%i\%targetFolder%\*%searchString%*") do (
            echo Deleting: %%f
            del "%%f"
        )

        rem Copy the specified file to the Script UI Path
        if exist "%~dp0%sourceFile%" (
            echo Copying: %sourceFile% to %%i\%targetFolder%
            copy /Y "%~dp0%sourceFile%" "%%i\%targetFolder%"
        ) else (
            echo Warning: Source file %sourceFile% not found.
        )
    )
)

rem set "pluginTargetFolder=C:\Program Files\Common Files\Adobe\CEP\extensions"
rem set "pluginString=AEColorPicker"
rem set "pickerPlugin=AEColorPicker.aex"

rem Delete files containing the search string
rem for %%f in ("%pluginTargetFolder%\*%pluginString%*") do (
rem     echo Deleting: "%%f"
rem     del "%%f"
rem )

rem Copy the specified file to the target folder
rem if exist "%~dp0%pickerPlugin%" (
rem     echo Copying: %pickerPlugin% to "%pluginTargetFolder%"
rem    copy /Y "%~dp0%pickerPlugin%" "%pluginTargetFolder%"
rem ) else (
rem     echo Warning: Source file %pickerPlugin% not found.
rem )


pause