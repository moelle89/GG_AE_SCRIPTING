(function () {
   var compName = "BPLATE_square";		//Number of items (footages) in current AE Project

   var newFrameRate = 1;
   runScript();

   // Function to find the index of an item by name
   function getItem(theName) {
      for (var i = 1; i <= app.project.numItems; i++) {
         if (app.project.item(i) && app.project.item(i).name == theName) {
            return app.project.item(i);
         }
      }
      return null;
   }

   //Change Framerate ========================================================================================
   function changeFramerate(avItem) {
      avItemType = avItem.typeName;
      if (avItemType === 'Folder') {        //Skip folders
         return;
      }
      if (avItem.frameRate != newFrameRate) {
         if (avItemType === 'Composition') {       //composition
            avItem.frameRate = newFrameRate;
         } else {                                    //footage
            if (avItem.frameRate === 0 && avItem.frameDuration === 1) {     //Skip images
               return;
            }
            avItem.mainSource.conformFrameRate = newFrameRate;
            avItem.mainSource.proxyFrameRate = newFrameRate;
         }
      }
   }

   //Core Functionality ========================================================================================
   function runScript() {
      var currentObject = new Object();
      //If user hasn't selected anything, change framerates for all footages
      currentObject = getItem(compName);
      changeFramerate(currentObject);
   }
})();
