@echo off
setlocal EnableDelayedExpansion

set "scriptPath=%~dp0"
set "Folder=%scriptPath%"
set "RenderedFolder=%Folder%\__RENDERED"
if not exist "%RenderedFolder%" mkdir "%RenderedFolder%"
REM execute a list of AERENDER calls, each at a time
REM this example doesnt include render- and output-profiles nor the compostion. Without offering specific arguments, aerender uses the available items of the render-queue of each aep file. (if any)
AERENDER -project "%Folder%deg_match_ch.aep" -v ERRORS -mp -continueOnMissingFootage 2>nul
AERENDER -project "%Folder%deg_match_en.aep" -v ERRORS -mp -continueOnMissingFootage 2>nul
AERENDER -project "%Folder%deg_match_es.aep" -v ERRORS -mp -continueOnMissingFootage 2>nul
AERENDER -project "%Folder%deg_match_fr.aep" -v ERRORS -mp -continueOnMissingFootage 2>nul
AERENDER -project "%Folder%deg_match_it.aep" -v ERRORS -mp -continueOnMissingFootage 2>nul
AERENDER -project "%Folder%deg_match_nl.aep" -v ERRORS -mp -continueOnMissingFootage 2>nul

cmd /k
exit