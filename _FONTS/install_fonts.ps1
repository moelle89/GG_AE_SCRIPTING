$SourceDir   = "C:\data_driven_ae_template-1\_FONTS"
$Source      = "C:\data_driven_ae_template-1\_FONTS\*"
$TempFolder  = "C:\Windows\Temp\Fonts"

# Create the source directory if it doesn't already exist
New-Item -ItemType Directory -Force -Path $SourceDir

New-Item $TempFolder -Type Directory -Force | Out-Null

# Get all font files in the source directory
$fonts = Get-ChildItem -Path $Source -Include '*.ttf','*.ttc','*.otf' -Recurse | Where-Object { -not (Test-Path "C:\Windows\Fonts\$($_.Name)") }

# Copy fonts to local temporary folder
$fonts | ForEach-Object {
    Copy-Item $_.FullName -Destination $TempFolder -Force
}

# Install fonts from temporary folder to Windows Fonts folder without prompting
$shell = New-Object -ComObject Shell.Application
$folder = $shell.Namespace(0x14)
$fonts | ForEach-Object {
    $font = "$TempFolder\$($_.Name)"
    $folder.CopyHere($font, 16)  # Use 16 to overwrite without prompting
    Remove-Item $font -Force
}