var scriptName = "moelles mojo";
"object" != typeof JSON && (JSON = {}), function () { "use strict"; var rx_one = /^[\],:{}\s]*$/, rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, rx_four = /(?:^|:|,)(?:\s*\[)+/g, rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta, rep; function f(t) { return t < 10 ? "0" + t : t } function this_value() { return this.valueOf() } function quote(t) { return rx_escapable.lastIndex = 0, rx_escapable.test(t) ? '"' + t.replace(rx_escapable, (function (t) { var e = meta[t]; return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4) })) + '"' : '"' + t + '"' } function str(t, e) { var r, n, o, u, f, a = gap, i = e[t]; switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(t)), "function" == typeof rep && (i = rep.call(e, t, i)), typeof i) { case "string": return quote(i); case "number": return isFinite(i) ? String(i) : "null"; case "boolean": case "null": return String(i); case "object": if (!i) return "null"; if (gap += indent, f = [], "[object Array]" === Object.prototype.toString.apply(i)) { for (u = i.length, r = 0; r < u; r += 1)f[r] = str(r, i) || "null"; return o = 0 === f.length ? "[]" : gap ? "[\n" + gap + f.join(",\n" + gap) + "\n" + a + "]" : "[" + f.join(",") + "]", gap = a, o } if (rep && "object" == typeof rep) for (u = rep.length, r = 0; r < u; r += 1)"string" == typeof rep[r] && (o = str(n = rep[r], i)) && f.push(quote(n) + (gap ? ": " : ":") + o); else for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (o = str(n, i)) && f.push(quote(n) + (gap ? ": " : ":") + o); return o = 0 === f.length ? "{}" : gap ? "{\n" + gap + f.join(",\n" + gap) + "\n" + a + "}" : "{" + f.join(",") + "}", gap = a, o } } "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () { return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null }, Boolean.prototype.toJSON = this_value, Number.prototype.toJSON = this_value, String.prototype.toJSON = this_value), "function" != typeof JSON.stringify && (meta = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" }, JSON.stringify = function (t, e, r) { var n; if (gap = "", indent = "", "number" == typeof r) for (n = 0; n < r; n += 1)indent += " "; else "string" == typeof r && (indent = r); if (rep = e, e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length)) throw new Error("JSON.stringify"); return str("", { "": t }) }), "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) { var j; function walk(t, e) { var r, n, o = t[e]; if (o && "object" == typeof o) for (r in o) Object.prototype.hasOwnProperty.call(o, r) && (void 0 !== (n = walk(o, r)) ? o[r] = n : delete o[r]); return reviver.call(t, e, o) } if (text = String(text), rx_dangerous.lastIndex = 0, rx_dangerous.test(text) && (text = text.replace(rx_dangerous, (function (t) { return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4) }))), rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({ "": j }, "") : j; throw new SyntaxError("JSON.parse") }) }();
function createDockableUI(thisObj) {
    var dialog =
        thisObj instanceof Panel ?
            thisObj :
            new Window("window", undefined, undefined, {
                su1PanelCoordinates: false,
                borderless: false,
                resizeable: true,
                minimizeButton: true,
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
var mojoUI = {
    assetsFolder: File($.fileName).parent.fsName + slash,
    backgroundColor: hexToArray("#1e1e20")
};
mojoUI.imagesFolder = mojoUI.assetsFolder + "_img";
mojoUI.setFG = function (e, t) {
    return (
        void 0 !== t &&
        3 <= t.length &&
        (e.graphics.foregroundColor = e.graphics.newPen(
            e.graphics.PenType.SOLID_COLOR,
            t,
            1
        )),
        e
    );
};
mojoUI.setBG = function (e, t) {
    return (
        void 0 !== t &&
        3 <= t.length &&
        (e.graphics.backgroundColor = e.graphics.newBrush(
            e.graphics.BrushType.SOLID_COLOR,
            t
        )),
        e
    );
};
mojoUI.createIcon = function (fileName) {
    if (!fileName) {
        fileName = "noIcon";
    }
    var imagePath = mojoUI.imagesFolder + slash + fileName + ".png";
    if (!File(imagePath).exists) {
        showAlertWindow("File doesn't exist\n" + imagePath);
        fileName = "noIcon.png";
    }
    return ScriptUI.newImage(File(imagePath));
};
//Paste code
// WIN
// ===
var win = createDockableUI(this);
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
    name: "root",
});
root.orientation = "row";
root.minimumSize.width = 284;
root.alignChildren = ["fill", "fill"];
root.spacing = 0;
root.margins = 5;
// TPANEL1
// =======
var tpanel1 = root.add("tabbedpanel", undefined, undefined, {
    name: "tpanel1",
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
    name: "tab_template",
});
tab_template.text = "TEMPLATE";
tab_template.orientation = "column";
tab_template.alignChildren = ["fill", "fill"];
tab_template.spacing = 0;
tab_template.margins = 0;
// GROUP1
// ======
var group1 = tab_template.add("group", undefined, {
    name: "group1",
});
group1.orientation = "row";
group1.alignChildren = ["fill", "fill"];
group1.spacing = 10;
group1.margins = 12;
group1.alignment = ["fill", "top"];
var btn_createComps = group1.add(
    "iconbutton",
    undefined,
    mojoUI.createIcon("icn_vidt"), {
    name: "btn_createComps",
    style: "button"
}
);
btn_createComps.alignment = ["left", "top"];
btn_createComps.minimumSize.width = 118;
btn_createComps.preferredSize.height = 32;
var btn_createIMGComps = group1.add(
    "iconbutton",
    undefined,
    mojoUI.createIcon("icn_imgt"), {
    name: "btn_createIMGComps",
    style: "button"
}
);
btn_createIMGComps.alignment = ["left", "top"];
btn_createIMGComps.minimumSize.width = 118;
btn_createIMGComps.preferredSize.height = 32;
// TPANEL2
// =======
var tpanel2 = tab_template.add("tabbedpanel", undefined, undefined, {
    name: "tpanel2",
});
tpanel2.alignChildren = ["fill", "top"];
tpanel2.alignment = ["fill", "top"];
tpanel2.minimumSize.width = 280;
tpanel2.margins = 0;
tpanel2.spacing = 0;
// TAB2
// ====
var tab2 = tpanel2.add("tab", undefined, undefined, {
    name: "tab2",
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
    name: "grouptab2",
});
grouptab2.orientation = "row";
grouptab2.alignChildren = ["fill", "center"];
grouptab2.spacing = 10;
grouptab2.margins = 3;
grouptab2.alignment = ["fill", "top"];
var btn_addElement = grouptab2.add(
    "iconbutton",
    undefined,
    mojoUI.createIcon("icn_addele"), {
    name: "btn_addElement",
    style: "button"
}
);
btn_addElement.preferredSize.height = 32;
btn_addElement.preferredSize.width = 150;
btn_addElement.alignment = ["fill", "top"];
var divider3 = tab2.add("panel", undefined, undefined, {
    name: "divider3",
});
divider3.alignment = "fill";
// GROUP2
// ======
var group2 = tab2.add("group", undefined, {
    name: "group2",
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
    "gallery_img_1920_06",
];
var gallery_array = [
    "GALLERY_01",
    "GALLERY_02",
    "GALLERY_03",
    "GALLERY_04",
    "GALLERY_05",
    "GALLERY_06",
];
var gallery = group2.add("dropdownlist", undefined, undefined, {
    name: "gallery",
    items: gallery_array,
});
gallery.selection = 0;
gallery.preferredSize.height = 32;
gallery.preferredSize.width = 112;
var btn_addGallery = group2.add(
    "iconbutton",
    undefined,
    mojoUI.createIcon("icn_add"), {
    name: "btn_addGallery",
    style: "button"
}
);
btn_addGallery.preferredSize.height = 32;
btn_addGallery.preferredSize.width = 50;
btn_addGallery.alignment = ["left", "top"];
// tab_AP
// ====
var tab_ap = tpanel2.add("tab", undefined, undefined, {
    name: "tab_ap",
});
tab_ap.text = "ANCHOR POINT";
tab_ap.orientation = "row";
tab_ap.spacing = 12;
tab_ap.margins = 10;
// groupAP
// ======
var groupAP = tab_ap.add("group", undefined, {
    name: "groupAP",
});
groupAP.orientation = "column";
groupAP.spacing = 10;
groupAP.margins = 3;
// groupAP2
// ======
var groupAP2 = tab_ap.add("group", undefined, {
    name: "groupAP",
});
groupAP2.orientation = "column";
groupAP2.alignChildren = ["left", "top"];
groupAP2.alignment = ["left", "top"];
groupAP2.spacing = 10;
groupAP2.margins = 3;
var apText = groupAP2.add("statictext", undefined, undefined, {
    name: "apText",
    multiline: true,
});
apText.text = "change the Anchor Point of selected layer(s)";
apText.preferredSize.height = 40;
apText.preferredSize.width = 135;
mojoUI.setFG(apText, [1, 1, 1, 0.65]);
var apText2 = groupAP2.add("statictext", undefined, undefined, {
    name: "apText2",
});
apText2.text = "lock Anchor Point:";
apText2.preferredSize.height = 20;
mojoUI.setFG(apText2, [1, 1, 1, 0.65]);
var w = tab_ap;
// create a group
w.g = groupAP;
w.orientation = "row";
var ap_circ_imgString =
    "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%18%00%00%00%18%08%06%00%00%00%C3%A0w%3D%C3%B8%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%00%C2%98IDATH%C2%89%C3%AD%C3%941%0E%C2%830%0C%C2%85%C3%A1%3F%15W%C2%A0c%C3%A1%00%C2%A5j%C2%87%C3%9E%7Fg%C2%8A%04%07%20%2B%3DD%18%C2%9A%C2%A5Cb%0B%0BU%08%C2%BCEy%C3%B1'Eq%5C%C2%8C%C2%91-%C3%AB%C2%B2i%C3%B7%138%06P)27%C3%A0%01%5C%C3%93z%06%06%20h%00'%C3%8C%C3%81%1Bxe%C3%B6%3C%C3%90K%40%C3%A9%C2%8A%C2%9ABs%C2%80g%C3%8A%C2%AC%06%3A%C3%A9%C2%B0%26S%02j%05%20f%C2%AC%C2%AF%C3%88Y%C2%80%C2%8F%02%C2%98-%C3%80%C2%A0%00F%0B%10%C3%B8%3E%C3%85%5Cy%60%C2%92%00i%0E%00Z%C3%A0%C3%8E%C3%AF%C2%A0%C2%8D%C2%9A%C3%A6Z%C3%80T%C3%BB%C3%BF%C3%ACN%C3%A0%C3%BF%C3%80%02%25%C2%9B%1C%24tY%5B%0D%00%00%00%00IEND%C2%AEB%60%C2%82";
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
    style: "toolbutton",
});
w.g.tg.tm = w.g.tg.add("iconbutton", [24, 0, 48, 24], tmi, {
    style: "toolbutton",
});
w.g.tg.tr = w.g.tg.add("iconbutton", [48, 0, 72, 24], tri, {
    style: "toolbutton",
});
// middle row
w.g.mg = w.g.add("group", [0, 24, 96, 48]);
w.g.mg.orientation = "row";
w.g.mg.tl = w.g.mg.add("iconbutton", [0, 0, 24, 24], mli, {
    style: "toolbutton",
});
w.g.mg.tm = w.g.mg.add("iconbutton", [24, 0, 48, 24], mmi, {
    style: "toolbutton",
});
w.g.mg.tr = w.g.mg.add("iconbutton", [48, 0, 72, 24], mri, {
    style: "toolbutton",
});
// bottom row
w.g.bg = w.g.add("group", [0, 48, 96, 72]);
w.g.bg.orientation = "row";
w.g.bg.tl = w.g.bg.add("iconbutton", [0, 0, 24, 24], bli, {
    style: "toolbutton",
});
w.g.bg.tm = w.g.bg.add("iconbutton", [24, 0, 48, 24], bmi, {
    style: "toolbutton",
});
w.g.bg.tr = w.g.bg.add("iconbutton", [48, 0, 72, 24], bri, {
    style: "toolbutton",
});

// this is the ignore masks checkbox
w.im = 0;
apCheck = groupAP2.add("checkbox", undefined, undefined, {
    name: "apCheck",
});
apCheck.text = "set expression";
addTooltipToButton(
    apCheck,
    "check if you want to set the anchor point for elements, that change its size. Just like text layers for example.",
    60,
    false,
    true
);
// tab_fx
// ====
var tab_fx = tpanel2.add("tab", undefined, undefined, {
    name: "tab_fx",
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
    name: "groupFx",
});
groupFx.orientation = "row";
groupFx.alignChildren = ["fill", "top"];
groupFx.spacing = 10;
groupFx.margins = 3;
groupFx.alignment = ["fill", "top"];
var groupFx2 = tab_fx.add("group", undefined, {
    name: "groupFx2",
});
groupFx2.orientation = "row";
groupFx2.alignChildren = ["left", "top"];
groupFx2.spacing = 10;
groupFx2.margins = 3;
groupFx2.alignment = ["fill", "top"];
var colorFill = groupFx.add(
    "iconbutton",
    undefined,
    mojoUI.createIcon("icn_colorfill"), {
    name: "colorFill",
    style: "button"
}
);
colorFill.preferredSize.height = 32;
colorFill.preferredSize.width = 116;
colorFill.alignment = ["left", "top"];
var scale2fill = groupFx.add(
    "iconbutton",
    undefined,
    mojoUI.createIcon("icn_scalefill"), {
    name: "scale2fill",
    style: "button"
}
);
scale2fill.preferredSize.height = 32;
scale2fill.preferredSize.width = 116;
scale2fill.alignment = ["left", "top"];
var addAnimbtn = groupFx2.add(
    "iconbutton",
    undefined,
    mojoUI.createIcon("icn_addanim"), {
    name: "addAnimbtn",
    style: "button"
}
);
addAnimbtn.preferredSize.height = 32;
addAnimbtn.preferredSize.width = 116;
addAnimbtn.alignment = ["left", "top"];

var bendbtn = groupFx2.add(
    "iconbutton",
    undefined,
    mojoUI.createIcon("icn_bendbtn"), {
    name: "bendbtn",
    style: "button"
}
);
bendbtn.preferredSize.height = 32;
bendbtn.preferredSize.width = 116;
bendbtn.alignment = ["left", "top"];

