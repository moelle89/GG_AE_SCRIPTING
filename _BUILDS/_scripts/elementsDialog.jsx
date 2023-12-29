﻿// JavaScript (ExtendScript)
// Save this script with a .jsx extension


function elementsDialog() {
  var secondaryDialog;
  secondaryDialog = new Window('dialog', 'Add element to active composition', undefined);
  secondaryDialog.orientation = 'column';

  // Copy-paste your ELEMENTS content
  var ELEMENTS = secondaryDialog.add('group', undefined, { name: 'ELEMENTS' });
  ELEMENTS.orientation = 'column';
  ELEMENTS.alignChildren = ['left', 'center'];
  ELEMENTS.spacing = 10;
  ELEMENTS.margins = 0;

  // GRP_LOGO
  var grp_logo = ELEMENTS.add('group', undefined, { name: 'grp_logo' });
  grp_logo.orientation = 'row';
  grp_logo.alignChildren = ['left', 'top'];
  grp_logo.spacing = 10;
  grp_logo.margins = 5;
  grp_logo.alignment = ['fill', 'center'];

  var Btn_LOGO = grp_logo.add('iconbutton', undefined, undefined, { name: 'Btn_LOGO', style: "button" });
  Btn_LOGO.text = 'LOGO';
  Btn_LOGO.onClick = function () {
    var result = "LOGO";
    var sourceCompName = "_ELEMENTS";
    app.executeCommand(2004); // “Deselect All”
    copyLayerToActiveComp(sourceCompName, result);
    secondaryDialog.close();
  };

  var Btn_LOGOV2 = grp_logo.add('iconbutton', undefined, undefined, { name: 'Btn_LOGOV2', style: "button" });
  Btn_LOGOV2.text = 'LOGO-V2';
  Btn_LOGOV2.onClick = function () {
    var result = "LOGO_NEW";
    var sourceCompName = "_ELEMENTS";
    app.executeCommand(2004); // “Deselect All”
    copyLayerToActiveComp(sourceCompName, result);
    secondaryDialog.close();
  };

  // GRP_TEXTELEMENT
  var grp_textelement = ELEMENTS.add('group', undefined, { name: 'grp_textelement'});
  grp_textelement.orientation = 'row';
  grp_textelement.alignChildren = ['left', 'top'];
  grp_textelement.spacing = 10;
  grp_textelement.margins = 5;
  grp_textelement.alignment = ['fill', 'center'];

  var Btn_TextElement = grp_textelement.add('iconbutton', undefined, undefined, { name: 'Btn_TextElement', style: "button" });
  Btn_TextElement.text = 'TEXT-ELEMENT';
  Btn_TextElement.onClick = function () {
    var result = "TEXT_el";
    var sourceCompName = "_ELEMENTS";
    app.executeCommand(2004); // “Deselect All”
    copyLayerToActiveComp(sourceCompName, result);
    secondaryDialog.close();
  };

  // GRP_MEDIA
  var grp_media = ELEMENTS.add('group', undefined, { name: 'grp_media' });
  grp_media.orientation = 'row';
  grp_media.alignChildren = ['left', 'top'];
  grp_media.spacing = 10;
  grp_media.margins = 5;
  grp_media.alignment = ['fill', 'center'];

  var Btn_MEDIA = grp_media.add('iconbutton', undefined, undefined, { name: 'Btn_MEDIA', style: "button" });
  Btn_MEDIA.text = 'MEDIA';
  Btn_MEDIA.onClick = function () {
    var result = "_MEDIA";
    var sourceCompName = "_ELEMENTS";
    app.executeCommand(2004); // “Deselect All”
    copyLayerToActiveComp(sourceCompName, result);
    secondaryDialog.close();
  };

  var Btn_MEDIASQR = grp_media.add('iconbutton', undefined, undefined, { name: 'Btn_MEDIASQR', style: "button" });
  Btn_MEDIASQR.text = 'MEDIA-SQR';
  Btn_MEDIASQR.onClick = function () {
    var result = "_MEDIA_SQUARE";
    var sourceCompName = "_ELEMENTS";
    app.executeCommand(2004); // “Deselect All”
    copyLayerToActiveComp(sourceCompName, result);
    secondaryDialog.close();
  };

  var Btn_MEDIA1920 = grp_media.add('iconbutton', undefined, undefined, { name: 'Btn_MEDIA1920', style: "button" });
  Btn_MEDIA1920.text = 'MEDIA-1920';
  Btn_MEDIA1920.onClick = function () {
    var result = "_MEDIA_1920";
    var sourceCompName = "_ELEMENTS";
    app.executeCommand(2004); // “Deselect All”
    copyLayerToActiveComp(sourceCompName, result);
    secondaryDialog.close();
  };

  // Show the secondary dialog
  secondaryDialog.show();
};
