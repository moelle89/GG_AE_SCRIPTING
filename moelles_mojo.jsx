﻿
var scriptName = 'moelles mojo';
var scriptVersion = '0.1';

function createDockableUI(thisObj) {
    var dialog =
        thisObj instanceof Panel ?
            thisObj :
            new Window("window", undefined, undefined, {
                su1PanelCoordinates: false,
                borderless: false,
                resizeable: true,
                minimizeButton: true
            });
    dialog.onResizing = dialog.onResize = function () {
        this.layout.resize();
    };
    return dialog;
}

function showWindow(myWindow) {
    if (myWindow instanceof Window) {
        myWindow.show();
    }
    if (myWindow instanceof Panel) {
        myWindow.layout.layout(true);
        myWindow.layout.resize();
    }
}


var OS = $.os.indexOf("Windows") == -1 ? "macos" : "windows";
var slash = OS == "windows" ? "\\" : "/";
var mojoUI = {assetsFolder: File($.fileName).parent.fsName + slash};
mojoUI.imagesFolder = mojoUI.assetsFolder + "_img";

mojoUI.setFG = function (e, t) {
    return (((void (0) !== t) && (3 <= t.length)) && (e.graphics.foregroundColor = e.graphics.newPen(e.graphics.PenType.SOLID_COLOR, t, 1)), e);
};

mojoUI.setBG = function (e, t) {
    return (((void (0) !== t) && (3 <= t.length)) && (e.graphics.backgroundColor = e.graphics.newBrush(e.graphics.BrushType.SOLID_COLOR, t)), e);
};

mojoUI.createIcon = function (fileName) {
    if(!fileName){fileName = "noIcon.png";};
    var imagePath = mojoUI.imagesFolder + slash + fileName;
    if (!File(imagePath).exists) {
        alert("File doesn\'t exist\n" + imagePath);
        fileName = "noIcon.png";
    }
    return ScriptUI.newImage(File(imagePath));
};

//Paste code
// WIN
// ===
var win = createDockableUI(this);

/// INCLUDES

try {
    #include _scripts/imgStrings.jsx;
    #include _scripts/rectangleWizard.jsx;
    #include _scripts/elementsDiag.jsx;
    #include _scripts/organizeProjectAssets.jsx;
    #include _scripts/projectCleanup.jsx;
    #include _scripts/moveAnchorPoint.jsx;

} catch (e) { }

var buttonsSize = 25;
var tooltipWin = null;

win.orientation = "column";
win.alignChildren = ["fill", "top"];
win.alignment = ["fill", "top"];
win.minimumSize.width = 284;
win.spacing = 5;
win.margins = 0;

// ROOT
// ======
var root = win.add("group", undefined, {
    name: "root"
});
root.orientation = "row";
root.minimumSize.width = 284;
root.alignChildren = ["fill", "fill"];
root.spacing = 0;
root.margins = 5;

// TPANEL1
// =======
var tpanel1 = root.add("tabbedpanel", undefined, undefined, {
    name: "tpanel1"
});
tpanel1.alignChildren = ["left", "fill"];
tpanel1.margins = 0;
tpanel1.spacing = 0;
tpanel1.alignment = ["fill", "top"];
tpanel1.maximumSize.width = 276;
tpanel1.minimumSize.width = 276;

// tab_template
// ====
var tab_template = tpanel1.add("tab", undefined, undefined, {
    name: "tab_template"
});
tab_template.text = "TEMPLATE";
tab_template.orientation = "column";
tab_template.alignChildren = ["fill", "fill"];
tab_template.spacing = 0;
tab_template.margins = 0;

// GROUP1
// ======
var group1 = tab_template.add("group", undefined, {
    name: "group1"
});
group1.orientation = "row";
group1.alignChildren = ["fill", "fill"];
group1.spacing = 10;
group1.margins = 12;
group1.alignment = ["fill", "top"];

var btn_createComps = group1.add("iconbutton", undefined, File.decode(vidtemp_imgString), {
    name: "btn_createComps",
    style: "button"
});
btn_createComps.alignment = ["left", "top"];
btn_createComps.minimumSize.width = 118;
btn_createComps.preferredSize.height = 32;

var btn_createIMGComps = group1.add("iconbutton", undefined, File.decode(imgtemp_imgString), {
    name: "btn_createIMGComps",
    style: "button"
});
btn_createIMGComps.alignment = ["left", "top"];
btn_createIMGComps.minimumSize.width = 118;
btn_createIMGComps.preferredSize.height = 32;

// TPANEL2
// =======
var tpanel2 = tab_template.add("tabbedpanel", undefined, undefined, {
    name: "tpanel2"
});
tpanel2.alignChildren = ["fill", "top"];
tpanel2.alignment = ["fill", "top"];
tpanel2.minimumSize.width = 280;
tpanel2.margins = 0; // 
tpanel2.spacing = 0;

// TAB2
// ====
var tab2 = tpanel2.add("tab", undefined, undefined, {
    name: "tab2"
});
tab2.text = "ELEMENTS";
tab2.orientation = "column";
tab2.alignChildren = ["fill", "fill"];
tab2.alignment = ["fill", "fill"];
tab2.spacing = 12;
tab2.margins = 10;

// GROUPTAB2
// ======
var grouptab2 = tab2.add("group", undefined, {
    name: "grouptab2"
});
grouptab2.orientation = "row";
grouptab2.alignChildren = ["fill", "center"];
grouptab2.spacing = 10;
grouptab2.margins = 3;
grouptab2.alignment = ["fill", "top"];

var btn_addElement = grouptab2.add("iconbutton", undefined, File.decode(addel_imgString), {
    name: "btn_addElement",
    style: "button"
});
btn_addElement.preferredSize.height = 32;
btn_addElement.preferredSize.width = 150;
btn_addElement.alignment = ["fill", "top"];

var divider3 = tab2.add("panel", undefined, undefined, {
    name: "divider3"
});
divider3.alignment = "fill";
// GROUP2
// ======
var group2 = tab2.add("group", undefined, {
    name: "group2"
});
group2.orientation = "row";
group2.alignChildren = ["fill", "fill"];
group2.spacing = 10;
group2.margins = 3;
group2.alignment = ["fill", "top"];

var ratio_result = ["_GALLERY", "_GALLERY_SQUARE", "_GALLERY_1920"];
var ratio_resultIndexAdd = [0, 6, 12];

var ratio_array = ["9:16", "1:1", "16:9"];
var ratio = group2.add("dropdownlist", undefined, undefined, {
    name: "dropdown2",
    items: ratio_array,
});
ratio.preferredSize.height = 32;
ratio.selection = 0;
ratio.alignment = ["left", "fill"];

var gallery_result = [
    "gallery_img_01",
    "gallery_img_02",
    "gallery_img_03",
    "gallery_img_04",
    "gallery_img_05",
    "gallery_img_06",
    "gallery_img_square_01",
    "gallery_img_square_02",
    "gallery_img_square_03",
    "gallery_img_square_04",
    "gallery_img_square_05",
    "gallery_img_square_06",
    "gallery_img_1920_01",
    "gallery_img_1920_02",
    "gallery_img_1920_03",
    "gallery_img_1920_04",
    "gallery_img_1920_05",
    "gallery_img_1920_06"
];
var gallery_array = [
    "GALLERY_01",
    "GALLERY_02",
    "GALLERY_03",
    "GALLERY_04",
    "GALLERY_05",
    "GALLERY_06"
];
var gallery = group2.add("dropdownlist", undefined, undefined, {
    name: "gallery",
    items: gallery_array
});
gallery.selection = 0;
gallery.preferredSize.height = 32;
gallery.preferredSize.width = 112;

var btn_addGallery = group2.add("iconbutton", undefined, File.decode(addGal_imgString), {
    name: "btn_addGallery",
    style: "button"
});
btn_addGallery.preferredSize.height = 32;
btn_addGallery.preferredSize.width = 50;
btn_addGallery.alignment = ["left", "top"];

// tab_AP
// ====
var tab_ap = tpanel2.add("tab", undefined, undefined, {
    name: "tab_ap"
});
tab_ap.text = "ANCHOR POINT";
tab_ap.orientation = "row";
tab_ap.spacing = 12;
tab_ap.margins = 10;

// groupAP
// ======
var groupAP = tab_ap.add("group", undefined, {
    name: "groupAP"
});
groupAP.orientation = "column";
groupAP.spacing = 10;
groupAP.margins = 3;

// groupAP2
// ======
var groupAP2 = tab_ap.add("group", undefined, {
    name: "groupAP"
});
groupAP2.orientation = "column";
groupAP2.alignChildren = ["left", "top"];
groupAP2.alignment = ["left", "top"];
groupAP2.spacing = 10;
groupAP2.margins = 3;

var apText = groupAP2.add("statictext", undefined, undefined, {
    name: "apText", multiline: true
});
apText.text = "change the Anchor Point of selected layer(s)";
apText.preferredSize.height = 40;
apText.preferredSize.width = 135;

var apText2 = groupAP2.add("statictext", undefined, undefined, {
    name: "apText2"
});
apText2.text = "lock Anchor Point:";
apText2.preferredSize.height = 20;


var w = tab_ap;
// create a group
w.g = groupAP;
w.orientation = "row";

var ap_circ_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%18%00%00%00%18%08%06%00%00%00%C3%A0w%3D%C3%B8%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%00%C2%98IDATH%C2%89%C3%AD%C3%941%0E%C2%830%0C%C2%85%C3%A1%3F%15W%C2%A0c%C3%A1%00%C2%A5j%C2%87%C3%9E%7Fg%C2%8A%04%07%20%2B%3DD%18%C2%9A%C2%A5Cb%0B%0BU%08%C2%BCEy%C3%B1'Eq%5C%C2%8C%C2%91-%C3%AB%C2%B2i%C3%B7%138%06P)27%C3%A0%01%5C%C3%93z%06%06%20h%00'%C3%8C%C3%81%1Bxe%C3%B6%3C%C3%90K%40%C3%A9%C2%8A%C2%9ABs%C2%80g%C3%8A%C2%AC%06%3A%C3%A9%C2%B0%26S%02j%05%20f%C2%AC%C2%AF%C3%88Y%C2%80%C2%8F%02%C2%98-%C3%80%C2%A0%00F%0B%10%C3%B8%3E%C3%85%5Cy%60%C2%92%00i%0E%00Z%C3%A0%C3%8E%C3%AF%C2%A0%C2%8D%C2%9A%C3%A6Z%C3%80T%C3%BB%C3%BF%C3%ACN%C3%A0%C3%BF%C3%80%02%25%C2%9B%1C%24tY%5B%0D%00%00%00%00IEND%C2%AEB%60%C2%82";

var tli = File.decode(ap_circ_imgString);
var tmi = File.decode(ap_circ_imgString);
var tri = File.decode(ap_circ_imgString);
var mli = File.decode(ap_circ_imgString);
var mmi = File.decode(ap_circ_imgString);
var mri = File.decode(ap_circ_imgString);
var bli = File.decode(ap_circ_imgString);
var bmi = File.decode(ap_circ_imgString);
var bri = File.decode(ap_circ_imgString);


// This is all the Script UI, creating the interface.
// top row
w.g.tg = w.g.add("group", [0, 0, 96, 24]);
w.g.tg.orientation = "row";
w.g.tg.tl = w.g.tg.add("iconbutton", [0, 0, 24, 24], tli, {
    style: "toolbutton"
});
w.g.tg.tm = w.g.tg.add("iconbutton", [24, 0, 48, 24], tmi, {
    style: "toolbutton"
});
w.g.tg.tr = w.g.tg.add("iconbutton", [48, 0, 72, 24], tri, {
    style: "toolbutton"
});

// middle row
w.g.mg = w.g.add("group", [0, 24, 96, 48]);
w.g.mg.orientation = "row";
w.g.mg.tl = w.g.mg.add("iconbutton", [0, 0, 24, 24], mli, {
    style: "toolbutton"
});
w.g.mg.tm = w.g.mg.add("iconbutton", [24, 0, 48, 24], mmi, {
    style: "toolbutton"
});
w.g.mg.tr = w.g.mg.add("iconbutton", [48, 0, 72, 24], mri, {
    style: "toolbutton"
});

// bottom row
w.g.bg = w.g.add("group", [0, 48, 96, 72]);
w.g.bg.orientation = "row";
w.g.bg.tl = w.g.bg.add("iconbutton", [0, 0, 24, 24], bli, {
    style: "toolbutton"
});
w.g.bg.tm = w.g.bg.add("iconbutton", [24, 0, 48, 24], bmi, {
    style: "toolbutton"
});
w.g.bg.tr = w.g.bg.add("iconbutton", [48, 0, 72, 24], bri, {
    style: "toolbutton"
});

// this is the ignore masks checkbox
w.im = 0;
apCheck = groupAP2.add("checkbox", undefined, undefined, {
    name: "apCheck"
});
apCheck.text = "set expression";

addTooltipToButton(apCheck, "check if you want to set the anchor point for elements, that change its size. Just like text layers for example.", 60, false, true);

// tab_fx
// ====
var tab_fx = tpanel2.add("tab", undefined, undefined, {
    name: "tab_fx"
});
tab_fx.text = "FX";
tab_fx.orientation = "column";
tab_fx.alignChildren = ["fill", "top"];
tab_fx.spacing = 12;
tab_fx.margins = 10;

// TPANEL2
// =======
tpanel2.selection = tab2;

// GROUP2
// ======
var groupFx = tab_fx.add("group", undefined, {
    name: "groupFx"
});
groupFx.orientation = "row";
groupFx.alignChildren = ["fill", "top"];
groupFx.spacing = 10;
groupFx.margins = 3;
groupFx.alignment = ["fill", "top"];

var groupFx2 = tab_fx.add("group", undefined, {
    name: "groupFx2"
});
groupFx2.orientation = "row";
groupFx2.alignChildren = ["left", "top"];
groupFx2.spacing = 10;
groupFx2.margins = 3;
groupFx2.alignment = ["fill", "top"];

var colorFill = groupFx.add("iconbutton", undefined, File.decode(colorFill_imgString), {
    name: "colorFill",
    style: "button"
});
colorFill.preferredSize.height = 32;
colorFill.preferredSize.width = 116;
colorFill.alignment = ["left", "top"];