// tab_files
// ====
var tab_files = tpanel1.add("tab", undefined, undefined, {
    name: "tab_files",
});
tab_files.text = "FILES";
tab_files.orientation = "column";
tab_files.alignChildren = ["fill", "top"];
tab_files.margins = 0;
// files_wrapper
// ======
var files_wrapper = tab_files.add("group", undefined, undefined, {
    name: "files_wrapper",
});
files_wrapper.orientation = "column";
files_wrapper.alignChildren = ["left", "fill"];
files_wrapper.spacing = 20;
files_wrapper.margins = 12;
files_wrapper.alignment = ["fill", "top"];
var btn_import = files_wrapper.add(
    "iconbutton",
    undefined,
    mojoUI.createIcon("icn_importfootage"), {
    name: "btn_import",
    style: "button"
}
);
btn_import.alignment = ["left", "top"];
btn_import.preferredSize.height = 34;
btn_import.preferredSize.width = 240;
var divider2 = files_wrapper.add("panel", undefined, undefined, {
    name: "divider2",
});
divider2.alignment = "fill";
var btn_organize = files_wrapper.add(
    "iconbutton",
    undefined,
    mojoUI.createIcon("icn_orgproject"), {
    name: "btn_organize",
    style: "button"
}
);
btn_organize.alignment = ["left", "top"];
btn_organize.preferredSize.height = 34;
btn_organize.preferredSize.width = 240;
var btn_cleanup = files_wrapper.add(
    "iconbutton",
    undefined,
    mojoUI.createIcon("icn_projectcleanup"), {
    name: "btn_cleanup",
    style: "button"
}
);
btn_cleanup.alignment = ["left", "top"];
btn_cleanup.preferredSize.height = 34;
btn_cleanup.preferredSize.width = 240;
// tab_tools
// ====
var tab_tools = tpanel1.add("tab", undefined, undefined, {
    name: "tab_tools",
});
tab_tools.text = "CONFIG JSON";
tab_tools.orientation = "column";
tab_tools.alignChildren = ["fill", "top"];
tab_tools.spacing = 0;
tab_tools.margins = 0;
// CONFIGPANEL
// ===========
var configPanel = tab_tools.add("tabbedpanel", undefined, undefined, {
    name: "configPanel",
});
configPanel.alignChildren = ["fill", "fill"];
configPanel.alignment = ["fill", "fill"];
configPanel.minimumSize.width = 280;
configPanel.margins = 0;
// CONFIGCOLORS
// ============
var configColors = configPanel.add("tab", undefined, undefined, {
    name: "configColors",
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
    name: "configText",
});
configText.text = "TEXT";
configText.preferredSize.height = 34;
configText.orientation = "column";
configText.alignChildren = ["left", "top"];
configText.spacing = 10;
configText.margins = 12;
// CONFIGDEMOPACKS
// ===============
var configDemos = configPanel.add("tab", undefined, undefined, {
    name: "configDemos",
});
configDemos.text = "DEMO PACKS";
configDemos.preferredSize.height = 34;
configDemos.orientation = "column";
configDemos.alignChildren = ["left", "top"];
configDemos.spacing = 10;
configDemos.margins = 12;
var demoInfoTxt = configDemos.add("statictext", undefined, undefined, {
    name: "demoInfoTxt",
});
demoInfoTxt.text = "different configurations to test your template";
demoInfoTxt.preferredSize.height = 20;
mojoUI.setFG(demoInfoTxt, [1, 1, 1, 0.65]);
// DEMOGRP1
// ========
var demoGrp1 = configDemos.add("group", undefined, { name: "demoGrp1" });
demoGrp1.orientation = "row";
demoGrp1.alignChildren = ["left", "top"];
demoGrp1.spacing = 10;
demoGrp1.margins = 0;
var demo1grp = demoGrp1.add("group", undefined, {
    name: "demo1grp",
});
var demo1 = buttonColorText(demo1grp, "01", "#503a07", "#A1750F");
demo1.preferredSize.width = 55;
var demo2grp = demoGrp1.add("group", undefined, {
    name: "demo2grp",
});
var demo2 = buttonColorText(demo2grp, "02", "#104173", "#2083e6");
demo2.preferredSize.width = 55;
var demo3grp = demoGrp1.add("group", undefined, {
    name: "demo3grp",
});
var demo3 = buttonColorText(demo3grp, "03", "#513269", "#A364D2");
demo3.preferredSize.width = 55;
var demo4grp = demoGrp1.add("group", undefined, {
    name: "demo4grp",
});
var demo4 = buttonColorText(demo4grp, "04", "#7f291a", "#e0462c");
demo4.preferredSize.width = 55;
// DEMOGRP2
// ========
var demoGrp2 = configDemos.add("group", undefined, { name: "demoGrp2" });
demoGrp2.orientation = "row";
demoGrp2.alignChildren = ["left", "top"];
demoGrp2.spacing = 10;
demoGrp2.margins = 0;
var demo5grp = demoGrp2.add("group", undefined, {
    name: "demo5grp",
});
var demo5 = buttonColorText(demo5grp, "05", "#755b06", "#EBB70D");
demo5.preferredSize.width = 55;
var demo6grp = demoGrp2.add("group", undefined, {
    name: "demo6grp",
});
var demo6 = buttonColorText(demo6grp, "06", "#00422b", "#00a950");
demo6.preferredSize.width = 55;
var demo7grp = demoGrp2.add("group", undefined, {
    name: "demo7grp",
});
var demo7 = buttonColorText(demo7grp, "07", "#5b2e1c", "#b65c38");
demo7.preferredSize.width = 55;
var demo8grp = demoGrp2.add("group", undefined, {
    name: "demo8grp",
});
var demo8 = buttonColorText(demo8grp, "08", "#690717", "#d30f2f");
demo8.preferredSize.width = 55;
// DEMOGRP3
// ========
var demoGrp3 = configDemos.add("group", undefined, { name: "demoGrp3" });
demoGrp3.orientation = "row";
demoGrp3.alignChildren = ["left", "top"];
demoGrp3.spacing = 10;
demoGrp3.margins = 0;
var btn_demos = configDemos.add(
    "iconbutton",
    undefined,
    mojoUI.createIcon("icn_demopacks"), {
    name: "btn_import",
    style: "button"
}
);
btn_demos.alignment = ["left", "top"];
btn_demos.preferredSize.height = 34;
btn_demos.preferredSize.width = 240;
// tools_wrapper
// ======
var tools_txt_wrapper = configColors.add("group", undefined, {
    name: "tools_txt_wrapper",
});
tools_txt_wrapper.orientation = "column";
tools_txt_wrapper.alignChildren = ["fill", "fill"];
tools_txt_wrapper.spacing = 0;
tools_txt_wrapper.margins = [0, 0, 0, 0];
tools_txt_wrapper.alignment = ["fill", "top"];
var tools_wrapper = configColors.add("group", undefined, {
    name: "tools_wrapper",
});
tools_wrapper.orientation = "row";
tools_wrapper.alignChildren = ["fill", "fill"];
tools_wrapper.spacing = 5;
tools_wrapper.margins = 0;
tools_wrapper.alignment = ["fill", "top"];
var tools_wrapper_l = tools_wrapper.add("group", undefined, {
    name: "tools_wrapper_l",
});
tools_wrapper_l.orientation = "column";
tools_wrapper_l.alignChildren = ["fill", "fill"];
tools_wrapper_l.spacing = 10;
tools_wrapper_l.margins = 0;
tools_wrapper_l.alignment = ["fill", "top"];
// EDIT_TEXT_WRAPPER
// =================
var edit_text_wrapper = configText.add("group", undefined, {
    name: "edit_text_wrapper",
});
edit_text_wrapper.orientation = "column";
edit_text_wrapper.alignChildren = ["fill", "top"];
edit_text_wrapper.spacing = 10;
edit_text_wrapper.margins = [0, 0, 0, 0];
edit_text_wrapper.alignment = ["fill", "top"];
var editTextTxt = edit_text_wrapper.add("statictext", undefined, undefined, {
    name: "editTextTxt",
});
editTextTxt.text = "Add a custom text and apply it to an element";
editTextTxt.preferredSize.height = 20;
mojoUI.setFG(editTextTxt, [1, 1, 1, 0.65]);
var edittext1 = edit_text_wrapper.add(
    'edittext {properties: {name: "edittext1", multiline: false, scrollable: false, borderless: false}}'
);
// Set the initial placeholder text
edittext1.preferredSize.height = 32;
edittext1.alignment = ["fill", "top"];
// EDIT_TEXT_GROUP
// ===============
var edit_text_group = edit_text_wrapper.add("group", undefined, {
    name: "edit_text_group",
});
edit_text_group.orientation = "row";
edit_text_group.alignChildren = ["fill", "fill"];
edit_text_group.spacing = 10;
edit_text_group.margins = 0;
var btn_title = edit_text_group.add(
    "iconbutton",
    undefined,
    mojoUI.createIcon("icn_title"), {
    name: "btn_title"
}
);
btn_title.alignment = ["left", "fill"];
btn_title.preferredSize.width = 60;
btn_title.preferredSize.height = 32;
var btn_subtext = edit_text_group.add(
    "iconbutton",
    undefined,
    mojoUI.createIcon("icn_subtext"), {
    name: "btn_subtext"
}
);
btn_subtext.alignment = ["left", "fill"];
btn_subtext.preferredSize.width = 80;
btn_subtext.preferredSize.height = 32;
var btn_source = edit_text_group.add(
    "iconbutton",
    undefined,
    mojoUI.createIcon("icn_source"), {
    name: "btn_source"
}
);
btn_source.alignment = ["left", "fill"];
btn_source.preferredSize.width = 80;
btn_source.preferredSize.height = 32;
// EDIT_TEXT_GROUP1
// ================
var edit_text_group1 = edit_text_wrapper.add("group", undefined, {
    name: "edit_text_group1",
});
edit_text_group1.orientation = "row";
edit_text_group1.alignChildren = ["fill", "fill"];
edit_text_group1.spacing = 10;
edit_text_group1.margins = 0;
var btn_c2a = edit_text_group1.add(
    "iconbutton",
    undefined,
    mojoUI.createIcon("icn_c2a"), {
    name: "btn_c2a"
}
);
btn_c2a.alignment = ["left", "fill"];
btn_c2a.preferredSize.width = 60;
btn_c2a.preferredSize.height = 32;
var btn_c2alink = edit_text_group1.add(
    "iconbutton",
    undefined,
    mojoUI.createIcon("icn_c2alink"), {
    name: "btn_c2alink"
}
);
btn_c2alink.alignment = ["left", "fill"];
btn_c2alink.preferredSize.width = 80;
btn_c2alink.preferredSize.height = 32;
var tools_wrapper_r = tools_wrapper.add("group", undefined, {
    name: "tools_wrapper_r",
});
tools_wrapper_r.orientation = "column";
tools_wrapper_r.alignment = ["fill", "top"];
tools_wrapper_r.alignChildren = ["left", "fill"];
tools_wrapper_r.spacing = 10;
tools_wrapper_r.margins = 0;
var statictext2 = tools_txt_wrapper.add("statictext", undefined, undefined, {
    name: "statictext2",
});
statictext2.text = "click edit colors first;";
statictext2.preferredSize.height = 20;
mojoUI.setFG(statictext2, [1, 1, 1, 0.65]);
var statictext3 = tools_txt_wrapper.add("statictext", undefined, undefined, {
    name: "statictext3",
});
statictext3.text = "(if you dont see the effect controls, hit F3)";
statictext3.preferredSize.height = 20;
mojoUI.setFG(statictext3, [1, 1, 1, 0.65]);
var statictext4 = tools_txt_wrapper.add("statictext", undefined, undefined, {
    name: "statictext4",
});
statictext4.text = "";
statictext4.preferredSize.height = 5;
var btn_openAndSelect = tools_wrapper_l.add(
    "iconbutton",
    undefined,
    mojoUI.createIcon("icn_editcolors"), {
    name: "btn_openAndSelect",
    style: "button"
}
);
btn_openAndSelect.alignment = ["left", "top"];
btn_openAndSelect.preferredSize.height = 32;
btn_openAndSelect.preferredSize.width = 130;
var btn_debug_colors = tools_wrapper_l.add(
    "iconbutton",
    undefined,
    mojoUI.createIcon("icn_applyem"), {
    name: "btn_debug_colors",
    style: "button"
}
);
btn_debug_colors.alignment = ["left", "top"];
btn_debug_colors.preferredSize.height = 32;
btn_debug_colors.preferredSize.width = 130;
var btn_reload_json = tools_wrapper_r.add(
    "iconbutton",
    undefined,
    mojoUI.createIcon("icn_refresh"), {
    name: "btn_reload_json",
    style: "toolbutton"
}
);
btn_reload_json.alignment = ["left", "top"];
btn_reload_json.preferredSize.height = 32;
btn_reload_json.minimumSize.width = 32;
btn_reload_json.preferredSize.width = 105;
btn_reload_json.text = "REFRESH ";
var btn_revert_json = tools_wrapper_r.add(
    "iconbutton",
    undefined,
    mojoUI.createIcon("icn_revert"), {
    name: "btn_revert_json",
    style: "toolbutton"
}
);
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
shortcuts.spacing = 4;
shortcuts.margins = [2, 0, 0, 0];
shortcuts.preferredSize.height = 40;
var openBoilerplate = shortcuts.add(
    "iconbutton",
    undefined,
    mojoUI.createIcon("icn_aep"), {
    name: "openProjectInExplorer",
    style: "toolbutton"
}
);
openBoilerplate.alignment = ["center", "top"];
var changeProjectName = shortcuts.add(
    "iconbutton",
    undefined,
    mojoUI.createIcon("icn_rename"), {
    name: "changeProjectName",
    style: "toolbutton"
}
);
changeProjectName.alignment = ["center", "top"];
var openProjectInExplorer = shortcuts.add(
    "iconbutton",
    undefined,
    mojoUI.createIcon("icn_folder"), {
    name: "openProjectInExplorer",
    style: "toolbutton"
}
);
openProjectInExplorer.alignment = ["center", "top"];
var fitView = shortcuts.add(
    "iconbutton",
    undefined,
    mojoUI.createIcon("icn_screenshot"), {
    name: "fitView",
    style: "toolbutton"
}
);
fitView.alignment = ["center", "top"];
var delExp = shortcuts.add(
    "iconbutton",
    undefined,
    mojoUI.createIcon("icn_del"), {
    name: "delExp",
    style: "toolbutton"
}
);
delExp.alignment = ["center", "top"];
var purgeAll = shortcuts.add(
    "iconbutton",
    undefined,
    mojoUI.createIcon("icn_bin"), {
    name: "purgeAll",
    style: "toolbutton"
}
);
purgeAll.alignment = ["center", "top"];
var btn_renderQ = shortcuts.add(
    "iconbutton",
    undefined,
    mojoUI.createIcon("icn_renderq"), {
    name: "btn_renderQ",
    style: "toolbutton"
}
);
btn_renderQ.alignment = ["center", "top"];
var btn_about = shortcuts.add(
    "iconbutton",
    undefined,
    mojoUI.createIcon("icn_help"), {
    name: "btn_about",
    style: "toolbutton"
}
);
btn_about.alignment = ["center", "top"];
// add Obj / RIGHT ICON SIDEBAR
// ======
var addObj = root.add("group", undefined, {
    name: "addObj"
});

addObj.orientation = "column";
addObj.alignChildren = ["left", "top"];
addObj.alignment = ["left", "top"];
addObj.minimumSize.width = 16;
addObj.spacing = 1;
addObj.margins = 1;
// Example buttons
var buttonArray = [
    addObj.add("iconbutton", undefined, mojoUI.createIcon("icn_textl"), {
        name: "textLayer",
        style: "toolbutton"
    }),
    addObj.add("iconbutton", undefined, mojoUI.createIcon("icn_solid"), {
        name: "solidLayer",
        style: "toolbutton"
    }),
    addObj.add("iconbutton", undefined, mojoUI.createIcon("icn_shape"), {
        name: "shapeLayer",
        style: "toolbutton"
    }),
    addObj.add("iconbutton", undefined, mojoUI.createIcon("icn_adjust"), {
        name: "adjustmentsLayer",
        style: "toolbutton"
    }),
    addObj.add("iconbutton", undefined, mojoUI.createIcon("icn_null"), {
        name: "nullLayer",
        style: "toolbutton"
    }),
    addObj.add("iconbutton", undefined, mojoUI.createIcon("icn_p2n"), {
        name: "parent2null",
        style: "toolbutton"
    })
];
var textLayer = buttonArray[0];
var solidLayer = buttonArray[1];
var shapeLayer = buttonArray[2];
var adjustmentsLayer = buttonArray[3];
var nullLayer = buttonArray[4];
var parent2null = buttonArray[5];

