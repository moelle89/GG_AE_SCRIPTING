﻿// HELPER PANEL FOR ADOBE AFTER EFFECTS TO WORK WITH THE GG TEMPLATE SYSTEM

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
    dialog.onResizing = dialog.onResize = function() {
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

var font = ScriptUI.newFont("Archivo", ScriptUI.FontStyle.BOLD, 20);

win.orientation = "column";
win.alignChildren = ["fill", "top"];
win.alignment = ["fill", "fill"];
win.minimumSize.width = 284;
win.maximumSize.width = 484;
win.spacing = 0;
win.margins = 0;

// ROOT
// ======
var root = win.add("group", undefined, {
    name: "root"
});
root.orientation = "row";
root.minimumSize.width = 284;
root.alignChildren = ["fill", "fill"];
//root.maximumSize.height = 215;
root.spacing = 0;
root.margins = 5;

// TPANEL1
// =======
var tpanel1 = root.add("tabbedpanel", undefined, undefined, {
    name: "tpanel1"
});
tpanel1.alignChildren = ["left", "top"];
tpanel1.margins = 0;
tpanel1.spacing = 0;
tpanel1.alignment = ["fill", "top"];
tpanel1.maximumSize.width = 276;
tpanel1.minimumSize.width = 276;
tpanel1.preferredSize.height = 178;


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

var vidtemp_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00l%00%00%00%1E%08%06%00%00%00%C3%89%C2%8C%C3%BB%07%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%03%08IDATh%C2%81%C3%AD%C2%98%3FhSA%1C%C2%80%C2%BF%C3%BA%07%05%C3%9FR%11%C2%8C%C3%A0T%C2%BB*%C2%95%C2%B8%C2%A5%C2%93(v%C2%B7%C3%85%C3%91%C2%AD%C2%8B%C2%93%C2%93%05q%C3%92!%5D%C3%84%C3%85%C2%A5NN%C2%82QgK%C2%8BS%1C%03%01%C3%97%18p%10%C2%B3h%1CRPD%C3%A2%C3%B0%C2%BB3%C3%B7.%C3%AF%5E%C3%AFb%C2%A39%C2%B9%0F%C2%8E%C3%9E%C2%BD%C3%9C%C3%9D%7B%C3%8D%C2%97%C3%9F%C3%9D%C3%AF%C3%9E%C3%9Cp8%24%11%0F%C2%87%C3%BE%C3%B5%03%24%C3%82H%C3%82%22%23%09%C2%8B%C2%8C%24%2C2%C2%92%C2%B0%C3%88H%C3%82%22%23%09%C2%8B%C2%8C%23%01%7D%C3%8F%02'%3D%C3%BA%7D%07%3E%00%C3%9F%26z%C2%A2D)%C2%BE%C3%82%1E%00w%03%C3%A6%C3%BD%08%5C%00%C2%BE%C2%A8%C3%B6i%C3%A0!p%0C%C2%B8%01%C3%BCt%C2%8C%C2%BBb%C3%94w%C2%AD%C3%8F%C3%A6%C2%81%C2%AA%C2%AAw%C2%81%C2%BE%C3%95%C3%AEZ%7Dl%C3%AC%C3%B9%C2%A2d%C3%8E%C3%B3M%C3%87%008%118%C3%B7%3A%C3%B0%04X%06%C2%9E%03g%C3%94%C3%B5S%C3%80g%C3%87%C2%98%1DF%C3%92%C3%8E!%124u%C3%A0%C2%8E%C2%AA_B%C3%A4%C3%AC%C2%A8%C3%B6%06%C2%B0%C2%A9%C3%86%C3%AEPL_%C3%B5%C3%99T%C3%AD%25%C3%A0Z%C3%89%C3%B3%C2%BF7%C2%9E%C3%83%C3%85c%C3%A0%3A%C2%B0%07%C2%BCp%C3%B4%C2%B9i%7C%C2%BE%C3%AA%C2%98%C2%AF%07%3C-%C2%B9%C3%8Fo%7C%23%2CT%C2%96%1Es%1Ex%03%1C5%C2%AE%1F.%19%C3%93%60%24l%C2%8D%C3%91%C2%97%C2%AB%C3%9B%00-U%C3%8Ch%2CBG%1D%C2%AA%C3%AF%3C%22%1D5o%1B%C3%B9!j%C3%AE%23%02z%C2%AA%C3%9D%03n%C2%A9%C3%BAK%C3%87%3D%06%C3%80%C2%8A%C2%AA7%C2%8D%C2%B1%C2%9AE%C3%B5y%5B%C2%B5%C2%B5%2Cs%C2%BE%0C%C2%A8%C2%A9%C3%BB%C3%9Fs%C3%BF%3B%C3%82%C2%B4%C2%93%C2%8E*yY%C3%BB%C3%910%C3%AA%C2%A6%C2%90*%C2%B0P%C3%90%C2%A7%C2%8C-%C3%A0%C2%AA*f%C2%B4%C3%96%11y%00%1D%C2%A3%C2%80%7C%C3%A1%C2%BAm%C3%8A%C3%AC8%0A%C3%86%C2%B8%C2%A2h%C2%ADY%C3%B3%14%C3%8D%C3%97F~(%C2%8B%C2%AA%C2%942kYb%C2%9F%C2%91%10%1D%150%C2%8A.%C3%B0%17f%C3%92E%04j%5C%C3%BB%C3%9C%C2%A4%C2%BCE%C2%96~%C2%93%0C%C2%89%C2%AE%C3%A6A%C3%9Eh%C3%96%C2%84A%5E%C3%88%C2%9A%C3%B5w%C2%97%C3%BC%C2%BE%16B%C3%8B%C2%A8%C2%87%08%C2%AB%20%7B%C2%8F%5D*V%C2%BF%01yiz)%C3%9C%C3%B3%C2%B8%C3%87%C2%8A%1A%C3%9F%C3%99%C2%AFcHZ%C3%BF%C2%B7h%20%C2%916%C2%8FDY%C2%8B%C3%B0%C3%A5%C2%B0%C2%88%05%C2%A3%C3%9E%0F%18%C2%97Q%C2%9C(t%C3%88%C3%AFY%C3%9B%C3%88%C2%B2%C2%A8%23%C2%AA%C2%86%C3%ACU%C2%B6%C3%98%25%C3%A0%C2%99um%C2%80%C3%87%C3%BE%05%C2%B3)%0CD%C3%8C%3A%12Y-%C3%AB%C3%BA%C2%A4%C2%98%C3%82B%C2%A2%C2%B4C%3E%C3%B9q%C3%B1%1A%C3%89%18%17%11%C3%89%19%22o%C3%95%C3%AA%C3%97f%3C%C2%89%C3%997%C2%B24%C3%93%16%C3%96%02~%10%C2%96x%C2%80%C3%AC7%C3%AB%C2%AA%C2%AE3%3B%1Dy%C2%A1%2C%20%C3%A2%C3%B5%C2%91%C2%A0%C3%8B%C3%B4%C3%8EdM%24%C2%B22%24%C3%A2%5Cx%0B%C2%B2%C3%B1%C3%9D%C3%83%7C%C3%96a%C2%9B%01%C3%B0%0E%C2%B8%0C%7C2%C2%AE%C2%BB%0E%C3%8D%26-%C3%86%C2%A3%204%C2%BA%C3%AA%C3%80%109O%C3%95%C2%8D%C3%AB%1B%C2%81%C3%B3%C2%84%C2%B0%C2%8D%C3%ACG%C3%8BH%C3%84%1D8%C2%BE%11%C3%B6%C2%88%C3%B07%1D%C2%AFT%C2%BD%09%5CD%C3%9Et%1C%07%C2%BEz%C3%8E%C3%91%60%14%15f%C3%B68%09z%C3%BC%16%C3%B9%25%C3%96%C2%87%25%C3%86%C3%B7%1C%C3%8Dm%C2%AB%C3%9DC%C2%96%C2%BC%1E%C3%85%C3%A9%C3%BC%1F%C3%A3%C3%BB%C2%A6%03%C3%BE%C3%BFw%C2%89%15%C3%86%0F%C2%BE%19%C3%A3I%C2%83I%C3%871%C3%8E%26C%04f%C2%AA%3D%C2%B1%C3%8C%10a%C2%89%19%60%16%C3%8Fa%C2%89%12%C2%92%C2%B0%C3%88H%C3%82%22%23%09%C2%8B%C2%8C%24%2C2%C2%92%C2%B0%C3%88H%C3%82%22%23%09%C2%8B%C2%8C_r%C2%A3%C2%AE%C3%B2C%60%C2%AD%13%00%00%00%00IEND%C2%AEB%60%C2%82";


var btn_createComps_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%1C%00%00%00%14%08%06%00%00%00%C2%9E%5E%5D%C3%B9%00%00%00%09pHYs%00%00%0B%12%00%00%0B%12%01%C3%92%C3%9D~%C3%BC%00%00%01bIDATH%C2%89b%C3%BC%C3%BF%C3%BF%3F%03%C3%9D%00%03%03%03%00%00%00%C3%BF%C3%BFb%C2%A2%C2%ABm%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%AF%C2%85%0C%0C%0C%00%00%00%00%C3%BF%C3%BFb!A%C2%AD%01%03%03%C2%83%00%11%C3%AA.000%7C%C3%80*%C3%83%C3%80%C3%80%00%00%00%00%C3%BF%C3%BFb%00%C3%85!%11x%C3%81%7F%C3%A2%C3%81%C2%87%C3%BF%C3%BF%C3%BF%3B%601S%C3%A0%C3%BF%C3%BF%C3%BF%0C%00%00%00%00%C3%BF%C3%BF%22%C3%86%C2%B2%04%12%2C%C2%83%01%C2%90%C2%A50%C3%BD%0Ap%07%C3%BF%C3%BF%7F%00%00%00%00%C3%BF%C3%BF%22%26H%15H%08v%18%C3%A0g%60%60p%C2%80FC%3F%5C%C2%94%C2%81%C3%81%1E%00%00%00%C3%BF%C3%BF%C2%A2u%C2%A2%09%40%C3%A1100%00%00%00%00%C3%BF%C3%BF%C2%A2o*e%60%60%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%AF%C2%85%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%AF%C2%85%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%AF%C2%85%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%AF%C2%85%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%A5%C2%85%0F%18%18%186%C2%A0%C2%88000%00%00%00%00%C3%BF%C3%BF%22%26%C3%A3%C2%832.%C2%A9%60%03%C3%96%C2%8C%C3%BF%C3%BF%C3%BF%01%00%00%00%00%C3%BF%C3%BF%22%C2%B6hk%C2%80%C2%96%1E%C3%84%C2%80%0B%C3%BF%C3%BF%C3%BF7%C3%80Z%C2%B4%C3%BD%C3%BF%C3%8F%00%00%00%00%C3%BF%C3%BF%22%C2%B5%3E%04%C2%95%1E%C2%84%C2%82%11%C2%84%C2%B1%03%06%06%06%00%00%00%00%C3%BF%C3%BF%C2%A2o%05%C3%8C%C3%80%C3%80%00%00%00%00%C3%BF%C3%BF%C2%A2o*e%60%60%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%AF%C2%85%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%03%00%C2%83%C3%9F%C2%95x%C2%A6%14%C3%9A'%00%00%00%00IEND%C2%AEB%60%C2%82";
var btn_createComps = group1.add("iconbutton", undefined, File.decode(vidtemp_imgString), {
    name: "btn_createComps",
    style: "button"
});
btn_createComps.helpTip = "create all required compositions\nto start working on a new template";
btn_createComps.alignment = ["left", "top"];
btn_createComps.minimumSize.width = 118;
btn_createComps.preferredSize.height = 30;

var imgtemp_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00l%00%00%00%1E%08%06%00%00%00%C3%89%C2%8C%C3%BB%07%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%03%C2%82IDATh%C2%81%C3%AD%C2%991h%14A%14%C2%86%C2%BF%C3%93%10%C2%9B%15%3C%C2%AB%C3%941X%C2%88Et%C2%ADL%C3%8AD%03j%C2%95%5C%10%2ClD%0B%2Bm%12%05%2B%11%12H'%0A%C3%9A%09Q!166%C2%86%C2%8Bh%111%C3%8D%C3%81%C2%89%60!%C3%A7%C2%95z%5D%04%2F%C2%88H8%C2%8B7%C3%83M%C3%A6foo%C3%B7.%C2%98%C3%85%C3%B9%60%C2%B8%C2%99%C3%99%C3%B7f%C2%86%C3%BD%C3%B7%C3%8D%C2%BC%C3%9D%C3%8B5%1A%0D%3C%C3%99a%C3%9F%C2%BF%5E%C2%80'%19%5E%C2%B0%C2%8C%C3%A1%05%C3%8B%18%5E%C2%B0%C2%8C%C3%A1%05%C3%8B%18%5E%C2%B0%C2%8C%C3%A1%05%C3%8B%18I%04%C3%8B%01%C3%8B%C3%806%C3%90%C3%A8%C2%B0l%2B%C2%9F%5C%C3%AF%C2%96%C3%BC%7F%C2%93K%C3%B0%C3%A2%7C%08%C3%98%C2%8C%C2%B1%C3%B9%09%C3%9C%03*%C3%80%14pQ%C3%B5%C3%A7%C2%81%1F%11%3Ey%20T%C3%B5%C2%AA*f%1Fj%C3%9E%C2%92%C3%91%1ETESr%C2%AC-%04%C3%86%2C%C2%9B%C2%B5%C2%98%C3%B5%C3%AFy%C3%BA%12%C3%98%C3%B6w%60s%05XR%C3%B5%15%C3%A00p%26%C3%867%04%C2%8A%C2%AA%3E%0B%C3%8C%5B%7D%1A3J%C3%A7%C2%80%C2%82%C3%91%1E%C2%A7)F%5E%C2%AD%C3%81%14K%C2%B3%09%5CC%C2%A2%1E%60%188%C3%9Bfm_%C3%95%C3%AF%C2%9166%0F%C2%80I%60%0Bx%11as%C3%99%C2%B8%3E%151%5E%0Dx%C3%92f%1E%20%C2%99%60.%3E%00%C3%87%C2%81%C2%83%C2%AA%C2%BDa%5D%C3%9F%40%04%C3%AB%05%05%C2%9A7%C3%9A%25%06%C2%88XE%C2%9A%C3%91YReP%C3%B9h1%C2%B5%C3%80e%C2%A0n%C3%B8%C3%9FE%04%C2%A8%C2%A9v%0D%C2%B8%C2%AE%C3%AA%2B%11s%C3%96%C2%81%09U_7%7C5C%C3%AAzY%C2%B5%C2%B5X%C3%A6x%010%C2%A2%C3%A6%C2%BF%131%0F%C3%90%5D%C3%92q%1B8%C2%AD%26%C3%9AV%7D%C2%93%C3%86%C3%B5~%C3%A0%7C%17%C3%A3k%C2%AA%C3%AAW%C2%8B%C2%A0o%7C%C3%95a%5B0%C3%AC%1E%03%C2%A7%C2%90%C2%88%1AWu%C3%93NS1%0A%C3%88%0D%C3%97%C3%ADz%C2%84%C2%9D%C3%AD%C2%A3%C3%BD%5C%C3%91%3Ab%C2%8D%C3%A3%1A%C2%AF%C2%8C%3C(C%C2%AAD%C2%92V%C2%B0o%C3%80%C2%82%C2%AA%7F%02%5E%C2%AA%C3%BA%02%C2%B0%C2%88%3C)%1B%C3%80%C3%89%C2%94%C3%A3%C2%9B%C3%A8%C2%ADn%C3%8C%C3%BAu%C2%9DGf%C3%A4%C3%8D%5B%C3%97J%C2%88p%C3%A3%C2%88%C2%98%C2%BD%C3%A6%3D0j%C3%B5%05Ht%C2%AD%C3%B7j%C2%92%C2%B4%5B%C3%A2%22%C3%B0%C3%87j%17%C2%90%07%C3%A0R%C2%B7%C2%8B%C2%B2%C3%90%C3%89FHsk3%C3%BBM%C3%B2F%5DG%C3%A0%1C%3B%13%18%C3%AD%C3%AB%C3%B2%C2%8Fb%009%7Bl%C3%AC-%C2%B0%C2%8E%C2%88%C2%A6%05%C3%92%5B%C3%A1V%07sL(%C3%BFJ%3B%C2%A3%C2%B4%C2%82%3D%C2%B3%C3%9AE%C2%B5%C2%A8%3E%C3%A0%1C%C2%B2%C3%88%22p%22%C3%A5%C3%B8%26U%C3%A4%C3%A6%C3%AA%C2%AC%2F%C2%A4%C2%99Mv%C2%82%C2%9D-%C2%A6!%C3%80%C2%9D(T%C3%98)%C3%98*%C2%B2-j%C3%81F%C2%90%C2%B3j%C3%80%C3%B2%1B%06%C2%9E%5B%7Dub%C3%8E%2FH'%C3%98g%C3%A0%C2%A3%C3%95%C3%B7%0B%C2%B8%0F%7C%07%C3%9E%C2%A8%C2%BE%C2%9B%C3%80%C3%9B%14%C3%A3%C2%BBXCn%C3%BC%C2%8Cj%2FG%C3%98%C2%99%22%C2%86%C2%88%C3%90%C2%B34%23%C3%8F%C3%8E%3C%3B%C2%A5B%C3%AB%16%C3%AB%C3%A25r%C2%8E%0F!%22%07%C2%88xvt%C2%96iMb%C3%9AF%C2%96%26%C2%8D%60O%23%C3%BAoY%C3%ADw%C3%80%17%C3%A0h%C2%8A9l%C3%B4%C3%B65h%C2%B5%C2%A3%C3%AC%00%1E%01%C3%93F%C3%9FL%C2%AB%C3%B9%C2%AE%C2%B0%C2%8EDV%C2%80D%5C%14%1D%09d%C2%93%26%C3%A9H%C2%B2%C3%B7%C2%BFJ1%C2%BE%0B%3B%C2%A2%C2%A2%22%C3%AC1%C3%8Dd%24D%C3%9E%C2%A3%C3%B4W%C2%97%C2%B9%1E%C2%AD%25%C2%8EU%C3%A4%3C%1AE%22%C2%AE%C2%A7%24%C2%890%C3%BDI%C3%A4!%C3%B2.%C3%B3%3B%C3%86~%3Fp%C3%81%C3%B2%C3%AD%C2%86e%24%C2%B1%C2%89%C3%BBZ1%C2%8DD%C3%93Uv%26!z%7B%5Cr9%C3%850L%C3%AB%C2%99%C2%A3%C2%B9a%C2%B5k%C3%88%C2%96W%C3%83%C2%9D%C3%8EwE%C2%92OS%07%C2%90%C3%B3k0%C3%8E%C3%90%C2%A2%0A%1C%23%5E%C3%A0%C3%9D%20DDs%7D%C2%BAr1%40%C3%AB%C2%8Bo%40k%C3%92%60R%C2%89%C3%B0%C2%B3%09%10%01%03%C3%95N%25f%12%C3%81%3C%7B%00%C3%BF%C3%B7J%C3%86%C3%B0%C2%82e%0C%2FX%C3%86%C3%B0%C2%82e%0C%2FX%C3%86%C3%B0%C2%82e%0C%2FX%C3%86%C3%B0%C2%82e%C2%8C%C2%BF%16%C3%B3%C3%91%16%C2%A6%C2%BA%5D%C2%84%00%00%00%00IEND%C2%AEB%60%C2%82";


var btn_createIMGComps = group1.add("iconbutton", undefined, File.decode(imgtemp_imgString), {
    name: "btn_createIMGComps",
    style: "button"
});
btn_createIMGComps.helpTip = "create all required compositions\nto start working on a new template";
btn_createIMGComps.alignment = ["left", "top"];
btn_createIMGComps.minimumSize.width = 118;
btn_createIMGComps.preferredSize.height = 30;

// TPANEL2
// =======
var tpanel2 = tab_template.add("tabbedpanel", undefined, undefined, {
    name: "tpanel2"
});
tpanel2.alignChildren = ["fill", "fill"];
tpanel2.alignment = ["fill", "fill"];
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

//var elementsDropDown_array = ["LOGO_NEW", "LOGO", "TEXT-ELEMENT", "-", "MEDIA", "MEDIA-SQR", "MEDIA-1920"];
//var elementsDropDown_result = ["LOGO_NEW", "LOGO", "TEXT_el", "-", "_MEDIA", "_MEDIA_SQUARE", "_MEDIA_1920"];
//var elementsDropDown = grouptab2.add("dropdownlist", undefined, undefined, { name: "elementsDropDown", items: elementsDropDown_array, });
//elementsDropDown.selection = 0;
//elementsDropDown.preferredSize.height = 30;
//elementsDropDown.preferredSize.width = 175;
//var option = elementsDropDown.selection;

var addel_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%C2%9A%00%00%00%1E%08%06%00%00%00%C3%94%C3%9E%07%C3%99%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%04%C2%9BIDATx%C2%9C%C3%AD%C2%9B1l%23E%14%C2%86%C2%BF%5C%C3%A0%24%C2%84%0EX%0E%09h%402B%C2%A2%C2%A2%C3%B1%C2%81%04%12P%C3%A0%C2%A3%C2%81%C3%96WQ%3B%20!%C3%91%C2%91%C3%94%40%C3%A1H%C2%B4%14%C3%A7%16%01R%02%0D%20(.T%C2%9C%C2%84%00%C2%BBC%20%0A%2C%C2%8A%3B%02w%C2%91-(%C2%90%C3%88%25~%14oF%C2%BB%19%C3%8F%C3%AC%C2%AE%3D%3E%C3%9F%C2%85%C3%8C'%C2%8D%C3%A2%C2%9D%C3%B7vgv%C3%BC%C3%AF%C3%9B7%C3%8F%C3%8A%C2%8A%C2%88%C2%90H%C3%9ClN%C3%9D%C3%AA%09%24N%06Ih%C2%89%C2%A5%C2%90%C2%84%C2%96X%0AIh%C2%89%C2%A5%C2%90%C2%84%C2%96X%0A%C2%B1B%C3%BB%08%C3%98%03%C2%AE%17%C3%9A%1E%C3%B0-%C3%B0%C2%B8%C3%B1y%00%C3%986%C3%BD%7B%C2%8E%C3%9F%C3%97%C2%91%C3%A3'%C2%8E%09%2B%C2%91%C3%A5%C2%8D%3F%C2%80%07%03%C2%B6%C2%97%C2%81%2F%C2%81%C2%A7%C2%80%C3%8F%C2%80%C2%87Bs%C2%88%C2%99%40%C3%A2x%10%1B%C3%91B%C3%A7%1F%00g%C3%8C%C3%A7%7BHb%3A%C3%B1%C3%84%0A%C3%AD0%C3%90%3F1%0DTt%C2%93%C2%80_%C3%A2%C2%84p%C3%87%C2%AD%C2%9E%40%04%C3%AB%40%07X%03v%1C%5B%17h%3B%7Dc%C3%A3%C2%B7%C3%A1%C3%B4%C3%B7%C2%81%C2%ACp%C2%9C%01%03%C3%A3%C2%BBY2%C2%B6%7B%C3%BD%22%1B%C3%A6%C3%BC%C2%8B%40%C2%B3p%C3%ACb%C3%AD!%C3%8E%15%C3%A6h%C2%B9%00%0C%0B%C3%87E%C2%9B%C3%8F%C3%9Fe%C2%80%C2%AEY%0B%5D%C2%A7%C2%B1%C2%B9%C3%A6%C3%983%C2%AF%0D%C3%B3%C2%B7%C3%AC%5E%C3%AD%C3%B5J%C2%89%C2%8Dh%C2%A7%03%C3%BD%2B%C3%A4%22%3E%C3%8D%C3%8D%11t%07%C2%BD%C3%89%C2%8E%C3%87%C3%96%00z%C3%80c%C2%A6%C2%9DG%17%C2%AD%01%5C%C3%B2%C3%B8%5Ep%7C%7B%C3%A8%C3%A2v%03cg%C3%A8%17%C2%90%05%C3%AC%C2%96f%C2%85%C2%9F%C2%B5%C2%97%C2%91%15%C3%BC%C3%9C%2F%C2%BD%C3%A3%C3%982%C3%87%C2%BF%C3%8Eu%C2%AD%C3%A0%C3%AA%C3%8E%C2%BB%C3%8E%7DO%23%221%C3%AD%C2%AA%C2%84y%C3%91%C3%B8%3C)%22W%02%3E%C3%BBs%C2%8E%C3%9B%16%C2%91_E%C2%A4!%22%23%11%C3%89%1C%C3%BB%C2%96%C2%88%C2%AC%07%C3%8E%C3%AD%3B%C2%B6%C2%91%C2%884%3D~Y%C2%89%C2%ADk%C3%A6%C3%9F%C2%AD%C2%98g%C3%9F%C3%B8%C2%B5%C3%A7%C2%B4%C3%9By%C2%88%C3%B1%1D%C2%89%C3%88%C2%A5%C2%82%C3%ADb%C3%81%26%C3%86%C3%97%C3%BA%C3%9B%C3%A3%C2%B25%2C%C3%92%C2%A91%2F%7BN%C3%95%7DO%C2%B5%C3%98H%C3%B3%1A%C3%B0%02%1A%C2%B1%26h%24%5B%01~%04%C2%BE3%3E%3F%01o%02%C3%8F%02%C2%AB%C3%86%C3%AF%C2%94%C3%B1%2B%0B%C3%B1e%C2%B4%C3%91%C2%A83%24%C2%8Fj%C2%A1%C3%97%C2%9CK%C2%AF%C2%A6%C3%BF%18-%C3%8B%C2%B4%C3%8D%18%C2%B7%03%03%C2%8EF%C2%AA%16%C3%BAJ%C2%9E%3D%C3%82%C3%A4%C2%8C%C3%8D%C3%B9%5D%C3%B4~%C3%87%C3%A5%C3%AE%C3%B3%11%2B%C2%B4%C3%8F%C2%81%2FP%C3%91%08%C3%B9%C3%AE%C2%B2%C2%98%C3%BC%1F%00%C2%9F%C2%A2%25%0Ek%5B5%C2%9F%C3%B7%C3%A7%183C%17%C3%98%C3%A6%05%3Dt%C2%91%C3%AA%0Am%C2%80%C2%BE.%C3%AB0%C2%A4%C3%BC%15%C3%946sq%C2%AF_%C2%99%C2%B38%C2%AC%C2%9BVd%C2%9B%C2%A3%C3%B7%C3%940%C3%87-3%C3%AE%C2%90%3CE%08%C3%A5Pn%C2%9A%00%C3%93%C3%B9b%C3%B1a%C3%9DBS%C2%87%C2%85%C2%B3%C2%88_%06%C3%AEE%C2%BF%C3%BC%C3%BBM%C2%BB%C2%8F%5CHEn%C2%98v%C2%88%0Al%1E%C2%91%C2%81.%C3%88%0E%C3%B9%C2%93%C2%B7m%C3%BE%C2%96%25%C2%AC%C3%BF%07%C3%AC%26%05TlV%C3%A0%C2%BEM%C3%86%C2%AC%C2%AC%C2%99k%C3%BB%C3%B2%C2%B5%C2%85%10%1B%C3%91%5E%07%5E%01%C3%AE%22%7FuN%C2%80%C3%AF%C2%81%C3%B7%C2%98%0E%C3%83%C3%A7%C2%80%C3%A7%C2%80%0F%C2%81ks%C2%8E%C3%991%C3%97%C3%9Dr%C3%BA%C3%9B%C3%A4%C2%A2%2B%C2%A3%C3%A9%C2%99W%C2%88F%C2%85%C3%AF6%C3%93%C2%BB%C3%98y%C3%98%C2%A4%C3%9E%C3%9C%07%C3%A4Q%C2%B6A%1E%C2%8DB%C2%9C%C2%A7%C3%BE%C2%BD%C2%AE%C2%A1%11p%C2%9D%C2%A3%C2%BB%C3%9A%C2%85%10%2B%C2%B4w%C3%91(%C3%A6%C3%92%02.%03_9%C3%BDO%03%C3%AF%C2%A0%C2%AF%C3%91y%C2%84f%C2%A3%C2%96%C3%BB%C2%A5%0C%C3%90%05%C3%8A%C2%A8%5E%C3%98%C2%96%C3%A7%C3%BC2%C3%9FE%08i%C2%91%C3%AC%C2%A0%0F%C3%9B%C2%90%C3%85D3%C3%8B%00%15%7C%C2%97%C3%BA%C2%A9Emb%C2%85v%10%C3%A8%C3%9F'OPW%C2%81G%C2%81%C2%BB%C2%81%C2%87%C2%81%7F%C2%80'%C3%90(x%1D%C3%B8s%C2%86%C3%B1%C3%AC%26%C3%80%C2%97%C2%8F5)O%C3%B2%1B%C2%A8%18%C2%9BT%C3%A7P-%C3%B2'%C2%BBL%C2%94M%C3%BC%C2%AF%1A%C2%BBQ%C2%B1%C2%B4%C2%99%C3%8E%C3%B5z%15v%C3%B0%C2%8B%C3%9CF%C2%B0%06%C3%95%C2%9B%147%C3%AF%03%7D%10Ck%C2%B4Iu%C3%9Dl%3Ef%C3%9D%C2%A6%3AmW%C3%BC%C3%BC%5B%C3%98%1A%C2%9F%11%C2%91OD%C3%A4w%11%C3%B9KD%0EE%C3%A4%C2%9A9~k%C2%86%C2%B1l%C2%B9!%C2%B4e%C2%B7%25%0F%5B%C3%9E%18y%C3%9A%C2%96%C3%A7%7C%C2%9F%C3%9FH%C3%82%C3%A5%C2%91by%23%C2%84%C2%BD%C3%B7~%C2%85O%C2%99%5D%C3%84_%C2%AE%C3%B0%C2%95%2FB%C3%A5%0D%1F%7D9Z%C2%AA%C2%B0%C3%87%C3%AE%3A%C3%9B9.%C2%A4%C2%BC%11%C3%BB%C2%A3%C3%BA.%C3%BE%1F%C3%8B%C3%B7%C2%81W%C3%91hp'%C3%BA%03%C3%BB%23%C3%80%C3%B3%C3%80K%C3%80%C3%BB%C3%80U%C2%B4%04%C3%B2%C3%83%0C%C3%A3%C3%99%C2%BC%24D%13%7D%C3%8A3%C2%A6%C3%83%7F%C3%A8%C3%A9o0%5D%1E%C2%A8S%C3%8E(%2B)%14_%C3%9F!%C2%BFq%C2%85%C3%9D%C3%A7%13%3A%C2%B6%7D%C2%B3%5C%C3%93%3D%C3%87%25d%C2%AB%C2%93%C2%9EL%11%2B%C2%B4%3D%C3%A0%C2%AC%C2%A7%7F%C2%82%0A%C3%ADc%C2%A7%C3%BF%0D%C3%A0m%C3%A0%19%C3%A0%C2%97%C2%98%C2%81%13%C3%87%C2%8B%C3%98%C3%B2%C3%86(%C3%90%C3%BF7p%C3%85%C3%93%C2%BF%C2%8BF%C2%B1%1B%C2%91%C3%A3%26%C2%8E%19%C2%B1%C2%9B%C2%81%0F%C3%90%C3%84%C3%91V%C3%BC%C3%ADo%C2%9C%C3%9F%00%3F%7B%C3%BC%2F%03%C2%BF%C2%A1%C2%82K%C2%9C%20b_%C2%9D%C2%89D-%C3%92%C3%BF%0C%24%C2%96B%12Zb)%24%C2%A1%25%C2%96B%12Zb)%24%C2%A1%25%C2%96%C3%82%7FD%C3%BC%C3%AA%C2%87%1D%C3%A9g%7B%00%00%00%00IEND%C2%AEB%60%C2%82";


var btn_addElement = grouptab2.add("iconbutton", undefined, File.decode(addel_imgString), {
    name: "btn_addElement",
    style: "button"
});
btn_addElement.preferredSize.height = 34;
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
var gallery = group2.add("dropdownlist", undefined, undefined, {
    name: "gallery",
    items: gallery_array
});
gallery.selection = 0;
gallery.preferredSize.height = 30;
gallery.preferredSize.width = 112;

var addGal_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%001%00%00%00%16%08%06%00%00%00i5t%C2%92%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%01PIDATX%C2%85%C3%AD%C2%96AN%C3%830%10E_%11%5B%22%C3%81%C3%96%5C%C2%A0k%C2%A2p%C2%81%C3%ACQ%2Bu%C2%898%00p%0D.%40%C3%8F%C2%81%C3%A8%3EG%C2%A0%C3%AB%C3%B4%02YWj%0F%C2%90.%3CV%C3%81%22%C2%B1'%C2%800(_%1A9%C2%9E%3F%C2%8E%C3%BD%C3%AD%C3%B1%24%C2%93%C2%B6m%C3%B9%C3%AB8%C3%B9%C3%AD%05%7C%07F%11%C2%A9%20E%11%C2%A5X4%26%09%5E%C3%AC7i%C3%B3%C3%98%01)%C2%9E%C2%84%1A%C2%A7%03%C3%86%C3%9C%01%06%C3%98%00%2F%C3%A2%C3%8B%C2%80%07%2Fn%2F%7C%13%C3%81%C2%97%C3%80%C2%B9%C3%87%2F%C2%A4%C3%9D%02U%C3%9F%C2%82%C2%B4%C3%A9%C2%94%01%C2%AF%C3%B2%C3%9C%00%C2%B7%C3%B2l%C2%80%15%C2%B0%C2%93%C3%85%01%C2%9CI%C3%ABb%C3%BA%C3%B8%15p%C3%951%C3%A7%C2%9A%40ji%C3%93i%C2%86%15R%01S%C2%A0%C3%B0%C3%B8%0A%C2%B8%11%C2%BB%17%C3%9Fc%04%C2%9F%03%17bk1%C3%97%0F%C3%9E%0D%C2%AD%C2%88%12%C2%A8%C2%81%25vW%C3%A7%3D%C2%B15v%C3%97%C2%A7%C2%91%C3%BCV%C2%8C%C2%8E~'4%22%0A%C2%99%C2%B0%C3%82%0A%C3%98%C2%88%2FS%C2%BC%C3%A3G%C2%A0%11q-%C3%AD%1C%C2%9B%C3%83%06%2B%60%C3%96%11%C2%9Fa%C3%B3~%C2%A7%C3%A4s%14%C3%A5%15%C3%A2%C2%AB%C2%93%5Bl-%C3%A6%C3%A0%3EL%C2%AEz%5CrL%C2%B1R%C3%86-%C3%9F%C3%85%C2%87%C3%B8A%C2%88%15%C3%A1%26%7C%C3%A2c%C2%B9%C3%9BcK%C2%AE%3B%C2%A5%C2%82%C3%A3eo%C2%80gl%195%01%C3%BEK%C2%88-%C2%B1%C3%AE%C3%A8%C2%9BO8%23~%C3%A3%C3%B9%C3%BD%C3%98%10%3F%18)%C3%BEv%C2%A8%C3%B1%2F~%3BF%11%C2%A9%60%14%C2%91%0A%0E%16YQm%C2%84U%C3%BFU%00%00%00%00IEND%C2%AEB%60%C2%82";

var btn_addGallery = group2.add("iconbutton", undefined, File.decode(addGal_imgString), {
    name: "btn_addGallery",
    style: "button"
});
btn_addGallery.preferredSize.height = 30;
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
    name: "apText"
});
apText.text = "Lock Anchor Point:";
apText.preferredSize.height = 20;


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
apCheck.helpTip = "Check if you want to set the anchor point  for elements, that change its size. Just like text layers for example.";
apCheck.text = "Expression based";