var scale2fill = groupFx.add("iconbutton", undefined, File.decode(scale2fill_imgString), {
    name: "scale2fill",
    style: "button"
});
scale2fill.preferredSize.height = 32;
scale2fill.preferredSize.width = 116;
scale2fill.alignment = ["left", "top"];

var addAnimbtn = groupFx2.add("iconbutton", undefined, File.decode(addAnimbtn_imgString), {
    name: "addAnimbtn",
    style: "button"
});
addAnimbtn.preferredSize.height = 32;
addAnimbtn.preferredSize.width = 116;
addAnimbtn.alignment = ["left", "top"];

// tab_files
// ====
var tab_files = tpanel1.add("tab", undefined, undefined, {
    name: "tab_files"
});
tab_files.text = "FILES";
tab_files.orientation = "column";
tab_files.alignChildren = ["fill", "top"];
tab_files.margins = 0;

// files_wrapper
// ======
var files_wrapper = tab_files.add("group", undefined, undefined, {
    name: "files_wrapper"
});
files_wrapper.orientation = "column";
files_wrapper.alignChildren = ["left", "fill"];
files_wrapper.spacing = 20;
files_wrapper.margins = 12;
files_wrapper.alignment = ["fill", "top"];

var btn_import = files_wrapper.add("iconbutton", undefined, File.decode(importfootage_imgString), {
    name: "btn_import",
    style: "button"
});
btn_import.alignment = ["left", "top"];
btn_import.preferredSize.height = 34;
btn_import.preferredSize.width = 240;

var divider2 = files_wrapper.add("panel", undefined, undefined, {
    name: "divider2"
});
divider2.alignment = "fill";

var btn_organize = files_wrapper.add("iconbutton", undefined, File.decode(orgproject_imgString), {
    name: "btn_organize",
    style: "button"
});
btn_organize.alignment = ["left", "top"];
btn_organize.preferredSize.height = 34;
btn_organize.preferredSize.width = 240;

var btn_cleanup = files_wrapper.add("iconbutton", undefined, File.decode(cleanup_imgString), {
    name: "btn_cleanup",
    style: "button"
});
btn_cleanup.alignment = ["left", "top"];
btn_cleanup.preferredSize.height = 34;
btn_cleanup.preferredSize.width = 240;

// tab_tools
// ====
var tab_tools = tpanel1.add("tab", undefined, undefined, {
    name: "tab_tools"
});
tab_tools.text = "CONFIG JSON";
tab_tools.orientation = "column";
tab_tools.alignChildren = ["fill", "top"];
tab_tools.spacing = 0;
tab_tools.margins = 0;

// CONFIGPANEL
// ===========
var configPanel = tab_tools.add("tabbedpanel", undefined, undefined, {
    name: "configPanel"
});
configPanel.alignChildren = ["fill", "fill"];
configPanel.alignment = ["fill", "fill"];
configPanel.minimumSize.width = 280;
configPanel.margins = 0;

// CONFIGCOLORS
// ============
var configColors = configPanel.add("tab", undefined, undefined, {
    name: "configColors"
});
configColors.text = "COLORS";
configColors.preferredSize.height = 34;
configColors.orientation = "column";
configColors.alignChildren = ["left", "top"];
configColors.spacing = 10;
configColors.margins = 12;

// CONFIGTEXT
// ==========
var configText = configPanel.add("tab", undefined, undefined, {
    name: "configText"
});
configText.text = "TEXT";
configText.preferredSize.height = 34;
configText.orientation = "column";
configText.alignChildren = ["left", "top"];
configText.spacing = 10;
configText.margins = 12;

// tools_wrapper
// ======
var tools_txt_wrapper = configColors.add("group", undefined, {
    name: "tools_txt_wrapper"
});
tools_txt_wrapper.orientation = "column";
tools_txt_wrapper.alignChildren = ["fill", "fill"];
tools_txt_wrapper.spacing = 0;
tools_txt_wrapper.margins = [0, 0, 0, 0];
tools_txt_wrapper.alignment = ["fill", "top"];

var tools_wrapper = configColors.add("group", undefined, {
    name: "tools_wrapper"
});
tools_wrapper.orientation = "row";
tools_wrapper.alignChildren = ["fill", "fill"];
tools_wrapper.spacing = 5;
tools_wrapper.margins = 0;
tools_wrapper.alignment = ["fill", "top"];

var tools_wrapper_l = tools_wrapper.add("group", undefined, {
    name: "tools_wrapper_l"
});
tools_wrapper_l.orientation = "column";
tools_wrapper_l.alignChildren = ["fill", "fill"];
tools_wrapper_l.spacing = 10;
tools_wrapper_l.margins = 0;
tools_wrapper_l.alignment = ["fill", "top"];

// EDIT_TEXT_WRAPPER
// =================
var edit_text_wrapper = configText.add("group", undefined, {
    name: "edit_text_wrapper"
});
edit_text_wrapper.orientation = "column";
edit_text_wrapper.alignChildren = ["fill", "top"];
edit_text_wrapper.spacing = 10;
edit_text_wrapper.margins = [0, 0, 0, 0];
edit_text_wrapper.alignment = ["fill", "top"];

var editTextTxt = edit_text_wrapper.add("statictext", undefined, undefined, {
    name: "editTextTxt"
});
editTextTxt.text = "Add a custom text and apply it to an element";
editTextTxt.preferredSize.height = 20;

var edittext1 = edit_text_wrapper.add('edittext {properties: {name: "edittext1", multiline: false, scrollable: false, borderless: false}}');
// Set the initial placeholder text
edittext1.preferredSize.height = 32;

edittext1.alignment = ["fill", "top"];


// EDIT_TEXT_GROUP
// ===============
var edit_text_group = edit_text_wrapper.add("group", undefined, {
    name: "edit_text_group"
});
edit_text_group.orientation = "row";
edit_text_group.alignChildren = ["fill", "fill"];
edit_text_group.spacing = 10;
edit_text_group.margins = 0;

var btn_title = edit_text_group.add("iconbutton", undefined, File.decode(title_imgString), {
    name: "btn_title"
});
btn_title.alignment = ["left", "fill"];
btn_title.preferredSize.width = 60;
btn_title.preferredSize.height = 32;

var btn_subtext = edit_text_group.add("iconbutton", undefined, File.decode(subtext_imgString), {
    name: "btn_subtext"
});
btn_subtext.alignment = ["left", "fill"];
btn_subtext.preferredSize.width = 80;
btn_subtext.preferredSize.height = 32;

var btn_source = edit_text_group.add("iconbutton", undefined, File.decode(source_imgString), {
    name: "btn_source"
});
btn_source.alignment = ["left", "fill"];
btn_source.preferredSize.width = 80;
btn_source.preferredSize.height = 32;

// EDIT_TEXT_GROUP1
// ================
var edit_text_group1 = edit_text_wrapper.add("group", undefined, {
    name: "edit_text_group1"
});
edit_text_group1.orientation = "row";
edit_text_group1.alignChildren = ["fill", "fill"];
edit_text_group1.spacing = 10;
edit_text_group1.margins = 0;

var btn_c2a = edit_text_group1.add("iconbutton", undefined, File.decode(c2a_imgString), {
    name: "btn_c2a"
});
btn_c2a.alignment = ["left", "fill"];
btn_c2a.preferredSize.width = 60;
btn_c2a.preferredSize.height = 32;

var btn_c2alink = edit_text_group1.add("iconbutton", undefined, File.decode(c2alink_imgString), {
    name: "btn_c2alink"
});
btn_c2alink.alignment = ["left", "fill"];
btn_c2alink.preferredSize.width = 80;
btn_c2alink.preferredSize.height = 32;

var tools_wrapper_r = tools_wrapper.add("group", undefined, {
    name: "tools_wrapper_r"
});
tools_wrapper_r.orientation = "column";
tools_wrapper_r.alignment = ["fill", "top"];
tools_wrapper_r.alignChildren = ["left", "fill"];
tools_wrapper_r.spacing = 10;
tools_wrapper_r.margins = 0;

var statictext2 = tools_txt_wrapper.add("statictext", undefined, undefined, {
    name: "statictext2"
});
statictext2.text = "click edit colors first;"
statictext2.preferredSize.height = 20;

var statictext3 = tools_txt_wrapper.add("statictext", undefined, undefined, {
    name: "statictext3"
});
statictext3.text = "(if you dont see the effect controls, hit F3)";
statictext3.preferredSize.height = 20;

var statictext4 = tools_txt_wrapper.add("statictext", undefined, undefined, {
    name: "statictext4"
});
statictext4.text = "";
statictext4.preferredSize.height = 5;

var btn_openAndSelect = tools_wrapper_l.add("iconbutton", undefined, File.decode(editcolors_imgString), {
    name: "btn_openAndSelect",
    style: "button"
});
btn_openAndSelect.alignment = ["left", "top"];
btn_openAndSelect.preferredSize.height = 32;
btn_openAndSelect.preferredSize.width = 130;

var btn_debug_colors = tools_wrapper_l.add("iconbutton", undefined, File.decode(applyem_imgString), {
    name: "btn_debug_colors",
    style: "button"
});
btn_debug_colors.alignment = ["left", "top"];
btn_debug_colors.preferredSize.height = 32;
btn_debug_colors.preferredSize.width = 130;

var btn_reload_json = tools_wrapper_r.add("iconbutton", undefined, File.decode(refresh_imgString), {
    name: "btn_reload_json",
    style: "toolbutton"
});
btn_reload_json.alignment = ["left", "top"];
btn_reload_json.preferredSize.height = 32;
btn_reload_json.minimumSize.width = 32;
btn_reload_json.preferredSize.width = 105;
btn_reload_json.text = "REFRESH ";

var btn_revert_json = tools_wrapper_r.add("iconbutton", undefined, File.decode(revert_imgString), {
    name: "btn_revert_json",
    style: "toolbutton"
});
btn_revert_json.alignment = ["left", "top"];
btn_revert_json.preferredSize.height = 32;
btn_revert_json.minimumSize.width = 32;
btn_revert_json.preferredSize.width = 105;
btn_revert_json.text = "REVERT ";

// TPANEL1
// =======
tpanel1.selection = tab_template;

// shortcuts
// ======
var shortcuts = win.add("group", undefined, {
    name: "shortcuts"
});
shortcuts.orientation = "row";
shortcuts.alignChildren = ["left", "top"];
shortcuts.alignment = ["left", "top"];
shortcuts.spacing = 10;
shortcuts.margins = [4, 0, 0, 0];
shortcuts.preferredSize.height = 46;

var openBoilerplate = shortcuts.add("iconbutton", undefined, File.decode(aep_imgString), {
    name: "openProjectInExplorer",
    style: "toolbutton"
});
openBoilerplate.alignment = ["center", "top"];

var openProjectInExplorer = shortcuts.add("iconbutton", undefined, File.decode(openProjectInExplorer_imgString), {
    name: "openProjectInExplorer",
    style: "toolbutton"
});
openProjectInExplorer.alignment = ["center", "top"];
/*
var openFootageFolder = shortcuts.add("iconbutton", undefined, File.decode(openFootageFolder_imgString), {
    name: "openFootageFolder",
    style: "toolbutton"
});
openFootageFolder.alignment = ["center", "top"];

var openJSONFolder = shortcuts.add("iconbutton", undefined, File.decode(openJSONFolder_imgString), {
    name: "openJSONFolder",
    style: "toolbutton"
});
openJSONFolder.alignment = ["center", "top"];
*/
var fitView = shortcuts.add("iconbutton", undefined, File.decode(fitView_imgString), {
    name: "fitView",
    style: "toolbutton"
});
fitView.alignment = ["center", "top"];

var delExp = shortcuts.add("iconbutton", undefined, File.decode(delExp_imgString), {
    name: "delExp",
    style: "toolbutton"
});
delExp.alignment = ["center", "top"];

var purgeAll = shortcuts.add("iconbutton", undefined, File.decode(purgeAll_imgString), {
    name: "purgeAll",
    style: "toolbutton"
});
purgeAll.alignment = ["center", "top"];

var btn_about = shortcuts.add('iconbutton', undefined, mojoUI.createIcon("icn-help.png"), {
    name: "btn_about",
    style: "toolbutton"
});
btn_about.alignment = ["center", "top"];

// add Obj / RIGHT ICON SIDEBAR
// ======
var addObj = root.add("group", undefined, {
    name: "addObj"
});
addObj.orientation = "column";
addObj.alignChildren = ["left", "top"];
addObj.alignment = ["left", "top"];
addObj.minimumSize.width = 54;
addObj.spacing = 4;
addObj.margins = 4;

// Example buttons
var buttonArray = [
    addObj.add("iconbutton", undefined, File.decode(textLayer_imgString), { name: "textLayer", style: "toolbutton" }),
    addObj.add("iconbutton", undefined, File.decode(solidLayer_imgString), { name: "solidLayer", style: "toolbutton" }),
    addObj.add("iconbutton", undefined, File.decode(shapeLayer_imgString), { name: "shapeLayer", style: "toolbutton" }),
    addObj.add("iconbutton", undefined, File.decode(adjustmentsLayer_imgString), { name: "adjustmentsLayer", style: "toolbutton" }),
    addObj.add("iconbutton", undefined, File.decode(nullLayer_imgString), { name: "nullLayer", style: "toolbutton" }),
    addObj.add("iconbutton", undefined, File.decode(parent2null_imgString), { name: "parent2null", style: "toolbutton" })
];

var textLayer = buttonArray[0];
var solidLayer = buttonArray[1];
var shapeLayer = buttonArray[2];
var adjustmentsLayer = buttonArray[3];
var nullLayer = buttonArray[4];
var parent2null = buttonArray[5];

/// INCLUDES END

function checkSecurityPrefSet() {
    if (!isSecurityPrefSet()) {
        if (parseFloat(app.version) >= 16.1) {
            alert("This script requires access to write files.\nOpen After Effects \'Preferences\' -> \'Scripting and Expressions\' and make sure \'Allow Scripts to Write Files and Access Network\' is checked.");
            app.executeCommand(3131);
        } else {
            alert("This script requires access to write files.\nGo to the \'General\' panel of the application \'Preferences\' and make sure \'Allow Scripts to Write Files and Access Network\' is checked.");
            app.executeCommand(2359);
        }
        if (!isSecurityPrefSet()) {
            return null;
        }
    }
    return true;
}