function deselectAll() {
    var activeComp = app.project.activeItem;
    if (activeComp && activeComp instanceof CompItem) {
        var selectedLayers = activeComp.selectedLayers;
        for (var i = 0; i < selectedLayers.length; i++) {
            selectedLayers[i].selected = false;
        }
    }
}
/// INCLUDES
try {
    //@include '_scripts/rectangleWizard.jsx';
    //@include '_scripts/bend.jsx';
    //@include '_scripts/elementsDiag.jsx';
    //@include '_scripts/organizeProjectAssets.jsx';
    //@include '_scripts/projectCleanup.jsx';
    //@include '_scripts/moveAnchorPoint.jsx';
} catch (err) {
    showAlertWindow(err.toString());
}
/// INCLUDES END
(function () {
    if (!checkSecurityPrefSet()) {
        return false;
    } else {
        showWindow(win);
    }
})();
function checkSecurityPrefSet() {
    if (!isSecurityPrefSet()) {
        if (parseFloat(app.version) >= 16.1) {
            prefDialog();
            app.executeCommand(3131);
        } else {
            prefDialog();
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
        var securitySetting = app.preferences.getPrefAsLong(
            "Main Pref Section",
            "Pref_SCRIPTING_FILE_NETWORK_SECURITY"
        );
        return securitySetting == 1;
    } catch (err) {
        return (securitySetting = 1);
    }
}
function refreshCurrentFrame() {
    var comp = app.project.activeItem;
    if (comp !== null && (comp instanceof CompItem)) {
        comp.motionBlur = !comp.motionBlur;
        comp.motionBlur = !comp.motionBlur;
    }
}
////
/** convert a #ff00ff color string to a normalized RGBA color array
    @parem {hexString} - string - hex string
*/
function hexToArray(hexString) {
    var hexColor = hexString.replace("#", "");
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
        try {
            // Try opening the URL with Google Chrome
            system.callSystem('cmd /c "' +
                'start chrome ' +   // Use 'start chrome' to open the URL with Google Chrome
                url +
                '"');
        } catch (chromeError) {
            try {
                // If Chrome fails, attempt to open with Internet Explorer
                system.callSystem(
                    'cmd /c "' +
                    Folder.commonFiles.parent.fsName +
                    "\\Internet Explorer\\iexplore.exe" +
                    '" ' +
                    url
                );
            } catch (ieError) {
                // Handle any errors that may occur
                alert('Error: Unable to open the URL in either Chrome or Internet Explorer.');
            }
        }
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
        if (this.fillBrush) {
            this.graphics.fillPath(this.fillBrush);
        }
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

function txtDrawLeft() {
    try {
        this.graphics.drawOSControl();
        this.graphics.rectPath(0, 0, this.size[0], this.size[1]);
        if (this.fillBrush) {
            this.graphics.fillPath(this.fillBrush);
        }
    } catch (err) {
        // fail silently
    }
    if (this.text) {
        var extraWidth = 30; // Additional space to add to the width
        var offsetX = 10; // Offset to move the text to the right

        var textWidth = this.graphics.measureString(this.text, this.graphics.font, this.size[0])[0];
        var xPosition = (this.size[0] - textWidth - extraWidth) / 2 + offsetX;

        this.graphics.drawString(
            this.text,
            this.textPen,
            xPosition,
            (this.size[1] - this.graphics.measureString(this.text, this.graphics.font, this.size[0])[1]) / 1.75,
            this.graphics.font
        );
    }
}
/** draw an text button with a colored background - returns a button object
    @parem {parentObj} - object - ScriptUI panel or group
    @parem {buttonText} - string - button text
    @parem {staticColor} - string - icon color when static
    @parem {hoverColor} - string - icon color when hovered (optional)
*/
function buttonColorText(parentObj, buttonText, staticColor, hoverColor, leftAlign, textSize, whitetxt) {
    var btn = parentObj.add("button", undefined, "", {
        name: "ok"
    }); // add a basic button to style
    btn.spacing = 0;
    btn.margins = 0;
    btn.fillBrush = btn.graphics.newBrush(
        btn.graphics.BrushType.SOLID_COLOR,
        hexToArray(staticColor)
    );
    var textC = "#93989F";
    if (whitetxt) { textC = "#E1E1E1" }

    btn.text = buttonText.toUpperCase();
    btn.textPen = btn.graphics.newPen(
        btn.graphics.PenType.SOLID_COLOR,
        hexToArray(textC),
        1
    );
    var fontSize = 11;
    if (textSize) { fontSize = textSize };
    btn.graphics.font = ScriptUI.newFont("Arial", "Bold", fontSize);
    if (leftAlign) { btn.onDraw = txtDrawLeft; }
    else { btn.onDraw = txtDraw; }
    if (hoverColor) {
        try {
            btn.addEventListener("mouseover", function () {
                updateTextButtonOnHover(this, buttonText, hoverColor, "#FFFFFF", leftAlign);
            });
            btn.addEventListener("mouseout", function () {
                updateTextButtonOnHover(this, buttonText, staticColor, textC, leftAlign);
            });
        } catch (err) {
            // fail silently
        }
    }
    return btn;
}
function updateTextButtonOnHover(btn, buttonText, backgroundColor, textColor, leftAlign, textSize) {
    btn.fillBrush = btn.graphics.newBrush(
        btn.graphics.BrushType.SOLID_COLOR,
        hexToArray(backgroundColor)
    );
    btn.text = buttonText.toUpperCase();
    btn.textPen = btn.graphics.newPen(
        btn.graphics.PenType.SOLID_COLOR,
        hexToArray(textColor),
        1
    );
    var fontSize = 11;
    if (textSize) { fontSize = textSize };
    btn.graphics.font = ScriptUI.newFont("Arial", "Bold", fontSize);
    if (leftAlign) { btn.onDraw = txtDrawLeft; }
    else { btn.onDraw = txtDraw; }
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
            coordinates[j][0] = parseFloat(coordinates[j][0]);
            coordinates[j][1] = parseFloat(coordinates[j][1]);
        }
        points.push(coordinates);
    }
    return points;
}
function vecDraw() {
    this.graphics.drawOSControl();
    this.graphics.rectPath(0, 0, this.size[0], this.size[1]);
    this.graphics.fillPath(
        this.graphics.newBrush(this.graphics.BrushType.SOLID_COLOR, [0, 0, 0, 0.15])
    );
    try {
        for (var i = 0; i < this.coord.length; i++) {
            var line = this.coord[i];
            this.graphics.newPath();
            this.graphics.moveTo(
                line[0][0] + (this.size[0] / 2 - this.artSize[0] / 2),
                line[0][1] + (this.size[1] / 2 - this.artSize[1] / 2)
            );
            for (var j = 0; j < line.length; j++) {
                this.graphics.lineTo(
                    line[j][0] + (this.size[0] / 2 - this.artSize[0] / 2),
                    line[j][1] + (this.size[1] / 2 - this.artSize[1] / 2)
                );
            }
            this.graphics.fillPath(
                this.graphics.newBrush(
                    this.graphics.BrushType.SOLID_COLOR,
                    hexToArray(this.iconColor)
                )
            );
        }
    } catch (e) { }
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
        } catch (err) {
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

function prefDialog() {
    var dialog = new Window("dialog");
    dialog.text = "moelles mojo needs write access to work";
    dialog.orientation = "column";
    dialog.alignChildren = ["center", "top"];
    dialog.spacing = 10;
    dialog.margins = 6;
    mojoUI.setBG(dialog, [0.1, 0.1, 0.1]);
    var image1 = dialog.add("image", undefined, mojoUI.createIcon("pref_info"), { name: "pref_info" });
    var prefInfoGrp = dialog.add("group", undefined, { name: "prefInfoGrp" });
    prefInfoGrp.orientation = "column";
    prefInfoGrp.alignChildren = ["center", "center"];
    prefInfoGrp.spacing = 14;
    prefInfoGrp.margins = 12;
    prefInfoGrp.alignment = ["fill", "top"];
    var statictext1 = prefInfoGrp.add("group", undefined, { name: "statictext1" });
    statictext1.getText = function () { var t = []; for (var n = 0; n < statictext1.children.length; n++) { var text = statictext1.children[n].text || ''; if (text === '') text = ' '; t.push(text); } return t.join('\n'); };
    statictext1.preferredSize.width = 580;
    statictext1.orientation = "column";
    statictext1.alignChildren = ["center", "center"];
    statictext1.spacing = 0;
    statictext1.add("statictext", undefined, "This script requires access to write files. Open After Effects 'Preferences' -> 'Scripting and");
    statictext1.add("statictext", undefined, "Expressions' and make sure 'Allow Scripts to Write Files and Access Network' is checked.");
    // Customize text color
    statictext1.graphics.foregroundColor = statictext1.graphics.newPen(
        statictext1.graphics.PenType.SOLID_COLOR, [0.83, 0.94, 1, 0.75], 1);
    var okButton = buttonColorText(prefInfoGrp, "OK, OPEN SETTINGS   ", "#0060b1", "#028def", false, 11);
    okButton.preferredSize.height = 32;
    okButton.onClick = function () {
        dialog.close();
    };
    dialog.show();
}
btn_about.onClick = function (e) {
    // open about panel
    var dialog = new Window("dialog", "About " + scriptName);
    dialog.orientation = "column";
    dialog.alignChildren = ["center", "top"];
    dialog.spacing = 19;
    dialog.margins = 0;
    mojoUI.setBG(dialog, mojoUI.backgroundColor);
    var gg_img = dialog.add("image", undefined, mojoUI.createIcon("about_head"), { name: "" });
    var statictext1 = dialog.add("group", undefined, { name: "statictext1" });
    statictext1.getText = function () { var t = []; for (var n = 0; n < statictext1.children.length; n++) { var text = statictext1.children[n].text || ''; if (text === '') text = ' '; t.push(text); } return t.join('\n'); };
    statictext1.preferredSize.width = 530;
    statictext1.orientation = "column";
    statictext1.alignChildren = ["center", "center"];
    statictext1.spacing = 0;
    statictext1.add("statictext", undefined, "moelles mojo is a little helper to make the creation and debugging of templates for");
    statictext1.add("statictext", undefined, "the GetGenius Creatives System, more efficient and less pain in the a**.");
    // Customize text color
    statictext1.graphics.foregroundColor = statictext1.graphics.newPen(statictext1.graphics.PenType.SOLID_COLOR, [0.97, 0.97, 1, 0.95], 1);
    var statictext2 = dialog.add("statictext", undefined, undefined, { name: "statictext2" });
    statictext2.text = "Created by Manuel Moellmann, Head of Design at ITNT Group";
    statictext2.preferredSize.width = 508;
    statictext2.justify = "center";
    statictext2.graphics.foregroundColor = statictext2.graphics.newPen(statictext2.graphics.PenType.SOLID_COLOR, [0.83, 0.94, 1, 0.75], 1);
    var prefInfoGrp = dialog.add("group", undefined, { name: "prefInfoGrp" });
    prefInfoGrp.orientation = "column";
    prefInfoGrp.alignChildren = ["center", "center"];
    prefInfoGrp.spacing = 0;
    prefInfoGrp.margins = 20;
    prefInfoGrp.alignment = ["fill", "top"];
    var okButton = buttonColorText(prefInfoGrp, "CHECK FOR UPDATES", "#0060b1", "#028def", true, 11, true);
    okButton.preferredSize.height = 30;

    gg_img.addEventListener("mouseover", function () {
        gg_img.image = mojoUI.createIcon("about_head_hov");
    });
    gg_img.addEventListener("mouseout", function () {
        gg_img.image = mojoUI.createIcon("about_head");
    });

    okButton.onClick = function () {
        visitURL("https://github.com/moelle89/GG_AE_SCRIPTING/releases");
        dialog.close();
    };
    gg_img.addEventListener("click", function () { visitURL("https://github.com/moelle89/GG_AE_SCRIPTING/releases") });
    dialog.show();
}
///
function getCurrentMousePosition(event, width) {
    var customWidth;
    if (width) {
        customWidth = width;
    } else {
        customWidth = buttonsSize;
    }
    var cSpacing = customWidth * 0.5;
    return win.orientation == "column" ?
        [
            event.screenX - event.clientX + customWidth + cSpacing,
            event.screenY - event.clientY - buttonsSize,
        ] :
        [
            event.screenX - event.clientX,
            event.screenY - event.clientY + buttonsSize + cSpacing,
        ];
}
function getMousePosition(event) {
    return win.orientation == "column" ?
        [
            event.screenX - event.clientX + buttonsSize + 7,
            event.screenY - event.clientY - buttonsSize,
        ] :
        [
            event.screenX - event.clientX,
            event.screenY - event.clientY + buttonsSize + 7,
        ];
}
function showCustomTooltip(text, coordinates, width, invert, multiline, isIMG) {
    if (multiline) {
        multiline = true;
    } else {
        multiline = false;
    }
    var customWidth;
    var negativX;
    if (width) {
        customWidth = width * 0.75;
        if (invert) {
            negativX = width * 3.75;
        } else {
            negativX = width * 1.5;
        }
    } else {
        customWidth = buttonsSize;
        negativX = 0;
    }
    tooltipWin = new Window("palette", "tooltip", undefined, {
        borderless: true,
        closeButton: false,
        maximizeButton: false,
        minimizeButton: false,
        resizeable: false,
        title: "tooltip",
    });
    tooltipWin.margins = 5;
    tooltipWin.spacing = 5;
    mojoUI.setBG(tooltipWin, [0.05, 0.05, 0.05]);
    var panel = tooltipWin.add("group", undefined, "");
    if ((typeof text === "string") && (!isIMG)) {
        var staticText = panel.add("statictext", undefined, text, {
            multiline: multiline,
        });
        if (multiline) {
            staticText.maximumSize.width = 232;
        }
        panel.spacing = 4;
        panel.margins = 6;
        // Customize text color
        staticText.graphics.foregroundColor = staticText.graphics.newPen(
            staticText.graphics.PenType.SOLID_COLOR,
            [0.78, 0.78, 0.78, 1],
            1
        );
    };
    if (isIMG) {
        panel.spacing = 0;
        panel.margins = 0;
        var pIMG = mojoUI.createIcon(text);
        panel.add("iconbutton", undefined, pIMG, {
            name: "name",
            style: "toolbutton"
        })
        //var hoverImg = panel.add("image", undefined, text, {name: ""});
    };
    //staticText.graphics.foregroundColor = staticText.graphics.newPen(staticText.graphics.PenType.SOLID_COLOR, [1, 1, 1]); // RGB color [R, G, B]
    tooltipWin.show();
    tooltipWin.frameLocation =
        win.orientation == "column" ?
            [coordinates[0] - negativX, coordinates[1] + customWidth] :
            [coordinates[0], coordinates[1]];
    return tooltipWin;
}
function addTooltipToButton(button, tooltipText, width, invert, multiline, isIMG) {
    button.addEventListener("mouseover", function (e) {
        var coordinates = getCurrentMousePosition(e, width);
        tooltipWin = showCustomTooltip(
            tooltipText,
            coordinates,
            width,
            invert,
            multiline,
            isIMG
        );
    });
    button.addEventListener("mouseout", function (e) {
        try {
            if (tooltipWin) {
                tooltipWin.close();
            }
        } catch (err) { showAlertWindow(err.toString()) }
    });
}
// Example tooltips
var tooltipTextArray = [
    "add a text layer to active comp",
    "add a solid layer to active comp",
    "add a shape layer to active comp",
    "add an adjustment layer to active comp",
    "add a null layer to active comp",
    "parent selected objects to a null layer",
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
            title: this.title,
        });
        mojoUI.setBG(hoverMenuWin, [0.095, 0.095, 0.095]);
        hoverMenuWin.margins = 0;
        hoverMenuWin.spacing = 0;
        var panel = hoverMenuWin.add("group", undefined, "");
        panel.orientation = "column";
        panel.alignment = ["left", "fill"];
        panel.alignChildren = ["fill", "center"];
        panel.spacing = 2;
        panel.margins = 6;
        // Create an array to store button objects
        var buttonsArray = [];
        for (var i = 0; i < this.buttonsData.length; i++) {
            var buttonData = this.buttonsData[i];
            // Create btn_grp
            var btn_grp = panel.add("group", undefined, {
                name: "btn_grp",
            }); // Assign a unique name based on buttonData.name
            btn_grp.orientation = "row";
            btn_grp.alignment = ["fill", "center"];
            btn_grp.alignChildren = ["left", "fill"];
            // Create btn_icon
            var btn_icon = buttonColorText(
                btn_grp,
                buttonData.text,
                "#191919",
                "#000000",
                true
            );
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
        hoverMenuWin.frameLocation =
            win.orientation == "column" ?
                [coordinates[0], coordinates[1]] :
                [coordinates[0], coordinates[1] + 10];
        mousePosGlobal = hoverMenuWin.frameLocation;
        hoverMenuWin.show();
        return hoverMenuWin;
    };
}
// hoverMenu_purge
function purge_imagec() {
    app.executeCommand(2372);
    showAlertWindow("Image-Cache cleared");
}
function purge_discc() {
    app.executeCommand(10200);
    //alert("Disc-Cache cleared");
}
// Create instances of HoverMenu with different data
var hoverMenu_purge = new HoverMenu("hoverMenu_purge", [{
    imgString: "",
    text: "Clean local Image-Cache",
    name: "purge_imagec",
    functionName: purge_imagec
},
{
    imgString: "",
    text: "Clean Disc-Cache",
    name: "purge_discc",
    functionName: purge_discc
}
]);
// Create instances of HoverMenu with different data
var hoverMenu_screenShot = new HoverMenu("hoverMenu_screenShot", [{
    imgString: "",
    text: "Screenshot of active Comp",
    name: "saveFrameAsPNG",
    functionName: saveFrameAsPNG
},
{
    imgString: "",
    text: "Screenshot of sel. Comps",
    name: "saveSelectedCompsAsPNG",
    functionName: saveSelectedCompsAsPNG
}
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
var hoverMenu_open = new HoverMenu("hoverMenu_open", [{
    imgString: "",
    text: "Open Project Folder",
    name: "open_prjct",
    functionName: open_prjct
},
{
    imgString: "",
    text: "Open Footage Folder",
    name: "open_footage",
    functionName: open_footage
},
{
    imgString: "",
    text: "Open JSON Folder",
    name: "open_json",
    functionName: open_json
}
]);
var renderQQQ = false;
function openRenderQueuePanel() {
    app.project.renderQueue.showWindow(true);
    if (renderQQQ) {
        app.project.renderQueue.showWindow(false);
        renderQQQ = false;
        if (hoverMenuWin) {
            hoverMenuWin.close();
            try {
                hoverMenuWin.hide();
                delete hoverMenuWin;
            } catch (e) { }
        }
        return
    }
    renderQQQ = true;
}
function add_renderq() {
    app.executeCommand(3984);
}
function clean_renderQ() {
    // Get the current Render Queue
    var renderQueue = app.project.renderQueue;

    // Remove all items from the Render Queue
    while (renderQueue.numItems > 0) {
        renderQueue.item(1).remove();
    }
}
// Create instances of HoverMenu with different data
var hoverMenu_renderqueue = new HoverMenu("hoverMenu_renderqueue", [{
    imgString: "",
    text: "Open Render-Queue",
    name: "openrenderq",
    functionName: openRenderQueuePanel
},
{
    imgString: "",
    text: "Add to Render-Queue",
    name: "add_to_renderq",
    functionName: add_renderq
},
{
    imgString: "",
    text: "Clear Render-Queue",
    name: "clean_renderQ",
    functionName: clean_renderQ
}
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
    };
    if (hoverMenuWin) {
        hoverMenuWin.addEventListener("mouseout", function (e) {
            hoverMenuWin.close();
        });
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
    var jssFolder = new Folder(
        Folder.myDocuments.fsName +
        "/Adobe/After Effects 20" +
        app.buildName.substr(0, 2) +
        "/User Presets/mojo"
    );
    if (!jssFolder.exists) jssFolder.create();
    ffxFile = writeFile(
        jssFolder.fsName + "/" + pseudoEffectData.name + ".ffx",
        pseudoEffectData.binary,
        "BINARY"
    );
    makePseudoEffectLive(ffxFile);
    pseudoEffect = null;
    return pseudoEffect;
}
// Function to find the index of a composition by name
function findComp(theName) {
    for (var i = 1; i <= app.project.numItems; i++) {
        if (
            app.project.item(i) instanceof CompItem &&
            app.project.item(i).name == theName
        ) {
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
        if (app.project.item(i) && app.project.item(i).name == theName) {
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
    showAlertWindow(prop.name + " - " + prop.matchName);
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
    showAlertWindow(matches);
    return matches;
}
function containsVariableString(string) {
    for (var i = 1; i <= app.project.numItems; i++) {
        if (app.project.item(i) instanceof CompItem) {
            var itemName = app.project.item(i).name;
            if (itemName.match(string)) {
                return true; // If a variable string is found, return true
            }
        }
    }
    return false; // No variable string found in any project item
}
// Function to check if names are already used in the project
function areNamesUsed(name1, name2, name3) {
    // Get the current project
    var curProject = app.project;
    // Loop through each item in the project
    for (var i = 1; i <= curProject.numItems; i++) {
        var curItem = curProject.item(i);
        // Check if the name matches any of the given names
        if (
            curItem.name === name1 ||
            curItem.name === name2 ||
            curItem.name === name3
        ) {
            return true; // Name already exists for some project item
        }
    }
    return false; // None of the given names exist in the project
}
// Create Solid Layer
function createSolid(layerName) {
    var activeComp = app.project.activeItem;
    if (checkComp(activeComp)) {
        if (layerName == "default") {
            solidName = "mojo Solid";
        } else {
            solidName = layerName;
        }
        var newSolid = activeComp.layers.addSolid(
            [0, 0, 0],
            solidName,
            activeComp.width,
            activeComp.height,
            1
        );
        var myItem = getItem("input_template.json");
        if (myItem && myItem.mainSource) {
            setColorFill();
        } else {
            var fillSolid = newSolid
                .property("ADBE Effect Parade")
                .addProperty("ADBE Fill");
            fillSolid.property("ADBE Fill-0002").setValue(hexToArray("#305CC0"));
        }
    } else {
        return;
    }
}
// Function to copy a layer from a source composition to the active composition
function copyLayerToActiveComp(sourceCompName, layerName) {
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
                app.beginUndoGroup("Copy Layer to Comp");
                // Duplicate the layer to the active composition
                sourceComp.layer(layerName).copyToComp(activeComp);
                var copiedLayer = activeComp.layer(layerName);
                var offsetX = activeComp.width / 2;
                var offsetY = activeComp.height / 2;
                if (layerName !== "LOGO_NEW" || "LOGO") {
                    copiedLayer.position.setValue([offsetX, offsetY]);
                }
                var selectedLayers = activeComp.selectedLayers;
                for (var i = 0; i < selectedLayers.length; i++) {
                    selectedLayers[i].selected = false;
                }
                copiedLayer.enabled = true;
                copiedLayer.selected = true;
                app.endUndoGroup();
                // Alert to notify that the layer has been copied
                //alert("Layer copied to active composition!");
                // Return the duplicated layer
            } else {
                showAlertWindow("Layer not found in the source composition.");
            }
        } else {
            showAlertWindow("Source composition not found.");
        }
    } else {
        showAlertWindow("Open a composition");
    }
}

// Function to copy a layer from a source composition to the active composition
function copyHiddenLayerToActiveComp(sourceCompName, layerName) {
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
                app.beginUndoGroup("Copy Layer to Comp");

                // Check if the layer already exists in the composition
                var existingLayer = null;
                for (var i = 1; i <= activeComp.numLayers; i++) {
                    if (activeComp.layer(i).name === layerName) {
                        existingLayer = activeComp.layer(i);
                        break;
                    }
                }

                if (!existingLayer) {
                    // If the layer doesn't exist, then copy it
                    sourceComp.layer(layerName).copyToComp(activeComp);
                    var copiedLayer = activeComp.layer(layerName);
                    // Move the copied layer to the bottom
                    copiedLayer.moveAfter(activeComp.layer(activeComp.numLayers));
                    var selectedLayers = activeComp.selectedLayers;
                    for (var i = 0; i < selectedLayers.length; i++) {
                        selectedLayers[i].selected = false;
                    }
                    // Alert to notify that the layer has been copied
                    //alert("Layer copied to active composition!");
                }
                app.endUndoGroup();
                // Return the duplicated layer or handle accordingly
            } else {
                showAlertWindow("Layer not found in the source composition.");
            }
        } else {
            showAlertWindow("Source composition not found.");
        }
    } else {
        showAlertWindow("Open a composition");
    }
}

