// powershell file location
var pathToPs1File = "~/Desktop/GETFONTS/getFonts.ps1"
// execute powershell file
var fonts = system.callSystem("Powershell.exe -ExecutionPolicy Bypass " + pathToPs1File)

// Give the powershell script some time (3 seconds in this case) to write all the font names
// it may need more time if you have 1000s of fonts, adjust as needed
$.sleep(3000)

// function to parse through the fonts pulled from the text file
// will return array of font names for ScriptUI
function getAllFonts(fontsFromFile) {

    fontsFromFile = fontsFromFile.split("\n");
    var fontListForScriptUI = []
    for (i = 0; i < fontsFromFile.length; i++) {
        if (!fontsFromFile[i]) {
            continue;
        }
        else {
            fontListForScriptUI.push(fontsFromFile[i])
        }
    }
    return fontListForScriptUI;
}

// Script UI will return the *name* of the font chosen.
function main() {

    //surpress error dialogs
    app.beginSuppressDialogs()
    var scriptVersion = 1.0;

    var fontFile = File("~/Desktop/fonts.txt");

    fontFile.open("e")
    var fontList = fontFile.read();
    fontFile.close();

    var allFonts = getAllFonts(fontList);

    //////////////////////////////////////////////////////////////////////////
    //
    // Options Dialog
    //
    //////////////////////////////////////////////////////////////////////////

    var options = new Window('dialog', 'Test Script ' + scriptVersion);
        options.alignChildren = ['fill', 'top'];
        options.graphics.font = ScriptUI.newFont ("Segoe UI", "Regular", 14);

    if (app.version == "13.0.1") { // if its CS6, font color is dark, otherwise font color is light
        options.graphics.foregroundColor = options.graphics.newPen (options.graphics.PenType.SOLID_COLOR, [0.2, 0.2, 0.2], 1);
    }
    else {
        options.graphics.foregroundColor = options.graphics.newPen (options.graphics.PenType.SOLID_COLOR, [1,1,1,], 1);
    }

    //////////////////////////////////////////////////////////////////////////
    // List Font Names
    //////////////////////////////////////////////////////////////////////////

    var groupOptions = options.add('panel', undefined, 'Font Picker');
        groupOptions.orientation = 'column';
        groupOptions.alignChildren = 'left';
        groupOptions.margins = 30;
        groupOptions.indent = 30;
        groupOptions.graphics.font = ScriptUI.newFont ("Segoe UI", "Regular", 14);

        groupOptions.add('statictext', undefined, 'System Fonts:');

    var fontList = groupOptions.add('dropdownlist', undefined, allFonts);
        fontList.preferredSize.width = 300;

    //////////////////////////////////////////////////////////////////////////
    // OK & Cancel Buttons
    //////////////////////////////////////////////////////////////////////////

    var btns = options.add('group {alignment: "right" }');
        btns.orientation = 'row';
    var okButton = btns.add('button', undefined, 'OK', { name: 'ok' });
    var canButton = btns.add('button', undefined, 'Cancel', { name: 'cancel' });

    var myResult = options.show();

    if (myResult == 2) {
        // on cancel, alert the user and exit the script
        alert("Operation Canceled!");
        exit(0);
    }

    options.close();
    return fontList.selection.text
}

// store the returned value for later as pickedFont
var pickedFont = main();

alert(pickedFont);