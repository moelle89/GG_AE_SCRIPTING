function modifyJSONdata() {
  // Get the colors from the color fill effect on the layer
  var accentColor = app.project.item(35).layer("debug_layer").effect("debug_SETTINGS")("accent_color").value;
  var titleColor = app.project.item(35).layer("debug_layer").effect("debug_SETTINGS")("title_color").value;
  var subtextColor = app.project.item(35).layer("debug_layer").effect("debug_SETTINGS")("subtext_color").value;
  var bgColor = app.project.item(35).layer("debug_layer").effect("debug_SETTINGS")("bg_color").value;
  var logoBgColor = app.project.item(35).layer("debug_layer").effect("debug_SETTINGS")("logo_bg_color").value;
  var call2a_color = app.project.item(35).layer("debug_layer").effect("debug_SETTINGS")("c2a_color").value;
  var cursor_color = app.project.item(35).layer("debug_layer").effect("debug_SETTINGS")("cursor_color").value;
  var c2a_link_color = app.project.item(35).layer("debug_layer").effect("debug_SETTINGS")("c2a_link_color").value;
  var source_color = app.project.item(35).layer("debug_layer").effect("debug_SETTINGS")("source_color").value;

  // JSON-Datei aktualisieren
  var projectPath = app.project.file.path; // Get the path of the After Effects project
  var jsonFilePath = projectPath + "/(footage)/footage/json/input_template.json"; // Adjust the JSON file path

  // Function to convert RGB to Hex
  function rgbToHex(theColor) {
    r = Math.round(theColor[0] * 255).toString(16)
    if (r.length < 2) r = "0" + r;
    g = Math.round(theColor[1] * 255).toString(16)
    if (g.length < 2) g = "0" + g;
    b = Math.round(theColor[2] * 255).toString(16)
    if (b.length < 2) b = "0" + b;
    return "#" + r + g + b;
  }

  // Read existing JSON file
  var existingJson = {};
  var file = new File(jsonFilePath);
  if (file.exists) {
    file.open("r");
    var existingJsonString = file.read();
    file.close();

    try {
      existingJson = JSON.parse(existingJsonString);
    } catch (e) {
      alert("Error parsing existing JSON file: " + e.toString());
    }
  }

  // Update specific color values
  existingJson.Comp.logo_bg_color = rgbToHex(logoBgColor);
  existingJson.Comp.accent.color = rgbToHex(accentColor);
  existingJson.Comp.title.color = rgbToHex(titleColor);
  existingJson.Comp.subtext.color = rgbToHex(subtextColor);
  existingJson.Comp.bg.color = rgbToHex(bgColor);
  existingJson.Comp.call2action.color = rgbToHex(call2a_color);
  existingJson.Comp.call2action.cursor_color.color = rgbToHex(cursor_color);
  existingJson.Comp.call2action_link.color = rgbToHex(c2a_link_color);
  existingJson.Comp.source.color = rgbToHex(source_color);

  // Write updated JSON back to the file
  var jsonString = JSON.stringify(existingJson, null, 2);
  file.open("w");
  file.write(jsonString);
  file.close();
  alert("JSON DATA UPDATED " + rgbToHex(accentColor));
}

app.beginUndoGroup("modifyJSONdata");
modifyJSONdata();
app.endUndoGroup();