// Function to copy an item from the Project Panel to the active composition by name
function copyItemToComposition(itemName) {
    // Get the active composition
    var activeComp = app.project.activeItem;

    // Check if there is an active composition
    if (activeComp) {
        // Search for the item in the Project Panel by name
        var projectItem = null;
        for (var i = 1; i <= app.project.numItems; i++) {
            if (app.project.item(i).name === itemName) {
                projectItem = app.project.item(i);
                break;
            }
        }

        // Check if the item was found
        if (projectItem) {
            // Duplicate the item to the active composition
            var duplicateItem = projectItem.duplicate();

            // Add the duplicated item to the active composition
            var layer = activeComp.layers.add(duplicateItem);

            // Center the layer in the composition
            layer.property("Anchor Point").setValue([activeComp.width / 2, activeComp.height / 2]);
            layer.property("Position").setValue([activeComp.width / 2, activeComp.height / 2]);
        } else {
            alert("Item not found in the Project Panel.");
        }
    } else {
        alert("No active composition found.");
    }
}
// Function to create a composition and add it to the project panel
function createComposition(width, height, duration, frameRate, name, silent) {
    // Create a new project if one doesn't exist
    var proj = app.project || app.newProject();
    // Create the composition
    var comp = proj.items.addComp(name, width, height, 1, duration, frameRate);
    // Alert to indicate successful creation, if not set to silent
    if (!silent) {
        showAlertWindow("Composition " + name + " created!");
    }
    // Return the created composition
    return comp;
}
function openCompositionByName(compName) {
    compIndex = findCompIndex(compName);
    app.project.item(compIndex).openInViewer();
    app.activeViewer.setActive();
    deselectAll(); // “Deselect All”
}
function openComposition(item) {
    item.openInViewer();
    app.activeViewer.setActive();
    deselectAll(); // “Deselect All”
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
        showAlertWindow(
            "That name already exists. Please choose a different name."
        );
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
        showAlertWindow("Please open a composition before running this script.");
    }
}
// Function to remove expressions from specific properties of a layer (Position, Scale, Opacity, Anchor Point, Rotation)
function removeSpecificExpressions() {
    try {
        var activeComp = app.project.activeItem;
        if (checkComp(activeComp)) {
            var comp = app.project.activeItem;
            if (comp.selectedLayers.length > 0) {
                var selectedLayer = comp.selectedLayers[0];
                // Array of property names to remove expressions from
                var propertiesToRemove = [
                    "Position",
                    "Scale",
                    "Opacity",
                    "Anchor Point",
                    "Rotation",
                ];
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
                showAlertWindow(
                    "Expressions removed from specified properties (Position, Scale, Opacity, Anchor Point, Rotation) of the selected layer."
                );
            } else {
                showAlertWindow("Please select a layer.");
            }
        } else {
            showAlertWindow("Please open a composition.");
        }
    } catch (error) {
        $.writeln(error);
    }
}
// Function to add specific expressions to properties of a layer (Anchor Point, Position, Scale)
function scaleToFillComp() {
    // Check if a composition is active
    var activeComp = app.project.activeItem;
    if (checkComp(activeComp)) {
        var comp = app.project.activeItem;
        // Check if a layer is selected
        if (comp.selectedLayers.length > 0) {
            var selectedLayer = comp.selectedLayers[0];
            // Object with property names and their corresponding expressions
            var propertiesToAdd = {
                "Anchor Point": "R = thisLayer.sourceRectAtTime(); T = R.top; L = R.left; W = R.width; H = R.height; [L+W/2,T+H/2]",
                Position: "[thisComp.width/2, thisComp.height/2]",
                Scale: "p = position; xScale = p[0] > thisComp.width/2 ? p[0]/(width/2) : (thisComp.width - p[0])/(width/2); yScale = p[1] > thisComp.height/2 ? p[1]/(height/2) : (thisComp.height - p[1])/(height/2); s = Math.max(xScale,yScale); [s,s]*100",
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
            showAlertWindow("Please select a layer.");
        }
    }
}
// ADD IN OUT ANIM + MARKERS
function addANIM() {
    if (app.project.activeItem == null) {
        showAlertWindow("Please open a composition.");
        return false;
    }
    var comp = app.project.activeItem;
    var selectedLayers = comp.selectedLayers;
    var numSelectedLayers = selectedLayers.length;
    if (numSelectedLayers < 1) {
        showAlertWindow("Please select a layer.");
        return false;
    }
    for (var j = 0; j < numSelectedLayers; j++) {
        var myLayer = selectedLayers[j];
        var inFrames = 20;
        var outFrames = 20;
        var interIn = "ease";
        var interOut = "ease";
        var markerProp = myLayer.property("Marker");
        for (var i = markerProp.numKeys; i >= 1; i--) {
            var marker = markerProp.keyValue(i);
            if (marker.comment && marker.comment.indexOf("Fade") === 0) {
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
        markS = 'markS = marker.key("' + markerStart.comment + '").time; \n';
        markSdur =
            'markSdur = marker.key("' + markerStart.comment + '").duration; \n';
        var markerEnd = new MarkerValue("ANIM OUT");
        markerEnd.duration = outFrames / Math.round(comp.frameRate);
        markerEnd.time = myLayer.outPoint - markerEnd.duration;
        myLayer.property("Marker").setValueAtTime(markerEnd.time, markerEnd);
        markE = 'markE = marker.key("' + markerEnd.comment + '").time; \n';
        markEdur =
            'markEdur = marker.key("' +
            markerEnd.comment +
            '").duration-framesToTime(1); \n';
        var intro =
            markS +
            markSdur +
            markE +
            markEdur +
            "outLayer = markE + markEdur; \n" +
            "stopT = markSdur + markS; \n" +
            "startT = markE; \n";
        var lineStart = interIn + "(time, markS, markS + markSdur, 0, 100);";
        var lineEnd = interOut + "(time, markE, markE + markEdur, 100, 0);";
        opening = lineStart;
        closing = lineEnd;
        var theExpression = "";
        theExpression =
            intro +
            "if (time < markS){ 0; } else if (time <= stopT) {" +
            opening +
            "} else if (time > stopT & time <= startT) { 100; } else if (time > startT & time <= markE + markEdur){" +
            closing +
            "} else { 0; }";
        // Add Slider Control effect
        var sliderControl = myLayer.Effects.addProperty("ADBE Slider Control");
        sliderControl.name = "ANIM"; // You can change the name if needed
        // Apply theExpression to the slider control value
        sliderControl.property("ADBE Slider Control-0001").expression =
            theExpression;
    }
}
// Function to add colorFill via script instead of preset file
function setColorFill() {
    if (app.project.activeItem instanceof CompItem) {
        var comp = app.project.activeItem;
        var filePath =
            Folder.myDocuments.fsName +
            "/Adobe/After Effects 20" +
            app.buildName.substr(0, 2) +
            "/User Presets/mojo/__COLOR_FILL.ffx";
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
                    binary: 'RIFX\x00\x00*\u008AFaFXhead\x00\x00\x00\x10\x00\x00\x00\x03\x00\x00\x00^\x00\x00\x00\x04\x01\t\x00\x00LIST\x00\x00*fbescbeso\x00\x00\x008\x00\x00\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\u0080\x00\x00\x02\x00\x00\x00\x00\x00\x00\x06\u009A\x03\u00D4\x06\u009A\x03\u00D4?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FFLIST\x00\x00\x00\u00ACtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x02LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE Effect Parade\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/177941\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdsn\x00\x00\x00\x12Utf8\x00\x00\x00\nCOLOR_FILLLIST\x00\x00\x00\u00ACtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x02LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE Effect Parade\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\x00\x00\x00\x01tdmn\x00\x00\x00(ADBE Fill\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdsn\x00\x00\x00\x14Utf8\x00\x00\x00\x0B_color_fill\x00LIST\x00\x00\x00dtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x01LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE End of path sentinel\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x13\x04sspcfnam\x00\x00\x00\bUtf8\x00\x00\x00\x00LIST\x00\x00\x03\u00E8parTparn\x00\x00\x00\x04\x00\x00\x00\x04tdmn\x00\x00\x00(Pseudo/177941-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00BF\x00\x00\u009C\u0094\u00AF\u00D3\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x0F\x00\x00\x00\x00\x00\x00\x00\u00D8b\u00F5\u00F1tdmn\x00\x00\x00(Pseudo/177941-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x07pick your color\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x13\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00BF\x00\x00\u009C\u0094\u00AF\u00D3\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x0F\x00\x00\x00\x00\x00\x00\x00\u00D8b\u00F5\u00F1pdnm\x00\x00\x00\u00A0Utf8\x00\x00\x00\u0098ACCENT|BG|(-|TITLE|SUBTEXT|(-|CALL2ACTION|CALL2ACTION_LINK|(-|CALL2ACTION_CURSOR|CALL2ACTION_CURSOR_STROKE|(-|LOGO_BG|(-|SOURCE|SOURCE_BG|(-|WHITE|BLACKtdmn\x00\x00\x00(Pseudo/177941-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x05preview\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00B2\u008E;\u00FF\u00B2\u008E;\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00BF\x00\x00\u009C\u0094\u00AF\u00D3\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x0F\x00\x00\x00\x00\x00\x00\x00\u00D8b\u00F5\u00F1tdmn\x00\x00\x00(ADBE Effect Built In Params\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\t\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x0E\u00E0tdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x12Utf8\x00\x00\x00\nCOLOR_FILLtdmn\x00\x00\x00(Pseudo/177941-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00ECtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x03tdsn\x00\x00\x00\bUtf8\x00\x00\x00\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00C0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdpi\x00\x00\x00\x04\x00\x00TRtdps\x00\x00\x00\x04\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/177941-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00E4tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x18Utf8\x00\x00\x00\x0Fpick your color\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/177941-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\b\u00A0tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x10Utf8\x00\x00\x00\x07preview\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x04\x00\x07\x00\x01\x00\x02\u00FF\u00FF\x00\x00\u0080\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00C0\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00cdat\x00\x00\x00`@o\u00E0\x00\x00\x00\x00\x00@f@\x00\x00\x00\x00\x00@a\u00C0\x00\x00\x00\x00\x00@M\u0080\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00Utf8\x00\x00\x07\u0084option = effect("COLOR_FILL")("pick your color");\r\n\r\nmyData = footage("input_template.json").sourceData;\r\ndarkmode = myData.Comp.darkmode;\r\n\r\n\r\nconst components = {\r\n  1: accent = 1 == darkmode ? hexToRgb(myData.Comp.accent.color_dark) : hexToRgb(myData.Comp.accent.color),\r\n  2: bg = 1 == darkmode ? hexToRgb(myData.Comp.bg.color_dark) : hexToRgb(myData.Comp.bg.color),\r\n  4: title = 1 == darkmode ? hexToRgb(myData.Comp.title.color_dark) : hexToRgb(myData.Comp.title.color),\r\n  5: subtext = 1 == darkmode ? hexToRgb(myData.Comp.subtext.color_dark) : hexToRgb(myData.Comp.subtext.color),\r\n  7: call2action = 1 == darkmode ? hexToRgb((!!myData.Comp.call2action.color_dark ? myData.Comp.call2action.color_dark : myData.Comp.title.color_dark)) : hexToRgb((!!myData.Comp.call2action.color ? myData.Comp.call2action.color : myData.Comp.title.color)),\r\n  8: call2action_link = 1 == darkmode ? hexToRgb(myData.Comp.call2action_link.color_dark) : hexToRgb(myData.Comp.call2action_link.color),\r\n  10: call2action_cursor = 1 == darkmode ? hexToRgb(myData.Comp.call2action.cursor_color_dark) : hexToRgb(myData.Comp.call2action.cursor_color),\r\n  11: call2action_cursor_stroke = 1 == darkmode ? hexToRgb(myData.Comp.call2action.cursor_stroke_dark) : hexToRgb(myData.Comp.call2action.cursor_stroke),\r\n  13: logo_bg = hexToRgb(myData.Comp.logo_bg_color),\r\n\t\r\n  15: source = 1 == darkmode ? hexToRgb((!!myData.Comp.source.color_dark ? myData.Comp.source.color_dark : myData.Comp.title.color_dark)) : hexToRgb((!!myData.Comp.source.color ? myData.Comp.source.color : myData.Comp.title.color)),\r\n  16: source_bg = 1 == darkmode ? hexToRgb((!!myData.Comp.source.bg_color_dark ? myData.Comp.source.bg_color_dark : myData.Comp.accent.color_dark)) : hexToRgb((!!myData.Comp.source.bg_color ? myData.Comp.source.bg_color : myData.Comp.accent.color)),\r\n  18: white = hexToRgb("ffffff"),\r\n  19: black = hexToRgb("000000")\r\n};\r\n\r\ncomponents[option];tdmn\x00\x00\x00(ADBE Effect Built In Params\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x036tdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x1CUtf8\x00\x00\x00\x13Compositing Options\x00tdmn\x00\x00\x00(ADBE Effect Mask Parade\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00Vtdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0EUtf8\x00\x00\x00\x06-_0_/-tdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Effect Mask Opacity\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00FAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0EUtf8\x00\x00\x00\x06-_0_/-tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\b\t\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(@Y\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Force CPU GPU\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0EUtf8\x00\x00\x00\x06-_0_/-tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x02\x00\x04\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pgui\x00\x00\x00\x10\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x15\x04sspcfnam\x00\x00\x00\fUtf8\x00\x00\x00\x04FillLIST\x00\x00\x07lparTparn\x00\x00\x00\x04\x00\x00\x00\ttdmn\x00\x00\x00(ADBE Fill-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00BF\x00\x00\u009C\u0094\u00AF\u00D3\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x0F\x00\x00\x00\x00\x00\x00\x00\u00D8b\u00F5\u00F1tdmn\x00\x00\x00(ADBE Fill-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\fFill Mask\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00B\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00BF\x00\x00\u009C\u0094\u00AF\u00D3\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x0F\x00\x00\x00\x00\x00\x00\x00\u00D8b\u00F5\u00F1tdmn\x00\x00\x00(ADBE Fill-0007\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00BF\x00\x00\u009C\u0094\u00AF\u00D3\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x0F\x00\x00\x00\x00\x00\x00\x00\u00D8b\u00F5\u00F1pdnm\x00\x00\x00\x12Utf8\x00\x00\x00\tAll Masks\x00tdmn\x00\x00\x00(ADBE Fill-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x05Color\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00B2\u008E;\u00FF\u00FF\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00BF\x00\x00\u009C\u0094\u00AF\u00D3\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x0F\x00\x00\x00\x00\x00\x00\x00\u00D8b\u00F5\u00F1tdmn\x00\x00\x00(ADBE Fill-0006\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00BF\x00\x00\u009C\u0094\u00AF\u00D3\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x0F\x00\x00\x00\x00\x00\x00\x00\u00D8b\u00F5\u00F1pdnm\x00\x00\x00\x0EUtf8\x00\x00\x00\x06Inverttdmn\x00\x00\x00(ADBE Fill-0003\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00 \x00\x00\x00\x00\x00\x00\x00\x02Horizontal Feather\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00 \x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x03\u00E7\x00\x00\x00\x00\x00\x00\x002\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00tdmn\x00\x00\x00(ADBE Fill-0004\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00 \x00\x00\x00\x00\x00\x00\x00\x02Vertical Feather\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00 \x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x03\u00E7\x00\x00\x00\x00\x00\x00\x002\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00tdmn\x00\x00\x00(ADBE Fill-0005\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02Opacity\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x01\x00\x00\x00\x01\x00\x01tdmn\x00\x00\x00(ADBE Effect Built In Params\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\t\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\rXtdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x14Utf8\x00\x00\x00\x0B_color_fill\x00tdmn\x00\x00\x00(ADBE Fill-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00ECtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x03tdsn\x00\x00\x00\bUtf8\x00\x00\x00\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00C0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdpi\x00\x00\x00\x04\x00\x00TRtdps\x00\x00\x00\x04\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Fill-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00EAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x12Utf8\x00\x00\x00\tFill Mask\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00C0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdli\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE Fill-0007\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DEtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x12Utf8\x00\x00\x00\tAll Masks\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x04\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Fill-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x01:tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0EUtf8\x00\x00\x00\x05Color\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x04\x00\x07\x00\x01\x00\x02\u00FF\u00FF\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00C0\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00cdat\x00\x00\x00`@o\u00E0\x00\x00\x00\x00\x00@o\u00E0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00Utf8\x00\x00\x00\x1Feffect("COLOR_FILL")("preview")\x00tdmn\x00\x00\x00(ADBE Fill-0006\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0EUtf8\x00\x00\x00\x06Inverttdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x04\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Fill-0003\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x01\x06tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x1AUtf8\x00\x00\x00\x12Horizontal Feathertdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x06\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@I\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Fill-0004\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x01\x04tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x18Utf8\x00\x00\x00\x10Vertical Feathertdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x06\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@I\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Fill-0005\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00FCtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x10Utf8\x00\x00\x00\x07Opacity\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x06\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b?\u00F0\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Effect Built In Params\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x036tdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x1CUtf8\x00\x00\x00\x13Compositing Options\x00tdmn\x00\x00\x00(ADBE Effect Mask Parade\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00Vtdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0EUtf8\x00\x00\x00\x06-_0_/-tdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Effect Mask Opacity\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00FAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0EUtf8\x00\x00\x00\x06-_0_/-tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\b\t\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(@Y\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Force CPU GPU\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0EUtf8\x00\x00\x00\x06-_0_/-tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x02\x00\x04\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pgui\x00\x00\x00\x10\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00',
                };
                var pseudoEffect = savePseudoEffect(pseudoEffectData);
                var layer = app.project.activeItem.layer(1);
                layer.applyPreset(myFile);
            }
        } else {
            showAlertWindow("Please select a layer.");
        }
    } else {
        showAlertWindow("Please open a composition.");
    }
}
//Open Project Folder
function openProjectFolder() {
    var prjPath = app.project.file;
    if (prjPath) {
        var prjFldr = new Folder(prjPath.fsName).path;
        if ($.os.substr(0, 7).toLowerCase() == "windows") {
            prjFldr = prjFldr + "\\";
        } else {
            prjFldr = prjFldr + "/";
        }
        var f = Folder(prjFldr);
        f.execute();
    } else showAlertWindow("Save the project first");
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
            var text = noFolderDialog.add(
                "statictext",
                undefined,
                "Subfolder '" + subfolderName + "' does not exist."
            );
            var textLabel = noFolderDialog.add(
                "statictext",
                undefined,
                "Do you want me to create the folder for you?"
            );
            // Add an "Accept" button to the dialog
            var acceptButton = noFolderDialog.add("button", undefined, "YES!");
            acceptButton.onClick = function () {
                // Perform your desired action here
                try {
                    subfolder.create();
                } catch (err) {
                    showAlertWindow("Error creating footage folder: " + err.toString());
                    // If there's an error creating the folder, exit the script
                    return;
                }
                noFolderDialog.close();
            };
            // Add a "Cancel" button to the dialog
            var cancelButton = noFolderDialog.add(
                "button",
                undefined,
                "NAH, I'm good."
            );
            cancelButton.onClick = function () {
                noFolderDialog.close();
            };
            noFolderDialog.show();
        }
        var f = Folder(subfolder);
        f.execute();
    } else {
        showAlertWindow("Save the project first");
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
        var fileExtension = fileToImport.name.split(".").pop().toLowerCase();
        // Get the footage folder
        var footageFolder = new Folder(
            projectFolder.fullName + "/(footage)/Footage/" + fileExtension
        );
        // Check if the footage folder exists, create it if not
        if (!footageFolder.exists) {
            try {
                footageFolder.create();
            } catch (err) {
                showAlertWindow("Error creating footage folder: " + err.toString());
                // If there's an error creating the folder, exit the script
                return;
            }
        }
        // Copy the selected file to the footage folder
        var copiedFilePath = footageFolder.fullName + "/" + fileToImport.name;
        try {
            fileToImport.copy(copiedFilePath);
        } catch (err) {
            showAlertWindow("Error copying file to footage folder: " + err.toString());
            // If there's an error copying the file, exit the script
            return;
        }
        // Remove the original imported file from the project
        importedFile.remove();
        // Import the copied file to replace the original import
        var copiedImportedFile = projectPath.importFile(
            new ImportOptions(File(copiedFilePath))
        );
        // Display a success message
        showAlertWindow(
            "File imported, copied to footage folder, and relinked successfully!"
        );
    }
}
function findCompIndex(compName, silent) {
    // name of item you're looking for
    var myComp = null;
    var myCompIndex = null;
    for (var i = 1; i <= app.project.numItems; i++) {
        if (
            app.project.item(i) instanceof CompItem &&
            app.project.item(i).name == compName
        ) {
            myComp = app.project.item(i);
            myCompIndex = i;
            myCompID = myComp.id;
            break;
        }
    }
    if (myComp != null) {
        return i;
    } else {
        if (!silent) {
            showAlertWindow("The specific composition was not found");
        }
    }
}
function changeJSONTEXT(inputText, jsonKey) {
    // Check if JSON file exists
    // Path to the JSON file
    var projectPath = app.project.file.path; // Get the path of the After Effects project
    var jsonFilePath =
        projectPath + "/(footage)/footage/json/input_template.json"; // Adjust the JSON file path
    var jsonFile = new File(jsonFilePath);
    if (!jsonFile.exists) {
        showAlertWindow("JSON file does not exist at path: " + jsonFilePath);
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
                showAlertWindow("Error parsing existing JSON file: " + e.toString());
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
        refreshJSON();
        if (app.project.activeItem && app.project.activeItem instanceof CompItem) {
            // Move the playhead by one frame
            app.project.activeItem.time += 2 * app.project.activeItem.frameDuration;
        }
        app.purge(PurgeTarget.IMAGE_CACHES);
        refreshCurrentFrame();
        var res = app.project.activeItem.resolutionFactor;
        var rft = app.project.activeItem.resolutionFactor;
        // 1
        if ((rft != "2,2") && (rft != "3,3") && (rft != "4,4")) {
            //rf = [2,2];
            var res = [2, 2];
        }
        // 2
        if ((rft != "1,1") && (rft != "4,4") && (rft != "3,3")) {
            //rf = [1,1];
            var res = [1, 1];
        }
        // 4
        if ((rft != "2,2") && (rft != "3,3") && (rft != "1,1")) {
            //rf = [3,3];
            var res = [3, 3];
        }
        // 3
        if ((rft != "2,2") && (rft != "4,4") && (rft != "1,1")) {
            //rf = [4,4];
            var res = [4, 4];
        }
        app.activeViewer.setActive();
        app.project.activeItem.resolutionFactor = res;
        if (app.project.activeItem && app.project.activeItem instanceof CompItem) {
            // Move the playhead by two frame backwards
            app.project.activeItem.time -= 2 * app.project.activeItem.frameDuration;
        }
        //alert(app.project.activeItem.resolutionFactor);
        app.purge(PurgeTarget.IMAGE_CACHES);
        refreshCurrentFrame();
        //app.project.activeItem.resolutionFactor = userResoultionFacter;
    }
}
function openCompInViewer(compName, layerName) {
    var compIndex = findCompIndex(compName);
    app.project.item(compIndex).openInViewer();
    deselectAll(); // “Deselect All”
    app.activeViewer.setActive();
    app.project.activeItem.layer(layerName).selected = true;
}
// Function to get or create a folder with a given name
function getOrCreateFolder(folderName) {
    var project = app.project;
    var folder = null;
    // Check if the folder already exists
    for (var i = 1; i <= project.rootFolder.items.length; i++) {
        if (project.rootFolder.items[i] instanceof FolderItem && project.rootFolder.items[i].name === folderName) {
            folder = project.rootFolder.items[i];
            break;
        }
    }
    // If the folder doesn't exist, create it
    if (!folder) {
        folder = project.rootFolder.items.addFolder(folderName);
    }
    return folder;
}
// Function to convert RGB to Hex
function rgbToHex(theColor) {
    r = Math.round(theColor[0] * 255).toString(16);
    if (r.length < 2) r = "0" + r;
    g = Math.round(theColor[1] * 255).toString(16);
    if (g.length < 2) g = "0" + g;
    b = Math.round(theColor[2] * 255).toString(16);
    if (b.length < 2) b = "0" + b;
    return "#" + r + g + b;
}
function modifyJSONdata() {
    var compIndex = findCompIndex("__SETTINGS");
    if (compIndex) {
        // Get the colors from the color fill effect on the layer
        var layer = app.project
            .item(compIndex)
            .layer("debug_layer")
            .effect("debug_SETTINGS");
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
            var source_bg_color = layer("source_bg").value;
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
            var jsonFilePath =
                projectPath + "/(footage)/footage/json/input_template.json"; // Adjust the JSON file path
            var jsonFile = new File(jsonFilePath);
            if (!jsonFile.exists) {
                showAlertWindow("JSON file does not exist at path: " + jsonFilePath);
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
                        showAlertWindow(
                            "Error parsing existing JSON file: " + e.toString()
                        );
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
                existingJson.Comp.call2action.cursor_color.color =
                    rgbToHex(cursor_color);
                existingJson.Comp.call2action.cursor_color.color_dark =
                    rgbToHex(cursor_color);
                existingJson.Comp.call2action_link.color = rgbToHex(c2a_link_color);
                existingJson.Comp.call2action_link.color_dark =
                    rgbToHex(c2a_link_color);
                existingJson.Comp.source.color = rgbToHex(source_color);
                existingJson.Comp.source.color_dark = rgbToHex(source_color);
                existingJson.Comp.source.bg_color = rgbToHex(source_bg_color);
                existingJson.Comp.source.bg_color_dark = rgbToHex(source_bg_color);
                // Write updated JSON back to the file
                var jsonString = JSON.stringify(existingJson, null, 2);
                file.open("w");
                file.write(jsonString);
                file.close();
                var myItem = getItem("input_template.json");
                // Reload the main source
                var originalFileName = "input_template.json";
                var tempFileName = "temp_input_template.json";
                file.rename(tempFileName);
                $.sleep(100);
                file.rename(originalFileName);
                file.open("r");
                file.close();
                $.sleep(300);
                refreshJSON();
                openCompInViewer("__SETTINGS", "SETTINGS");
                refreshCurrentFrame();
                showAlertWindow("JSON DATA UPDATED!");
            }
        } else {
            showAlertWindow("debug_layer not found");
        }
    }
}
// Function to revert the JSON file
function revertJson() {
    var myItem = getItem("input_template.json");
    // Check if myItem and myItem.mainSource are defined before attempting to reload
    if (myItem) {
        // JSON data to revert to
        var jsonData = {
            Comp: {
                logo: 1,
                logo_bg_auto_color: 0,
                logo_bg_color: "#FFFFFF",
                darkmode: 0,
                intro: 0,
                video: 0,
                audio_muted: 0,
                audio_track: 10,
                text2voice: 0,
                fx_effects: 0,
                accent: {
                    color: "#B28E3B",
                    color_dark: "#B28E3B",
                },
                title: {
                    text: "Introducing the revolutionary social media AI-tool",
                    color: "#080808",
                    color_dark: "#ffffff",
                    font: "Archivo-Bold",
                },
                subtext: {
                    text: "It has never been easier to generate content for blogs and social media.",
                    color: "#242424",
                    color_dark: "#ffffff",
                    font: "",
                },
                call2action: {
                    text: "Visit now:",
                    color: "#080808",
                    color_dark: "#FFFFFF",
                    cursor_color: "#B28E3B",
                    cursor_color_dark: "#B28E3B",
                    cursor_stroke: "#000000",
                    cursor_stroke_dark: "#FFFFFF",
                    font: "",
                },
                call2action_link: {
                    text: "GetGenius.AI",
                    color: "#080808",
                    color_dark: "#FFFFFF",
                    link_highlight: 0,
                    font: "",
                },
                source: {
                    text: "GetGenius.AI",
                    color: "#FFFFFF",
                    color_dark: "#FFFFFF",
                    bg_color: "#B28E3B",
                    bg_color_dark: "#B28E3B",
                    avatar: 0,
                    font: "",
                },
                bg: {
                    color: "#ffffff",
                    color_dark: "#111219",
                },
                gallery: [{
                    src: "gallery_01",
                    video: 1,
                    loop: 0,
                    muted: 0,
                    text: "Create Social Content, including Video, Image, Captions and Hashtags and shedule them in a fully automated way.",
                    font: "Poppins",
                },
                {
                    src: "gallery_02",
                    video: 1,
                    loop: 0,
                    muted: 0,
                    text: "",
                    font: "Poppins",
                },
                {
                    src: "gallery_03",
                    video: 1,
                    loop: 0,
                    muted: 0,
                    text: "",
                    font: "Poppins",
                },
                {
                    src: "gallery_04",
                    video: 1,
                    loop: 1,
                    muted: 0,
                    text: "",
                    font: "Poppins",
                },
                {
                    src: "",
                    video: 1,
                    loop: 0,
                    muted: 0,
                    text: "",
                    font: "Poppins",
                },
                {
                    src: "",
                    video: 0,
                    loop: 0,
                    muted: 0,
                    text: "",
                    font: "Poppins",
                },
                ],
            },
        };
        // Path to the JSON file
        var projectPath = app.project.file.path; // Get the path of the After Effects project
        var jsonFilePath =
            projectPath + "/(footage)/footage/json/input_template.json"; // Adjust the JSON file path
        var jsonTempFilePath =
            projectPath + "/(footage)/footage/json/temp_input_template.json"; // Adjust the JSON file path
        // Write the JSON data to the file
        var jsonString = JSON.stringify(jsonData, null, 2);
        var file = new File(jsonFilePath);
        var originalFileName = "input_template.json";
        var tempFileName = "temp_input_template.json";

        if (!file.exists) {
            showAlertWindow("JSON file does not exist at path: " + jsonFilePath);
        } else {
            // Rename the file to a temporary name
            file.open("w");
            file.write(jsonString);
            file.close();
            // Reload the main source
            file.rename(tempFileName);
            $.sleep(100);
            file.rename(originalFileName);
            file.open("r");
            file.close();
            $.sleep(300);
            refreshJSON();
            //app.purge(PurgeTarget.IMAGE_CACHES);
            openCompInViewer("__SETTINGS", "SETTINGS");
            refreshCurrentFrame();
            showAlertWindow("JSON file reverted to default!");
        }
    } else {
        showAlertWindow("JSON file doesnt exist");
    }
}
// Function to rename the json twice to make after effects notice the file-changes
function renameRevertJSON() {
    var myItem = getItem("input_template.json");
    // Check if myItem and myItem.mainSource are defined before attempting to reload
    if (myItem) {
        // Path to the JSON file
        var projectPath = app.project.file.path; // Get the path of the After Effects project
        var jsonFilePath = projectPath + "/(footage)/footage/json/input_template.json"; // Adjust the JSON file path
        // Write the JSON data to the file
        var file = new File(jsonFilePath);
        var originalFileName = "input_template.json";
        var tempFileName = "temp_input_template.json";

        if (!file.exists) {
            showAlertWindow("JSON file does not exist at path: " + jsonFilePath);
        } else {
            // Rename the file to a temporary name
            file.rename(tempFileName);
            $.sleep(1200);
            file.rename(originalFileName);
            file.open("r");
            file.close();
            $.sleep(300);
            refreshJSON();
            refreshCurrentFrame();
        }
    } else {
        showAlertWindow("JSON file doesnt exist");
    }
}

