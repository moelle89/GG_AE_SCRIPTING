// Specify the folder path
var folderPath = "C:\\Users\\Administrator\\Desktop\\GETFONTS\\_fonts";

// Create an array to store file names
var fileNames = [];

// Check if the folder exists
var folder = new Folder(folderPath);
if (folder.exists) {
    // Get all files in the folder
    var files = folder.getFiles();

    // Loop through the files and add their names (without extensions and underscores) to the array
    for (var i = 0; i < files.length; i++) {
        var fileName = files[i].name;

        // Remove the extension
        var lastDotIndex = fileName.lastIndexOf(".");
        var fileNameWithoutExtension = lastDotIndex !== -1 ? fileName.substring(0, lastDotIndex) : fileName;

        // Remove underscores
        var fileNameWithoutUnderscores = fileNameWithoutExtension.replace(/_/g, "");

        fileNames.push(fileNameWithoutUnderscores);
    }

    // Log the array to the JavaScript Console
    $.writeln("Files in the folder: " + fileNames.join(", "));
} else {
    // Log a message if the folder does not exist
    $.writeln("Folder does not exist: " + folderPath);
}
$.sleep(1000)

// After Effects Script to create a drop-down menu with entries from an array
function main() {
    //suppress error dialogs
    app.beginSuppressDialogs()
    var allFonts = fileNames;

    //////////////////////////////////////////////////////////////////////////
    //
    // Options Dialog
    //
    //////////////////////////////////////////////////////////////////////////

    var options = new Window('dialog', 'Test Script ');
    options.alignChildren = ['fill', 'top'];

    if (app.version == "13.0.1") { // if it's CS6, font color is dark, otherwise font color is light
        options.graphics.foregroundColor = options.graphics.newPen(options.graphics.PenType.SOLID_COLOR, [0.2, 0.2, 0.2], 1);
    } else {
        options.graphics.foregroundColor = options.graphics.newPen(options.graphics.PenType.SOLID_COLOR, [1, 1, 1,], 1);
    }

    //////////////////////////////////////////////////////////////////////////
    // List Font Names
    //////////////////////////////////////////////////////////////////////////

    var groupOptions = options.add('panel', undefined, 'Font Picker');
    groupOptions.orientation = 'column';
    groupOptions.alignChildren = 'left';
    groupOptions.margins = 30;
    groupOptions.indent = 30;
    groupOptions.graphics.font = ScriptUI.newFont("Segoe UI", "Regular", 14);

    groupOptions.add('statictext', undefined, 'System Fonts:');

    var fontListDropdown = groupOptions.add('dropdownlist', undefined, allFonts);
    fontListDropdown.preferredSize.width = 300;

    //////////////////////////////////////////////////////////////////////////
    // OK & Cancel Buttons
    //////////////////////////////////////////////////////////////////////////

    var btns = options.add('group {alignment: "right" }');
    btns.orientation = 'row';
    var okButton = btns.add('button', undefined, 'OK', { name: 'ok' });
    var canButton = btns.add('button', undefined, 'Cancel', { name: 'cancel' });
    var myResult = options.show();
    app.endSuppressDialogs(false);
    if (myResult == 2) {
        // on cancel, alert the user and exit the script
        options.close();
        return;
    }

    options.close();
    return fontListDropdown.selection.text;
}

// store the returned value for later as pickedFont
var pickedFont = main();
alert(pickedFont)