// tab_fx
// ====
var tab_fx = tpanel2.add("tab", undefined, undefined, {
    name: "tab_fx"
});
tab_fx.text = "FX";
tab_fx.orientation = "column";
tab_fx.alignChildren = ["fill", "fill"];
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
groupFx.alignChildren = ["left", "top"];
groupFx.spacing = 10;
groupFx.margins = 3;
groupFx.alignment = ["fill", "top"];

var colorFill_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%60%00%00%00%1E%08%06%00%00%00%C3%93%C2%B0%1B%C2%89%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%03%20IDATh%C2%81%C3%AD%C2%99Oh%13A%14%C2%87%C2%BF%C2%AA%20%C2%85%C2%88%C3%A6%C2%A2E%3D%C2%B5%C2%82%20%C2%82HP%C3%B0%26%C3%92J%C3%B1%C3%A4%25%07%0B%C3%BE%C2%B9%18%C3%91%1E%C3%84%C2%8B)%C2%8A'%05%C3%A3A%C2%BCW%10%2B%C2%88%C3%9Az%C2%B7%18%C2%85%22%22%C2%B54%C2%B7%C2%82%1E%C2%B4%C2%87%C2%82%12%11%2Cb%C3%90%C2%AA%C3%A8%C3%B30o%C3%89t%C2%BB%C3%99%C3%ACd%23%0B%C3%8D~%C3%B0%C2%98a%C3%9E%C3%9B%C2%B7%C2%93%C3%B7%C3%9B%C2%99%C3%99%24%5D%22BJr%C2%ACIz%02%C2%9DN*%40%C3%82%C2%A4%02%24L*%40%C3%82%C2%A4%02%24L*%40%C3%82%C3%84%15%C3%A0%25%C3%B0%16%C3%98%C3%9E%C2%86%C2%B9t%24q%05%C3%B8%01%C3%AC%04%C2%A6%C2%81%C2%BE%C3%B8%C3%93%C3%A9%3C%C3%A2%0A%C3%B0B%C3%9Bm%C3%80%1B%60_%C3%8C%7C%1DGW%C2%8Co%C3%82%23%C3%80u%C3%A0%2F%C3%B0%1BX%0F%7C%03v%03%0Bm%C2%99%C2%9D%1BEm'%C2%80%C3%B9%C2%98%C2%B92j~j%C3%9A%0E%02%C2%8F%C2%81%1Dj%C2%93%3A%C3%B6N-2%C3%ABZ%C2%9C%C2%A0%5D%C3%BC%13%C2%98%C2%950%0Dl%05%5E%01%07%1D'%C2%92%C3%87%140g%C2%8D%C2%8D%C3%AA%7D%16%23%C3%A6(i%5B!%C2%BE%00%C2%B7%C2%80%C2%9E%C2%80%C3%B1I%60%0C%C3%98C%5D%00o%C3%AB%C3%B5%C3%9A%C3%BF.%C3%80e%C3%A0%1A%C3%B5%C3%A2%C3%9F%C3%97%C3%B1%5D%C3%80S%60%3F0Et%11%C3%B2%C3%80%C2%B8%C3%B6%C3%A7%C3%95r%40A%C3%9B%01%C2%A2%C2%8B%C3%90N%C3%860%2F%1965%C2%B5%2B%C3%AD%C2%BA%C2%89%C3%AB%19P%22%C2%B8%C3%B8%00_%C2%81%C3%83%C3%80%0C%C3%A6L%C2%98%026G%C3%8C%09f%C3%AB%C3%A8%C3%83%14%7C%40%C3%87r%18%C2%81%C2%BC%C3%BE8%20j%C2%B3%C2%96%2F%C2%88f%C3%B1e%C3%B5%17%C3%94_%C3%B4%5D_%03%C2%AA%3E%C2%ABa%C2%B6%C2%A6%C2%AB%11%3EW%24%5CV%C3%80%25%C3%AA%C2%93%C3%BC%09%0Ca%C3%9E%C2%80f1%C3%8B%C3%BE%03u%11%C2%9E%00%07%C2%80%C3%A3%C3%80%C3%8D%C2%90%C2%9CY%C2%A0W%C3%BB%C2%A3%C3%96x%058%C2%A3%C3%BEym%C3%8B%C3%9A%C2%8EbVD%01S%C3%80%01%C3%A0Y%40%C3%9Ef%C3%B1%C3%BD%1A%C3%9BH%C3%84%0C%2B%C2%B7%C2%A1j%C2%83%C3%B1%C2%96q%11%60%C3%84%C3%AAw%03G%C3%94%3C%3Ea%0AW%C2%A1%C3%BE%C3%A4%2F5%C3%89%C2%99%0B%C3%B1%C3%99%C2%82%141%C3%85%C3%B4%C2%84%C2%B1%C3%87%0B%C2%AC%14%C2%A0%C3%A0%10%7F%C2%83%C3%A5%C2%9F%C3%8D%C3%A3%C2%A4%C2%9A%C3%8D%C3%A9%C2%90%C3%B9%C2%B6%C2%84%C2%8B%00%C2%BF%C2%9A%C3%B8%C2%B7%C2%B0%5C%C2%949%C3%A0%5E%C2%93k*!%3E%C2%BB%C2%88%1E%C2%8B%01%C3%BDlH%C2%8E(%C3%B1~%C3%B1%3C%C2%82%C3%8E%C2%80*m%7C%C3%BA%C3%81%C3%AD%0C%C2%B8%C3%A8%10%3B%07%1C%C3%82%C2%88%11%C3%B6%05m%C2%91%C3%BA%1BK%C3%81%1A%C3%8Fb%C3%8E%C2%86%12%C3%B5-*%2C%C2%87%0BQ%C3%A3%C2%83%C3%8E%C2%80%C2%B6%C3%A3%22%C3%80%1D%C3%A0%5C%C2%84%C2%B8%19%C3%8C%1B%C3%90%5E%C3%A0!%C3%B0%08X%1B%12%C3%AFm5y%C3%8CyR%C3%966%C2%8B)%C3%96%C2%84%1A%C2%98%7D%C2%BB%C2%84%C3%99J%C2%BC%C3%B3(%C3%A8%09v%C2%8DO%0E%11q%C2%B5%C2%B3%C3%92%C2%98%C3%97%22%C2%B2QD%C2%BAEd%C3%81%1A%3F%C3%9F%24gQD%C3%9E%C3%BBr%C2%95E%24g%C3%85%C3%A4%7D1_%C3%B4%3A%C3%8F%C3%AF%C3%91%C3%9Fb%C2%BCm%C2%B7Ed%C2%B0%C3%81%5C%7B%C3%94%C2%8F%C3%86%0Ck%7F8%C3%A4%C2%9A%C2%86%C3%96%C2%8A%00%C2%88%C3%88)%11%C3%B9%C3%A3%2B%C2%98W%7CD%C3%A4%C2%98%C3%8F%C3%B71b%C3%9El%C2%83%C2%82%C3%98%C3%96%2B%C3%8B%C2%85if%C2%AE%C3%B1%C2%88H%C3%86%C3%81%C2%9F%C2%89xM%5B%05%40D%C2%86D%C3%A4%C2%BB%16%C3%B8%C2%B9U%C3%BC%C2%A0U%C2%B2%14%C3%A3%3E%C2%AB%C3%9A%C3%A2%C3%BC%16%04%C3%A6%C3%B7%C2%9FM%C2%98WP%C2%9B%0D%C3%80%5D%C3%A0(%C3%B0%19%C2%B8%00%3C%C2%88s%C2%A3%C3%95J%5C%01Rb%C2%92%C3%BE%23%C2%960%C2%A9%00%09%C2%93%0A%C2%900%C2%A9%00%09%C2%93%0A%C2%900%C2%A9%00%09%C3%B3%0F%C3%BA%0E3SR%C3%88%C2%BB%C3%A6%00%00%00%00IEND%C2%AEB%60%C2%82";

var colorFill = groupFx.add("iconbutton", undefined, File.decode(colorFill_imgString), {
    name: "colorFill",
    style: "button"
});
colorFill.preferredSize.height = 30;
colorFill.preferredSize.width = 110;
colorFill.alignment = ["left", "top"];

var scale2fill_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%60%00%00%00%1E%08%06%00%00%00%C3%93%C2%B0%1B%C2%89%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%03%C2%8AIDATh%C2%81%C3%AD%C2%99%3Dh%14A%14%C3%87%7F%17%15%3F%12%C3%91%C3%ABDlL%C2%B4U%C3%A4D%C2%B0%C2%95%0B%C2%A4%C2%B3%C2%90S%2C%C3%84F%13%C3%90%C3%86%C3%8A%04D%1B%C2%9B%C2%B3%C2%B2V%0B%C2%B1%11%C2%8C6v%C3%91%1C%C2%A8h%C2%99C%C3%AC%C3%8D%C2%B5%C3%86%C2%AF%C2%9C%C3%A8%C2%A9%C2%A8%C2%89%C3%8F%C3%A2%C2%BDa%C3%A76%7B%C2%97I%C3%B6t%C3%81%C3%AC%0F%C2%86%C2%9D%C2%9Dy3%3B%C3%BB%C3%BE3of%C3%AF%0A%22BNv%C3%B4e%3D%C2%80%C2%B5N.%40%C3%86%C3%A4%02dL.%40%C3%86%C3%A4%02dL.%40%C3%86%C2%AC_%C2%A1%C3%BD%16%60%13P%C3%B0%C3%8A~%03%C2%9F%C2%81E%60%03%C3%90%C3%AF%C3%95%C3%BD%02%C2%BE%C2%A6%19%C3%A0%C3%BFN%C3%A8%0A(%00O%C2%81%0F%C3%80G%C2%BB%C2%BA4%0FT%C3%8D%C3%AE1%C3%90%C3%B4%C3%92%1B%C3%9A%C3%85%C3%8A%C2%89Q%08%C3%BC%10%C3%9B%07%C3%94%C2%81Y%C3%A0%06%C3%B0%C3%83%C2%AB%C3%BB%05%C3%9CCW%C3%81N%C3%A0(p%05%C3%98%01%7CGWD%C3%BE%C2%B5%C3%97%C2%81%C3%90%10%C2%B4%17%C3%B8%09%C2%9C%04%5Ev%C2%B1%C3%BB%06%C2%9C%03%C2%B6%01%C3%AF%C2%80%C2%AD%C2%A9F%C3%97%3B%C3%86%C3%ADz%1Fh%04%C3%98%0FX%C2%8A%C3%93%C2%B2%C3%AB%08%C3%B0%00%C3%98ci%C3%8A%C3%8A%5E%5B%0A%26T%C2%80u%C3%A8Lov%C2%B1%C3%99%0E%3C%07%C2%86%C2%80%C2%9B%C2%A8%C3%B3O%04%C3%B4%5DDC%C3%98%C2%A8W%C3%96%00%26P%C2%87%C3%B5%02%17%22%C3%AB%C2%84%09p%1D%5D%C3%81q%C2%A6%C2%80%3B%C3%80~%22%01%C2%86%C2%AC%C3%8E%5D%C3%BF%C2%8A%00Il%04%16%C3%90%C3%8Dw%3B%C3%AD%C3%8E%C2%BF%60%C3%B99%C2%96%0F%3F%C2%93%40%19%15%C2%B7nee%2B%1F%06j)%C3%86%C2%98%C2%86%3B%C3%80%C2%8BXY%C3%8B%C3%92%C3%A5%5E%3D%24%C3%8D1%C3%B4%25p%C2%97d%C3%A7%C2%83%C3%AE%17%C2%97%02%C3%BA)%C3%9B%C3%B5%1A%C3%AA%C3%B0a%C3%8B%C3%97%C2%80A%C2%AB%2B%C2%A2%C2%82%C2%88%C2%A5Y%C2%A2%C2%B0%C3%A2%C3%BA%C2%98%C2%89%C3%95%C3%BB%2B*N%09%C2%98%C3%B6%C3%ACg%C2%80J%C3%8C%C2%A6%C2%85N%20%3F%C2%B5%C3%90%C3%90t5%C3%A0%C2%BD%C2%82H%C2%B3%02%C2%B6%C2%A0%C3%8B4%C3%89%C3%B9%C2%A01%C3%B1%22pd%C2%99~%1A%C2%A8%C2%A3%C2%AB%C2%A8%23k%C2%96%26%3C%C2%9B%C3%89X%C3%9D%C2%B8%C3%997%C3%AD%C2%B9%C2%93%C2%A8H%C3%97%C3%8C~%1C%3D%2C%C3%94%C2%89V%C2%95%C2%A3%C2%88%3A%3Fn%3Fi%C3%AF%C3%A1B%C3%94%00K%C3%83%C3%90%5C%C2%87%C3%B2U%C2%93F%00%C3%90%C2%99%C3%94%C3%87R%C3%A7%03%C2%9C%01%0E%5B%C3%BD%C3%AF.%7D%1CG%C2%9DUB%C2%9D%C3%ACVD%1D%18%C2%B3%7C%C3%99%C2%B3uG%C3%9C%0A%C3%AADW%C3%AE%C3%9A%C2%B8~J%5E%C2%BD%C3%8F%C2%A8%C2%95%C3%97%C2%89%C3%82%C2%9BkS!%12%C3%A5%C2%B4%25%C2%9F%C2%B3%5D%C3%9EcU%C2%A4%15%C2%A0%1F%C3%B8%C2%84%C3%8E%C3%B6%C2%87%C3%A8%11%C3%94'%C3%A4%1B%C2%A0%0E%1C%C2%A4%C3%9Dq%15%C2%BB%C2%8E%C2%A3%C3%A2%3A%C3%9C!%C3%A0f%C2%AC%C3%9C%C3%99%269%C2%BC%13.%0Cu%22i%0F%C2%98%C2%A3%C2%87%C2%B3%1F%C3%92%C3%AD%01%C3%8F%C2%81g%C3%80%2Bt%60oW%C3%91G%C2%99(%0E7%C3%91%C3%99w%C2%9C%C3%88%C2%B9E%C2%92O%5Ee%C3%94yU%C3%94%C2%91%C3%AE%C2%943%C2%8C%C2%8A%1E%0F%3BI%C3%94%C3%8C%C2%B6%60%C3%AD%26b%C3%AD%C2%92%C3%B6%C2%80%C2%9E%C2%93f%05%C2%9C%C3%AA%C3%81%C3%B3kD%7B%C3%80%C2%B4%C3%9D%17%C2%896%C3%84%1A%C3%91%C3%91q%10%C2%8D%C3%93u%C2%A2%15%C3%A2%C3%AC%1DEt%25%C2%94%C3%AC%C2%BE%C3%82%C3%92c%C3%A7%7D%C2%A2%C3%BDf%14%15%C2%B8j%C3%BD%C2%8F%C3%B1%C2%AF%11%C2%91%C2%90tLD%C2%BE%C2%8A%C3%88%C2%81%40%7BD%C3%A4%C2%91%C2%88%7C%11%C2%91%C2%BEe%C3%ACJ%222-%C3%AD%C3%8C%C2%8BH5f3%1B%C2%B3q%C3%B5E%11%C2%99%C3%B1%C3%8Ag%C2%AD%C3%8EQ%C2%8E%C3%A5%11%C2%91J%C2%97%C3%BE%10%C2%91%5B%222%C3%92a%C2%BC%3B%C2%AC%1E%C2%B39o%C3%B9%C3%B3%5D%C3%9AtL%C2%BD%C3%B8)%22%C2%89%C3%9D%C3%A8%06%C3%B6%13%C3%98%C2%B5%C2%82%C3%B9PBgd%C2%A7%C2%8F%C2%A5%22%C3%91%C3%8C%C2%8F%C3%A3%C2%8E%C2%AC%C2%8D%0E%C3%B7I%0C%12m%C3%88%3E%03D_%C2%BDI%C3%B8%C3%B5.%C2%BF%5C%C2%9BDB%05(%00O%C2%80C%C3%80%C3%A6%C3%80%C2%BE%C3%9F%C2%A3%C3%A1%C3%A0%C3%B6J%07%C2%B5%C2%96%08%15%C3%80%C2%91%C3%B4st%12%C2%8B%C3%A8lXX%C3%A5%C2%B8%C3%96%0C%2B%15%20%C2%A7%C3%87%C3%A4%C3%BF%C2%88eL.%40%C3%86%C3%A4%02dL.%40%C3%86%C3%A4%02dL.%40%C3%86%C3%BC%01%C3%84%1C%10%C2%84'%C3%BAu%0F%00%00%00%00IEND%C2%AEB%60%C2%82";


