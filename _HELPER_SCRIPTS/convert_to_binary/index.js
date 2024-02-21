/**********************************************************************************************
    Convert to Binary.js
    Copyright (c) 2017 Tomas Šinkūnas. All rights reserved.
    www.rendertom.com

    Description:
    	Script for After Effects and Photoshop to convert files into binary string.
    	Output files will be saved to same location as original files, but will have .txt extension.
**********************************************************************************************/

(function(thisObj) {

	// @include 'lib/ArrayEx.js'
	// @include 'lib/convertToBinary.js'
	// @include 'lib/FileEx.js'
	// @include 'lib/handleError.js'
	// @include 'lib/Os.js'
	// @include 'lib/UI.js'

	var options = {
		singleFile: true,
		addFileDeclaration: true,
		fileAfterBinary: true,
		binaryVariablePrefix: '',
		binaryVariableSuffix: '_bin',
		fileVariablePrefix: '',
		fileVariableSuffix: '',
		compressPNG: true,
		pathToPngquantMac: '../lib/pngquant/pngquant',
		pathToPngquantWin: '../lib/pngquant/pngquant.exe',
		removeCompressedPNG: true,
	};

	var script = {
		name: 'Convert to Binary',
		developer: 'Tomas Šinkūnas',
		developerURL: 'www.rendertom.com',
	};

	UI.buildUI(thisObj);
})(this);