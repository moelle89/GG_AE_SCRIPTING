// HELPER PANEL FOR ADOBE AFTER EFFECTS TO WORK WITH THE GG TEMPLATE SYSTEM

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

var addel_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00l%00%00%00%1E%08%06%00%00%00%C3%89%C2%8C%C3%BB%07%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%02%C3%9AIDATh%C2%81%C3%AD%C2%98%3F%C2%8E%131%14%C2%87%C2%BF%C2%B0%08%C2%A4%C3%95R%C2%A4%C2%A2%40B(%5C%00%11z%40%1A%C2%8E0%5BQ%20%C2%8Ap%C2%84p%C2%84%C2%A4%C3%9E%C2%8A%C2%91%C2%B8%40RQo%24%C2%A0O%C2%848%40%22Jh%12%C2%89%0Ev%C3%81%14~%C2%A38%C3%8Ex%C3%86N4%C2%BB%19%C3%A1OzJl%C2%8F%C2%9F%3D%C3%B3%C2%B3%C2%9F%C3%BF%C2%B4%C2%94RD%C2%9A%C3%83%C2%8D%C3%AB%C3%AE%40%24%C2%8C(X%C3%83%C2%88%C2%825%C2%8C(X%C3%83%C2%88%C2%825%C2%8C(X%C3%83%C2%88%C2%825%C2%8C*%C3%81%C2%8E%C2%81%C3%B7%C3%80%2F%40y%C3%9A'%C3%A0%C2%81%C3%83%C3%9F%C3%91%C2%BE%1D%C3%BE%C3%9F%C2%A9%12l%08%C2%BC%06n%05%C3%B8%7C%0A%7C%00ZF%C3%9E%090%02.%C3%84gdGZ%157%1D%3F%C2%81%3B%3B%C3%BA~%0C%7C%01%C3%AE%C2%A3%05%7C%24%C3%B9%17%C2%B8%07%C3%809%C3%90%06%5E%00%2B%C2%ABl%04t%C2%80S%20%15%1B%C2%A3%07%40_%C3%9263)_8%C3%9A%C3%AA%C2%94%C3%B4%C3%BF%C2%AD%C3%B8m%3B%C3%8A3%C3%B1%3D5%C3%BAQ%C3%84%14%C2%98%C2%88%C2%BF%C2%9E%C3%B8t%C2%B57.%C3%A9%C2%8FF)Uf%C3%BB%C3%B0L)uO)%C3%B5%C2%BD%C2%A0%C3%8C%C3%95%C3%9EH%C3%8A%C3%BBV~W%C3%B2%C3%8F%25%3D%C2%90%C3%B4%C3%80J%C3%8F%C2%95RS%C2%B1%C2%B9%C3%A4-%C2%A5~%C3%99%7B%C3%B6%C2%A5m%3B%C3%9F%C2%A7%C3%AER%C2%AC%5DP%C2%96J%C3%99%C2%A8%C2%A2%C2%9D%C2%B4%C3%84%C3%87%C2%86%C3%95%C2%BD%C3%A9x%0E%C3%9C%0Dx%3E%1Fa%C2%89%C2%95%C3%9F%C2%93%C3%9F%C2%89G%C3%BD'b%0F%C3%91%C2%A3%C2%B6%0D%0C%02%C3%BA%C2%B0%0B%2B%C3%96%7D4%C3%A9Q%3C%C2%BBm%C3%86%C3%A8hP%C3%A4c%C2%83%C2%BA%05%C2%BB%19%C3%B8%C3%BC%18%C3%BD%C2%82%09%C2%9B%C3%A1*A%7F%C2%94%2C%C3%90%C3%9F%10%C3%BD!%12%C2%A0%1BX7%C2%84%C2%8C%C3%AD%C2%90%C3%9C%C2%916%C2%AB%C3%83%C3%9C%1A%7B%19%C3%98%C3%A2%10%C2%B7%C3%B5%C3%B9%2C%C3%8A%3F%40.%C3%9E%04%C2%8F%17*%C2%A1l%C2%BD*%C2%A3%C2%8F%5E%3Fm3%C3%97%C2%B6%C2%89%C2%A4%C3%8D%C3%88%C3%90%C3%83_%C2%ACT%C3%BAW%C3%B9%7C%C3%A8%0C%C2%B8%0A2%C3%B4%C3%8B%C2%A6%C3%A8%19%C2%92%0BW%15%0E%C3%ABb%C3%A6%C3%88%C2%B7%07O%C3%9Eos%C3%80%C2%9D%C2%B2%1D%C3%9E%13%60Y%C3%A0%C3%ABM%C2%81%C3%8F-%0EQ%C2%B0%C2%99XW%2CA%C2%87%C3%89%C3%90ph%C2%B3%C3%AB%C3%AC%C2%9C%C3%A0%16%C3%8D%24%03%C3%A6%C3%A8%C2%99%C2%96J%7By8%C2%B6%C3%BD%C3%99%3BJ%1F%C3%BF%C3%80a%0A%06%3A4t%C3%91%C3%A1%C2%A8%C3%83%C3%AEb%C3%B5%C3%84%C3%8F%C2%82%C3%BAg%C3%A8J%C3%9A0%C2%A3%C2%83%0Bo%C2%81l%C3%AA%16%C3%ACr%C3%87zc%C3%B4%C3%8E.5%C3%92%3EtY%C3%AF%08%C3%8D%C2%8D%C3%86U%1D%C3%963%C3%A0%C2%9D%C3%BC%0F%C3%99lxS%C2%B7%60%1F%C2%81%1F%C2%84m%C3%ADa%3D%23%12%C3%B4h%C3%B4%C2%9D%1D%09%C2%9B!h%C2%82%C3%BE%C2%88%C3%BB%7C%C2%BCsG%C3%BE%02%7D%7C0%C3%897F%C2%B5%C3%8D%C3%A6%C3%AB%C2%B8%C3%A9%C3%B8%0D%C3%9C%C3%B6%C3%B4%C3%91%C3%86%C2%BD%C3%B6%C3%98eE7%12!%C3%ABVQ%5B%1D%C2%87%C3%9F%C3%9C%C3%B7B%C2%9E1%C3%8FZE~%C3%8C%C2%BC%C2%B2w%C2%AA%C2%A6%C3%A2d%7DVpK%C3%A1%C3%83W%C2%A5T%C3%8B%C3%B0s%22'%C3%BC%C2%BFJ%C2%A9a%C3%95i%3E%C2%9A%C3%9B%C2%AAf%C3%981p%06%C2%BC%C3%84%C3%BF%02%C3%B83%C3%B0%0A%C3%B8VPv%04%C3%BC%C3%B1%1FN%11%C2%9B*%C3%81%22%07%C3%86!%C3%9EtDJ%C2%88%C2%825%C2%8C(X%C3%83%C2%88%C2%825%C2%8C(X%C3%83%C2%88%C2%825%C2%8C%7F%C3%ABYTc%C3%A1T%C3%8A%C2%9B%00%00%00%00IEND%C2%AEB%60%C2%82";

var btn_createComps_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%1C%00%00%00%14%08%06%00%00%00%C2%9E%5E%5D%C3%B9%00%00%00%09pHYs%00%00%0B%12%00%00%0B%12%01%C3%92%C3%9D~%C3%BC%00%00%01bIDATH%C2%89b%C3%BC%C3%BF%C3%BF%3F%03%C3%9D%00%03%03%03%00%00%00%C3%BF%C3%BFb%C2%A2%C2%ABm%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%AF%C2%85%0C%0C%0C%00%00%00%00%C3%BF%C3%BFb!A%C2%AD%01%03%03%C2%83%00%11%C3%AA.000%7C%C3%80*%C3%83%C3%80%C3%80%00%00%00%00%C3%BF%C3%BFb%00%C3%85!%11x%C3%81%7F%C3%A2%C3%81%C2%87%C3%BF%C3%BF%C3%BF%3B%601S%C3%A0%C3%BF%C3%BF%C3%BF%0C%00%00%00%00%C3%BF%C3%BF%22%C3%86%C2%B2%04%12%2C%C2%83%01%C2%90%C2%A50%C3%BD%0Ap%07%C3%BF%C3%BF%7F%00%00%00%00%C3%BF%C3%BF%22%26H%15H%08v%18%C3%A0g%60%60p%C2%80FC%3F%5C%C2%94%C2%81%C3%81%1E%00%00%00%C3%BF%C3%BF%C2%A2u%C2%A2%09%40%C3%A1100%00%00%00%00%C3%BF%C3%BF%C2%A2o*e%60%60%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%AF%C2%85%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%AF%C2%85%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%AF%C2%85%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%AF%C2%85%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%A5%C2%85%0F%18%18%186%C2%A0%C2%88000%00%00%00%00%C3%BF%C3%BF%22%26%C3%A3%C2%832.%C2%A9%60%03%C3%96%C2%8C%C3%BF%C3%BF%C3%BF%01%00%00%00%00%C3%BF%C3%BF%22%C2%B6hk%C2%80%C2%96%1E%C3%84%C2%80%0B%C3%BF%C3%BF%C3%BF7%C3%80Z%C2%B4%C3%BD%C3%BF%C3%8F%00%00%00%00%C3%BF%C3%BF%22%C2%B5%3E%04%C2%95%1E%C2%84%C2%82%11%C2%84%C2%B1%03%06%06%06%00%00%00%00%C3%BF%C3%BF%C2%A2o%05%C3%8C%C3%80%C3%80%00%00%00%00%C3%BF%C3%BF%C2%A2o*e%60%60%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%AF%C2%85%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%03%00%C2%83%C3%9F%C2%95x%C2%A6%14%C3%9A'%00%00%00%00IEND%C2%AEB%60%C2%82";
var btn_createComps = group1.add("iconbutton", undefined, File.decode(addel_imgString), {
    name: "btn_createComps",
    style: "button"
});
btn_createComps.helpTip = "create all required compositions\nto start working on a new template";
btn_createComps.alignment = ["left", "top"];
btn_createComps.minimumSize.width = 118;
btn_createComps.preferredSize.height = 30;

var btn_createIMGComps_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00l%00%00%00%1E%08%06%00%00%00%C3%89%C2%8C%C3%BB%07%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%03%5CIDATh%C2%81%C3%AD%C2%99%C2%BFk%14A%14%C3%87%3F%11%7F%C2%80%C2%85p%C3%B8%07(%C2%91X%C2%88U.%C2%85%60%C2%93%C3%80%C2%A5%11%C3%9B%13%2C%C3%AC%24iL!(%17%10A%C2%AC%C3%AE%C3%80%C3%86%C3%B2%0ER)%22I%15%C2%90%20x%C2%A0%C2%95%C2%88%C3%9C%C3%99)6%C2%B9%C3%92J%2F%C2%9AB%C3%94%C2%80c13%C3%99%C2%B9%C3%89%C3%8C%C3%8E%C3%AEz%C2%92%C2%AC%C3%8C%07%C2%96%C3%8D%C2%BC%7D%C3%BBfv%C2%BE%C3%BB%C3%9E%C3%8C%5E%26%C2%84%10D%C3%8A%C3%83%C2%A1%C3%BD%1E%40%24%1FQ%C2%B0%C2%92%11%05%2B%19Q%C2%B0%C2%92%11%05%2B%19Q%C2%B0%C2%92q8%C2%83%C3%8Fq%C3%A0%1Ap%018%C2%911%C3%AE6%C3%B0%06x%04%7C%2F6%C2%B4%C2%88%C2%8B%C2%89%C3%80w%C3%98%11%C3%A4%C3%84O%17%C2%8C%C3%BF%0E)%C3%B4N%C3%81%C3%BB%23%16%C2%A1%C2%92x%C2%91%7Cb%C2%BD%07%C2%BE%18%C3%ADi%15c%3F%C2%A8%C2%A8%C3%A3%C2%BF%22%24%C3%98T%C2%8EX7%C2%80%C3%B3%C3%80i%C3%A0m%C3%8E%185%C2%A0%07%C2%B4%C2%ADv%0Fx%C3%A1%C3%B15%C3%BD5%C2%93%C3%80*04%C2%8E%1E%C3%90%C3%B0%C3%B4%C3%9B%006S%C2%8E%06%C3%90L%C2%B9%C2%AE%C3%87%C3%96T%C3%BD%C3%BAh%C2%ABq%C3%A81%C2%BAb%0DS%C3%86%C2%99%20%C2%84H%3B%C2%96Dv%C2%8E%19%C3%B7%C3%9D2%C3%ACK%C2%81%3E%10B%C3%94%C2%95o%C3%8Fjk%C2%AA%C2%86o%C3%9B%C2%B0%C3%B7%0C%7BU%0814%C3%ACM!%C3%84%C2%AAak%07%C3%86%C2%A0%C3%AF%C2%B7%C3%AD%C2%ABB%C2%88F%C3%A0%5E%C3%9DO%C3%9Dq%C2%AD%C2%A2%C2%AE%0D%03%C3%BD%C3%94%C2%84%10%C2%9B%C2%9E%18%C2%BBG%C3%91%5D%C3%A2%0A%C2%B0a%C3%99f%C3%95y%02%C2%98%2B%18%C3%97%C2%A6%C2%AB%C3%8E5%C3%83V%05%C3%BA%0E%C3%9F%26%C2%B2%04.%033%C3%AA%7C%058%03%0C%C2%80%05%2B%C3%8E%C2%B8%C3%99%02%C3%AA%0E%C3%BB%C2%82%C3%AA%3FD%17%C3%A8xb%C3%ACRD%C2%B0%07%C3%80u%C3%A02%C2%A3%C3%A5j%1Dx%C2%82%C3%9C%C2%A4%5C*%10%C3%97E%1F9%11z%C2%A2%C2%AB%C3%AA%C3%A8Z~%C2%93%C3%8Ag%00%C2%B4%C2%ACk%5BH%C3%B1l%C3%BB%C2%B8%C3%A9%C2%A81%C3%98%C3%AB%C3%A6%02%C2%B0%C2%96%23%C3%8EV%C3%9A%C3%85%2C%C3%9Bz%C2%93_%24%0F.%C2%80%7B%C3%80%C2%BCj%1F%03%C2%AE%C3%A6%C2%8C%17Bg%C2%93%C2%9E%08-%C2%9C%C2%9DaUu6%1F%C3%96%C2%9E%C2%BC%3E%C3%99%C3%9Et%17u%C2%A3%0F%C2%93%0E%C2%A3%2FO%17)%C2%90%C2%9E%C2%A3%C2%BAa%0F%C2%ADOUu%C3%AFb%C2%9AS%5E%C3%816%C2%80%C3%8FF%C3%BB5%C3%B0%018%07%7C%04n%02%0F%C2%81%C2%B39%C3%A3%C3%BA%C2%A8%20%C3%9F%C3%8E%1A%C3%B2%C3%A1u%16%C3%99%19%C3%A6%C2%A2%C3%89%C3%9EIn!%C2%B3-%2F%3E%C2%B1m%5B%07%C2%B9%C3%810%05%C3%ABxb%0E%1D%C2%B6%16%C2%81g%C3%8B%2B%C3%98c%C2%87%C3%AD)p%1F%C2%B8%0D%3C%07%C3%AE%C2%90%C2%AF%04%C2%84%C3%90%0F%C3%A0%2B%C2%87%C3%A0%C2%9E%C3%8Ce%C2%92%0C%C2%AB%13X%1B%02%C2%B8J%C2%AD%C2%8B.%C3%89Z%C2%A6%2B%C3%83%22%C2%B2d%C3%9B%C3%8C%5Bm%C3%97%C2%BA%C2%BC%C2%87%3C%C2%82%7D%05%C2%9E9%C3%AC%2B%C3%80Q%C2%92M%C3%88%3A%C3%B2%5B%C3%ACd%C2%8E%C3%98i%C3%B4%19-%C2%8B.%C3%81t%06T%C2%95_%C3%97%C3%B2%0Bo%C2%97%C3%87%C3%87%1A%C2%B2%C2%B4%C3%B5%C2%91%C3%99%C3%A5%5B%C2%932%09d%C2%93g%C3%93%C2%B1%0E%C3%BCt%C3%98%3F%01w%C2%81%C3%9F%C2%AA%C2%BD%C2%83%C3%8C%C2%BAq%C3%92'yK%7D%25Cg%C3%80*%C2%B2%2C5I%C2%BE%C2%A1%5C%C3%AB%C3%8F%C2%BF%C2%A2E%C3%B2%C3%A2%C2%8C%C2%B3%C3%92%00%C3%A1%0C%C3%BBa%C3%BC%3D%05%C2%9C%02%C2%BEe%C2%88%C2%BB%C3%AD%C2%89Q%14%C2%BD%C2%98%C3%ABLr%C3%BD%C2%82%C2%A1%C3%97%C2%8A%C2%86%C3%B2%C3%95%0C%C2%90%C3%9B%C3%BB%C2%B4%0F%C3%9B%10%0D%C3%BCY%3A%C3%A3%19K%C2%8D%C2%82Y%C2%94F%C3%A8%C2%B7%C3%84Y%C3%A0%C3%A5_%C3%B61%07%C2%BC%C3%8A%C3%A0Wa%C2%B4%7C%C3%A4m%C2%9BL%22%C3%9F%C3%B2%01%C3%89%C2%A4%C2%A5%C3%B9%C2%9B%C3%B7%C3%99%C3%ABa%05%C3%B7%1A%C2%A4%C3%A9%7Bb%C3%9B63%C2%B6%C2%AB%C2%9FL%C3%84%1F%7FKFH0%C2%88%C3%BF%5E9Pd%11%2Cr%C2%80%C2%88%C3%BFq.%19Q%C2%B0%C2%92%11%05%2B%19Q%C2%B0%C2%92%11%05%2B%19Q%C2%B0%C2%92%C3%B1%07%C3%92%600%5C%0A%C3%BD%C2%80%15%00%00%00%00IEND%C2%AEB%60%C2%82";

var btn_createIMGComps = group1.add("iconbutton", undefined, File.decode(btn_createIMGComps_imgString), {
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

var addel_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%C2%9A%00%00%00%1E%08%06%00%00%00%C3%94%C3%9E%07%C3%99%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%04%C2%97IDATx%C2%9C%C3%AD%C2%9B%C2%BF%C2%8B%24E%14%C3%87%3F3%C3%B7%C3%83%C3%8B%C2%A4OLD%0CF.%C3%93hD%C3%A4%12%03g%03%C3%A5N%04%C2%99%03A%C3%93Y%C3%BF%02wS%C2%8DfC1%C2%BA%C3%B9%13v%04%C2%95C%04oO%C3%A5%12Av%02%03%13%C3%81%C3%81%C3%84%40%C3%A4f%10%0F%C3%B4%0Ev%C2%9F%C3%81%C2%AB%C2%A2k%C2%AB%C2%BB%C2%BAzkwG%C3%86%C2%AD%0F4%3D%C3%9D%C3%AFUWu%C3%B5%C2%B7_%C2%BD%C2%AA%C2%99%C3%A9%C2%88%08%C2%99%C3%8CY%C3%93%C3%BD%C2%AF%1B%C2%909%1Fd%C2%A1eVB%16Zf%25d%C2%A1eVB%C2%AA%C3%90%C2%BE%02%0E%03%C3%9B%C3%8F%C3%80%0B%C2%8E%C3%AF%C3%AB%C3%80%22%C3%A0%7B%00%7C%C2%9C%C3%98%C2%86%C3%8C%1A%C2%91*%C2%B4%0D%C2%A0%13%C3%98%C2%AE%01%C2%AF%18%C2%BFK%C3%80M%C2%A0%08%C3%B8v%C2%81w%12%C3%9B%C2%90Y%23R%C2%85v%10%C2%B1_4%C3%BB%0Ep!%C3%A2%7B%C2%98%C3%98%C2%86%C3%8C%1AqV9%C2%9A8%C3%BB%C3%98B%5D%5E%C3%88%3B%07%C3%A4%C3%89%40f%25%5C%C2%8C%C2%BB%24%C3%91q%C3%B6%C2%9D%26%C3%87%13%C2%B0%05%C2%8C%C2%80M%60%C3%8F%C2%B3%C2%8D%C2%81%C2%A1wni%C3%BC%C2%B6%C2%BD%C3%B3%C3%BBh%0Ei)%C2%80%C2%99%C3%B1%C3%9Di%C2%A8%C3%9B%C2%BF%C2%BE%C3%8B%C2%B6)%7F%1B%C3%A8%3B%C3%87%3E%C3%96%1E%C3%A2%25%C2%A7%C2%8D%C2%96%5B%C3%80%C3%9C9vmu%C3%BE%3E3%C2%B4%C3%8F%06h%3F-%C3%8D5%C2%975%C3%AD%C3%9A6%C3%BB%C2%A6%7B%C2%B5%C3%97k%245%C2%A2%5D%C2%8E%C3%98%5Dq%C3%85r%C2%B4%2B%C2%89m%18%C2%A179%C2%AA%C2%B1%C3%B5%C2%80%09%C3%B0%C2%BC%C3%996%C3%90N%C3%AB%01wk%7Coy%C2%BE%13%C2%B4s%C3%87%C2%81%C2%BA%0B%C3%B4%01%14%01%C2%BB%C2%A5%1F%C3%B1%C2%B3%C3%B6%26%0A%C3%87%C3%8F%7F%C3%A8%23%C3%8FVx%C3%BEm%C2%AEk%05%C3%97%C2%B6%C3%9Dm%C3%AE%C2%BB%C2%8A%C2%88%C2%A4l%3FI%C2%98%C2%87%22r%C3%9D%C3%B8uD%C3%A4%C2%BD%06_%11%C2%91%C3%8F%12%C3%AA%1F%C2%8A%C3%88%2F%22%C3%92%13%C2%91%C2%85%C2%88%14%C2%9E%7DWD%C2%B6%02e%C3%B7%3D%C3%9BBD%C3%BA5~E%C2%83ml%C3%9A%3E%C2%8E%C2%B4s%C3%9F%C3%B8%0D%13%C3%AD%C2%B6%1Db%7C%17%22r%C3%97%C2%B1%C3%9Dvlb%7C%C2%AD%C2%BF%3Dn%C3%AAC%C2%97Q%C2%8Bv%C3%992%C2%B1%C3%BB%C2%AEl%C2%A9C%C3%A7M%C3%A0%3A%1A%C2%8D%C3%AC%C2%AC%C2%B1k%3E%C3%BFh6%C3%90D%C3%BFS%C3%A074r%C2%B83%C3%8C%0B%C3%80%C2%9F%C3%80%C3%BD%C2%84%C3%BA%C2%87h%C3%94%C2%99SF%C2%B5%C3%900%C3%A73i%C3%A9%C2%BF%04%C2%A6%C2%A6%C2%AEYB%1B%C3%8F%C2%82%19G%23%C3%95%00%1D%C2%92%C2%8F%1FaJ%C2%96%C2%A6%C3%BC%18%C2%BD%C3%9Fe%C2%B3%7B%1A%C2%A9B%C2%9Bs4Oh%C3%A2o%C3%A0%1B%C3%A0%5Bs%2C%C2%94Ck%C3%8A%C2%8C%C2%B3%40%3B%C3%98%C3%A6%05%13%C2%B4%C2%93%C3%9A%0Am%C2%86%C2%8A%C2%BE%0Ds%C2%9A%C2%87%C2%A0%C2%A1i%C2%8B%7F%C3%BDh%C3%8E%C3%A2%C2%B1e6%C2%97)G%C3%AF%C2%A9g%C2%8E%07%C2%A6%C3%9E9e%C2%8A%10%C3%8A%C2%A1%C3%BC4%01%C2%AA%C3%B9%C2%A2%C3%BB%C2%B2%C3%AE%C2%A2%C2%A9%C3%83%C2%A9s%C2%92Y%C3%A7e%C3%A0%09g%C2%BBb%C3%B6!%C3%9C%C2%A5%C2%8E6%C3%8B%1E!FhG%C3%997oj%C3%B6M%09%C3%AB%C3%BF%01%3BI%01%15%C2%9B%15x%C3%9D%24%C3%A3%C2%B8l%C2%9Ak%C3%97%C3%A5k%C2%A7BjD%7B%15x%0Bx%C2%92R0%1D%C3%A01%C3%B0%1D%C3%B09%C3%B0OM%C2%B9%C3%A7%C2%80%17%C2%81%1F%C2%80%3F%12%C3%AB%1E%C2%A1%22%C3%9B%C3%B5%C3%8E%0F)E%C3%97D%C2%9F%C3%B6%C3%83C%2F%C3%A2%3B%C2%A5%3A%C2%8BMa%C2%87vm%C2%9FQF%C3%99%1Ee4%0A%C2%B1A%C3%BB%7B%C3%9DD%23%C3%A0%16%C3%ADG%C2%AB%C3%96%C2%A4%0Am%0A%3C%1D%C2%B0m%C2%A27X%C3%B7%C2%A6%C2%BD%09%7Cb%C3%B6w%12%C3%AA%C2%B5Q%C3%8B%7F(3%C2%B4%C2%83%0A%C3%A2%1D%3B%C2%A8)%C3%9F%C3%A4%7B%1AB%3AM%C3%B6%C3%90%C2%97m%C3%8E%C3%A9D3%C3%8B%0C%15%C3%BC%C2%98%C3%B6%C2%A9EkR%C2%85v5b%C2%BF%06%C3%9C%C2%A3%3A%3C%C3%9A(%C3%B7Wb%C2%BDv%12P%C2%97%C2%8F%C3%B5iN%C3%B2%7B%C2%A8%18%C3%BB%C3%84s%C2%A8%01%C3%A5%C2%9B%C3%9D%24%C3%8A%3E%C3%B5C%C2%8D%C2%9D%C2%A8X%C2%86Ts%C2%BDI%C3%84%0E%C3%B5%22%C2%B7%11%C2%ACG%7C%C2%92%C3%A2%C3%A7%7D%C2%A0%2Fb%C2%A8%C2%8Fv%C2%88%C2%AF%C2%9B%25%C2%91*%C2%B4%03%C2%9A%C3%97%C3%87%5C%C2%81%3D%0B%C2%BCa%C3%8A%C2%BCf%C3%8E%C2%BD%C2%8D%C2%AEY%09%C3%B0%05%C3%B0%C2%A0E%C2%9D%C3%BE%24%C3%80g%C3%8A%C3%91IA%5D%C2%82%C2%BD%C2%87.j%C3%BAQ%C2%AF.i%C3%9E!%3E%C3%81ps%25%17%3B%C3%84Y%C3%AA%1E%C3%9C%2Cb%C2%B7m%C3%B0%C2%99%C2%A2%0B%C2%AA%C3%B6s%13uB%C2%B3%C2%91%2B%C2%84%5D%C3%8C%3D%C3%89L%C2%B6BG%C3%92%C3%BE3%C3%B0%C2%88%C3%A6E%C3%9B%C3%B7%C3%917V%C3%90a%C3%B4%C3%AB%C2%80%C3%9Fc%C3%A0e%C3%8A%C3%A5%C2%90%186%2F%09%C3%91G%3B%C2%B2%C2%A0%1A%C3%BECo%7F%C2%8Fj%C2%A7%C2%B6Y%C3%8Ehz%10%C2%AE%C2%90C~%C3%8B%C2%88%C2%BD%C3%8E'tl%C3%8F%1D%C3%A7%C2%9A~%19%C2%9F%C2%90%C2%ADMzRa%15B%7B%0A%C3%BD%C3%99P%17%C2%B8%C2%81%0Eo%1F%C2%A1_%C2%93%3C%02%C2%BE'%7D(%C3%8D%C2%AC%09g%C3%B5%5D%C2%A7%3B%C2%AC%3E%00%C2%BE4%C2%9F%C2%9F1%C3%BB%C3%BBh%0E%C2%979'%C2%A4%C2%AE%C2%A3%C3%85%04%C2%BA%C2%A0~%C2%9D%C3%AC%10%C2%9D%10%5CJ%C2%AC7%C2%B3%C2%A6%C2%A4%0E%C2%9D%1F%02%C3%AF%C2%A2%0B%C2%B4%C3%AEWP%5D4%C2%B1%C3%BE%00%C3%B8%C2%BD%C2%A6%C3%9CU4%C2%AA%C3%BD%0A%3CL%C2%A98%C2%B3%C2%9E%C2%A4%0A-%C2%939%16%C3%B9%C2%87%C2%8F%C2%99%C2%95%C2%90%C2%85%C2%96Y%09Yh%C2%99%C2%95%C2%90%C2%85%C2%96Y%09%C3%BF%02%C2%81%3D%C3%B3%C2%96%0D%1D%5B%C3%B5%00%00%00%00IEND%C2%AEB%60%C2%82";

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

var colorFill = groupFx.add("iconbutton", undefined, undefined, {
    name: "colorFill",
    style: "button"
});
colorFill.preferredSize.height = 30;
colorFill.preferredSize.width = 110;
colorFill.alignment = ["left", "top"];
colorFill.text = "COLOR FILL";

var scale2fill = groupFx.add("iconbutton", undefined, undefined, {
    name: "scale2fill",
    style: "button"
});
scale2fill.preferredSize.height = 30;
scale2fill.preferredSize.width = 110;
scale2fill.alignment = ["left", "top"];
scale2fill.text = "SCALE 2 FILL";

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

var btn_import = files_wrapper.add("iconbutton", undefined, undefined, {
    name: "btn_import",
    style: "button"
});
btn_import.alignment = ["left", "top"];
btn_import.preferredSize.height = 30;
btn_import.preferredSize.width = 240;
btn_import.text = "IMPORT A FILE AS FOOTAGE";

var divider2 = files_wrapper.add("panel", undefined, undefined, {
    name: "divider2"
});
divider2.alignment = "fill";

var openProjectInExplorer_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%18%00%00%00%18%08%06%00%00%00%C3%A0w%3D%C3%B8%00%00%00%09pHYs%00%00%0B%12%00%00%0B%12%01%C3%92%C3%9D~%C3%BC%00%00%02%1CIDATH%C2%89b%C3%BC%C3%BF%C3%BF%3F%03%C3%8D%00%03%03%03%00%00%00%C3%BF%C3%BFb%C2%A2%C2%A9%C3%A9%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%C2%82Y%60%C3%80%C3%80%C3%80%C3%B0%C2%80%C2%81%C2%81%01%C3%A4%1Dd%C3%BC%C2%81%C2%81%C2%81%C2%A1%C2%81%C2%81%C2%81A%C2%80%2C%C3%93%19%18%18%00%00%00%00%C3%BF%C3%BF%C2%82%05%11%C3%88py%06%06%C2%86%C2%87P6%0C%C2%80%2C%C3%A6g%60%60%C3%B8%C3%88%C3%80%C3%800%01j%19%C3%B1%C2%80%C2%81%C2%81%01%00%00%00%C3%BF%C3%BFb%C3%B8%C3%BF%C3%BF%C2%BF%C3%81%7F%08%C2%B8%C3%B0%C3%BF%C3%BF%7F%01%C2%90%C2%85H%18%C3%84%C2%9F%00%C2%95'%04%3E%C3%BC%C3%BF%C3%BF%C2%BF%01E%C3%BF%C3%BF%C3%BF%0C%00%00%00%00%C3%BF%C3%BF%02%C3%B9%C3%80%C2%81%C2%81%C2%81a%3F%03%03C%23%1E%17*%40%C3%A5%4046%00%0AB%7D%C2%A8%C2%84%23%03%03%C3%83%010%C2%8B%C2%81%C2%81%01%00%00%00%C3%BF%C3%BFb!%C3%82%C2%BF%20%07%C2%80%C3%80%02%06%06%C2%86%0B%C3%90x%C3%81%06%40%C3%B2%C3%B1%0C%0C%0C%09p%0B%18%18%18%00%00%00%00%C3%BF%C3%BF%02y%C3%83%01%C3%AAwt%C3%AF%25%40%C2%BDM%0E%00%C3%A9K%C3%B8%C3%BF%C3%BF%3F%03%00%00%00%C3%BF%C3%BF%C3%82%C2%95LA%5E%06E*(%C2%82%C3%89%01%20%7D%13%18%18%18%18%00%00%00%00%C3%BF%C3%BF%C3%82e%01%2C%C3%B5P%02%C3%B8%19%18%18%0C%00%00%00%00%C3%BF%C3%BF%C3%82e%01%2C%C3%9C)%03%0C%0C%17%00%00%00%00%C3%BF%C3%BF%C3%82e%01%C2%AE%C3%94B%0A%C2%B8%C3%88%C3%80%C3%80%C3%80%00%00%00%00%C3%BF%C3%BF%C3%82%17D%C2%94%C2%82%0D%0C%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%C3%82e%01%2CMS%02%0E0000%00%00%00%00%C3%BF%C3%BF%C3%82f%015%5C%0F*Z%0E0000%00%00%00%00%C3%BF%C3%BF%C3%82f%015%C3%82%1F%C2%92%C3%91%18%18%18%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%95%0F%20%16000%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%95%05%C3%A0%08f%60%60%60%00%00%00%00%C3%BF%C3%BFB%C2%B6%00V%C3%A6S%1AD%C2%88%22%C2%9F%C2%81%C2%81%01%00%00%00%C3%BF%C3%BF%02%C2%959%0A%C3%90%C3%82%06T~%C3%80%C3%8A%25J%C3%80%02xy%C3%B6%C3%BF%3F%03%00%00%00%C3%BF%C3%BF%C2%821%1EP%C3%81%60%18%009%12b%C3%AE%C3%BF%C3%BF%0C%00%00%00%00%C3%BF%C3%BF%C2%821%40%C2%95%0E5%2C%01UN%C2%88%12%C3%B9%C3%BF%7F%06%00%00%00%00%C3%BF%C3%BF%C2%A2m%C2%AB%C2%82%C2%81%C2%81%01%00%00%00%C3%BF%C3%BF%C2%A2m%C2%AB%C2%82%C2%81%C2%81%01%00%00%00%C3%BF%C3%BF%03%00%C3%A5%C3%A5%C3%A9%0ET%C3%A5%C3%95%C3%96%00%00%00%00IEND%C2%AEB%60%C2%82";

var btn_organize = files_wrapper.add("iconbutton", undefined, File.decode(openProjectInExplorer_imgString), {
    name: "btn_organize",
    style: "button"
});
btn_organize.alignment = ["left", "top"];
btn_organize.preferredSize.height = 30;
btn_organize.preferredSize.width = 240;
btn_organize.text = "ORGANIZE PROJECT   ";

var cleanup_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%18%00%00%00%18%08%06%00%00%00%C3%A0w%3D%C3%B8%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%04%C3%AEiTXtXML%3Acom.adobe.xmp%00%00%00%00%00%3C%3Fxpacket%20begin%3D%22%C3%AF%C2%BB%C2%BF%22%20id%3D%22W5M0MpCehiHzreSzNTczkc9d%22%3F%3E%20%3Cx%3Axmpmeta%20xmlns%3Ax%3D%22adobe%3Ans%3Ameta%2F%22%20x%3Axmptk%3D%22Adobe%20XMP%20Core%209.1-c001%2079.1462899%2C%202023%2F06%2F25-20%3A01%3A55%20%20%20%20%20%20%20%20%22%3E%20%3Crdf%3ARDF%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%20%3Crdf%3ADescription%20rdf%3Aabout%3D%22%22%20xmlns%3Axmp%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2F%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Aphotoshop%3D%22http%3A%2F%2Fns.adobe.com%2Fphotoshop%2F1.0%2F%22%20xmlns%3AxmpMM%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2Fmm%2F%22%20xmlns%3AstEvt%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2FsType%2FResourceEvent%23%22%20xmp%3ACreatorTool%3D%22Adobe%20Photoshop%2025.0%20(Windows)%22%20xmp%3ACreateDate%3D%222023-12-29T00%3A59%3A35%2B01%3A00%22%20xmp%3AModifyDate%3D%222023-12-29T01%3A01%3A12%2B01%3A00%22%20xmp%3AMetadataDate%3D%222023-12-29T01%3A01%3A12%2B01%3A00%22%20dc%3Aformat%3D%22image%2Fpng%22%20photoshop%3AColorMode%3D%223%22%20xmpMM%3AInstanceID%3D%22xmp.iid%3A0b38117f-bd3c-ba44-a9d0-972e7006ee6c%22%20xmpMM%3ADocumentID%3D%22xmp.did%3A0b38117f-bd3c-ba44-a9d0-972e7006ee6c%22%20xmpMM%3AOriginalDocumentID%3D%22xmp.did%3A0b38117f-bd3c-ba44-a9d0-972e7006ee6c%22%3E%20%3CxmpMM%3AHistory%3E%20%3Crdf%3ASeq%3E%20%3Crdf%3Ali%20stEvt%3Aaction%3D%22created%22%20stEvt%3AinstanceID%3D%22xmp.iid%3A0b38117f-bd3c-ba44-a9d0-972e7006ee6c%22%20stEvt%3Awhen%3D%222023-12-29T00%3A59%3A35%2B01%3A00%22%20stEvt%3AsoftwareAgent%3D%22Adobe%20Photoshop%2025.0%20(Windows)%22%2F%3E%20%3C%2Frdf%3ASeq%3E%20%3C%2FxmpMM%3AHistory%3E%20%3C%2Frdf%3ADescription%3E%20%3C%2Frdf%3ARDF%3E%20%3C%2Fx%3Axmpmeta%3E%20%3C%3Fxpacket%20end%3D%22r%22%3F%3E%C3%BCA%11G%00%00%01%C2%ADIDATH%C2%89%C2%B5%C2%94%3FHVQ%18%C2%87%C2%9Fk_%C2%91%C3%99%1E%C2%81%2045%04%C2%AE%C2%B6E%C2%A4%C2%B4dK%C3%9A%22%C3%A4%C3%AA%C3%96%10%19D%5B%C2%8BJ%C2%B5%C2%89%10%C2%A1%10D%0D%06~J%C2%B4%C2%84%C2%A0D%C2%83%C2%A6)%C2%81AmNAP%0A%0EJ%C3%B84x%3F%3C%5E%C3%AE%C3%B5%C3%9C%C3%A4%C3%BA%C3%82%C3%8B%3D%C3%9C%C3%BB%C2%9E%C3%9F%C3%AFy%C3%AF%C3%B9%C2%93%C2%A8%1Cg4%1D%C2%83%C3%A6Y%C2%A0%0E%C3%BC%00%40%C2%AD2%5B%C3%94%C3%B7%C3%AEG%C2%A5%06g%C3%94w%C2%81%C3%B8X%C2%95%06%C3%8D%C3%AAL%20%C3%BE%C2%BC%C3%B1%C2%AD%0A%C3%B1%C3%93j%3D%10%7F%C2%A1%26U%19%C2%B4%C3%A4%C2%887%C2%855G%11%C2%BD%C2%A5%3EJ%C3%87o%03%C3%B1%C3%B1%C2%90%C3%BC%C2%A8%06%C3%B7%03%C3%81%C2%87j%C2%BF%C3%BAW%7D%C2%99%25odb%C3%BC%C2%A05%03%C2%BD%C3%80%05%60%15%C2%98H%C3%B7%3A%C3%80%200%07%2C%03%C3%9B%C2%B9%C2%B3%C3%95%C2%939%C2%8B%C3%96%C2%AA%5EW%C2%9F%C2%A8k%01%C3%B5%C2%B0zU%C3%9D%08%C3%9E%C3%9D%2B%C2%A2o%C3%BC%C2%A2%01uQ%C3%BD%C2%A8.%C2%A8%C3%9F%C3%95M%C2%8BcD%C2%BD%C2%96%C2%A9i%3F%C3%8C%C3%A0%C3%8A!bE1%C2%A4v%C2%AA%C3%9B%C3%AA%C2%92z%C2%AA%C3%88%20Qk%C3%80%3C%C3%90%01%7C%03%3E%01w%C2%88%C3%9FSC%C3%80%12%C2%90%00o%0A%C2%ABR%C2%A7v%C3%B5%C2%B6%C3%9A%C2%A5%C2%8E%C2%AA%C2%BB%25%3By%5CD%C3%9E%C3%88Z%C3%AA%C2%B3%02%3C%00z%C2%80%13%11%C3%B2%03%7C%C3%B1%C2%8A%7D%C2%B7nuG%5DW%C2%9F%C2%AA%C2%AF%23%C3%B4%C2%BF%C3%95se%3B%C2%80%C2%BD%3B%C2%BC%03hK%C2%B3%3B%C3%82%C3%B6%0A%C3%B8%C3%B9%3F%1D%C2%A0%C3%96%C3%94%C3%99%0C%C3%A9z%0E%C3%BD%C2%8Ez)Fo%C3%81In%05%C2%9E%01%7F%C2%80i%C3%A0%22%7B%3B%26%C2%8C%3Ap3J%C2%9F%C3%93A%C2%987%C3%94%C3%8F%19%C3%B2%C2%AD%C3%B4%C3%99Y%C2%86%3E%C2%BB%06%C3%99X%06%C2%BE%C2%A4%C3%A3%C2%AF%C3%80%24p%178%0F%7C(E%1F%C3%A9%20%C3%8C%C3%8B%C3%AA%C2%94%C3%BAK%C3%AD%2BK_%C2%B4%06%C2%95%C3%86%3FP%C2%8F%C3%84%C2%A7%C3%96vRR%00%00%00%00IEND%C2%AEB%60%C2%82";

var btn_cleanup = files_wrapper.add("iconbutton", undefined, File.decode(cleanup_imgString), {
    name: "btn_cleanup",
    style: "button"
});
btn_cleanup.alignment = ["left", "top"];
btn_cleanup.preferredSize.height = 30;
btn_cleanup.preferredSize.width = 240;
btn_cleanup.text = "PROJECT CLEANUP   ";

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

var edit_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%18%00%00%00%14%08%06%00%00%00%C2%97%C2%B5%C3%BD%C2%83%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%00%C3%82IDAT8%C2%8D%C2%B5%C2%95%C2%A1%0E%C3%820%14E%C3%8F%C2%90s84%C3%A9%C2%87%C3%B0%C2%87%C3%BB%0A%C3%A4%C2%82%C2%9CC%C2%80%07%C2%81E%0E~%01%C2%B3%C3%A4bF2%C2%BA%C2%B6%C3%A9%C3%9A%C3%AE%26M%C2%93%C3%A6%C3%B5%C2%9C%C3%B4%C2%89%C3%97J%12kf%C2%B3*%C2%BD%C2%80%C3%80%007%60%00Z%C2%A0%C2%9EUHJ%5DFR%C2%AF%C3%BF%C2%9C%25%C3%95%C3%93%C2%BA%1CA%23w%C3%9A%5C%C2%81%C2%91%C3%94I%C3%9AI%3A%3A%04C%C2%8E%60%C3%9A%C2%96%C2%87GrO%15%C2%B8znK%C3%BA%C2%B1n%C2%B1%C3%80%05%C2%B7%25%C2%8D%0D%C2%8F%15%C2%84%C3%A0%C2%BFt%C2%BE%C3%BB%25%C3%A0%C2%B3%C2%B6%C3%84%0A%C2%B2%C3%A1!A%11xHp)%01%C2%97%C3%A4%C2%9DE%C3%BB%C3%80%C3%BCy%01%07%C3%A0%193%C2%AC%7C%C2%82m%098%40%259%C3%BF%03%C3%97%C3%A1b8%C3%B8_p%1A%C3%B7%0F%C3%B0%06%C2%AE)p%C3%B0%C2%BF%C2%A0XV%C3%BF%C3%91%C2%BE%C2%B4%1B%C2%81%2B%C3%97.%C2%B3%C2%9C%00%00%00%00IEND%C2%AEB%60%C2%82";

