function AM_DropdownEffectHelper(effectName, itemList, isItemArray) {
   function trimAM(str) {
      return str.replace(/^\s+/, "").replace(/\s+$/, "");
   }

   function executeAM() {
      var EffectNameAM = effectNameAM;
      if (EffectNameAM == "") {
         EffectNameAM = "Dropdown Effect Helper";
      }

      if (isItemArray) {
         try {
            var onlyString = 0;
            var onlyNumber = 0;
            var mixed = 0;
            var ItemListAM = itemListAM;

            // Validate and clean up the array items
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
            // Handle the error or return an error message
            return "Error: " + Err.description + " in the list.\r\nPlease Make sure array items are only numbers or/and strings.";
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
      } else {
         var numberOfExistingProperties = selectedLayers[selectedLayers.length - 1].property("ADBE Effect Parade").numProperties;
         if (numberOfExistingProperties == 0) {
            var newlyAddedDropdownEffect = numberOfExistingProperties + 1;
            var AddDropdownMenuAM = selectedLayers[selectedLayers.length - 1].property("ADBE Effect Parade").addProperty("ADBE Dropdown Control");
            selectedLayers[selectedLayers.length - 1].property("ADBE Effect Parade").property(newlyAddedDropdownEffect).property(1).setPropertyParameters(ItemListAM);
         } else {
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

      // You can handle the result here or return a success message
      return "Dropdown Effect Helper applied successfully!";
   }

   var effectNameAM = trimAM(effectName) || "Dropdown Effect Helper";
   var itemListAM = isItemArray ? itemList : [itemList]; // Convert to array if not already

   return executeAM();
}

// Example usage:
var effectName = "MyDropdown";
var itemList = ["Item 1", "Item 2", "Item 3"];
var isItemArray = true;

var result = AM_DropdownEffectHelper(effectName, itemList, isItemArray);
alert(result);