function isSecurityPrefSet() {
    try {
        var securitySetting = app.preferences.getPrefAsLong("Main Pref Section", "Pref_SCRIPTING_FILE_NETWORK_SECURITY");
        return securitySetting == 1;
    } catch (e) {
        return securitySetting = 1;
    }
}

function refreshCurrentFrame() {
    var comp = app.project.activeItem;
    if (comp !== null && (comp instanceof CompItem)) {
        comp.motionBlur = !comp.motionBlur;
        comp.motionBlur = !comp.motionBlur;
    }
};

var headerVec = ['iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsSAAALEgHS3X78AAACQElEQVRIiWKgKWBgYAAAAAD//6ItZmBgAAAAAP//oi1mYGAAAAAA//+C4/8MDAL/GRj6/zMwvP/PwPCfTAzSCzJDAGwoAwMDAAAA//9CtgAkQa7B6LgfbCgDAwMAAAD//2KEuZ6BgeE9lcNLkJGB4QMAAAD//2KCcgxoEBkGDAwMDAAAAAD//2IhoGgDAwPDRAYGBgUGBob5WMTRDYQHDRgwMDAAAAAA//+C+QAXaGRgYLjAyMCwAEQjKbrIyMBwAE3sAYYhDAwMAAAAAP//wueDD4wMDBf+MzCsZ2BgCGRgYFiIJShBvgrAaQIDAwMAAAD//8LnA1AwgIDDfwYGByQ+8YCBgQEAAAD//8Jnwcb/EBeDUpgDIyQIUIKBkYEhkJGBgRGEGRgYJmCYwMDAAAAAAP//whVEoODZ8J+BIYEBEtb8SL4qgCn6DwkeWLCBfIkKGBgYAAAAAP//gikEBQNyZkFOMcjqDKDyDVD+fjyZzYGBgYEBAAAA///CFUQHoQashxoCwqBgAqUa5GBCTkWYgIGBAQAAAP//wuUDULkEcy0Mg9M4yHcwH2Dx4XkUHzAwMAAAAAD//8IWBx8YGBjqsYRpwn8Gho/QMAdZjg5A8YSajBkYGAAAAAD//8LlA2pgBwYGBgYAAAAA//+ibWHHwPABAAAA//8CRzKIgSsdkwkmgM1kYGAAAAAA//9CDibqVzgMDAwAAAAA//+iLWZgYAAAAAD//6ItZmBgAAAAAP//oi1mYGAAAAAA//8DACa3CZtKZeSJAAAAAElFTkSuQmCC'];

////

/** convert a #ff00ff color string to a normalized RGBA color array
    @parem {hexString} - string - hex string
*/
function hexToArray(hexString) {
    var hexColor = hexString.replace('#', '');
    var r = parseInt(hexColor.slice(0, 2), 16) / 255;
    var g = parseInt(hexColor.slice(2, 4), 16) / 255;
    var b = parseInt(hexColor.slice(4, 6), 16) / 255;
    return [r, g, b, 1];
}

/** open url in browser
    @parem {url} - string - url
*/
function visitURL(url) {
    if ($.os.indexOf("Windows") != -1) {
        system.callSystem('cmd /c "' + Folder.commonFiles.parent.fsName + "\\Internet Explorer\\iexplore.exe" + '" ' + url);
    } else {
        system.callSystem('open "' + url + '"');
    }
}

/**************************************************************************
 * Text Button ************************************************************
 **************************************************************************/
function txtDraw() {
    try {
    this.graphics.drawOSControl();
    this.graphics.rectPath(0, 0, this.size[0], this.size[1]);
    this.graphics.fillPath(this.fillBrush);
    } catch (err) {
        // fail silently
    }
    if (this.text) {
        this.graphics.drawString(
            this.text,
            this.textPen,
            (this.size[0] - this.graphics.measureString(this.text, this.graphics.font, this.size[0])[0]) / 2,
            (this.size[1] - this.graphics.measureString(this.text, this.graphics.font, this.size[0])[1]) / 1.75,
            this.graphics.font);
    }
}
/** draw an text button with a colored background - returns a button object
    @parem {parentObj} - object - ScriptUI panel or group
    @parem {buttonText} - string - button text
    @parem {staticColor} - string - icon color when static
    @parem {hoverColor} - string - icon color when hovered (optional)
*/
function buttonColorText(parentObj, buttonText, staticColor, hoverColor) {
    var btn = parentObj.add('button', undefined, '', { name: 'ok' });    // add a basic button to style
    btn.spacing = 0;
    btn.margins = 0;
    btn.fillBrush = btn.graphics.newBrush(btn.graphics.BrushType.SOLID_COLOR, hexToArray(staticColor));
    btn.text = buttonText.toUpperCase();
    btn.textPen = btn.graphics.newPen(btn.graphics.PenType.SOLID_COLOR, hexToArray('#ffffff'), 1);
    btn.onDraw = txtDraw;

    if (hoverColor) {
        try {
            btn.addEventListener("mouseover", function () {
                updateTextButtonOnHover(this, buttonText, hoverColor, "#FFFFFF");
            });
            btn.addEventListener("mouseout", function () {
                updateTextButtonOnHover(this, buttonText, staticColor, "#FFFFFF");
            });
        } catch (err) {
            // fail silently
        }
    }

    return btn;
}

function updateTextButtonOnHover(btn, buttonText, backgroundColor, textColor) {
    btn.fillBrush = btn.graphics.newBrush(btn.graphics.BrushType.SOLID_COLOR, hexToArray(backgroundColor));
    btn.text = buttonText.toUpperCase();
    btn.textPen = btn.graphics.newPen(btn.graphics.PenType.SOLID_COLOR, hexToArray(textColor), 1);
    btn.onDraw = txtDraw;
    return btn;
}

/**************************************************************************
 * Vector Button **********************************************************
 **************************************************************************/
function vecToPoints(vecCoord) {
    var points = [];
    var n;
    for (var i = 0; i < vecCoord.length; i++) {
        var eachNum = vecCoord[i].split(/[\s,]/);
        var coordinates = [];
        var sets = [];
        for (var k = 0; k < eachNum.length; k += 2) {
            sets.push(eachNum[k] + "," + eachNum[k + 1]);
        }
        for (var j = 0; j < sets.length; j++) {
            n = sets[j].split(",");
            coordinates[j] = n;
            coordinates[j][0] = (parseFloat(coordinates[j][0]));
            coordinates[j][1] = (parseFloat(coordinates[j][1]));
        }
        points.push(coordinates);
    }
    return points;
}

function vecDraw() {
    this.graphics.drawOSControl();
    this.graphics.rectPath(0, 0, this.size[0], this.size[1]);
    this.graphics.fillPath(this.graphics.newBrush(this.graphics.BrushType.SOLID_COLOR, [0, 0, 0, 0.15]));
    try {
        for (var i = 0; i < this.coord.length; i++) {
            var line = this.coord[i];
            this.graphics.newPath();
            this.graphics.moveTo(line[0][0] + (this.size[0] / 2 - this.artSize[0] / 2), line[0][1] + (this.size[1] / 2 - this.artSize[1] / 2));
            for (var j = 0; j < line.length; j++) {
                this.graphics.lineTo(line[j][0] + (this.size[0] / 2 - this.artSize[0] / 2), line[j][1] + (this.size[1] / 2 - this.artSize[1] / 2));
            }
            this.graphics.fillPath(this.graphics.newBrush(this.graphics.BrushType.SOLID_COLOR, hexToArray(this.iconColor)));
        }
    } catch (e) {

    }
}

/** draw an colored icon button - returns a button object
    @parem {parentObj} - object - ScriptUI panel or group
    @parem {iconVec} - array of strings - SVG coords as string
    @parem {size} - array - icon size
    @parem {staticColor} - string - icon color when static
    @parem {hoverColor} - string - icon color when hovered (optional)
*/
function buttonColorVector(parentObj, iconVec, size, staticColor, hoverColor) {
    var btn = parentObj.add("button", [0, 0, size[0], size[1], undefined]);
    btn.coord = vecToPoints(iconVec);
    btn.iconColor = staticColor;
    btn.artSize = size;
    btn.onDraw = vecDraw;

    if (hoverColor) {
        try {
            btn.addEventListener("mouseover", function () {
                updateVectorButtonOnHover(this, iconVec, hoverColor, size);
            });
            btn.addEventListener("mouseout", function () {
                updateVectorButtonOnHover(this, iconVec, staticColor, size);
            });
        }
        catch (err) {
            // fail silently
        }
    }

    return btn;
}

function updateVectorButtonOnHover(btn, iconVec, iconColor, size) {
    btn.coord = vecToPoints(iconVec);
    btn.iconColor = iconColor;
    btn.artSize = size;
    btn.onDraw = vecDraw;
    return btn;
}