// Function to rename a file twice to make after effects notice the file-changes
function renameRevertFile() {
    var myItem = getItem("gallery_01_img.jpg");
    // Check if myItem and myItem.mainSource are defined before attempting to reload
    if (myItem) {
        // Path to the JSON file
        var projectPath = app.project.file.path; // Get the path of the After Effects project
        var jsonFilePath =
            projectPath + "/(footage)/footage/jpg/gallery_01_img.jpg"; // Adjust the JSON file path
        var jsonTempFilePath =
            projectPath + "/(footage)/footage/jpg/temp_gallery_01_img.jpg"; // Adjust the JSON file path
        // Write the JSON data to the file
        var file = new File(jsonFilePath);
        var originalFileName = "gallery_01_img.jpg";
        var tempFileName = "temp_gallery_01_img.jpg";

        if (!file.exists) {
            showAlertWindow("JSON file does not exist at path: " + jsonFilePath);
        } else {
            // Rename the file to a temporary name
            file.rename(originalFileName, tempFileName);
            // Reload the main source
            //file.rename(tempFileName, originalFileName);
            refreshCurrentFrame();
            alert("done")
        }
    } else {
        showAlertWindow("JSON file doesnt exist");
    }
}
// Function to replace composition name and add suffix based on resolution
function findReplaceCompositionName(prefix, replaceStr) {
    // Get the current project
    var currentProject = app.project;
    // Check if a project is open
    if (currentProject) {
        // Array to store compositions to be renamed
        var compositionsToRename = [];
        // First iteration: Collect compositions that match the prefix
        for (var i = 1; i <= app.project.numItems; i++) {
            var comp = app.project.item(i);
            // Check if it's a composition
            if (comp instanceof CompItem) {
                // Check if the composition name starts with the specified prefix
                if (comp.name.indexOf(prefix) === 0) {
                    compositionsToRename.push(comp);
                }
            }
        }
        // Second iteration: Rename compositions in the array based on resolution
        for (var j = 0; j < compositionsToRename.length; j++) {
            var comp = compositionsToRename[j];
            var width = comp.width;
            var height = comp.height;
            if (width == 1080 && height == 1080) {
                comp.name = prefix + replaceStr + "_square";
            } else if (width == 1920 && height == 1080) {
                comp.name = prefix + replaceStr + "_1920";
            } else if (width == 1080 && height == 1920) {
                comp.name = prefix + replaceStr;
            }
        }
    } else {
        // No project is open
        showAlertWindow("No project is currently open");
    }
}
// Function to rename compositions in After Effects
function renameCompositions(type, name) {
    var newName = type + name;
    // Custom names for the compositions
    var newNames = [
        newName,
        newName + "_square",
        newName + "_1920",
        "_" + name,
        "_" + name + "_square",
        "_" + name + "_1920",
    ];
    // Composition names to be renamed
    var oldNames = [
        "BPLATE",
        "BPLATE_square",
        "BPLATE_1920",
        "_boilerplate_reel",
        "_boilerplate_square",
        "_boilerplate_1920",
    ];
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
    return true;
}
// Function to replace compositions within a precomposition based on equal suffixes
function replaceCompositionsBySuffix(newName) {
    // Replace these with the actual names of your precomposition and target compositions
    var precompName = "__SETTINGS";
    var comp1Suffix = "BPLATE";
    var comp2Suffix = "BPLATE_square";
    var comp3Suffix = "BPLATE_1920";
    // Find the precomposition
    var precomp = findItemByName(precompName);
    if (!precomp) {
        aleshowAlertWindow("Precomposition not found: " + precompName);
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
    findItemByName(comp1Suffix).remove();
    findItemByName(comp2Suffix).remove();
    findItemByName(comp3Suffix).remove();
}
// Function to replace a composition within a layer
function replaceComposition(layer, suffix, newName) {
    // Construct the new composition name based on the suffix
    var newCompName = layer.name.replace(suffix, newName);
    // Find the replacement composition
    var newComp = findItemByName(newCompName);
    if (!newComp) {
        showAlertWindow("Replacement composition not found: " + newCompName);
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
    for (var i = 0; i < layers.length; i++) {
        layers[i].selected = true;
    }
}

function refreshJSON() {
    var myItem = getItem("input_template.json");
    if (myItem && myItem.mainSource) {
        myItem.mainSource.reload();
        app.purge(PurgeTarget.IMAGE_CACHES);
    } else {
        showAlertWindow("JSON file doesnt exist");
    }
}
//////////////
/// PARENT 2 NULL
function CreateParentNull() {
    try {
        var comp = app.project.activeItem;
        if (comp == null || !(comp instanceof CompItem)) {
            OnExit();
            showAlertWindow("Select comp and run again! Do not ask questions!");
            return;
        }
        var selectedLayers = comp.selectedLayers;
        if (selectedLayers.length < 1) {
            OnExit();
            showAlertWindow("Select one or multiple layers!");
            return;
        }
        var lcount = 0;
        var minIn = comp.duration;
        var maxOut = comp.displayStartTime;
        var averagePos = [0, 0];
        var firstName = "";
        var goodLayers = [];
        var topLayer = null;
        for (
            var layer_index = 0; layer_index < selectedLayers.length; layer_index++
        ) {
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
            showAlertWindow("Selected layers are already parented");
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
        showAlertWindow(err.line.toString() + "\r" + err.toString());
    }
}
function OnExit() {
    return;
}
function getLayerBaseType(layerObj) {
    typesArray = new Array(
        AVLayer,
        CameraLayer,
        LightLayer,
        ShapeLayer,
        TextLayer
    );
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
    if (inputComp === null || !(inputComp instanceof CompItem)) {
        showAlertWindow("Please open a composition");
        return false;
    } else {
        return true;
    }
}
function checkProject() {
    if (app.project && app.project.file === null) {
        showAlertWindow("Please open a project or save the current project first.");
        return false;
    } else {
        return true;
    }
}
var compName; // Variable to store the entered text
function showDialogWindow(infoText) {
    var title = "moelles mojo";
    var swindow = new Window("dialog", title);
    swindow.orientation = "column";
    swindow.minimumSize.width = 380;
    swindow.alignChildren = ["center", "top"];
    swindow.alignment = ["fill", "top"];
    swindow.margins = 20;
    var nameLabel = swindow.add("statictext", undefined, infoText, {
        multiline: true
    });
    nameLabel.alignment = ["center", "top"];
    nameLabel.preferredSize.width = 360;
    nameLabel.preferredSize.height = 40;
    mojoUI.setFG(nameLabel, [0.83, 0.94, 1, 0.75]);
    var nameInput = swindow.add("edittext", undefined, undefined);
    nameInput.preferredSize.height = 40;
    nameInput.preferredSize.width = 360;
    nameInput.alignment = ["fill", "top"];
    nameInput.margins = 20;
    var buttonGroup = swindow.add("group");
    buttonGroup.orientation = "row";
    buttonGroup.margins = 0;
    buttonGroup.spacing = 20;
    buttonGroup.alignChildren = ["fill", "top"];
    buttonGroup.alignment = ["fill", "top"];
    var okButton = buttonColorText(buttonGroup, "Create", "#0060b1", "#028def", false, 11, true);
    okButton.preferredSize.height = 32;
    //var okButton = buttonGroup.add("button", undefined, "Create");
    var cancelButton = buttonGroup.add("button", undefined, "Cancel");
    cancelButton.preferredSize.height = 32;
    okButton.onClick = function () {
        compName = nameInput.text;
        var isValid = /^[a-z0-9_]+$/.test(compName);
        if (isValid) {
            swindow.close();
        } else {
            showAlertWindow(
                "Invalid name! The name should only contain lowercase letters, numbers, and underscores (_) with no spaces, special characters, capital letters, or dashes."
            );
        }
    };
    cancelButton.onClick = function () {
        compName = "";
        swindow.close();
    };
    swindow.show();
    return compName; // Return the entered text
}
function showAlertWindow(infoText, title, icon, multiL) {
    if (title) {
        title = title;
    } else {
        title = "moelles mojo";
    }
    var multilineB, pWidth;
    if (infoText.length >= 120) { multilineB = true } else { multilineB = false };
    if (multiL) { multiline = true };
    if (multilineB) { pWidth = 320 } else { pWidth = 230 };
    var diaWin = new Window("dialog", title);
    diaWin.preferredSize.width = pWidth;
    diaWin.orientation = "column";
    diaWin.alignChildren = ["center", "center"];
    diaWin.spacing = 20;
    diaWin.margins = 16;
    mojoUI.setBG(diaWin, [0.1, 0.1, 0.1]);
    if (icon) {
        var dlgGrp = diaWin.add("group", undefined, { name: "dlgGrp" });
        dlgGrp.orientation = "row";
        dlgGrp.alignChildren = ["left", "center"];
        dlgGrp.spacing = 30;
        dlgGrp.margins = 0;
        var dlgImg = dlgGrp.add("image", undefined, mojoUI.createIcon(icon), { name: "dlgImg" });
        var staticText = dlgGrp.add("statictext", undefined, undefined, {
            name: "nameLabel",
            multiline: multilineB,
        });
        staticText.text = infoText;
        staticText.justify = "center";
        staticText.alignment = ["fill", "center"];
        // Customize text color
        mojoUI.setFG(staticText, [0.83, 0.94, 1, 0.75]);
    } else {
        var staticText = diaWin.add("statictext", undefined, undefined, {
            name: "nameLabel",
            multiline: multilineB
        });
        staticText.text = infoText;
        staticText.justify = "center";
        staticText.alignment = ["fill", "center"];
        // Customize text color
        mojoUI.setFG(staticText, [0.83, 0.94, 1, 0.75]);
    }
    var okButton = buttonColorText(diaWin, "OK", "#0060b1", "#028def", false, 11, true);
    okButton.preferredSize.height = 32;
    okButton.onClick = function () {
        diaWin.close();
    };
    diaWin.show();
}
///
addTooltipToButton(
    btn_createComps,
    "create all required compositions work on a new video template",
    85,
    false,
    true
);
btn_createComps.onClick = function () {
    // Check if there is an open project
    if (app.project && app.project.file !== null) {
        // Extract the project name from the file path, assuming a standard naming scheme
        var projectName = app.project.file.name;
        if (projectName.match("___boilerplate")) {
            var type = "comp_";
            function askForName() {
                var ptext =
                    "Please enter a name for the template\n (without spaces, special characters, capital letters, or dashes):";
                var tempName = showDialogWindow(ptext);
                if (tempName) {
                    var newName = type + tempName;
                    var worked = renameCompositions(type, tempName);
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
                                var newProjectPath =
                                    projectPath + "/" + newProjectName + ".aep";
                                var newProjectFile = new File(newProjectPath);
                                // Save the project with the new name
                                app.project.save(newProjectFile);
                                // Alert the user that the project has been saved
                                showAlertWindow("Project saved as: " + newProjectName + ".aep");
                                // Optional: Redraw the UI to reflect the changes
                            } else {
                                // Alert the user that no name was entered
                                showAlertWindow(
                                    "No project name entered. The project was not saved with a new name."
                                );
                            }
                        } else {
                            // Alert the user that no project is open
                            showAlertWindow("No project is currently open.");
                        }
                    } else {
                        showAlertWindow(
                            "Invalid name! The name should only contain lowercase letters, numbers, and underscores (_) with no spaces, special characters, capital letters, or dashes."
                        );
                        if (result !== null) {
                            askForName();
                        } else {
                            // User canceled the input, handle accordingly or exit
                            showAlertWindow("User canceled the input.");
                        }
                    }
                }
            }
            var result = askForName();
        } else {
            showAlertWindow("Please open the BOILERPLATE to use this feature");
        }
    } else {
        showAlertWindow("Please open a project");
    }
};
addTooltipToButton(
    btn_createIMGComps,
    "create all required compositions to work on a new image template",
    85,
    false,
    true
);
btn_createIMGComps.onClick = function () {
    // Check if there is an open project
    if (app.project && app.project.file !== null) {
        // Extract the project name from the file path, assuming a standard naming scheme
        var projectName = app.project.file.name;
        if (projectName.match("___boilerplate")) {
            var compIndex = findCompIndex("__SETTINGS");
            var duration = 1 / 30; // Set the duration of the composition in seconds
            var type = "post_";
            function askForName() {
                var ptext =
                    "Please enter a name for the template (without spaces, special characters, capital letters, or dashes):";
                var tempName = showDialogWindow(ptext);
                if (tempName) {
                    var newName = type + tempName;
                    var worked = createCompSet(duration, tempName, type);
                    if (worked) {
                        app.beginUndoGroup("Replace Comps by Suffix");
                        replaceCompositionsBySuffix(newName);
                        app.endUndoGroup();
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
                                var newProjectPath =
                                    projectPath + "/" + newProjectName + ".aep";
                                var newProjectFile = new File(newProjectPath);
                                // Save the project with the new name
                                app.project.save(newProjectFile);
                                // Alert the user that the project has been saved
                                openCompositionByName(newProjectName);
                                createSolid("BG");
                                deselectAll(); // “Deselect All”
                                openCompositionByName(newProjectName + "_square");
                                createSolid("BG");
                                deselectAll(); // “Deselect All”
                                openCompositionByName(newProjectName + "_1920");
                                createSolid("BG");
                                deselectAll(); // “Deselect All”
                                openCompositionByName("__SETTINGS");
                                showAlertWindow("Project saved as: " + newProjectName + ".aep");
                                app.project.activeItem.layer("SETTINGS").selected = true;
                                // Optional: Redraw the UI to reflect the changes
                            } else {
                                // Alert the user that no name was entered
                                showAlertWindow(
                                    "No project name entered. The project was not saved with a new name."
                                );
                            }
                        } else {
                            // Alert the user that no project is open
                            showAlertWindow("No project is currently open.");
                        }
                    }
                    else {
                        showAlertWindow(
                            "Invalid name! The name should only contain lowercase letters, numbers, and underscores (_) with no spaces, special characters, capital letters, or dashes."
                        );
                        if (result !== null) {
                            askForName();
                        } else {
                            // User canceled the input, handle accordingly or exit
                            showAlertWindow("User canceled the input.");
                        }
                    }
                }
            }
            var result = askForName();
        } else {
            showAlertWindow("Please open the BOILERPLATE to use this feature");
        }
    } else {
        showAlertWindow("Please open a project");
    }
};
addTooltipToButton(
    colorFill,
    "add a fill effect with color-choices to selected layer",
    85,
    false,
    false
);
colorFill.onClick = function () {
    app.beginUndoGroup("setColorFill");
    setColorFill();
    app.endUndoGroup();
};
addTooltipToButton(
    scale2fill,
    "scale a layer to fill the composition while keeping proper ratio",
    85,
    false,
    true
);
scale2fill.onClick = function () {
    app.beginUndoGroup("ScaleToFill");
    scaleToFillComp();
    app.endUndoGroup();
};
addTooltipToButton(
    addAnimbtn,
    "add IN- & OUT-Animation Rig. You can change the Markers Position and Size, to modify the animation. Use the value of the Slider-Effect on anything you want to animate",
    85,
    false,
    true
);
addAnimbtn.onClick = function () {
    app.beginUndoGroup("My Process");
    addANIM();
    app.endUndoGroup();
};

