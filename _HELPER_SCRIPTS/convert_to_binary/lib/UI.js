var UI = (function() {
	var module = {};

	module.buildUI = function(thisObj) {
		var typeOfWindow = getTypeOfWindow();
		var win = (thisObj instanceof Panel) ? thisObj : new Window(typeOfWindow, script.name, undefined, {
			resizeable: true
		});
		win.alignChildren = ['fill', 'top'];
		win.spacing = 5;

		var checkSingleFile = win.add('checkbox', undefined, 'Write binary strings into single file');
		checkSingleFile.value = options.singleFile;
		checkSingleFile.onClick = function() {
			grpPanels.enabled = this.value;
		};

		var checkAddFileDeclaration = win.add('checkbox', undefined, 'Add file object declaration');
		checkAddFileDeclaration.value = options.addFileDeclaration;
		checkAddFileDeclaration.onClick = function() {
			checkFileAfterBinary.enabled = this.value;
		};

		var checkFileAfterBinary = win.add('checkbox', undefined, 'Declare file object after binary declaration');
		checkFileAfterBinary.value = options.fileAfterBinary;

		win.add('panel');

		var grpPanels = win.add('group');
		grpPanels.alignChildren = ['fill', 'top'];
		grpPanels.spacing = 2;
		grpPanels.enabled = options.singleFile;

		var panelBinary = createPanel(grpPanels, 'Binary variable:');
		var etBinaryPrefix = createEditText(panelBinary, 'prefix', options.binaryVariablePrefix);
		var etBinarySuffix = createEditText(panelBinary, 'suffix', options.binaryVariableSuffix);

		var panelFile = createPanel(grpPanels, 'File variable:');
		var etFilePrefix = createEditText(panelFile, 'prefix', options.fileVariablePrefix);
		var etFileSuffix = createEditText(panelFile, 'suffix', options.fileVariableSuffix);


		var panelCompress = createPanel(win, 'Compression');
		panelCompress.spacing = 0;
		var checkCompressPNG = panelCompress.add('checkbox', undefined, 'Compress PNG images');
		checkCompressPNG.value = options.compressPNG;
		checkCompressPNG.onClick = function() {
			grpPngquant.enabled = this.value;
		};

		var grpPngquant = panelCompress.add('group');
		grpPngquant.spacing = 2;
		var stPngquant = grpPngquant.add('statictext', undefined, 'pngquant exec');
		stPngquant.preferredSize.width = 75;
		stPngquant.helpTip = 'Path to "pngquant" executable';
		var pathToPngquant = Os.isMac() ? options.pathToPngquantMac : options.pathToPngquantWin;
		var etPathToPngquant = grpPngquant.add('edittext', undefined, pathToPngquant);
		etPathToPngquant.alignment = ['fill', 'center'];
		etPathToPngquant.helpTip = stPngquant.helpTip;
		etPathToPngquant.preferredSize.width = 100;
		var btnPngquant = grpPngquant.add('button', undefined, '...');
		btnPngquant.alignment = ['right', 'center'];
		btnPngquant.helpTip = 'Select "pngquant" executable';
		btnPngquant.preferredSize = [30, 24];
		btnPngquant.onClick = function() {
			var pngquant = File.openDialog('Select pngquant executable', undefined, false);
			if (pngquant) {
				options.pathToPngquant = pngquant.fsName;
				etPathToPngquant.text = pngquant.fsName;
			}
		};

		var btnConvert = win.add('button', undefined, 'Convert To Binary');
		btnConvert.onClick = function() {
			options.singleFile = checkSingleFile.value;
			options.addFileDeclaration = checkAddFileDeclaration.value;
			options.fileAfterBinary = checkAddFileDeclaration.value && checkFileAfterBinary.value;
			options.binaryVariablePrefix = etBinaryPrefix.text;
			options.binaryVariableSuffix = etBinarySuffix.text;
			options.fileVariablePrefix = etFilePrefix.text;
			options.fileVariableSuffix = etFileSuffix.text;
			options.compressPNG = checkCompressPNG.value;
			options.pathToPngquant = etPathToPngquant.text;
			
			convertToBinary.main(options);
		};

		win.onResizing = win.onResize = function() {
			this.layout.resize();
		};

		if (win instanceof Window) {
			win.center();
			win.show();
		} else {
			win.layout.layout(true);
			win.layout.resize();
		}

		function createEditText(parentGroup, title, text) {
			var group, statictext, edittext;

			group = parentGroup.add('group');
			statictext = group.add('statictext', undefined, title);
			statictext.preferredSize.width = 30;
			edittext = group.add('edittext', undefined, text);
			edittext.alignment = ['fill', 'top'];
			edittext.preferredSize.width = 50;

			return edittext;
		}

		function createPanel(parentGroup, title) {
			var panel = parentGroup.add('panel', undefined, title);
			panel.alignChildren = ['fill', 'top'];
			panel.spacing = 5;
			panel.margins = [10, 10, 5, 5];

			return panel;
		}
	};

	return module;



	function getTypeOfWindow() {
		var isAfterEffects = function() {
			return BridgeTalk.appName.toLowerCase().match('aftereffects');
		};

		return isAfterEffects() ? 'palette' : 'dialog';
	}
})();