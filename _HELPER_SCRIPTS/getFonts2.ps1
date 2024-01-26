# Load the System.Drawing assembly
[System.Reflection.Assembly]::LoadWithPartialName('System.Drawing')

# Create an InstalledFontCollection
$fontList = (New-Object System.Drawing.Text.InstalledFontCollection)

# Specify the path for the font file
$fontFile = "$env:USERPROFILE\Desktop\GETFONTS\fonts.txt"

# Remove the file if it already exists
if (Test-Path $fontFile) {
    Remove-Item $fontFile
}

# Loop through the font collection and write each font filename to fonts.txt on the desktop
for ($i = 0; $i -lt $fontList.Families.Length; $i++) {
    $fontFileName = $fontList.Families[$i].Name -replace '[^a-zA-Z0-9\-_]', '_'
    Add-Content $fontFile "$fontFileName"
}