btn_about.onClick = function () { // open about panel
    var w = new Window('dialog', 'About ' + scriptName);
    w.margins = 0;
    w.spacing = 0;

    var content = w.add('group');
    content.alignChildren = ['fill', 'fill'];
    content.orientation = 'column';
    content.alignment = ['top', 'left'];
    content.margins = 16;
    content.spacing = 8;
    var gg_img = content.add("image", undefined, mojoUI.createIcon("about_head.png"), { name: "gg_img" });

    gg_img.minimumSize.width = 320;
    gg_img.minimumSize.height = 64;

    content.add('statictext', [0, 0, 360, 140], 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. \n\nAt vero eos et accusam et justo duo dolores et ea rebum.\n\n' + scriptName + ' - v' + scriptVersion + '\nCreated by Manuel Moellmann, Head of Design at ITNT Group', { multiline: true });

    var btn_close = buttonColorText(content, 'Close', '#546E7A', '#55869d');
    gg_img.addEventListener("click", function () {
        visitURL('https://github.com/moelle89/GG_AE_SCRIPTING');
    });

    w.show();
};


///

function getCurrentMousePosition(event, width) {
    var customWidth;
    if (width) { customWidth = width } else { customWidth = buttonsSize };
    var cSpacing = customWidth * .5;
    return win.orientation == "column" ? [(event.screenX - event.clientX) + customWidth + cSpacing, (event.screenY - event.clientY) - buttonsSize] : [event.screenX - event.clientX, (event.screenY - event.clientY) + buttonsSize + cSpacing];
}

function getMousePosition(event) {
    return win.orientation == "column" ? [(event.screenX - event.clientX) + buttonsSize + 7, (event.screenY - event.clientY) - buttonsSize] : [event.screenX - event.clientX, (event.screenY - event.clientY) + buttonsSize + 7];
}

function showCustomTooltip(text, coordinates, width, invert, multiline) {
    if (multiline) { multiline = true } else { multiline = false };
    var customWidth; var negativX;
    if (width) { customWidth = width * 0.75; if (invert) { negativX = width * 3.75 } else { negativX = width * 1.5 } } else { customWidth = buttonsSize; negativX = 0 };
    var tooltipWin = new Window("palette", "tooltip", undefined, { borderless: true, closeButton: false, maximizeButton: false, minimizeButton: false, resizeable: false, title: "tooltip" });
    tooltipWin.margins = 5;
    tooltipWin.spacing = 5;
    mojoUI.setBG(tooltipWin, [.06, .06, .06]);
    var panel = tooltipWin.add("group", undefined, "");
    panel.spacing = 4;
    panel.margins = 6;
    //panel.maximumSize.width = 170;
    // Customize background color
    //panel.graphics.backgroundColor = panel.graphics.newBrush(panel.graphics.BrushType.SOLID_COLOR, [0.05, 0.05, 0.05]); // RGB color [R, G, B] 

    var staticText = panel.add("statictext", undefined, text, { multiline: multiline });
    if (multiline) { staticText.maximumSize.width = 232; }
    // Customize text color
    staticText.graphics.foregroundColor = staticText.graphics.newPen(staticText.graphics.PenType.SOLID_COLOR, [0.73, 0.84, 0.97, 0.85], 1);
    //staticText.graphics.foregroundColor = staticText.graphics.newPen(staticText.graphics.PenType.SOLID_COLOR, [1, 1, 1]); // RGB color [R, G, B]

    tooltipWin.show();

    tooltipWin.frameLocation = win.orientation == "column" ? [coordinates[0] - negativX, coordinates[1] + customWidth] : [coordinates[0], coordinates[1]];

    return tooltipWin;
}


function addTooltipToButton(button, tooltipText, width, invert, multiline) {
    var tooltipWin = "";
    button.addEventListener("mouseover", function (e) {
        var coordinates = getCurrentMousePosition(e, width);
        tooltipWin = showCustomTooltip(tooltipText, coordinates, width, invert, multiline);
    });

    button.addEventListener("mouseout", function (e) {
        try {
            if (tooltipWin) {
                tooltipWin.close();
            }
        } catch (err) {
        }
    });
}


// Example tooltips
var tooltipTextArray = [
    "add a text layer to active comp",
    "add a solid layer to active comp",
    "add a shape layer to active comp",
    "add an adjustment layer to active comp",
    "add a null layer to active comp",
    "parent selected objects to a null layer"
];

// Add tooltip functionality to each button
for (var i = 0; i < buttonArray.length; i++) {
    addTooltipToButton(buttonArray[i], tooltipTextArray[i], 80, true);
}
//////
var hoverMenuWin;
function HoverMenu(title, buttonsData) {
    this.title = title;
    this.buttonsData = buttonsData;
    this.buttonsArray = [];

    // Function to create a closure for buttonData
    function createButtonClickHandler(data) {
        return function () {
            // Call the associated external function
            data.functionName && data.functionName();
        };
    }
    // Create the menu
    this.showMenu = function (coordinates) {
        hoverMenuWin = new Window("palette", this.title, undefined, {
            borderless: true,
            closeButton: false,
            maximizeButton: false,
            minimizeButton: false,
            resizable: false,
            title: this.title
        });
        mojoUI.setBG(hoverMenuWin, [.085, .085, .085]);

        hoverMenuWin.margins = 0;
        hoverMenuWin.spacing = 0;

        var panel = hoverMenuWin.add("group", undefined, "");
        panel.orientation = "column";
        panel.alignment = ["fill", "center"]
        panel.alignChildren = ["fill", "center"];
        panel.spacing = 4;
        panel.margins = 6;
        // Create an array to store button objects
        var buttonsArray = [];

        for (var i = 0; i < this.buttonsData.length; i++) {
            var buttonData = this.buttonsData[i];

            // Create btn_grp
            var btn_grp = panel.add("group", undefined, { name: "btn_grp" }); // Assign a unique name based on buttonData.name
            btn_grp.orientation = "row";

            btn_grp.alignment = ["fill", "center"];
            btn_grp.alignChildren = ["fill", "fill"];

            // Create btn_icon
            var btn_icon = buttonColorText(btn_grp, buttonData.text, '#161616', '#010101');
            // Add a click event listener to the btn_grp using the closure
            btn_icon.onClick = createButtonClickHandler(buttonData);
            this.buttonsArray.push(btn_grp);
        }

        hoverMenuWin.onDeactivate = function () {
            hoverMenuWin.close();
        };

        hoverMenuWin.onClose = function () {
            try {
                hoverMenuWin.hide();
                delete hoverMenuWin;
            } catch (e) { }
        };

        // Check if the mouse is inside the palette continuously

        hoverMenuWin.frameLocation = win.orientation == "column" ? [coordinates[0], coordinates[1]] : [coordinates[0], coordinates[1] + 7];
        mousePosGlobal = hoverMenuWin.frameLocation;
        hoverMenuWin.show();

        return hoverMenuWin;
    };
}

// hoverMenu_purge

function purge_imagec() {
    app.executeCommand(2372);
    alert("Image-Cache cleared");
}

function purge_discc() {
    app.executeCommand(10200);
    //alert("Disc-Cache cleared");
}

// Create instances of HoverMenu with different data
var hoverMenu_purge = new HoverMenu("hoverMenu_purge", [
    { imgString: textLayer_imgString, text: "Clean local Image-Cache", name: "purge_imagec", functionName: purge_imagec },
    { imgString: solidLayer_imgString, text: "Clean Disc-Cache", name: "purge_discc", functionName: purge_discc }
]);


// hoverMenu_open

function open_prjct() {
    openProjectFolder();
}
function open_footage() {
    openSubfolderInProject("(footage)/Footage");
}
function open_json() {
    openSubfolderInProject("(footage)/Footage/json");
}

// Create instances of HoverMenu with different data
var hoverMenu_open = new HoverMenu("hoverMenu_open", [
    { imgString: textLayer_imgString, text: "Open Project Folder", name: "open_prjct", functionName: open_prjct },
    { imgString: solidLayer_imgString, text: "Open Footage Folder", name: "open_footage", functionName: open_footage },
    { imgString: solidLayer_imgString, text: "Open JSON Folder", name: "open_json", functionName: open_json }
]);

// Function to add hover menu to a button
function addHoverMenuToButton(button, hoverMenu) {
    button.addEventListener("mouseover", function (e) {
        var coordinates = getMousePosition(e);
        hoverMenuWin = hoverMenu.showMenu(coordinates);
    });
    win.onClick = function () {
        if (hoverMenuWin) {
            hoverMenuWin.close();
            try {
                hoverMenuWin.hide();
                delete hoverMenuWin;
            } catch (e) { }
        }
    }
    if (hoverMenuWin) {
        hoverMenuWin.addEventListener("mouseout", function (e) {
            hoverMenuWin.close();
        })
    }

}

function savePseudoEffect(pseudoEffectData) {
    var pseudoEffect,
        ffxFile,
        writeFile = function (pathToFile, content, encoding) {
            var fileObject = new File(pathToFile);
            fileObject.encoding = encoding || "utf-8";
            fileObject.open("w");
            fileObject.write(content);
            fileObject.close();
            return fileObject;
        },
        makePseudoEffectLive = function (ffxFile) {
            var tempComp, tempLayer;
            tempComp = app.project.items.addComp("tempComp", 100, 100, 1, 1, 24);
            tempLayer = tempComp.layers.addShape();
            tempLayer.applyPreset(ffxFile);
            tempComp.remove();
        };

    var jssFolder = new Folder(Folder.myDocuments.fsName + "/Adobe/After Effects 20" + app.buildName.substr(0, 2) + "/User Presets/mojo");
    if (!jssFolder.exists)
        jssFolder.create();
    ffxFile = writeFile(jssFolder.fsName + "/" + pseudoEffectData.name + ".ffx", pseudoEffectData.binary, "BINARY");
    makePseudoEffectLive(ffxFile);
    pseudoEffect = null;
    return pseudoEffect;
}

// Function to find the index of a composition by name

function findComp(theName) {
    for (var i = 1; i <= app.project.numItems; i++) {
        if ((app.project.item(i) instanceof CompItem) && (app.project.item(i).name == theName)) {
            return app.project.item(i);
        }
    }
    return null;
}

// Check if a layer is selected
function isLayerSelected(layerName) {
    var selectedLayer = app.project.activeItem.selectedLayers[0];

    if (selectedLayer && selectedLayer.name === layerName) {
        return true;
    } else {
        return false;
    }
}


// Function to find the index of an item by name
function getItem(theName) {
    for (var i = 1; i <= app.project.numItems; i++) {
        if ((app.project.item(i)) && (app.project.item(i).name == theName)) {
            return app.project.item(i);
        }
    }
    return null;
}

function getThingName() {
    var comp = app.project.activeItem;
    var layer = comp.selectedLayers[0];
    var props = comp.selectedProperties;
    var prop = props[0];

    alert(prop.name + " - " + prop.matchName);
};

// Function to find the index of a layer by name in a composition with a specific name
function indexOfLayer(compName, layerName) {
    // Loop through compositions in the project
    for (var i = 1; i <= app.project.items.length; i++) {
        var currentItem = app.project.items[i];

        // Check if the item is a composition and its name matches
        if (currentItem instanceof CompItem && currentItem.name === compName) {
            // Loop through layers in the composition
            for (var j = 1; j <= currentItem.layers.length; j++) {
                var currentLayer = currentItem.layers[j];

                // Check if the layer name matches
                if (currentLayer.name === layerName) {
                    // Return the index if found
                    return j;
                }
            }

            // If layer with the specified name is not found, return -1
            return -1;
        }
    }
    // If the composition with the specified name is not found, return -1
    return -1;
}

// Loops through the After-Effects project items and returns an array of items that match the name
function getItemsByName(nameString) {
    // returns array of found matches
    if (!nameString) {
        return false;
    }
    var matches = [];

    for (var i = 1; i <= app.project.numItems; i++) {
        var crnt = app.project.item(i);
        var crntName = crnt.name;

        var isAMatch =
            nameString && crntName.indexOf(nameString) > -1 ? true : false;
        if (isAMatch) {
            matches.push(crnt);
        }
    }
    alert(matches);
    return matches;
};

// Function to check if names are already used in the project
function areNamesUsed(name1, name2, name3) {
    // Get the current project
    var curProject = app.project;

    // Loop through each item in the project
    for (var i = 1; i <= curProject.numItems; i++) {
        var curItem = curProject.item(i);

        // Check if the name matches any of the given names
        if (curItem.name === name1 || curItem.name === name2 || curItem.name === name3) {
            return true; // Name already exists for some project item
        }
    }
    return false; // None of the given names exist in the project
}

// Create Solid Layer
function createSolid(layerName) {
    app.beginUndoGroup("New Solid");
    var activeComp = app.project.activeItem;
    if (checkComp(activeComp)) {
        if (layerName == "default") {
            solidName = "mojo Solid";
        }
        else {
            solidName = layerName;
        }
        var newSolid = activeComp.layers.addSolid([0, 0, 0], solidName, activeComp.width, activeComp.height, 1);
        var myItem = getItem("input_template.json");
        if (myItem && myItem.mainSource) {
            setColorFill();
        } else {
            var fillSolid = newSolid.property("ADBE Effect Parade").addProperty("ADBE Fill");
            fillSolid.property("ADBE Fill-0002").setValue([0, 0, 0]);
        }
    }
    else {
        return;
    }
    app.endUndoGroup();
}

// Function to copy a layer from a source composition to the active composition
function copyLayerToActiveComp(sourceCompName, layerName) {
    app.beginUndoGroup("Copy Layer to Comp");
    // Get the active composition
    var activeComp = app.project.activeItem;
    if (checkComp(activeComp)) {
        // Get the source composition by name
        var sourceComp = findComp(sourceCompName);

        // Check if the source composition exists
        if (sourceComp !== null && sourceComp instanceof CompItem) {
            // Get the layer by name from the source composition
            var sourceLayer = sourceComp.layer(layerName);

            // Check if the layer exists
            if (sourceLayer !== null) {
                // Duplicate the layer to the active composition
                sourceComp.layer(layerName).copyToComp(activeComp);
                app.executeCommand(2004); // “Deselect All”
                var copiedLayer = activeComp.layer(layerName);
                var offsetX = (activeComp.width / 2);
                var offsetY = (activeComp.height / 2);
                if (layerName !== "LOGO_NEW" || "LOGO") {
                    copiedLayer.position.setValue([offsetX, offsetY]); checkComp
                }
                copiedLayer.enabled = true;
                copiedLayer.selected = true;
                // Alert to notify that the layer has been copied
                //alert("Layer copied to active composition!");
                // Return the duplicated layer
            } else {
                alert("Layer not found in the source composition.");
            }
        } else {
            alert("Source composition not found.");
        }
    } else {
        alert("Open a composition");
    }
    app.endUndoGroup();
    // Return null if the layer couldn't be copied
    return null;

}

// Function to create a composition and add it to the project panel
function createComposition(width, height, duration, frameRate, name, silent) {
    // Create a new project if one doesn't exist
    var proj = app.project || app.newProject();

    // Create the composition
    var comp = proj.items.addComp(name, width, height, 1, duration, frameRate);

    // Alert to indicate successful creation, if not set to silent
    if (!silent) {
        alert("Composition " + name + " created!");
    }
    // Return the created composition
    return comp;
}

function createCompSet(duration, name, type) {
    // Call the function with the specified parameters
    var reelName = type + name;
    var squareName = type + name + "_square";
    var fullHDName = type + name + "_1920";
    // Check if a composition with the new name already exists

    // Example usage:
    var name1 = reelName;
    var name2 = squareName;
    var name3 = fullHDName;

    // Check if names are already used
    var areUsed = areNamesUsed(name1, name2, name3);

    if (areUsed) {
        // Prompt the user for a different name or handle the situation accordingly
        alert("That name already exists. Please choose a different name.");
        return false;

    } else {
        createComposition(1080, 1920, duration, 30, reelName, 1);
        createComposition(1080, 1080, duration, 30, squareName, 1);
        createComposition(1920, 1080, duration, 30, fullHDName, 1);
        // Alert to indicate successful creation
        //alert("Compositions created successfully as " + reelName + ", " + squareName + " and " + fullHDName);
        return true;
    }
}

// Function to apply a preset to the selected layer
function applyPreset(presetPath) {
    // Get the active composition
    var activeComp = app.project.activeItem;
    if (checkComp(activeComp)) {
        // Apply the preset to the active composition
        comp.applyPreset(File(presetPath));
    } else {
        $.writeln("applyPreset - no active comp");
        alert("Please open a composition before running this script.");
    }
}

// Function to remove expressions from specific properties of a layer (Position, Scale, Opacity, Anchor Point, Rotation)
function removeSpecificExpressions() {
    try {
        var activeComp = app.project.activeItem;
        if (checkComp(activeComp)) {
            // Check if a layer is selected
            if (comp.selectedLayers.length > 0) {
                var selectedLayer = comp.selectedLayers[0];

                // Array of property names to remove expressions from
                var propertiesToRemove = ["Position", "Scale", "Opacity", "Anchor Point", "Rotation"];

                // Iterate through specified properties of the selected layer
                for (var i = 0; i < propertiesToRemove.length; i++) {
                    var propertyName = propertiesToRemove[i];
                    var property = selectedLayer.property(propertyName);

                    // Check if the property exists and has an expression
                    if (property !== null && property.expressionEnabled) {
                        // Remove the expression
                        property.expression = "";
                        property.expressionEnabled = false;
                    }
                }

                // Alert when expressions are removed
                alert("Expressions removed from specified properties (Position, Scale, Opacity, Anchor Point, Rotation) of the selected layer.");
            } else {
                alert("Please select a layer.");
            }
        } else {
            alert("Please open a composition.");
        }
    } catch (error) {
        $.writeln(error);
    }
}

// Function to add specific expressions to properties of a layer (Anchor Point, Position, Scale)
function scaleToFillComp() {
    // Check if a composition is active
    app.beginUndoGroup("ScaleToFill");
    var activeComp = app.project.activeItem;
    if (checkComp(activeComp)) {
        var comp = app.project.activeItem;
        // Check if a layer is selected
        if (comp.selectedLayers.length > 0) {
            var selectedLayer = comp.selectedLayers[0];

            // Object with property names and their corresponding expressions
            var propertiesToAdd = {
                "Anchor Point": 'R = thisLayer.sourceRectAtTime(); T = R.top; L = R.left; W = R.width; H = R.height; [L+W/2,T+H/2]',
                "Position": '[thisComp.width/2, thisComp.height/2]',
                "Scale": 'p = position; xScale = p[0] > thisComp.width/2 ? p[0]/(width/2) : (thisComp.width - p[0])/(width/2); yScale = p[1] > thisComp.height/2 ? p[1]/(height/2) : (thisComp.height - p[1])/(height/2); s = Math.max(xScale,yScale); [s,s]*100'
            };

            // Iterate through specified properties and add expressions
            for (var propertyName in propertiesToAdd) {
                if (propertiesToAdd.hasOwnProperty(propertyName)) {
                    var property = selectedLayer.property(propertyName);

                    // Check if the property exists
                    if (property !== null) {
                        // Add the expression to the property
                        property.expression = propertiesToAdd[propertyName];
                        property.expressionEnabled = true;
                    }
                }
            }
        } else {
            alert("Please select a layer.");
        }
    } else {
        alert("Please open a composition.");
    }
    app.endUndoGroup();
}

// ADD IN OUT ANIM + MARKERS

function addANIM() {
    if (app.project.activeItem == null) {
        alert("Please open a composition.");
        return false;
    }
    var comp = app.project.activeItem;
    var selectedLayers = comp.selectedLayers;
    var numSelectedLayers = selectedLayers.length;
    if (numSelectedLayers < 1) {
        alert("Please select a layer.");
        return false;
    }

    app.beginUndoGroup("My Process");
    for (var j = 0; j < numSelectedLayers; j++) {
        var myLayer = selectedLayers[j];
        var inFrames = 20;
        var outFrames = 20;
        var interIn = "ease";
        var interOut = "ease";
        var markerProp = myLayer.property("Marker");
        for (var i = markerProp.numKeys; i >= 1; i--) {
            var marker = markerProp.keyValue(i);
            if ((marker.comment) && (marker.comment.indexOf("Fade") === 0)) {
                markerProp.removeKey(i);
            }
        }
        var markS = "markS = 0; \n";
        var markSdur = "markSdur = 0; \n";
        var markE = "markE = thisLayer.outPoint; \n";
        var markEdur = "markEdur = 0; \n";

        var markerStart = new MarkerValue("ANIM IN");
        markerStart.duration = inFrames / Math.round(comp.frameRate);
        markerStart.time = myLayer.inPoint;
        myLayer.property("Marker").setValueAtTime(markerStart.time, markerStart);
        markS = "markS = marker.key(\"" + markerStart.comment + "\").time; \n";
        markSdur = "markSdur = marker.key(\"" + markerStart.comment + "\").duration; \n";

        var markerEnd = new MarkerValue("ANIM OUT");
        markerEnd.duration = outFrames / Math.round(comp.frameRate);
        markerEnd.time = myLayer.outPoint - markerEnd.duration;
        myLayer.property("Marker").setValueAtTime(markerEnd.time, markerEnd);
        markE = "markE = marker.key(\"" + markerEnd.comment + "\").time; \n";
        markEdur = "markEdur = marker.key(\"" + markerEnd.comment + "\").duration-framesToTime(1); \n";

        var intro = markS + markSdur + markE + markEdur + "outLayer = markE + markEdur; \n" + "stopT = markSdur + markS; \n" + "startT = markE; \n";
        var lineStart = interIn + "(time, markS, markS + markSdur, 0, 100);";
        var lineEnd = interOut + "(time, markE, markE + markEdur, 100, 0);";

        opening = lineStart;
        closing = lineEnd;

        var theExpression = "";

        theExpression = intro + "if (time < markS){ 0; } else if (time <= stopT) {" + opening + "} else if (time > stopT & time <= startT) { 100; } else if (time > startT & time <= markE + markEdur){" + closing + "} else { 0; }";

        // Add Slider Control effect
        var sliderControl = myLayer.Effects.addProperty("ADBE Slider Control");
        sliderControl.name = "ANIM"; // You can change the name if needed

        // Apply theExpression to the slider control value
        sliderControl.property("ADBE Slider Control-0001").expression = theExpression;
    }
    app.endUndoGroup();
}



// Function to add colorFill via script instead of preset file
function setColorFill() {
    app.beginUndoGroup("setColorFill");
    if (app.project.activeItem instanceof CompItem) {
        var comp = app.project.activeItem;
        var filePath = Folder.myDocuments.fsName + "/Adobe/After Effects 20" + app.buildName.substr(0, 2) + "/User Presets/mojo/__COLOR_FILL.ffx";
        var myFile = new File(filePath);
        // Check if a layer is selected
        if (comp.selectedLayers.length > 0) {
            if (myFile.exists) {
                // File exists, do something
                var layer = app.project.activeItem.layer(1);
                layer.applyPreset(myFile);
            } else {
                // File does not exist, do something else
                var pseudoEffectData = {
                    name: "__COLOR_FILL",
                    matchName: "Pseudo/177941",
                    binary: "RIFX\x00\x00*\u008AFaFXhead\x00\x00\x00\x10\x00\x00\x00\x03\x00\x00\x00^\x00\x00\x00\x04\x01\t\x00\x00LIST\x00\x00*fbescbeso\x00\x00\x008\x00\x00\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\u0080\x00\x00\x02\x00\x00\x00\x00\x00\x00\x06\u009A\x03\u00D4\x06\u009A\x03\u00D4?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FFLIST\x00\x00\x00\u00ACtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x02LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE Effect Parade\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/177941\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdsn\x00\x00\x00\x12Utf8\x00\x00\x00\nCOLOR_FILLLIST\x00\x00\x00\u00ACtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x02LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE Effect Parade\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\x00\x00\x00\x01tdmn\x00\x00\x00(ADBE Fill\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdsn\x00\x00\x00\x14Utf8\x00\x00\x00\x0B_color_fill\x00LIST\x00\x00\x00dtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x01LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE End of path sentinel\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x13\x04sspcfnam\x00\x00\x00\bUtf8\x00\x00\x00\x00LIST\x00\x00\x03\u00E8parTparn\x00\x00\x00\x04\x00\x00\x00\x04tdmn\x00\x00\x00(Pseudo/177941-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00BF\x00\x00\u009C\u0094\u00AF\u00D3\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x0F\x00\x00\x00\x00\x00\x00\x00\u00D8b\u00F5\u00F1tdmn\x00\x00\x00(Pseudo/177941-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x07pick your color\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x13\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00BF\x00\x00\u009C\u0094\u00AF\u00D3\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x0F\x00\x00\x00\x00\x00\x00\x00\u00D8b\u00F5\u00F1pdnm\x00\x00\x00\u00A0Utf8\x00\x00\x00\u0098ACCENT|BG|(-|TITLE|SUBTEXT|(-|CALL2ACTION|CALL2ACTION_LINK|(-|CALL2ACTION_CURSOR|CALL2ACTION_CURSOR_STROKE|(-|LOGO_BG|(-|SOURCE|SOURCE_BG|(-|WHITE|BLACKtdmn\x00\x00\x00(Pseudo/177941-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x05preview\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00B2\u008E;\u00FF\u00B2\u008E;\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00BF\x00\x00\u009C\u0094\u00AF\u00D3\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x0F\x00\x00\x00\x00\x00\x00\x00\u00D8b\u00F5\u00F1tdmn\x00\x00\x00(ADBE Effect Built In Params\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\t\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x0E\u00E0tdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x12Utf8\x00\x00\x00\nCOLOR_FILLtdmn\x00\x00\x00(Pseudo/177941-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00ECtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x03tdsn\x00\x00\x00\bUtf8\x00\x00\x00\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00C0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdpi\x00\x00\x00\x04\x00\x00TRtdps\x00\x00\x00\x04\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/177941-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00E4tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x18Utf8\x00\x00\x00\x0Fpick your color\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/177941-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\b\u00A0tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x10Utf8\x00\x00\x00\x07preview\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x04\x00\x07\x00\x01\x00\x02\u00FF\u00FF\x00\x00\u0080\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00C0\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00cdat\x00\x00\x00`@o\u00E0\x00\x00\x00\x00\x00@f@\x00\x00\x00\x00\x00@a\u00C0\x00\x00\x00\x00\x00@M\u0080\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00Utf8\x00\x00\x07\u0084option = effect(\"COLOR_FILL\")(\"pick your color\");\r\n\r\nmyData = footage(\"input_template.json\").sourceData;\r\ndarkmode = myData.Comp.darkmode;\r\n\r\n\r\nconst components = {\r\n  1: accent = 1 == darkmode ? hexToRgb(myData.Comp.accent.color_dark) : hexToRgb(myData.Comp.accent.color),\r\n  2: bg = 1 == darkmode ? hexToRgb(myData.Comp.bg.color_dark) : hexToRgb(myData.Comp.bg.color),\r\n  4: title = 1 == darkmode ? hexToRgb(myData.Comp.title.color_dark) : hexToRgb(myData.Comp.title.color),\r\n  5: subtext = 1 == darkmode ? hexToRgb(myData.Comp.subtext.color_dark) : hexToRgb(myData.Comp.subtext.color),\r\n  7: call2action = 1 == darkmode ? hexToRgb((!!myData.Comp.call2action.color_dark ? myData.Comp.call2action.color_dark : myData.Comp.title.color_dark)) : hexToRgb((!!myData.Comp.call2action.color ? myData.Comp.call2action.color : myData.Comp.title.color)),\r\n  8: call2action_link = 1 == darkmode ? hexToRgb(myData.Comp.call2action_link.color_dark) : hexToRgb(myData.Comp.call2action_link.color),\r\n  10: call2action_cursor = 1 == darkmode ? hexToRgb(myData.Comp.call2action.cursor_color_dark) : hexToRgb(myData.Comp.call2action.cursor_color),\r\n  11: call2action_cursor_stroke = 1 == darkmode ? hexToRgb(myData.Comp.call2action.cursor_stroke_dark) : hexToRgb(myData.Comp.call2action.cursor_stroke),\r\n  13: logo_bg = hexToRgb(myData.Comp.logo_bg_color),\r\n\t\r\n  15: source = 1 == darkmode ? hexToRgb((!!myData.Comp.source.color_dark ? myData.Comp.source.color_dark : myData.Comp.title.color_dark)) : hexToRgb((!!myData.Comp.source.color ? myData.Comp.source.color : myData.Comp.title.color)),\r\n  16: source_bg = 1 == darkmode ? hexToRgb((!!myData.Comp.source.bg_color_dark ? myData.Comp.source.bg_color_dark : myData.Comp.accent.color_dark)) : hexToRgb((!!myData.Comp.source.bg_color ? myData.Comp.source.bg_color : myData.Comp.accent.color)),\r\n  18: white = hexToRgb(\"ffffff\"),\r\n  19: black = hexToRgb(\"000000\")\r\n};\r\n\r\ncomponents[option];tdmn\x00\x00\x00(ADBE Effect Built In Params\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x036tdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x1CUtf8\x00\x00\x00\x13Compositing Options\x00tdmn\x00\x00\x00(ADBE Effect Mask Parade\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00Vtdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0EUtf8\x00\x00\x00\x06-_0_/-tdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Effect Mask Opacity\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00FAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0EUtf8\x00\x00\x00\x06-_0_/-tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\b\t\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(@Y\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Force CPU GPU\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0EUtf8\x00\x00\x00\x06-_0_/-tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x02\x00\x04\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pgui\x00\x00\x00\x10\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x15\x04sspcfnam\x00\x00\x00\fUtf8\x00\x00\x00\x04FillLIST\x00\x00\x07lparTparn\x00\x00\x00\x04\x00\x00\x00\ttdmn\x00\x00\x00(ADBE Fill-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00BF\x00\x00\u009C\u0094\u00AF\u00D3\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x0F\x00\x00\x00\x00\x00\x00\x00\u00D8b\u00F5\u00F1tdmn\x00\x00\x00(ADBE Fill-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\fFill Mask\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00B\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00BF\x00\x00\u009C\u0094\u00AF\u00D3\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x0F\x00\x00\x00\x00\x00\x00\x00\u00D8b\u00F5\u00F1tdmn\x00\x00\x00(ADBE Fill-0007\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00BF\x00\x00\u009C\u0094\u00AF\u00D3\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x0F\x00\x00\x00\x00\x00\x00\x00\u00D8b\u00F5\u00F1pdnm\x00\x00\x00\x12Utf8\x00\x00\x00\tAll Masks\x00tdmn\x00\x00\x00(ADBE Fill-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x05Color\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00B2\u008E;\u00FF\u00FF\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00BF\x00\x00\u009C\u0094\u00AF\u00D3\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x0F\x00\x00\x00\x00\x00\x00\x00\u00D8b\u00F5\u00F1tdmn\x00\x00\x00(ADBE Fill-0006\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00BF\x00\x00\u009C\u0094\u00AF\u00D3\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x0F\x00\x00\x00\x00\x00\x00\x00\u00D8b\u00F5\u00F1pdnm\x00\x00\x00\x0EUtf8\x00\x00\x00\x06Inverttdmn\x00\x00\x00(ADBE Fill-0003\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00 \x00\x00\x00\x00\x00\x00\x00\x02Horizontal Feather\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00 \x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x03\u00E7\x00\x00\x00\x00\x00\x00\x002\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00tdmn\x00\x00\x00(ADBE Fill-0004\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00 \x00\x00\x00\x00\x00\x00\x00\x02Vertical Feather\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00 \x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x03\u00E7\x00\x00\x00\x00\x00\x00\x002\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00tdmn\x00\x00\x00(ADBE Fill-0005\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02Opacity\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x01\x00\x00\x00\x01\x00\x01tdmn\x00\x00\x00(ADBE Effect Built In Params\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\t\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\rXtdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x14Utf8\x00\x00\x00\x0B_color_fill\x00tdmn\x00\x00\x00(ADBE Fill-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00ECtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x03tdsn\x00\x00\x00\bUtf8\x00\x00\x00\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00C0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdpi\x00\x00\x00\x04\x00\x00TRtdps\x00\x00\x00\x04\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Fill-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00EAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x12Utf8\x00\x00\x00\tFill Mask\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00C0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdli\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE Fill-0007\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DEtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x12Utf8\x00\x00\x00\tAll Masks\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x04\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Fill-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x01:tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0EUtf8\x00\x00\x00\x05Color\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x04\x00\x07\x00\x01\x00\x02\u00FF\u00FF\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00C0\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00cdat\x00\x00\x00`@o\u00E0\x00\x00\x00\x00\x00@o\u00E0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00Utf8\x00\x00\x00\x1Feffect(\"COLOR_FILL\")(\"preview\")\x00tdmn\x00\x00\x00(ADBE Fill-0006\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0EUtf8\x00\x00\x00\x06Inverttdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x04\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Fill-0003\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x01\x06tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x1AUtf8\x00\x00\x00\x12Horizontal Feathertdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x06\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@I\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Fill-0004\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x01\x04tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x18Utf8\x00\x00\x00\x10Vertical Feathertdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x06\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@I\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Fill-0005\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00FCtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x10Utf8\x00\x00\x00\x07Opacity\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x06\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b?\u00F0\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Effect Built In Params\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x036tdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x1CUtf8\x00\x00\x00\x13Compositing Options\x00tdmn\x00\x00\x00(ADBE Effect Mask Parade\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00Vtdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0EUtf8\x00\x00\x00\x06-_0_/-tdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Effect Mask Opacity\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00FAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0EUtf8\x00\x00\x00\x06-_0_/-tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\b\t\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(@Y\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Force CPU GPU\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0EUtf8\x00\x00\x00\x06-_0_/-tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x02\x00\x04\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pgui\x00\x00\x00\x10\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00"
                }
                var pseudoEffect = savePseudoEffect(pseudoEffectData);
                var layer = app.project.activeItem.layer(1);
                layer.applyPreset(myFile);
            }

        } else {
            alert("Please select a layer.");
        }
    } else {
        alert("Please open a composition.");
    }
    app.endUndoGroup();
}

//Open Project Folder
function openProjectFolder() {
    var prjPath = app.project.file;
    if (prjPath) {
        var prjFldr = new Folder(prjPath.fsName).path;
        if ($.os.substr(0, 7).toLowerCase() == "windows") {
            prjFldr = prjFldr + "\\";
        } else {
            prjFldr = prjFldr + "/"
        }

        var f = Folder(prjFldr);
        f.execute();
    } else alert("Save the project first");
}

// Open Subfolder in Project Folder
function openSubfolderInProject(subfolderName) {
    var prjPath = app.project.file;

    if (prjPath) {
        var prjFldr = new Folder(prjPath.fsName).path;

        var subfolder = new Folder(prjFldr + "/" + subfolderName);

        if (!subfolder.exists) {
            // Create a dialog box
            var noFolderDialog = new Window("dialog", "");

            // Add a text label to the dialog
            var text = noFolderDialog.add("statictext", undefined, "Subfolder '" + subfolderName + "' does not exist.");

            var textLabel = noFolderDialog.add("statictext", undefined, "Do you want me to create the folder for you?");

            // Add an "Accept" button to the dialog
            var acceptButton = noFolderDialog.add("button", undefined, "YES!");
            acceptButton.onClick = function () {
                // Perform your desired action here
                try {
                    subfolder.create();
                } catch (e) {
                    alert("Error creating footage folder: " + e);
                    // If there's an error creating the folder, exit the script
                    return;
                }
                noFolderDialog.close();
            }

            // Add a "Cancel" button to the dialog
            var cancelButton = noFolderDialog.add("button", undefined, "NAH, I´m good.");
            cancelButton.onClick = function () {
                noFolderDialog.close();
            }

            noFolderDialog.show();
        }

        var f = Folder(subfolder);
        f.execute();
    } else {
        alert("Save the project first");
    }
}

//Import footage and copy it to the projects footage folder
function importAndCopyFile() {
    var projectPath = app.project;
    // Display a file dialog to select a file
    var fileToImport = File.openDialog("Select a file to import");

    // Check if a file was selected
    if (fileToImport) {
        // Import the selected file
        var importedFile = projectPath.importFile(new ImportOptions(fileToImport));
        // Get the project folder
        var projectFolder = projectPath.file.parent;

        // Get the extension of the fileToImport
        var fileExtension = (fileToImport.name.split('.').pop()).toLowerCase();
        // Get the footage folder
        var footageFolder = new Folder(projectFolder.fullName + "/(footage)/Footage/" + fileExtension);

        // Check if the footage folder exists, create it if not
        if (!footageFolder.exists) {
            try {
                footageFolder.create();
            } catch (e) {
                alert("Error creating footage folder: " + e);
                // If there's an error creating the folder, exit the script
                return;
            }
        }

        // Copy the selected file to the footage folder
        var copiedFilePath = footageFolder.fullName + "/" + fileToImport.name;
        try {
            fileToImport.copy(copiedFilePath);
        } catch (e) {
            alert("Error copying file to footage folder: " + e);
            // If there's an error copying the file, exit the script
            return;
        }

        // Remove the original imported file from the project
        importedFile.remove();

        // Import the copied file to replace the original import
        var copiedImportedFile = projectPath.importFile(new ImportOptions(File(copiedFilePath)));

        // Display a success message
        alert("File imported, copied to footage folder, and relinked successfully!");
    }
}

function findCompIndex(compName) { // name of item you're looking for
    var myComp = null;
    var myCompIndex = null;
    for (var i = 1; i <= app.project.numItems; i++) {

        if ((app.project.item(i) instanceof CompItem) && (app.project.item(i).name == compName)) {

            myComp = app.project.item(i);
            myCompIndex = i;
            myCompID = myComp.id;
            break;
        }
    }
    if (myComp != null) {
        return i;
    } else {
        alert("Please open the BOILERPLATE to use this feature");
    }
}

function changeJSONTEXT(inputText, jsonKey) {
    // Check if JSON file exists
    app.beginUndoGroup("Change JSON Text");
    // Path to the JSON file
    var projectPath = app.project.file.path; // Get the path of the After Effects project
    var jsonFilePath = projectPath + "/(footage)/footage/json/input_template.json"; // Adjust the JSON file path
    var jsonFile = new File(jsonFilePath);
    if (!jsonFile.exists) {
        alert("JSON file does not exist at path: " + jsonFilePath);
    } else {
        // Read existing JSON file
        var existingJson = {};
        var file = new File(jsonFilePath);
        if (file.exists) {
            file.open("r");
            var existingJsonString = file.read();
            file.close();

            try {
                existingJson = JSON.parse(existingJsonString);
            } catch (e) {
                alert("Error parsing existing JSON file: " + e.toString());
            }
        }
        if (jsonKey == "title") {
            existingJson.Comp.title.text = inputText;
        }
        if (jsonKey == "subtext") {
            existingJson.Comp.subtext.text = inputText;
        }
        if (jsonKey == "call2action") {
            existingJson.Comp.call2action.text = inputText;
        }
        if (jsonKey == "call2action_link") {
            existingJson.Comp.call2action_link.text = inputText;
        }
        if (jsonKey == "source") {
            existingJson.Comp.source.text = inputText;
        }

        // Write updated JSON back to the file
        var jsonString = JSON.stringify(existingJson, null, 2);
        file.open("w");
        file.write(jsonString);
        file.close();
        var myItem = getItem("input_template.json");
        myItem.mainSource.reload();
        refreshCurrentFrame();
        //app.purge(PurgeTarget.IMAGE_CACHES);
    }
    app.endUndoGroup();
}



function openCompInViewer(compName, layerName) {
    compIndex = findCompIndex(compName)
    app.project.item(compIndex).openInViewer();
    app.executeCommand(2004); // “Deselect All”
    app.project.activeItem.layer(layerName).selected = true;
}

// Function to convert RGB to Hex
function rgbToHex(theColor) {
    r = Math.round(theColor[0] * 255).toString(16)
    if (r.length < 2) r = "0" + r;
    g = Math.round(theColor[1] * 255).toString(16)
    if (g.length < 2) g = "0" + g;
    b = Math.round(theColor[2] * 255).toString(16)
    if (b.length < 2) b = "0" + b;
    return "#" + r + g + b;
}


function modifyJSONdata() {
    app.beginUndoGroup("modify JSON");
    var compIndex = findCompIndex("__SETTINGS");
    if (compIndex) {
        // Get the colors from the color fill effect on the layer
        var layer = app.project.item(compIndex).layer("debug_layer").effect("debug_SETTINGS");
        if (layer != null) {
            var video = layer("VIDEO").value;
            var accentColor = layer("accent_color").value;
            var titleColor = layer("title_color").value;
            var subtextColor = layer("subtext_color").value;
            var bgColor = layer("bg_color").value;
            var logoBgColor = layer("logo_bg_color").value;
            var call2a_color = layer("c2a_color").value;
            var cursor_color = layer("cursor_color").value;
            var c2a_link_color = layer("c2a_link_color").value;
            var source_color = layer("source_color").value;

            var oneVideo = layer("1.VIDEO").value;
            var oneLoop = layer("1.LOOP").value;
            var oneMuted = layer("1.MUTED").value;

            var twoVideo = layer("2.VIDEO").value;
            var twoLoop = layer("2.LOOP").value;
            var twoMuted = layer("2.MUTED").value;

            var threeVideo = layer("3.VIDEO").value;
            var threeLoop = layer("3.LOOP").value;
            var threeMuted = layer("3.MUTED").value;

            var fourVideo = layer("4.VIDEO").value;
            var fourLoop = layer("4.LOOP").value;
            var fourMuted = layer("4.MUTED").value;

            var fiveVideo = layer("5.VIDEO").value;
            var fiveLoop = layer("5.LOOP").value;
            var fiveMuted = layer("5.MUTED").value;

            var sixVideo = layer("6.VIDEO").value;
            var sixLoop = layer("6.LOOP").value;
            var sixMuted = layer("6.MUTED").value;

            // Check if JSON file exists
            // Path to the JSON file
            var projectPath = app.project.file.path; // Get the path of the After Effects project
            var jsonFilePath = projectPath + "/(footage)/footage/json/input_template.json"; // Adjust the JSON file path
            var jsonFile = new File(jsonFilePath);
            if (!jsonFile.exists) {
                alert("JSON file does not exist at path: " + jsonFilePath);
            } else {
                // Read existing JSON file
                var existingJson = {};
                var file = new File(jsonFilePath);
                if (file.exists) {
                    file.open("r");
                    var existingJsonString = file.read();
                    file.close();

                    try {
                        existingJson = JSON.parse(existingJsonString);
                    } catch (e) {
                        alert("Error parsing existing JSON file: " + e.toString());
                    }
                }

                // Update specific color values
                existingJson.Comp.darkmode = 0;
                existingJson.Comp.video = video;
                existingJson.Comp.gallery[0].video = oneVideo;
                existingJson.Comp.gallery[1].video = twoVideo;
                existingJson.Comp.gallery[2].video = threeVideo;
                existingJson.Comp.gallery[3].video = fourVideo;
                existingJson.Comp.gallery[4].video = fiveVideo;
                existingJson.Comp.gallery[5].video = sixVideo;

                existingJson.Comp.gallery[0].loop = oneLoop;
                existingJson.Comp.gallery[1].loop = twoLoop;
                existingJson.Comp.gallery[2].loop = threeLoop;
                existingJson.Comp.gallery[3].loop = fourLoop;
                existingJson.Comp.gallery[4].loop = fiveLoop;
                existingJson.Comp.gallery[5].loop = sixLoop;

                existingJson.Comp.gallery[0].muted = oneMuted;
                existingJson.Comp.gallery[1].muted = twoMuted;
                existingJson.Comp.gallery[2].muted = threeMuted;
                existingJson.Comp.gallery[3].muted = fourMuted;
                existingJson.Comp.gallery[4].muted = fiveMuted;
                existingJson.Comp.gallery[5].muted = sixMuted;

                existingJson.Comp.logo_bg_color = rgbToHex(logoBgColor);
                existingJson.Comp.logo_bg_color_dark = rgbToHex(logoBgColor);
                existingJson.Comp.accent.color = rgbToHex(accentColor);
                existingJson.Comp.accent.color_dark = rgbToHex(accentColor);
                existingJson.Comp.title.color = rgbToHex(titleColor);
                existingJson.Comp.title.color_dark = rgbToHex(titleColor);
                existingJson.Comp.subtext.color = rgbToHex(subtextColor);
                existingJson.Comp.subtext.color_dark = rgbToHex(subtextColor);
                existingJson.Comp.bg.color = rgbToHex(bgColor);
                existingJson.Comp.bg.color_dark = rgbToHex(bgColor);
                existingJson.Comp.call2action.color = rgbToHex(call2a_color);
                existingJson.Comp.call2action.color_dark = rgbToHex(call2a_color);
                existingJson.Comp.call2action.cursor_color.color = rgbToHex(cursor_color);
                existingJson.Comp.call2action.cursor_color.color_dark = rgbToHex(cursor_color);
                existingJson.Comp.call2action_link.color = rgbToHex(c2a_link_color);
                existingJson.Comp.call2action_link.color_dark = rgbToHex(c2a_link_color);
                existingJson.Comp.source.color = rgbToHex(source_color);
                existingJson.Comp.source.color_dark = rgbToHex(source_color);

                // Write updated JSON back to the file
                var jsonString = JSON.stringify(existingJson, null, 2);
                file.open("w");
                file.write(jsonString);
                file.close();
                var myItem = getItem("input_template.json");
                myItem.mainSource.reload();
                openCompInViewer("__SETTINGS", "SETTINGS");
                refreshCurrentFrame();
                alert("JSON DATA UPDATED!");
            }
        } else {
            alert("debug_layer not found")
        };
    }
    app.endUndoGroup();
}

// Function to revert the JSON file
function revertJson() {
    app.beginUndoGroup("revert JSON");
    var myItem = getItem("input_template.json");
    // Check if myItem and myItem.mainSource are defined before attempting to reload
    if (myItem) {
        // JSON data to revert to
        var jsonData = {
            "Comp": {
                "logo": 1,
                "logo_bg_auto_color": 0,
                "logo_bg_color": "#FFFFFF",
                "darkmode": 0,
                "intro": 0,
                "video": 0,
                "audio_muted": 0,
                "audio_track": 10,
                "text2voice": 0,
                "fx_effects": 0,
                "accent": {
                    "color": "#B28E3B",
                    "color_dark": "#B28E3B"
                },
                "title": {
                    "text": "Introducing the revolutionary social media AI-tool",
                    "color": "#080808",
                    "color_dark": "#ffffff",
                    "font": "Archivo-Bold"
                },
                "subtext": {
                    "text": "It has never been easier to generate content for blogs and social media.",
                    "color": "#242424",
                    "color_dark": "#ffffff",
                    "font": ""
                },
                "call2action": {
                    "text": "Visit now:",
                    "color": "#080808",
                    "color_dark": "#FFFFFF",
                    "cursor_color": "#B28E3B",
                    "cursor_color_dark": "#B28E3B",
                    "cursor_stroke": "#000000",
                    "cursor_stroke_dark": "#FFFFFF",
                    "font": ""
                },
                "call2action_link": {
                    "text": "GetGenius.AI",
                    "color": "#080808",
                    "color_dark": "#FFFFFF",
                    "link_highlight": 0,
                    "font": ""
                },
                "source": {
                    "text": "GetGenius.AI",
                    "color": "#FFFFFF",
                    "color_dark": "#FFFFFF",
                    "bg_color": "#B28E3B",
                    "bg_color_dark": "#B28E3B",
                    "avatar": 0,
                    "font": ""
                },
                "bg": {
                    "color": "#ffffff",
                    "color_dark": "#111219"
                },
                "gallery": [{
                    "src": "gallery_01",
                    "video": 1,
                    "loop": 0,
                    "muted": 0,
                    "text": "Create Social Content, including Video, Image, Captions and Hashtags and shedule them in a fully automated way.",
                    "font": "Poppins"
                },
                {
                    "src": "gallery_02",
                    "video": 1,
                    "loop": 0,
                    "muted": 0,
                    "text": "",
                    "font": "Poppins"
                },
                {
                    "src": "gallery_03",
                    "video": 1,
                    "loop": 0,
                    "muted": 0,
                    "text": "",
                    "font": "Poppins"
                },
                {
                    "src": "gallery_04",
                    "video": 1,
                    "loop": 1,
                    "muted": 0,
                    "text": "",
                    "font": "Poppins"
                },
                {
                    "src": "",
                    "video": 1,
                    "loop": 0,
                    "muted": 0,
                    "text": "",
                    "font": "Poppins"
                },
                {
                    "src": "",
                    "video": 0,
                    "loop": 0,
                    "muted": 0,
                    "text": "",
                    "font": "Poppins"
                }
                ]
            }
        };

        // Path to the JSON file
        var projectPath = app.project.file.path; // Get the path of the After Effects project
        var jsonFilePath = projectPath + "/(footage)/footage/json/input_template.json"; // Adjust the JSON file path

        // Write the JSON data to the file
        var jsonString = JSON.stringify(jsonData, null, 2);
        var file = new File(jsonFilePath);
        if (!file.exists) {
            alert("JSON file does not exist at path: " + jsonFilePath);
        } else {
            file.open("w");
            file.write(jsonString);
            file.close();
            var myItem = getItem("input_template.json");
            myItem.mainSource.reload();
            //app.purge(PurgeTarget.IMAGE_CACHES);
            openCompInViewer("__SETTINGS", "SETTINGS");
            refreshCurrentFrame();
            alert("JSON file reverted to default!");
        }
    } else {
        alert("JSON file doesnt exist");
    }
    app.endUndoGroup();
}

/////////


// Function to rename compositions in After Effects
function renameCompositions(type, name) {
    app.beginUndoGroup("Rename Compositions");
    var newName = type + name;
    // Custom names for the compositions
    var newNames = [newName, newName + "_square", newName + "_1920", "_" + name, "_" + name + "_square", "_" + name + "_1920"];

    // Composition names to be renamed
    var oldNames = ["BPLATE", "BPLATE_square", "BPLATE_1920", "_boilerplate_reel", "_boilerplate_square", "_boilerplate_1920"];
    // Iterate through each old name
    for (var i = 0; i < oldNames.length; i++) {
        // Find the composition by name
        var compItem = findItemByName(oldNames[i]);

        // Check if the composition exists
        if (compItem !== null) {
            // Rename the composition
            compItem.name = newNames[i];
        } else {
            // Composition not found
            return false;

        }
    }
    app.endUndoGroup();
    return true;

}

// Function to replace compositions within a precomposition based on equal suffixes
function replaceCompositionsBySuffix(newName) {
    app.beginUndoGroup("Replace Comps by Suffix");
    // Replace these with the actual names of your precomposition and target compositions
    var precompName = "__SETTINGS";
    var comp1Suffix = "BPLATE";
    var comp2Suffix = "BPLATE_square";
    var comp3Suffix = "BPLATE_1920";

    // Find the precomposition
    var precomp = findItemByName(precompName);

    if (!precomp) {
        alert("Precomposition not found: " + precompName);
        return;
    }

    // Store the layers with replaced compositions
    var replacedLayers = [];

    // Iterate through layers in the precomposition
    for (var j = 1; j <= precomp.layers.length; j++) {
        var layer = precomp.layers[j];
        var layerName = layer.name;

        // Check if the layer name has the specified suffix
        if (layerName.indexOf(comp1Suffix) !== -1) {
            // Replace comp1 and store the layer
            replacedLayers.push(replaceComposition(layer, comp1Suffix, newName));
        } else if (layerName.indexOf(comp2Suffix) !== -1) {
            // Replace comp2 and store the layer
            replacedLayers.push(replaceComposition(layer, comp2Suffix, newName));
        } else if (layerName.indexOf(comp3Suffix) !== -1) {
            // Replace comp3 and store the layer
            replacedLayers.push(replaceComposition(layer, comp3Suffix, newName));
        }
    }

    // Select the replaced layers
    selectLayers(replacedLayers);

    // Execute the "Time-Reverse Layer" command
    app.executeCommand(3695);
    app.endUndoGroup();
}

// Function to replace a composition within a layer
function replaceComposition(layer, suffix, newName) {
    app.beginUndoGroup("Replace Comp");
    // Construct the new composition name based on the suffix
    var newCompName = layer.name.replace(suffix, newName);

    // Find the replacement composition
    var newComp = findItemByName(newCompName);

    if (!newComp) {
        alert("Replacement composition not found: " + newCompName);
        return null;
    }

    // Replace the layer's source with the new composition
    layer.replaceSource(newComp, true);

    // Set hold keyframes for timeRemap property in the new composition
    if (newComp.layers.length > 0) {
        var timeRemap = newComp.layers[1].timeRemap;
        timeRemap.enabled = true;
        timeRemap.setInterpolationTypeAtKey(1, KeyframeInterpolationType.HOLD);
    }
    app.endUndoGroup();
    return layer;
}

// Function to find an item by name
function findItemByName(name) {
    for (var i = 1; i <= app.project.items.length; i++) {
        if (app.project.items[i].name === name) {
            return app.project.items[i];
        }
    }
    return null;
}

// Function to select layers in the timeline
function selectLayers(layers) {
    app.beginUndoGroup("Select Layers");
    for (var i = 0; i < layers.length; i++) {
        layers[i].selected = true;
    }
    app.endUndoGroup();
}

//////////////

/// PARENT 2 NULL


function CreateParentNull() {
    app.beginUndoGroup("Create Parent Null");
    try {
        var comp = app.project.activeItem;
        if ((comp == null) || (!(comp instanceof CompItem))) {
            OnExit();
            alert("Select comp and run again! Do not ask questions!");
            return;
        }
        var selectedLayers = comp.selectedLayers;
        if (selectedLayers.length < 1) {
            OnExit();
            alert("Select one or multiple layers!");
            return;
        }
        var lcount = 0;
        var minIn = comp.duration;
        var maxOut = comp.displayStartTime;
        var averagePos = [0, 0];
        var firstName = "";
        var goodLayers = [];
        var topLayer = null;
        for (var layer_index = 0; layer_index < selectedLayers.length; layer_index++) {
            layer = selectedLayers[layer_index];
            if (topLayer == null) {
                topLayer = layer;
            } else {
                if (topLayer.index > layer.index) {
                    topLayer = layer;
                }
            }
            if (layer.inPoint < minIn) {
                minIn = layer.inPoint;
            }
            if (layer.outPoint > maxOut) {
                maxOut = layer.outPoint;
            }
            if (layer.parent != null) {
                continue;
            }
            lcount++;
            averagePos[0] += layer.position.value[0];
            averagePos[1] += layer.position.value[1];
            if (firstName.length < 1) {
                firstName = layer.name;
            }
            goodLayers.push(layer);
        }
        if (goodLayers.length == 0) {
            OnExit();
            alert("Selected layers are already parented");
            return;
        }
        averagePos[0] /= lcount;
        averagePos[1] /= lcount;
        var nullLayer = comp.layers.addNull();
        if (goodLayers.length > 1) {
            nullLayer.name = "parent_" + goodLayers.length.toString();
        } else {
            nullLayer.name = "parent_" + goodLayers[0].name;
        }
        nullLayer.moveBefore(topLayer);
        nullLayer.inPoint = minIn;
        nullLayer.outPoint = maxOut;
        nullLayer.anchorPoint.setValue([50, 50]);
        nullLayer.position.setValue(averagePos);
        nullLayer.label = 2;
        for (var layer_index = 0; layer_index < goodLayers.length; layer_index++) {
            goodLayers[layer_index].parent = nullLayer;
        }
    } catch (err) {
        alert(err.line.toString() + "\r" + err.toString());
    }
    app.endUndoGroup();
}

function OnExit() {
    return;
}

function getLayerBaseType(layerObj) {
    typesArray = new Array(AVLayer, CameraLayer, LightLayer, ShapeLayer, TextLayer);
    typesCount = typesArray.length;
    result = "Unknown";
    for (var a = 0; a < typesCount; a++) {
        if (layerObj instanceof typesArray[a]) {
            result = typesArray[a].name;
            break;
        }
    }
    return result;
}

function checkComp(inputComp) {
    if ((inputComp === null) || (!(inputComp instanceof CompItem))) {
        alert("No active composition");
        return false;
    }
    else {
        return true;
    }
}

///
addTooltipToButton(btn_createComps, "create all required compositions work on a new video template", 85, false, true);

btn_createComps.onClick = function () {
    var compIndex = findCompIndex("__SETTINGS");
    if (compIndex) {
        var type = "comp_";

        function askForName() {
            var name = prompt('Please enter a name for the template\n (without spaces, special characters, capital letters, or dashes):', "you name it..");
            if (name) {
                var isValid = /^[a-z0-9_]+$/.test(name);
                if (isValid) {
                    var newName = type + name;
                    var worked = renameCompositions(type, name);
                    // Save Project with New Name in Same Path
                    // Get the current project file
                    if (worked) {
                        var currentProject = app.project.file;

                        // Check if a project is open
                        if (currentProject) {
                            // Get the current project's path
                            var projectPath = currentProject.parent.fsName;

                            // Prompt the user for a new project namemusch
                            var newProjectName = newName;

                            // Check if the user entered a name
                            if (newProjectName) {
                                // Create the new project file path
                                var newProjectPath = projectPath + "/" + newProjectName + ".aep";
                                var newProjectFile = new File(newProjectPath);
                                // Save the project with the new name
                                app.project.save(newProjectFile);

                                // Alert the user that the project has been saved
                                alert("Project saved as: " + newProjectName);
                                // Optional: Redraw the UI to reflect the changes
                            } else {
                                // Alert the user that no name was entered
                                alert("No project name entered. The project was not saved with a new name.");
                            }
                        } else {
                            // Alert the user that no project is open
                            alert("No project is currently open.");
                        }
                    } else {
                        alert("Invalid name! The name should only contain lowercase letters, numbers, and underscores (_) with no spaces, special characters, capital letters, or dashes.");


                        if (result !== null) {
                            askForName();
                        } else {
                            // User canceled the input, handle accordingly or exit
                            alert("User canceled the input.");
                        }
                    }
                };
            } else {
                alert("No input provided. Please enter a valid name.");
            }
        }
        var result = askForName();
    }
};

addTooltipToButton(btn_createIMGComps, "create all required compositions to work on a new image template", 85, false, true);

btn_createIMGComps.onClick = function () {
    var compIndex = findCompIndex("__SETTINGS");
    if (compIndex) {
        var duration = 1 / 30; // Set the duration of the composition in seconds
        var type = "post_";

        function askForName() {
            var name = prompt("Please enter a name for the template (without spaces, special characters, capital letters, or dashes):", "you name it..");
            if (name) {
                var isValid = /^[a-z0-9_]+$/.test(name);
                if (isValid) {
                    var newName = type + name;
                    var worked = createCompSet(duration, name, type);
                    if (worked) {
                        replaceCompositionsBySuffix(newName);
                        // Save Project with New Name in Same Path
                        // Get the current project file
                        var currentProject = app.project.file;

                        // Check if a project is open
                        if (currentProject) {
                            // Get the current project's path
                            var projectPath = currentProject.parent.fsName;

                            // Prompt the user for a new project namemusch
                            var newProjectName = newName;

                            // Check if the user entered a name
                            if (newProjectName) {
                                // change duration of settings comp
                                var newDuration = 1 / app.project.item(compIndex).frameRate;

                                app.project.item(compIndex).duration = newDuration;
                                app.project.item(compIndex).workAreaDuration = newDuration;
                                // Create the new project file path
                                var newProjectPath = projectPath + "/" + newProjectName + ".aep";
                                var newProjectFile = new File(newProjectPath);
                                // Save the project with the new name
                                app.project.save(newProjectFile);

                                // Alert the user that the project has been saved
                                alert("Project saved as: " + newProjectName);
                                // Optional: Redraw the UI to reflect the changes
                            } else {
                                // Alert the user that no name was entered
                                alert("No project name entered. The project was not saved with a new name.");
                            }
                        } else {
                            // Alert the user that no project is open
                            alert("No project is currently open.");
                        }
                    };
                } else {
                    alert("Invalid name! The name should only contain lowercase letters, numbers, and underscores (_) with no spaces, special characters, capital letters, or dashes.");


                    if (result !== null) {
                        askForName();
                    } else {
                        // User canceled the input, handle accordingly or exit
                        alert("User canceled the input.");
                    }
                }
            } else {
                alert("No input provided. Please enter a valid name.");
            }
        }
        var result = askForName();
    }
};

addTooltipToButton(colorFill, "add a fill effect with color-choices to selected layer", 85, false, false);

colorFill.onClick = function () {
    setColorFill();
};

addTooltipToButton(scale2fill, "scale a layer to fill the composition while keeping proper ratio", 85, false, true);

scale2fill.onClick = function () {
    scaleToFillComp();
};

addTooltipToButton(addAnimbtn, "add IN- & OUT-Animation Rig. You can change the Markers Position and Size, to modify the animation. Use the value of the Slider-Effect on anything you want to animate", 85, false, true);

addAnimbtn.onClick = function () {
    addANIM();
};

addTooltipToButton(btn_addElement, "add pre-configurated content element", 100, false, false);

btn_addElement.onClick = function () {
    var compIndex = findCompIndex("_ELEMENTS");
    if (compIndex) {
        elementsDialog();
    };
};

addTooltipToButton(btn_addGallery, "add pre-configurated gallery-elment", 85, false, false);

btn_addGallery.onClick = function () {
    var compIndex = findCompIndex("_ELEMENTS");
    if (compIndex) {
        var ratioIndex = ratio.selection.index;
        var ratioresult = ratio_result[ratioIndex];
        var ratioAdd = ratio_resultIndexAdd[ratioIndex];
        var selectedIndex = gallery.selection.index + ratioAdd;
        var result = gallery_result[selectedIndex];
        app.executeCommand(2004); // “Deselect All”
        copyLayerToActiveComp(ratioresult, result);
    };
};

addTooltipToButton(fitView, "fit preview of active composition to fill the screen", 85);

fitView.onClick = function () {
    (function () {
        var zoom = 0.5;
        var activeComp = app.project.activeItem;
        if (checkComp(activeComp)) {
            // Get the active composition's width and height
            var compWidth = activeComp.width;
            var compHeight = activeComp.height;

            // Check the aspect ratio
            if (compWidth > compHeight) {
                // If width is bigger than height, use valueA for zoom
                zoom = 0.6; // Change this value to your desired zoom value for width > height
                $.writeln("zoom set to " + zoom);
            } else if (compHeight > compWidth) {
                // If height is bigger than width, use valueB for zoom
                zoom = 0.35; // Change this value to your desired zoom value for height > width
                $.writeln("zoom set to " + zoom);
            } else {
                // If width and height are equal (square), use valueC for zoom
                zoom = 0.5; // Change this value to your desired zoom value for square compositions
                $.writeln("zoom set to " + zoom);
            }
        }

        // Set the zoom value
        app.activeViewer.views[0].options.zoom = zoom;
    })();
};

addTooltipToButton(delExp, "delete all expressions of a selected layers transform-properties", 85);

delExp.onClick = function () {
    removeSpecificExpressions();
};

addTooltipToButton(openBoilerplate, "open BOILERPLATE.aep", 85);

openBoilerplate.onClick = function () {
    var my_file = new File("C:/data_driven_ae_template-1/___boilerplate_23.aep");
    if (my_file.exists) {
        new_project = app.open(my_file);
    } else {
        alert("BOILERPLATE not found");
    }
};

//addTooltipToButton(openProjectInExplorer, "open Project Folder", 85);
addHoverMenuToButton(openProjectInExplorer, hoverMenu_open);
/*
openProjectInExplorer.onClick = function () {
    openProjectFolder();
};

addTooltipToButton(openFootageFolder, "open Footage Folder", 85);
openFootageFolder.onClick = function () {
    openSubfolderInProject("(footage)/Footage");
};

addTooltipToButton(openJSONFolder, "open JSON Folder", 85);
openJSONFolder.onClick = function () {
    openSubfolderInProject("(footage)/Footage/json");
};
*/
addTooltipToButton(btn_import, "import files and copy them into the project's footage folder", 85, false, true);

btn_import.onClick = function () {
    importAndCopyFile();
};

btn_organize.onClick = function () {

    if (app.project.file != null) {
        progressBarPopup();
    } else {
        alert("Please open a project or save the current project first.");
    }
};

addTooltipToButton(btn_cleanup, "options to remove unused files or clear cache, to optimize the project", 85, false, true);

btn_cleanup.onClick = function () {
    if (app.project.file != null) {
        (function buildUI(thisObj) {
            var compCleaner = thisObj instanceof Panel ? thisObj : new Window("palette", "Clean Up Project");
            compCleaner.orientation = "column";
            compCleaner.alignChildren = ["left", "top"];
            compCleaner.spacing = 3;
            compCleaner.margins = 16;
            var panel1 = compCleaner.add("panel", undefined, undefined, {
                name: "panel1"
            });
            panel1.text = "Tweaks";
            panel1.orientation = "column";
            panel1.alignChildren = ["left", "top"];
            panel1.spacing = 5;
            panel1.margins = [10, 14, 10, 10];
            panel1.preferredSize.width = 200;
            var checkbox1 = panel1.add("checkbox", undefined, undefined, {
                name: "checkbox1"
            });
            checkbox1.text = "Remove unused items";
            var checkbox2 = panel1.add("checkbox", undefined, undefined, {
                name: "checkbox2"
            });
            checkbox2.text = "Remove disabled effects *";
            var checkbox3 = panel1.add("checkbox", undefined, undefined, {
                name: "checkbox3"
            });
            checkbox3.text = "Remove disabled expressions *";
            var checkbox4 = panel1.add("checkbox", undefined, undefined, {
                name: "checkbox5"
            });
            checkbox4.text = "Clear render queue";
            var checkbox5 = panel1.add("checkbox", undefined, undefined, {
                name: "checkbox6"
            });
            checkbox5.text = "Purge all memory & cache";
            var panel2 = compCleaner.add("panel", undefined, undefined, {
                name: "panel2"
            });
            panel2.text = "* Scope";
            panel2.preferredSize.width = 200;
            panel2.orientation = "row";
            panel2.alignChildren = ["left", "top"];
            panel2.spacing = 10;
            panel2.margins = 10;
            var radiobutton1 = panel2.add("radiobutton", undefined, undefined, {
                name: "radiobutton1"
            });
            radiobutton1.text = "Current Comp";
            radiobutton1.value = true;
            var radiobutton2 = panel2.add("radiobutton", undefined, undefined, {
                name: "radiobutton2"
            });
            radiobutton2.text = "All Comps";
            var group1 = compCleaner.add("group", undefined, {
                name: "group1"
            });
            group1.orientation = "row";
            group1.alignChildren = ["left", "center"];
            group1.spacing = 10;
            group1.margins = [0, 7, 0, 0];
            var button1 = group1.add("button", undefined, undefined, {
                name: "button1"
            });
            button1.text = "Clean Up";
            button1.preferredSize.width = 200;
            button1.alignment = ["left", "center"];
            button1.onClick = function () {
                compCleaner.close();
                clean(checkbox1.value, checkbox2.value, checkbox3.value, checkbox4.value, checkbox5.value, radiobutton2.value);
            };
            compCleaner.layout.resize();
            compCleaner.onResizing = compCleaner.onResize = function () {
                this.layout.resize();
            };
            if (compCleaner instanceof Window) {
                compCleaner.show();
            }
        })();
    } else {
        alert("Please open a project or save the current project first.");
    }
};

addTooltipToButton(btn_openAndSelect, "bring up the layer-effect controls (debug_SETTINGS), to edit the colors", 85, false, true);

btn_openAndSelect.onClick = function () {
    openCompInViewer("__SETTINGS", "debug_layer");
    app.executeCommand(3734);//EffectControls
    //app.executeCommand(2163);//EffectControls
    //app.executeCommand(3734);//EffectControls
};

addTooltipToButton(btn_title, "use your text as title", 85);

btn_title.onClick = function () {
    var myItem = getItem("input_template.json");
    if (myItem && myItem.mainSource) {
        var text = edittext1.text;
        // Check if the text is empty
        if (text === "") {
            // Ask the user if they are sure to use an empty string
            var confirmation = confirm("The text is empty. Are you sure you want to use an empty string?");

            // If the user clicks Cancel, return null
            if (!confirmation) {
                return;
            }
        }
        // Execute changeJSONTEXT function with the provided text
        changeJSONTEXT(text, "title");
    } else {
        alert("JSON file doesnt exist");
    }
};

addTooltipToButton(btn_subtext, "use your text as subtext", 85);

btn_subtext.onClick = function () {
    var myItem = getItem("input_template.json");
    if (myItem && myItem.mainSource) {
        var text = edittext1.text;
        // Check if the text is empty
        if (text === "") {
            // Ask the user if they are sure to use an empty string
            var confirmation = confirm("The text is empty. Are you sure you want to use an empty string?");

            // If the user clicks Cancel, return null
            if (!confirmation) {
                return;
            }
        }
        // Execute changeJSONTEXT function with the provided text
        changeJSONTEXT(text, "subtext");
    } else {
        alert("JSON file doesnt exist");
    }
};

addTooltipToButton(btn_source, "use your text as source", 85);

btn_source.onClick = function () {
    var myItem = getItem("input_template.json");
    if (myItem && myItem.mainSource) {
        var text = edittext1.text;
        // Check if the text is empty
        if (text === "") {
            // Ask the user if they are sure to use an empty string
            var confirmation = confirm("The text is empty. Are you sure you want to use an empty string?");

            // If the user clicks Cancel, return null
            if (!confirmation) {
                return;
            }
        }
        // Execute changeJSONTEXT function with the provided text
        changeJSONTEXT(text, "source");
    } else {
        alert("JSON file doesnt exist");
    }
};

addTooltipToButton(btn_c2a, "use your text as call to action", 85);

btn_c2a.onClick = function () {
    var myItem = getItem("input_template.json");
    if (myItem && myItem.mainSource) {
        var text = edittext1.text;
        // Check if the text is empty
        if (text === "") {
            // Ask the user if they are sure to use an empty string
            var confirmation = confirm("The text is empty. Are you sure you want to use an empty string?");

            // If the user clicks Cancel, return null
            if (!confirmation) {
                return;
            }
        }
        // Execute changeJSONTEXT function with the provided text
        changeJSONTEXT(text, "call2action");
    } else {
        alert("JSON file doesnt exist");
    }
};

addTooltipToButton(btn_c2alink, "use your text as call to action link", 85);

btn_c2alink.onClick = function () {
    var myItem = getItem("input_template.json");
    if (myItem && myItem.mainSource) {
        var text = edittext1.text;
        // Check if the text is empty
        if (text === "") {
            // Ask the user if they are sure to use an empty string
            var confirmation = confirm("The text is empty. Are you sure you want to use an empty string?");

            // If the user clicks Cancel, return null
            if (!confirmation) {
                return;
            }
        }
        // Execute changeJSONTEXT function with the provided text
        changeJSONTEXT(text, "call2action_link");
    } else {
        alert("JSON file doesnt exist");
    }
};

addTooltipToButton(btn_debug_colors, "apply the colors, defined on the color-edit effects, to be used globally within the whole project", 85, false, true);

btn_debug_colors.onClick = function () {
    modifyJSONdata();
};

addTooltipToButton(btn_revert_json, "restore the Default JSON", 85);

btn_revert_json.onClick = function () {
    revertJson();
};

addTooltipToButton(btn_reload_json, "reload JSON, if edits wont show up", 85);

btn_reload_json.onClick = function () {
    var myItem = getItem("input_template.json");
    if (myItem && myItem.mainSource) {
        myItem.mainSource.reload();
        app.purge(PurgeTarget.IMAGE_CACHES);
    } else {
        alert("JSON file doesnt exist");
    }
};


textLayer.onClick = function () {
    app.beginUndoGroup("New Text");
    var activeComp = app.project.activeItem;
    if (checkComp(activeComp)) {
        sourceText = "Hey! I'm a Placeholder-Text.";
        var textLayer = activeComp.layers.addText(sourceText);
        var sourceText = textLayer.property("Source Text").value;
        sourceText.fontSize = 72;
        sourceText.font = "Verdana-Bold";
        textLayer.property("Source Text").setValue(sourceText);
        textLayer.adjustmentLayer = false;
        moveAnchor(1, 1, 0);
        app.executeCommand(3819); // CenterInView

        var myItem = getItem("input_template.json");
        if (myItem && myItem.mainSource) {
            setColorFill();
        } else {
            var fillSolid = textLayer.property("ADBE Effect Parade").addProperty("ADBE Fill");
            fillSolid.property("ADBE Fill-0002").setValue([1, 1, 1]);
        }
    }
    else {
        return;
    }
    app.endUndoGroup();
};

solidLayer.onClick = function () {
    createSolid("SOLID");
};

shapeLayer.onClick = function () {
    var comp = app.project.activeItem;
    // Check if a composition is active
    if (comp != null && comp instanceof CompItem) {
        var filePath = Folder.myDocuments.fsName + "/Adobe/After Effects 20" + app.buildName.substr(0, 2) + "/User Presets/mojo/__Rectangle-Wizard.ffx";
        var myFile = new File(filePath);
        if (myFile.exists) {
            // File exists
            RectangleWizardInit();
        } else {
            // File does not exist
            RectangleWizardffx();
            RectangleWizardInit();
        }
        //app.executeCommand(3736);//SHAPE
        //addRoundedShape();
    } else {
        alert("No active composition.");
    }
};

adjustmentsLayer.onClick = function () {
    app.beginUndoGroup("New Adj.");
    var activeComp = app.project.activeItem;
    if (checkComp(activeComp)) {
        if (layerName == "default") {
            adjName = "Adjustment Layer";
        }
        else {
            adjName = layerName;
        }
        var newSolid = activeComp.layers.addSolid([1, 1, 1], adjName, activeComp.width, activeComp.height, 1);
        newSolid.adjustmentLayer = true;
    }
    else {
        return;
    }
    app.endUndoGroup();
};
nullLayer.onClick = function () {
    app.beginUndoGroup("New Null");
    var activeComp = app.project.activeItem;
    if (checkComp(activeComp)) {
        var newNull = activeComp.layers.addNull();
        if (layerName == "default") {

        }
        else {
            newNull.name = layerName;
        }
    }
    else {
        return;
    }
    app.endUndoGroup();
};

parent2null.onClick = function () {
    app.beginUndoGroup("Create");
    CreateParentNull();
    app.endUndoGroup();
};

// Initiates color picker, returns RGB array
function colorPicker() {
    var initialRGB = [1, 1, 1];
    var colorInt = 255 * (65536 * initialRGB[0] + 256 * initialRGB[1] + initialRGB[2]);
    var c = $.colorPicker(colorInt);
    if (c == -1) return;
    var r = ((c >> 16) & 0xFF);
    var g = ((c >> 8) & 0xFF);
    var b = (c & 0xFF);
    return [r, g, b]
} // End colorPicker() function

//addTooltipToButton(purgeAll, "purge ImageCache", 85);

addHoverMenuToButton(purgeAll, hoverMenu_purge);
/*
purgeAll.onClick = function () {
    app.purge(PurgeTarget.IMAGE_CACHES);
};
*/


var contextMenuOpen = false;
var mousePosGlobal = null;

function closeDialogWindows() {
    if ((hoverMenuWin) && (hoverMenuWin instanceof Window)) {
        hoverMenuWin.close();
    }
    try {

    } catch (e) {
    }
    contextMenuOpen = false;
    return true;
}
win.addEventListener("focus", function () {
    contextMenuOpen = false;
    try {
        if ((hoverMenuWin) && (hoverMenuWin.visible)) {
            hoverMenuWin.close();
        }
    } catch (e) {
    }
});
win.onClose = function () {
    try {
        closeDialogWindows();
    } catch (e) {
    }
};

(function () {
    if (!checkSecurityPrefSet()) {
        return false;
    } else {
        showWindow(win);
    }
})();
