   try {
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
         4: "Archivo-Medium",
         5: "Archivo-ExtraBold",
         7: "Archivo-Bold",
      };

      // Get text and its length based on the selected option
      let { text, font } = components[option];
      let txtL = text.length;

      // Limit the length of the string
      const maxLength = 300;
      if (txtL > maxLength) {
         const truncatedText = text.substr(0, maxLength).replace(/ \S*$/, "") + " ...";
         txtL = truncatedText.length;
         text = truncatedText;
      }

      // Get TEXT_LINK effect values
      const textLinkEffect = effect("TEXT_LINK");
      const customMultipl = textLinkEffect("CUSTOM MULTIPL.");
      const scaleToComp = textLinkEffect("AUTO-SCALE");

      // Get composition dimensions
      const compW = thisComp.width;
      const compH = thisComp.height;
      const tWidth = scaleToComp != 1 ? textLinkEffect("WIDTH") : compW;
      const tHeight = scaleToComp != 1 ? textLinkEffect("HEIGHT") : compH;
      const x = Math.min(tWidth, tHeight);
      const ratio = Math.round(Math.max(tWidth, tHeight) / Math.min(tWidth, tHeight));

      let multipl;
      if (customMultipl == 1) {
         multipl = textLinkEffect("Multipl.");
      } else {
         multipl = ratio >= 4 ? 1.8 : 1.7;
         if (ratio <= 3) {
            multipl = 1.10;
         }
         if (ratio <= 2) {
            multipl = 0.85;
         }
         if (ratio <= 1) {
            multipl = 0.6;
         }
         if (ratio >= 7) {
            multipl = 4;
         }
         if (ratio >= 10) {
            multipl = 8;
         }
      }

      // Calculate line length and vertical spacing
      const lineChars = -0.00014 * x + 0.15;
      const lineCharV = txtL <= 25 ? 15 * multipl : 18 * multipl;
      const lineL = Math.round(lineCharV + txtL * lineChars);

      // Split text into lines
      let finStr = "";
      text.split("\r").forEach((line) => {
         let outStr = "";
         let newLine = "";
         line.split(" ").forEach((word) => {
            const newLineWithWord = newLine + (newLine ? " " : "") + word;
            if (newLineWithWord.length > lineL) {
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

      // Check if there is text available for options 1 and 2
      finStr = components[option] !== "" ? finStr : "";

      // Get the font name based on the component and use fallback if needed
      const cFont = font || fallbackFont[option];
      const bFont = fallbackFont[option];

      // Import function with supported fonts and check font availability
      const { checkFontAvailability } = footage("fontlib.jsx").sourceData.getFunctions();
      const finalTypo = checkFontAvailability(cFont) ? cFont : bFont;

      // Set the font and text for the layer
      style.setFont(finalTypo).setText(finStr);
   } catch (err) {}