/*
 * Decompiled with Jsxer
 * Version: 1.6.0
 * JSXBIN 2.0
 */

function activateCompViewer() {
  var A =
    app.activeViewer && app.activeViewer.type === ViewerType.VIEWER_COMPOSITION;
  if (A) {
    app.activeViewer.setActive();
  }
  return A;
}
function screenShot(thisObj) {
  try {
    function trimFolderPath(loc) {
      var imageLoc = loc.toString();
      var macLoc = imageLoc.substring(0, imageLoc.lastIndexOf("/") + 1);
      if (macLoc.length < 1) {
        return imageLoc.substring(0, imageLoc.lastIndexOf("\\") + 1);
      } else {
        return macLoc;
      }
    }
    function storeRenderQueue() {
      var checkeds = [];
      for (var p = 1; p <= app.project.renderQueue.numItems; p++) {
        if (app.project.renderQueue.item(p).status == RQItemStatus.RENDERING) {
          checkeds.push("rendering");
          break;
        } else {
          if (app.project.renderQueue.item(p).status == RQItemStatus.QUEUED) {
            checkeds.push(p);
            app.project.renderQueue.item(p).render = false;
          }
        }
      }
      return checkeds;
    }
    function restoreRenderQueue(checkedItems) {
      for (var q = 0; q < checkedItems.length; q++) {
        app.project.renderQueue.item(checkedItems[q]).render = true;
      }
    }
    function getFolderPath() {
      if (app.settings.haveSetting("MoJo", "screenshot_folderPath")) {
        var path = app.settings.getSetting("MoJo", "screenshot_folderPath");
        if (Folder(path).exists) {
          return path;
        } else {
          return null;
        }
      }
    }
    function saveSettings(imagePath, fullPath) {
      app.settings.saveSetting(
        "MoJo",
        "screenshot_folderPath",
        trimFolderPath(imagePath).toString()
      );
      app.settings.saveSetting(
        "MoJo",
        "screenshot_imagePath",
        imagePath.toString()
      );
      if (fullPath != null) {
        app.settings.saveSetting(
          "MoJo",
          "screenshot_copyPath",
          fullPath.toString()
        );
      }
    }
    function setPref(pref, value) {
      app.settings.saveSetting("MoBar", pref, value);
    }
    function getPref(section, key, d) {
      if (app.settings.haveSetting(section, key)) {
        return app.settings.getSetting(section, key);
      } else {
        return d;
      }
    }
    function pngExport_HQ(theLocation, res) {
      var RQerr =
        "Render Queue is rendering item, please wait for it complete or stop it.";
      app.project.renderQueue.showWindow(false);
      theLocation = decodeURIComponent(theLocation);
      oldRes = app.project.activeItem.resolutionFactor;
      switch (res) {
        case 0:
          app.project.activeItem.resolutionFactor = [1, 1];
          break;
        case 1:
          app.project.activeItem.resolutionFactor = [2, 2];
          break;
        case 2:
          app.project.activeItem.resolutionFactor = [3, 3];
          break;
        default:
          break;
      }
      var RQbackup = storeRenderQueue();
      if (RQbackup[RQbackup.length - 1] == "rendering") {
        showAlertWindow(RQerr);
      } else {
        var autoS = app.preferences.getPrefAsLong(
          "Auto Save",
          "Enable Auto Save RQ2",
          PREFType.PREF_Type_MACHINE_INDEPENDENT
        );
        if (autoS == 1) {
          app.preferences.saveToDisk();
          app.preferences.reload();
        }
        app.executeCommand(2104);
        app.project.renderQueue.item(
          app.project.renderQueue.numItems
        ).render = true;
        var templateTemp = app.project.renderQueue
          .item(app.project.renderQueue.numItems)
          .outputModule(1).templates;
        var setPNG = app.project.renderQueue
          .item(app.project.renderQueue.numItems)
          .outputModule(1).templates[templateTemp.length - 1];
        app.project.renderQueue
          .item(app.project.renderQueue.numItems)
          .outputModule(1)
          .applyTemplate(setPNG);
        app.project.renderQueue
          .item(app.project.renderQueue.numItems)
          .outputModule(1).file = new File(theLocation);
        var finalpath = app.project.renderQueue
          .item(app.project.renderQueue.numItems)
          .outputModule(1).file.fsName;
        app.project.renderQueue.render();
        app.project.renderQueue.item(app.project.renderQueue.numItems).remove();
        if (autoS == 1) {
          app.preferences.saveToDisk();
          app.preferences.reload();
        }
        if (RQbackup != null) {
          restoreRenderQueue(RQbackup);
        }
        app.activeViewer.setActive();
        app.project.activeItem.resolutionFactor = oldRes;
        return finalpath;
      }
    }
    function ProgressBar(min, max, current) {
      function updateGraphics() {
        if (!_isVisible) {
          return;
        }
        _window.update();
      }
      this.testInfos = "Exporting images... :current of :max";
      this.constructor = function (min, max, current) {
        _this = this;
        _isVisible = false;
        _real = { current: current, max: max, min: min };
        _cursor = { current: 0, max: 100, min: 0 };
        _cursor.max = _real.max - _real.min + 1;
        _window = new Window("palette", "Export Screenshot", undefined, {
          borderless: "not quite true",
          resizeable: false
        });
        _window.preferredSize = [420, 40];
        _progressBar = _window.add(
          "progressbar",
          undefined,
          _cursor.min,
          _cursor.max
        );
        _progressBar.preferredSize.width = 400;
        _progressBar.show();
        _infos = _window.add("statictext", undefined, "Loading, please wait", {
          justify: "center"
        });
        _infos.preferredSize = [400, 17];
        this.update(current);
        return this;
      };
      this.start = function () {
        _isVisible = true;
        this.update(_real.current);
        _window.show();
      };
      this.end = function () {
        _window.hide();
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
      return this.constructor(min, max, current);
    }
    function revealFile(filePath) {
      if (filePath instanceof File) {
        filePath = filePath.fsName;
      }
      if (typeof filePath !== "string") {
        showAlertWindow("Invalid path!");
        return;
      }
      var command =
        $.os.indexOf("Windows") > -1 ? "Explorer /select, " : "open -R ";
      system.callSystem(command + '"' + filePath + '"');
    }
    function pad(num, size) {
      var s = "00000" + num;
      return s.substr(s.length - size);
    }
    function getLocation() {
      var op = $.os;
      var match = op.indexOf("Windows");
      if (match != -1) {
        var location = "~/Desktop/";
      } else {
        var location = "~/Desktop/";
      }
      return location;
    }
    function setBG(myComp, status) {
      var num = myComp.numLayers;
      if (status) {
        var compBG = myComp.bgColor;
        var myShapeLayer = myComp.layers.addShape();
        myShapeLayer.selected = true;
        myShapeLayer.property("Position").setValue([0, 0]);
        myShapeLayer.name = "temp_bg";
        myShapeLayer.position.setValue([myComp.width / 2, myComp.height / 2]);
        try {
          myShapeLayer.moveAfter(myComp.layer(num + 1));
        } catch (error) {}
        var myRectSize = [myComp.width, myComp.height];
        var myShapeLayerContents = myShapeLayer.property(
          "ADBE Root Vectors Group"
        );
        var myShapeGroup =
          myShapeLayerContents.addProperty("ADBE Vector Group");
        myShapeGroup.name = "Rectangle 1";
        var myRect = myShapeGroup
          .property("ADBE Vectors Group")
          .addProperty("ADBE Vector Shape - Rect");
        myRect.property("ADBE Vector Rect Size").setValue(myRectSize);
        var myShapeFill = myShapeGroup
          .property("ADBE Vectors Group")
          .addProperty("ADBE Vector Graphic - Fill");
        myShapeFill.property("ADBE Vector Fill Color").setValue(compBG);
      } else {
        var layer = myComp.layer(num);
        if (layer.name == "temp_bg") {
          layer.remove();
        }
      }
    }
    var ctrlKey = ScriptUI.environment.keyboardState.ctrlKey;
    var metaKey = ScriptUI.environment.keyboardState.metaKey;
    if (ctrlKey === true || metaKey === true) {
      var comp = activateCompViewer() ? app.project.activeItem : null;
      if (!comp || !(comp instanceof CompItem || comp == null)) {
        return;
      }
      var loc = getLocation();
      var num = Math.round(comp.time * comp.frameRate);
      loc = loc + comp.name + "-" + pad(num, 4) + ".png";
      var fullPath = pngExport_HQ(loc, 0);
      revealFile(fullPath);
      return;
    }
    var palette = new Window("palette");
    palette.text = "Save Screenshot";
    palette.orientation = "column";
    palette.alignChildren = ["center", "top"];
    palette.spacing = 10;
    palette.margins = 16;
    var panel1 = palette.add("panel", undefined, undefined, { name: "panel1" });
    panel1.text = "Options";
    panel1.orientation = "column";
    panel1.alignChildren = ["left", "top"];
    panel1.spacing = 10;
    panel1.margins = [10, 16, 10, 10];
    var dropdown1_array = ["Active Comp", "Selected Comps"];
    var dropdown1 = panel1.add("dropdownlist", undefined, undefined, {
      items: dropdown1_array,
      name: "dropdown1"
    });
    dropdown1.selection = 0;
    dropdown1.preferredSize.width = 137;
    var group1 = panel1.add("group", undefined, { name: "group1" });
    group1.orientation = "column";
    group1.alignChildren = ["left", "center"];
    group1.spacing = 6;
    group1.margins = [2, 0, 0, 0];
    var checkbox1 = group1.add("checkbox", undefined, undefined, {
      name: "checkbox1"
    });
    checkbox1.text = "Transparent image";
    checkbox1.value = true;
    var checkbox2 = group1.add("checkbox", undefined, undefined, {
      name: "checkbox2"
    });
    checkbox2.text = "Open saved folder";
    checkbox2.value = true;
    var button1 = palette.add("button", undefined, undefined, {
      name: "button1"
    });
    button1.text = "Save Images";
    button1.preferredSize.width = 137;
    dropdown1.selection = getPref("MoBar", "ss-selection", 0);
    checkbox1.value =
      getPref("MoBar", "ss-trans", "true") === "true" ? true : false;
    checkbox2.value =
      getPref("MoBar", "ss-open", "true") === "true" ? true : false;
    palette.layout.resize();
    palette.onResizing = palette.onResize = function () {
      this.layout.resize();
    };
    if (palette instanceof Window) {
      palette.show();
    }
    button1.onClick = function () {
      if (dropdown1.selection.index == 0) {
        var comp = activateCompViewer() ? app.project.activeItem : null;
        if (!comp || !(comp instanceof CompItem || comp == null)) {
          showAlertWindow("Please make sure that you have an active composition!");
          return;
        }
        comp = app.project.activeItem;
        comp.openInViewer();
        if (!checkbox1.value) {
          setBG(comp, true);
        }
        folderPath = getFolderPath();
        if (folderPath != null) {
          var theLocation = new File(
            folderPath.toString() + comp.name + ".png"
          ).saveDlg(["Title"], ["PNG with Alpha:*.png"]);
        } else {
          var theLocation = new File(comp.name).saveDlg(
            ["Title"],
            ["PNG with Alpha:*.png"]
          );
        }
        if (theLocation != null) {
          var fullPath = pngExport_HQ(theLocation, 0);
          saveSettings(theLocation, fullPath);
          if (checkbox2.value) {
            revealFile(fullPath);
          }
          palette.close();
        }
        if (!checkbox1.value) {
          setBG(comp, false);
        }
      } else {
        var mySelectedItems = [];
        for (var i = 1; i <= app.project.numItems; i++) {
          if (
            app.project.item(i).selected &&
            app.project.item(i) instanceof CompItem
          ) {
            mySelectedItems[mySelectedItems.length] = app.project.item(i);
          }
        }
        if (mySelectedItems.length > 0) {
          curSelection = mySelectedItems[0];
          curSelection.openInViewer();
          folderPath = getFolderPath();
          if (folderPath != null) {
            var theLocation = new File(
              folderPath.toString() + curSelection.name + ".png"
            ).saveDlg(["Title"], ["PNG with Alpha:*.png"]);
          } else {
            var theLocation = new File(curSelection.name).saveDlg(
              ["Title"],
              ["PNG with Alpha:*.png"]
            );
          }
          if (theLocation != null) {
            palette.close();
            var pb = new ProgressBar(1, mySelectedItems.length, 1);
            pb.start();
            for (var k = 0; k < mySelectedItems.length; k++) {
              var mySelection = mySelectedItems[k];
              mySelection.openInViewer();
              if (!checkbox1.value) {
                setBG(mySelection, true);
              }
              if (k > 0) {
                theLocation = decodeURIComponent(theLocation);
                var newLoc =
                  theLocation.substring(0, theLocation.lastIndexOf("/") + 1) +
                  mySelection.name +
                  ".png";
                if (newLoc.length < 1) {
                  newLoc =
                    theLocation.substring(
                      0,
                      theLocation.lastIndexOf("\\") + 1
                    ) +
                    mySelection.name +
                    ".png";
                }
                theLocation = newLoc;
              }
              var fullPath = pngExport_HQ(
                theLocation,
                0
              );
              saveSettings(theLocation, fullPath);
              pb.update(k + 1);
              if (!checkbox1.value) {
                setBG(mySelection, false);
              }
            }
            pb.end();
            if (checkbox2.value) {
              revealFile(fullPath);
            }
          }
        } else {
          showAlertWindow(
            "Please make sure that you have some selected compositions!"
          );
        }
      }
    };
    palette.onClose = function () {
    };
  } catch (err) {
    showAlertWindow(err);
  }
}
var autoS = 1;