# Define the source and destination folders
$specificFolder = "C:\data_driven_ae_template-1\_assets\packs\06"
$destinationFolder = "C:\data_driven_ae_template-1\(Footage)\Footage"

# Check if the source folder exists
if (Test-Path $specificFolder -PathType Container) {
    # Copy the content of the source folder to the destination folder
    Copy-Item -Path $specificFolder\* -Destination $destinationFolder -Recurse -Force

    Write-Host "File copy completed."
} else {
    Write-Host "Source folder does not exist. Exiting."
    exit 1
}