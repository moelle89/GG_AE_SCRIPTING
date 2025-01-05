try {
   // Configuration object for better maintainability
   var CONFIG = {
      MAX_TEXT_LENGTH: 300,
      RATIO_THRESHOLDS: [
         { ratio: 10, multiplier: 8 },
         { ratio: 7, multiplier: 3 },
         { ratio: 4, multiplier: 1.8 },
         { ratio: 3, multiplier: 1.1 },
         { ratio: 2, multiplier: 1 },
         { ratio: 1, multiplier: 0.8 }
      ],
      LINE_CHARS: {
         SHORT_TEXT_THRESHOLD: 25,
         SHORT_TEXT_MULTIPLIER: 15,
         NORMAL_TEXT_MULTIPLIER: 18
      }
   };

   // Get source data from input template
   const myData = footage("input_template.json").sourceData;

   // Get the selected option from the TEXT_LINK effect
   const option = effect("TEXT_LINK")("pick your component");

   // Define components and fallback fonts
   const components = {
      1: myData.Comp.title,
      2: myData.Comp.subtext,
      4: myData.Comp.call2action,
      5: myData.Comp.call2action_link,
      7: myData.Comp.source,
   };

   const fallbackFont = {
      1: "Archivo-ExtraBold",
      2: "Archivo-Medium",
      4: "Archivo-SemiBold",
      5: "Archivo-ExtraBold",
      7: "Archivo-Bold",
   };

   // Calculate dimensions and ratio
   function calculateDimensions(textLinkEffect) {
      var scaleToComp = textLinkEffect("AUTO-SCALE");
      var compW = thisComp.width;
      var compH = thisComp.height;
      var tWidth = scaleToComp != 1 ? textLinkEffect("WIDTH") : compW;
      var tHeight = scaleToComp != 1 ? textLinkEffect("HEIGHT") : compH;

      return {
         width: tWidth,
         height: tHeight,
         minDimension: Math.min(tWidth, tHeight),
         ratio: Math.round(Math.max(tWidth, tHeight) / Math.min(tWidth, tHeight))
      };
   }

   // Calculate multiplier based on ratio
   function calculateMultiplier(ratio, textLinkEffect) {
      if (textLinkEffect("CUSTOM MULTIPL.") == 1) {
         return textLinkEffect("Multipl.");
      }

      // Loop through thresholds array
      for (var i = 0; i < CONFIG.RATIO_THRESHOLDS.length; i++) {
         if (ratio >= CONFIG.RATIO_THRESHOLDS[i].ratio) {
            return CONFIG.RATIO_THRESHOLDS[i].multiplier;
         }
      }
      return CONFIG.RATIO_THRESHOLDS[CONFIG.RATIO_THRESHOLDS.length - 1].multiplier;
   }

   // Get text and its length based on the selected option
   let { text, font } = components[option];
   let txtL = text.length;

   // Limit the length of the string
   if (txtL > CONFIG.MAX_TEXT_LENGTH) {
      text = text.substr(0, CONFIG.MAX_TEXT_LENGTH).replace(/ \S*$/, "") + " ...";
      txtL = text.length;
   }

   // Get TEXT_LINK effect values
   const textLinkEffect = effect("TEXT_LINK");
   var dimensions = calculateDimensions(textLinkEffect);
   var multiplier = calculateMultiplier(dimensions.ratio, textLinkEffect);

   // Calculate line parameters
   var lineChars = -0.00014 * dimensions.minDimension + 0.15;
   var baseMultiplier = text.length <= CONFIG.LINE_CHARS.SHORT_TEXT_THRESHOLD
      ? CONFIG.LINE_CHARS.SHORT_TEXT_MULTIPLIER
      : CONFIG.LINE_CHARS.NORMAL_TEXT_MULTIPLIER;
   var lineLength = Math.round(baseMultiplier * multiplier + text.length * lineChars);

   // Split text into lines
   var finStr = "";
   text.split("\r").forEach((line) => {
      var outStr = "";
      var newLine = "";
      line.split(" ").forEach((word) => {
         const newLineWithWord = newLine + (newLine ? " " : "") + word;
         if (newLineWithWord.length > lineLength) {
            if (outStr !== "") outStr += "\r";
            outStr += newLine;
            newLine = word;
         } else {
            newLine = newLineWithWord;
         }
      });
      if (newLine !== "") {
         if (outStr !== "") outStr += "\r";
         outStr += newLine;
      }
      finStr += outStr + "\r";
   });

   // Check if there is text available for the selected option
   finStr = finStr.trim() !== "" ? finStr : "No text available";

   // Get the font name based on the component and use fallback if needed
   const cFont = font || fallbackFont[option];
   const bFont = fallbackFont[option];

   // Import function with supported fonts and check font availability
   const { checkFontAvailability } = footage("fontlib.jsx").sourceData.getFunctions();
   const finalTypo = checkFontAvailability(cFont) ? cFont : bFont;

   // Set the font and text for the layer
   style.setFont(finalTypo).setText(finStr);
} catch (err) {
   // Handle errors (optional)
}