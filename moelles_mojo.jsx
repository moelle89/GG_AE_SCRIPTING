// HELPER PANEL FOR ADOBE AFTER EFFECTS TO WORK WITH THE GG TEMPLATE SYSTEM

function createDockableUI(thisObj) {
  var dialog =
    thisObj instanceof Panel
      ? thisObj
      : new Window("window", undefined, undefined, {
        su1PanelCoordinates: false,
        borderless: false,
        resizeable: true,
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
//Paste code here
// WIN
// ===

var win = createDockableUI(this);

win.orientation = "column";
win.alignChildren = ["fill", "fill"];
win.alignment = ["fill", "fill"];
win.minimumSize.width = 274;
win.spacing = 0;
win.margins = 0;

// TPANEL1
// =======
var tpanel1 = win.add("tabbedpanel", undefined, undefined, { name: "tpanel1" });
tpanel1.alignChildren = ["left", "top"];
tpanel1.margins = 0;
tpanel1.alignment = ["fill", "top"];
tpanel1.preferredSize.width = 284;
tpanel1.minimumSize.width = 274;


// tab_template
// ====
var tab_template = tpanel1.add("tab", undefined, undefined, { name: "tab_template" });
tab_template.text = "TEMPLATE";
tab_template.orientation = "column";
tab_template.alignChildren = ["fill", "top"];
tab_template.spacing = 0;
tab_template.margins = 0;

// GROUP1
// ======
var group1 = tab_template.add("group", undefined, { name: "group1" });
group1.orientation = "row";
group1.alignChildren = ["fill", "top"];
group1.spacing = 10;
group1.margins = 12;
group1.alignment = ["fill", "top"];

var btn_createComps_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%1C%00%00%00%14%08%06%00%00%00%C2%9E%5E%5D%C3%B9%00%00%00%09pHYs%00%00%0B%12%00%00%0B%12%01%C3%92%C3%9D~%C3%BC%00%00%01bIDATH%C2%89b%C3%BC%C3%BF%C3%BF%3F%03%C3%9D%00%03%03%03%00%00%00%C3%BF%C3%BFb%C2%A2%C2%ABm%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%AF%C2%85%0C%0C%0C%00%00%00%00%C3%BF%C3%BFb!A%C2%AD%01%03%03%C2%83%00%11%C3%AA.000%7C%C3%80*%C3%83%C3%80%C3%80%00%00%00%00%C3%BF%C3%BFb%00%C3%85!%11x%C3%81%7F%C3%A2%C3%81%C2%87%C3%BF%C3%BF%C3%BF%3B%601S%C3%A0%C3%BF%C3%BF%C3%BF%0C%00%00%00%00%C3%BF%C3%BF%22%C3%86%C2%B2%04%12%2C%C2%83%01%C2%90%C2%A50%C3%BD%0Ap%07%C3%BF%C3%BF%7F%00%00%00%00%C3%BF%C3%BF%22%26H%15H%08v%18%C3%A0g%60%60p%C2%80FC%3F%5C%C2%94%C2%81%C3%81%1E%00%00%00%C3%BF%C3%BF%C2%A2u%C2%A2%09%40%C3%A1100%00%00%00%00%C3%BF%C3%BF%C2%A2o*e%60%60%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%AF%C2%85%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%AF%C2%85%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%AF%C2%85%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%AF%C2%85%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%A5%C2%85%0F%18%18%186%C2%A0%C2%88000%00%00%00%00%C3%BF%C3%BF%22%26%C3%A3%C2%832.%C2%A9%60%03%C3%96%C2%8C%C3%BF%C3%BF%C3%BF%01%00%00%00%00%C3%BF%C3%BF%22%C2%B6hk%C2%80%C2%96%1E%C3%84%C2%80%0B%C3%BF%C3%BF%C3%BF7%C3%80Z%C2%B4%C3%BD%C3%BF%C3%8F%00%00%00%00%C3%BF%C3%BF%22%C2%B5%3E%04%C2%95%1E%C2%84%C2%82%11%C2%84%C2%B1%03%06%06%06%00%00%00%00%C3%BF%C3%BF%C2%A2o%05%C3%8C%C3%80%C3%80%00%00%00%00%C3%BF%C3%BF%C2%A2o*e%60%60%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%AF%C2%85%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%03%00%C2%83%C3%9F%C2%95x%C2%A6%14%C3%9A'%00%00%00%00IEND%C2%AEB%60%C2%82";
var btn_createComps = group1.add("iconbutton", undefined, File.decode(btn_createComps_imgString), { name: "btn_createComps", style: "button" });
btn_createComps.helpTip = "create all required compositions\nto start working on a new template";
btn_createComps.text = "Video-Templ.";
btn_createComps.alignment = ["left", "top"];
btn_createComps.minimumSize.width = 118;
btn_createComps.preferredSize.height = 30;


var btn_createIMGComps_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%1C%00%00%00%14%08%06%00%00%00%C2%9E%5E%5D%C3%B9%00%00%00%09pHYs%00%00%0B%12%00%00%0B%12%01%C3%92%C3%9D~%C3%BC%00%00%01%C2%B6IDATH%C2%89b%C3%BC%C3%BF%C3%BF%3F%03%C3%9D%00%03%03%03%00%00%00%C3%BF%C3%BFb%C2%A2%C2%ABm%0C%0C%0C%00%00%00%00%C3%BF%C3%BFb!Q%7D%02%03%03%C2%83%02%C2%99v-%60%60%60x%00%00%00%00%C3%BF%C3%BFb%00%05)%C2%91x%C3%82%7F%C3%8A%C3%80%C2%87%C3%BF%C3%BF%C3%BF%0B%00%00%00%00%C3%BF%C3%BF%22%25HA%C2%BE%23%16%7Cd%60%60%08d%60%60pd%60%60%C2%B8%08%C3%95%C3%84%C3%8F%C3%80%C3%80%10%00%00%00%00%C3%BF%C3%BF%22%25HA%1AHq%C3%9C%06(%C3%9B%01%1C%C2%94%20%C3%BD%0C%0C%0A%00%00%00%00%C3%BF%C3%BF%C2%A2U%C2%A2%C2%B9%C2%80%C3%84%C3%BE%00%C3%85%0C%0C%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%C2%A2%C3%94%C3%82%C2%8D%0C%0C%0C%13%C2%B1%C2%887%20%C2%B1A%C2%BE%C2%95%07%C2%B3%18%18%18%00%00%00%00%C3%BF%C3%BF%22%25%C3%91%60%03%02P%C2%B9%03X%24%1F%C3%BC%C3%BF%C3%BF%C3%BF%02%C2%8A%C3%88%C3%BF%C3%BF%0D%00%00%00%00%C3%BF%C3%BF%C2%A2%C3%84%C2%87%0B%C2%91%C2%82%0A%C3%A4%0BPB%C2%81%01%10%1B%C3%A4%2B%7D%14%1D%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%C2%A2%C3%84%C3%82%09HlP%C2%A2%C2%80%05%23%C3%88!%02H%C2%A9%13%01%18%18%18%00%00%00%00%C3%BF%C3%BF%227HAA%C2%85MM%02%12%1B%14%C3%9C%C2%A8A%C3%BA%C3%BF%7F%03%00%00%00%C3%BF%C3%BF%22%C3%97%C2%87%C3%88%C2%BEC%06%C2%A0%C3%92%04%06%40%C3%81%5D%C2%80%22%C3%8B%C3%80%C3%80%00%00%00%00%C3%BF%C3%BF%22%C3%87BP%C3%BC%20%1B%C2%8C%0F%1C%40I%C3%85%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%22%C3%87Bb-%C2%83%01D%16a%60%60%00%00%00%00%C3%BF%C3%BF%22%C2%A5%C2%A4%01%C3%B9%0CTZ%C2%80J%C2%8E%00%C3%A4%C3%8CL%00%C2%80%C3%94C%00%03%C3%83%03%00%00%00%00%C3%BF%C3%BF%C2%A2o%C3%A1%C3%BD%C3%BF%C2%BF%00%00%00%00%C3%BF%C3%BF%22%C2%B5%02%C2%A6%C2%ACzb%60x%00%00%00%00%C3%BF%C3%BF%C2%A2o%C2%8D%C3%8F%C3%80%C3%80%00%00%00%00%C3%BF%C3%BF%C2%A2o%C2%8D%C3%8F%C3%80%C3%80%00%00%00%00%C3%BF%C3%BF%03%00%C2%B4%C3%91%C2%B0%C2%91(4%3C%06%00%00%00%00IEND%C2%AEB%60%C2%82";
var btn_createIMGComps = group1.add("iconbutton", undefined, File.decode(btn_createIMGComps_imgString), { name: "btn_createIMGComps", style: "button" });
btn_createIMGComps.helpTip = "create all required compositions\nto start working on a new template";
btn_createIMGComps.text = "Image-Templ.";
btn_createIMGComps.alignment = ["left", "top"];
btn_createIMGComps.minimumSize.width = 118;
btn_createIMGComps.preferredSize.height = 30;

// TPANEL2
// =======
var tpanel2 = tab_template.add("tabbedpanel", undefined, undefined, { name: "tpanel2" });
tpanel2.alignChildren = ["fill", "top"];
tpanel2.alignment = ["fill", "top"];
tpanel2.minimumSize.width = 274;
tpanel2.margins = 0;// 

eval("@JSXBIN@ES@2.1@MyBn0DzABByB");
tpanel2.spacing = 0;

// TAB2
// ====
var tab2 = tpanel2.add("tab", undefined, undefined, { name: "tab2" });
tab2.text = "ELEMENTS";
tab2.orientation = "column";
tab2.alignChildren = ["left", "top"];
tab2.spacing = 12;
tab2.margins = 10;

// GROUPTAB2
// ======
var grouptab2 = tab2.add("group", undefined, { name: "grouptab2" });
grouptab2.orientation = "row";
grouptab2.alignChildren = ["left", "center"];
grouptab2.spacing = 10;
grouptab2.margins = 3;
grouptab2.alignment = ["fill", "top"];

var elementsDropDown_array = ["LOGO", "TEXT-ELEMENT", "-", "MEDIA", "MEDIA-SQR", "MEDIA-1920"];
var elementsDropDown_result = ["LOGO", "TEXT_el", "-", "_MEDIA", "_MEDIA_SQUARE", "_MEDIA_1920"];
var elementsDropDown = grouptab2.add("dropdownlist", undefined, undefined, { name: "elementsDropDown", items: elementsDropDown_array, });
elementsDropDown.selection = 0;
elementsDropDown.preferredSize.height = 30;
elementsDropDown.preferredSize.width = 175;
var option = elementsDropDown.selection;

var btn_addElement = grouptab2.add("iconbutton", undefined, undefined, { name: "btn_addElement", style: "button" });
btn_addElement.preferredSize.height = 30;
btn_addElement.preferredSize.width = 50;
btn_addElement.alignment = ["left", "top"];
btn_addElement.text = "ADD";

// tab_gallery
// ====
var tab_gallery = tpanel2.add("tab", undefined, undefined, { name: "tab_gallery" });
tab_gallery.text = "GALLERY";
tab_gallery.orientation = "column";
tab_gallery.alignChildren = ["left", "top"];
tab_gallery.spacing = 12;
tab_gallery.margins = 10;

// GROUP2
// ======
var group2 = tab_gallery.add("group", undefined, { name: "group2" });
group2.orientation = "row";
group2.alignChildren = ["left", "center"];
group2.spacing = 10;
group2.margins = 3;
group2.alignment = ["fill", "top"];

var ratio_result = ["_GALLERY", "_GALLERY_SQUARE", "_GALLERY_1920"];
var ratio_resultIndexAdd = [0, 6, 12];

var ratio_array = ["9:16", "1:1", "16:9"];
var ratio = group2.add("dropdownlist", undefined, undefined, { name: "dropdown2", items: ratio_array, });
ratio.preferredSize.height = 30;
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
var gallery = group2.add("dropdownlist", undefined, undefined, { name: "gallery", items: gallery_array });
gallery.selection = 0;
gallery.preferredSize.height = 30;
gallery.preferredSize.width = 112;

var btn_addGallery = group2.add("iconbutton", undefined, undefined, { name: "btn_addGallery", style: "button" });
btn_addGallery.preferredSize.height = 30;
btn_addGallery.preferredSize.width = 50;
btn_addGallery.alignment = ["left", "top"];
btn_addGallery.text = "ADD";

// tab_fx
// ====
var tab_fx = tpanel2.add("tab", undefined, undefined, { name: "tab_fx" });
tab_fx.text = "FX";
tab_fx.orientation = "row";
tab_fx.alignChildren = ["left", "top"];
tab_fx.spacing = 12;
tab_fx.margins = 10;

// TPANEL2
// =======
tpanel2.selection = tab2;

var colorFill = tab_fx.add("iconbutton", undefined, undefined, { name: "colorFill", style: "button" });
colorFill.preferredSize.height = 30;
colorFill.preferredSize.width = 110;
colorFill.alignment = ["left", "top"];
colorFill.text = "COLOR FILL";

var scale2fill = tab_fx.add("iconbutton", undefined, undefined, { name: "scale2fill", style: "button" });
scale2fill.preferredSize.height = 30;
scale2fill.preferredSize.width = 110;
scale2fill.alignment = ["left", "top"];
scale2fill.text = "SCALE 2 FILL";

// tab_files
// ====
var tab_files = tpanel1.add("tab", undefined, undefined, { name: "tab_files" });
tab_files.text = "FILES";
tab_files.orientation = "column";
tab_files.alignChildren = ["fill", "top"];
tab_files.spacing = 0;
tab_files.margins = 0;

// files_wrapper
// ======
var files_wrapper = tab_files.add("group", undefined, { name: "files_wrapper" });
files_wrapper.orientation = "row";
files_wrapper.alignChildren = ["left", "fill"];
files_wrapper.spacing = 0;
files_wrapper.margins = 12;
files_wrapper.alignment = ["fill", "top"];

var btn_import = files_wrapper.add("iconbutton", undefined, undefined, { name: "btn_import", style: "button" });
btn_import.alignment = ["left", "top"];
btn_import.preferredSize.height = 30;
btn_import.preferredSize.width = 240;
btn_import.text = "IMPORT A FILE AS FOOTAGE";



// tab_tools
// ====
var tab_tools = tpanel1.add("tab", undefined, undefined, { name: "tab_tools" });
tab_tools.text = "TOOLS";
tab_tools.orientation = "column";
tab_tools.alignChildren = ["fill", "top"];
tab_tools.spacing = 0;
tab_tools.margins = 0;


// tools_wrapper
// ======
var tools_wrapper = tab_tools.add("group", undefined, { name: "tools_wrapper" });
tools_wrapper.orientation = "column";
tools_wrapper.alignChildren = ["left", "fill"];
tools_wrapper.spacing = 0;
tools_wrapper.margins = 12;
tools_wrapper.alignment = ["fill", "top"];

tools_wrapper.add("statictext", undefined, "Open __SETTINGS - debug_layer");
tools_wrapper.add("statictext", undefined, "");
tools_wrapper.add("statictext", undefined, "Change colors and click the button");
tools_wrapper.add("statictext", undefined, "");

var btn_debug_colors = tools_wrapper.add("iconbutton", undefined, undefined, { name: "btn_debug_colors", style: "button" });
btn_debug_colors.alignment = ["left", "top"];
btn_debug_colors.preferredSize.height = 30;
btn_debug_colors.preferredSize.width = 240;
btn_debug_colors.text = "MODIFY JSON COLORS";


// TPANEL1
// =======
tpanel1.selection = tab_template;

// shortcuts
// ======
var shortcuts = win.add("group", undefined, { name: "shortcuts" });
shortcuts.orientation = "row";
shortcuts.alignChildren = ["left", "top"];
shortcuts.alignment = ["left", "top"];
shortcuts.spacing = 6;
shortcuts.margins = 12;

var fitView_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%18%00%00%00%18%08%06%00%00%00%C3%A0w%3D%C3%B8%00%00%00%09pHYs%00%00%0B%12%00%00%0B%12%01%C3%92%C3%9D~%C3%BC%00%00%01%C3%B3IDATH%C2%89b%C3%BC%C3%BF%C3%BF%3F%03%C3%8D%00%03%03%03%00%00%00%C3%BF%C3%BFb%C2%A2%C2%A9%C3%A9%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%AD%05%0C%0C%0C%00%00%00%00%C3%BF%C3%BFb!S_%03%03%03%C2%83%02%14%C2%83%C2%80%01%03%03%03%3F%C2%94%7D%11%C3%8Ag%60%60%60%60%00%00%00%00%C3%BF%C3%BF%22'%0E%40%C2%9A%C3%8F%13P%C3%83%08%26%19%18%18%00%00%00%00%C3%BF%C3%BF%22'%C2%88%3E%40%5DI%18000%00%00%00%00%C3%BF%C3%BF%227%15%09000%5C%60%60%60%C2%90%C3%87!%0F%C3%B1%01%03%03%03%00%00%00%C3%BF%C3%BF%227%C2%92%03%C3%B0%18~%10%C3%8Eb%60%60%00%00%00%00%C3%BF%C3%BF%22%C3%87%C2%82%04%06%06%C2%86%C3%B9D%C2%A9d%60%60%00%00%00%00%C3%BF%C3%BF%22%C3%95%02P%C2%AA%C3%81f%C3%B8G%C2%AC%C2%AA%19%18%18%00%00%00%00%C3%BF%C3%BF%22%C3%95%C2%82%07%0C%0C%0C%C2%89hb%20%C2%BE%03%C2%92%25%07%C3%A02%0C%0C%0C%00%00%00%00%C3%BF%C3%BFb%00E2%198%C3%A1%3F%04%C2%80h%C2%98~%C2%85%C3%BF%C3%BF%C3%BF%3B%C2%A0%C2%98%C3%B5%C3%BF%3F%03%00%00%00%C3%BF%C3%BF%C3%82f8H%11H1%C2%8C%0F2%C3%A4%C3%83%C3%BF%C3%BF%C3%BF%0D%C3%90%C3%94!%C2%AB%C3%81%C2%8E%C3%BF%C3%BFg%00%00%00%00%C3%BF%C3%BFB%C2%97h%C2%80%C2%BA%0Cf%20%C3%8C%C2%A5%C3%88b%C3%84%C3%BB%C3%B8%C3%BF%7F%06%00%00%00%00%C3%BF%C3%BFB%178%C2%80f%20%3A%00%C2%89%11o%C3%81%C3%BF%C3%BF%0C%00%00%00%00%C3%BF%C3%BF%C3%82%17%C3%89%C2%B0%C2%B2%05%19%14%C2%90%C2%94%24%18%18%18%00%00%00%00%C3%BF%C3%BF%22%25%15%C2%81R%C3%8B%02%C2%92Lg%60%60%00%00%00%00%C3%BF%C3%BFB%2F*p%C2%95%1B%0F%C2%A1%C2%85%1C%C2%A8%1C%22%1E000%00%00%00%00%C3%BF%C3%BF%22%C3%96%07%C2%A0b%01%C2%94%C2%BEa%C3%853q%C2%80%C2%81%C2%81%01%00%00%00%C3%BF%C3%BF%22%25%C2%88%C3%B4%C2%A1%C2%85%1C%C3%B1%C2%80%C2%81%C2%81%01%00%00%00%C3%BF%C3%BFB%C2%AFp%40%C3%850%C3%88%20%10%00%C3%A5LP%C2%89%09%02%C2%A0%1C%0C%C3%820%3Eq%C2%80%C2%81%C2%81%01%00%00%00%C3%BF%C3%BF%C2%A2m%C2%A5%C3%8F%C3%80%C3%80%00%00%00%00%C3%BF%C3%BF%C2%A2m%C2%9D%C3%8C%C3%80%C3%80%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%AD%05%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%03%00s2Y%20%C3%B3%C2%9AM%5D%00%00%00%00IEND%C2%AEB%60%C2%82";
var fitView = shortcuts.add("iconbutton", undefined, File.decode(fitView_imgString), { name: "fitView", style: "toolbutton" });
fitView.helpTip = "fit preview of active composition to fill the screen";
fitView.alignment = ["center", "top"];

var delExp_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%18%00%00%00%18%08%06%00%00%00%C3%A0w%3D%C3%B8%00%00%00%09pHYs%00%00%0B%12%00%00%0B%12%01%C3%92%C3%9D~%C3%BC%00%00%02%2BIDATH%C2%89b%C3%BC%C3%BF%C3%BF%3F%03%C3%8D%00%03%03%03%00%00%00%C3%BF%C3%BFb%22%60%C2%B8%01%03%03%C3%83%02%06%06%C2%86%07%0C%0C%0C%20%C2%97%20c%C2%90%18H%C3%8E%01%C2%A7n%06%06%06%00%00%00%00%C3%BF%C3%BFb%00%C3%B9%00%0BV%C3%B8%C3%BF%C3%BF%C3%BF%C2%81%C3%BF%C3%84%03%C2%90Z%C2%90%1ET%C2%B3%C3%BE%C3%BFg%00%00%00%00%C3%BF%C3%BF%C3%82%16D%01P%C2%97%C3%B1%C2%A3%C2%89%1FD%C3%A3%C3%9B%C2%A3%C3%B1%3F200%24000l%C2%80%C2%8B000%00%00%00%00%C3%BF%C3%BFB%C2%B71%00%C3%8D%C3%91%1F%C3%BE%C3%BF%C3%BF_%C3%B0%C3%BF%C3%BF%7F%01%2C%C2%AE%03%C2%89%C2%81%C3%A4%40j%C2%90%01%C3%88%0C%C2%88%C2%9A%C3%BF%C3%BF%19%00%00%00%00%C3%BF%C3%BFB%C3%96%00%C3%B2%22%C2%B2b%C2%90%C2%B7%C2%B1%19%C2%8C%C3%8D%22%C3%A4%C3%A0%04%C2%99%01%09%C2%AE%C3%BF%C3%BF%19%00%00%00%00%C3%BF%C3%BFBV%C2%88%C2%AC%08%C3%84%26d0%3A%C3%86%C3%94%C3%BF%C3%BF%3F%03%00%00%00%C3%BF%C3%BF%C2%82)r%40s%011.%C3%87%C3%A6%13%C3%A4%100%C3%B8%C3%BF%C3%BF%3F%03%00%00%00%C3%BF%C3%BF%C2%82I.%40%C2%92%00%C2%85%2B%C2%B2F%C2%98%C3%9C%04%241%10%1B%04%40r%C3%88jAza%60%C3%81%C3%BF%C3%BF%C3%BF%19%00%00%00%00%C3%BF%C3%BF%C2%82I%3C%40%C2%92%40w%3D%C2%B2%C3%97A%C2%9A%C2%90%1D%C2%83%1E%C2%94%20%C2%BD0%C3%B0%C3%A0%C3%BF%C3%BF%C3%BF%0C%00%00%00%00%C3%BF%C3%BF%C2%82I%C3%A0%0B%7B%C2%98k%C2%B1%01d_a%3A%C3%A8%C3%BF%7F%06%00%00%00%00%C3%BF%C3%BF%22%C3%86%02%C3%B4%20D%09%02%C2%BC%16%C3%BC%C3%BF%C3%8F%00%00%00%00%C3%BF%C3%BF%22TTP%06%18%18%18%00%00%00%00%C3%BF%C3%BF%22%C3%86%C2%82%09%0C%0C%0C%C3%B1X%C3%84Ab%209%C3%9C%C2%80%C2%81%C2%81%01%00%00%00%C3%BF%C3%BF%22%26%C2%92%C3%91%C2%83%05%3D%C2%B8pG%C3%B2%C3%BF%C3%BF%0C%00%00%00%00%C3%BF%C3%BF%22%26%C2%99n%C2%80%C2%8AcK%C2%A6%209%C3%9C%C3%89%C3%B4%C3%BF%7F%06%00%00%00%00%C3%BF%C3%BF%C2%82I%C2%802%05%0CP%2F%C2%A3%C3%BD%C3%BF%C3%8F%00%00%00%00%C3%BF%C3%BF%C2%A2mQ%C3%B1%C3%BF%3F%03%00%00%00%C3%BF%C3%BF%C2%A2ma%C3%B7%C3%BF%3F%03%00%00%00%C3%BF%C3%BFBWL%C3%9D%C3%A2%C3%BA%C3%BF%7F%06%00%00%00%00%C3%BF%C3%BF%C2%A2m%C2%85%C3%83%C3%80%C3%80%00%00%00%00%C3%BF%C3%BF%C3%82%C3%A5m%C3%AAT%C2%99%C3%BF%C3%BF3%00%00%00%00%C3%BF%C3%BF%22%14%C2%BE%C2%A0%C2%94%00Jn%C3%88%C3%B9%04%06%40b%209pj%C3%81%C2%8A%C3%BF%C3%BFg%00%00%00%00%C3%BF%C3%BF%C2%A2m%C2%B3%C2%85%C2%81%C2%81%01%00%00%00%C3%BF%C3%BF%03%00%0E%C3%8D%C2%82%C3%90Lqa%3C%00%00%00%00IEND%C2%AEB%60%C2%82";
var delExp = shortcuts.add("iconbutton", undefined, File.decode(delExp_imgString), { name: "delExp", style: "toolbutton" });
delExp.helpTip = "delete all expressions of a selected layers transform-properties";
delExp.alignment = ["center", "top"];

var openProjectInExplorer_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%18%00%00%00%18%08%06%00%00%00%C3%A0w%3D%C3%B8%00%00%00%09pHYs%00%00%0B%12%00%00%0B%12%01%C3%92%C3%9D~%C3%BC%00%00%02%1CIDATH%C2%89b%C3%BC%C3%BF%C3%BF%3F%03%C3%8D%00%03%03%03%00%00%00%C3%BF%C3%BFb%C2%A2%C2%A9%C3%A9%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%C2%82Y%60%C3%80%C3%80%C3%80%C3%B0%C2%80%C2%81%C2%81%01%C3%A4%1Dd%C3%BC%C2%81%C2%81%C2%81%C2%A1%C2%81%C2%81%C2%81A%C2%80%2C%C3%93%19%18%18%00%00%00%00%C3%BF%C3%BF%C2%82%05%11%C3%88py%06%06%C2%86%C2%87P6%0C%C2%80%2C%C3%A6g%60%60%C3%B8%C3%88%C3%80%C3%800%01j%19%C3%B1%C2%80%C2%81%C2%81%01%00%00%00%C3%BF%C3%BFb%C3%B8%C3%BF%C3%BF%C2%BF%C3%81%7F%08%C2%B8%C3%B0%C3%BF%C3%BF%7F%01%C2%90%C2%85H%18%C3%84%C2%9F%00%C2%95'%04%3E%C3%BC%C3%BF%C3%BF%C2%BF%01E%C3%BF%C3%BF%C3%BF%0C%00%00%00%00%C3%BF%C3%BF%02%C3%B9%C3%80%C2%81%C2%81%C2%81a%3F%03%03C%23%1E%17*%40%C3%A5%4046%00%0AB%7D%C2%A8%C2%84%23%03%03%C3%83%010%C2%8B%C2%81%C2%81%01%00%00%00%C3%BF%C3%BFb!%C3%82%C2%BF%20%07%C2%80%C3%80%02%06%06%C2%86%0B%C3%90x%C3%81%06%40%C3%B2%C3%B1%0C%0C%0C%09p%0B%18%18%18%00%00%00%00%C3%BF%C3%BF%02y%C3%83%01%C3%AAwt%C3%AF%25%40%C2%BDM%0E%00%C3%A9K%C3%B8%C3%BF%C3%BF%3F%03%00%00%00%C3%BF%C3%BF%C3%82%C2%95LA%5E%06E*(%C2%82%C3%89%01%20%7D%13%18%18%18%18%00%00%00%00%C3%BF%C3%BF%C3%82e%01%2C%C3%B5P%02%C3%B8%19%18%18%0C%00%00%00%00%C3%BF%C3%BF%C3%82e%01%2C%C3%9C)%03%0C%0C%17%00%00%00%00%C3%BF%C3%BF%C3%82e%01%C2%AE%C3%94B%0A%C2%B8%C3%88%C3%80%C3%80%C3%80%00%00%00%00%C3%BF%C3%BF%C3%82%17D%C2%94%C2%82%0D%0C%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%C3%82e%01%2CMS%02%0E0000%00%00%00%00%C3%BF%C3%BF%C3%82f%015%5C%0F*Z%0E0000%00%00%00%00%C3%BF%C3%BF%C3%82f%015%C3%82%1F%C2%92%C3%91%18%18%18%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%95%0F%20%16000%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%95%05%C3%A0%08f%60%60%60%00%00%00%00%C3%BF%C3%BFB%C2%B6%00V%C3%A6S%1AD%C2%88%22%C2%9F%C2%81%C2%81%01%00%00%00%C3%BF%C3%BF%02%C2%959%0A%C3%90%C3%82%06T~%C3%80%C3%8A%25J%C3%80%02xy%C3%B6%C3%BF%3F%03%00%00%00%C3%BF%C3%BF%C2%821%1EP%C3%81%60%18%009%12b%C3%AE%C3%BF%C3%BF%0C%00%00%00%00%C3%BF%C3%BF%C2%821%40%C2%95%0E5%2C%01UN%C2%88%12%C3%B9%C3%BF%7F%06%00%00%00%00%C3%BF%C3%BF%C2%A2m%C2%AB%C2%82%C2%81%C2%81%01%00%00%00%C3%BF%C3%BF%C2%A2m%C2%AB%C2%82%C2%81%C2%81%01%00%00%00%C3%BF%C3%BF%03%00%C3%A5%C3%A5%C3%A9%0ET%C3%A5%C3%95%C3%96%00%00%00%00IEND%C2%AEB%60%C2%82";

var openProjectInExplorer = shortcuts.add("iconbutton", undefined, File.decode(openProjectInExplorer_imgString), { name: "openProjectInExplorer", style: "toolbutton" });
openProjectInExplorer.helpTip = "Open Project Folder";
openProjectInExplorer.alignment = ["center", "top"];

var openFootageFolder_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%18%00%00%00%18%08%06%00%00%00%C3%A0w%3D%C3%B8%00%00%00%09pHYs%00%00%0B%12%00%00%0B%12%01%C3%92%C3%9D~%C3%BC%00%00%01%C3%82IDATH%C2%89b%C3%BC%C3%BF%C3%BF%3F%03%C3%8D%00%03%03%03%00%00%00%C3%BF%C3%BFb%C2%A2%C2%A9%C3%A9%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%C3%82e%C2%81%00%03%03%C3%83%01%06%06%06%C2%90%C3%B7%C2%88%C3%81%20%C2%B5%20%3D%C2%A8%C2%80%C2%81%C2%81%01%00%00%00%C3%BF%C3%BFb%00%05%11%16%7C%C3%A0%3F%C3%A9%00%C2%A4%07%C3%95%C2%AC%C3%BF%C3%BF%19%00%00%00%00%C3%BF%C3%BF%C3%82e%01%0C%2C%C3%80!%C2%8F%C2%8CAj%60%00U%C3%AE%C3%BF%7F%06%00%00%00%00%C3%BF%C3%BFB%17%10%20%C3%93%C3%B50%00%C3%92%0B2%03b%C3%9E%C3%BF%C3%BF%0C%00%00%00%00%C3%BF%C3%BFB%C2%B7%C2%80%12%C3%83%C2%91-%C2%81%C2%98%C3%B7%C3%BF%3F%03%00%00%00%C3%BF%C3%BFBw%3D)AC8%C2%A8%C3%BE%C3%BFg%00%00%00%00%C3%BF%C3%BF%C2%A2V%C3%90%60%C3%B3%C2%85%C3%80%C3%BF%C3%BF%C3%BF%19%00%00%00%00%C3%BF%C3%BF%C2%A2f%C3%90%60Z%C3%B2%C3%BF%3F%03%00%00%00%C3%BF%C3%BF%02%C3%A5dP%C3%BA%7DO%C2%93%5C%C3%86%C3%80%C3%80%08%00%00%00%C3%BF%C3%BF%22%25'%3F%24%C3%99x%06%06%06%00%00%00%00%C3%BF%C3%BF%02Y%C3%B0%C2%81%08u%C2%89%0C%0C%0C%0A%0C%0C%0C%C2%8E%24Y%C3%84%C3%80%C3%80%00%00%00%00%C3%BF%C3%BFB%C3%8FX%C2%B8%00z%C2%8Ai%C3%B8%C3%BF%C3%BF%C3%BF%07%C2%82%C2%BA%C3%BE%C3%BFg%00%00%00%00%C3%BF%C3%BF%C2%82%C2%95%C2%A6%C2%84%C2%8ATF%2Cb%01%0C%0C%0C%C3%AB%C3%B1%C3%AAb%60%60%04%00%00%00%C3%BF%C3%BF%C2%A2mi%C3%8A%C3%80%C3%80%00%00%00%00%C3%BF%C3%BF%22%C3%97%C2%82%06%06%06%C2%86%05%04U100%00%00%00%00%C3%BF%C3%BF%226%0E%12%C2%A0%C3%AA%1C%C3%BE%C3%BF%C3%BF%C3%BF%C2%80%C3%A8%C2%9C%C3%B0%C3%BF%3F%03%00%00%00%C3%BF%C3%BF%226%0E%40%00%C2%94z%C3%A4I%C3%B2'%03%03%23%00%00%00%C3%BF%C3%BF%22%C3%85%02%C3%92%01%03%C2%83%22%00%00%00%C3%BF%C3%BF%C2%82%C3%85%C3%81A%1A%18~%C2%90%C2%81%C2%81%C3%A1%01%00%00%00%C3%BF%C3%BF%C2%A2ma%C3%B7%C3%BF%3F%03%00%00%00%C3%BF%C3%BF%C2%A2m%C2%AB%C2%82%C2%81%C2%81%01%00%00%00%C3%BF%C3%BF%C2%A2m%3E%60%60%60%00%00%00%00%C3%BF%C3%BF%03%00%C2%BB%C3%80%C2%92b%C3%88%C3%B2%C2%9F%00%00%00%00%00IEND%C2%AEB%60%C2%82";

var openFootageFolder = shortcuts.add("iconbutton", undefined, File.decode(openFootageFolder_imgString), { name: "openFootageFolder", style: "toolbutton" });
openFootageFolder.helpTip = "Open Footage Folder";
openFootageFolder.alignment = ["center", "top"];

var openJSONFolder_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%18%00%00%00%18%08%06%00%00%00%C3%A0w%3D%C3%B8%00%00%00%09pHYs%00%00%0B%12%00%00%0B%12%01%C3%92%C3%9D~%C3%BC%00%00%02%C3%87IDATH%C2%89b%C3%BC%C3%BF%C3%BF%3F%03%C3%8D%00%03%03%03%00%00%00%C3%BF%C3%BFb%C3%82ax%03%03%03%C3%83%07%06%06%06%C2%90%C3%AD%C2%B8%C3%B0%01%06%06%06%03%C2%BC%C2%8Ec%60%60%00%00%00%00%C3%BF%C3%BF%C3%82%C3%A6%03%C2%90%C3%A1%C3%B5%0C%0C%0C%1B%19%18%18%16%40-B%07%09%0C%0C%0C%C3%B1%0C%0C%0C%1F%19%18%18%1C%18%18%18.%605%C2%9D%C2%81%C2%81%01%00%00%00%C3%BF%C3%BFb%00Y%C2%80%C2%86%3F%C3%BC%C3%BF%C3%BF%7F%03%16qd%C3%9C%C3%B0%1F%01%40%C3%AA%0D%C2%B0%C2%AA%C3%BB%C3%BF%C2%9F%01%00%00%00%C3%BF%C3%BF%C3%82%16D%C3%BCP%C2%97%13%0B%40%C3%AAA%C3%81%05%C3%B2%09*%60%60%60%00%00%00%00%C3%BF%C3%BF%C3%82%15%07%C3%98%C2%82%05%1F%00Y%C2%B2%1F%1At%08%C3%80%C3%80%C3%80%00%00%00%00%C3%BF%C3%BF%C3%82e%01!%C2%80%C3%8B%01%C3%B3Q%22%C2%9E%C2%81%C2%81%01%00%00%00%C3%BF%C3%BFB%C2%B7%00%C3%83%058%00(%08%0F%C3%A2%C2%90%2B%C2%80%C2%B3%18%18%18%00%00%00%00%C3%BF%C3%BFB%C2%8E%C2%90%09H%11%C3%A7%40%20%C2%92q%C3%A1%03P%0C%C2%91%C3%BF%C3%BF%C2%9F%01%00%00%00%C3%BF%C3%BFb%C2%81%C3%9A%03r%11(%C3%99%3Dd%60%60%C2%90%C2%87%C3%BA%04k%C2%A4%11%00%0APyP0%5D%60%60%60%60%00%00%00%00%C3%BF%C3%BF%C2%82%C3%99D%0B%C3%90%C3%B0%C3%BF%C3%BF%7F%06%00%00%00%00%C3%BF%C3%BF%C3%82e%01(%1F%C3%80%C3%92x%C3%82%C3%BF%C3%BF%C3%BF%03%C2%A0l%10x%00%15%2B%40%12%C2%BB%C2%80%C2%A6%07%C3%84%C3%BF%C3%BF%C3%BF%C3%BF%7F%06%00%00%00%00%C3%BF%C3%BF%C3%82f%01(.%60b%20%C2%83Al%01%C2%A8%26%C2%90f%05%C2%A40%06%C3%85%15L%1DH%0D%C3%88r%10%1B%22%C3%BE%C3%BF%C2%BF%01%00%00%00%C3%BF%C3%BF%C3%82%C2%96L%C2%91%C2%93%20%2C%03%C2%81h%7Dh%C2%B8%3E%C2%80%C3%92%C2%A0x%03%C2%89_%C2%84%C3%AA%01aP%C3%9C!%C3%B430%08%00%00%00%00%C3%BF%C3%BFB%C2%B6%60!%C2%B4lA%06%13%C2%90%0A5%C3%A4d%09%C2%B2%0C%C2%94(%C2%90%1D%24%00U%0B%C3%82%10%C3%80%C3%80%C3%80%00%00%00%00%C3%BF%C3%BFB%C2%B6%00d%3B%08%23%17%5C%01H%C3%85%06%C2%B2F%C2%90c%12%C2%A1l%C3%A4%C2%94%C2%83%C2%9A%07%18%18%18%00%00%00%00%C3%BF%C3%BFB%C2%8E%03P%C2%A4%C3%81%C3%B8%206%3C%25%20%C2%A5qp%C2%B8bQ%07%0AwP%C3%84%C3%83%C3%A2%08%C3%84%C3%BF%C3%BF%C3%BF%C3%BF%7F%05%00%00%00%00%C3%BF%C3%BF%C2%82%15%C3%97%20o%C2%82%C3%8A%13%C2%90%C3%8B%40%00%C3%A6%7DP%C2%BE%00%C3%B9%00%14%0F%C3%B6h%3E%40V%07%0BZ%C2%90%19%20%3D%20%C3%B3%14%18%18%18%04%00%00%00%00%C3%BF%C3%BF%C2%82%C2%B9%04f%3B%C2%B5%00%24y%C3%BF%C3%BF%C3%8F%00%00%00%00%C3%BF%C3%BFB%C2%AEp%40%C2%91%04%0AGP%C2%A9%C3%98%C2%88%1EYD%02P%C2%A2%C2%80%C3%85%07%03%03%03%03%03%00%00%00%C3%BF%C3%BF%22%C2%B7%C3%82%C3%81%C2%86Aa%0F%C3%92%0B%C3%8BG%0C%C3%BF%C3%BF%C3%BFg%00%00%00%00%C3%BF%C3%BF%C2%82%C2%95E%C3%88%00%C3%A4%0AP%C2%95%C2%B9%01O%C2%95%C2%89%0E%40%C3%A1%0D%C2%AAj%C2%91%7D%C3%81%C3%80%C3%80%C3%80%C3%80%00%00%00%00%C3%BF%C3%BF%C3%82W%25%C2%92%1A'%C2%A0%C2%9C%C2%8EZu%C3%BE%C3%BF%C3%8F%00%00%00%00%C3%BF%C3%BF%C2%A2m%C2%B3%C2%85%C2%81%C2%81%01%00%00%00%C3%BF%C3%BF%03%00%C3%AB%C2%8FA%00%C2%89%0A%16a%00%00%00%00IEND%C2%AEB%60%C2%82";

var openJSONFolder = shortcuts.add("iconbutton", undefined, File.decode(openJSONFolder_imgString), { name: "openJSONFolder", style: "toolbutton" });
openJSONFolder.helpTip = "Open JSON Folder";
openJSONFolder.alignment = ["center", "top"];


showWindow(win);

// Function to find the index of a composition by name
// COPY LAYER INTO COMP
// ====

function indexOfComp(compName) {
  for (var i = 1; i <= app.project.numItems; i++) {
    if ((app.project.item(i) instanceof CompItem) && (app.project.item(i).name == compName)) {
      return app.project.item(i);
    }
  }
  return null;
}

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
function GetItemsByName(nameString) {
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
  return matches;
};


// Function to check if names are already used in the project
function areNamesUsed(names) {
  // Get the root folder of the project
  var folder = app.project.rootFolder;

  // Iterate through project items
  for (var i = 1; i <= folder.items.length; i++) {
    var currentItem = folder.items[i];

    // Check if the item's name is in the array of names
    if (currentItem && names.indexOf(currentItem.name) !== -1) {
      return true; // Name is already used
    }
  }

  return false; // None of the names are used
}

// Function to copy a layer from a source composition to the active composition
function copyLayerToActiveComp(sourceCompName, layerName) {
  // Get the active composition
  var activeComp = app.project.activeItem;

  // Check if the active item is a composition
  if (activeComp !== null && activeComp instanceof CompItem) {
    // Get the source composition by name
    var sourceComp = indexOfComp(sourceCompName);

    // Check if the source composition exists
    if (sourceComp !== null && sourceComp instanceof CompItem) {
      // Get the layer by name from the source composition
      var sourceLayer = sourceComp.layer(layerName);

      // Check if the layer exists
      if (sourceLayer !== null) {
        // Duplicate the layer to the active composition
        sourceComp.layer(layerName).copyToComp(activeComp);

        var copiedLayer = activeComp.layer(layerName);
        copiedLayer.enabled = true;
        var offsetX = (activeComp.width / 2);
        var offsetY = (activeComp.height / 2);
        if (layerName !== "LOGO") {
          copiedLayer.position.setValue([offsetX, offsetY]);
        }

        // Alert to notify that the layer has been copied
        //alert("Layer copied to active composition!");

        // Return the duplicated layer
      } else {
        alert("Layer not found in the source composition.");
      }
    } else {
      alert("Source composition not found.");
    }
  } else { }

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
  var namesToCheck = [reelName, squareName, fullHDName];

  // Check if names are already used
  var areUsed = areNamesUsed(namesToCheck);

  if (areUsed) {
    // Prompt the user for a different name or handle the situation accordingly
    alert("That name already exists exists. Please choose a different name.");
  } else {
    createComposition(1080, 1920, duration, 30, reelName, 1);
    createComposition(1080, 1080, duration, 30, squareName, 1);
    createComposition(1920, 1080, duration, 30, fullHDName, 1);
    // Alert to indicate successful creation
    alert("Compositions created successfully as " + reelName + ", " + squareName + " and " + fullHDName);
  }
}

// Function to apply a preset to the selected layer
function applyPreset(presetPath) {
  $.writeln("applyPreset - presetPath: " + presetPath);
  // Get the active composition
  var comp = app.project.activeItem;
  // Check if a composition is active
  if (comp != null && comp instanceof CompItem) {
    // Apply the preset to the active composition
    comp.applyPreset(File(presetPath));
  } else {
    $.writeln("applyPreset - no active comp");
    alert("Please open a composition before running this script.");
  }
}

// Function to apply a preset to the selected layer
function createTextBox() {
  //Script draws dynamic rectangle shape around text or any object
  //Only for AE 13.2 and higher
  //Alex Kravchenko, 2015

  CompItem.prototype.dd_dynamicBbox_createBbox = function (_layer) {
    bboxProps = {
      "fill": { "color": [0.5, 0.5, 0.5, 1] },
      "stroke": { "width": 20, "color": [0.3, 0.3, 0.3, 1] },
      "addSpace": 50
    };

    //shape match names:
    var contentsName = "ADBE Root Vectors Group";
    var vectorGroupName = "ADBE Vector Group";//a shape group
    var rectPathName = "ADBE Vector Shape - Rect";//rectangle group
    var rectPathSizeName = "ADBE Vector Rect Size";//rectangle size
    var strokeGroupName = "ADBE Vector Graphic - Stroke";//stroke
    var strokeWidthName = "ADBE Vector Stroke Width";//stroke width
    var strokeColorName = "ADBE Vector Stroke Color";//stroke color
    var fillGroupName = "ADBE Vector Graphic - Fill";//fill
    var fillColorName = "ADBE Vector Fill Color";////fill color

    //effect match names:
    var effectsName = "ADBE Effect Parade";
    var layerControlName = "ADBE Layer Control";
    var sliderControlName = "ADBE Slider Control";
    var cbControlName = "ADBE Checkbox Control";

    //expressions:
    var shapeSizeExpression = "textLayer = effect(\"Target Layer\")(\"Layer\");\nvar strokes = effect(\"Accept Strokes\")(\"Checkbox\");\nvar add = effect(\"Padding\")(\"Slider\");\nbbox = textLayer.sourceRectAtTime(time,strokes);//bounding box вокруг текста\n[bbox.width*textLayer.scale[0]/100,bbox.height*textLayer.scale[1]/100]+[add,add]//ширина bbox'а плюс немного отступа по краям";
    var textSizeExpression = "textLayer = effect(\"Target Layer\")(\"Layer\");\nvar add = effect(\"Padding\")(\"Slider\");\nbbox = textLayer.sourceRectAtTime(time,false);//bounding box вокруг текста\n[bbox.width*textLayer.scale[0]/100,bbox.height*textLayer.scale[1]/100]+[add,add]//ширина bbox'а плюс немного отступа по краям";

    var shapePosExpression = "textLayer = effect(\"Target Layer\")(\"Layer\");\nvar strokes = effect(\"Accept Strokes\")(\"Checkbox\");\nbbox = textLayer.sourceRectAtTime(time,strokes);\ntextLayer.position-textLayer.anchorPoint+\n	[bbox.left*textLayer.scale[0]/100,bbox.top*textLayer.scale[1]/100]+\n	[bbox.width*textLayer.scale[0]/100,bbox.height*textLayer.scale[1]/100]/2;";
    var textPosExpression = "textLayer = effect(\"Target Layer\")(\"Layer\");\nbbox = textLayer.sourceRectAtTime(time,false);\ntextLayer.position-textLayer.anchorPoint+\n	[bbox.left*textLayer.scale[0]/100,bbox.top*textLayer.scale[1]/100]+\n	[bbox.width*textLayer.scale[0]/100,bbox.height*textLayer.scale[1]/100]/2;";

    //creating shape layer
    var newShape = this.layers.addShape();
    newShape.name = _layer.name + "_bbox";
    newShape.moveAfter(_layer);

    //creating all controls
    var layerControl = newShape.property(effectsName).addProperty(layerControlName);
    layerControl.name = "Target Layer";
    layerControl.property(layerControlName + "-0001").setValue(_layer.index);
    var sliderControl = newShape.property(effectsName).addProperty(sliderControlName);
    sliderControl.name = "Padding";
    sliderControl.property(sliderControlName + "-0001").setValue(bboxProps.addSpace);
    if (_layer instanceof ShapeLayer) {
      var checkboxControl = newShape.property(effectsName).addProperty(cbControlName);
      checkboxControl.name = "Accept Strokes";
      checkboxControl.property(cbControlName + "-0001").setValue(true);
    }

    if (_layer instanceof ShapeLayer)
      newShape.position.expression = shapePosExpression;
    else
      newShape.position.expression = textPosExpression;
    var rectGroup = newShape.property(contentsName).addProperty(rectPathName);
    var rectSize = rectGroup.property(rectPathSizeName);
    if (_layer instanceof ShapeLayer)
      rectSize.expression = shapeSizeExpression;
    else
      rectSize.expression = textSizeExpression;
    var fillGroup = newShape.property(contentsName).addProperty(fillGroupName);
    fillGroup.property(fillColorName).setValue(bboxProps.fill.color);
    var strokeGroup = newShape.property(contentsName).addProperty(strokeGroupName);
    strokeGroup.property(strokeColorName).setValue(bboxProps.stroke.color);
    strokeGroup.property(strokeWidthName).setValue(bboxProps.stroke.width);
  }


  function dd_dynamicBbox() {
    vers = parseFloat(app.version);
    if (vers < 13.2) {
      alert("Update to After Effects CC2014 or later to use this script");
      return 0;
    }
    var myComp = app.project.activeItem;
    if (!myComp || !(myComp instanceof CompItem) || myComp.selectedLayers.length == 0) {
      alert("Choose at least one layer");
      return 0;
    }

    var arr = []//layers array (only text and/or shape layers)
    for (var i = 0; i < myComp.selectedLayers.length; i++)
      if (myComp.selectedLayers[i] instanceof TextLayer || myComp.selectedLayers[i] instanceof ShapeLayer)
        arr.push(myComp.selectedLayers[i]);
    if (arr.length == 0) {
      alert("Select Shape or Text layer");
      return 0;
    }
    for (var i = 0; i < arr.length; i++)
      myComp.dd_dynamicBbox_createBbox(arr[i]);

  }

  app.beginUndoGroup("Dynamic Bbox");
  dd_dynamicBbox();
  app.endUndoGroup();
}


// Function to remove expressions from specific properties of a layer (Position, Scale, Opacity, Anchor Point, Rotation)
function removeSpecificExpressions() {

  try {

    // Check if a composition is active
    if (app.project.activeItem instanceof CompItem) {
      var comp = app.project.activeItem;

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
        $.writeln("removeExpressions - finished");
        alert("Expressions removed from specified properties (Position, Scale, Opacity, Anchor Point, Rotation) of the selected layer.");
      } else {
        $.writeln("removeExpressions - no active layer");
        alert("Please select a layer.");
      }
    }
  } catch (error) {
    $.writeln(error);
    // Expected output: ReferenceError: nonExistentFunction is not defined
    // (Note: the exact output may be browser-dependent)
  }
}


// Function to add specific expressions to properties of a layer (Anchor Point, Position, Scale)
function scaleToFillComp() {
  // Check if a composition is active
  if (app.project.activeItem instanceof CompItem) {
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

      // Alert when expressions are added to properties
      $.writeln("Expressions added to specified properties (Anchor Point, Position, Scale) of the selected layer.");
      alert("Layer scaled to fill the size of its composition");
    } else {
      alert("Please select a layer.");
    }
  } else {
    alert("Please open a composition.");
  }
}


// Function to add colorFill via script instead of preset file
function setColorFill() {
  var pseudoEffectData = {
    name: "__COLOR_FILL",
    matchName: "Pseudo/177941",
    binary: "RIFX\x00\x00(\u00A8FaFXhead\x00\x00\x00\x10\x00\x00\x00\x03\x00\x00\x00^\x00\x00\x00\x04\x01\u0089\x00\x00LIST\x00\x00(\u0084bescbeso\x00\x00\x008\x00\x00\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00]\u00A8\x00\x1D\u00F8R\x00\x00\x00\x04\x00\x01\x00\x01\x07\u0080\x048?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FFLIST\x00\x00\x00dtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x01LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE Effect Parade\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdsn\x00\x00\x00\x10Utf8\x00\x00\x00\x07Effects\x00LIST\x00\x00\x00dtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x01LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE End of path sentinel\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00'Htdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x10Utf8\x00\x00\x00\x07Effects\x00tdmn\x00\x00\x00(Pseudo/177941\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x11|sspcfnam\x00\x00\x00\bUtf8\x00\x00\x00\x00LIST\x00\x00\x03\u00E8parTparn\x00\x00\x00\x04\x00\x00\x00\x04tdmn\x00\x00\x00(Pseudo/177941-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00<\x00\x00\u009C\u0094':\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x0F\x00\x00\x00\x00\x00\x00\x00\u00CC\u00B48itdmn\x00\x00\x00(Pseudo/177941-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x07pick your color\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x13\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00<\x00\x00\u009C\u0094':\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x0F\x00\x00\x00\x00\x00\x00\x00\u00CC\u00B48ipdnm\x00\x00\x00\u00A0Utf8\x00\x00\x00\u0098ACCENT|BG|(-|TITLE|SUBTEXT|(-|CALL2ACTION|CALL2ACTION_LINK|(-|CALL2ACTION_CURSOR|CALL2ACTION_CURSOR_STROKE|(-|LOGO_BG|(-|SOURCE|SOURCE_BG|(-|WHITE|BLACKtdmn\x00\x00\x00(Pseudo/177941-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x05preview\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00B2\u008E;\u00FF\u00B2\u008E;\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00<\x00\x00\u009C\u0094':\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x0F\x00\x00\x00\x00\x00\x00\x00\u00CC\u00B48itdmn\x00\x00\x00(ADBE Effect Built In Params\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\t\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\rXtdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x12Utf8\x00\x00\x00\nCOLOR_FILLtdmn\x00\x00\x00(Pseudo/177941-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00ECtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x03tdsn\x00\x00\x00\bUtf8\x00\x00\x00\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00]\u00A8?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdpi\x00\x00\x00\x04\x00\x00\x00\x11tdps\x00\x00\x00\x04\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/177941-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00E4tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x18Utf8\x00\x00\x00\x0Fpick your color\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/177941-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x07\x18tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x10Utf8\x00\x00\x00\x07preview\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x04\x00\x07\x00\x01\x00\x02\u00FF\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00cdat\x00\x00\x00`@o\u00E0\x00\x00\x00\x00\x00@f@\x00\x00\x00\x00\x00@a\u00C0\x00\x00\x00\x00\x00@M\u0080\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00Utf8\x00\x00\x05\u00FBoption = effect(\"COLOR_FILL\")(\"pick your color\");\r\n\r\nmyData = footage(\"input_template.json\").sourceData;\r\ndarkmode = myData.Comp.darkmode;\r\n\r\n\r\nconst components = {\r\n  1: accent = 1 == darkmode ? hexToRgb(myData.Comp.accent.color_dark) : hexToRgb(myData.Comp.accent.color),\r\n  2: bg = 1 == darkmode ? hexToRgb(myData.Comp.bg.color_dark) : hexToRgb(myData.Comp.bg.color),\r\n  4: title = 1 == darkmode ? hexToRgb(myData.Comp.title.color_dark) : hexToRgb(myData.Comp.title.color),\r\n  5: subtext = 1 == darkmode ? hexToRgb(myData.Comp.subtext.color_dark) : hexToRgb(myData.Comp.subtext.color),\r\n  7: call2action = 1 == darkmode ? hexToRgb(myData.Comp.call2action.color_dark) : hexToRgb(myData.Comp.call2action.color),\r\n  8: call2action_link = 1 == darkmode ? hexToRgb(myData.Comp.call2action_link.color_dark) : hexToRgb(myData.Comp.call2action_link.color),\r\n  10: call2action_cursor = 1 == darkmode ? hexToRgb(myData.Comp.call2action.cursor_color_dark) : hexToRgb(myData.Comp.call2action.cursor_color),\r\n  11: call2action_cursor_stroke = 1 == darkmode ? hexToRgb(myData.Comp.call2action.cursor_stroke_dark) : hexToRgb(myData.Comp.call2action.cursor_stroke),\r\n  13: logo_bg = hexToRgb(myData.Comp.logo_bg_color),\r\n  15: source = 1 == darkmode ? hexToRgb(myData.Comp.source.color_dark) : hexToRgb(myData.Comp.source.color),\r\n  16: source_bg = 1 == darkmode ? hexToRgb(myData.Comp.source.bg_color_dark) : hexToRgb(myData.Comp.source.bg_color),\r\n  18: white = hexToRgb(\"ffffff\"),\r\n  19: black = hexToRgb(\"000000\")\r\n};\r\n\r\ncomponents[option];\x00tdmn\x00\x00\x00(ADBE Effect Built In Params\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x036tdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x1CUtf8\x00\x00\x00\x13Compositing Options\x00tdmn\x00\x00\x00(ADBE Effect Mask Parade\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00Vtdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0EUtf8\x00\x00\x00\x06-_0_/-tdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Effect Mask Opacity\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00FAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0EUtf8\x00\x00\x00\x06-_0_/-tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00]\u00A8?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\b\t\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(@Y\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Force CPU GPU\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0EUtf8\x00\x00\x00\x06-_0_/-tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x02\x00\x04\x00\x00]\u00A8?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pgui\x00\x00\x00\x10\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Fill\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x15\x04sspcfnam\x00\x00\x00\fUtf8\x00\x00\x00\x04FillLIST\x00\x00\x07lparTparn\x00\x00\x00\x04\x00\x00\x00\ttdmn\x00\x00\x00(ADBE Fill-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00<\x00\x00\u009C\u0094':\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x0F\x00\x00\x00\x00\x00\x00\x00\u00CC\u00B48itdmn\x00\x00\x00(ADBE Fill-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\fFill Mask\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00B\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00<\x00\x00\u009C\u0094':\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x0F\x00\x00\x00\x00\x00\x00\x00\u00CC\u00B48itdmn\x00\x00\x00(ADBE Fill-0007\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00<\x00\x00\u009C\u0094':\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x0F\x00\x00\x00\x00\x00\x00\x00\u00CC\u00B48ipdnm\x00\x00\x00\x12Utf8\x00\x00\x00\tAll Masks\x00tdmn\x00\x00\x00(ADBE Fill-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x05Color\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00B2\u008E;\u00FF\u00FF\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00<\x00\x00\u009C\u0094':\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x0F\x00\x00\x00\x00\x00\x00\x00\u00CC\u00B48itdmn\x00\x00\x00(ADBE Fill-0006\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00<\x00\x00\u009C\u0094':\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x0F\x00\x00\x00\x00\x00\x00\x00\u00CC\u00B48ipdnm\x00\x00\x00\x0EUtf8\x00\x00\x00\x06Inverttdmn\x00\x00\x00(ADBE Fill-0003\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00 \x00\x00\x00\x00\x00\x00\x00\x02Horizontal Feather\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00 \x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x03\u00E7\x00\x00\x00\x00\x00\x00\x002\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00tdmn\x00\x00\x00(ADBE Fill-0004\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00 \x00\x00\x00\x00\x00\x00\x00\x02Vertical Feather\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00 \x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x03\u00E7\x00\x00\x00\x00\x00\x00\x002\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00tdmn\x00\x00\x00(ADBE Fill-0005\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02Opacity\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x01\x00\x00\x00\x01\x00\x01tdmn\x00\x00\x00(ADBE Effect Built In Params\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\t\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\rXtdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x14Utf8\x00\x00\x00\x0B_color_fill\x00tdmn\x00\x00\x00(ADBE Fill-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00ECtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x03tdsn\x00\x00\x00\bUtf8\x00\x00\x00\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00]\u00A8?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdpi\x00\x00\x00\x04\x00\x00\x00\x11tdps\x00\x00\x00\x04\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Fill-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00EAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x12Utf8\x00\x00\x00\tFill Mask\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00]\u00A8?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdli\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE Fill-0007\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DEtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x12Utf8\x00\x00\x00\tAll Masks\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x04\x00\x00]\u00A8?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Fill-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x01:tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0EUtf8\x00\x00\x00\x05Color\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x04\x00\x07\x00\x01\x00\x02\u00FF\u00FF\x00\x00]\u00A8?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00cdat\x00\x00\x00`@o\u00E0\x00\x00\x00\x00\x00@o\u00E0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00Utf8\x00\x00\x00\x1Feffect(\"COLOR_FILL\")(\"preview\")\x00tdmn\x00\x00\x00(ADBE Fill-0006\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0EUtf8\x00\x00\x00\x06Inverttdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x04\x00\x00]\u00A8?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Fill-0003\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x01\x06tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x1AUtf8\x00\x00\x00\x12Horizontal Feathertdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00]\u00A8?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x06\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@I\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Fill-0004\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x01\x04tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x18Utf8\x00\x00\x00\x10Vertical Feathertdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00]\u00A8?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x06\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@I\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Fill-0005\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00FCtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x10Utf8\x00\x00\x00\x07Opacity\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00]\u00A8?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x06\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b?\u00F0\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Effect Built In Params\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x036tdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x1CUtf8\x00\x00\x00\x13Compositing Options\x00tdmn\x00\x00\x00(ADBE Effect Mask Parade\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00Vtdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0EUtf8\x00\x00\x00\x06-_0_/-tdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Effect Mask Opacity\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00FAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0EUtf8\x00\x00\x00\x06-_0_/-tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00]\u00A8?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\b\t\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(@Y\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Force CPU GPU\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0EUtf8\x00\x00\x00\x06-_0_/-tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x02\x00\x04\x00\x00]\u00A8?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pgui\x00\x00\x00\x10\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.1-c000 79.b0f8be9, 2021/12/08-19:11:22        \">\n   <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n      <rdf:Description rdf:about=\"\"\n            xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\n            xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\"\n            xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\"\n            xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\">\n         <dc:format>application/vnd.adobe.aftereffects.preset-animation</dc:format>\n         <xmp:CreatorTool>Adobe Photoshop 23.2 (20220118.orig.521 930aa48)  (Windows)</xmp:CreatorTool>\n         <xmp:CreateDate>2023-12-01T22:27:16+01:00</xmp:CreateDate>\n         <xmp:MetadataDate>2023-12-01T22:27:16+01:00</xmp:MetadataDate>\n         <xmp:ModifyDate>2023-12-01T22:27:16+01:00</xmp:ModifyDate>\n         <xmpMM:InstanceID>xmp.iid:7a5199ee-8430-124d-80ef-9cd22747aa81</xmpMM:InstanceID>\n         <xmpMM:DocumentID>xmp.did:7a5199ee-8430-124d-80ef-9cd22747aa81</xmpMM:DocumentID>\n         <xmpMM:OriginalDocumentID>xmp.did:7a5199ee-8430-124d-80ef-9cd22747aa81</xmpMM:OriginalDocumentID>\n         <xmpMM:History>\n            <rdf:Seq>\n               <rdf:li rdf:parseType=\"Resource\">\n                  <stEvt:action>created</stEvt:action>\n                  <stEvt:instanceID>xmp.iid:7a5199ee-8430-124d-80ef-9cd22747aa81</stEvt:instanceID>\n                  <stEvt:when>2023-12-01T22:27:16+01:00</stEvt:when>\n                  <stEvt:softwareAgent>Adobe Photoshop 23.2 (20220118.orig.521 930aa48)  (Windows)</stEvt:softwareAgent>\n               </rdf:li>\n            </rdf:Seq>\n         </xmpMM:History>\n      </rdf:Description>\n   </rdf:RDF>\n</x:xmpmeta>\n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                           \n<?xpacket end=\"w\"?>"
  }
  var pseudoEffect = applyPseudoEffect(pseudoEffectData, app.project.activeItem.selectedLayers[0].property("ADBE Effect Parade"));
  var layer = app.project.activeItem.layer(1);
  layer.applyPreset(File("~/Desktop/__COLOR_FILL.ffx"));
  alert("COLOR_FILL added!");


  function applyPseudoEffect(pseudoEffectData, effectsProp) {
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

    if (!effectsProp.canAddProperty(pseudoEffectData.matchName)) {
      ffxFile = writeFile(Folder.desktop.fsName + "/" + pseudoEffectData.name + ".ffx", pseudoEffectData.binary, "BINARY");
      makePseudoEffectLive(ffxFile);
    }

    pseudoEffect = effectsProp.addProperty(pseudoEffectData.matchName);
    return pseudoEffect;
  }
}

//Open Project Folder
function openProjectFolder() {
  var prjPath = app.project.file;
  if (prjPath) {
    var prjFldr = new Folder(prjPath.fsName).path;
    if ($.os.substr(0, 7).toLowerCase() == "windows") {
      prjFldr = prjFldr + "\\";
    }
    else {
      prjFldr = prjFldr + "/"
    }

    var f = Folder(prjFldr);
    f.execute();
  }
  else alert("Save the project first");
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
    var footageFolder = new Folder(projectFolder.fullName + "/(Footage)/Footage/" + fileExtension);

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

function modifyJSONdata() {
  // Get the colors from the color fill effect on the layer
  var accentColor = app.project.item(35).layer("debug_layer").effect("debug_SETTINGS")("accent_color").value;
  var titleColor = app.project.item(35).layer("debug_layer").effect("debug_SETTINGS")("title_color").value;
  var subtextColor = app.project.item(35).layer("debug_layer").effect("debug_SETTINGS")("subtext_color").value;
  var bgColor = app.project.item(35).layer("debug_layer").effect("debug_SETTINGS")("bg_color").value;
  var logoBgColor = app.project.item(35).layer("debug_layer").effect("debug_SETTINGS")("logo_bg_color").value;
  var call2a_color = app.project.item(35).layer("debug_layer").effect("debug_SETTINGS")("c2a_color").value;
  var cursor_color = app.project.item(35).layer("debug_layer").effect("debug_SETTINGS")("cursor_color").value;
  var c2a_link_color = app.project.item(35).layer("debug_layer").effect("debug_SETTINGS")("c2a_link_color").value;
  var source_color = app.project.item(35).layer("debug_layer").effect("debug_SETTINGS")("source_color").value;

  // JSON-Datei aktualisieren
  var projectPath = app.project.file.path; // Get the path of the After Effects project
  var jsonFilePath = projectPath + "/(footage)/footage/json/input_template.json"; // Adjust the JSON file path

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
  existingJson.Comp.logo_bg_color = rgbToHex(logoBgColor);
  existingJson.Comp.accent.color = rgbToHex(accentColor);
  existingJson.Comp.title.color = rgbToHex(titleColor);
  existingJson.Comp.subtext.color = rgbToHex(subtextColor);
  existingJson.Comp.bg.color = rgbToHex(bgColor);
  existingJson.Comp.call2action.color = rgbToHex(call2a_color);
  existingJson.Comp.call2action.cursor_color.color = rgbToHex(cursor_color);
  existingJson.Comp.call2action_link.color = rgbToHex(c2a_link_color);
  existingJson.Comp.source.color = rgbToHex(source_color);

  // Write updated JSON back to the file
  var jsonString = JSON.stringify(existingJson, null, 2);
  file.open("w");
  file.write(jsonString);
  file.close();
  alert("JSON DATA UPDATED ");
}

// Testing and debugging function
function testAndDebug() {
  // Call the function to get active layer information
  removeSpecificExpressions();
  // Function to remove expressions from all properties of a layer
  // Call the function
  // You can add additional test and debug code here
  // For example, you can log messages to the JavaScript Console
  $.writeln("Testing and debugging...");

  // You can also use the alert function to display messages
  // alert("Testing and debugging...");

  // Add more test and debug code as needed
}


btn_createComps.onClick = function () {
  var duration = 15; // Set the duration of the composition in seconds
  var name = prompt("What should the new template be called?", ""); // Set the name of the composition
  var type = "comp_";
  // Check if the user entered a name
  if (name !== null && name !== "") {
    createCompSet(duration, name, type);
  } else {
    // Alert the user that a name is required
    alert("A name is required for the new template");
  }
};

btn_createIMGComps.onClick = function () {
  var duration = 1 / 30; // Set the duration of the composition in seconds
  var name = prompt("What should the new template be called?", ""); // Set the name of the composition
  var type = "post_";
  // Check if the user entered a name
  if (name !== null && name !== "") {
    createCompSet(duration, name, type);
  } else {
    // Alert the user that a name is required
    alert("A name is required for the new template");
  }
};

colorFill.onClick = function () {
  setColorFill();
};

scale2fill.onClick = function () {
  scaleToFillComp();
};

btn_addElement.onClick = function () {
  var selectedIndex = elementsDropDown.selection.index;
  var result = elementsDropDown_result[selectedIndex];
  var sourceCompName = "_ELEMENTS";
  copyLayerToActiveComp(sourceCompName, result);
};

btn_addGallery.onClick = function () {
  var ratioIndex = ratio.selection.index;
  var ratioresult = ratio_result[ratioIndex];
  var ratioAdd = ratio_resultIndexAdd[ratioIndex];
  var selectedIndex = gallery.selection.index + ratioAdd;
  var result = gallery_result[selectedIndex];
  copyLayerToActiveComp(ratioresult, result);
};

fitView.onClick = function () {
  (function () {
    var zoom = 0.5;
    var activeComp = app.project.activeItem;

    if (activeComp && activeComp instanceof CompItem) {
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

    // Additional zoom adjustments based on keyboard modifiers
    if (ScriptUI.environment.keyboardState.altKey === true) {
      zoom *= 2; // Double zoom if Alt key is pressed
    }
    if (ScriptUI.environment.keyboardState.shiftKey === true) {
      zoom /= 2; // Halve zoom if Shift key is pressed
    }

    // Set the zoom value
    app.activeViewer.views[0].options.zoom = zoom;
  })();
};

delExp.onClick = function () {
  removeSpecificExpressions();
};

openProjectInExplorer.onClick = function () {
  openProjectFolder();
};

openFootageFolder.onClick = function () {
  openSubfolderInProject("(Footage)/Footage");
};

openJSONFolder.onClick = function () {
  openSubfolderInProject("(Footage)/Footage/json");
};

btn_import.onClick = function () {
  importAndCopyFile();
};

btn_debug_colors.onClick = function () {
  app.beginUndoGroup("modifyJSONdata");
  modifyJSONdata();
  app.endUndoGroup();
};