var scale2fill = groupFx.add("iconbutton", undefined, File.decode(scale2fill_imgString), {
    name: "scale2fill",
    style: "button"
});
scale2fill.preferredSize.height = 30;
scale2fill.preferredSize.width = 110;
scale2fill.alignment = ["left", "top"];

// tab_files
// ====
var tab_files = tpanel1.add("tab", undefined, undefined, {
    name: "tab_files"
});
tab_files.text = "FILES";
tab_files.orientation = "column";
tab_files.alignChildren = ["fill", "top"];
tab_files.spacing = 0;
tab_files.margins = 0;

// files_wrapper
// ======
var files_wrapper = tab_files.add("group", undefined, {
    name: "files_wrapper"
});
files_wrapper.orientation = "column";
files_wrapper.alignChildren = ["left", "fill"];
files_wrapper.spacing = 10;
files_wrapper.margins = 12;
files_wrapper.alignment = ["fill", "top"];

var importfootage_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%C2%9A%00%00%00%1E%08%06%00%00%00%C3%94%C3%9E%07%C3%99%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%04%C3%85IDATx%C2%9C%C3%AD%C2%9BAh%5CU%14%C2%86%C2%BF%C2%88%C2%B8%C2%90%C2%B7%C2%99%C2%85tV.%C3%82%C2%B8s%11%C2%8C%C2%94%40%02%C2%82LiDTD%C3%9B%C2%82%0BG%10%C2%92%C3%85%2C%C2%AC%1B%C2%A7%0B%0BJ%043%C2%9Bf%C2%A3%C2%8B%26%1B%C3%ABF0%C3%ADB%C2%BA1%24%08BD%C2%A9%04Rp%23%24%C2%82%C2%8BB%02%C3%92%2C%7Cu%C3%A1%C3%A6%C2%B88%C3%A7%C3%B2%C3%AE%C2%BCyof%C3%9E%C2%9B%C3%A45%C2%B6%C3%B7%C2%83%C3%8B%C3%8C%C2%BD%C3%A7%C3%9Csny%7F%C3%8F%C2%BD%C3%B7M%3B!%22%04%02'%C3%8D%13%0F%7B%01%C2%81%C3%87%C2%83%20%C2%B4%40%25%04%C2%A1%05*!%08-P%09Ah%C2%81J%08B%0BT%C3%82%C2%93%C3%87%10%C3%A3%15%C3%A0e%C2%AF%C2%BF%05l%1CC%C3%9C%C3%80%23%C3%84q%08%C3%AD%12%C3%90%C3%B2%C3%BA%C3%8F%10%C2%84%16Hq%1CB%0B%C2%94%C2%A3%C2%9E3~P%C3%A9**%C2%A2%C2%8C%C3%90%C2%9E%03f%C2%BD~%23eo%00%C3%AFy%C3%BD%C2%9F%C2%81%C3%9FK%C3%A4%19%05%C3%B7%C2%B3%C3%869t%C3%8B%3E-L%02%C3%97%C2%81u%605%C3%83%5E%07%C3%96r%C3%A6~%09%7C_2o%04t%C2%80%C2%ABc%C3%8C%07%C2%88K%C3%8E%C3%8F%C2%A5%C2%8C%C3%90.%01K%03%C3%AC%C2%B3%C3%B4%0A%C3%B1%13%C3%A0%C3%93%12y%C3%BE%C3%8F4%C2%AD%0D%13%C3%BF%C2%87%C3%B4%3FT%C2%BF%C2%A2%C3%953%C3%86%06%C3%99%22%C2%B2%2B%C3%A5%C2%A8q%3A%C3%80%5D%C3%A0%C3%A6%08%C3%B3%0AQFh%C2%9F%03%2F%00o%C2%8E%C3%A0%C3%BB%1D%C3%B0Y%C2%89%1Ce%C3%99%04%C2%8E%C3%90%07%C2%BC%0C%C3%94%C2%80.ZY%C2%BEE%2B%C3%8D%16p%C3%91%C3%BC%C2%96%C2%81i%C2%B4%C3%AA%2C%C2%9B%7D%07X%C2%B4O%C2%80%0B%C3%A8%03%C2%98%C2%B6%C3%BE%C2%BA%C3%85%C3%9C%C2%B1%C2%B1e%C2%8B9%09%2C%C3%98%C3%9C%C2%8E%C3%B9.%C2%A0%C2%82%3B%C2%97%C2%B3%C3%9E%C2%98%C3%AC%C2%878%C2%85%C2%9E%7B%23k%7Bh%C2%A5%3B%40%1F~%1B%C3%9D9bk7%C3%8Cg%C3%89%C3%BC%C3%97l%2C%C3%B6%C3%A2%C2%B8%7C%5D%2FN%C3%87%C2%B3a1n%C3%A6%C3%A4p%C3%B3%C3%8A!%22e%C3%9AS%22%C2%B2%25%C2%83%C3%B9%C3%81%C3%BC%C3%8A%C3%A6%18%C2%A59%C2%9A%C2%A9%C3%BE%7D%11%C3%99L%C2%ADg%C3%93%C3%86ED%3A%C3%A6%C2%BF%C2%99%C2%B2%C3%AF%C3%9B%C3%B7%7D%C2%B37%C2%BDx%C3%8B%22r%C3%9D%C3%AB%C3%97%3C%C2%BB%C3%8FB*%C3%8Ef%C3%86%C2%BA%C3%AB%22r%5BD%1A%C3%B6%C3%9D%C2%B5%C3%88%C3%9A7%222o%C2%BE%C2%91%C2%AD%C3%97%C2%ADyID%C3%9A6%C2%8E%C2%88%C2%BC-%22k%C3%96o%C3%98%C3%B7%C2%BA%C3%99V%C3%8C%C3%AE%C3%B2vD%C2%A4%C3%A5%C3%85iy%C2%B6%C2%96%C2%8D%C3%B9%C2%B6%C3%88%C2%B3%C2%ADd%C3%BC9Fne%C3%9F%C2%A3%C3%BD%0B%C2%BC%0E%C3%9C%C3%89%C2%B1%C3%9F%01%C3%9E0%C2%BF%C2%87%C3%81%22%C2%BD%C3%A7%C2%B6%C2%AE%C3%B5%C2%BB%C3%96o%C2%A6%C3%BC%C2%9D%C3%BDE%C3%ABO%C2%A2%C3%95j%C3%81%C3%BA%C2%AB%C3%80%15%C2%92JW%C3%B3l%C2%8E%C2%8B%C3%80%C2%84%C3%B9%C2%AEz%C3%B3%C3%B2%C2%AA%19%C3%80%0AZ%7D%5C%5B!%C2%A9%22%C3%AE%C2%9C%16%03%C2%B7%C3%90*%17%C2%99%7D%C2%83d%C3%8Bu%C3%9B%5C%C3%83%1Bs%C2%95%C3%A7%16%C2%B0M%C2%B2%C2%A5%C3%86%24%15%2C%02%1Exk94%1F%C2%97%C3%A3%C2%AE7%C3%AF'%1B%C3%8B%C2%BB%C3%80%0Ce%C2%9C%5B%C3%A7%3F%C3%A8%3B%C2%B4%1F%C2%81%C3%A7%C2%BD%C3%B1%C3%9F%C2%80W%C2%81%C2%BF%C3%87%C2%88%3D.GC%C3%BAy%C3%BE%C2%BE_%C3%8DZz%3C%2F%C3%96%C3%BAhK%C3%AB!%7DF%C2%8B%C2%81%C2%B9%0C%3F'%10%C3%97%C2%B2%0E%C3%ABu%C3%BA%C2%B7%C2%B6%18%C3%9D%02%C2%9D%40%22Tx%C2%A0%22l%01g%C2%AC%C3%AF%04%C3%ACr%C2%B4S%C2%B1%0Er%C3%B2%C2%8EDQ%C2%A1%C2%BD%06%7C%0C%7C%C2%8D%C2%9E%19%C3%AE%C2%A3%7Fc%C2%BF%02%C3%8E%C2%A2%C2%95%C3%AC%7D%C3%A0%2F%C3%B3o%03%C3%AF%C2%A2%C3%A7%C2%B4%C3%9Be%17Y%01%C2%B5%C2%8C%C2%B1%23%C2%86%0Bt%5C%C2%B2%C3%8EhY%0F%C3%93%C2%89%2B%C3%8E%C2%B1g%C3%8Ds7%C3%90%1B%C2%A8%C2%B8%C2%9C%C3%A8%1C%C3%A7m%C3%BC%C3%90%C3%BA%1B%C3%A8%19%C3%8D%C3%A5%C2%BA%C2%9AZ%C3%9B%C3%BC%C2%80%C3%9CC)*%C2%B4k%C2%A8%C3%B2%C3%8F%C2%A2%5B%C3%88%2F%C2%B6%C2%98%C3%B9%0C%C3%9F%19%C3%A0%0Bo%C3%9Ei%16%C2%9A%C3%9B%06'%C3%AD%C3%B3%08%C3%BD%C3%B3m%C2%91%5C%06%40%05%C3%A9%C2%B6%C3%9Du%C3%8F%3F%C2%8F%0B%C3%B6%C3%99%1D%C3%A8%C3%95%C3%8B.*%C2%889%C2%92%C3%AA3%C2%8B%C2%8A%20%C2%B6%C3%8F%C3%B3%C2%A8%C2%800%C2%BF%C3%88%C3%A6%C3%B9%07%C3%BB%C3%88%1B%C2%8F%C3%91%C2%AA6e%7Dg%C2%AF%7Bs%C3%8Ex%C3%BE%7B%16%C3%97m%C3%8Bsh%C3%B5s%C2%82-LQ%C2%A1%3D%C3%AD%7D%C2%9FA%C2%85%C2%96%C3%87L%C3%8E%C2%BC%C3%93%C3%88%1F%C2%A8%C3%98j%C2%A8%C3%88%16m%7C%C3%95%C3%86%3A%C3%A8%C3%AD%C3%92%C3%B9%5E%C2%B1%C3%8F%3C%C2%A1%C3%ADX%C2%9CikE%C2%84%C3%A6nxm%C2%92_%5C%C3%9C%18%C3%A8N%C3%92%C2%A1w%C2%8B%C3%AD%C2%92%08%C3%80%C2%BFun%C3%93%C3%BB*j%1B-%0A%C2%87%C3%B4%C3%A3*%60%C3%97r%2C%C2%A1%C2%82%C3%8E%C3%8AQ%C2%9C%C2%82%C2%B7%C2%87%7B%C3%9E%C3%AD%C3%AA%C3%B2%10%C3%9F%C3%8B%C2%9E%C3%AF%C2%BDqn%2C'%C3%98%C3%9C%C2%AD%C3%93%C3%9D%C3%A8%C2%9A%03%7C%C2%A7Ed%C2%B2%60%C3%BCA%C3%B1%C3%AAC%C3%A6F%222'%22S9%C3%B6)%C2%B3G%19q%C3%BD9%0D%C3%ABG%C3%9E%3CwSM%C3%87%5C%C2%92%C3%A4%C2%96%1A%C2%99%C3%AFTF%C2%8E%C3%82m%C2%9C%C3%8B%C3%80Kc%C3%9AO%23%C2%83%5E%C2%B0%C3%AE%0C%C2%B0%C2%95%C2%897%C3%AC%C2%9DTL%C2%B2uf%C2%B1%3B%20%C2%AE%1F%7B%2Fc%C3%9E%01%C3%B0%16%C3%BD%07%C3%BE%06Z%C3%8D%5C%C3%BE%C2%BC%1C%C2%85%C2%99%10)%C3%B4%C2%9FS%C3%BE%04%C2%9E-%C2%91g%C2%9F%C3%BE%C2%9F%C2%AAN%03n%C2%BBt%C3%A7%C2%B1%C3%87%C2%89%06%C3%BD%C3%8Fd%C2%97%13%C3%BA%C2%AD%C2%B5%C2%A8%C3%90%C3%9E%01%3E%40%C3%9F%17%C2%8D%C3%8A%03%C3%A0%23%C3%A0%C3%97%22%C2%89%02%C2%8F%16E%C2%85%16%08%C2%94%22%C3%BC%0B%C3%9B%40%25%04%C2%A1%05*!%08-P%09Ah%C2%81J%08B%0BTB%10Z%C2%A0%12%C3%BE%03%C3%AF%C2%AD%C3%88%3B%C2%89%C2%9C%1DJ%00%00%00%00IEND%C2%AEB%60%C2%82";

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