bendbtn.onClick = function () {
    bendIt();
};
addTooltipToButton(
    bendbtn,
    "create a bend-effect-rig to draw text along a circular shape",
    85,
    false,
    true
);
addTooltipToButton(
    btn_addElement,
    "add pre-configurated content element",
    100,
    false,
    false
);
btn_addElement.onClick = function () {
    if (checkProject()) {
        var compIndex = findCompIndex("_ELEMENTS");
        if (compIndex) {
            elementsDialog();
        }
    }
};
addTooltipToButton(
    btn_addGallery,
    "add pre-configurated gallery-elment",
    85,
    false,
    false
);
btn_addGallery.onClick = function () {
    if (checkProject()) {
        var compIndex = findCompIndex("_ELEMENTS");
        if (compIndex) {
            var ratioIndex = ratio.selection.index;
            var ratioresult = ratio_result[ratioIndex];
            var ratioAdd = ratio_resultIndexAdd[ratioIndex];
            var selectedIndex = gallery.selection.index + ratioAdd;
            var result = gallery_result[selectedIndex];
            deselectAll(); // “Deselect All”
            copyLayerToActiveComp(ratioresult, result);
        }
    }
};
function saveFrameAsPNG() {
    var res = [1, 1];
    // Check if a composition is active
    if (app.project.activeItem instanceof CompItem) {
        var activeComp = app.project.activeItem;
        app.activeViewer.setActive();
        if (app.project.activeItem.resolutionFactor != "1,1") {
            res = app.project.activeItem.resolutionFactor;
            app.project.activeItem.resolutionFactor = [1, 1];
        }
        // Set the location here
        var baseLocation = "~/Documents/";
        // Create _screenshots folder if it doesn't exist
        var screenshotsFolder = new Folder(baseLocation + "_screenshots/");
        if (!screenshotsFolder.exists) {
            screenshotsFolder.create();
        }
        // Generate a filename based on date and time
        var currentDate = new Date();
        var formattedDate = currentDate.getFullYear() +
            ("0" + (currentDate.getMonth() + 1)).slice(-2) +
            ("0" + currentDate.getDate()).slice(-2);
        var formattedTime = ("0" + currentDate.getHours()).slice(-2) +
            ("0" + currentDate.getMinutes()).slice(-2) +
            ("0" + currentDate.getSeconds()).slice(-2);
        var filename = activeComp.name + "_" + formattedDate + "_" + formattedTime + ".png";
        var theLocation = File(baseLocation + "_screenshots/" + filename);
        if (theLocation != null) {
            //show the correct charactar in the path
            theLocation = decodeURIComponent(theLocation);
            activeComp.saveFrameToPng(activeComp.time, File(theLocation));
            var finalpath = theLocation.substring(0, theLocation.lastIndexOf('/') + 1);
            var openFolder = new Folder(finalpath);
            showAlertWindow(finalpath, "Screenshot saved! Find it there:", "icn_screenshot");
            openFolder.execute();
            app.project.activeItem.resolutionFactor = res;
        }
    } else {
        showAlertWindow("Please open a composition.");
    }
}
function multiProjectScreenshot() {
    var aepFolder = Folder("C:/data_driven_ae_template-1/__FIND_IN_PROJECTS");
    $.writeln(aepFolder.exists);
    findInProjects(aepFolder, "comp_");
    function findInProjects(folder, searchName) {
        app.beginSuppressDialogs();
        var aeps = [];
        var files = folder.getFiles();
        for (var i = 0; i < files.length; i++) {
            if (files[i].name.indexOf(".aep") != -1) {
                aeps.push(files[i]);
            }
        }
        var importedProjects = [];
        for (var i = 0; i < aeps.length; i++) {
            $.writeln((aeps.length - i).toString() + " projects left to import");
            try {
                importedProjects.push(app.project.importFile(new ImportOptions(aeps[i])));
            } catch (e) {
                $.writeln("Error importing project: " + aeps[i].name + " - " + e.toString());
            }
        }
        var foundMatches = [];
        for (var i = 1; i <= app.project.numItems; i++) {
            var currentItem = app.project.item(i);
            if (currentItem instanceof CompItem && currentItem.name.indexOf(searchName) != -1) {
                foundMatches.push(currentItem);
            }
        }
        var thisItem;
        for (var i = 0; i < foundMatches.length; i++) {
            thisItem = foundMatches[i];
            do {
                if (thisItem.parentFolder != app.project.rootFolder) {
                    thisItem = thisItem.parentFolder;
                }
            } while (thisItem.parentFolder != app.project.rootFolder);
            $.writeln(thisItem.name);
        }
        app.endSuppressDialogs(false);
    }
};
function saveSelectedCompsAsPNG() {
    var selectedComps = app.project.selection;
    var res = [1, 1];
    var activeComp;
    // Check if there is an active composition
    if (app.project.activeItem instanceof CompItem) {
        activeComp = app.project.activeItem;
        app.activeViewer.setActive();
    } else if (selectedComps.length > 0 && selectedComps[0] instanceof CompItem) {
        // If no active composition, select the first composition from the array
        activeComp = selectedComps[0];
        openCompositionByName(activeComp.name);
    } else {
        showAlertWindow("Please open a composition or select one or more compositions.");
        return;
    }
    if (selectedComps.length === 0) {
        showAlertWindow("Please select one or more compositions.");
        return;
    }
    if (app.project.activeItem.resolutionFactor != "1,1") {
        res = app.project.activeItem.resolutionFactor;
        app.project.activeItem.resolutionFactor = [1, 1];
    }
    // Set the location here
    var baseLocation = "~/Documents/";
    // Create _screenshots folder if it doesn't exist
    var screenshotsFolder = new Folder(baseLocation + "_screenshots/");
    if (!screenshotsFolder.exists) {
        screenshotsFolder.create();
    }
    for (var i = 1; i <= app.project.numItems; i++) {
        if (
            app.project.item(i).selected &&
            app.project.item(i) instanceof CompItem
        ) {
            currentComp = app.project.item(i);
            // Generate a filename based on date and time
            var currentDate = new Date();
            var formattedDate = currentDate.getFullYear() +
                ("0" + (currentDate.getMonth() + 1)).slice(-2) +
                ("0" + currentDate.getDate()).slice(-2);
            var formattedTime = ("0" + currentDate.getHours()).slice(-2) +
                ("0" + currentDate.getMinutes()).slice(-2) +
                ("0" + currentDate.getSeconds()).slice(-2);
            var filename = currentComp.name + "_" + formattedDate + "_" + formattedTime + ".png";
            var theLocation = File(baseLocation + "_screenshots/" + filename);
            if (theLocation != null) {
                // Show the correct character in the path
                theLocation = decodeURIComponent(theLocation);
                currentComp.saveFrameToPng(activeComp.time, File(theLocation));
                var finalpath = theLocation.substring(0, theLocation.lastIndexOf('/') + 1);
                var openFolder = new Folder(finalpath);
            }
        }
    }
    showAlertWindow(finalpath, "Screenshots saved at:", "icn_screenshot");
    openFolder.execute();
    app.project.activeItem.resolutionFactor = res;
}
addHoverMenuToButton(fitView, hoverMenu_screenShot);
/*
fitView.onClick = function() {
      if (app.project && app.project.file !== null) {
          //screenShot(this);
          saveFrameAsPNG();
      } else {
        showAlertWindow("Please open a project");
    }
};
*/
addTooltipToButton(
    delExp,
    "delete all expressions of a selected layers transform-properties",
    85, false, true
);
delExp.onClick = function () {
    removeSpecificExpressions();
};
addTooltipToButton(openBoilerplate, "OPEN BOILERPLATE.aep", 85);
openBoilerplate.onClick = function () {
    if (app.project && app.project.file !== null && app.project.file.name === "___boilerplate_23.aep") {
        showAlertWindow("BOILERPLATE is already open");
    } else {
        var my_file = new File("C:/data_driven_ae_template-1/___boilerplate_23.aep");
        if (my_file.exists) {
            var new_project = app.open(my_file);
        } else {
            showAlertWindow("BOILERPLATE not found");
        }
    }
};
addTooltipToButton(changeProjectName, "change the name of a template", 85);
changeProjectName.onClick = function () {
    // Check if there is an open project
    if (app.project && app.project.file !== null) {
        // Extract the project name from the file path, assuming a standard naming scheme
        var projectName = app.project.file.name;
        // If projectname starts with "comp_"
        if (projectName.match("comp_")) {
            if (containsVariableString("comp_")) {
                var ptext =
                    "Please enter a name for the template\n (without spaces, special characters, capital letters, or dashes)";
                var tempName = showDialogWindow(ptext);
                if (tempName) {
                    findReplaceCompositionName("comp_", tempName);
                    var currentProject = app.project.file;
                    // Get the current project's path
                    var projectPath = currentProject.parent.fsName;
                    // Prompt the user for a new project name
                    var newProjectName = "comp_" + tempName;
                    // Create the new project file path
                    var newProjectPath = projectPath + "/" + newProjectName + ".aep";
                    var newProjectFile = new File(newProjectPath);
                    // Save the project with the new name
                    app.project.save(newProjectFile);
                    // Alert the user that the project has been saved
                    openCompositionByName(newProjectName);
                    showAlertWindow("Project saved as: " + newProjectName + ".aep");
                }
            }
        }
        if (projectName.match("post_")) {
            if (containsVariableString("post_")) {
                var ptext =
                    "Please enter a name for the template\n (without spaces, special characters, capital letters, or dashes)";
                var tempName = showDialogWindow(ptext);
                if (tempName) {
                    findReplaceCompositionName("post_", tempName);
                    var currentProject = app.project.file;
                    // Get the current project's path
                    var projectPath = currentProject.parent.fsName;
                    // Prompt the user for a new project name
                    var newProjectName = "post_" + tempName;
                    // Create the new project file path
                    var newProjectPath = projectPath + "/" + newProjectName + ".aep";
                    var newProjectFile = new File(newProjectPath);
                    // Save the project with the new name
                    app.project.save(newProjectFile);
                    // Alert the user that the project has been saved
                    openCompositionByName(newProjectName);
                    showAlertWindow("Project saved as: " + newProjectName + ".aep");
                }
            }
        }
        if (!projectName.match("comp_") && !projectName.match("post_")) {
            showAlertWindow("No compositions using the prefix of 'comp_' or 'post_'");
        }
        // Display the first 5 characters of the project name
    } else {
        // No project is open
        showAlertWindow("No project open!");
    }
};
//addTooltipToButton(openProjectInExplorer, "open Project Folder", 85);
addHoverMenuToButton(openProjectInExplorer, hoverMenu_open);
addHoverMenuToButton(btn_renderQ, hoverMenu_renderqueue);
addTooltipToButton(
    btn_import,
    "import files and copy them into the project's footage folder",
    85,
    false,
    true
);
btn_import.onClick = function () {
    if (checkProject()) {
        importAndCopyFile();
    }
};
btn_organize.onClick = function () {
    if (app.project.file != null) {
        progressBarPopup();
    } else {
        showAlertWindow("Please open a project or save the current project first.");
    }
};
addTooltipToButton(
    btn_cleanup,
    "options to remove unused files or clear cache, to optimize the project",
    85,
    false,
    true
);
btn_cleanup.onClick = function () {
    if (app.project.file != null) {
        (function buildUI(thisObj) {
            var compCleaner =
                thisObj instanceof Panel ?
                    thisObj :
                    new Window("palette", "Clean Up Project");
            compCleaner.orientation = "column";
            compCleaner.alignChildren = ["left", "top"];
            compCleaner.spacing = 3;
            compCleaner.margins = 16;
            var panel1 = compCleaner.add("panel", undefined, undefined, {
                name: "panel1",
            });
            panel1.text = "Tweaks";
            panel1.orientation = "column";
            panel1.alignChildren = ["left", "top"];
            panel1.spacing = 5;
            panel1.margins = [10, 14, 10, 10];
            panel1.preferredSize.width = 200;
            var checkbox1 = panel1.add("checkbox", undefined, undefined, {
                name: "checkbox1",
            });
            checkbox1.text = "Remove unused items";
            var checkbox2 = panel1.add("checkbox", undefined, undefined, {
                name: "checkbox2",
            });
            checkbox2.text = "Remove disabled effects *";
            var checkbox3 = panel1.add("checkbox", undefined, undefined, {
                name: "checkbox3",
            });
            checkbox3.text = "Remove disabled expressions *";
            var checkbox4 = panel1.add("checkbox", undefined, undefined, {
                name: "checkbox5",
            });
            checkbox4.text = "Clear render queue";
            var checkbox5 = panel1.add("checkbox", undefined, undefined, {
                name: "checkbox6",
            });
            checkbox5.text = "Purge all memory & cache";
            var panel2 = compCleaner.add("panel", undefined, undefined, {
                name: "panel2",
            });
            panel2.text = "* Scope";
            panel2.preferredSize.width = 200;
            panel2.orientation = "row";
            panel2.alignChildren = ["left", "top"];
            panel2.spacing = 10;
            panel2.margins = 10;
            var radiobutton1 = panel2.add("radiobutton", undefined, undefined, {
                name: "radiobutton1",
            });
            radiobutton1.text = "Current Comp";
            radiobutton1.value = true;
            var radiobutton2 = panel2.add("radiobutton", undefined, undefined, {
                name: "radiobutton2",
            });
            radiobutton2.text = "All Comps";
            var group1 = compCleaner.add("group", undefined, {
                name: "group1",
            });
            group1.orientation = "row";
            group1.alignChildren = ["left", "center"];
            group1.spacing = 10;
            group1.margins = [0, 7, 0, 0];
            var button1 = group1.add("button", undefined, undefined, {
                name: "button1",
            });
            button1.text = "Clean Up";
            button1.preferredSize.width = 200;
            button1.alignment = ["left", "center"];
            button1.onClick = function () {
                compCleaner.close();
                clean(
                    checkbox1.value,
                    checkbox2.value,
                    checkbox3.value,
                    checkbox4.value,
                    checkbox5.value,
                    radiobutton2.value
                );
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
        showAlertWindow("Please open a project or save the current project first.");
    }
};
addTooltipToButton(
    btn_openAndSelect,
    "bring up the layer-effect controls (debug_SETTINGS), to edit the colors",
    85,
    false,
    true
);
btn_openAndSelect.onClick = function () {
    openCompInViewer("__SETTINGS", "debug_layer");
    app.executeCommand(3734); //EffectControls
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
            var confirmation = confirm(
                "The text is empty. Are you sure you want to use an empty string?"
            );
            // If the user clicks Cancel, return null
            if (!confirmation) {
                return;
            }
        }
        // Execute changeJSONTEXT function with the provided text
        app.beginUndoGroup("Change JSON Text");
        changeJSONTEXT(text, "title");
        app.endUndoGroup();
    } else {
        showAlertWindow("JSON file doesnt exist");
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
            var confirmation = confirm(
                "The text is empty. Are you sure you want to use an empty string?"
            );
            // If the user clicks Cancel, return null
            if (!confirmation) {
                return;
            }
        }
        // Execute changeJSONTEXT function with the provided text
        app.beginUndoGroup("Change JSON Text");
        changeJSONTEXT(text, "subtext");
        app.endUndoGroup();
    } else {
        showAlertWindow("JSON file doesnt exist");
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
            var confirmation = confirm(
                "The text is empty. Are you sure you want to use an empty string?"
            );
            // If the user clicks Cancel, return null
            if (!confirmation) {
                return;
            }
        }
        // Execute changeJSONTEXT function with the provided text
        app.beginUndoGroup("Change JSON Text");
        changeJSONTEXT(text, "source");
        app.endUndoGroup();
    } else {
        showAlertWindow("JSON file doesnt exist");
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
            var confirmation = confirm(
                "The text is empty. Are you sure you want to use an empty string?"
            );
            // If the user clicks Cancel, return null
            if (!confirmation) {
                return;
            }
        }
        // Execute changeJSONTEXT function with the provided text
        app.beginUndoGroup("Change JSON Text");
        changeJSONTEXT(text, "call2action");
        app.endUndoGroup();
    } else {
        showAlertWindow("JSON file doesnt exist");
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
            var confirmation = confirm(
                "The text is empty. Are you sure you want to use an empty string?"
            );
            // If the user clicks Cancel, return null
            if (!confirmation) {
                return;
            }
        }
        // Execute changeJSONTEXT function with the provided text
        app.beginUndoGroup("Change JSON Text");
        changeJSONTEXT(text, "call2action_link");
        app.endUndoGroup();
    } else {
        showAlertWindow("JSON file doesnt exist");
    }
};
addTooltipToButton(
    btn_debug_colors,
    "apply the colors, defined on the color-edit effects, to be used globally within the whole project",
    85,
    false,
    true
);
btn_debug_colors.onClick = function () {
    app.beginUndoGroup("modify JSON");
    modifyJSONdata();
    app.endUndoGroup();
};
addTooltipToButton(btn_revert_json, "restore the Default JSON", 85);
btn_revert_json.onClick = function () {
    app.beginUndoGroup("revert JSON");
    revertJson();
    app.endUndoGroup();
};
addTooltipToButton(btn_reload_json, "reload JSON, if edits wont show up", 85);
btn_reload_json.onClick = function () {
    refreshJSON();
};
textLayer.onClick = function () {
    app.beginUndoGroup("New Text");
    var compIndex = findCompIndex("_ELEMENTS", true);
    if (compIndex) {
        if (app.project.activeItem instanceof CompItem) {
            var activeComp = app.project.activeItem;
            app.activeViewer.setActive();
            var result = "text_sel";
            var sourceCompName = "_ELEMENTS";
            deselectAll(); // “Deselect All”
            copyLayerToActiveComp(sourceCompName, result);
        } else {
            showAlertWindow("Please open a composition");
            return;
        }
    } else {
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
                var fillSolid = textLayer
                    .property("ADBE Effect Parade")
                    .addProperty("ADBE Fill");
                fillSolid.property("ADBE Fill-0002").setValue([1, 1, 1]);
            }
        } else {
            return;
        }
    }
    app.endUndoGroup();
};
solidLayer.onClick = function () {
    app.beginUndoGroup("New Solid");
    createSolid("SOLID");
    app.endUndoGroup();
};
shapeLayer.onClick = function () {
    var comp = app.project.activeItem;
    // Check if a composition is active
    if (comp != null && comp instanceof CompItem) {
        var filePath =
            Folder.myDocuments.fsName +
            "/Adobe/After Effects 20" +
            app.buildName.substr(0, 2) +
            "/User Presets/mojo/__Rectangle-Wizard.ffx";
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
        showAlertWindow("No active composition.");
    }
};
adjustmentsLayer.onClick = function () {
    var activeComp = app.project.activeItem;
    if (checkComp(activeComp)) {
        if (layerName == "default") {
            adjName = "Adjustment Layer";
        } else {
            adjName = layerName;
        }
        app.beginUndoGroup("New Adj.");
        var newSolid = activeComp.layers.addSolid(
            [1, 1, 1],
            adjName,
            activeComp.width,
            activeComp.height,
            1
        );
        newSolid.adjustmentLayer = true;
        app.endUndoGroup();
    } else {
        return;
    }
};
nullLayer.onClick = function () {
    var activeComp = app.project.activeItem;
    if (checkComp(activeComp)) {
        app.beginUndoGroup("New Null");
        var newNull = activeComp.layers.addNull();
        if (layerName == "default") { } else {
            newNull.name = layerName;
        }
        app.endUndoGroup();
    } else {
        return;
    }
};
parent2null.onClick = function () {
    app.beginUndoGroup("Create");
    CreateParentNull();
    app.endUndoGroup();
}
function activateCompViewer() {
    // setActive is supposed (guide) to return a Boolean, but in practice it returns nothing, therefore this doesnt work:
    // return app.activeViewer && app.activeViewer.type===ViewerType.VIEWER_COMPOSITION && app.activeViewer.setActive();
    var A = (app.activeViewer && app.activeViewer.type === ViewerType.VIEWER_COMPOSITION);
    if (A) app.activeViewer.setActive();
    return A;
};
function getActiveComp() {
    var comp;                                // the returned quantity
    var X = app.project.activeItem;    // the initial activeItem
    var selComp = app.project.selection.length === 1 && app.project.selection[0].typeName === "Composition" ? app.project.selection[0] : null; // the unique selected comp, or null
    var temp;
    if (X instanceof CompItem) {
        if (selComp === null) {
            comp = X;
        }
        else if (selComp !== X) {
            comp = null; // ambiguity : the timeline panel is active, X is the front comp, but another comp is selected
        }
        else {
            // X and selComp coincide
            X.selected = false;
            temp = app.project.activeItem;
            X.selected = true;
            if (temp === null) {
                // the project panel is active and the active item was initially a selected comp
                // if that comp is already opened in a viewer and is the front comp, return the comp, else : ambiguity
                comp = (activateCompViewer() && app.project.activeItem === X) ? X : null;
            }
            else {
                // deselecting the comp didnt change the activeItem : the timeline panel is active, and the active item was the front comp, that happened to be also selected.
                comp = X;
            };
        };
    }
    else {
        comp = activateCompViewer() ? app.project.activeItem : null;
    };
    return comp;
};


