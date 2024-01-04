// Move Anchor Point Version 2.0
// An After Effects Script by Jesse Toula
// BatchFrame.com 2013 

// I would like to thank Oplique  for helping me to test and improve this script


// modified by Manuel Moellmann

// set up button clicks. Each button calls the moveAnchor
// function that uses simple coordinates to represent the 
// different anchor point positions. 0 = top or left, 1 = middle
// 2 = bottom or right
// In version 2, Three new arguments were added to the moveAnchor function
// the first is Ignore Masks. It passes either true or false. The second two are the 
// custom X and Y points. You can see that only the last line uses the custom points.
apCheck.onClick = function () {
    if (apCheck.value) { 
        w.g.tg.tl.onClick = function () { app.beginUndoGroup("Move Anchor - Top Left"); setAnchorPoint(1); app.endUndoGroup(); }
        w.g.tg.tm.onClick = function () { app.beginUndoGroup("Move Anchor - Top Middle"); setAnchorPoint(2); app.endUndoGroup(); }
        w.g.tg.tr.onClick = function () { app.beginUndoGroup("Move Anchor - Top Right"); setAnchorPoint(3); app.endUndoGroup(); }

        w.g.mg.tl.onClick = function () { app.beginUndoGroup("Move Anchor - Middle Left"); setAnchorPoint(4); app.endUndoGroup(); }
        w.g.mg.tm.onClick = function () { app.beginUndoGroup("Move Anchor - Middle Middle"); setAnchorPoint(5); app.endUndoGroup(); }
        w.g.mg.tr.onClick = function () { app.beginUndoGroup("Move Anchor - Middle Right"); setAnchorPoint(6); app.endUndoGroup(); }

        w.g.bg.tl.onClick = function () { app.beginUndoGroup("Move Anchor - Bottom Left"); setAnchorPoint(7); app.endUndoGroup(); }
        w.g.bg.tm.onClick = function () { app.beginUndoGroup("Move Anchor - Bottom Middle"); setAnchorPoint(8); app.endUndoGroup(); }
        w.g.bg.tr.onClick = function () { app.beginUndoGroup("Move Anchor - Bottom Right"); setAnchorPoint(9); app.endUndoGroup(); }

    } else {

        w.g.tg.tl.onClick = function () { app.beginUndoGroup("Move Anchor - Top Left"); moveAnchor(0, 0, 0); app.endUndoGroup(); }
        w.g.tg.tm.onClick = function () { app.beginUndoGroup("Move Anchor - Top Middle"); moveAnchor(1, 0, 0); app.endUndoGroup(); }
        w.g.tg.tr.onClick = function () { app.beginUndoGroup("Move Anchor - Top Right"); moveAnchor(2, 0, 0); app.endUndoGroup(); }

        w.g.mg.tl.onClick = function () { app.beginUndoGroup("Move Anchor - Middle Left"); moveAnchor(0, 1, 0); app.endUndoGroup(); }
        w.g.mg.tm.onClick = function () { app.beginUndoGroup("Move Anchor - Middle Middle"); moveAnchor(1, 1, 0); app.endUndoGroup(); }
        w.g.mg.tr.onClick = function () { app.beginUndoGroup("Move Anchor - Middle Right"); moveAnchor(2, 1, 0); app.endUndoGroup(); }

        w.g.bg.tl.onClick = function () { app.beginUndoGroup("Move Anchor - Bottom Left"); moveAnchor(0, 2, 0); app.endUndoGroup(); }
        w.g.bg.tm.onClick = function () { app.beginUndoGroup("Move Anchor - Bottom Middle"); moveAnchor(1, 2, 0); app.endUndoGroup(); }
        w.g.bg.tr.onClick = function () { app.beginUndoGroup("Move Anchor - Bottom Right"); moveAnchor(2, 2, 0); app.endUndoGroup(); }

    };
};
 
apCheck.onClick();

// Function to remove expressions from specific properties of a layer (Position, Scale, Opacity, Anchor Point, Rotation)
function removeApEx() {

    try {

        // Check if a composition is active
        if (app.project.activeItem instanceof CompItem) {
            var comp = app.project.activeItem;

            // Check if a layer is selected
            if (comp.selectedLayers.length > 0) {
                var selectedLayer = comp.selectedLayers[0];

                // Array of property names to remove expressions from
                var propertiesToRemove = ["Position", "Anchor Point"];

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

            } else {
                $.writeln("removeExpressions - no active layer");
            }
        }
    } catch (error) {
        $.writeln(error);
        // Expected output: ReferenceError: nonExistentFunction is not defined
        // (Note: the exact output may be browser-dependent)
    }
}



