@echo off
setlocal EnableDelayedExpansion

set "scriptPath=%~dp0"
set "Folder=%scriptPath%"
set "RenderedFolder=%Folder%\__RENDERED_NEU"
if not exist "%RenderedFolder%" mkdir "%RenderedFolder%"
REM execute a list of AERENDER calls, each at a time
REM this example doesnt include render- and output-profiles nor the compostion. Without offering specific arguments, aerender uses the available items of the render-queue of each aep file. (if any)
AERENDER -project "%Folder%deg_match_pol.aep" -v ERRORS -mp -continueOnMissingFootage 2>nul
AERENDER -project "%Folder%deg_match_ru.aep" -v ERRORS -mp -continueOnMissingFootage 2>nul
AERENDER -project "%Folder%deg_match_tsch.aep" -v ERRORS -mp -continueOnMissingFootage 2>nul
AERENDER -project "%Folder%deg_match_turk.aep" -v ERRORS -mp -continueOnMissingFootage 2>nul
AERENDER -project "%Folder%deg_match_arab.aep" -v ERRORS -mp -continueOnMissingFootage 2>nul
AERENDER -project "%Folder%deg_match_de.aep" -v ERRORS -mp -continueOnMissingFootage 2>nul

cmd /k
exit