function ProgressBar(min, max, current) {
    function updateGraphics() {
        if (!_isVisible) {
            return;
        }
        _window.update();
    }

    this.testInfos = "Importing Demo-Content, please wait...";
    this.constructor = function (min, max, current) {
        _this = this;
        _isVisible = false;
        _real = { current: current, max: max, min: min };
        _cursor = { current: 0, max: 100, min: 0 };
        _cursor.max = _real.max - _real.min + 1;
        _window = new Window("palette", "Loading", undefined, {
            borderless: "not quite true",
            resizable: false,
        });
        _window.preferredSize = [540, 140];

        var progressGrp = _window.add("group", undefined, { name: "progressGrp" });
        progressGrp.orientation = "column";
        progressGrp.alignChildren = ["center", "top"];
        progressGrp.spacing = 10;
        progressGrp.margins = 24;
        progressGrp.alignment = ["fill", "top"];

        _progressBar = progressGrp.add(
            "progressbar",
            undefined,
            _cursor.min,
            _cursor.max
        );
        _progressBar.preferredSize.width = 520;
        _progressBar.show();
        _infos = progressGrp.add("statictext", undefined, "Loading, please wait", {
            justify: "center",
        });
        _infos.preferredSize = [520, 24];
        this.update(current);
        return this;
    };

    this.start = function () {
        _isVisible = true;
        this.update(_real.current);
        _startTime = new Date().getTime();
        _window.show();
    };

    this.update = function (step) {
        _real.current = step;
        _cursor.current = _real.current + 1 - _real.min;
        var infos = this.testInfos
            .replace(":current", _cursor.current)
            .replace(":max", _cursor.max);
        _progressBar.value = _cursor.current;
        _infos.text = infos;
        updateGraphics();
    };

    this.end = function () {
        _window.hide();
    };

    return this.constructor(min, max, current);
}


