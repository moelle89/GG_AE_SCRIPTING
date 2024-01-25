[System.Reflection.Assembly]::LoadWithPartialName('System.Drawing')
$fontList = (New-Object System.Drawing.Text.InstalledFontCollection)

# save a file to the desktop with a list of all the fonts
$fontFile = "~/Desktop/GETFONTS/fonts.txt"

# since we use Add-Content, we are appending to the file.
# Delete the file on run if it exists so we don't continue appending to the list
if (Test-Path $fontFile) {
    Remove-Item $fontFile
}

# loop through the collection and write each font name to fonts.txt on the desktop
for ($i = 0; $i -lt $fontList.Families.Length; $i++) {
    # $fontObjs.add($fontList.Families[$i].Name)
    $fontNames = $fontList.Families[$i].Name
    Add-Content $fontFile "$fontNames"
}