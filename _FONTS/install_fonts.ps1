$SourceDir   = "C:\data_driven_ae_template-1\_FONTS"
$Source      = "C:\data_driven_ae_template-1\_FONTS\*"
$TempFolder  = "C:\Windows\Temp\Fonts"

# Create the source directory if it doesn't already exist
New-Item -ItemType Directory -Force -Path $SourceDir

New-Item $TempFolder -Type Directory -Force | Out-Null

# Get all the font files
$FontFiles = Get-ChildItem -Path $Source -Include '*.ttf','*.ttc','*.otf' -Recurse

# Check if any new fonts need to be installed
$NewFonts = $FontFiles | Where-Object { -not(Test-Path "C:\Windows\Fonts\$($_.Name)") }

if ($NewFonts.Count -gt 0) {
    # Copy all new fonts to the temporary folder
    $NewFonts | ForEach-Object {
        Copy-Item $_.FullName -Destination $TempFolder
    }

    # Load the required .NET assemblies
    [System.Reflection.Assembly]::LoadWithPartialName("System.Drawing") | Out-Null
    [System.Reflection.Assembly]::LoadWithPartialName("System.Drawing.Text") | Out-Null

    # Install the fonts in batches
    $FontCollection = New-Object System.Drawing.Text.PrivateFontCollection
    Get-ChildItem -Path $TempFolder | ForEach-Object {
        $FontCollection.AddFontFile($_.FullName)
    }

    # Register the fonts with the system
    $FontCollection.Families | ForEach-Object {
        [System.Drawing.FontFamily]$_.Name
    }

    # Clean up the temporary folder
    Get-ChildItem -Path $TempFolder | Remove-Item -Force
}