@echo off

REM set "params=%*"
REM cd /d "%~dp0" && ( if exist "%temp%\getadmin.vbs" del "%temp%\getadmin.vbs" ) && fsutil dirty query %systemdrive% 1>nul 2>nul || (  echo Set UAC = CreateObject^("Shell.Application"^) : UAC.RE;ShellExecute "cmd.exe", "/k cd ""%~sdp0"" && %~s0 %params%", "", "runas", 1 >> "%temp%\getadmin.vbs" && "%temp%\getadmin.vbs" && exit /B )

REM randomly pick a folder inside
setlocal EnableDelayedExpansion
set "folders=C:\data_driven_ae_template-1\_assets\packs\*"
set "folderCount=0"
for /d %%a in (!folders!) do (
   set /a "folderCount+=1"
   set "folder[!folderCount!]=%%a"
)
set /a "randNum=(%RANDOM% %% folderCount) + 1"

REM copy the content of the randomly picked folder to
REM robocopy "!folder[%randNum%]!" C:\data_driven_ae_template-1\(Footage)\Footage /COPYALL /E /IS /IT
xcopy "!folder[%randNum%]!" C:\data_driven_ae_template-1\(Footage)\Footage /E /I /H /C /K /Y
exit