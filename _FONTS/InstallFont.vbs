Const FONTS = &H14&
Const FONT_FOLDER = "C:\data_driven_ae_template-1\_FONTS\"
Const SYSTEM_FONT_FOLDER = "C:\Windows\Fonts\"

Set objShell = CreateObject("Shell.Application")
Set objFolder = objShell.Namespace(FONTS)

Set objFSO = CreateObject("Scripting.FileSystemObject")
Set objFontFolder = objFSO.GetFolder(FONT_FOLDER)
Set objSystemFontsFolder = objFSO.GetFolder(SYSTEM_FONT_FOLDER)

' Loop through all the files in the specified fonts folder
For Each objFile In objFontFolder.Files
    ' Check if the file has a ".ttf" extension
    If LCase(objFSO.GetExtensionName(objFile)) = "ttf" Then
        fontName = objFSO.GetFileName(objFile)
        ' Check if the font is already installed by looking in the system Fonts folder
        If Not objFSO.FileExists(SYSTEM_FONT_FOLDER & fontName) Then
            ' If the font is not found in the system fonts folder, install it
            objFolder.CopyHere objFile.Path
            WScript.Echo "Installing font: " & fontName
        Else
            WScript.Echo "Font already installed: " & fontName
        End If
    End If
Next