function setAnchorPoint(option) {
    // Check if a composition is active
    if (app.project.activeItem instanceof CompItem) {
        var comp = app.project.activeItem;

        // Check if a layer is selected
        if (comp.selectedLayers.length > 0) {
            var selectedLayer = comp.selectedLayers[0];

            // Object with property names and their corresponding expressions
            var propertiesToAdd = {
                "Anchor Point": 'var s = sourceRectAtTime((outPoint - inPoint) / 2);\
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
		components['+ option + '];'
            };

            // Iterate through specified properties and add expressions
            for (var propertyName in propertiesToAdd) {
                if (propertiesToAdd.hasOwnProperty(propertyName)) {
                    var property = selectedLayer.property(propertyName);

                    // Check if the property exists
                    if (property !== null) {
                        // Add the expression to the property
                        property.expression = propertiesToAdd[propertyName];
                        //property.expressionEnabled = true;
                    }
                    var anchorpoint = selectedLayer.anchorPoint.value;
                    // Set the anchor point to the position
                    selectedLayer.property("Position").setValue(anchorpoint);
                }
            }
        } else {
            alert("Please select a layer.");
        }
    } else {
        alert("Please open a composition.");
    }
}


//Move Anchor Function
function moveAnchor(row, col, ignoreMasks) {
    // Check if a composition is active
    if (app.project.activeItem instanceof CompItem) {
        var comp = app.project.activeItem;
        var comp = app.project.activeItem;
        // get the current position of the time indicator
        var curTime = app.project.activeItem.time;

        // put all selected layers into a vaiable. This vaiable will contain
        // an array of layers.
        if (comp.selectedLayers.length > 0) {
            var theLayers = comp.selectedLayers;
            removeApEx();
            // make sure there are layers selected. If the 'theLayers' array
            // has a length of 0, it does not contain any layers, meaning there
            // are no layers selected
            // loop through for eac hselected layer
            for (num = 0; num < theLayers.length; num++) {
                // set the a variable to the current layer
                var theLayer = theLayers[num];

                // check if a camera layer is a camera
                if (theLayer instanceof CameraLayer) {
                    // if the only layer selected is a camera layer, alert the user
                    // otherwise just skip over it
                    if (theLayers.length == 1) {
                        alert("Move Anchor Point will not change the anchor point of a camera");
                    }
                    // continue tells the script to skip the rest of the loop
                    // and move on to the next iteration
                    continue;
                }


                // set a vairable to alert whether or not there are masks.
                // By default we will assume no masks, then change it to 
                // false if we find any
                var noMasks = true;

                // if the user checked 'Ignore Masks' then we will run the script
                // as if there are none and  the noMasks variable will remain
                // true automatically
                if (ignoreMasks == true) {
                    noMasks = true
                } else {
                    // if there are masks, then we will check if the mask type is NONE.
                    // If there is a mask and the type is not NONE, we will change
                    // noMasks to false.
                    if (theLayer.mask.numProperties != 0) {
                        for (var i = 1; i <= theLayer.mask.numProperties; i++) {
                            if (theLayer.mask(i).maskMode != MaskMode.NONE) {
                                noMasks = false;
                            }
                        }
                    }
                }


                if (noMasks) {
                    // If the value is 0, set the anchor to 0.
                    // if the value is 1, set the anchor to half of the layer width/height
                    // if the value is 2, set the anchor to the width/height of the layer
                    // case 3 was added in version 2 for if a user clicks on the
                    // move to custom point button
                    switch (row) {
                        case 0:
                            var x = 0;
                            break;
                        case 1:
                            var x = (theLayer.sourceRectAtTime(curTime, false).width / 2);
                            break;
                        case 2:
                            var x = (theLayer.sourceRectAtTime(curTime, false).width);
                            break;
                        default:
                    }

                    switch (col) {
                        case 0:
                            var y = 0;
                            break;
                        case 1:
                            var y = (theLayer.sourceRectAtTime(curTime, false).height / 2);
                            break;
                        case 2:
                            var y = (theLayer.sourceRectAtTime(curTime, false).height);
                            break;
                        default:
                    }

                    // if the layer is a text or shape layer, the anchor point's origin
                    // is not at the top left corner. Correct for this by moving the x 
                    // and y points to the top left. 
                    // .sourceRectAtTime() allows you to get the actual sie of the layer
                    // for instance, a text layers width is equal to the width of the
                    // composition, even if the text is not that long. Using
                    // sourceRectAtTime allows to you get the visible width and height
                    if (theLayer instanceof TextLayer || theLayer instanceof ShapeLayer) {
                        x += theLayer.sourceRectAtTime(curTime, false).left;
                        y += theLayer.sourceRectAtTime(curTime, false).top;
                    }

                } else {
                    // if the layer has masks applied, we must find the new dimensions of the layer first
                    // there is not a simple way to do this. We must find the highest and lowest X and Y coordinates for 
                    // each mask applied to the layer, then work based off those dimensions.

                    // vars to hold vert arrays
                    var xBounds = Array();
                    var yBounds = Array();
                    var numMasks = theLayer.mask.numProperties;

                    for (var i = 1; i <= numMasks; i++) {
                        var numVerts = theLayer.mask(i).maskShape.value.vertices.length;
                        if (theLayer.mask(i).maskMode == MaskMode.NONE) { continue; }
                        for (var j = 0; j < numVerts; j++) {
                            var curVerts = theLayer.mask(i).maskShape.valueAtTime(curTime, false).vertices[j];
                            xBounds.push(curVerts[0])
                            yBounds.push(curVerts[1])
                        }
                    }

                    // sort arrays low to high, then get the highest and lowest of each
                    xBounds.sort(function (a, b) { return a - b })
                    yBounds.sort(function (a, b) { return a - b })

                    var xl = xBounds.shift();
                    var xh = xBounds.pop();
                    var yl = yBounds.shift();
                    var yh = yBounds.pop();

                    if (theLayer instanceof TextLayer || theLayer instanceof ShapeLayer) {
                        var xl2 = theLayer.sourceRectAtTime(curTime, false).left;
                        var xh2 = xl2 + theLayer.sourceRectAtTime(curTime, false).width;
                        var yl2 = theLayer.sourceRectAtTime(curTime, false).top;
                        var yh2 = yl2 + theLayer.sourceRectAtTime(curTime, false).height;

                        if (xl < xl2) { xl = xl2; }
                        if (xh > xh2) { xh = xh2; }
                        if (yl < yl2) { yl = yl2; }
                        if (yh > yh2) { yh = yh2; }
                    }

                    switch (row) {
                        case 0:
                            var x = xl;
                            break;
                        case 1:
                            var x = xl + ((xh - xl) / 2);
                            break;
                        case 2:
                            var x = xh;
                            break;
                        default:
                    }

                    switch (col) {
                        case 0:
                            var y = yl;
                            break;
                        case 1:
                            var y = yl + ((yh - yl) / 2);
                            break;
                        case 2:
                            var y = yh;
                            break;
                        default:
                    }
                }



                // check if the anchor point has keyframes
                if (theLayer.anchorPoint.isTimeVarying) {
                    // if ther layer does have anchor point keyframes,
                    // just set a new keyframe for the desired point, no
                    // position correction is applied
                    theComp = app.project.activeItem;
                    theLayer.anchorPoint.setValueAtTime(theComp.time, [x, y]);
                } else {
                    // set a variable equal to the current anchorPoint
                    var curAnchor = theLayer.anchorPoint.value;

                    // calculate the change in the position that will be needed to
                    // keep the layer in the same spot after changing the anchor point.
                    // The move is multiplied by the scale percentage to correct for
                    // layers that have been scalled
                    var xMove = (x - curAnchor[0]) * (theLayer.scale.value[0] / 100);
                    var yMove = (y - curAnchor[1]) * (theLayer.scale.value[1] / 100);

                    var posEx = false;
                    if (theLayer.position.expressionEnabled) {
                        theLayer.position.expressionEnabled = false;
                        posEx = true;
                    }

                    // in order to maintain the proper positions, I found it was best to 
                    // move the layer relative to itself, not the world. In order to do this,
                    // we must parent the layer to a duplicate of itself.
                    var dupLayer = theLayer.duplicate();
                    // in case the layer already has a oarent, wel wil store that value
                    // and use it to reset the layer after the anchor point has been moved.
                    var oldParent = theLayer.parent;
                    // move the duplicate layer to the end to avoid messing with
                    //expressions in the comp.
                    dupLayer.moveToEnd();
                    if (dupLayer.scale.isTimeVarying) {
                        dupLayer.scale.setValueAtTime(app.project.activeItem.time, [100, 100])
                    } else {
                        dupLayer.scale.setValue([100, 100]);
                    }

                    // set the new parent
                    theLayer.parent = dupLayer;

                    // change the anchor point of the current layer
                    theLayer.anchorPoint.setValue([x, y]);

                    // this is inside the anchor point if statement because if the 
                    // anchor point has keyframes, I am not going to change
                    // the position of the layer

                    // check if the current layer has position keyframes
                    if (theLayer.position.isTimeVarying) {
                        var numKeys = theLayer.position.numKeys;

                        // move the layer for each position keyframe to correct
                        // for the anchor point change
                        for (var k = 1; k <= numKeys; k++) {
                            var curPos = theLayer.position.keyValue(k);
                            curPos[0] += xMove;
                            curPos[1] += yMove;
                            theLayer.position.setValueAtKey(k, curPos);
                        }
                    } else {
                        // in this case there are no keyframes on the positoins
                        // so we just store the single position value in a variable
                        var curPos = theLayer.position.value;

                        // then add the xMove andyMove values to their respective
                        // position values
                        theLayer.position.setValue([curPos[0] + xMove, curPos[1] + yMove, curPos[2]]);

                    }
                    // reset the parent of the changed layer
                    theLayer.parent = oldParent;
                    if (posEx) {
                        theLayer.position.expressionEnabled = true;
                    }


                    // remove the duplicate layer that was used for parenting
                    dupLayer.remove();
                }
                var anchorpoint = theLayer.anchorPoint.value;
                // Set the anchor point to the position
                theLayer.property("Position").setValue(anchorpoint);
            }
        } else {
            alert("Please select a layer.");
            return;
        }
    } else {
        alert("Please open a composition.");
    }
}