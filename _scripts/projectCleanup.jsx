/*
* Decompiled with Jsxer
* Version: 1.6.0
* JSXBIN 2.0
*/

function activateCompViewer() {
   var A = (app.activeViewer) && (app.activeViewer.type === ViewerType.VIEWER_COMPOSITION);
   if (A) {
      app.activeViewer.setActive();
   } 
   return A;
}
function createResourceFile(filename, binaryString) {
   try {
      path = File($.fileName).path.split("/");
      newPath = "/";
      for (var i = 1, len = path.length; i < (len - 2); i++) {
         newPath = newPath + path[i] + "/";
      }
      var myFile = new File(newPath + "img/" + filename);
      return myFile;
   } catch (err) {
      showAlertWindow("Error in createResourceFile function\n" + err.toString());
   }
}

function getActiveComp() {
   var X = app.project.activeItem;
   var selComp = (app.project.selection.length === 1) && (app.project.selection[0].typeName === "Composition") ? app.project.selection[0] : null;
   if (X instanceof CompItem) {
      if (selComp === null) {
         comp = X;
      }
      else if (selComp !== X) {
         comp = null;
      }
      else {
         X.selected = false;
         temp = app.project.activeItem;
         X.selected = true;
         if (temp === null) {
            comp = (activateCompViewer()) && (app.project.activeItem === X) ? X : null;
         }
         else {
            comp = X;
         }
      }
   } 
   else {
      comp = activateCompViewer() ? app.project.activeItem : null;
   }
   return comp;
}
function getAllComps() {
   var comps = new Array();
   for (var i = 1; i <= app.project.numItems; i++) {
      if (app.project.item(i) instanceof CompItem) {
         comps[comps.length] = app.project.item(i);
      }
   }
   return comps;
}
function removeExpressions(propParent) {
   if (propParent !== null) {
      for (var i = 1; i <= propParent.numProperties; i++) {
         prop = propParent.property(i);
         if (((prop.propertyType === PropertyType.PROPERTY) && (prop.expression !== "")) && (prop.canSetExpression)) {
            if (!prop.expressionEnabled) {
               prop.expression = "";
               disabledEx++;
               continue;
            }
         }
         else {
            if ((prop.propertyType === PropertyType.INDEXED_GROUP) || (prop.propertyType === PropertyType.NAMED_GROUP)) {
               removeExpressions(prop);
            }
         }
      }
   }
}
function clean(a, b, c, d, e, f, g) {
   try {
      var unUsedItems = 0;
      var unUsedFX = 0;
      var renderQue = 0;
      var totalLayers = [];
      var msg = "";
      if (f == 0) {
         var comps = getActiveComp();
      }
      else {
         var comps = getAllComps();
      }
      if (e == true) {
         app.executeCommand(10200);
      }
      app.beginUndoGroup("Clean Up");
      if (a == true) {
         unUsedItems = app.project.removeUnusedFootage();
      }
      if (comps != null) {
         if (b == true) {
            for (var k = 0; k < comps.length; k++) {
               for (var i = 0; i < comps[k].numLayers; i++) {
                  theLayers = comps[k].layers;
                  var fx = comps[k].layer(i + 1)("Effects");
                  if (fx) {
                     fxNum = fx.numProperties;
                     for (var f = 0; f < fxNum; f++) {
                        if ((!fx.property(fxNum - f).enabled) && (fx.property(fxNum - f).isEffect)) {
                           if (((((((fx.property(fxNum - f).matchName == "ADBE Point3D Control") || (fx.property(fxNum - f).matchName == "ADBE Angle Control")) || (fx.property(fxNum - f).matchName == "ADBE Checkbox Control")) || (fx.property(fxNum - f).matchName == "ADBE Layer Control")) || (fx.property(fxNum - f).matchName == "ADBE Point Control")) || (fx.property(fxNum - f).matchName == "ADBE Slider Control")) || (fx.property(fxNum - f).matchName == "ADBE Color Control")) {
                              continue;
                           }
                           else {
                              fx.property(fxNum - f).remove();
                              unUsedFX++;
                           }
                        }
                     }
                  }
               }
            }
         }
         if (c == true) {
            for (var k = 0; k < comps.length; k++) {
               theLayers = comps[k].layers;
               for (var i = 0; i < comps[k].numLayers; i++) {
                  removeExpressions(comps[k].layer(i + 1));
               }
            }
         }
      }
      if (d == true) {
         while (app.project.renderQueue.numItems > 0) {
            app.project.renderQueue.item(app.project.renderQueue.numItems).remove();
            renderQue++;
         }
      }
      app.endUndoGroup();
      if (unUsedItems > 0) {
         msg = msg + "Removed: " + unUsedItems + " unused items \r";
      }
      if (unUsedFX > 0) {
         msg = msg + "Removed: " + unUsedFX + " disabled effects \r";
      }
      if (disabledEx > 0) {
         msg = msg + "Removed: " + disabledEx + " disabled expressions \r";
      }
      if (renderQue > 0) {
         msg = msg + "Removed: " + renderQue + " render queue items \r";
      }
      if (e == true) {
         msg = msg + "Cleared: Disk cache \r";
      }
      if (msg != "") {
         showAlertWindow(msg);
      }
      else {
         showAlertWindow("Nothing found to clean up!");
      }
   } catch (err) {
      showAlertWindow("Error at line # " + err.line.toString() + "\r" + err.toString());
   }
}
var disabledEx = 0;
