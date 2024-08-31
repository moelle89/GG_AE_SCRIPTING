#set font source location

$FontFolder = "C:\data_driven_ae_template-1\_FONTS"

$FontItem = Get-Item -Path $FontFolder

#go through all folders in source and list all fon, otf, ttc and ttf files

$FontList = Get-ChildItem -Path "$FontItem\*" -Include ('*.fon','*.otf','*.ttc','*.ttf') -Recurse

foreach ($Font in $FontList) {

Write-Host 'Installing font -' $Font.BaseName

Copy-Item $Font "C:\Windows\Fonts"

#register font for all users

New-ItemProperty -Name $Font.BaseName -Path "HKLM:\Software\Microsoft\Windows NT\CurrentVersion\Fonts" -PropertyType string -Value $Font.name

}