function changeDemoContent(demoPack) {
    // Check if there is an open project
    if (app.project && app.project.file !== null) {
        var bufferComp = findComp("bufferComp");
        if (!bufferComp) {
            bufferComp = createComposition(5, 5, 1, 1, "bufferComp", 1);
        }
        // Get or create the folder named "___misc"
        var targetFolderName = "___misc";
        var targetFolder = getOrCreateFolder(targetFolderName);
        // Move the composition into the folder
        bufferComp.parentFolder = targetFolder;
        var activeItemT = getActiveComp();
        if ((!activeItemT) || (activeItemT.name == "bufferComp")) {
            activeItemT = findComp("__SETTINGS");
        }
        var pb = new ProgressBar(1, 10, 1);
        pb.start();
        openCompositionByName("bufferComp");
        $.sleep(300);
        // Extract the project name from the file path, assuming a standard naming scheme
        var projectName = app.project.file.name;
        if (projectName.match("comp_") || projectName.match("post_") || projectName.match("___boilerplate")) {
            app.executeCommand(3985); // CancelCachingWorkAreainBackground
            app.executeCommand(2372); // Purge ImageCaches
            //batch
            var batScriptPath = "C:\\data_driven_ae_template-1\\_assets\\_demo" + demoPack + ".bat";
            var result = system.callSystem(batScriptPath);
            $.sleep(150);
            var reloadAssets = ["input_vid.mp4", "gallery_01_vid.mp4", "gallery_02_vid.mp4", "gallery_03_vid.mp4", "gallery_04_vid.mp4", "gallery_05_vid.mp4", "gallery_06_vid.mp4", "input_img.jpg", "gallery_01_img.jpg", "gallery_02_img.jpg", "gallery_03_img.jpg", "gallery_04_img.jpg", "gallery_05_img.jpg", "gallery_06_img.jpg", "logo_01.png", "input_template.json"];
            if (app.project.activeItem.selectedLayers.length = 0) {
                activeItemT.selected = true;
            }
            function updateProgressBar(currentIndex, totalItems) {
                var progress = (currentIndex / totalItems) * 100;
                $.sleep(50);
                pb.update(progress);
            }
            for (var i = 0; i < reloadAssets.length; i++) {
                var currentItem = getItem(reloadAssets[i]);
                try {
                    if (currentItem) {
                        currentItem.mainSource.reload();
                        updateProgressBar(i, reloadAssets.length); // Update progress bar
                    }
                } catch (err) { $.writeln("Item not found: " + reloadAssets[i]); }
            }
            openCompositionByName(activeItemT.name);
            if (app.project.activeItem && app.project.activeItem instanceof CompItem) {
                // Move the playhead by one frame
                var isPost = app.project.activeItem.time;
                app.project.activeItem.time += app.project.activeItem.frameDuration;
            }
            var res = app.project.activeItem.resolutionFactor;
            var rft = app.project.activeItem.resolutionFactor;
            app.activeViewer.setActive();
            app.project.activeItem.resolutionFactor = res;
            if (app.project.activeItem && app.project.activeItem instanceof CompItem) {
                // Move the playhead by two frame backwards
                app.project.activeItem.time += Math.round(2 * app.project.activeItem.frameDuration);
            }
            // 1
            if ((rft != "2,2") && (rft != "3,3") && (rft != "4,4")) {
                //rf = [2,2];
                var res = [2, 2];
            }
            // 2
            if ((rft != "1,1") && (rft != "4,4") && (rft != "3,3")) {
                //rf = [1,1];
                var res = [1, 1];
            }
            // 4
            if ((rft != "2,2") && (rft != "3,3") && (rft != "1,1")) {
                //rf = [3,3];
                var res = [3, 3];
            }
            // 3
            if ((rft != "2,2") && (rft != "4,4") && (rft != "1,1")) {
                //rf = [4,4];
                var res = [4, 4];
            }
            app.activeViewer.setActive();
            app.project.activeItem.resolutionFactor = res;
            if (app.project.activeItem && app.project.activeItem instanceof CompItem) {
                // Move the playhead by two frame backwards
                app.project.activeItem.time -= Math.round(2 * app.project.activeItem.frameDuration);
                if (isPost == 0) { app.project.activeItem.time = 0 };
            };
            $.sleep(100);
            pb.end();
            $.sleep(100);
            renameRevertJSON();
        } else {
            showAlertWindow("Please open the BOILERPLATE or a template");
        }
    } else {
        showAlertWindow("Please open a project");
    }
};
// Initiates color picker, returns RGB array
function colorPicker() {
    var initialRGB = [1, 1, 1];
    var colorInt =
        255 * (65536 * initialRGB[0] + 256 * initialRGB[1] + initialRGB[2]);
    var c = $.colorPicker(colorInt);
    if (c == -1) return;
    var r = (c >> 16) & 0xff;
    var g = (c >> 8) & 0xff;
    var b = c & 0xff;
    return [r, g, b];
} // End colorPicker() function
//addTooltipToButton(purgeAll, "purge ImageCache", 85);
addHoverMenuToButton(purgeAll, hoverMenu_purge);
/*
purgeAll.onClick = function () {
    app.purge(PurgeTarget.IMAGE_CACHES);
};
*/
///demo hover
addTooltipToButton(demo1grp, "demo01", 90, false, false, true);
addTooltipToButton(demo2grp, "demo02", 90, false, false, true);
addTooltipToButton(demo3grp, "demo03", 90, true, false, true);
addTooltipToButton(demo4grp, "demo04", 90, true, false, true);
addTooltipToButton(demo5grp, "demo05", 90, false, false, true);
addTooltipToButton(demo6grp, "demo06", 90, false, false, true);
addTooltipToButton(demo7grp, "demo07", 90, true, false, true);
addTooltipToButton(demo8grp, "demo08", 90, true, false, true);
demo1.onClick = function () {
    changeDemoContent("1");
}
demo2.onClick = function () {
    changeDemoContent("2");
}
demo3.onClick = function () {
    changeDemoContent("3");
}
demo4.onClick = function () {
    changeDemoContent("4");
}
demo5.onClick = function () {
    changeDemoContent("5");
}
demo6.onClick = function () {
    changeDemoContent("6");
}
demo7.onClick = function () {
    changeDemoContent("7");
}
demo8.onClick = function () {
    changeDemoContent("8");
}
btn_demos.onClick = function () {
    changeDemoContent("1");
}
var mousePosGlobal = null;
function closeDialogWindows() {
    if (hoverMenuWin && hoverMenuWin instanceof Window) {
        hoverMenuWin.close();
    }
    if (tooltipWin && tooltipWin instanceof Window) {
        tooltipWin.close();
    }
    return true;
}
win.addEventListener("focus", function () {
    try {
        if (hoverMenuWin && hoverMenuWin.visible) {
            hoverMenuWin.close();
        }
        if (tooltipWin && tooltipWin.visible) {
            tooltipWin.close();
        }
    } catch (err) { }
});
win.onClose = function () {
    try {
        closeDialogWindows();
    } catch (err) { }
};
win.addEventListener("onMouseMove", function () {
    var mousePos = win.globalToLocal(e.x, e.y);
    var panelBounds = win.bounds;
    if (
        mousePos.x < 0 ||
        mousePos.x > panelBounds.width ||
        mousePos.y < 0 ||
        mousePos.y > panelBounds.height
    ) {
        if (tooltipWin && tooltipWin.visible) {
            tooltipWin.close();
        }
    }
});