var btn_openAndSelect = tools_wrapper_l.add("iconbutton", undefined, File.decode(edit_imgString), {
    name: "btn_openAndSelect",
    style: "button"
});
btn_openAndSelect.alignment = ["left", "top"];
btn_openAndSelect.preferredSize.height = 30;
btn_openAndSelect.preferredSize.width = 130;
btn_openAndSelect.helpTip = "Clicking this button will bring up the __SETTINGS comp and select the layer with the color-edit effects. If you dont see the color-edit effect, click F3 on your keyboard";
btn_openAndSelect.text = "EDIT COLORS   ";


var apply_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%18%00%00%00%14%08%06%00%00%00%C2%97%C2%B5%C3%BD%C2%83%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%00%C3%96IDAT8%C2%8D%C3%95%C3%951%0A%C3%820%14%C2%80%C3%A1W%05W'%07%C2%A1Wprpwt%C3%B0%02%C2%82%20%C2%B8x!G%11%C2%BCAo%C3%A1%C3%A4%C3%A0*%C2%AE%0EN%0E%C3%AD%20%C3%88%C3%AFb0%C2%86%C2%A4iH%3A%C3%B8%C2%A0CI%C3%B3%7F%C3%89%C3%94%0C%C2%906%C2%A7%C3%93j%3D!%C2%90%C2%8B%C3%88UD%0E%22%C3%92%C3%BDY%01b%C2%9F%1C%C2%B8%C3%B0%C2%9D%3D%C2%90%C2%A9%C3%B5%C3%94q5%C3%9B%14%C3%80%C3%90%11%07%C2%B8%C3%85%02%03%C3%A0%C3%AC%C2%88%C3%9F%C2%81Q%1D%C2%B0%06v%40%2F6n%03V%C3%9A%C3%87%C2%85%05%09%C2%8A%C2%9B%C3%80%02x%19%C2%9Bt%C2%A4%0F%C2%9C%1C%C3%B1%070%C2%B6%C3%9DX%7F)%1D%C2%9B%C2%8B%C3%8F%C3%89%C2%8F5%C3%B1%C2%89-%C3%9E%C3%A4%06z%248n%02%3E%C3%84%C2%9C%C3%92%17%C2%B7%01M%C2%91%0A%C2%98%C3%BA%C3%A2.%40%C2%80e%C2%8Ax%1D%20%C3%80%266%C3%AE%03L%C3%A4%09%C3%8CB%C3%A2M%00%C2%85T%C3%80%3C4%0EH%06%7F%C3%BEG%7B%03%C2%B6%23%C2%B3L%116%7CR%00%00%00%00IEND%C2%AEB%60%C2%82";

