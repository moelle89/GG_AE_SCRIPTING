(function (thisObj) {
   function scriptBuildUI(thisObj) {
      function trimAM(str) {
         return str.replace(/^\s+/, "").replace(/\s+$/, "");
      }

      function RadioButtonThreeAM() {
         noOfItemsTitleAM.text = "";
         multiLineItemListEditTextAM.helpTip = "Input Items Array";
         dropdownItemTitleAM.text = "Dropdown Items Array :";
         incrementRadioButtonGroupAM.visible = false;
         multiLineItemListEditTextAM.visible = true;
      }
      function TrimEffectNameEditTextAM() {
         if (trimAM(effectNameEditTextAM.text) == "") {
            effectNameEditTextAM.text = "Dropdown Effect Helper";
         }
         else {
            effectNameEditTextAM.text = trimAM(effectNameEditTextAM.text);
         }
      }
      function ExecuteAM() {
         var EffectNameAM = effectNameEditTextAM.text;
         if (EffectNameAM == "") {
            EffectNameAM = "Dropdown Effect Helper";
         }
            if (arrayItemsRadioButtonAM.value == true) {
               try {
                  var onlyString = 0;
                  var onlyNumber = 0;
                  var mixed = 0;
                  var ItemListAM = eval(multiLineItemListEditTextAM.text);
                  for (var checkEachElement = 0; checkEachElement < ItemListAM.length; checkEachElement++) {
                     if (typeof ItemListAM[checkEachElement] === "string") {
                        onlyString++;
                     }
                     if (typeof ItemListAM[checkEachElement] === "number") {
                        onlyNumber++;
                        ItemListAM[checkEachElement] = "" + ItemListAM[checkEachElement];
                     }
                     if (typeof ItemListAM[checkEachElement] === "undefined") {
                        ItemListAM[checkEachElement].splice(checkEachElement, 1);
                        checkEachElement--;
                     }
                  }
                  for (var removeEmpty = 0; removeEmpty < ItemListAM.length; removeEmpty++) {
                     var currentArrayItem = ItemListAM[removeEmpty];
                     if (currentArrayItem == "") {
                        ItemListAM.splice(removeEmpty, 1);
                        removeEmpty--;
                     }
                  }
                  for (var removeDup = 0; removeDup < ItemListAM.length; removeDup++) {
                     var currentArrayItem = ItemListAM[removeDup];
                     for (var compareDup = 0; compareDup < ItemListAM.length; compareDup++) {
                        if (removeDup != compareDup) {
                           if (ItemListAM[removeDup] == ItemListAM[compareDup]) {
                              ItemListAM.splice(compareDup, 1);
                              compareDup--;
                           }
                        }
                     }
                  }
               } catch (Err) {
                  alert(Err.description + " in the list.\r\nPlease Make sure array items are only numbers or/and strings.", "Warning");
                  return false;
               }
            }
            var project = app.project;
            var activeItem = project.activeItem;
            var selectedLayers = activeItem.selectedLayers;
            var dropDownItems = "";
            for (var i = 0; i < ItemListAM.length; i++) {
               dropDownItems = dropDownItems.concat("\"" + ItemListAM[i] + "\",");
            }
            dropDownItems = dropDownItems.substr(0, dropDownItems.length - 1);
            if (((selectedLayers.length == 0) || (selectedLayers[selectedLayers.length - 1].matchName == "ADBE Camera Layer")) || (selectedLayers[selectedLayers.length - 1].matchName == "ADBE Light Layer")) {
               var AddLayerAM = app.project.activeItem.layers.addText();
               AddLayerAM.name = "Dropdown Effect Helper";
               var AddDropdownMenuAM = AddLayerAM.property("ADBE Effect Parade").addProperty("ADBE Dropdown Control");
               AddDropdownMenuAM.property(1).setPropertyParameters(ItemListAM);
               activeItem.layer(1).property("ADBE Text Properties").property("ADBE Text Document").expression = "";
               activeItem.layer(1).property("ADBE Text Properties").property("ADBE Text Document").expression = "var dropDownItems = [" + dropDownItems + "];\r\n\r\ndropDownItems[effect(\"" + EffectNameAM + "\")(1)-1];";
            }
            else {
               var numberOfExistingProperties = selectedLayers[selectedLayers.length - 1].property("ADBE Effect Parade").numProperties;
               if (numberOfExistingProperties == 0) {
                  var newlyAddedDropdownEffect = numberOfExistingProperties + 1;
                  var AddDropdownMenuAM = selectedLayers[selectedLayers.length - 1].property("ADBE Effect Parade").addProperty("ADBE Dropdown Control");
                  selectedLayers[selectedLayers.length - 1].property("ADBE Effect Parade").property(newlyAddedDropdownEffect).property(1).setPropertyParameters(ItemListAM);
               }
               else {
                  var effectFound = 0;
                  for (var i = 1; i <= numberOfExistingProperties; i++) {
                     var currentEffect = selectedLayers[selectedLayers.length - 1].property("ADBE Effect Parade").property(i);
                     var currentEffectName = currentEffect.name;
                     var currentEffectMatchName = currentEffect.matchName.substring(0, 9);
                     if ((currentEffectMatchName == "Pseudo/@@") && (currentEffectName == EffectNameAM)) {
                        currentEffect.property(1).setPropertyParameters(ItemListAM);
                        selectedLayers[selectedLayers.length - 1].property("ADBE Effect Parade").property(i).name = EffectNameAM;
                        effectFound++;
                        break;
                     }
                  }
                  if (effectFound == 0) {
                     var newlyAddedDropdownEffect = numberOfExistingProperties + 1;
                     var AddDropdownMenuAM = selectedLayers[selectedLayers.length - 1].property("ADBE Effect Parade").addProperty("ADBE Dropdown Control");
                     selectedLayers[selectedLayers.length - 1].property("ADBE Effect Parade").property(newlyAddedDropdownEffect).property(1).setPropertyParameters(ItemListAM);
                  }
               }
               if (selectedLayers[selectedLayers.length - 1] instanceof TextLayer) {
                  selectedLayers[selectedLayers.length - 1].property("ADBE Text Properties").property("ADBE Text Document").expression = "";
                  selectedLayers[selectedLayers.length - 1].property("ADBE Text Properties").property("ADBE Text Document").expression = "var dropDownItems = [" + dropDownItems + "];\r\n\r\ndropDownItems[effect(\"" + EffectNameAM + "\")(1)-1];";
               }
            }
      }
      var win = thisObj instanceof Panel ? thisObj : new Window("palette", "AM_Dropdown Effect Helper", undefined, { resizeable: true });
      win.spacing = 0;
      win.orientation = "column";
      var dropdownMenuPanelAM = win.add("panel", undefined, "AM_Dropdown Effect Helper");
      dropdownMenuPanelAM.spacing = 3;
      dropdownMenuPanelAM.alignChildren = ["left", "left"];
      dropdownMenuPanelAM.alignment = ["left", "top"];
      dropdownMenuPanelAM.add("statictext", undefined, "Rename Effect :");
      var effectNameEditTextAM = dropdownMenuPanelAM.add("edittext", [0, 0, 250, 30], "Dropdown Effect Helper");
      var dropdownItemTitleGroupAM = dropdownMenuPanelAM.add("group");
      dropdownItemTitleGroupAM.alignment = ["fill", "fill"];
      dropdownItemTitleGroupAM.orientation = "row";
      var dropdownItemTitleAM = dropdownItemTitleGroupAM.add("statictext");
      var noOfItemsTitleAM = dropdownItemTitleGroupAM.add("statictext");
      noOfItemsTitleAM.text = "No.Of Items : ";
      dropdownItemTitleAM.text = "Dropdown Items Name :";
      noOfItemsTitleAM.alignment = ["right", "right"];
      var itemInputGroupAM = dropdownMenuPanelAM.add("group");
      itemInputGroupAM.alignChildren = ["left", "top"];
      itemInputGroupAM.orientation = "stack";
      var incrementRadioButtonGroupAM = itemInputGroupAM.add("group");
      incrementRadioButtonGroupAM.orientation = "column";
      incrementRadioButtonGroupAM.alignment = ["left", "top"];
      var singleNameItemGroupAM = incrementRadioButtonGroupAM.add("group");
      singleNameItemGroupAM.orientation = "row";
      var singleLineItemListEditTextAM = singleNameItemGroupAM.add("edittext", [0, 0, 175, 30], "");
      var noOfItemsEditTextAM = singleNameItemGroupAM.add("edittext {justify:\"center\"}", [0, 0, 65, 30], "");
      var multiLineItemListEditTextAM = itemInputGroupAM.add("edittext", [0, 0, 250, 60], "", { multiline: true });
      multiLineItemListEditTextAM.visible = false;
      var radioGroupAM = dropdownMenuPanelAM.add("group");
      radioGroupAM.alignment = ["center", "center"];
      var arrayItemsRadioButtonAM = radioGroupAM.add("radiobutton", undefined, "Array");
      arrayItemsRadioButtonAM.value = true;
      dropdownMenuPanelAM.add("panel", [0, 0, 250, 1]);
      var executeGroupAM = dropdownMenuPanelAM.add("group", [0, 10, 50, 50]);
      executeGroupAM.alignment = ["fill", "fill"];
      executeGroupAM.orientation = "row";
      var itemIndexAM = executeGroupAM.add("edittext {justify:\"center\"}", [0, 0, 65, 30], "");
      itemIndexAM.visible = false;
      var executeButtonAM = executeGroupAM.add("button", [0, 0, 70, 30], "Execute...!");
      executeButtonAM.alignment = ["center", "center"];
      effectNameEditTextAM.helpTip = "Rename Dropdown Menu Control Effect";
      singleLineItemListEditTextAM.helpTip = "Input Items Name";
      noOfItemsEditTextAM.helpTip = "Number of Dropdown Items";
      win.onResizing = win.onResize = function () {
         this.layout.resize();
      };
      executeButtonAM.onClick = function () {
         app.beginUndoGroup("Dropdown Helper");
         TrimEffectNameEditTextAM();
         ExecuteAM();
         app.endUndoGroup();
         this.active = true;
         this.active = false;
      };
      noOfItemsEditTextAM.onChanging = function () {
         this.text = this.text.replace(/[^\d]/g, "");
      };
      itemIndexAM.onChanging = function () {
         this.text = this.text.replace(/[^\d]/g, "");
      };
      RadioButtonThreeAM();
      win instanceof Window ? (win.center(), win.show()) : (win.layout.layout(true), win.layout.resize());
   }
   scriptBuildUI(thisObj);
})(this);