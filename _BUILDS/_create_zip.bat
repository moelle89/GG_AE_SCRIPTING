set ZipOutput="moelles_mojo.zip"
set File1="install_update.bat"
set File2="moelles_mojo.jsxbin"

rem Create a temporary directory
set TempDir="%TEMP%\moelles_mojo"
mkdir %TempDir%

rem Copy files to the temporary directory
copy %File1% %TempDir%
copy %File2% %TempDir%

rem Zip the files using PowerShell
powershell -nologo -noprofile -command "& {Add-Type -A 'System.IO.Compression.FileSystem'; [IO.Compression.ZipFile]::CreateFromDirectory('%TempDir%', '%ZipOutput%');}"

rem Remove the temporary directory
rmdir /s /q %TempDir%

echo Zip archive created: %ZipOutput%