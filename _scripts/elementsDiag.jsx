// JavaScript (ExtendScript)
// Save this script with a .jsx extension


function elementsDialog() {
  var secondaryDialog;
  var customHeight = 34; // You can set your desired height here
  var customWidth = 140; // You can set your desired height here


  secondaryDialog = new Window('window', 'Add element to active composition', undefined);
  secondaryDialog.orientation = 'column';
  secondaryDialog.alignment = ["fill", "top"];

  // Copy-paste your ELEMENTS content
  var ELEMENTS = secondaryDialog.add('group', undefined, { name: 'ELEMENTS' });
  ELEMENTS.orientation = 'column';
  ELEMENTS.alignChildren = ['fill', 'top'];
  ELEMENTS.spacing = 10;
  ELEMENTS.margins = 0;

  // GRP_LOGO_INFO
  // =============
  var grp_logo_info = ELEMENTS.add("group", undefined, { name: "grp_logo_info" });
  grp_logo_info.orientation = "row";
  grp_logo_info.alignChildren = ["left", "center"];
  grp_logo_info.spacing = 10;
  grp_logo_info.margins = 4;
  grp_logo_info.alignment = ["fill", "center"];

  var grp_logo_text = grp_logo_info.add("statictext", undefined, undefined, { name: "grp_logo_text" });
  grp_logo_text.text = "Use V2 for more custom-options";
  mojoUI.setFG(grp_logo_text, [0.83, 0.94, 1, 0.75]);


  // GRP_LOGO
  var grp_logo = ELEMENTS.add('group', undefined, { name: 'grp_logo' });
  grp_logo.orientation = 'row';
  grp_logo.alignChildren = ['left', 'top'];
  grp_logo.spacing = 10;
  grp_logo.margins = 4;
  grp_logo.alignment = ['fill', 'center'];

  var Btn_LOGO = grp_logo.add('iconbutton', undefined, mojoUI.createIcon("icn_logo_el"), { name: 'Btn_LOGO', style: "button" });
  Btn_LOGO.preferredSize.height = customHeight;
  Btn_LOGO.preferredSize.width = customWidth;
  Btn_LOGO.onClick = function () {
    var result = "LOGO";
    var sourceCompName = "_ELEMENTS";
    deselectAll(); // “Deselect All”
    copyLayerToActiveComp(sourceCompName, result);
    secondaryDialog.close();
  };

  var Btn_LOGOV2 = grp_logo.add('iconbutton', undefined, mojoUI.createIcon("icn_logo_el2"), { name: 'Btn_LOGOV2', style: "button" });
  Btn_LOGOV2.preferredSize.height = customHeight;
  Btn_LOGOV2.preferredSize.width = customWidth;
  Btn_LOGOV2.onClick = function () {
    var result = "LOGO_NEW";
    var sourceCompName = "_ELEMENTS";
    deselectAll(); // “Deselect All”
    copyLayerToActiveComp(sourceCompName, result);
    secondaryDialog.close();
  };

  var dividerLogo = ELEMENTS.add("panel", undefined, undefined, {
    name: "dividerLogo"
  });
  dividerLogo.alignment = "fill";


  // GRP_TEXT_INFO
  // =============
  var grp_text_info = ELEMENTS.add("group", undefined, { name: "grp_text_info" });
  grp_text_info.orientation = "row";
  grp_text_info.alignChildren = ["left", "center"];
  grp_text_info.spacing = 10;
  grp_text_info.margins = 4;
  grp_text_info.alignment = ["fill", "center"];

  var grp_text_textr = grp_text_info.add("statictext", undefined, undefined, { name: "grp_text_textr" });
  grp_text_textr.text = "Add a variable text-element";
  mojoUI.setFG(grp_text_textr, [0.83, 0.94, 1, 0.75]);

  // GRP_TEXTELEMENT
  var grp_textelement = ELEMENTS.add('group', undefined, { name: 'grp_textelement'});
  grp_textelement.orientation = 'row';
  grp_textelement.alignChildren = ['left', 'top'];
  grp_textelement.spacing = 10;
  grp_textelement.margins = 4;
  grp_textelement.alignment = ['fill', 'center'];

  var Btn_TextElement = grp_textelement.add('iconbutton', undefined, mojoUI.createIcon("icn_textel"), { name: 'Btn_TextElement', style: "button" });
  Btn_TextElement.preferredSize.height = customHeight;
  Btn_TextElement.preferredSize.width = customWidth;
  Btn_TextElement.onClick = function () {
    var result = "TEXT_el";
    var sourceCompName = "_ELEMENTS";
    deselectAll(); // “Deselect All”
    copyLayerToActiveComp(sourceCompName, result);
    secondaryDialog.close();
  };

  var Btn_SelTextElement = grp_textelement.add('iconbutton', undefined, mojoUI.createIcon("icn_textlayer"), { name: 'Btn_SelTextElement', style: "button" });
  Btn_SelTextElement.preferredSize.height = customHeight;
  Btn_SelTextElement.preferredSize.width = customWidth;
  Btn_SelTextElement.onClick = function () {
    var result = "text_sel";
    var sourceCompName = "_ELEMENTS";
    deselectAll(); // “Deselect All”
    copyLayerToActiveComp(sourceCompName, result);
    var result1 = "input_template.json";
    deselectAll(); // “Deselect All”
    copyHiddenLayerToActiveComp(sourceCompName, result1);
    var result2 = "fontlib.jsx";
    deselectAll(); // “Deselect All”
    copyHiddenLayerToActiveComp(sourceCompName, result2);
    secondaryDialog.close();
  };

  addTooltipToButton(Btn_TextElement, "Add a text-module with a wide range of settings. This element is recommended to be used for text", 85, false, true);
  addTooltipToButton(Btn_SelTextElement, "Add a single-textlayer with less options to setup. Its meant to be used for specific custom implementations.", 85, false, true);

  var dividerText = ELEMENTS.add("panel", undefined, undefined, {
    name: "dividerText"
  });
  dividerText.alignment = "fill";

  // GRP_MEDIA_INFO
  // ==============
  var grp_media_info = ELEMENTS.add("group", undefined, { name: "grp_media_info" });
  grp_media_info.orientation = "row";
  grp_media_info.alignChildren = ["left", "center"];
  grp_media_info.spacing = 10;
  grp_media_info.margins = 4;
  grp_media_info.alignment = ["fill", "center"];

  var grp_media_text = grp_media_info.add("statictext", undefined, undefined, { name: "grp_media_text" });
  grp_media_text.text = "Media element prepared for all formats";
  mojoUI.setFG(grp_media_text, [0.83, 0.94, 1, 0.75]);

  // GRP_MEDIA
  var grp_media = ELEMENTS.add('group', undefined, { name: 'grp_media' });
  grp_media.orientation = 'row';
  grp_media.alignChildren = ['left', 'top'];
  grp_media.spacing = 10;
  grp_media.margins = 4;
  grp_media.alignment = ['fill', 'center'];

  var Btn_MEDIA = grp_media.add('iconbutton', undefined, mojoUI.createIcon("icn_media_reel"), { name: 'Btn_MEDIA', style: "button" });
  Btn_MEDIA.preferredSize.height = customHeight;
  Btn_MEDIA.preferredSize.width = customWidth;
  Btn_MEDIA.onClick = function () {
    var result = "_MEDIA";
    var sourceCompName = "_ELEMENTS";
    deselectAll(); // “Deselect All”
    copyLayerToActiveComp(sourceCompName, result);
    secondaryDialog.close();
  };

  var Btn_MEDIASQR = grp_media.add('iconbutton', undefined, mojoUI.createIcon("icn_media_sqr"), { name: 'Btn_MEDIASQR', style: "button" });
  Btn_MEDIASQR.preferredSize.height = customHeight;
  Btn_MEDIASQR.preferredSize.width = customWidth;
  Btn_MEDIASQR.onClick = function () {
    var result = "_MEDIA_SQUARE";
    var sourceCompName = "_ELEMENTS";
    deselectAll(); // “Deselect All”
    copyLayerToActiveComp(sourceCompName, result);
    secondaryDialog.close();
  };

  var Btn_MEDIA1920 = grp_media.add('iconbutton', undefined, mojoUI.createIcon("icn_media_1920"), { name: 'Btn_MEDIA1920', style: "button" });
  Btn_MEDIA1920.preferredSize.height = customHeight;
  Btn_MEDIA1920.preferredSize.width = customWidth;
  Btn_MEDIA1920.onClick = function () {
    var result = "_MEDIA_1920";
    var sourceCompName = "_ELEMENTS";
    deselectAll(); // “Deselect All”
    copyLayerToActiveComp(sourceCompName, result);
    secondaryDialog.close();
  };

  var dividerGallery = ELEMENTS.add("panel", undefined, undefined, {
    name: "dividerGallery"
  });
  dividerGallery.alignment = "fill";

  // GRP_MEDIA_INFO
  // ==============
  var grp_gal_info = ELEMENTS.add("group", undefined, { name: "grp_gal_info" });
  grp_gal_info.orientation = "row";
  grp_gal_info.alignChildren = ["left", "center"];
  grp_gal_info.spacing = 10;
  grp_gal_info.margins = 4;
  grp_gal_info.alignment = ["fill", "center"];

  var grp_gal_text = grp_gal_info.add("statictext", undefined, undefined, { name: "grp_gal_text" });
  grp_gal_text.text = "Gallery element prepared for all formats";
  mojoUI.setFG(grp_gal_text, [0.83, 0.94, 1, 0.75]);


  // GROUP2
  // ======

  var group2 = ELEMENTS.add("group", undefined, {
    name: "group2",
  });
  group2.orientation = "row";
  group2.alignChildren = ["fill", "fill"];
  group2.spacing = 10;
  group2.margins = 3;
  group2.alignment = ["fill", "top"];
  var ratio_result = ["_GALLERY", "_GALLERY_SQUARE", "_GALLERY_1920"];
  var ratio_resultIndexAdd = [0, 6, 12];
  var ratio_array = ["  9:16", "  1:1", "  16:9"];
  var ratio = group2.add("dropdownlist", undefined, undefined, {
    name: "dropdown2",
    items: ratio_array,
  });
  ratio.preferredSize.height = 36;
  ratio.preferredSize.width = 95;
  ratio.selection = 0;
  ratio.alignment = ["left", "fill"];
  var gallery_result = [
    "gallery_img_01",
    "gallery_img_02",
    "gallery_img_03",
    "gallery_img_04",
    "gallery_img_05",
    "gallery_img_06",
    "gallery_img_square_01",
    "gallery_img_square_02",
    "gallery_img_square_03",
    "gallery_img_square_04",
    "gallery_img_square_05",
    "gallery_img_square_06",
    "gallery_img_1920_01",
    "gallery_img_1920_02",
    "gallery_img_1920_03",
    "gallery_img_1920_04",
    "gallery_img_1920_05",
    "gallery_img_1920_06",
  ];
  var gallery_array = [
    "  GALLERY_01",
    "  GALLERY_02",
    "  GALLERY_03",
    "  GALLERY_04",
    "  GALLERY_05",
    "  GALLERY_06",
  ];
  var gallery = group2.add("dropdownlist", undefined, undefined, {
    name: "gallery",
    items: gallery_array,
  });
  gallery.selection = 0;
  gallery.preferredSize.height = 36;
  gallery.preferredSize.width = 95;
  var btn_addGallery = group2.add(
    "iconbutton",
    undefined,
    mojoUI.createIcon("icn_add"), {
    name: "btn_addGallery",
    style: "button"
  }
  );
  btn_addGallery.preferredSize.width = 50;

  addTooltipToButton(
    btn_addGallery,
    "add pre-configurated gallery-elment",
    100,
    false,
    false
  );
  btn_addGallery.onClick = function () {
    if (checkProject()) {
      var compIndex = findCompIndex("_ELEMENTS");
      if (compIndex) {
        var ratioIndex = ratio.selection.index;
        var ratioresult = ratio_result[ratioIndex];
        var ratioAdd = ratio_resultIndexAdd[ratioIndex];
        var selectedIndex = gallery.selection.index + ratioAdd;
        var result = gallery_result[selectedIndex];
        deselectAll(); // “Deselect All”
        copyLayerToActiveComp(ratioresult, result);
      }
    }
  };

  var grp_media_infot = ELEMENTS.add("statictext", undefined, undefined, { name: "grp_media_infot", multiline: true });
  grp_media_infot.preferredSize.height = 140;
  grp_media_infot.text = "the Media element is a container, that includes the main media-file of a template. It can be either a single image or a video. Basically it is showing the primary media content of a template. Use the media file always at first. If you want to include more optional media-files, go ahead and use Gallery elements - But only, after already using the media element in your composition! You dont need to pick the ratio based on the actual ratio of your composition. The ratio of the media element is more relying on the actual space thats reserved for the media inside of a composition. if it should be used in a square area, use the square variant etc.";
  mojoUI.setFG(grp_media_infot, [0.83, 0.94, 1, 0.6]);

  secondaryDialog.onClose = function () {
    try {
      secondaryDialog.hide();
      delete secondaryDialog;
    } catch (e) { }
  };

  // Show the secondary dialog
  secondaryDialog.show();
};