var orgproject_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%C2%9A%00%00%00%1E%08%06%00%00%00%C3%94%C3%9E%07%C3%99%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%05IIDATx%C2%9C%C3%AD%C2%9BOh%5CE%1C%C3%87%3F%C2%A9%C2%8AB%C2%B7b%C3%B0%C2%B2%C3%A0m%C3%89%C2%A1%C3%87%C3%80%16A%C2%BA%1E%C3%84M%1BDO%C3%AD%0A%C2%A2R%10%C2%BA%1Er%C3%AAisQ%C2%91%5C6%C2%8A%08%C2%8A%C2%87%24%5E%C3%B4%60%C2%A1%C2%B1%07%11%C2%AC%C2%B2%C3%81SE%C3%81%C2%AE%C3%B1%C3%8F%C3%81%C2%83I%3Cx%C2%A9%C2%8A%C2%BB(%01%C3%81%C2%B6%C3%B9y%C2%98%C3%9F%C3%B0~%C3%BB%C3%B2%C2%B2%3B%2F%C3%99%3Ci%C2%9D%0F%0C%2F%C3%B3%C2%9B%C3%9F%C2%9B%C2%99%C2%B7%C3%B3%C3%8D%C3%AF7o6%C2%99%10%11%22%C2%91%C3%83%C3%A6%C3%88%7F%3D%C2%81%C3%88%C3%BF%C2%83(%C2%B4H!D%C2%A1E%0A!%0A-R%08Qh%C2%91B%C2%88B%C2%8B%14B%14Z%C2%A4%10B%C2%85v%14x%05%C2%B8%01%C3%BC%06%C3%BC%0A%C3%B4%C2%80%2F%C2%81g%C2%81%07%C2%81%C3%BBS%C3%A5%C3%A8%C2%B8'%1B%C2%B9%7D%C2%99%08%3C%C2%B0%C2%AD%03%C2%AB%C3%80'%C3%80%C3%9B%C3%80M%C2%9C%C2%B8%C3%8E%03%C2%8F%03%C3%9F%03%C3%9B%C3%80%C2%84%C3%BA%C3%9F%03%C3%BC%05%C2%BC%0B%5C%19%C3%AF%C2%94o%1BZz%5D%05%C2%B6%C3%86%C3%94g9%C3%83v%7D%C2%9F%7D%C3%8D%02%1BZ%0E%C2%9D%C2%BB%03%C3%BD%1E%02%C3%BE%04%C3%9E%07%C2%BE2%C3%B6%C3%8F%C2%80g%C2%80%C3%87%C2%80%7F%C3%94%C2%B6%C2%83%13%C3%9C)%C3%A0%0D%C3%A0%1B%5C%04%3C%0CZ%40%13%C2%A8%18%C3%9B*%C2%B0%08t%0Fi%C3%8CP%C3%9Az%C3%AD2%1E%C2%A1%C2%95%C2%81%C2%95%0C%C3%BB%06%C3%AEy%C3%B3%0A%C2%AE%C2%A4%7D%C3%AEWh%25%C3%9C%C3%A7%C3%BFR%C2%88s%C2%A8%C3%90vpQ%C3%AC.3%C3%889%C3%A0a%C3%AD%C3%A3w%5C%04%C3%B3%C3%9C%C3%80%C2%89%C3%ABQ%60%19x%1D%C2%B8%1A8V(m%C2%92%C2%A8%C3%91%05%C3%BA%40%15h%C3%A0%22%C3%B0%09%C3%B2-p%1D%C3%A8%C3%A0%C2%84%C3%BA%C3%B4%18%C3%A67c%C3%A66N.%C3%A0%C2%B2%C2%87%C3%A7%0C%C3%AEs%C2%B8%60le%06%C2%85%C3%A7%23%C2%A1%C2%B5%7D%C2%98%C3%91wY%C3%BB%C3%9E%0Eh%C3%B3B%0DCDB%C3%8As%22%C2%B2)%22Oi%C3%BDI%11%C2%B9%25%C3%A1%C2%AC%C2%8B%C3%88%C3%B1%C3%80%C2%B1BJ%C3%85%C3%B4%C3%9D2%C3%B6I%C2%9D%C2%A7%C2%88%C3%88%C2%92%C3%9A%C3%9A%22%C3%92%11%C2%91%C2%86%C2%88%C3%B4%C3%B4g%C3%B4%C2%BEM%19%C3%A4%C2%9A%C2%88T%C3%B7h%C2%B7mU%C3%AD%C2%A7%C2%A5%C3%BD%C3%B7%C3%94%C2%A7m%C3%A6%C3%92%C3%91R%15%C2%91%C2%A6%C2%A9%C3%9B%C3%92T%C3%9FFj%C2%ACKf%2C_%C3%8A%22%C3%B2%C2%B1%5E%C2%AD%7D%C3%8A%C3%98%17DdN%C3%AB%C2%B3%222-%22o%C2%8A%C3%88%C2%8A%C2%88%5C%C3%94v%7F%C3%BFY%11%C2%A9%C3%A9%C3%8F%C3%96o%25%C3%B5%C2%99N%1B%C3%BBE%119'%22%25S_1%C3%BD%C3%ACY%C3%B2%0A%C3%AD%09%C2%AD%C2%BF%26%C3%B9%C3%A8%C2%89%C3%88%23%C2%81c%C2%85%C2%94%C2%86%C3%A9%7B2%C3%95%C3%96R%C3%BB%C2%A6%24%0Bn%C3%B1%0B%C3%AC%7D%1A%19%C3%B7T%C3%8D%C2%BC%5B%C3%A2%16%C3%9E%C3%97%11%C2%91%C2%BA%C3%A9o35F%5D%7Dl%C3%9D%0A%C3%8D%C2%8B%C2%B2'%C3%AE%17%C2%A6n%C3%AAv%2C%3F%C2%97QB%C2%AB%C2%89%5Bp%C2%BF%C3%B8-%C3%B5)%C2%A9%7DV%C3%BDJ%C3%9A%C3%A6E4%C2%A7m%C3%9E%C2%AFf%C3%BC%16%24%11%C2%94m%2B%C2%9B%C3%BA%C2%94%C2%8E%C2%97%C2%9EOf%09M%C2%9D%C2%9E%1D%0D%C2%99S9%C3%AF%C3%BB%11%C3%B8%25%C3%A7%3D%C3%83%C2%B0%7B%C2%B2~%C2%80%0F%C3%80%1A.%25%C3%B6IR%C3%AE%16.UN%C3%A2Rq%C3%85%C3%98g%C3%94%C2%B7%C2%8FK%7F%0D%C3%B5KsB%7D%C2%AE%C3%A1RwU%C3%87%C2%B2%2Ck%C2%A9%C3%A2%C3%923%C2%B8%7D%C3%95%16%C3%89%5EnU%C3%87%C3%A9%C3%A2%C3%92xE%C2%AF%C3%A9%C2%BE%C3%8E%C2%A4%C3%AA5%C3%A02IJ%C3%BB%02%C2%97%22%C2%A7%C3%95%C3%B6%C2%A9%C3%9A%C2%B7%C3%95o%01%C2%B7%C2%86%1E%C3%AF%C2%B7A%C2%92%0A%C2%BF%03N%03%C2%9B%C3%9A%C3%A6%C2%B7%3D%C3%97%C2%B5%0F%C3%9F%C2%9F%C2%B7%C2%8Dd%3FB%7B%C2%80%C3%9D%C2%8B8%C2%8A%2B%C3%80%1F9%C3%AF%19F%C3%88%C3%9E%2B%C3%AD%C2%B3F%22%C3%8Ae%C2%92%C2%BD%5C%C2%87%C3%A4y%C2%96%C2%8D%7F%03%C3%B7%C2%A21%C2%8A~%C3%AA%3A%C2%8C%25%C2%9CX%C3%BD%0B%0B%24%C3%A2m%06%C2%8E%C2%97%C3%A6%1D%06%C3%B7%C2%BF~s%C2%9F%C2%B5%7F%C3%9A%C3%86%C2%89%C3%8C%0A%C3%8D%C3%97%17R%C2%BE%C3%97S~%1E%C2%BF%C2%B7%0B%C3%9F%C2%9F%C2%91_h7%C2%81c%C2%B8%C2%B7%C3%90P%04%C3%B8%1C%C3%B8%3B%C3%A7X%C3%83%C2%B0%1B%C3%AC%16%C2%83%C2%8B%C3%A6%17%2B%1D%09%2C%3Eb%C2%AC%19%3F%1F%C3%9D%20Y%C3%B4.I%14%C3%AC%1Dp%C3%8E-%5CD%C3%AB%03%2F%1A%C2%BB%17%C3%A8%3C%C3%89s4q%C3%8F%C2%92%C3%B5%0Bu%C2%99%C2%B0(%C2%92%C2%B5%C2%A1%2F%C2%B1%7B%C2%B3%C3%AF%C3%AB%C3%A7%C2%8D%C2%AD%C2%8C%C3%8BZYB%C3%B3%C3%87%22Y%C3%BD%C3%AFI%C3%9Eo%06vp%C3%A7g%C3%87r%C3%9C%C2%B3%01%C3%BC%C2%94s%C2%9CQl%C2%91%2CJ%1B%C2%97%C2%B6%3A%C2%B8P_%C3%81-%C3%9Eb%C3%B6%C2%AD%40%C2%92%06%7Dz%C2%AA%C3%A3%16%C2%B7%C3%8D%C3%AE%C3%B4X%C3%81E%22O%C2%8B%C3%BC%C3%94%19%3C%C3%AEhj%3F656I%C2%A2%C3%A8%C2%92%C3%B1%C3%9F%2F%C3%9F%C3%A2%C2%84R3%C2%B6%C2%93%C3%AC%16%C2%89%C3%B7%C2%9B6%C2%B6%C3%93Z%C2%AE%C3%AE%C3%91%C2%96%2B%C2%9AAxD%3B%02%C3%9C%C3%82E%C2%B4%C3%A3%C3%80%C2%BD9%C3%86X%C3%83%C2%9D%C3%81%C2%8D%C2%9By%C2%92%C3%BDV55%C3%9E%3C%C3%83%C3%93%C2%ABO%C2%9D%15%06%C2%B7%01%3E%C3%92-%C2%92%1C%C2%97t%C2%B4%C3%8FU%C2%BD%C2%A7Mrt%11%C2%8A%15%C2%A7%17%C2%B6%7F%C2%86E%C2%9C%C2%B8%5B%C3%80%25%C2%B5%C3%B7%03%C2%9Ea%14%C3%9B%C3%9A%C3%B7%1C%C3%AE(%C3%8A%C3%9A%C2%B2%C3%BCZ%24%02%C3%B46%C2%BF%C2%AF%C2%B3m%1B%24%02%2C%C3%A1%C3%8E%C3%B6%C3%9Ec%C3%94%C3%B1U%C3%88%1B%C2%83%C2%88%3C%2F%22%3F%C2%8B%C3%88)%11yY%C3%B2%C3%B1B%C3%A0%18%07%3D%C3%AE%C2%A8%C3%A7%C3%B0%C3%B7o~%C3%B6%C2%8D%C3%95%C2%BF%C3%89v%C2%8C%C2%AD%C2%9A%C3%B2I%C3%97%C3%87%5D%C2%AA%C3%BA%2C%7B%C2%B5%C2%8Fz%C3%83%2B%C3%ADa%C2%AB%C2%89%3B%C2%A6%C2%B0v%C3%BF%C3%96%C2%99%C3%B6%C2%9B%1A%C3%92G%C2%BA%C2%AD%C2%9C%C3%91of%09%C3%BD%0A%C3%AA%24%C3%B0%11%C2%B0%0E%C3%9C%C3%87%608%1EF%0F%C2%97%C3%93%C2%BF%0E%C3%B4%2F%C2%8A%1E.%C2%8A%C3%B8%C2%83%5EH%C2%A2%C2%9B%C3%9D%2B%C3%9D%C2%A9%C2%9C%C3%85%C2%A5%C3%80%C3%91%C2%91hL%C2%84%C2%A6%C3%8Eu%C3%A0-%C3%A0U%5C%0A%0D%C3%BD%C2%8F%C2%96%0F%C2%80%1F%C3%B61%C2%AF%C3%83f%C2%86%24%7DY%C2%BA%0C%7F%C2%89%C2%B8S%C3%B0%C3%87%14%C2%85%C2%88%0C%C3%82%C2%BFT%C2%8FD%0ED%C3%BC%7B%C2%B4H!D%C2%A1E%0A!%0A-R%08Qh%C2%91B%C2%88B%C2%8B%14B%14Z%C2%A4%10%C2%A2%C3%90%22%C2%85%C3%B0%2F3%C3%93%C3%A7-%C2%9A%C2%943%C2%A0%00%00%00%00IEND%C2%AEB%60%C2%82";

var btn_organize = files_wrapper.add("iconbutton", undefined, File.decode(orgproject_imgString), {
    name: "btn_organize",
    style: "button"
});
btn_organize.alignment = ["left", "top"];
btn_organize.preferredSize.height = 34;
btn_organize.preferredSize.width = 240;

var cleanup_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%C2%9A%00%00%00%1E%08%06%00%00%00%C3%94%C3%9E%07%C3%99%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%04%C3%ACIDATx%C2%9C%C3%AD%C2%9AMh%5CU%14%C3%87%7F%C2%B1~%2C%1C%17%11%C3%81%C3%99%082%C3%84%0F%10a%60*~%C2%8D%C2%AE%C2%A6%C2%B4TwiEqQ%C2%A4%3A%11%C2%82%C2%8B%C3%96%C3%85%04t%17%C2%8A%C3%A3F%C3%9D%08%26%C3%99T%5D(%C2%B1%C3%9D%C3%A8%C3%82%C3%8At%C3%99n%24E%05%17J%3E6n%C3%A2%26%01%C2%99%C2%8A%C2%A0%C3%A5%C2%B88%C3%A7%C3%B2%C3%AE%C3%9C%C2%BC7yo%C3%88%C2%BC%18s%7Fp%C2%99w%C3%8F%C2%BD%C3%B7%C3%9C7y%C3%BF%C2%9C%7B%C3%8EK%26D%C2%84Hd%C3%9C%C3%9C%C2%B6%C3%9F7%109%1CD%C2%A1EJ!%0A-R%0AQh%C2%91R%C2%88B%C2%8B%C2%94B%14Z%C2%A4%14%C3%86-%C2%B4Y%60u%C3%8C%7BD%0E%00%C3%A3%14%C3%9A%C2%AB%C3%80Gc%C3%9E%23r%40%C2%B8%7DL~%C2%A7%C2%81%C3%8F%C2%81M%C3%A0%C2%951%C3%AD%01PM%C2%B1m%C2%8E%C3%A8%C3%AB%04%C2%B0fm%3Fi%01%0D%60%1BX%C3%9C%C3%A7%7B%C3%993%C3%86%11mN%02%17%C2%81-%C3%A04%C3%B0%C3%BD%18%C3%B6%00%15%C3%99RJ%C3%BB%C2%90t%01%C3%AEFe%C3%84u%C3%BE%C3%BA%C3%B9%1C%C3%B3%3A%C3%80%3A%20%C3%96%C2%B6%C3%8C%C3%A6h%00%5D%C3%B4g%C3%B7%C2%BFa%C2%AF%22%C3%9A%C2%A3%C3%80%C3%9D%C3%A6%C3%AFK%C3%A0%16%C3%B02p%7D%C2%8F%C3%BC%0F%C3%A3%1C%C3%90%C3%B7%C3%BA%C3%93%C3%A8%C2%83%3B%C3%A7%C3%99%C2%AA%0CF%3A'(%C3%9Fv)%C3%85w%C3%95%7C%C3%B7s%C2%8C%C3%A5%11j%C2%97DT7%C3%90%C2%A8%C3%952%7B%0D%C2%98%C3%99e%C3%BD%C2%81e%2F%22%C3%9A%C2%83%C3%80e%C3%A0k%C3%A0%19%C3%A0g%C3%A0%2Cpu%0F%7C%C3%A7%C2%A1%C2%8F%0A%C3%86%C2%B5%C3%AF%C2%80)%C3%B4%C2%A1%C3%8F%C2%A3%05%C3%89%12z4%C3%96%C3%91%C2%887%C3%AF%7D%3Aq%C2%9C%02%C2%9Av%1D%C3%8E%C3%B3%23N%C3%9D%C3%BC%C3%8D%C3%9B%C3%A7%19%C2%92hV1%5B%C2%93%C2%9D%C3%94%3C%3Fs%C3%80Q%C3%A0%C2%98%5D%03%C2%B4mN%1A%1D4%C3%B2%C2%B9%08%C2%B8%00Lz~%C2%97%19%C2%8C%C2%90%5Dom%17%C3%A8%C2%A1%11r%C3%85%C3%A6%C2%AC%C2%A3%C2%91%C3%93%C3%AD%C3%9B%0B%C3%96%C3%B4%C2%ACa%C3%B3zv%0F%C3%9D%C2%8C%3DvGDFi%C3%B7%C2%89%C3%88I%11%C3%B9LD.%C2%8A%C3%88%7B%C2%A2%C2%AC%C2%8A%C3%88%C3%B3%23%C3%BA%2C%C3%9A%C2%AA%22%C3%B2%C2%8D%7D%C3%BA%C3%B6%C2%A6%C2%88%7C!%22%15%11Y%12%C2%91%C2%8E%C3%8D%C2%A9%C2%98%C3%BD%C2%84%C3%8D%C2%AB%C3%98X%C3%87%C3%BA%C2%B36%C3%A6%C3%A65%C2%BDy%C3%B3%22r%26e%C2%AC%C3%AA%C3%B5%C2%A7l%C2%BF%C3%B0~%5C%3B-%09%C3%A1%C2%98%C2%BB%C2%8F%C2%9A%7D%C2%8A%C2%88%C3%B4%C2%BC1%11%C2%91%15%C2%BB%5E%C2%B1%C3%BE%C2%82%C2%8D%2F%5B%7F%C3%99%C3%86%C2%B7%C2%AC%C3%AF%C2%BEW%C3%8F%C3%9B%C2%B7'%22%C3%AB%19%C3%BE%5D%C2%9F%C3%A0%3E%5B%5E%7F%3D%C3%B0%C3%97%C3%8E%C3%B8%C2%AE%3BZ%C3%9E%C2%A3%C3%B3u%C3%A0I%C2%BB%C2%AE%C2%A2Q%C3%AC!%C3%A0.%C2%B3%7D%00%5C%00%C3%9EA%2B%C3%8D%C3%A7%C2%80%C2%9B%C2%85%14%3F%3A%C3%93A%C2%BF%C2%89FXw%C2%A4%5DG%23%5D%C3%9DlW%C3%8C%C3%9E%C2%B7y.%129%C3%9C%C2%BC5%C2%92h%C3%B7%13p%1C%C2%8D%04%7D%C3%A0%C2%9A%C3%997%C3%8D%C2%87%C3%B3%C3%A7lidE%2B%C2%80%C3%B7%C2%87%C2%8C%C2%B9(%C3%B8%15%C3%89q%C2%BB%C2%80F%C2%A2%19%5B%C2%BBhc%0D%C2%9B%C3%97%C3%8E%C3%98c%0E%C2%8Dl%C3%8B%C3%A8%C2%91%5D%C2%94%C2%A3%C2%B6%C2%BFK%01Z%C3%A4%2CX%C3%B2%0A%C3%AD%1ETl%C2%A0%C3%B9%C3%97%C2%91%60%C3%BC%C2%BCm%C2%BE%00%C3%9C%0B%C3%BC%C2%99%C3%93%C3%AF8%C3%B8%C2%98D%08%C2%90T%C2%91i%C3%B9S%1F%15%C2%99%2F4%C3%97%0F%13%C3%BB%C3%8D%60%C2%9E%C3%83%C3%A5v%C2%BB%C3%A5g%1BC%C3%86%7C1%C2%85%C2%B8%232%C3%AB%C2%A8%C2%AA%C2%91%C3%A4x%C3%83%C3%98%0E%3EG!%C3%B41%C2%9951%24%C2%AF%C3%90.%01%0F%03%C2%BF%03%2F%C2%A0%C3%8A%0Ey%1B%C3%B8%04%15%5D%C2%99%C3%BF%C3%A4v%C2%99%7C%C2%AF4%C3%92%12%C3%BA%0A%3B%C2%93%7D%C3%97%7F%C3%83%C2%B3U%C3%91%C2%BC%2FMh%C3%AE%C2%B5H%C2%9A%7F%C2%9F%1B%C3%9Eu%C2%87%24%C2%8A%C2%B9b%00%C3%92%C2%85%C2%B6%C2%8D%3E%C3%90c%24y%C2%AF%C2%9F3%C2%BA%7Cm%C3%8E%7Cv%C2%83%C3%B1%C2%A2%0C%13%C3%8F%24%C2%83B%C3%8D-%C3%9A%C2%BC%C3%85%C3%80oh%C2%92%7D%16x%C2%8C%C3%B4c%C3%B1%0E%C3%A0qF%7F%C2%8F5n~D%C2%85%C3%A2'%C3%AA%C3%8F%C2%B2S%24n%5E%C3%9D%C2%B3%1D%C2%B7v-c%2C%C3%8Fk%C2%91%0D%12!%C2%B9%04%C2%BD%C2%87%1Ec%C2%A0%22J%C2%8Bzn%C2%8D%3B%C2%AA%C2%BA%C3%96%C3%9C%C3%B1%C3%A8%0B%C2%A3%C3%AD%C3%99%5B%14%3B%1E%C3%9Dk%C2%95%C3%9E%C2%909%C3%8Bv%1F~%C3%A5%C2%9C%C2%8B%22%C2%AF7~%40%1F%C3%82*%C2%9A%C2%9F%C2%BD%18%C2%8C%C3%9FB_%C3%92%C3%BES%C3%80g%C2%99%C3%B4%C3%91%C3%9F%C3%B8Y%C2%B4R%C3%B4mi%C3%B3%3A%24%02t6%C2%97%C3%97%C3%B9ck%24%02tU%C3%A7%C2%A7%0C%1E%C3%9F%C2%8E%19TLm%06E%C2%B0HR%7D%C2%86%C3%B8U%C2%A9%5B%C2%B3%01%C2%BC%C3%A4%C2%ADm%C2%A3%22%C3%99%C3%B6%C3%BA-%C3%B2U%C3%BE%C2%8Bh%C3%9E%C3%96%20%C2%89%C2%B4%C3%AE%C2%B5K%1A.%C3%BA%5Eexn9H%C3%9E%C2%AA%C3%81%C3%9A%03%22%C3%B2%C2%AD%C2%88%C3%9C%14%C2%91%3FD%C3%A4%2F%C2%AF%02%C3%B9U%C2%B4%1A-%C2%A3%C3%A2%C3%B4%2B%C3%8Fa%C3%A3%C2%95%0C%5BSD%C3%AA%C2%81%C3%9DU%C2%9D%C3%A1%C2%BC%C2%A9!%3E%C3%82%C2%B1j%C2%8A%C3%9F%C2%ACV%13%C2%91F%C3%81%C3%AF%C3%9B%12%C2%91%C3%89%14%C3%BBd%C3%A0%2B%C3%AC%C3%A7i%C2%8D%0C%C3%9F~%C3%95%C3%A9%C3%AE%C2%BBV%C3%B4YM%C2%88%14J%C2%A7%C2%8E%C2%A0%11%C2%A1%C2%8E%1E%C2%A7o%C2%91%C2%84%C3%AE%0B%C3%80%C2%BBE%C2%9C%C3%BD%C2%878%C2%85%1E%C2%81Y%C2%91%C3%A80%C3%93%229N'FuRTh%C2%8E%C2%A7%C3%90%C3%9C%C3%A1o%C3%B4%C3%A8x%02x%1A%C3%B8e%C3%94%1B%C3%99g%C2%9A%C3%A8%C2%B1we%C2%B7%C2%89%C2%87%C2%90%1A%C3%89%C2%9F%C3%83%C3%B2%1F%C2%95%01%C2%A3%0A%C3%ADN%C3%A0%11%C3%A0~%C3%A054_y%C2%93r%C2%AB%C3%8D%C3%88%01bT%C2%A1E%22%C2%85%C2%88%C3%BF%2B%16)%C2%85(%C2%B4H)D%C2%A1EJ!%0A-R%0AQh%C2%91R%C2%88B%C2%8B%C2%94%C3%82%C2%BF%C3%B9%C2%87%C3%8BG%C2%93%0B%C2%98%C3%B8%00%00%00%00IEND%C2%AEB%60%C2%82";

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
tab_tools.text = "CONFIG";
tab_tools.orientation = "column";
tab_tools.alignChildren = ["fill", "top"];
tab_tools.spacing = 0;
tab_tools.margins = [0, 0, 0, 0];

// CONFIGPANEL
// ===========
var configPanel = tab_tools.add("tabbedpanel", undefined, undefined, {
    name: "configPanel"
});
configPanel.alignChildren = ["fill", "fill"];
configPanel.alignment = ["fill", "fill"];
configPanel.minimumSize.width = 280;
configPanel.margins = 0; // 

// CONFIGCOLORS
// ============
var configColors = configPanel.add("tab", undefined, undefined, {
    name: "configColors"
});
configColors.text = "COLORS";
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
edittext1.preferredSize.height = 30;
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

var btn_title = edit_text_group.add("button", undefined, undefined, {
    name: "btn_title"
});
btn_title.text = "Title";
btn_title.alignment = ["left", "fill"];
btn_title.preferredSize.width = 60;

var btn_subtext = edit_text_group.add("button", undefined, undefined, {
    name: "btn_subtext"
});
btn_subtext.text = "Subtext";
btn_subtext.alignment = ["left", "fill"];
btn_subtext.preferredSize.width = 80;

var btn_source = edit_text_group.add("button", undefined, undefined, {
    name: "btn_source"
});
btn_source.text = "Source";
btn_source.alignment = ["left", "fill"];
btn_source.preferredSize.width = 80;

// EDIT_TEXT_GROUP1
// ================
var edit_text_group1 = edit_text_wrapper.add("group", undefined, {
    name: "edit_text_group1"
});
edit_text_group1.orientation = "row";
edit_text_group1.alignChildren = ["fill", "fill"];
edit_text_group1.spacing = 10;
edit_text_group1.margins = 0;

var btn_c2a = edit_text_group1.add("button", undefined, undefined, {
    name: "btn_c2a"
});
btn_c2a.text = "C2A";
btn_c2a.alignment = ["left", "fill"];
btn_c2a.preferredSize.width = 60;

var btn_c2alink = edit_text_group1.add("button", undefined, undefined, {
    name: "btn_c2alink"
});
btn_c2alink.text = "C2A Link";
btn_c2alink.alignment = ["left", "fill"];
btn_c2alink.preferredSize.width = 80;



var tools_wrapper_r = tools_wrapper.add("group", undefined, {
    name: "tools_wrapper_r"
});
tools_wrapper_r.orientation = "column";
tools_wrapper_r.alignChildren = ["left", "fill"];
tools_wrapper_r.spacing = 10;
tools_wrapper_r.margins = 0;
tools_wrapper_r.alignment = ["fill", "top"];

var statictext2 = tools_txt_wrapper.add("statictext", undefined, undefined, {
    name: "statictext2"
});
statictext2.text = "click edit colors first (if you dont see the effect";
statictext2.preferredSize.height = 20;

var statictext3 = tools_txt_wrapper.add("statictext", undefined, undefined, {
    name: "statictext3"
});
statictext3.text = "controls, hit F3)";
statictext3.preferredSize.height = 20;

var statictext4 = tools_txt_wrapper.add("statictext", undefined, undefined, {
    name: "statictext4"
});
statictext4.text = "";
statictext4.preferredSize.height = 5;

var editcolors_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00k%00%00%00%1E%08%06%00%00%00%2BP%C3%A0~%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%03%C2%B7IDATh%C2%81%C3%AD%C2%99%C2%B1k%1CG%14%C2%87%C2%BFI%C3%AC%C3%AE0(%C2%B8%C2%B8%C3%82%C2%95%C2%90%0B%17%C2%8A%0FT8%C2%85J%C3%99I%11%C2%92%22QZU90J%C3%A3J%C3%A7%40%08%C2%B8%C2%88u%C2%85Q%C2%A5%18%C2%AC4%C2%AA%0C%C2%89%C3%93%3B%C2%96m%08q%02%C2%81%08%C3%AE%0F8%1Bc7%06%C2%83%C2%85%C2%8DB%20!y)%C3%9E%1Bf5%C3%9E%5D%C3%8D%C2%9Ed%C3%8C%C3%A2%C3%B9%C3%A0%C2%B1%3B3%C3%AF%C3%8D%C2%8E%C3%A6%C2%B7of%C3%B6%C3%A4D%C2%84L%3Bx%C3%ABu%0F%20%C2%93N%16%C2%ABEd%C2%B1ZD%16%C2%ABEd%C2%B1ZD%16%C2%ABEd%C2%B1ZD%C2%B2X%C3%8E%C2%B9Z%03f%C2%81_%C2%80%C3%BF%C2%80g%C3%80%25%C3%A0%C3%ADW2%C3%AA7%14%C2%97%C3%BAQl%C2%82%C2%94%22%22g%C2%80%5B%C3%80%C2%B1%C2%A8%C3%A9%12%C3%B0%C3%B5%C2%A4%C2%83%C3%8B%C3%AC%C3%A5%C3%80b%C3%95%08%05%C2%B0%03%C2%BC3%C3%A9%C3%A0j%C2%98%06%16%C3%AD~%08%C3%B4%C2%81)%60%1B%C2%B8%C2%9D%10%C3%9F1%03%C3%985Ka%C3%86%C3%ACf%C3%B2H%0F%13%11I%C2%B2%C2%8A%C3%983%22%C3%B2%5C%C2%94%C2%9BR%C3%8E~%7DoU%C3%84%C2%89%C2%88%C2%ACT%C3%84%2CD%C3%BDoE%C3%BE%C3%93V%C3%97%2F%C2%89%5D%16%C2%91%C3%AB%22%C2%B2av%5DD%C2%96%12%C3%A7%C3%A1%03%C2%8BO%C2%9E%C2%B7%C3%83%C2%B4%23%07%10%C3%B9%5DBF%5Dt%C3%8E%C2%AD%C2%8A%C3%88%00%C2%B8%5Cp%C3%BBu%C3%92%C3%BE%1B2%403%C3%AB%C2%81%C2%95%17%C3%8C%C3%A2%2C%5B%06zh6%C2%8E%C2%AC%C2%AEg%C3%B5%7F%027%0A%C2%BE%5D%C2%BB%3E%C3%99%C3%A7%C3%99u~%C3%85%C3%ACm%C3%92g)%13%C2%89%25%22%C2%B3%C3%80%1D%0AB%01%C2%98%60%C3%AF%01%1F%03%2F%C2%80%2F%1At%3B%40'%C2%B1%C2%8C)%C3%A0%7BT%C2%80%1D%C3%A0%C2%87%C2%A8%7D%11%C2%98%2B%C3%94%C2%AF%C3%98%C2%B5o1g%C3%91%C2%89%C2%9Bg%C2%AFP%C3%98%C3%BDO%C3%80%C3%BB%C2%A8X%5DT%C2%BC%19%C3%82%12%C2%B9%19%C3%85%C2%B0%C2%8F%C3%9F%3Cp%C3%9A%C2%AE%C2%BB%C3%80W6%C2%A6%C2%A2xC%1A%C2%8A%C3%96X%2C%13%C3%AA.p%C2%9C%C2%82P%C3%96v%C2%9E%20%C3%949%C3%A7%C3%9CH%C3%92%7F%C3%95_(%C2%A9%C3%B3%C3%A2%C2%AD%12%C2%84%C3%9A%26%C3%ACW%C2%9E9B%26%C3%ADT%C3%B4%C3%AF'nT%C3%92v%C2%8F0q%C3%8Bv%3F4%C3%BFO%C2%AD%C3%AEB%14S%C3%A7%C3%A7_%C2%8Cu%7B%C3%9E%C2%92%5D7-v%05%7D96iB%C3%AAzi%C2%BE%C2%B3%22%C3%B2%C3%94%C3%B6%C2%87%2F%C2%A3~%C3%8E%5B%C3%BDs%C3%91CGj%C3%BFu%7B%C2%96%C3%B7yf%C3%A5E%2B%C3%B7%23%C2%9Fx%C3%8FZ%C2%89%C3%8A~%C2%BF%C3%99%C3%98g%2C%1D%C3%91%3Dl%26%C2%AA%C3%9F%10%C2%91%C2%9E%C2%84%3D%2B%C3%85o%C2%ADP%C2%BFd%C3%A5y%C2%8B%C3%B5%C3%B6j%C3%B6%2C%119E%C3%88%C2%A8%C2%A1s%C3%AE%C2%9B%C2%A2P%C3%80%C2%B7%C2%84%C2%8C%C3%BA%C2%BD%C3%91%1B%C2%A3%5C%C3%A3%C3%A5%C3%A5%C3%8D3eW%C2%9F5%0F*%C3%BC%26%C2%A5%C2%8B.gc4%2B%C3%8AN%C2%87%C3%9D%C3%82%7D'%C3%81o%5C%C2%A8%C3%9BD%C3%B7%C3%84%254%C3%BB%C3%AE%01%3FV%C3%84W%C3%92%C3%A4%17%C2%8C%3E*%C3%94%C2%9Asn%C3%A0%2B%0FI(P%01nGV%C3%85TM%5B%15c%C2%82(1%3Dt%22%C3%AB%C2%8E%C3%B1%C2%BB%C3%91%7D%C2%8A%C2%9F%C2%A7%C2%83%C3%AE%C2%87%C2%9F%C2%A3%C3%BBW%C3%87%C2%9E%C3%97%C2%88%26b%C3%B9%3F%C3%B2%C2%AA%C2%AF(%08%C3%B5%17%C3%B0%C3%91%01%C2%84%02%7D%19%C2%B6%22%C3%B3%C3%BB%C2%A1%C3%8F%C2%B8Ut%C2%BD_%7D)%C2%BA%C2%9CE%C3%82ac%C2%8C%C2%BE%C3%91%C2%9F%C2%B07K%C2%BA%C3%A8%C3%BE1B'zle%C3%8F%3C%3A%C2%B9%C2%A3B%5D%C2%AA%C2%9Fg%C3%8D%C3%9A%C3%BD8%C3%AE%13%0E%1B%C3%8949%60%C2%9C%04%C3%BE%05%1E%C2%89%C3%88%09%C3%A03%C3%A0%0A*%C3%94%C2%87%C3%8E%C2%B9%C2%9F%C2%9B%3E%3Cb%C3%9A%C2%AC%C2%8C!z%C2%88%C3%B06%40E%C2%A8%C3%8A%C2%B0mt%C3%89%C3%B4%C3%BE%C3%BE%C2%A02%C2%B4%C2%B85B%06tP%11%C3%97%C2%AD%C2%BCn%3E~r%7D%5C%C2%9C1%C2%A9~%C2%A0K%C3%9E2!%C2%9B%3Ah%C2%865%22%C3%B9%17%0C%C3%A0o%C3%A0(%C3%B0%C2%8F%5D!%08u%C2%B7*%C2%A8A%C3%BF)%C3%8C%C2%A1%C3%8Be%C3%95%C2%89%2F%C2%A6%C3%AC%5B%0Bt%C2%B2z%C2%84%0C)%C2%9B%C3%A0%1E!S%C2%8A%C3%AD%C3%B1%5E%C2%95%C3%AA%C2%97%C3%B2%C3%8CZ%C2%9A%C2%88%C3%B5%07%C3%BA%C3%AD%C3%B0%18xh%C3%B6%C2%9Ds%C3%AE%C2%B7%C2%BA%C2%A0C%16%C3%AB%C2%8D%C2%A6%C2%89X%C2%99%C3%97L%C3%BE%7FV%C2%8B%C3%88b%C2%B5%C2%88%2CV%C2%8B%C3%88b%C2%B5%C2%88%2CV%C2%8B%C3%88b%C2%B5%C2%88%2CV%C2%8B%C3%B8%1F%C2%A1p%C2%8F%5BIB%22%C2%87%00%00%00%00IEND%C2%AEB%60%C2%82";

var btn_openAndSelect = tools_wrapper_l.add("iconbutton", undefined, File.decode(editcolors_imgString), {
    name: "btn_openAndSelect",
    style: "button"
});
btn_openAndSelect.alignment = ["left", "top"];
btn_openAndSelect.preferredSize.height = 32;
btn_openAndSelect.preferredSize.width = 130;
btn_openAndSelect.helpTip = "Clicking this button will bring up the __SETTINGS comp and select the layer with the color-edit effects. If you dont see the color-edit effect, click F3 on your keyboard";

