@echo off
set "searchTerm=moelles_mojo"
set "targetDirectory=%APPDATA%\Adobe\After Effects\23.6\Scripts\ScriptUI Panels"

echo Searching for files with "%searchTerm%" in the name in "%targetDirectory%"

for %%F in ("%targetDirectory%\*%searchTerm%*") do (
    if exist "%%F" (
        del /q "%%F"
        echo Deleted: "%%F"
    ) else (
        echo File "%%F" not found.
    )
)

echo Deletion process completed.

pause