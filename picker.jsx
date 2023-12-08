﻿var mainWindow = new Window("palette", "Colour Button", undefined);
mainWindow.orientation = "column";
var colourOneButton = mainWindow.add("button", undefined, "");
colourOneButton.size = [40, 40];
colourOneButton.fillBrush = colourOneButton.graphics.newBrush(colourOneButton.graphics.BrushType.SOLID_COLOR, [.9765, .3804, .3882]);
colourOneButton.onDraw = customDraw;

mainWindow.center();
mainWindow.show();

var hex = "0xF96163";

colourOneButton.onClick = function() {
    alert(GoodBoyNinjaColorPicker([1,1,1]));
    if(colorPickerRes != -1) {
        var r = colorPickerRes >> 16;
        var g = (colorPickerRes & 0x00ff00) >> 8;
        var b = colorPickerRes & 0xff;
        $.writeln("selected a colour");
        hex = colorPickerRes;
        updateButtonColour(colourOneButton, [r/255, g/255, b/255]);
        } else {
        $.writeln("did not select a colour");
            }
    }

function customDraw()
{ with( this ) {
graphics.drawOSControl();
graphics.rectPath(0,0,size[0],size[1]);
graphics.fillPath(fillBrush);

}}

function updateButtonColour(button, rgbArray) {
        button.fillBrush = button.graphics.newBrush(button.graphics.BrushType.SOLID_COLOR, rgbArray);
        button.onDraw = customDraw;
        button.enabled = false;
        button.enabled = true;
    }


function rgbToHex(rgb) {
    return "#"+((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1);
    }

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function GoodBoyNinjaColorPicker(startValue){
  // find the active comp
  var crntComp = app.project.activeItem;
  if (!crntComp || !(crntComp instanceof CompItem)) {
    alert("Please open a comp first");
    return [];
  }

  // add a temp null;
  var tempLayer = crntComp.layers.addShape();
  var newColorControl = tempLayer("ADBE Effect Parade").addProperty("ADBE Color Control");
  var theColorProp = newColorControl("ADBE Color Control-0001");

  // set the value given by the function arguments
  if (startValue && startValue.length == 3) {
    theColorProp.setValue(startValue);
  }

  // prepare to execute
  var editValueID = 2240 // or app.findMenuCommandId("Edit Value...");
  theColorProp.selected = true;
  app.executeCommand(editValueID);

  // harvest the result
  var result = [theColorProp.value[0],theColorProp.value[1],theColorProp.value[2]];
  updateButtonColour(colourOneButton, [theColorProp.value[0], theColorProp.value[1], theColorProp.value[2]]);

  // remove the null
  if (tempLayer) {
    tempLayer.remove();
  }

  return result;
}