var applyem_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00k%00%00%00%1E%08%06%00%00%00%2BP%C3%A0~%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%03%C2%A1IDATh%C2%81%C3%AD%C2%99%C2%BFk%14A%14%C3%87%3FQc%20ls%C2%88p%206G*%11%0C%C2%9C%C2%95%C2%A4%11O%C3%94BA%C3%8C!%0A%C3%86.AQ%C2%B0%C2%BB%C3%BC%09%C2%B1%12%04%C2%8B%24%C2%ADA0%C2%A61%16%099S%C2%A5L%C3%80%1Fm%C2%BC%C3%BAlrM%10%12!%C3%8Fb%C3%9E%C2%B8%C2%93%C3%89-%C2%B7%7B%C3%AE%25.%C3%99%0F%0C%C2%BB3%C3%AF%C3%8D%C3%AC%5C%C2%BE%3Bo%C3%9EN%C3%BAD%C2%84%C2%9Clp%C3%A2%C2%A8'%C2%90%13%C2%9F%5C%C2%AC%0C%C2%91%C2%8B%C2%95!r%C2%B12D.V%C2%86%C3%88%C3%85%C3%8A%10%C2%B9X%19%C2%A2Wb%0D%00%2F%C2%80k%3D%1A%C3%BFXr%C2%AA%07c%0E%02%C2%9F%C2%80%C2%ABZ%7F%04%C2%BC%C3%AD%C3%81s%C2%8E%1D%7D)%C2%9F%60%C2%9C%06%3E%027%C2%9C%C2%B6%3D%C3%A0%1C%C3%90L%C3%B3A%5D0%0E%14%C2%80%0D%C2%A0%1E%C2%B3O%C2%91%C2%A3%C2%9F%C3%B7_%C3%92%0C%C2%83%C2%A7%C2%81%0F%C3%AC%17%0A%60%07%C3%98%C2%8D%C3%91%C2%BF%06%C2%88%C2%96%C3%A9%14%C3%A7e%C2%A9%02S%409%C2%A6%7F%11%C2%98%C3%95%C3%AB%7FA%12%C2%B1%C3%8E%00W%22lV%C2%A8%C3%9B%5E%C3%BBo%C3%A0%3E%C2%B0%15c%C3%BCq%C3%AF%C2%BE%C2%90%60n%C2%BD%C2%A0%09l%3A%C3%B5%00%23%5C%10%C3%A1%1Fx6%C3%AB%C2%9F%1Aq%C3%B7%C2%AC%C2%B3%C3%80*p%01%C2%B8%C2%8B%09u%C2%96~%C2%A2%C2%85%1A%05%16c%C2%8C_%06J%40%03hi%C2%BD%0A%C3%8C8%C3%B6)L%C3%B8*%60VaK%C3%AD%C2%93%C3%AA%C2%B3%C2%A2mu%C3%B5-%00%C3%B3%C3%80%C2%84%C2%B6%C2%BB%C3%94%C2%80%0A%26%24Nzmu%C3%A0%250%C2%84%11%C2%AB%C2%A9%C2%BF%C3%A3%1E%C2%B0%C2%AD%C2%BE%C3%8B%C3%BA%C2%9B%03%C3%AD%C3%97%04%C2%86%C2%B5%C2%BE%06%C3%BC%C3%84D%C2%98%00%C3%B8%C2%A2%C3%A3%C3%BD%3B%22%C3%92%C2%A9%0C%C2%88%C3%88w%09%C3%99%15%C2%91%3Bj%3B)%22sr%10%C3%97'N%C2%99%C3%96~%C3%93%22R%C3%93%C3%BBu%C3%87%5Eq%C3%86%C3%BE!%22%2BN%7D%5C%7D%2C%5Bj%C3%9Fr%C3%86%C3%84%C3%A9S%13%C2%91%C2%B2%C3%A3_P%C3%BB%C2%BA%C3%96%C3%8B%C3%9E%C3%9C%C2%86E%C3%A4%C2%9D%C2%88%0Ci%C2%BD%C2%A8%C3%B5%11%C3%A7~TD%02%C3%B5Y%C3%94g%04ZfE%C3%A4f%C2%82%C2%BFEd%C2%89%13%06%C3%8F%03%17%C2%9D%C2%BA%5DI%C2%AF1o%C3%B3C%C3%8F%7F%0Fx%C3%80%C3%BE%C3%95%C3%97%C2%89%C2%AA%5E%C3%AB%C2%98%C3%95%00%C3%A1j%C3%B3%C2%B9%0C%5C'%7C%5B%2B%C2%9E%7DB%C3%AD%13%C3%9E%C3%98.%1BZ%C2%AC%C2%BD%C2%A4%C3%8Fs%C3%9B-%C2%970%C2%ABc%C2%9B0%C2%AC%C2%ADi%C2%BBeI%C3%ADv%25.k%7D%5B%C3%BB%C2%A6B%C2%9C0%C3%98%C3%80%C2%8427%C3%8C%C3%B5%03%C3%8F%C3%9B%C3%B8%C3%AE%01c%C3%80B%C2%829%C3%98%C3%BD%C2%A9%C2%A5%C3%85%C2%86%C3%83%C2%92%C3%9A%26%3D%C3%BF%C2%96w%C3%B5%C3%B7%C2%B6Nv%C3%8B%0C%26%C2%91%C2%A98%3E%C3%B3m%C3%BC%02L%C2%88%1B%C3%B2%C3%9A%C2%97%C3%B5jEq%C3%A9I%06%19G%C2%AC%3DL%C3%8Cn%C2%B7%2F%C3%B9~c%C3%80%5C%C3%829%C3%98%C2%95Q%C3%80%C2%ACT%C2%97*%07%C3%85%C2%B2%C3%82Z%C3%BC%C3%BD(J%3C%C2%9Fy%C3%8C%C3%9EV%C3%B1%C3%9A%7C%C2%B61%2B%C3%A9%C2%8D%C3%93%C3%A6%0Bw(%C3%84%C3%8D%06w1%C2%82-E%C3%98%C2%BB%15%C2%AAD%18%C2%A6l%C2%B2%60%C2%8Bo%C2%B7%C2%BC%C3%87l%C3%AA5%C2%AD%C3%BBakJmSZ%C2%8F%C3%BA%C2%A6ja%C3%84)%C3%A83%C3%AA%C2%98%15%C3%AD%C3%B3%15%18a%7F%C2%A6%C3%B7%18%C2%B3%C3%9A%0E%C2%95%24'%18%C2%BB%C2%98%C2%8C%C3%88%3D%C2%9D%C2%B0%3C%23%C2%B9P%10%0A%C3%91%20%C3%9Cc%5C%5B%19%C3%B3%C3%A6%C3%BBo%C2%BC%2B%C2%84%C2%9Fi5%1C%7B%C2%83%C2%83%2B%C3%93e%C2%86%C3%B0%C2%93%C2%A1%C3%9D%C2%AA%02%C2%B3%C3%A7%2C%60%C2%BE%C2%B9l%C2%B8%C3%9B%C3%84D%C2%9A%C3%83%C3%BD%06%C3%AB%22%2B%19%14%C2%91U'%C2%9Bz%C2%92F%C2%A6%C3%93%C2%A1%C2%B8%C3%99%20%22R%C3%92%C3%A2%C3%BAX*%C2%9A%C3%A1%C3%B9Y%5D%C2%BBR%C3%95%3E%5B%12f%C2%85Q%C2%A5%C2%A8Y%5D%C3%91k%0F%12%C3%96%C2%BB.%C3%9D%C2%9C%0D%C3%BE%02n%01O%C2%81o%C3%80%C3%A7T%C3%9F%C2%9Ex%C2%B4%0BW.-%0E%C2%86G%C2%97%0A%C3%BB%C3%B7%C3%87I%C2%A2%C3%B76K%C2%93%C3%B6%C3%9B%C2%80%C2%9F%5Ct%C2%AAwM%C2%B7%07%C2%B9%3B%C3%80%C2%AB%C2%B4%26%11%C2%83N%C3%A1%0C%C3%87%C3%9EIH%7F%C2%BC%24g%C2%85GJ%C3%9A%07%C2%B99%3D%24%C3%BF%C3%A7c%C2%86%C3%88%C3%85%C3%8A%10%C2%B9X%19%22%17%2BC%C3%A4be%C2%88%5C%C2%AC%0C%C3%B1%07%C3%9B%C2%9D%5E%C2%82%C3%BB%C3%8727%00%00%00%00IEND%C2%AEB%60%C2%82";

var btn_debug_colors = tools_wrapper_l.add("iconbutton", undefined, File.decode(applyem_imgString), {
    name: "btn_debug_colors",
    style: "button"
});
btn_debug_colors.alignment = ["left", "top"];
btn_debug_colors.preferredSize.height = 32;
btn_debug_colors.preferredSize.width = 130;
btn_debug_colors.helpTip = "Apply the colors, defined on the color-edit effects, to be used globally within the whole project";

var refresh_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%18%00%00%00%14%08%06%00%00%00%C2%97%C2%B5%C3%BD%C2%83%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%01%C2%A2IDAT8%C2%8D%C2%A5%C2%94%C2%BFK%C2%95a%14%C3%87%3F%C3%97%C3%BB%03%C2%B7%26%23J%C3%87%C2%86%20P%C3%94%C2%88h%10%C2%82%C2%B6%C3%84%C2%A5%C2%A9%C2%A9!%C2%87%C2%A0%C3%95ppt%0C%C3%9A%5B%2C%08%C3%811%C2%A1%C2%A1h%C2%A8%C3%99%C2%BF%40%08Q%C2%AC)!%2C(%2F%C2%A8%C2%9F%C2%86%7B%C3%AE%C3%A5%C3%BAp%C2%9F%C3%87%C3%AB%C3%9B%C2%81%C2%87%C3%B3p%C2%9Es%C2%BE%C3%9F%C3%B7%3D%C2%BFj*%15%C2%A5%06%C3%94%C2%81%C3%A3%C2%92ScH%C2%B0%06p%1D%18%07%C2%9A%C3%80%01%C2%B0%00%2C%01%C3%B3%C3%80%C2%87l%C2%A4Z%3A%C2%93%C3%AAk%C3%B5%C2%A7y%C3%B9%C2%A3%C3%9E%C3%89a%C3%942)j%01%2F%C2%80g%C2%91%C2%8A%13%60%0B%C3%98%C2%8E%C2%94L%013%7D%C3%BE%C2%87%C3%804%C2%B03%C3%8C%1F%C2%B4%C3%94O%C3%B1uG%C3%AA%C2%AA%3A%C2%96%C3%B8%C2%BC%C2%8C%C3%B7%C3%9F%C3%A1%3B%C3%88%07u%20%C3%81%C2%AB%08%C3%BE%C2%A1%C3%8Ef~%7DB%C2%BD%C2%A9%C2%8E%24%C3%B6kj%C2%B3Dp%2B%C3%80O%C3%95%C2%B9s%C3%AA%C2%93%C2%9E%7BQ%C2%8F%C3%A5%12%C3%81Z%10%C2%AC_%10%1Cu1b%C2%BF%C2%95%08%C3%B6%C3%82%C3%A9A%05%C2%82K%C3%AAI%C3%847%C2%BA%C3%B6%C2%91%C2%A4%C3%A6%13%C2%A1%C2%B7%0B3%C2%91%C2%93C%C3%A0%7B%C3%9C%C3%AB%5DcJ%C3%90%C2%9D%C3%8AV%05%02%C3%A8%0C!%40%C2%AF%C3%B7S%C2%82%C2%AF%C2%A1oW%00%1F%07%C2%AE%C3%84%C2%BD%C2%B7%3ER%C2%82%C3%8D%C3%90%C2%8F*%10%3C%0D%C2%BD%05%C2%9C%C3%B6%C2%ACI%C2%A1%C2%AE%C2%AA%C2%BB%C3%AA%C3%BD%0B%16xFmG%C2%81%1F%C2%96%C2%BA(%3D5%C3%B5%C2%86%C3%BAX%7D%C2%92%C3%B1%C2%99%C2%B33%C2%94%C2%AA%1B%C3%A9%7B%0E%C2%B8%C2%A5nzv%C3%89%7D%C3%AE%7Bo%C2%A8w%C3%95%C2%B7v%C2%86R%C3%B5%C2%A3%3A%3A%2C%01%C3%AA%1B%C3%8F%C3%8A%C2%B1%C2%BA%1F)%3C%C3%AA%C2%B3%C3%BFUW%C3%94%C3%BA%20%C2%9C%12A%5D%7D%17%20m%C3%B5%C2%A0%0F%C3%B4%C2%97%C3%BAE%7D%C2%AE%5E.%C2%A59%C2%B7%C2%AE%C2%BB2%0A%C2%BC%C2%A7%C2%B3%C2%86%17%C2%A3%C3%AB%C2%9A%40%7B%C3%98%C3%96%3A%C2%8F%C3%A0%C2%BF%C3%A5%1F%C2%9Fe%7B%C2%AD%C2%9Dr%08d%00%00%00%00IEND%C2%AEB%60%C2%82";

var revert_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%18%00%00%00%14%08%06%00%00%00%C2%97%C2%B5%C3%BD%C2%83%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%01%C2%9CIDAT8%C2%8D%C2%B5%C2%95%C2%BDJ%03A%14%C2%85%C3%AF*%C2%AC%0A1%04%C2%A2%C2%98F%11%12%C2%AD%C2%B4V%C2%AC%C2%AD%C2%AD%C2%92%C3%8E%C2%9FG%C3%B0%C2%AF%C2%88%C3%98%07%1F%C3%80%C3%867%10%11%C3%85%C3%92%07%C3%B0%3D%0CD%C3%91%60%02%06%C2%B5%C3%90D%3F%C2%8B%C2%BDC%26%C2%9B%C3%99%1F%0B%0F%5Cvv%C3%8E%C2%9C%7Bf%C2%87%3Bw%3D%40%C3%BE%C2%80%11%0D4~%C3%92%08%C2%920%23%22'%22%C3%92%10%C2%91o%11%C3%A9%C2%8AHO%C3%87u%C3%A5%0A%C2%91j%20.v%C2%807%06%C3%91%C3%93%C2%B0%C3%91%01%C2%B6%5C9%C3%A2%C2%92%1F%5B%09%1A%C3%80%3EP%C2%B4%C3%B8%22p%C2%A0%C2%9C%C3%81QZ%C2%83%C2%8A%25%3A%072%16%C2%97%C3%970%C3%AF%19%C3%A0%C3%82Z_N2%C3%88%02%2F%C2%BA%C3%B8%0A%C3%B0%2C%C3%8E%07Z%40%1B%18%C2%B3%C3%A6%3D%C3%A0Z5M%602%C3%8E%C3%A0P%17%C2%B6%C2%80%5C%C2%88%C3%8BY%3B%0Dsy%C3%95%00%C3%AC%C2%9AyW%15%C2%95%C3%B5y%26%22%C2%AF)%C2%AA%C3%8C%C2%A0%C2%AD%1A%11%C2%91J%C2%B8%C2%8A%7C%C3%9D%C3%914%C3%90%C3%95%5D%C2%AC%C3%AB%C3%9Cx%C3%8A%2F%10%60U%C2%B9n%C3%B8%C2%88%1E%C2%89%C3%86%3B0%C3%AF0Xr%18L%5B%C3%BC%C3%80%11M%C3%84%7C%C2%BA%2F%C3%BD%0B%C3%B9!%22%C3%8F%3A%C2%BE%15%C2%91R%C3%A2%C3%81%C2%A9%C3%93%0A%C3%81e%09%C3%A3%0B%C3%98%08%C3%ADr%C2%99~%C2%95%3D%00%25%C2%8B%5B%C2%B3tCU%146q%25w%C2%994%C3%A8%C3%9F%C2%93%C2%9A%C3%8E%C3%9D%C2%B9%0Cl%C2%93%C2%B8%C3%A4a%C2%93O%C2%A0%C3%80%60%C2%99%C3%AEE%19%080%0B%2C%24%2471EP%00%C2%A3%C3%80%C2%8D%26o%12%5C%C3%96%C3%84%5E%C3%A4%13%C2%B4%C2%80S%5B%C3%A0%C2%88%2Cpi%1Dmb%C2%AB01g%C2%89%C2%9E%C2%80*%C2%B0H%C3%90%16%3C%1DW%C2%953H%C3%9D%C3%ACLl2%C3%9C%C2%AE%5D%C3%A8%00%C3%9B%C2%AE%1Ci%C3%8F%C2%B9%06%C3%9C%3B%12%C3%97%C2%95%2BD%C3%A9%3D%C3%B8%C3%9F_%C3%A6%2F%C2%AD%C2%96%C3%84r%C2%92%26%02%C2%9B%00%00%00%00IEND%C2%AEB%60%C2%82";


var btn_reload_json = tools_wrapper_r.add("iconbutton", undefined, File.decode(refresh_imgString), {
    name: "btn_reload_json",
    style: "toolbutton"
});
btn_reload_json.alignment = ["left", "top"];
btn_reload_json.preferredSize.height = 32;
btn_reload_json.minimumSize.width = 32;
btn_reload_json.preferredSize.width = 100;
btn_reload_json.text = "REFRESH ";
btn_reload_json.helpTip = "reload JSON, if edits wont show up";

var btn_revert_json = tools_wrapper_r.add("iconbutton", undefined, File.decode(revert_imgString), {
    name: "btn_revert_json",
    style: "toolbutton"
});
btn_revert_json.alignment = ["left", "top"];
btn_revert_json.preferredSize.height = 32;
btn_revert_json.minimumSize.width = 32;
btn_revert_json.preferredSize.width = 100;
btn_revert_json.text = "REVERT ";
btn_revert_json.helpTip = "restore the Default JSON";


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
shortcuts.margins = [10, 0, 0, 0];
shortcuts.preferredSize.height = 40;

var fitView_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%18%00%00%00%18%08%06%00%00%00%C3%A0w%3D%C3%B8%00%00%00%09pHYs%00%00%0B%12%00%00%0B%12%01%C3%92%C3%9D~%C3%BC%00%00%01%C3%B3IDATH%C2%89b%C3%BC%C3%BF%C3%BF%3F%03%C3%8D%00%03%03%03%00%00%00%C3%BF%C3%BFb%C2%A2%C2%A9%C3%A9%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%AD%05%0C%0C%0C%00%00%00%00%C3%BF%C3%BFb!S_%03%03%03%C2%83%02%14%C2%83%C2%80%01%03%03%03%3F%C2%94%7D%11%C3%8Ag%60%60%60%60%00%00%00%00%C3%BF%C3%BF%22'%0E%40%C2%9A%C3%8F%13P%C3%83%08%26%19%18%18%00%00%00%00%C3%BF%C3%BF%22'%C2%88%3E%40%5DI%18000%00%00%00%00%C3%BF%C3%BF%227%15%09000%5C%60%60%60%C2%90%C3%87!%0F%C3%B1%01%03%03%03%00%00%00%C3%BF%C3%BF%227%C2%92%03%C3%B0%18~%10%C3%8Eb%60%60%00%00%00%00%C3%BF%C3%BF%22%C3%87%C2%82%04%06%06%C2%86%C3%B9D%C2%A9d%60%60%00%00%00%00%C3%BF%C3%BF%22%C3%95%02P%C2%AA%C3%81f%C3%B8G%C2%AC%C2%AA%19%18%18%00%00%00%00%C3%BF%C3%BF%22%C3%95%C2%82%07%0C%0C%0C%C2%89hb%20%C2%BE%03%C2%92%25%07%C3%A02%0C%0C%0C%00%00%00%00%C3%BF%C3%BFb%00E2%198%C3%A1%3F%04%C2%80h%C2%98~%C2%85%C3%BF%C3%BF%C3%BF%3B%C2%A0%C2%98%C3%B5%C3%BF%3F%03%00%00%00%C3%BF%C3%BF%C3%82f8H%11H1%C2%8C%0F2%C3%A4%C3%83%C3%BF%C3%BF%C3%BF%0D%C3%90%C3%94!%C2%AB%C3%81%C2%8E%C3%BF%C3%BFg%00%00%00%00%C3%BF%C3%BFB%C2%97h%C2%80%C2%BA%0Cf%20%C3%8C%C2%A5%C3%88b%C3%84%C3%BB%C3%B8%C3%BF%7F%06%00%00%00%00%C3%BF%C3%BFB%178%C2%80f%20%3A%00%C2%89%11o%C3%81%C3%BF%C3%BF%0C%00%00%00%00%C3%BF%C3%BF%C3%82%17%C3%89%C2%B0%C2%B2%05%19%14%C2%90%C2%94%24%18%18%18%00%00%00%00%C3%BF%C3%BF%22%25%15%C2%81R%C3%8B%02%C2%92Lg%60%60%00%00%00%00%C3%BF%C3%BFB%2F*p%C2%95%1B%0F%C2%A1%C2%85%1C%C2%A8%1C%22%1E000%00%00%00%00%C3%BF%C3%BF%22%C3%96%07%C2%A0b%01%C2%94%C2%BEa%C3%853q%C2%80%C2%81%C2%81%01%00%00%00%C3%BF%C3%BF%22%25%C2%88%C3%B4%C2%A1%C2%85%1C%C3%B1%C2%80%C2%81%C2%81%01%00%00%00%C3%BF%C3%BFB%C2%AFp%40%C3%850%C3%88%20%10%00%C3%A5LP%C2%89%09%02%C2%A0%1C%0C%C3%820%3Eq%C2%80%C2%81%C2%81%01%00%00%00%C3%BF%C3%BF%C2%A2m%C2%A5%C3%8F%C3%80%C3%80%00%00%00%00%C3%BF%C3%BF%C2%A2m%C2%9D%C3%8C%C3%80%C3%80%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%AD%05%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%03%00s2Y%20%C3%B3%C2%9AM%5D%00%00%00%00IEND%C2%AEB%60%C2%82";
var fitView = shortcuts.add("iconbutton", undefined, File.decode(fitView_imgString), {
    name: "fitView",
    style: "toolbutton"
});
fitView.helpTip = "fit preview of active composition to fill the screen";
fitView.alignment = ["center", "top"];

var delExp_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%18%00%00%00%18%08%06%00%00%00%C3%A0w%3D%C3%B8%00%00%00%09pHYs%00%00%0B%12%00%00%0B%12%01%C3%92%C3%9D~%C3%BC%00%00%02%2BIDATH%C2%89b%C3%BC%C3%BF%C3%BF%3F%03%C3%8D%00%03%03%03%00%00%00%C3%BF%C3%BFb%22%60%C2%B8%01%03%03%C3%83%02%06%06%C2%86%07%0C%0C%0C%20%C2%97%20c%C2%90%18H%C3%8E%01%C2%A7n%06%06%06%00%00%00%00%C3%BF%C3%BFb%00%C3%B9%00%0BV%C3%B8%C3%BF%C3%BF%C3%BF%C2%81%C3%BF%C3%84%03%C2%90Z%C2%90%1ET%C2%B3%C3%BE%C3%BFg%00%00%00%00%C3%BF%C3%BF%C3%82%16D%01P%C2%97%C3%B1%C2%A3%C2%89%1FD%C3%A3%C3%9B%C2%A3%C3%B1%3F200%24000l%C2%80%C2%8B000%00%00%00%00%C3%BF%C3%BFB%C2%B71%00%C3%8D%C3%91%1F%C3%BE%C3%BF%C3%BF_%C3%B0%C3%BF%C3%BF%7F%01%2C%C2%AE%03%C2%89%C2%81%C3%A4%40j%C2%90%01%C3%88%0C%C2%88%C2%9A%C3%BF%C3%BF%19%00%00%00%00%C3%BF%C3%BFB%C3%96%00%C3%B2%22%C2%B2b%C2%90%C2%B7%C2%B1%19%C2%8C%C3%8D%22%C3%A4%C3%A0%04%C2%99%01%09%C2%AE%C3%BF%C3%BF%19%00%00%00%00%C3%BF%C3%BFBV%C2%88%C2%AC%08%C3%84%26d0%3A%C3%86%C3%94%C3%BF%C3%BF%3F%03%00%00%00%C3%BF%C3%BF%C2%82)r%40s%011.%C3%87%C3%A6%13%C3%A4%100%C3%B8%C3%BF%C3%BF%3F%03%00%00%00%C3%BF%C3%BF%C2%82I.%40%C2%92%00%C2%85%2B%C2%B2F%C2%98%C3%9C%04%241%10%1B%04%40r%C3%88jAza%60%C3%81%C3%BF%C3%BF%C3%BF%19%00%00%00%00%C3%BF%C3%BF%C2%82I%3C%40%C2%92%40w%3D%C2%B2%C3%97A%C2%9A%C2%90%1D%C2%83%1E%C2%94%20%C2%BD0%C3%B0%C3%A0%C3%BF%C3%BF%C3%BF%0C%00%00%00%00%C3%BF%C3%BF%C2%82I%C3%A0%0B%7B%C2%98k%C2%B1%01d_a%3A%C3%A8%C3%BF%7F%06%00%00%00%00%C3%BF%C3%BF%22%C3%86%02%C3%B4%20D%09%02%C2%BC%16%C3%BC%C3%BF%C3%8F%00%00%00%00%C3%BF%C3%BF%22TTP%06%18%18%18%00%00%00%00%C3%BF%C3%BF%22%C3%86%C2%82%09%0C%0C%0C%C3%B1X%C3%84Ab%209%C3%9C%C2%80%C2%81%C2%81%01%00%00%00%C3%BF%C3%BF%22%26%C2%92%C3%91%C2%83%05%3D%C2%B8pG%C3%B2%C3%BF%C3%BF%0C%00%00%00%00%C3%BF%C3%BF%22%26%C2%99n%C2%80%C2%8AcK%C2%A6%209%C3%9C%C3%89%C3%B4%C3%BF%7F%06%00%00%00%00%C3%BF%C3%BF%C2%82I%C2%802%05%0CP%2F%C2%A3%C3%BD%C3%BF%C3%8F%00%00%00%00%C3%BF%C3%BF%C2%A2mQ%C3%B1%C3%BF%3F%03%00%00%00%C3%BF%C3%BF%C2%A2ma%C3%B7%C3%BF%3F%03%00%00%00%C3%BF%C3%BFBWL%C3%9D%C3%A2%C3%BA%C3%BF%7F%06%00%00%00%00%C3%BF%C3%BF%C2%A2m%C2%85%C3%83%C3%80%C3%80%00%00%00%00%C3%BF%C3%BF%C3%82%C3%A5m%C3%AAT%C2%99%C3%BF%C3%BF3%00%00%00%00%C3%BF%C3%BF%22%14%C2%BE%C2%A0%C2%94%00Jn%C3%88%C3%B9%04%06%40b%209pj%C3%81%C2%8A%C3%BF%C3%BFg%00%00%00%00%C3%BF%C3%BF%C2%A2m%C2%B3%C2%85%C2%81%C2%81%01%00%00%00%C3%BF%C3%BF%03%00%0E%C3%8D%C2%82%C3%90Lqa%3C%00%00%00%00IEND%C2%AEB%60%C2%82";
var delExp = shortcuts.add("iconbutton", undefined, File.decode(delExp_imgString), {
    name: "delExp",
    style: "toolbutton"
});
delExp.helpTip = "delete all expressions of a selected layers transform-properties";
delExp.alignment = ["center", "top"];


