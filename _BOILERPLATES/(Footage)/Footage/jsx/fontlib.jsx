{
	getFunctions(time = thisLayer.time) {
		function funcError(funcName, ...errors) {
			return new Error(`in function ${funcName}.\n\n${errors.join('\n')}`);
		}

		function checkFontAvailability(string) {
			// Define your array
			const fontNames = [
				"Lato-Regular", "Lato-Bold", "RobotoSlab-Regular", "RobotoSlab-Bold", "Roboto-Regular", "Roboto-Bold", "Raleway-Regular", "Raleway-Bold", "ChunkFive-Regular", "Anton-Regular", "PlayfairDisplay-Regular", "PlayfairDisplay-Bold", "Merriweather-Regular", "Merriweather-Bold", "OpenSans-Regular", "OpenSans-Bold", "Gabriela-Regular", "Quicksand-Regular", "DancingScript-Regular", "DancingScript-Bold", "RockSalt-Regular", "CoralLoversRegular", "EsseGroteskRegular", "InLoveWithRomeRegular", "PeaceSans", "SCHABO-Condensed", "Archivo-Bold", "Archivo-SemiBold", "Barlow-ExtraBold", "Barlow-Bold", "Barlow-Medium", "Oswald-Regular", "Oswald-SemiBold", "Oswald-Bold", "ArchivoNarrow-Regular", "ArchivoNarrow-Italic", "ArchivoNarrow-Medium", "ArchivoNarrow-MediumItalic", "ArchivoNarrow-SemiBold", "Archivo-SemiBoldItalic", "ArchivoNarrow-Bold", "Archivo-BoldItalic"
			];

			let typo = "";

			// Check if the string is in the array
			if (fontNames.indexOf(string) !== -1) {
				// The string is in the array
				typo = string;
			}
			return typo;
		}

		return {
			checkFontAvailability
		};
	}
}