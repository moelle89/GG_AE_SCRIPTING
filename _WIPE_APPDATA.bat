@echo off
setlocal enabledelayedexpansion

set "BASE_PATH=%APPDATA%\Adobe\After Effects"
set "FOLDER_STRUCTURE1=22.6.5\Scripts\ScriptUI Panels"
set "FOLDER_STRUCTURE2=23.0\Scripts\ScriptUI Panels"
set "FOLDER_STRUCTURE3=23.1\Scripts\ScriptUI Panels"
set "FOLDER_STRUCTURE4=23.2\Scripts\ScriptUI Panels"
set "FOLDER_STRUCTURE5=23.3\Scripts\ScriptUI Panels"
set "FOLDER_STRUCTURE6=23.4\Scripts\ScriptUI Panels"
set "FOLDER_STRUCTURE7=23.5\Scripts\ScriptUI Panels"
set "FOLDER_STRUCTURE8=23.6\Scripts\ScriptUI Panels"
set "FOLDER_STRUCTURE9=23.6.2\Scripts\ScriptUI Panels"
set "FOLDER_STRUCTURE10=24.0\Scripts\ScriptUI Panels"
set "FOLDER_STRUCTURE11=24.1\Scripts\ScriptUI Panels"
set "FOLDER_STRUCTURE12=24.2\Scripts\ScriptUI Panels"

rd /s /q "%BASE_PATH%\%FOLDER_STRUCTURE1%\_scripts"
rd /s /q "%BASE_PATH%\%FOLDER_STRUCTURE2%\_scripts"
rd /s /q "%BASE_PATH%\%FOLDER_STRUCTURE3%\_scripts"
rd /s /q "%BASE_PATH%\%FOLDER_STRUCTURE4%\_scripts"
rd /s /q "%BASE_PATH%\%FOLDER_STRUCTURE5%\_scripts"
rd /s /q "%BASE_PATH%\%FOLDER_STRUCTURE6%\_scripts"
rd /s /q "%BASE_PATH%\%FOLDER_STRUCTURE7%\_scripts"
rd /s /q "%BASE_PATH%\%FOLDER_STRUCTURE8%\_scripts"
rd /s /q "%BASE_PATH%\%FOLDER_STRUCTURE9%\_scripts"
rd /s /q "%BASE_PATH%\%FOLDER_STRUCTURE10%\_scripts"
rd /s /q "%BASE_PATH%\%FOLDER_STRUCTURE11%\_scripts"
rd /s /q "%BASE_PATH%\%FOLDER_STRUCTURE12%\_scripts"

rd /s /q "%BASE_PATH%\%FOLDER_STRUCTURE1%\_img"
rd /s /q "%BASE_PATH%\%FOLDER_STRUCTURE2%\_img"
rd /s /q "%BASE_PATH%\%FOLDER_STRUCTURE3%\_img"
rd /s /q "%BASE_PATH%\%FOLDER_STRUCTURE4%\_img"
rd /s /q "%BASE_PATH%\%FOLDER_STRUCTURE5%\_img"
rd /s /q "%BASE_PATH%\%FOLDER_STRUCTURE6%\_img"
rd /s /q "%BASE_PATH%\%FOLDER_STRUCTURE7%\_img"
rd /s /q "%BASE_PATH%\%FOLDER_STRUCTURE8%\_img"
rd /s /q "%BASE_PATH%\%FOLDER_STRUCTURE9%\_img"
rd /s /q "%BASE_PATH%\%FOLDER_STRUCTURE10%\_img"
rd /s /q "%BASE_PATH%\%FOLDER_STRUCTURE11%\_img"
rd /s /q "%BASE_PATH%\%FOLDER_STRUCTURE12%\_img"

del /q "%BASE_PATH%\%FOLDER_STRUCTURE1%\moelles_mojo.jsxbin"
del /q "%BASE_PATH%\%FOLDER_STRUCTURE2%\moelles_mojo.jsxbin"
del /q "%BASE_PATH%\%FOLDER_STRUCTURE3%\moelles_mojo.jsxbin"
del /q "%BASE_PATH%\%FOLDER_STRUCTURE4%\moelles_mojo.jsxbin"
del /q "%BASE_PATH%\%FOLDER_STRUCTURE5%\moelles_mojo.jsxbin"
del /q "%BASE_PATH%\%FOLDER_STRUCTURE6%\moelles_mojo.jsxbin"
del /q "%BASE_PATH%\%FOLDER_STRUCTURE7%\moelles_mojo.jsxbin"
del /q "%BASE_PATH%\%FOLDER_STRUCTURE8%\moelles_mojo.jsxbin"
del /q "%BASE_PATH%\%FOLDER_STRUCTURE9%\moelles_mojo.jsxbin"
del /q "%BASE_PATH%\%FOLDER_STRUCTURE10%\moelles_mojo.jsxbin"
del /q "%BASE_PATH%\%FOLDER_STRUCTURE11%\moelles_mojo.jsxbin"
del /q "%BASE_PATH%\%FOLDER_STRUCTURE12%\moelles_mojo.jsxbin"
endlocal
pause