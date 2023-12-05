@echo off
set "searchTerm=moelles_mojo"
set "targetDirectories=%APPDATA%\Adobe\After Effects\23\Scripts\ScriptUI Panels
                      %APPDATA%\Adobe\After Effects\23.1\Scripts\ScriptUI Panels
                      %APPDATA%\Adobe\After Effects\23.2\Scripts\ScriptUI Panels
                      %APPDATA%\Adobe\After Effects\23.3\Scripts\ScriptUI Panels
                      %APPDATA%\Adobe\After Effects\23.4\Scripts\ScriptUI Panels
                      %APPDATA%\Adobe\After Effects\23.5\Scripts\ScriptUI Panels                      
					  %APPDATA%\Adobe\After Effects\23.6\Scripts\ScriptUI Panels
                      %APPDATA%\Adobe\After Effects\23.7\Scripts\ScriptUI Panels                      
					  %APPDATA%\Adobe\After Effects\23.8\Scripts\ScriptUI Panels                      
					  %APPDATA%\Adobe\After Effects\23.9\Scripts\ScriptUI Panels"
set "newFile=moelles_mojo__v0002.jsxbin"

for %%D in (%targetDirectories%) do (
    set "targetDirectory=%%D"

    echo Searching for files with "%searchTerm%" in the name in "%targetDirectory%"

    for %%F in ("%targetDirectory%\*%searchTerm%*") do (
        if exist "%%F" (
            del /q "%%F"
            echo Deleted: "%%F"
        ) else (
            echo File "%%F" not found.
        )
    )

    echo Deletion process completed for "%targetDirectory%".

    rem Copy the new file to the current target directory
    copy "%~dp0%newFile%" "%targetDirectory%"

    echo Copied: "%newFile%" to "%targetDirectory%"

    echo.
)

pause