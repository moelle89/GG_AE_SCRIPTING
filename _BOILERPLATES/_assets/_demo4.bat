@echo off
setlocal EnableDelayedExpansion
set "specificFolder=C:\data_driven_ae_template-1\_assets\packs\04"

REM copy the content of the picked folder to
REM robocopy "!folder[%randNum%]!" C:\data_driven_ae_template-1\(Footage)\Footage /COPYALL /E /IS /IT
xcopy "%specificFolder%" C:\data_driven_ae_template-1\(Footage)\Footage /E /I /H /C /K /Y
exit