var openProjectInExplorer_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%18%00%00%00%18%08%06%00%00%00%C3%A0w%3D%C3%B8%00%00%00%09pHYs%00%00%0B%12%00%00%0B%12%01%C3%92%C3%9D~%C3%BC%00%00%02%1CIDATH%C2%89b%C3%BC%C3%BF%C3%BF%3F%03%C3%8D%00%03%03%03%00%00%00%C3%BF%C3%BFb%C2%A2%C2%A9%C3%A9%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%C2%82Y%60%C3%80%C3%80%C3%80%C3%B0%C2%80%C2%81%C2%81%01%C3%A4%1Dd%C3%BC%C2%81%C2%81%C2%81%C2%A1%C2%81%C2%81%C2%81A%C2%80%2C%C3%93%19%18%18%00%00%00%00%C3%BF%C3%BF%C2%82%05%11%C3%88py%06%06%C2%86%C2%87P6%0C%C2%80%2C%C3%A6g%60%60%C3%B8%C3%88%C3%80%C3%800%01j%19%C3%B1%C2%80%C2%81%C2%81%01%00%00%00%C3%BF%C3%BFb%C3%B8%C3%BF%C3%BF%C2%BF%C3%81%7F%08%C2%B8%C3%B0%C3%BF%C3%BF%7F%01%C2%90%C2%85H%18%C3%84%C2%9F%00%C2%95'%04%3E%C3%BC%C3%BF%C3%BF%C2%BF%01E%C3%BF%C3%BF%C3%BF%0C%00%00%00%00%C3%BF%C3%BF%02%C3%B9%C3%80%C2%81%C2%81%C2%81a%3F%03%03C%23%1E%17*%40%C3%A5%4046%00%0AB%7D%C2%A8%C2%84%23%03%03%C3%83%010%C2%8B%C2%81%C2%81%01%00%00%00%C3%BF%C3%BFb!%C3%82%C2%BF%20%07%C2%80%C3%80%02%06%06%C2%86%0B%C3%90x%C3%81%06%40%C3%B2%C3%B1%0C%0C%0C%09p%0B%18%18%18%00%00%00%00%C3%BF%C3%BF%02y%C3%83%01%C3%AAwt%C3%AF%25%40%C2%BDM%0E%00%C3%A9K%C3%B8%C3%BF%C3%BF%3F%03%00%00%00%C3%BF%C3%BF%C3%82%C2%95LA%5E%06E*(%C2%82%C3%89%01%20%7D%13%18%18%18%18%00%00%00%00%C3%BF%C3%BF%C3%82e%01%2C%C3%B5P%02%C3%B8%19%18%18%0C%00%00%00%00%C3%BF%C3%BF%C3%82e%01%2C%C3%9C)%03%0C%0C%17%00%00%00%00%C3%BF%C3%BF%C3%82e%01%C2%AE%C3%94B%0A%C2%B8%C3%88%C3%80%C3%80%C3%80%00%00%00%00%C3%BF%C3%BF%C3%82%17D%C2%94%C2%82%0D%0C%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%C3%82e%01%2CMS%02%0E0000%00%00%00%00%C3%BF%C3%BF%C3%82f%015%5C%0F*Z%0E0000%00%00%00%00%C3%BF%C3%BF%C3%82f%015%C3%82%1F%C2%92%C3%91%18%18%18%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%95%0F%20%16000%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%95%05%C3%A0%08f%60%60%60%00%00%00%00%C3%BF%C3%BFB%C2%B6%00V%C3%A6S%1AD%C2%88%22%C2%9F%C2%81%C2%81%01%00%00%00%C3%BF%C3%BF%02%C2%959%0A%C3%90%C3%82%06T~%C3%80%C3%8A%25J%C3%80%02xy%C3%B6%C3%BF%3F%03%00%00%00%C3%BF%C3%BF%C2%821%1EP%C3%81%60%18%009%12b%C3%AE%C3%BF%C3%BF%0C%00%00%00%00%C3%BF%C3%BF%C2%821%40%C2%95%0E5%2C%01UN%C2%88%12%C3%B9%C3%BF%7F%06%00%00%00%00%C3%BF%C3%BF%C2%A2m%C2%AB%C2%82%C2%81%C2%81%01%00%00%00%C3%BF%C3%BF%C2%A2m%C2%AB%C2%82%C2%81%C2%81%01%00%00%00%C3%BF%C3%BF%03%00%C3%A5%C3%A5%C3%A9%0ET%C3%A5%C3%95%C3%96%00%00%00%00IEND%C2%AEB%60%C2%82";

var openProjectInExplorer = shortcuts.add("iconbutton", undefined, File.decode(openProjectInExplorer_imgString), {
    name: "openProjectInExplorer",
    style: "toolbutton"
});
openProjectInExplorer.helpTip = "Open Project Folder";
openProjectInExplorer.alignment = ["center", "top"];

var openFootageFolder_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%18%00%00%00%18%08%06%00%00%00%C3%A0w%3D%C3%B8%00%00%00%09pHYs%00%00%0B%12%00%00%0B%12%01%C3%92%C3%9D~%C3%BC%00%00%01%C3%82IDATH%C2%89b%C3%BC%C3%BF%C3%BF%3F%03%C3%8D%00%03%03%03%00%00%00%C3%BF%C3%BFb%C2%A2%C2%A9%C3%A9%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%C3%82e%C2%81%00%03%03%C3%83%01%06%06%06%C2%90%C3%B7%C2%88%C3%81%20%C2%B5%20%3D%C2%A8%C2%80%C2%81%C2%81%01%00%00%00%C3%BF%C3%BFb%00%05%11%16%7C%C3%A0%3F%C3%A9%00%C2%A4%07%C3%95%C2%AC%C3%BF%C3%BF%19%00%00%00%00%C3%BF%C3%BF%C3%82e%01%0C%2C%C3%80!%C2%8F%C2%8CAj%60%00U%C3%AE%C3%BF%7F%06%00%00%00%00%C3%BF%C3%BFB%17%10%20%C3%93%C3%B50%00%C3%92%0B2%03b%C3%9E%C3%BF%C3%BF%0C%00%00%00%00%C3%BF%C3%BFB%C2%B7%C2%80%12%C3%83%C2%91-%C2%81%C2%98%C3%B7%C3%BF%3F%03%00%00%00%C3%BF%C3%BFBw%3D)AC8%C2%A8%C3%BE%C3%BFg%00%00%00%00%C3%BF%C3%BF%C2%A2V%C3%90%60%C3%B3%C2%85%C3%80%C3%BF%C3%BF%C3%BF%19%00%00%00%00%C3%BF%C3%BF%C2%A2f%C3%90%60Z%C3%B2%C3%BF%3F%03%00%00%00%C3%BF%C3%BF%02%C3%A5dP%C3%BA%7DO%C2%93%5C%C3%86%C3%80%C3%80%08%00%00%00%C3%BF%C3%BF%22%25'%3F%24%C3%99x%06%06%06%00%00%00%00%C3%BF%C3%BF%02Y%C3%B0%C2%81%08u%C2%89%0C%0C%0C%0A%0C%0C%0C%C2%8E%24Y%C3%84%C3%80%C3%80%00%00%00%00%C3%BF%C3%BFB%C3%8FX%C2%B8%00z%C2%8Ai%C3%B8%C3%BF%C3%BF%C3%BF%07%C2%82%C2%BA%C3%BE%C3%BFg%00%00%00%00%C3%BF%C3%BF%C2%82%C2%95%C2%A6%C2%84%C2%8ATF%2Cb%01%0C%0C%0C%C3%AB%C3%B1%C3%AAb%60%60%04%00%00%00%C3%BF%C3%BF%C2%A2mi%C3%8A%C3%80%C3%80%00%00%00%00%C3%BF%C3%BF%22%C3%97%C2%82%06%06%06%C2%86%05%04U100%00%00%00%00%C3%BF%C3%BF%226%0E%12%C2%A0%C3%AA%1C%C3%BE%C3%BF%C3%BF%C3%BF%C2%80%C3%A8%C2%9C%C3%B0%C3%BF%3F%03%00%00%00%C3%BF%C3%BF%226%0E%40%00%C2%94z%C3%A4I%C3%B2'%03%03%23%00%00%00%C3%BF%C3%BF%22%C3%85%02%C3%92%01%03%C2%83%22%00%00%00%C3%BF%C3%BF%C2%82%C3%85%C3%81A%1A%18~%C2%90%C2%81%C2%81%C3%A1%01%00%00%00%C3%BF%C3%BF%C2%A2ma%C3%B7%C3%BF%3F%03%00%00%00%C3%BF%C3%BF%C2%A2m%C2%AB%C2%82%C2%81%C2%81%01%00%00%00%C3%BF%C3%BF%C2%A2m%3E%60%60%60%00%00%00%00%C3%BF%C3%BF%03%00%C2%BB%C3%80%C2%92b%C3%88%C3%B2%C2%9F%00%00%00%00%00IEND%C2%AEB%60%C2%82";

var openFootageFolder = shortcuts.add("iconbutton", undefined, File.decode(openFootageFolder_imgString), {
    name: "openFootageFolder",
    style: "toolbutton"
});
openFootageFolder.helpTip = "Open Footage Folder";
openFootageFolder.alignment = ["center", "top"];

