$source = "C:\data_driven_ae_template-1\_FONTS*"
$destination = (New-Object -ComObject Shell.Application).NameSpace(0x14)

Get-ChildItem -Path $source -Include ('*.fon','*.otf','*.ttc','*.ttf') -Recurse | ForEach-Object {
    $destination.CopyHere($_.FullName, 0x10)
}