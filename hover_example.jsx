// JavaScript (ExtendScript)
// Save this script with a .jsx extension

(function () {
  // Declare the secondaryDialog outside the mainButton event listener
  var secondaryDialog;

  // Create the main panel
  var mainPanel = new Window('palette', 'Main Panel', undefined, { resizeable: true });
  mainPanel.orientation = 'column';

  // Create a button in the main panel
  var mainButton = mainPanel.add('button', undefined, 'Hover Me');
  mainButton.helpTip = 'Hover over me to open another dialog';

  // Event listener for mouseover
  mainButton.addEventListener('mouseover', function () {
    // Get the position of the main button
    var mainButtonBounds = mainButton.bounds;
    var mainButtonX = mainButtonBounds[0];
    var mainButtonY = mainButtonBounds[1];

    // Create the secondary dialog with a position offset
    var offset = 20; // Adjust the offset as needed
    secondaryDialog = new Window('dialog', 'Secondary Dialog', undefined, { x: mainButtonX + offset, y: mainButtonY + offset });
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

    var Btn_LOGO = grp_logo.add('button', undefined, undefined, { name: 'Btn_LOGO' });
    Btn_LOGO.text = 'LOGO';
    Btn_LOGO.onClick = function () {
      alert('LOGO button clicked!');
    };

    var Btn_LOGOV2 = grp_logo.add('button', undefined, undefined, { name: 'Btn_LOGOV2' });
    Btn_LOGOV2.text = 'LOGO-V2';
    Btn_LOGOV2.onClick = function () {
      alert('LOGO-V2 button clicked!');
    };

    // GRP_TEXTELEMENT
    var grp_textelement = ELEMENTS.add('group', undefined, { name: 'grp_textelement' });
    grp_textelement.orientation = 'row';
    grp_textelement.alignChildren = ['left', 'top'];
    grp_textelement.spacing = 10;
    grp_textelement.margins = 5;
    grp_textelement.alignment = ['fill', 'center'];

    var Btn_TextElement = grp_textelement.add('button', undefined, undefined, { name: 'Btn_TextElement' });
    Btn_TextElement.text = 'Text-Element';
    Btn_TextElement.onClick = function () {
      alert('Text-Element button clicked!');
    };

    // GRP_MEDIA
    var grp_media = ELEMENTS.add('group', undefined, { name: 'grp_media' });
    grp_media.orientation = 'row';
    grp_media.alignChildren = ['left', 'top'];
    grp_media.spacing = 10;
    grp_media.margins = 5;
    grp_media.alignment = ['fill', 'center'];

    var Btn_MEDIA = grp_media.add('button', undefined, undefined, { name: 'Btn_MEDIA' });
    Btn_MEDIA.text = 'MEDIA';
    Btn_MEDIA.onClick = function () {
      alert('MEDIA button clicked!');
    };

    var Btn_MEDIASQR = grp_media.add('button', undefined, undefined, { name: 'Btn_MEDIASQR' });
    Btn_MEDIASQR.text = 'MEDIA-SQR';
    Btn_MEDIASQR.onClick = function () {
      alert('MEDIA-SQR button clicked!');
    };

    var Btn_MEDIA1920 = grp_media.add('button', undefined, undefined, { name: 'Btn_MEDIA1920' });
    Btn_MEDIA1920.text = 'MEDIA-1920';
    Btn_MEDIA1920.onClick = function () {
      alert('MEDIA-1920 button clicked!');
    };

    // Show the secondary dialog
    secondaryDialog.show();
  });

  // Show the main panel
  mainPanel.show();
})();