var btn_debug_colors = tools_wrapper_l.add("iconbutton", undefined, File.decode(apply_imgString), {
    name: "btn_debug_colors",
    style: "button"
});
btn_debug_colors.alignment = ["left", "top"];
btn_debug_colors.preferredSize.height = 30;
btn_debug_colors.preferredSize.width = 130;
btn_debug_colors.helpTip = "Apply the colors, defined on the color-edit effects, to be used globally within the whole project";
btn_debug_colors.text = "APPLY COLORS  ";

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

var purgeAll_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%18%00%00%00%18%08%06%00%00%00%C3%A0w%3D%C3%B8%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%01%C2%98IDATH%C2%89%C2%B5%C3%95%3BkTA%14%07%C3%B0%C3%9F%C3%B5%11%C2%85%C2%88Z%C2%88%C2%85%C2%95%C2%96%C2%82%C2%82%C2%8D%C2%A5%20X%C3%BA%19D%C2%B0%17%5B%C2%ADS%C3%B8%11%C3%94%2F%10%0BK%1B%05%C2%B1%C2%B3%C3%93F%12%C2%88%C2%82%C2%85%C3%A0%C2%8B%C3%B8%00%C3%B1%C2%95d%C3%9D%1D%C2%8B%3Bkf%C2%8Fsw%C3%97M%C3%B2%C2%87%C3%83%C2%9D%C3%B3%C2%BFs%C3%8E%7F%5Eg%C2%A6I)%C3%99I%C3%AC%C3%9A%C3%91%C3%ACS%0A%5C%C3%80%0A%5EW%C3%AC%25.%C2%8E%0Bn*K%C3%94%60O%C3%A1%3F%C3%842nW%C3%A2%2F%C3%A1%3C%C3%8E%15%5C%1F%C2%83.%C2%81%2B%C2%B8%C2%8A%C2%B9%C2%82%3B%C2%81U%7C%C2%A9%08%1C%C3%861%C2%BC*%C2%B8%1E%C3%AE%C3%A0VM%C3%A0%2B%0EV%12%C3%BD%2F~%C3%A0%00%C3%BF%C3%AE%C3%81%C2%83mH%0E%C2%8F%C2%86%C2%8D8%C2%839%C2%9C%C3%86%C3%AE-%24%1F%60%09k%C2%8Cn%26l%C3%A0l%C2%B6Y%C3%B1%1CO%C3%BFz)%C2%A5h%C3%B7%C3%93%C3%96%C3%B0%C2%B8%C3%8CW%C2%AB%C2%83%17%C3%81_%C3%87M%2C%06%C3%BE%1E%16%C3%B0%2B%C3%B0%2B%23%5Ee%06%C3%97%C3%82%C2%88%C2%9Ee%C3%BEhJ%C3%A9g%C3%A66RJ%C3%873%C3%BF%24%C3%B4%C2%BF1i%06o%C2%83%C3%9F%C3%8B%C3%9F%C2%BD6%0Bh%60s%C3%BFz%C2%A1%C3%BFH%7CM%C3%A0%7D%C3%B0%C2%9B%C3%B0%C2%9D%C3%84O%14X%C3%95%C2%9E%C2%A6Y%C3%90%C3%8F%C3%B1c%05%3Ei%2Bz%16%7C%C2%9FF%C3%A0%1B%3E%C3%8E(%C3%B0Y%18%5CM%C3%A0w%18%C3%85pc%C3%BB(%C3%8B%C2%BE%1F%C3%BE%C3%8Bqk%C2%93%04%C3%A0%5D%C3%91%1E%5E~%C3%B3%C3%9A%C2%93D%7B%C2%95%C3%8C%C3%A7%C3%B6%C2%A1%C2%A2%C3%AF%C2%87%C2%98(%5E%15C%C2%BC)%C3%9A'%C2%B5%C2%97%C3%97%11%C3%AC%2B%C3%A2%16%C3%B3%40%C3%8Et%C3%84%C2%8D%15(%C2%8FZ%C2%A3%7D%C3%95%22Ne%C3%AB%C2%8AC%C3%B7%12-w%C3%B0%C2%93%C2%B0%14%C2%89%C3%9A%C2%93I%C2%BB%C3%86%0B%C2%B8%C2%8C%C3%BDS%24%5E%C3%87%5D%5C%17*%C2%BBK%60%C3%9B%C3%B0%07E2%0B%C3%9C%C3%BC%C3%AEK%C3%BD%00%00%00%00IEND%C2%AEB%60%C2%82";

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
addObj.minimumSize.width = 50;
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