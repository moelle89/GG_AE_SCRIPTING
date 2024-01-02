@echo off

set "sf_sc1=%~dp0_BOILERPLATES"
set "file_sc1=copy_boilerplate_to_template_folder.bat"

set "sf_sc2=%~dp0_BUILDS"
set "file_sc2=install_update.bat"

echo Running Script 1 in %sf_sc1%
pushd %sf_sc1%
call %file_sc1%
popd

echo Running Script 2 in %sf_sc2%
pushd %sf_sc2%
call %file_sc2%
popd

echo Both scripts have been executed.