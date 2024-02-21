var FileEx = (function() {
	var module = {};

	module.changeName = function(file, newName) {
		var path, extension, newFile;

		file = module.makeSureIsFileObject(file);

		path = file.path;
		extension = module.getExtension(file);

		newFile = File(path + '/' + newName + '.' + extension);
		
		return newFile;
	};

	module.convertToBinary = function(file) {
		var fileContent, binaryString;

		fileContent = module.readFileContent(file, 'BINARY');
		binaryString = fileContent.toSource();

		binaryString = binaryString.replace(/^\(new String\(/, '');
		binaryString = binaryString.replace(/\)\)$/, ';');

		return binaryString;
	};

	module.getExtension = function(file){
		var nameWithExtension, extension;

		nameWithExtension = module.getNameWithExtension(file);
		extension = nameWithExtension.split('.').pop();

		return extension;
	};

	module.getName = function(file) {
		var name, nameWithExtension;

		nameWithExtension = module.getNameWithExtension(file);
		name = nameWithExtension.split('.').slice(0, -1).join('.');

		return name;
	};

	module.getNameWithExtension = function(file) {
		var nameWithExtension;

		file = module.makeSureIsFileObject(file);
		nameWithExtension = File.decode(file.name);

		return nameWithExtension;
	};

	module.makeSureIsFileObject = function(file) {
		file = (file instanceof File) ? file : new File(file);

		return file;
	};

	module.readFileContent = function(file, encoding) {
		var fileContent;

		file = module.makeSureIsFileObject(file);
		encoding = encoding || 'utf-8';

		file.encoding = encoding;
		file.open('r');
		fileContent = file.read();
		file.close();

		return fileContent;
	};

	module.writeFile = function(file, fileContent, encoding) {
		file = module.makeSureIsFileObject(file);
		encoding = encoding || 'utf-8';

		file.encoding = encoding;
		file.open('w');
		file.write(fileContent);
		file.close();

		return file;
	};

	return module;
})();