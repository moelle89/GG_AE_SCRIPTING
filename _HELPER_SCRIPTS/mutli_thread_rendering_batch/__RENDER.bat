@echo off
setlocal EnableDelayedExpansion
REM outsource of AERENDER calls to be able to run multiple instances concurrently
echo Starting Script 1
start "" /B "_part_01.bat"
REM no title /B runinbackground
echo Starting Script 2
start "" /B "_part_02.bat"
REM no title /B runinbackground
echo All external scripts have completed.

exit