var openJSONFolder_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%18%00%00%00%18%08%06%00%00%00%C3%A0w%3D%C3%B8%00%00%00%09pHYs%00%00%0B%12%00%00%0B%12%01%C3%92%C3%9D~%C3%BC%00%00%02%C3%87IDATH%C2%89b%C3%BC%C3%BF%C3%BF%3F%03%C3%8D%00%03%03%03%00%00%00%C3%BF%C3%BFb%C3%82ax%03%03%03%C3%83%07%06%06%06%C2%90%C3%AD%C2%B8%C3%B0%01%06%06%06%03%C2%BC%C2%8Ec%60%60%00%00%00%00%C3%BF%C3%BF%C3%82%C3%A6%03%C2%90%C3%A1%C3%B5%0C%0C%0C%1B%19%18%18%16%40-B%07%09%0C%0C%0C%C3%B1%0C%0C%0C%1F%19%18%18%1C%18%18%18.%605%C2%9D%C2%81%C2%81%01%00%00%00%C3%BF%C3%BFb%00Y%C2%80%C2%86%3F%C3%BC%C3%BF%C3%BF%7F%03%16qd%C3%9C%C3%B0%1F%01%40%C3%AA%0D%C2%B0%C2%AA%C3%BB%C3%BF%C2%9F%01%00%00%00%C3%BF%C3%BF%C3%82%16D%C3%BCP%C2%97%13%0B%40%C3%AAA%C3%81%05%C3%B2%09*%60%60%60%00%00%00%00%C3%BF%C3%BF%C3%82%15%07%C3%98%C2%82%05%1F%00Y%C2%B2%1F%1At%08%C3%80%C3%80%C3%80%00%00%00%00%C3%BF%C3%BF%C3%82e%01!%C2%80%C3%8B%01%C3%B3Q%22%C2%9E%C2%81%C2%81%01%00%00%00%C3%BF%C3%BFB%C2%B7%00%C3%83%058%00(%08%0F%C3%A2%C2%90%2B%C2%80%C2%B3%18%18%18%00%00%00%00%C3%BF%C3%BFB%C2%8E%C2%90%09H%11%C3%A7%40%20%C2%92q%C3%A1%03P%0C%C2%91%C3%BF%C3%BF%C2%9F%01%00%00%00%C3%BF%C3%BFb%C2%81%C3%9A%03r%11(%C3%99%3Dd%60%60%C2%90%C2%87%C3%BA%04k%C2%A4%11%00%0APyP0%5D%60%60%60%60%00%00%00%00%C3%BF%C3%BF%C2%82%C3%99D%0B%C3%90%C3%B0%C3%BF%C3%BF%7F%06%00%00%00%00%C3%BF%C3%BF%C3%82e%01(%1F%C3%80%C3%92x%C3%82%C3%BF%C3%BF%C3%BF%03%C2%A0l%10x%00%15%2B%40%12%C2%BB%C2%80%C2%A6%07%C3%84%C3%BF%C3%BF%C3%BF%C3%BF%7F%06%00%00%00%00%C3%BF%C3%BF%C3%82f%01(.%60b%20%C2%83Al%01%C2%A8%26%C2%90f%05%C2%A40%06%C3%85%15L%1DH%0D%C3%88r%10%1B%22%C3%BE%C3%BF%C2%BF%01%00%00%00%C3%BF%C3%BF%C3%82%C2%96L%C2%91%C2%93%20%2C%03%C2%81h%7Dh%C2%B8%3E%C2%80%C3%92%C2%A0x%03%C2%89_%C2%84%C3%AA%01aP%C3%9C!%C3%B430%08%00%00%00%00%C3%BF%C3%BFB%C2%B6%60!%C2%B4lA%06%13%C2%90%0A5%C3%A4d%09%C2%B2%0C%C2%94(%C2%90%1D%24%00U%0B%C3%82%10%C3%80%C3%80%C3%80%00%00%00%00%C3%BF%C3%BFB%C2%B6%00d%3B%08%23%17%5C%01H%C3%85%06%C2%B2F%C2%90c%12%C2%A1l%C3%A4%C2%94%C2%83%C2%9A%07%18%18%18%00%00%00%00%C3%BF%C3%BFB%C2%8E%03P%C2%A4%C3%81%C3%B8%206%3C%25%20%C2%A5qp%C2%B8bQ%07%0AwP%C3%84%C3%83%C3%A2%08%C3%84%C3%BF%C3%BF%C3%BF%C3%BF%7F%05%00%00%00%00%C3%BF%C3%BF%C2%82%15%C3%97%20o%C2%82%C3%8A%13%C2%90%C3%8B%40%00%C3%A6%7DP%C2%BE%00%C3%B9%00%14%0F%C3%B6h%3E%40V%07%0BZ%C2%90%19%20%3D%20%C3%B3%14%18%18%18%04%00%00%00%00%C3%BF%C3%BF%C2%82%C2%B9%04f%3B%C2%B5%00%24y%C3%BF%C3%BF%C3%8F%00%00%00%00%C3%BF%C3%BFB%C2%AEp%40%C2%91%04%0AGP%C2%A9%C3%98%C2%88%1EYD%02P%C2%A2%C2%80%C3%85%07%03%03%03%03%03%00%00%00%C3%BF%C3%BF%22%C2%B7%C3%82%C3%81%C2%86Aa%0F%C3%92%0B%C3%8BG%0C%C3%BF%C3%BF%C3%BFg%00%00%00%00%C3%BF%C3%BF%C2%82%C2%95E%C3%88%00%C3%A4%0AP%C2%95%C2%B9%01O%C2%95%C2%89%0E%40%C3%A1%0D%C2%AAj%C2%91%7D%C3%81%C3%80%C3%80%C3%80%C3%80%00%00%00%00%C3%BF%C3%BF%C3%82W%25%C2%92%1A'%C2%A0%C2%9C%C2%8EZu%C3%BE%C3%BF%C3%8F%00%00%00%00%C3%BF%C3%BF%C2%A2m%C2%B3%C2%85%C2%81%C2%81%01%00%00%00%C3%BF%C3%BF%03%00%C3%AB%C2%8FA%00%C2%89%0A%16a%00%00%00%00IEND%C2%AEB%60%C2%82";

var openJSONFolder = shortcuts.add("iconbutton", undefined, File.decode(openJSONFolder_imgString), {
    name: "openJSONFolder",
    style: "toolbutton"
});
openJSONFolder.helpTip = "Open JSON Folder";
openJSONFolder.alignment = ["center", "top"];

var parent2null_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%18%00%00%00%18%08%06%00%00%00%C3%A0w%3D%C3%B8%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%02%00IDATH%C2%89%C2%B5%C2%95%C3%8F%C2%8B%C2%8Da%14%C3%87%3Fw~%C2%95%C3%8C%08%C2%B1P%C2%92%12J~N%16c%23c1kI%2Cl%C2%89%0D%0B%C2%8BYNv%C2%A2%26e%C3%BE%04%C2%85)i(%16%16%C2%93f%14%C2%92%1AiJYH%11%C2%9A%C2%8D!%C3%8D%C2%8F%C3%9C%C3%B9X%C3%9Cgr%C3%AE%C3%9B%C3%BB%C3%9C%C2%B9W%C2%9Czz%C3%8Fs%C2%9Es%C2%BE%C3%9F%C3%B3%C2%9E%C3%B79%C3%A7%C2%AD%C2%A8%C3%BCOi%C3%8B%C3%98%C2%BB%C2%81%2B%C3%80K%60%1C8%C3%B9%C2%B7%04%1D%19%C3%BB%7D%C3%A0h%C3%98%C3%B7%03%C3%9B%C2%81i%60%06%C2%98%02~6%C3%85%C2%A0%16%C3%97%01W%C2%96%05%C3%B5%C2%AE%C3%9A%5B%12_%C2%B7%C3%8A%C2%8CG2%C2%A0s%C3%AA%C2%94%3A%1BlK%C3%AA%C2%B0%C3%9A%C3%91%2CA%C2%BB%3A%C2%96!%C2%B8%C2%99%7C%C3%9A%C3%94%C3%83%C3%AA%C3%83p6%C2%96bW%24%C2%B8%1C%C2%82%C2%BE%07%C3%BD%C2%95%C2%BA%C2%B1%04%C3%A0%C2%9CZM%3EWW%22%C3%98a%C2%AD%C2%B6%C2%AA%C2%83%C3%AAz%C3%B5%C2%94%3A%C2%A0v%C3%A6J%C2%A0%5EH1UuW%23%C2%82%1B%C3%89%C3%B1%C2%B9Zi%00X%C2%B6%26S%C3%AC%C2%BDb%C2%A9%C2%A2%C3%93%C3%A7%C3%A4t%C2%A2E%C3%B0%3E%C3%B5%7D(%C3%A7%C2%8Cz%C2%B6H%C2%B0%25%1D.%C2%A9%3D-%C2%80%C3%AF%C2%B6v%C2%BB%C3%8A%C3%A4L%24%C3%98%1F%C3%98%5B%C3%89%C3%BEv%00%5CT%7F%14%C3%9E%C2%A4%C2%BD8*r%C2%9D%C2%9D%C2%93%C2%BE%C2%A0%1F%036%03%C2%B3i%C2%BF%01%C3%98%C2%B6%0C%C3%B8!%3D%C3%97%26%C2%A7%C2%8FM%12%C3%8C%05%C2%BD%17%C2%A8%02%C2%AB%C2%83m%C2%BE%C3%A2%C2%9Fi%C3%BA%16%C3%98%09%C2%8C%C2%A4%2C%C2%BA%C2%80I%C3%A0%11%C2%B0%C2%94!%18%06.e%C3%8E%C3%9E%00%7Bc%3D%C2%872%1Fk%C2%BC%C3%81%C2%87_%C2%A7%C2%BE%2B%C2%89%C2%99S%0F%C2%A9u%C3%A3z!%C2%93I%3Fp-s%C3%B6%0Dx%C2%91%C3%B4*%C3%B0%09%18%05%0E%02%C3%8F%C2%80%C2%BA%3E%C2%98%0E%19%3CQG%0B%19u%15%C2%B2%C3%AFQo%05%C2%9F%C3%93eo%197qJn%C2%B5%C3%96%C2%91%C3%B3%C3%81%C2%B6G%5De%C3%ADJ%0F%C2%A9_%C3%83%C3%99%60%C2%A6%C2%84u%04%C2%AFC%C3%80c%C3%B5NIm%C2%8B%C3%B2E%3D%C2%9E%03%2F%12%C2%9Co%00%C3%B4%2B%C3%A8%C2%8B%C3%AA%C2%84zQ%C3%ADn%04%5E%24%C2%A8%C2%A8%C3%97K%C3%80%1F%C2%A8k%C2%ACM%C3%97M%C3%96%C3%BE%07Mw%7B%C3%AC%C2%83e%C3%99%07%0C%00%C2%9D%C3%80S%60%22s%C2%83%C2%9A%C2%922%C2%82%7F*%C2%BF%01el%C3%A9%C3%9AC%C3%9C%C2%99%C2%A4%00%00%00%00IEND%C2%AEB%60%C2%82";

var purgeAll = shortcuts.add("iconbutton", undefined, File.decode(purgeAll_imgString), {
    name: "purgeAll",
    style: "toolbutton"
});
purgeAll.helpTip = "Purge DiscCache";
purgeAll.alignment = ["center", "top"];

// add Obj
// ======
var addObj = root.add("group", undefined, {
    name: "addObj"
});
addObj.orientation = "column";
addObj.alignChildren = ["left", "top"];
addObj.alignment = ["left", "top"];
addObj.minimumSize.width = 54;
addObj.spacing = 10;
addObj.margins = 10;

var textLayer_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%18%00%00%00%18%08%06%00%00%00%C3%A0w%3D%C3%B8%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%01aIDATH%C2%89%C3%AD%C2%96%3D%2FfQ%14%C2%85%1F%5E%C2%BC%18%C3%95%24%C2%A6T%08%22%3A%C3%85T%23%C2%98B%C2%A7%C3%91(t%C3%BE%C2%84%C3%9F%C2%81N%C2%A3%C3%B5%0BDD%C2%83I%26%C2%A3%C2%98%0C%C3%89%C3%94b%12%1F%C2%99%C2%88%10!%C2%88%C2%8FG%C3%A1%C3%9E%C3%8C%C2%9E%13%C3%AE%C3%AB%C3%AB-%24Vr%C2%92s%C3%B6%C2%BA%7B%C2%ADs%C3%B7%3E%C3%A7%C3%A6%C3%96%C2%A8T%13%C2%B5UU%07%C3%AA%C3%82%C2%BC%05%C3%B8%0AL%00%1F%C2%81%C2%9B'j%C3%95%02G%C3%80%24%C2%B0%0A%C3%BCM%0D%C2%86%C2%80q%C2%A0%C3%AFY%5B%C3%BD%C2%87%C3%A3Lw%0E%005%1F%3F%7D%3D%C2%AC%C3%A7%C2%BA%C2%B1%07%C3%8D%2F%C3%9CyDS%3E%C2%89%25*%25%0F%09%C3%BC%0E%09m%40C%C2%B6%C2%BE%04%C2%B6%C2%81%C2%93l%C3%9D%11E%C3%BF%C3%93%0A%25ZN%5Es%3Ep%5D%C3%AAf%C3%A0v%C3%94%C3%8F%C2%81%C2%9FNr%C2%BF%C3%A7%5C4%C3%B8%C2%A2N%C2%A9%07%C3%AA%C2%92%C3%9A%13%C2%B8%5E%C3%B5O%10%C3%98S%07%02%C3%9F%C2%A9.%C2%AA%C2%87%C3%AA%C2%8C%C3%9A%7F%C2%9F%01j)K%C3%BC%C2%94%C3%84%2B%19%C2%A0%C2%B6%C2%AA%C2%83jc%C2%8C%C3%87%1E%00%5C%03%2B%C3%8Fh*%C3%80%3E%C2%B0%C2%9C%06%C2%AB~%C2%93%C3%9F%0D%C3%9E%C2%8E%C3%81%09w'%2C%C3%87%0Dp%C3%BA%C2%A8%C3%8C%C3%A4%2C%C2%A7%C2%A3%5E%1DVW%C3%95%C2%8Bp%0F.%C3%95%1F%C3%AA%C2%A8Z.%C3%92%C2%A8d0%C2%AA%C2%9E%C3%B90%C3%8E%C3%95%C2%B1%22%C2%8DJ%25j%07%1A%0B%C3%B82%C3%90%5D%24P%C3%89%60%0D%C3%98*%C3%A0w%C2%81oE%02%C3%A9%C2%A7%22%C3%85%060%0B%C2%8C%00%1F%C2%80%C2%AB%2C%5E%02.%C2%80%05%C3%A0W%C2%91%40%C2%8Do%C3%BD%C2%AF%C3%A2%16%C2%99Q%0F%02%C2%B5%C3%86%C2%BE%C2%B4%00%00%00%00IEND%C2%AEB%60%C2%82";

var textLayer = addObj.add("iconbutton", undefined, File.decode(textLayer_imgString), {
    name: "textLayer",
    style: "toolbutton"
});
textLayer.helpTip = "Create a Text layer in active comp";
textLayer.alignment = ["left", "top"];
textLayer.preferredSize.height = 24;
textLayer.preferredSize.width = 24;

var solidLayer_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%18%00%00%00%18%08%06%00%00%00%C3%A0w%3D%C3%B8%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%00%C2%BEIDATH%C2%89%C3%AD%C2%951%0A%C3%820%18F_%C3%ACR%1C%1D%C3%9C%C2%BD%C2%82%C2%A7%C3%B0R%0E%3D%C2%8A%C3%9E%C3%81%C3%99%C3%81%7B%C3%B4%00uq%C2%A9%C2%A2%1D%3E%C2%87%C2%9APc%03%C3%92%26%C2%88%C3%90%0F%02-)%C3%AFA%C3%BA%C3%B3%C3%85H%22efI%C3%A9%C2%BF%12%C3%A4%40%01%C2%94%C2%80%C2%BE%5CW%C3%A0%00%C2%AC%3Fh%C2%92%C2%BA%2B%C2%97t%C3%92%C3%B0%C3%9C%25m%C2%BAL_P%C2%8C%C2%80%C3%9BT%C2%922%C3%8B4z%C2%9F%C2%A2%12XE8%C3%BA%25p%C3%AE%C3%BB%071%C3%A0%00s%C3%BB%C2%90j%C2%8ALj%C2%81%C3%8B%24%C2%98%04%7F(%C2%B8E%C3%A26!%C3%811%C2%92%C3%A0%12%12l%C2%81%C3%87H%C3%B8%1E%C2%A8%C3%9D%C2%9BW%C3%97%C2%BC%C3%BA%C2%BC%1AX%C3%95%3B%C2%B5w%C2%8A%C3%A3%C3%B9um%C2%93%01%0B%C3%9AV4%7D%1Fxih%C2%8F%C2%A5%C3%B67B%C2%82hI%3E%C2%A6OI%0D%2C%C2%91j%07%C2%B3%06%00%00%00%00IEND%C2%AEB%60%C2%82";

var solidLayer = addObj.add("iconbutton", undefined, File.decode(solidLayer_imgString), {
    name: "solidLayer",
    style: "toolbutton"
});
solidLayer.helpTip = "Create a Solid layer in active comp";
solidLayer.alignment = ["left", "top"];
solidLayer.preferredSize.height = 24;
solidLayer.preferredSize.width = 24;

var shapeLayer_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%18%00%00%00%18%08%06%00%00%00%C3%A0w%3D%C3%B8%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%02%24IDATH%C2%89%C2%B5%C2%95MoMQ%14%C2%86%C2%9F%C3%95V%C2%A3%C3%9A%C3%92%C2%90T%07%0Ch4%22%C3%81P%C2%8A%0433%C3%86L%18%C2%9AI%C3%BC%02i%22%C2%9DuD%07%C3%BE%C2%80Y%051BB%C3%92%C2%B9%C2%94%C3%84%C3%94%C2%A4f%C2%A5%C3%AD%C3%AD%C3%87E%C3%9B%C3%87%60%C3%AF%C2%B2%C3%9D%C3%9C%C3%A3%C2%9EF%C2%BA%C2%93%C2%93%7B%C3%AE%C3%99%C3%AFz%C2%9F%C2%B5%C3%8F%5E%C3%AB%C3%ACP%C3%99%C3%8D%C3%91%03%10%11%C2%A8%C3%A3%C3%809%60o%C3%8D%C3%98M%60%0Dx%14%11m%C2%B3T%C2%89%C2%BC%C2%82q%C3%A0%25%C3%90%07t%C3%97%04%08l%00%C3%8B%111R%05%C3%A8%C3%89%C3%B7%C2%97%C2%80%01%C2%A0%0Bh%C3%94%04t%C3%A7%C2%98n%C3%B5%40D%2C%C2%B5%13%C3%B5%C2%B4%C3%BCo%00%C2%B7k%02%26%C2%81%C2%B1%C2%9C%C3%94%C3%8F*Q%2B%00%C2%80%C2%88%C2%98%C3%A9%C3%A4%C2%AEN%C3%96%C3%89%C2%A2%C2%AB%C2%8E%C2%A8b%C2%AC%17%1E%C2%95%2B%C3%98%11%40%C2%BD%C2%A0%C3%8E%C2%AA%C2%AB%C3%80%C2%B1%C3%BCx%15x%C3%B8_%00uH%C2%9D%05%5E%00%C3%A7%C2%81%7D%C3%80%C3%BE%3C%3D%08%C3%9CT%C2%9B%C3%AA%C3%BD%C3%96%C3%98%C2%B6%7B%C3%90b%C2%BE%1F%C3%B8%08%C2%8C%C2%90*g%C2%91%C3%94%2B_%C2%80%C3%BE%0C%C3%A8%C3%8D%5Ew%C3%95%C2%81%C2%88%C2%B8%C2%B7%C2%93%15%3C%07%0E%03%C2%91%C3%8D%C2%AFGD_D%C2%8C%C3%A6%C3%BA%1F%03%5E%03KyUw%C3%94%C3%9F%7D%C3%B1O%C2%80%3A%01%C2%9C%C3%89%C3%99-%00%C2%A3%11%C3%B1%C2%B6%C3%94D%C3%84%7CD%5C%05%C2%9E%02%2B%C2%A4f%7DVw%05%C2%97%C2%81%C2%A1%C2%9C%C3%B9%C2%8D%C2%88%C3%B8Z%25%C2%8C%C2%88%5B%C2%A4%C3%8E%068%C2%A5%1E%C2%AD%02l%15%C3%B7g%C3%B3ooD%C2%BC%C3%AA%C2%90%0C%C3%80%0C%C2%A9d%C2%B7%C2%80%C2%8B%25%60%C2%8B%C3%B4m%C3%A9%02%26%C3%949u%C2%AE%08%C2%9C%C2%AFa%0Ei%C3%A3%C2%9B%C2%A4M%1F%C2%86%3FU%C2%B4%C3%BD5%1C%04N%C2%B7%09%C3%AC%C2%AF%09%C3%A8%25U%C3%9A%26%C3%B0%3D9%2Bj%C2%BF%C2%BA%C2%90ky%C2%BD%C2%B8%16McM%1D%C3%AE%C3%A4%C2%AE%C2%BE%C3%8B%C3%BAo%C3%AA%155%01%0A%C3%81A%C3%B5PqMehS%7D%C3%92%C3%81%C3%BC%C2%A4%C2%BA%C2%9C%01%2B%C3%9B%C3%89%C3%BF%05h%13%C2%B4G%C3%9D(%C2%B2%C2%9A%C2%AE%C3%90%1DQ%1BY%C3%97%C3%98%C3%96u%04d%C3%91%C2%83%C3%A2U-%C2%A9%C2%9F%C3%95i%C3%B5Z%C2%9E%7B%C2%A3%C2%AE%C3%A4%C3%B9%1F%C3%AA%C3%BB%22%C2%B63%20%0B%C2%A7%C2%8A%0C-%C3%B6g%C2%B9x%C3%96%C3%88%C3%957%C2%B0c%40%16%1FW%3Fd%C3%93F%C3%8Ev%3D%C2%BF%C2%BA%C2%A6%C3%BA%C2%B8ML%3A%C2%93%23%C2%A2%16%24%07%C2%9D%20%C2%9D%C3%A1%23%C2%A43%C3%A1SU%13Z%1C%C3%BA%C2%BB6~%01%3C%C2%BF%C2%B0%C3%BC%C2%BC%C2%A1%C3%BA%C3%99%00%00%00%00IEND%C2%AEB%60%C2%82";

var shapeLayer = addObj.add("iconbutton", undefined, File.decode(shapeLayer_imgString), {
    name: "shapeLayer",
    style: "toolbutton"
});
shapeLayer.helpTip = "Create a Shape layer in active comp";
shapeLayer.alignment = ["left", "top"];
shapeLayer.preferredSize.height = 24;
shapeLayer.preferredSize.width = 24;

var adjustmentsLayer_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%18%00%00%00%18%08%06%00%00%00%C3%A0w%3D%C3%B8%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%01%03IDATH%C2%89%C2%BD%C2%95%C2%BD%C2%AD%C3%820%14%C2%85O(%C2%A8%C3%A8%C2%A1a%0Bv%C2%A0Co%C2%87H%5E%C2%81%C2%82Y%C2%A8%C2%B2%00%15%12%3B0%03%3Dy%C2%99%C2%80%C3%A6%C2%A3%C2%B9%06%1B%C2%9C%1F%04%C3%8E%C2%91%C2%ACkY%C2%BE%C3%9FQ%C3%AC%C3%A4%C2%A4%00%C2%94S%C2%93%C2%AC%C3%B4%01%063IN%C3%92QR-%09%1B%C2%B5%C2%AD9%C3%9B%C3%93.%C2%A0m%C2%94%40C%C2%BF%1A%C3%9B%C2%9B%C3%A4%C2%A4%16%C2%A7%40%15%00.%C3%80%0EX%01%C3%B3%0E%C2%A3%C3%8Az%7B%0D%3C%C3%BC%06l%13M%5D%C2%AA%C3%BA%0C%C3%8A%00%C2%BEiy%C3%AC%3EE%C3%87%156%C3%8Ex%C2%9E%C3%B9%C2%B6%05%3E%C3%84%C2%A01%C3%96%C2%9B%C2%81%C2%B3%0D%17%12g%C3%B9%C2%81%01%C3%86%12%10%C2%BD%C2%A6%7FV%C3%B7%C2%92n%1F%C2%BF%C3%B0%C2%B1%3C%2B2XY%3D%7D%09%0FY*xF%C2%85%C2%9F%2C%24%5D%3B%C2%9A%C2%87fK!%C2%8D%1C%15%C3%BFV%C2%97%3F%C3%A0zVdp%C2%B6%C2%BA%C3%BE%C2%81%C2%81gE%06%07%C2%AB%C2%A5%C2%A4%C3%A9%C2%97%06%C2%87%C3%87l%C3%8C%0F-%7BT%C2%8C%12v%C2%A3%C3%84u%C3%B6%1F%C3%8E%C3%AB%C3%85%3B%C3%A0%08%C3%94%01%C2%B4%C2%B65Gp%C2%A1%C2%A9%11FE%16e%C2%8F%C2%8A%3B%40%C3%B7%C3%B6%C3%AF%C2%B5A%C2%91%C2%9B%00%00%00%00IEND%C2%AEB%60%C2%82";

var adjustmentsLayer = addObj.add("iconbutton", undefined, File.decode(adjustmentsLayer_imgString), {
    name: "adjustmentsLayer",
    style: "toolbutton"
});
adjustmentsLayer.helpTip = "Create an Adjustment layer in active comp";
adjustmentsLayer.alignment = ["left", "top"];
adjustmentsLayer.preferredSize.height = 24;
adjustmentsLayer.preferredSize.width = 24;

var nullLayer_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%18%00%00%00%18%08%06%00%00%00%C3%A0w%3D%C3%B8%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%00%C3%8FIDATH%C2%89%C3%AD%C3%95%C3%89%0D%C3%820%10%05%C3%90%3F%C2%88%3Bt%02%1D%40'%C2%84%0EH%07%C2%94%C3%A0%12%C2%A0%03J%08%1D%C2%A4%04J0%15%7C.%0E%C2%B1l%C3%B0*sb%24K%C2%91%C2%97yR%C3%86%C3%96%08I%C2%B4%C2%8CE%C3%93%C3%AC%C2%BF%00%C2%96%C3%96wg%C2%86%1D'%11%19C%09H*%00%5Bgzoo%C2%98%C3%86%C2%99~h%C2%92%C3%AEa%17%18%3E%C2%9C%7B%C3%A7%C2%8D%C3%BD%C2%A2%15%C2%80!%C2%86%C2%84%22%C2%A5%06UHj%C2%91'd%C3%9D%0A(Fr%C2%AF%C3%A9%26%17)y%07YH%0C%C3%A8%01%3Ck%C2%90%180%C3%82%7F%7C6%C2%A2j%01%C2%88%C3%88%0D%C3%80%C3%B1%C3%8B%C3%B2%01%C3%80%C2%AE%0A0%C3%88%25%C2%80%04%23%C2%B9%C3%88%C2%A5H%C3%96-2H%C3%9F%0C0%C2%88%02pm%06%18%C2%A4KE%C2%8A%1BN*b7%C2%9C%07%C2%80%C2%BB%C2%B3%C2%AEc%08I%0D%C2%BF%C3%A1%C3%8C%7B%C3%BEM%3F%16%2F3%00w%60Z%02%C3%ACT%00%00%00%00IEND%C2%AEB%60%C2%82";

var nullLayer = addObj.add("iconbutton", undefined, File.decode(nullLayer_imgString), {
    name: "nullLayer",
    style: "toolbutton"
});
nullLayer.helpTip = "Create a Null layer in active comp";
nullLayer.alignment = ["left", "top"];
nullLayer.preferredSize.height = 24;
nullLayer.preferredSize.width = 24;

var parent2null_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%18%00%00%00%18%08%06%00%00%00%C3%A0w%3D%C3%B8%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%02%13IDATH%C2%89%C2%A5%C2%94%C2%BFK%C2%95a%14%C3%87%3F%C2%B7%24%C3%BB%C2%85V%C2%90%C2%83%11d%11%14%24%15A5%C2%88KK%C2%83%5B%7B%C3%8D%C3%91%C3%A2%3F%10-QC%11X%C2%83%0DI444%C2%B4%C2%88%C2%B4G%C2%88dY%C2%86AC%C3%90b%C3%A2E33%C2%A3%C2%B2%C2%B4O%C3%83%C3%BB%C3%9C8%5D%C3%AE%C3%BB%C3%9E%7B%C3%AB%C3%80%03%C3%A79%C3%A79%C3%9F%C3%AF9%C3%8F%C3%B3%C2%9CSR%09%C2%B2%198%06%C3%AC%04%C2%96%C2%80%17%C3%80%22%C3%BF!-A%C3%9F%0D%C2%8C%01%C2%BB%C2%82%C3%AD3p%19%C3%A8H%C3%BBy%60%3C%C2%9D%5Bi%C2%88A%C2%AD%C2%ACA%1B%C2%97%05%C3%B5%C2%AA%C3%9A%16%C3%A2k%C2%AE%C2%B8%C2%99%C3%88%01%5BS%C2%9F%C2%AA%C2%A3%C3%AA%C3%BB*%C3%9F%C2%AC%C3%9A%C3%9B(%C3%81%C3%83%1C%C2%82%C2%A9%C2%AA%C2%A0%C2%83%C3%AAmu5%C3%B9%7F%C2%A8%7D%C3%B5%08%C2%BA%C3%94%C3%85%1C%C2%82%C2%B39%C3%81%C3%87CE_%C3%95CE%04%C2%8F%C3%82%C3%81WI%2F%C2%AB%C3%A7%C2%8B%C3%8AW%C3%B7%C2%87%C3%84%C3%86%C3%94R-%C2%82%23!%C3%9B%C3%BE%C3%A4h%C2%AD%03%1C%C3%97%C3%85%10%3F%C2%A7%C3%9EW%0FD%C2%82%1B%C3%899%C2%A3nh%02%18%C3%B5%C2%8C%C3%99%1BT%C3%8B%17%C2%B5%C2%A7B0%C2%99%C2%8C7%C2%9B%04oW%3F%C3%95%00%C2%AF%C3%88%3B%C2%B5%C2%B4%0E%C3%98%C2%97Zb%C2%BC%C3%89%26%C3%AD%03%C3%9A%C3%83~%00%C2%B8%17%C3%B6%5D%C3%80%C3%86%16%60k2%7Cl%C2%92%C2%A03%C3%A8s%40%3F%C3%90%0A%C2%9C%0B%C3%B6%C3%B5-d%C3%A3%C2%A0%0D%C3%98%C3%91%24%C3%81t%C3%90%3B%C2%80A%60%7B%C3%95%C2%99U%C3%94%C2%97%C3%A9%C3%8En%C3%BD%C3%83%1B%2C%14%C2%BC%C3%81%C3%9B%C3%8A%23_O%C2%86%C2%B2%C3%99%C3%B7%C3%9C%C2%A4%C3%AE%C2%B5%C2%819c%C3%96%C3%81%2B5%C3%80%C2%97%C3%94%13%15%C2%82%C3%83%C3%81%C3%B1%3C%04%C2%AC%C2%A9%C3%83%C3%AA%C2%9E%3A%24%C2%B1%0Ff%C3%94%C2%A1%C2%94%C3%A0_%C2%9D%3C%5CP%C3%AA%C2%AC%C3%9A%C2%99%03%C3%9E%C2%9D%C2%B2U%7DR%C3%ABLE%C2%B9R%40%C2%A0z%C2%A7Fp%C2%8F%3A%C2%9F%C3%BC%C3%8B%C2%86%C3%AE%C2%ADE0%1A%C3%80%26%C3%95S%C3%AAH%C2%B0%C2%95C%C3%90Q%C3%B5%C2%AE%C3%99%15%C2%AA~WO%C3%A7T%C3%B8%C2%87%C3%A0u%00%C2%BB%C2%96l%17%C2%82%C3%AD%C2%97%C3%BAL%C3%BDPU%C3%99%C2%B4z2%0F%3C%12%3C%08A%C3%9F%C3%8C%06%C3%96%C2%A2%C3%B9RV%2F%C2%A9%5B%C2%8A%C3%80UJ*%40%2F%C3%B0%C2%B8%C2%A0%C2%A9F%C2%80)%C2%A0L6R%26%C2%80%C2%9F%0D%C2%B5c%60%C3%AB%0F%C3%B7%1Ae%C2%A0%5E%C2%96%C2%8DT%10%5B%C2%BE%1B%C3%98%06%2C%03o%C2%AAFB%C3%93%C3%B2%1B%C3%AA%C2%B4%C2%96%C2%A3%C3%8A%0Dl%C2%95%00%00%00%00IEND%C2%AEB%60%C2%82";

var parent2null = addObj.add("iconbutton", undefined, File.decode(parent2null_imgString), {
    name: "parent2null",
    style: "toolbutton"
});
parent2null.helpTip = "Parent selected objects to a Null layer";
parent2null.alignment = ["left", "top"];
parent2null.preferredSize.height = 24;
parent2null.preferredSize.width = 24;

/// INCLUDES

#include _scripts/rectangleWizard.jsx;

#include _scripts/elementsDialog.jsx;

#include _scripts/organizeProjectAssets.jsx;

#include _scripts/projectCleanup.jsx;

#include _scripts/moveAnchorPoint.jsx;

/// INCLUDES END


(function() {
    if (!checkSecurityPrefSet()) {
        return false;
    } else {
        showWindow(win);
    }
})();

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


function savePseudoEffect(pseudoEffectData) {
    var pseudoEffect,
        ffxFile,
        writeFile = function(pathToFile, content, encoding) {
            var fileObject = new File(pathToFile);
            fileObject.encoding = encoding || "utf-8";
            fileObject.open("w");
            fileObject.write(content);
            fileObject.close();
            return fileObject;
        },
        makePseudoEffectLive = function(ffxFile) {
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

// create pimped version of the shape layer

function addRoundedShape() {
    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;
    var allLayers = comp.layers;
    var zoneControl = {
        name: "mojo shape controls",
        matchName: "Pseudo/495623",
        binary: "RIFX\x00\x00\x1A\u00B6FaFXhead\x00\x00\x00\x10\x00\x00\x00\x03\x00\x00\x00^\x00\x00\x00\x04\x01\t\x00\x00LIST\x00\x00\x1A\u0092bescbeso\x00\x00\x008\x00\x00\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\u0080\x00\x00\x02\x00\x00\x00\x00\x00\x04\x00\x01\x00\x01\x06\u009A\x03\u00D4?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FFLIST\x00\x00\x00\u00ACtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x02LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE Effect Parade\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/495623\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdsn\x00\x00\x00\x1CUtf8\x00\x00\x00\x13mojo shape controls\x00LIST\x00\x00\x00dtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x01LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE End of path sentinel\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x19\x02sspcfnam\x00\x00\x00\bUtf8\x00\x00\x00\x00LIST\x00\x00\thparTparn\x00\x00\x00\x04\x00\x00\x00\x0Btdmn\x00\x00\x00(Pseudo/495623-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00BF\x00\x00\u009C\u0094\u00AF\u00D3\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x0F\x00\x00\x00\x00\x00\x00\x00\u00D8b\u00F5\u00F1tdmn\x00\x00\x00(Pseudo/495623-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x05Color\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\x00\x00\u00FF\u00FF\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00BF\x00\x00\u009C\u0094\u00AF\u00D3\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x0F\x00\x00\x00\x00\x00\x00\x00\u00D8b\u00F5\u00F1tdmn\x00\x00\x00(Pseudo/495623-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x07ANCHOR POINT\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x05\x00\t\x00\x05\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00BF\x00\x00\u009C\u0094\u00AF\u00D3\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x0F\x00\x00\x00\x00\x00\x00\x00\u00D8b\u00F5\u00F1pdnm\x00\x00\x00lUtf8\x00\x00\x00dtop_left|top_center|top_right|center_left|center|center_right|bottom_left|bottom_center|bottom_righttdmn\x00\x00\x00(Pseudo/495623-0003\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04FIT2COMP\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00BF\x00\x00\u009C\u0094\u00AF\u00D3\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x0F\x00\x00\x00\x00\x00\x00\x00\u00D8b\u00F5\u00F1pdnm\x00\x00\x00\bUtf8\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/495623-0004\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04SQUARE\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00BF\x00\x00\u009C\u0094\u00AF\u00D3\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x0F\x00\x00\x00\x00\x00\x00\x00\u00D8b\u00F5\u00F1pdnm\x00\x00\x00\bUtf8\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/495623-0005\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nWIDTH\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00E\x00\x00\x00\x00\x00\x00\x00E\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00D8b\u00F5\u00F1tdmn\x00\x00\x00(Pseudo/495623-0006\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nHEIGHT\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00E\x00\x00\x00\x00\x00\x00\x00E\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00D8b\u00F5\u00F1tdmn\x00\x00\x00(Pseudo/495623-0007\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nROUNDED CORNERS\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00B\u00C8\x00\x00\x00\x00\x00\x00B\u00C8\x00\x00\x00\x00\x00\x00\x00\x01\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00D8b\u00F5\u00F1tdmn\x00\x00\x00(Pseudo/495623-0008\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\rmanuel-moellmann.de\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/495623-0009\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x0E\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Effect Built In Params\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\t\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x0F^tdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x1CUtf8\x00\x00\x00\x13mojo shape controls\x00tdmn\x00\x00\x00(Pseudo/495623-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00ECtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x03tdsn\x00\x00\x00\bUtf8\x00\x00\x00\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x05\u00C0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdpi\x00\x00\x00\x04\x00\x00T\u0094tdps\x00\x00\x00\x04\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/495623-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x01\x12tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0EUtf8\x00\x00\x00\x05Color\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x04\x00\x07\x00\x01\x00\x02\u00FF\u00FF\x00\x00\u0080\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00`@o\u00E0\x00\x00\x00\x00\x00@o\u00E0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/495623-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00E0tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x14Utf8\x00\x00\x00\fANCHOR POINTtdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(@\x14\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/495623-0003\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DCtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x10Utf8\x00\x00\x00\bFIT2COMPtdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x04\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/495623-0004\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0EUtf8\x00\x00\x00\x06SQUAREtdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x04\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/495623-0005\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00FAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0EUtf8\x00\x00\x00\x05WIDTH\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\u00FF\u00FF\x00\u00FF\x00\x00\u0080\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\b\t\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@\u00A0\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/495623-0006\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00FAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0EUtf8\x00\x00\x00\x06HEIGHTtdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\u00FF\u00FF\x00\u00FF\x00\x00\u0080\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\b\t\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@\u00A0\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/495623-0007\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x01\x04tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x18Utf8\x00\x00\x00\x0FROUNDED CORNERS\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\u00FF\u00FF\x00\u00FF\x00\x00\u0080\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\b\t\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/495623-0008\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00E8tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x1CUtf8\x00\x00\x00\x13manuel-moellmann.de\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x04\x00\x00\u0080\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\b\t\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x05\u00C0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/495623-0009\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00E8tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x1CUtf8\x00\x00\x00\x13mojo shape controls\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x04\x00\x00\u0080\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\b\t\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x05\u00C0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Effect Built In Params\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x036tdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x1CUtf8\x00\x00\x00\x13Compositing Options\x00tdmn\x00\x00\x00(ADBE Effect Mask Parade\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00Vtdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0EUtf8\x00\x00\x00\x06-_0_/-tdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Effect Mask Opacity\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00FAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0EUtf8\x00\x00\x00\x06-_0_/-tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\b\t\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(@Y\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Force CPU GPU\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0EUtf8\x00\x00\x00\x06-_0_/-tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x02\x00\x04\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pgui\x00\x00\x00\x10\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00"
    };

    app.beginUndoGroup("Add zone");

    index = 1;
    for (var i = 1; i <= allLayers.length; i++) {
        if (allLayers[i].name.search("mojo shape") > 0)
            index++;
    }
    var zoneLayer = comp.layers.addShape();
    zoneLayer.name = "mojo shape " + index;
    //zoneLayer.name = "[ zone " + index + " ]";
    var zoneGroup = zoneLayer.property("Contents").addProperty("ADBE Vector Group");
    zoneGroup.name = "zone shape";
    if (app.preferences.havePref("Label Preference Indices Section 5", "Solid Label Index", PREFType.PREF_Type_MACHINE_INDEPENDENT) == 1) {
        var solidColor = app.preferences.getPrefAsLong("Label Preference Indices Section 5", "Solid Label Index", PREFType.PREF_Type_MACHINE_INDEPENDENT);
    } else if (app.preferences.havePref("Label Preference Indices Section 5", "Solid Label Index 2", PREFType.PREF_Type_MACHINE_INDEPENDENT) == 1) {
        solidColor = app.preferences.getPrefAsLong("Label Preference Indices Section 5", "Solid Label Index 2", PREFType.PREF_Type_MACHINE_INDEPENDENT);
    } else {
        solidColor = 111;
    }
    zoneLayer.label = solidColor;

    applyPseudoEffect(zoneControl, zoneLayer.property("ADBE Effect Parade"));
    zoneLayer.effect("").name = "mojo shape controls";

    var zoneShape = zoneGroup.property("Contents").addProperty("ADBE Vector Shape - Rect");
    zoneShape.property("Size").setValue([comp.width, comp.height]);
    zoneLayer.effect("mojo shape controls").property("WIDTH").setValue(comp.width);
    zoneLayer.effect("mojo shape controls").property("HEIGHT").setValue(comp.height);
    zoneShape.property("Size").expression = 'f = effect("mojo shape controls")("FIT2COMP").value;\
s = effect("mojo shape controls")("SQUARE").value;\
w = effect("mojo shape controls")("WIDTH").value;\
h = effect("mojo shape controls")("HEIGHT").value;\
if (s==1)\
h=w;\
if ( f==1 ) {\
[thisComp.width,thisComp.height]\
} else {\
[w,h]\
}';
    zoneShape.property("Roundness").expression = 'm = Math.min(content("zone shape").content("Rectangle Path 1").size[0],content("zone shape").content("Rectangle Path 1").size[1])/2;\
p = effect("mojo shape controls")("ROUNDED CORNERS");\
(p/100) * m'
    zoneLayer.transform.position.expression = 'f = effect("mojo shape controls")("FIT2COMP").value\
if ( f==1 && !thisLayer.hasParent) {\
[thisComp.width/2,thisComp.height/2]\
} else {\
value\
}';
    zoneLayer.transform.anchorPoint.expression = 'option = effect("mojo shape controls")("ANCHOR POINT");\
  var s = sourceRectAtTime((outPoint - inPoint) / 2);\
\
  const components = {\
    1: Top_left = [s.left, s.top],\
    2: Top_center = [s.left, s.top] + [s.width / 2, 0],\
    3: Top_right = [s.left, s.top] + [s.width, 0],\
    4: Center_left = [s.left, s.top] + [0, s.height / 2],\
    5: Center = [s.left, s.top] + [s.width, s.height] / 2,\
    6: Center_right = [s.left, s.top] + [s.width, s.height / 2],\
    7: Bottom_left = [s.left, s.top] + [0, s.height],\
    8: Bottom_center = [s.left, s.top] + [s.width / 2, s.height],\
    9: Bottom_right = [s.left, s.top] + [s.width, s.height],\
  };\
\
  components[option];';
    var zoneFill = zoneGroup.property("Contents").addProperty("ADBE Vector Graphic - Fill");
    zoneFill.property("Color").expression = 'effect("mojo shape controls")("Color").value';

    if (layers.length > 0) {
        var newIn;
        var minIn = zoneLayer.outPoint;
        var newOut;
        var maxOut = 0;
        var topIndx = layers.length;
        var newIndx = layers.length;
        zoneLayer.moveToEnd();

        for (var i = 0; i < layers.length; i++) {
            newIn = layers[i].inPoint;
            newOut = layers[i].outPoint;
            newIndx = layers[i].index;
            if (newIn > newOut) { // Check for reversed layers
                var flip = newOut;
                newOut = newIn;
                newIn = flip;
            }
            if (newIn < minIn) {
                minIn = newIn;
            }
            if (newOut > maxOut) {
                maxOut = newOut;
            }
            if (newIndx < zoneLayer.index) {
                zoneLayer.moveBefore(layers[i]);
            }
        }
        zoneLayer.inPoint = minIn;
        zoneLayer.outPoint = maxOut;
    }

    app.endUndoGroup();

    // applyPseudoEffect() via NT Productions: https://youtu.be/FOazhcjKFYU
    // and RenderTom: https://bitbucket.org/rendertom/_snippets_/src/c52a28cb7bff72f1ca8a6f4bf3824dc62a342f8a/After%20Effects/Apply%20Pseudo%20Effect%20as%20Animation%20Preset.jsx
    function applyPseudoEffect(pseudoEffectData, effectsProp) {
        var pseudoEffect,
            ffxFile,
            writeFile = function(pathToFile, content, encoding) {
                var fileObject = new File(pathToFile);
                fileObject.encoding = encoding || "utf-8";
                fileObject.open("w");
                fileObject.write(content);
                fileObject.close();
                return fileObject;
            },
            makePseudoEffectLive = function(ffxFile) {
                var tempComp, tempLayer;
                tempComp = app.project.items.addComp("tempComp", 100, 100, 1, 1, 24);
                tempLayer = tempComp.layers.addShape();
                tempLayer.applyPreset(ffxFile);
                tempComp.remove();
            };

        if (!effectsProp.canAddProperty(pseudoEffectData.matchName)) {
            var jssFolder = new Folder(Folder.myDocuments.fsName + "/Adobe/After Effects 20" + app.buildName.substr(0, 2) + "/User Presets/mojo");
            if (!jssFolder.exists)
                jssFolder.create();
            ffxFile = writeFile(jssFolder.fsName + "/" + pseudoEffectData.name + ".ffx", pseudoEffectData.binary, "BINARY");
            makePseudoEffectLive(ffxFile);
        }

        pseudoEffect = effectsProp.addProperty(pseudoEffectData.matchName);
        return pseudoEffect;
    }
};

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



// Function to copy a layer from a source composition to the active composition
function copyLayerToActiveComp(sourceCompName, layerName) {
    // Get the active composition
    var activeComp = app.project.activeItem;

    // Check if the active item is a composition
    if (activeComp !== null && activeComp instanceof CompItem) {
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
                    copiedLayer.position.setValue([offsetX, offsetY]);
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
        alert("That name already exists exists. Please choose a different name.");
    } else {
        createComposition(1080, 1920, duration, 30, reelName, 1);
        createComposition(1080, 1080, duration, 30, squareName, 1);
        createComposition(1920, 1080, duration, 30, fullHDName, 1);
        // Alert to indicate successful creation
        //alert("Compositions created successfully as " + reelName + ", " + squareName + " and " + fullHDName);
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

    CompItem.prototype.dd_dynamicBbox_createBbox = function(_layer) {
        bboxProps = {
            "fill": {
                "color": [0.5, 0.5, 0.5, 1]
            },
            "stroke": {
                "width": 20,
                "color": [0.3, 0.3, 0.3, 1]
            },
            "addSpace": 50
        };

        //shape match names:
        var contentsName = "ADBE Root Vectors Group";
        var vectorGroupName = "ADBE Vector Group"; //a shape group
        var rectPathName = "ADBE Vector Shape - Rect"; //rectangle group
        var rectPathSizeName = "ADBE Vector Rect Size"; //rectangle size
        var strokeGroupName = "ADBE Vector Graphic - Stroke"; //stroke
        var strokeWidthName = "ADBE Vector Stroke Width"; //stroke width
        var strokeColorName = "ADBE Vector Stroke Color"; //stroke color
        var fillGroupName = "ADBE Vector Graphic - Fill"; //fill
        var fillColorName = "ADBE Vector Fill Color"; ////fill color

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

        var arr = [] //layers array (only text and/or shape layers)
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
                alert("Expressions removed from specified properties (Position, Scale, Opacity, Anchor Point, Rotation) of the selected layer.");
            } else {
                alert("Please select a layer.");
            }
        } else {
            alert("Please open a composition.");
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
    if (app.project.activeItem instanceof CompItem) {
        var comp = app.project.activeItem;

        // Check if a layer is selected
        if (comp.selectedLayers.length > 0) {
            var pseudoEffectData = {
                name: "__COLOR_FILL",
                matchName: "Pseudo/177941",
                binary: "RIFX\x00\x00*\u008AFaFXhead\x00\x00\x00\x10\x00\x00\x00\x03\x00\x00\x00^\x00\x00\x00\x04\x01\t\x00\x00LIST\x00\x00*fbescbeso\x00\x00\x008\x00\x00\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\u0080\x00\x00\x02\x00\x00\x00\x00\x00\x00\x06\u009A\x03\u00D4\x06\u009A\x03\u00D4?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FFLIST\x00\x00\x00\u00ACtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x02LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE Effect Parade\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/177941\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdsn\x00\x00\x00\x12Utf8\x00\x00\x00\nCOLOR_FILLLIST\x00\x00\x00\u00ACtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x02LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE Effect Parade\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\x00\x00\x00\x01tdmn\x00\x00\x00(ADBE Fill\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdsn\x00\x00\x00\x14Utf8\x00\x00\x00\x0B_color_fill\x00LIST\x00\x00\x00dtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x01LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE End of path sentinel\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x13\x04sspcfnam\x00\x00\x00\bUtf8\x00\x00\x00\x00LIST\x00\x00\x03\u00E8parTparn\x00\x00\x00\x04\x00\x00\x00\x04tdmn\x00\x00\x00(Pseudo/177941-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00BF\x00\x00\u009C\u0094\u00AF\u00D3\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x0F\x00\x00\x00\x00\x00\x00\x00\u00D8b\u00F5\u00F1tdmn\x00\x00\x00(Pseudo/177941-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x07pick your color\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x13\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00BF\x00\x00\u009C\u0094\u00AF\u00D3\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x0F\x00\x00\x00\x00\x00\x00\x00\u00D8b\u00F5\u00F1pdnm\x00\x00\x00\u00A0Utf8\x00\x00\x00\u0098ACCENT|BG|(-|TITLE|SUBTEXT|(-|CALL2ACTION|CALL2ACTION_LINK|(-|CALL2ACTION_CURSOR|CALL2ACTION_CURSOR_STROKE|(-|LOGO_BG|(-|SOURCE|SOURCE_BG|(-|WHITE|BLACKtdmn\x00\x00\x00(Pseudo/177941-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x05preview\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00B2\u008E;\u00FF\u00B2\u008E;\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00BF\x00\x00\u009C\u0094\u00AF\u00D3\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x0F\x00\x00\x00\x00\x00\x00\x00\u00D8b\u00F5\u00F1tdmn\x00\x00\x00(ADBE Effect Built In Params\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\t\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x0E\u00E0tdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x12Utf8\x00\x00\x00\nCOLOR_FILLtdmn\x00\x00\x00(Pseudo/177941-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00ECtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x03tdsn\x00\x00\x00\bUtf8\x00\x00\x00\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00C0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdpi\x00\x00\x00\x04\x00\x00TRtdps\x00\x00\x00\x04\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/177941-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00E4tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x18Utf8\x00\x00\x00\x0Fpick your color\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/177941-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\b\u00A0tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x10Utf8\x00\x00\x00\x07preview\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x04\x00\x07\x00\x01\x00\x02\u00FF\u00FF\x00\x00\u0080\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00C0\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00cdat\x00\x00\x00`@o\u00E0\x00\x00\x00\x00\x00@f@\x00\x00\x00\x00\x00@a\u00C0\x00\x00\x00\x00\x00@M\u0080\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00Utf8\x00\x00\x07\u0084option = effect(\"COLOR_FILL\")(\"pick your color\");\r\n\r\nmyData = footage(\"input_template.json\").sourceData;\r\ndarkmode = myData.Comp.darkmode;\r\n\r\n\r\nconst components = {\r\n  1: accent = 1 == darkmode ? hexToRgb(myData.Comp.accent.color_dark) : hexToRgb(myData.Comp.accent.color),\r\n  2: bg = 1 == darkmode ? hexToRgb(myData.Comp.bg.color_dark) : hexToRgb(myData.Comp.bg.color),\r\n  4: title = 1 == darkmode ? hexToRgb(myData.Comp.title.color_dark) : hexToRgb(myData.Comp.title.color),\r\n  5: subtext = 1 == darkmode ? hexToRgb(myData.Comp.subtext.color_dark) : hexToRgb(myData.Comp.subtext.color),\r\n  7: call2action = 1 == darkmode ? hexToRgb((!!myData.Comp.call2action.color_dark ? myData.Comp.call2action.color_dark : myData.Comp.title.color_dark)) : hexToRgb((!!myData.Comp.call2action.color ? myData.Comp.call2action.color : myData.Comp.title.color)),\r\n  8: call2action_link = 1 == darkmode ? hexToRgb(myData.Comp.call2action_link.color_dark) : hexToRgb(myData.Comp.call2action_link.color),\r\n  10: call2action_cursor = 1 == darkmode ? hexToRgb(myData.Comp.call2action.cursor_color_dark) : hexToRgb(myData.Comp.call2action.cursor_color),\r\n  11: call2action_cursor_stroke = 1 == darkmode ? hexToRgb(myData.Comp.call2action.cursor_stroke_dark) : hexToRgb(myData.Comp.call2action.cursor_stroke),\r\n  14: logo_bg = hexToRgb(myData.Comp.logo_bg_color),\r\n\t\r\n  16: source = 1 == darkmode ? hexToRgb((!!myData.Comp.source.color_dark ? myData.Comp.source.color_dark : myData.Comp.title.color_dark)) : hexToRgb((!!myData.Comp.source.color ? myData.Comp.source.color : myData.Comp.title.color)),\r\n  17: source_bg = 1 == darkmode ? hexToRgb((!!myData.Comp.source.bg_color_dark ? myData.Comp.source.bg_color_dark : myData.Comp.accent.color_dark)) : hexToRgb((!!myData.Comp.source.bg_color ? myData.Comp.source.bg_color : myData.Comp.accent.color)),\r\n  19: white = hexToRgb(\"ffffff\"),\r\n  20: black = hexToRgb(\"000000\")\r\n};\r\n\r\ncomponents[option];tdmn\x00\x00\x00(ADBE Effect Built In Params\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x036tdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x1CUtf8\x00\x00\x00\x13Compositing Options\x00tdmn\x00\x00\x00(ADBE Effect Mask Parade\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00Vtdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0EUtf8\x00\x00\x00\x06-_0_/-tdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Effect Mask Opacity\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00FAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0EUtf8\x00\x00\x00\x06-_0_/-tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\b\t\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(@Y\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Force CPU GPU\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0EUtf8\x00\x00\x00\x06-_0_/-tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x02\x00\x04\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pgui\x00\x00\x00\x10\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x15\x04sspcfnam\x00\x00\x00\fUtf8\x00\x00\x00\x04FillLIST\x00\x00\x07lparTparn\x00\x00\x00\x04\x00\x00\x00\ttdmn\x00\x00\x00(ADBE Fill-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00BF\x00\x00\u009C\u0094\u00AF\u00D3\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x0F\x00\x00\x00\x00\x00\x00\x00\u00D8b\u00F5\u00F1tdmn\x00\x00\x00(ADBE Fill-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\fFill Mask\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00B\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00BF\x00\x00\u009C\u0094\u00AF\u00D3\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x0F\x00\x00\x00\x00\x00\x00\x00\u00D8b\u00F5\u00F1tdmn\x00\x00\x00(ADBE Fill-0007\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00BF\x00\x00\u009C\u0094\u00AF\u00D3\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x0F\x00\x00\x00\x00\x00\x00\x00\u00D8b\u00F5\u00F1pdnm\x00\x00\x00\x12Utf8\x00\x00\x00\tAll Masks\x00tdmn\x00\x00\x00(ADBE Fill-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x05Color\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00B2\u008E;\u00FF\u00FF\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00BF\x00\x00\u009C\u0094\u00AF\u00D3\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x0F\x00\x00\x00\x00\x00\x00\x00\u00D8b\u00F5\u00F1tdmn\x00\x00\x00(ADBE Fill-0006\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00BF\x00\x00\u009C\u0094\u00AF\u00D3\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x0F\x00\x00\x00\x00\x00\x00\x00\u00D8b\u00F5\u00F1pdnm\x00\x00\x00\x0EUtf8\x00\x00\x00\x06Inverttdmn\x00\x00\x00(ADBE Fill-0003\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00 \x00\x00\x00\x00\x00\x00\x00\x02Horizontal Feather\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00 \x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x03\u00E7\x00\x00\x00\x00\x00\x00\x002\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00tdmn\x00\x00\x00(ADBE Fill-0004\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00 \x00\x00\x00\x00\x00\x00\x00\x02Vertical Feather\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00 \x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x03\u00E7\x00\x00\x00\x00\x00\x00\x002\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00tdmn\x00\x00\x00(ADBE Fill-0005\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02Opacity\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x01\x00\x00\x00\x01\x00\x01tdmn\x00\x00\x00(ADBE Effect Built In Params\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\t\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\rXtdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x14Utf8\x00\x00\x00\x0B_color_fill\x00tdmn\x00\x00\x00(ADBE Fill-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00ECtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x03tdsn\x00\x00\x00\bUtf8\x00\x00\x00\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00C0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdpi\x00\x00\x00\x04\x00\x00TRtdps\x00\x00\x00\x04\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Fill-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00EAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x12Utf8\x00\x00\x00\tFill Mask\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00C0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdli\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE Fill-0007\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DEtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x12Utf8\x00\x00\x00\tAll Masks\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x04\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Fill-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x01:tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0EUtf8\x00\x00\x00\x05Color\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x04\x00\x07\x00\x01\x00\x02\u00FF\u00FF\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00C0\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00cdat\x00\x00\x00`@o\u00E0\x00\x00\x00\x00\x00@o\u00E0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00Utf8\x00\x00\x00\x1Feffect(\"COLOR_FILL\")(\"preview\")\x00tdmn\x00\x00\x00(ADBE Fill-0006\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0EUtf8\x00\x00\x00\x06Inverttdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x04\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Fill-0003\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x01\x06tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x1AUtf8\x00\x00\x00\x12Horizontal Feathertdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x06\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@I\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Fill-0004\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x01\x04tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x18Utf8\x00\x00\x00\x10Vertical Feathertdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x06\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@I\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Fill-0005\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00FCtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x10Utf8\x00\x00\x00\x07Opacity\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x06\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b?\u00F0\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Effect Built In Params\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x036tdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x1CUtf8\x00\x00\x00\x13Compositing Options\x00tdmn\x00\x00\x00(ADBE Effect Mask Parade\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00Vtdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0EUtf8\x00\x00\x00\x06-_0_/-tdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Effect Mask Opacity\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00FAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0EUtf8\x00\x00\x00\x06-_0_/-tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\b\t\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(@Y\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Force CPU GPU\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0EUtf8\x00\x00\x00\x06-_0_/-tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x02\x00\x04\x00\x00\u0080\x00?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pgui\x00\x00\x00\x10\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00"
            }
            var pseudoEffect = savePseudoEffect(pseudoEffectData);
            var layer = app.project.activeItem.layer(1);
            layer.applyPreset(File(Folder.myDocuments.fsName + "/Adobe/After Effects 20" + app.buildName.substr(0, 2) + "/User Presets/mojo/__COLOR_FILL.ffx"));
        } else {
            alert("Please select a layer.");
        }
    } else {
        alert("Please open a composition.");
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
            acceptButton.onClick = function() {
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
            cancelButton.onClick = function() {
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
        alert("Can't find comp '" + compName + "'");
    }
}


function changeJSONTEXT(inputText, jsonKey) {
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
        app.purge(PurgeTarget.IMAGE_CACHES);
    }
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
                alert("JSON DATA UPDATED!");
            }
        } else {
            alert("debug_layer wasnt found")
        };
    }
}

// Function to revert the JSON file
function revertJson() {
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
            app.purge(PurgeTarget.IMAGE_CACHES);
            openCompInViewer("__SETTINGS", "SETTINGS");
            alert("JSON file reverted to default!");
        }
    } else {
        alert("JSON file doesnt exist");
    }
}

/////////

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
}

// Function to replace a composition within a layer
function replaceComposition(layer, suffix, newName) {
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

    return layer;
}

// Function to find an item by name
function findItemByName(name) {
    for (var i = 1; i <= app.project.rootFolder.items.length; i++) {
        if (app.project.rootFolder.items[i].name === name) {
            return app.project.rootFolder.items[i];
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
    } catch (err) {alert(err.line.toString() + "\r" + err.toString());
}
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


///



btn_createComps.onClick = function() {
    var compIndex = findCompIndex("__SETTINGS");
    if (compIndex) {
        var duration = 15; // Set the duration of the composition in seconds
        var type = "comp_";

        function askForName() {
            var name = prompt("Please enter a name for the template (without spaces, special characters, capital letters, or dashes):");
            if (name) {
                var isValid = /^[a-z0-9_]+$/.test(name);
                if (isValid) {
                    var newName = type + name;
                    createCompSet(duration, name, type);
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
                            // Create the new project file path
                            var newProjectPath = projectPath + "/" + newProjectName + ".aep";
                            var newProjectFile = new File(newProjectPath);
                            // Save the project with the new name
                            app.project.save(newProjectFile);

                            // Alert the user that the project has been saved
                            alert("Project saved with a new name: " + newProjectName);
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
            } else {
                alert("No input provided. Please enter a valid name.");
            }
        }
        var result = askForName();
    }
};


btn_createIMGComps.onClick = function() {
    var compIndex = findCompIndex("__SETTINGS");
    if (compIndex) {

        var duration = 1 / 30; // Set the duration of the composition in seconds
        var type = "post_";

        function askForName() {
            var name = prompt("Please enter a name for the template (without spaces, special characters, capital letters, or dashes):");
            if (name) {
                var isValid = /^[a-z0-9_]+$/.test(name);
                if (isValid) {
                    var newName = type + name;
                    createCompSet(duration, name, type);
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
                            // Create the new project file path
                            var newProjectPath = projectPath + "/" + newProjectName + ".aep";
                            var newProjectFile = new File(newProjectPath);
                            // Save the project with the new name
                            app.project.save(newProjectFile);

                            // Alert the user that the project has been saved
                            alert("Project saved with a new name: " + newProjectName);
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
            } else {
                alert("No input provided. Please enter a valid name.");
            }
        }
        var result = askForName();
    }
};

colorFill.onClick = function() {
    setColorFill();
};

scale2fill.onClick = function() {
    scaleToFillComp();
};

btn_addElement.onClick = function() {
    //var selectedIndex = elementsDropDown.selection.index;
    //var result = elementsDropDown_result[selectedIndex];
    //var sourceCompName = "_ELEMENTS";
    //app.executeCommand(2004); // “Deselect All”
    //copyLayerToActiveComp(sourceCompName, result);
    var compIndex = findCompIndex("_ELEMENTS");
    if (compIndex) {
        elementsDialog();
    };
};

btn_addGallery.onClick = function() {
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

fitView.onClick = function() {
    (function() {
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

delExp.onClick = function() {
    removeSpecificExpressions();
};

openProjectInExplorer.onClick = function() {
    openProjectFolder();
};

openFootageFolder.onClick = function() {
    openSubfolderInProject("(footage)/Footage");
};

openJSONFolder.onClick = function() {
    openSubfolderInProject("(footage)/Footage/json");
};

btn_import.onClick = function() {
    importAndCopyFile();
};

btn_organize.onClick = function() {

    if (app.project.file != null) {
        progressBarPopup();
    } else {
        alert("Please open a project or save the current project first.");
    }
};

btn_cleanup.onClick = function() {
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
            button1.onClick = function() {
                compCleaner.close();
                clean(checkbox1.value, checkbox2.value, checkbox3.value, checkbox4.value, checkbox5.value, radiobutton2.value);
            };
            compCleaner.layout.resize();
            compCleaner.onResizing = compCleaner.onResize = function() {
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



btn_openAndSelect.onClick = function() {
    openCompInViewer("__SETTINGS", "debug_layer");
    //app.executeCommand(2163);//EffectControls
    //app.executeCommand(3734);//EffectControls
};

btn_title.onClick = function() {
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

btn_subtext.onClick = function() {
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

btn_source.onClick = function() {
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

btn_c2a.onClick = function() {
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

btn_c2alink.onClick = function() {
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


btn_debug_colors.onClick = function() {
    modifyJSONdata();
};

btn_revert_json.onClick = function() {
    revertJson();
};

btn_reload_json.onClick = function() {
    var myItem = getItem("input_template.json");
    if (myItem && myItem.mainSource) {
        myItem.mainSource.reload();
        app.purge(PurgeTarget.IMAGE_CACHES);
    } else {
        alert("JSON file doesnt exist");
    }
};


textLayer.onClick = function() {
    var comp = app.project.activeItem;
    // Check if a composition is active
    if (comp != null && comp instanceof CompItem) {
        app.executeCommand(2836); //TEXT
    } else {
        alert("No active composition.");
    }
};
solidLayer.onClick = function() {
    var comp = app.project.activeItem;
    // Check if a composition is active
    if (comp != null && comp instanceof CompItem) {
        app.executeCommand(2038); //SOLID
    } else {
        alert("No active composition.");
    }
};
shapeLayer.onClick = function() {
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
adjustmentsLayer.onClick = function() {
    var comp = app.project.activeItem;
    // Check if a composition is active
    if (comp != null && comp instanceof CompItem) {
        app.executeCommand(2279); //ADJUSTMENT
    } else {
        alert("No active composition.");
    }
};
nullLayer.onClick = function() {
    var comp = app.project.activeItem;
    // Check if a composition is active
    if (comp != null && comp instanceof CompItem) {
        app.executeCommand(2767); //NULL
    } else {
        alert("No active composition.");
    }
};
parent2null.onClick = function() {
    app.beginUndoGroup("Create");
    CreateParentNull();
    app.endUndoGroup();
};

function GoodBoyNinjaColorPicker(startValue) {
    if (!startValue || startValue.length != 3) {
        startValue = [1, 1, 1]; // default value
    }

    var comp = app.project.activeItem;
    if (!comp || !(comp instanceof CompItem)) {
        alert("No comp is selected");
        return null;
    }
    //Store the layers which are selected
    var selectedLayers = []
    for (var i = 1; i <= comp.numLayers; i++) {
        if (comp.layer(i).selected) selectedLayers.push(i)
    }

    // add a temp null;
    var newNull = comp.layers.addNull();
    var newColorControl = newNull.property("ADBE Effect Parade").addProperty("ADBE Color Control");
    var theColorProp = newColorControl.property("ADBE Color Control-0001");

    // shy and turn eyeball off
    var origShyCondition = comp.hideShyLayers;
    if (origShyCondition == false) comp.hideShyLayers = true;
    newNull.shy = true;
    newNull.enabled = false;

    // set the value given by the function arguments
    theColorProp.setValue(startValue);

    // prepare to execute
    var editValueID = 2240
    theColorProp.selected = true;
    app.executeCommand(editValueID);

    // harvest the result
    var result = rgbToHex(theColorProp.value);

    // remove the null
    if (newNull) {
        //newNull.remove();
    }

    // get shy condition back to original
    comp.hideShyLayers = origShyCondition;

    // restore Layer Selection
    for (var i = 0; i < selectedLayers.length; i++) {
        comp.layer(selectedLayers[i]).selected = true;
    }

    // if the user click cancel, the function will return the start value but as RGBA. In that case, return null
    var startValueInRgba = [startValue[0], startValue[1], startValue[2], 1];
    return (result.toString() == startValueInRgba.toString()) ? null : result;
}

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

purgeAll.onClick = function() {
    //app.executeCommand(10200);//AllMemoryDiskCache
    app.purge(PurgeTarget.ALL_CACHES);
    //result = alert(GoodBoyNinjaColorPicker([1, 1, 1]));
    //colorPicker();
    //getThingName();
};