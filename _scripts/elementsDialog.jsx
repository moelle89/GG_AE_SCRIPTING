// JavaScript (ExtendScript)
// Save this script with a .jsx extension


function elementsDialog() {
  var secondaryDialog;
  var customHeight = 32; // You can set your desired height here
  var customWidth = 110; // You can set your desired height here


  secondaryDialog = new Window('dialog', 'Add element to active composition', undefined);
  secondaryDialog.orientation = 'column';

  // Copy-paste your ELEMENTS content
  var ELEMENTS = secondaryDialog.add('group', undefined, { name: 'ELEMENTS' });
  ELEMENTS.orientation = 'column';
  ELEMENTS.alignChildren = ['left', 'center'];
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

  var imgLogo_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%20%00%00%00%20%08%06%00%00%00szz%C3%B4%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%03CIDATX%C2%85%C3%8D%C3%97O%C2%88WU%14%07%C3%B0%C3%8F%C2%A4E%C3%B6%C3%87%0A%C2%A2%C2%89%22%C3%8A%5D%C2%AB%16%25%05e%C2%B8%0C%14*%C3%94%C2%85V%20%C2%B5%C3%88%C3%88j%C3%88M%04e%20%24%19%C3%94%C3%82Z%18A%C2%90%15%05%C3%91%C2%BF%C2%85%C2%8B%C2%92%16%C3%BD%C2%B10%230%C2%8C%C2%8A%C2%A4(%0B%C3%BA%C2%AB3%C3%BE%09%1D%C3%93o%C2%8B%7B%7F%C3%B8~o%C3%9E%C3%8C8%C2%8E%C2%94_x%C2%BCw%C3%8F%3D%C3%A7%C2%9E%C3%AF%3D%C3%B7%C3%9Cs%C3%AF%1BH%C3%A2%C3%BF%C3%84%C3%8Ci%C3%98%0E%C2%B4%C3%9A'4%C2%93%C3%93%C2%A6%C2%A0%3B%C2%88!%C2%BC%C2%87%11%1Cm%3D%23%C2%B5o%C2%A8%C3%AA%1E%1F%C2%92L%C3%B6%0C%26%C3%99%C2%90d4%C3%87%C2%8F%C3%91j38%C3%99%C3%B8%C2%939_%C2%9Ad%C3%8F%14%1C%C2%B7%C2%B1%C2%A7%C2%8EqB%04%C3%96L%C3%83q%1Bk%C2%A6J%C3%A0d%3A%C2%9F%C2%90%C3%84xa%3F%1E%C3%BC%C2%9Ed%7B%C2%92CS%201f9%06%C3%92_%07%06%C3%B1%0D%C3%8E%C2%9F%20o%0F%C3%A3%01%C3%8C%C3%86%C3%85%C3%98%C2%82%C2%BB0%0Fo%C3%A1O%C3%8C%C3%87%C3%9C%0E%C3%9Ba%5C%C2%89%C3%9Fz%C2%826%C2%81%0DX%C3%91a%C3%B8.%C2%B6%C3%A1R%7C%C2%89e%C2%B8%C2%B6%C3%91%7F%3B%0Ea%25.%C3%81%C2%A6%C3%AAd%5D%C3%87X%C3%8F%C3%A1%C2%9E.%02%C2%83%C3%98%C2%85%C3%93%1B%C3%8A%C2%A9%C2%B3%C2%9B_g%C3%B8%13%C3%96%C3%94%C3%99%0D%C3%A3%06%C3%9CQ%09%C2%BC%C2%8C3%1A%C2%B6%C3%8FW2%0B%5B%04%0E%C3%A32%C2%BD(4%C3%96c%C2%A8c%C3%8D6%26y%C2%BB%25%1BN%C2%B28%C3%89%3FI6%25%C2%99%C2%9Bdm%C2%92%0F%C2%92lN%C2%B2%C2%AB%C3%AA%C3%ADO%C2%B2r%C2%9C%5C%18%C3%AA%C3%B9mV%C3%826SJ%C3%A8%C3%B7%60%23%C2%BE%C2%AD%C2%B2%C3%B30%0B3%C2%B0%00O%C3%A0%0D%C3%BC%C2%88%C3%9DX%C2%8F%C3%BB%C3%B1%12%3E%C3%83R%3CTg%3E%C3%96W%23%02%23%0D%C2%86%C2%A3I%C3%AEM%C3%B2H%C2%92%C2%8F%C2%93lI%C3%B2X%C2%92%15I%0E%26Y%C3%96%C2%9A%C3%91%C3%B2V%7BK%C2%92%059%C2%B6C%3EI%C2%B2%C2%AA%C3%91%3F%C3%92%C3%B3%C3%9B%3B%C2%8C%06%C2%94%C2%AC%C3%AE%C3%A1A%2C%C3%97%C2%9Fh%C3%97c%3Bn%C3%95%C2%9F%C3%A1%C3%BBqf%C2%A3%C3%BD%05%C2%9ER%C3%B2%C3%A1N%C3%BC%C2%8A%C2%BB%C3%B1sCgv%C3%B5%C2%99%C2%AE%C3%93%C3%B0%7B%5C%C3%90r%0E%C2%A3%C3%B8AI%C2%BE%C2%AB%1B%C3%B2u%C3%95%11%25%C3%A4%C2%8F%C3%A3E%C3%87%C2%B6%C3%B2%11%3C%C2%8A%C2%AF%3B%7Cu%C2%9E%C2%86%1F%C3%A2%C2%A6%C2%96%C3%AC%0F%2C%C2%AA%C3%9F%C3%8F%C3%A2%3B%25B%C3%B7%C3%A1U%252%23%C3%8A%0EyE%7F%1D%C2%99%C2%81%C2%B5%C2%B8%C2%A2%C3%AA%C3%B4%C2%A1%2B%023%3Ad%C2%AB%C3%B1%02.%C2%AA%C3%ADk%C2%94%C2%99%C3%AF%C3%86%C3%A6Jp%09.%C3%879%1D%C3%B6%C2%B0%C2%B8%C3%AA.i%0A%7B%11%08%C3%B6%C3%96%C3%AFyJ%C3%B67%C2%B1%C2%B7%C3%A1%C2%BC%C2%87m%C2%95%C3%84%1Ce%C2%B9%C2%9E%C3%84%C2%B9%C3%A38%C2%A7De_c%C2%BC4%09%C3%80%C3%96%C3%BA%C2%9E%C2%A3%C2%94%C3%93%C3%8F%1B%7DGZ%C2%83%1DP%C3%8Ap%13%3B%C3%B0%C3%A9%04%04%C2%B6*%C2%91k%C3%BA%C3%AA%23%C2%B0%C2%A9%C3%B1%C2%BD%5E%09%C3%B9j%7C%C2%A4d%C3%B9%3B%C2%8D%C3%BEYJ%C2%B6%1Fh%C3%98%C3%BE%C2%82%5B%C2%94%C2%9A%C3%91%C3%86%0E%C3%AC%C3%84Um_%C2%93%C2%95%C3%A2%C2%9DJR%1EUv%C3%80N%5C%C2%A8%C2%AC%C3%B9%C3%8Dx%1D7%C3%A2%C3%8D%C2%AA7%13%C2%ABpPY%C3%B3%C2%B3%C3%B0%C2%BE%C2%B2%5C%1B%C2%95%226n)%C2%96r%C2%8D%C2%9A%08G%C2%93%C3%ACk%C2%B4%C2%8F%24%C3%B9*%C3%89%C3%83I%C2%B65%C3%A4%C2%8B%C2%92%3C%C2%9D%C3%A4%C2%99Z%C3%88%C2%9A%C3%98%C2%90i%1E%C3%87%5D8%C2%A4%14%C2%9B%C2%B3%C3%B1%17nS%C2%96%C2%A3%C2%8Da%C2%AD%C3%A3x%3A%17%C2%92.%C3%BC%C2%9DrH%C2%8D%C2%871%17%C2%92S%C3%B2JvJ%5CJO%C2%89k%C3%B9%7F%C3%B2c%C3%92%C3%9E%05%13aP%C2%B9%5C%2C%C3%84u%C3%BA%C2%8FoJy%C3%9D%C2%AA%14%C2%99%C3%97%C3%BA2%7D%02L%C2%85%C3%80%18%C3%9BV%C3%BB%C2%84%06%C2%9A%C3%8E%C3%9F%C3%B1I%C3%B9%C2%AF%C3%BF%17%C2%8CUx%C2%8A%C3%9F%C2%83%C2%B5t%00%00%00%00IEND%C2%AEB%60%C2%82";
  var imgLogo = grp_logo_info.add("image",undefined, File.decode(imgLogo_imgString), { name: "imgLogo" });
  imgLogo.size = [28, 28]

  var grp_logo_text = grp_logo_info.add("statictext", undefined, undefined, { name: "grp_logo_text" });
  grp_logo_text.text = "Use V2 for more custom-options"; 


  // GRP_LOGO
  var grp_logo = ELEMENTS.add('group', undefined, { name: 'grp_logo' });
  grp_logo.orientation = 'row';
  grp_logo.alignChildren = ['left', 'top'];
  grp_logo.spacing = 10;
  grp_logo.margins = 4;
  grp_logo.alignment = ['fill', 'center'];

  var Btn_LOGO = grp_logo.add('iconbutton', undefined, undefined, { name: 'Btn_LOGO', style: "button" });
  Btn_LOGO.preferredSize.height = customHeight;
  Btn_LOGO.preferredSize.width = customWidth;
  Btn_LOGO.text = 'LOGO';
  Btn_LOGO.onClick = function () {
    var result = "LOGO";
    var sourceCompName = "_ELEMENTS";
    app.executeCommand(2004); // “Deselect All”
    copyLayerToActiveComp(sourceCompName, result);
    secondaryDialog.close();
  };

  var Btn_LOGOV2 = grp_logo.add('iconbutton', undefined, undefined, { name: 'Btn_LOGOV2', style: "button" });
  Btn_LOGOV2.preferredSize.height = customHeight;
  Btn_LOGOV2.preferredSize.width = customWidth;
  Btn_LOGOV2.text = 'LOGO-V2';
  Btn_LOGOV2.onClick = function () {
    var result = "LOGO_NEW";
    var sourceCompName = "_ELEMENTS";
    app.executeCommand(2004); // “Deselect All”
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

  var imgText_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%20%00%00%00%20%08%06%00%00%00szz%C3%B4%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%01%C2%8EIDATX%C2%85%C3%AD%C2%97%C2%B1N%C3%830%10%C2%86%3F%C3%932%15%01%12%20%C3%84%0B%C3%B0%02%15%23%2F%C3%80%5B%C2%B0%C3%B0%0A%5D%C3%99%C3%BB%02%7D%12%5E%C2%80%C2%99%C2%B1%0B%0BS%C3%85%C2%90%20%C2%A5%C2%88L%14%C2%8E!%17p%C2%8C%1B%C3%87(i%18%C3%BAK%C2%96.%C3%A7%C3%9C%C3%9Do%C3%BBr%C3%A7%18%11%C2%A1O%C3%AC%C3%B4%1A%C3%9D!%60%C2%80%09%C2%90%00%C3%92%C3%91H4%C2%86%C3%B9%C2%8E*%22%C3%A5%C2%98%C3%88%C3%A60)%C3%A3%1A%2B%07%12%C3%A0X%C3%A5%1CX%C2%B5%C2%B7%C3%91%00%0C%C2%81%C2%91%C3%8A)p%02T%08%C2%94B%0E%1C%00%1F-%13%18%00K%C2%8B%C2%84%01%7F%12%C2%AE%3A%08%C2%8E%C3%BA%C3%BC%C2%B5%C2%AB%C3%83%C2%80%C3%91%08%C2%B8%05%C3%86%C3%84%7F1%C2%9F%C3%80%C2%83%C3%9A%C3%A7k%C3%9F%C2%B2%C2%92%C2%B0Df%C3%A9%C2%A6-%24%C3%9C%C3%94%C3%B2%C2%97YzD%24%C2%B8%C2%AAq%C3%A4%C2%AA%C2%A3%7D%C2%84%08%C2%B4Q%C2%A8j%7D%C2%84r%20q%C2%9E%C2%AF%C2%80g%C2%95%C3%AF%C2%81%3D%C2%95%C3%9F%C2%80K%C2%95%C3%8F%C2%80%C2%BB%1A%1FU%04r%C3%A0BDR%C3%95%C3%8F%2C%C2%BD%7B%C2%9E%C2%9937S%7D%C2%AA%3E%C3%96%C3%A6%C2%80%C2%AF%0E%2C%C2%81C%C2%8B%C3%A3.%C2%B0%0F%C2%BC8%C3%9C3%C2%8Az%C3%A1%C2%B3%018%02%5E%C2%81%C3%B756%06%C3%82G%C2%80%3Ap%C2%837A%23%C2%9B%7F%C3%95%0D%C2%B7%04%C2%B6%04bpJ%C3%91%5EK%0CT%C2%B7%11%02%C3%97%C3%80%C2%82%C2%9F*%C2%88%C3%8A%0B%C2%9D%C2%8BC%C2%A0%12%C3%BA%C3%86%C2%BC%C2%A6%C3%B3%C3%8D%03%C2%B6%C3%91%C3%9D%C3%90%C2%87%C2%A7%3F%C3%8Ey%C3%91%C2%A4%12%C2%BA%C2%B8%C2%A1%C2%B8d%C2%9C%3B%C3%BAG%C3%95G%C2%A1I%2Fh%13%19N%2F%C3%B0%1D%C3%81%C2%90j%C2%86%C2%B7%C2%85%01%C2%9E%1D%C2%B7%15)%C3%85%C2%B5%7CD%C2%B1%0B%5D_%C3%8B%0BX%19%C3%9A%C3%8B%C2%8F%C2%89M%C3%80%C3%A8D%C3%92a%C3%A0Dc%18%C3%B1%5CHzA%C3%AF%C2%BD%C3%A0%0B%C2%BFQ%19%C2%AC%C3%82%C3%96%05%2F%00%00%00%00IEND%C2%AEB%60%C2%82";
  var imgText = grp_text_info.add("image", undefined, File.decode(imgText_imgString), { name: "imgText" });
  imgText.size = [28, 28]

  var grp_text_textr = grp_text_info.add("statictext", undefined, undefined, { name: "grp_text_textr" });
  grp_text_textr.text = "Add a variable text-element"; 

  // GRP_TEXTELEMENT
  var grp_textelement = ELEMENTS.add('group', undefined, { name: 'grp_textelement'});
  grp_textelement.orientation = 'row';
  grp_textelement.alignChildren = ['left', 'top'];
  grp_textelement.spacing = 10;
  grp_textelement.margins = 4;
  grp_textelement.alignment = ['fill', 'center'];

  var Btn_TextElement = grp_textelement.add('iconbutton', undefined, undefined, { name: 'Btn_TextElement', style: "button" });
  Btn_TextElement.preferredSize.height = customHeight;
  Btn_TextElement.preferredSize.width = customWidth;
  Btn_TextElement.text = 'TEXT-ELEMENT';
  Btn_TextElement.onClick = function () {
    var result = "TEXT_el";
    var sourceCompName = "_ELEMENTS";
    app.executeCommand(2004); // “Deselect All”
    copyLayerToActiveComp(sourceCompName, result);
    secondaryDialog.close();
  };

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

  var imgMedia_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%20%00%00%00%20%08%06%00%00%00szz%C3%B4%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%01%C2%97IDATX%C2%85%C3%AD%C2%97%C2%B1J%1CQ%14%C2%86%3F%25)%C2%A2A%C2%96D%C2%89%0F%20j%C2%93%22%C2%82%C2%844)%C2%B4Jl%02%C2%92%C3%86%C3%B7%C2%B0%12%7C%03%C2%9B%C2%904%16%12%C3%B41%C3%92%25E%04%C3%AB%40T%10%11%04%C2%83%C2%92%26%C2%8B%16a%C3%B9%2CvF%C3%87%C3%9D%C3%AB%C3%AC%C3%8E%C3%A4%C3%AE%2CJ~%C2%98b%C3%AE%C2%B9g%C3%BE%C3%BF%C3%BE%C3%A7%C3%8E%C2%99%3B%03*%C3%BD%C3%84%60_%C3%99%C3%BF%0B%C2%88%2C%60%16%C3%B8%0A4%C2%80%3F%C3%80%06P%C3%AB%C2%98%C2%A5%C3%86%C2%B8%C2%A6%C3%95%C2%BA%C3%AD%C3%98V%07%C3%B3rc9%C2%B0%0C%0C%07%C3%86_%02o%C3%B2%12c%09%C2%98.%19%C2%8B%26%C3%A0%C2%B8d%2C%C3%9A%1Ex%C2%AD6%02%7B%C3%A0P%7D%C2%94%C2%97%1BK%00%C3%AA%C2%92z%C2%9A!%C3%9FQ%C2%A7%3A%C3%A5%0D%14l%C3%85%C2%8F%C2%81%0B%C2%9A%C2%AFZ%08%0F%C2%81)%C3%A0%1C8%C3%A8%C3%AA%C2%89%05V%C2%B8%C2%92%C3%98%C3%BC%5B%C2%9D%C2%89%C3%A5%5C%C2%B7%13_%C2%B5%C3%94%C3%B8%C2%A7%3AT%C2%95%C2%80!u%C3%9Fv%7C%C2%A8J%C3%80%C3%87%00y%C2%8A%C3%B9%C3%80%C3%BC%11uS%C3%BD%C2%A6.%C3%BC%C2%AB%C2%80%C2%B9%1Cr%C3%95%23%C2%B5%C3%96%C2%92%C3%B39%13%C2%AF%C2%AB%13e%05%C2%8C%24%04%C2%9D%C2%B0%C2%95%C3%89y%17%C2%88%7FW%1F%C2%94%11%C2%B0%C3%91%05y%C2%8AEu%C3%8C%C2%9B%7D%20%C2%8B%C3%95%C2%A2%02%16%0A%C2%90%C2%9B%10%7F%C3%89%C2%89%C3%BFUgC%5C%C2%A1F%C3%B4%14%C3%B8%01%3C%2B%C3%92%C2%A1%C2%BA%C3%80%1E%C3%B0%C2%82f%C2%93%C2%BAB%C3%A8c%C3%B4%C2%A9%07%C3%A4%00%C2%93%C3%80Z%C3%9Bh%C2%8B%25%C3%AF%0BZ_%06oo%2B%C3%818M%C3%AB%C2%9F%C3%B4%60%C3%B5Y%C2%9C%00%C3%8F%C2%813%C2%B8Y%C2%82%C3%B5%0A%C3%88%C2%A1%C2%B9%C3%90%C3%B5%C3%B4%26u%60%148%C2%AD%C2%80%3C%C2%8B1%C3%A0%2Cu%20t%C2%9E%C3%AB5%C2%86%C3%A1%C2%BA%04%C2%BF%C2%80%C3%9D%0A%C3%89%C3%B7%12%C3%8E%C3%82%07%C2%92%C3%A8%C2%B8W%7FFwS%C3%80%25%2F%C2%BE%24F%C2%BA%5C%C2%81%5B%00%00%00%00IEND%C2%AEB%60%C2%82";
  var imgMedia = grp_media_info.add("image", undefined, File.decode(imgMedia_imgString), { name: "imgMedia" });
  imgMedia.size = [28, 28]

  var grp_media_text = grp_media_info.add("statictext", undefined, undefined, { name: "grp_media_text" });
  grp_media_text.text = "Media element prepared for all formats"; 

  // GRP_MEDIA
  var grp_media = ELEMENTS.add('group', undefined, { name: 'grp_media' });
  grp_media.orientation = 'row';
  grp_media.alignChildren = ['left', 'top'];
  grp_media.spacing = 10;
  grp_media.margins = 4;
  grp_media.alignment = ['fill', 'center'];

  var Btn_MEDIA = grp_media.add('iconbutton', undefined, undefined, { name: 'Btn_MEDIA', style: "button" });
  Btn_MEDIA.preferredSize.height = customHeight;
  Btn_MEDIA.preferredSize.width = customWidth;
  Btn_MEDIA.text = 'MEDIA';
  Btn_MEDIA.onClick = function () {
    var result = "_MEDIA";
    var sourceCompName = "_ELEMENTS";
    app.executeCommand(2004); // “Deselect All”
    copyLayerToActiveComp(sourceCompName, result);
    secondaryDialog.close();
  };

  var Btn_MEDIASQR = grp_media.add('iconbutton', undefined, undefined, { name: 'Btn_MEDIASQR', style: "button" });
  Btn_MEDIASQR.preferredSize.height = customHeight;
  Btn_MEDIASQR.preferredSize.width = customWidth;
  Btn_MEDIASQR.text = 'MEDIA-SQR';
  Btn_MEDIASQR.onClick = function () {
    var result = "_MEDIA_SQUARE";
    var sourceCompName = "_ELEMENTS";
    app.executeCommand(2004); // “Deselect All”
    copyLayerToActiveComp(sourceCompName, result);
    secondaryDialog.close();
  };

  var Btn_MEDIA1920 = grp_media.add('iconbutton', undefined, undefined, { name: 'Btn_MEDIA1920', style: "button" });
  Btn_MEDIA1920.preferredSize.height = customHeight;
  Btn_MEDIA1920.preferredSize.width = customWidth;
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
