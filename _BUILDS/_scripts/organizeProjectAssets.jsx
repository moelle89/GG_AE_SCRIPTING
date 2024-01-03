/*
* Decompiled with Jsxer
* Version: 1.6.0
* JSXBIN 2.0
*/

function retrieveProjectItems(itemType, winObj) {
stats = winObj;
stats.text = "Retrieving Project Items...";
var typeOptions = new Array("Composition", "Folder", "Footage");
for (var t = 0; t < 3; t++) {
if (itemType == typeOptions[t]) { 
itemAry = new Array();
proj = app.project;
itemTotal = proj.numItems; 
for (var i = 1; i <= itemTotal; i++) {
curItem = proj.item(i);
if (curItem.typeName == itemType) { 
itemAry[itemAry.length] = curItem;
}
}
return itemAry;
}
}
}
function moveToFolder(curItemAry, parFolder, winObj) {
stats = winObj.statusGrp.status;
bar = winObj.progBar;
var itemAryLength = curItemAry.length;
for (var i = 0; i < itemAryLength; i++) {
curItemAry[i].parentFolder = parFolder;
stats.text = "Moving " + curItemAry[i].name;
bar.value++;
}
}
function grabPlaceholders() {
var ni = app.project.numItems;
for (var n = 1; n <= ni; n++) {
curItem = app.project.item(n);
for (var i = 0; i < 4; i++) {
if ((curItem instanceof FootageItem) && (curItem.name == "Placeholder")) { 
myDefaults.myPlaceholderObjects[myDefaults.myPlaceholderObjects.length] = curItem;
break ;
}
}
}
return myDefaults.myPlaceholderObjects;
}
function grabMyFolderObjects() {
var ni = app.project.numItems;
for (var n = 1; n <= ni; n++) {
curItem = app.project.item(n);
for (var i = 0; i < 4; i++) {
if ((curItem instanceof FolderItem) && (curItem.name == myDefaults.myFolders[i])) { 
myDefaults.myFoldersObjects[myDefaults.myFoldersObjects.length] = curItem;
break ;
}
}
}
}
function grabSpecificExtType(itemType, extName, stillVideo, winObj) {
function grabExt(itemName) {
var n = itemName.split(".");
if (n.length > 1) { 
return n[n.length - 1].toString().toLowerCase();
}
else {
return null;
}
}
stats = winObj.statusGrp.status;
tmp = new Array();
proj = app.project;
pi = proj.numItems;
for (var i = 1; i <= pi; i++) {
curItem = proj.item(i);
stats.text = "Grabbing all " + itemType.toString() + "...";
if (eval("curItem instanceof " + itemType)) { 
ext = grabExt(curItem.name);
userExt = extName.toString().toLowerCase();
if (ext == userExt) { 
if ((curItem.duration > 1) && (stillVideo == "Video")) { 
tmp[tmp.length] = curItem;
}
else if ((curItem.duration == 0) && (stillVideo == "Still")) {
tmp[tmp.length] = curItem;
}
else {
tmp[tmp.length] = curItem;
}
}
}
}
if (tmp.length >= 1) { 
return tmp;
}
else {
return null;
}
}
function grabAllExt() {
tmp = new Array();
proj = app.project;
ni = proj.numItems;
ph = false;
for (var i = 1; i <= ni; i++) {
curItem = proj.item(i);
var n = curItem.name.split(".");
if (curItem instanceof FootageItem) { 
if (n.length > 1) { 
tmp[tmp.length] = n[n.length - 1].toString().toLowerCase();
}
}
}
tmp = sortAndRemoveDups(tmp);
return tmp;
}
function sortAndRemoveDups(aryInput) {
var arySorted = aryInput.sort();
var aryLength = arySorted.length;
var results = new Array();
for (var i = 0; i < aryLength; i++) {
if (arySorted[i] != arySorted[i + 1]) { 
results[results.length] = arySorted[i];
}
}
return results;
}
function grabAllSolids(statObj) {
itemAry = new Array();
proj = app.project;
itemTotal = proj.numItems;
statObj.text = "Retrieving all solids...";
for (var i = 1; i <= itemTotal; i++) {
curItem = proj.item(i);
if (curItem.duration == 0) { 
if (curItem.mainSource.color) { 
itemAry[itemAry.length] = curItem;
}
}
}
return itemAry;
}
function grabAllPrecomps(statObj) {
itemAry = new Array();
proj = app.project;
itemTotal = proj.numItems;
statObj.text = "Retrieving all precomps...";
for (var i = 1; i <= itemTotal; i++) {
curItem = proj.item(i);
if (curItem instanceof CompItem) { 
if (curItem.usedIn.length > 0) { 
itemAry[itemAry.length] = curItem;
}
}
}
return itemAry;
}
function progressBarPopup() {
   var pwpRes = "palette{\
    orientation:'column',\
    alignChildren:['fill', 'top'],\
    statusGrp: Group{\
        orientation:'stack',\
        alignment:['fill', 'top'],\
        alignChildren:['fill', 'top'],\
        status: StaticText{text:'Organizing...', alignment:['fill', 'center'], preferredSize:[300, -1]},\
    },\
    progBar: Progressbar{text:'myProgBar', value:0},\
}";
var pwpWin = new Window(pwpRes);
pwpWin.center();
var s = pwpWin.statusGrp.status;
pwpWin.show();
app.beginUndoGroup("Project Cleanup");
projExt = grabAllExt().sort();
projExtLength = projExt.length;
var projectComps = retrieveProjectItems("Composition", s);
var projectCompsLength = projectComps.length;
var projectFootage = retrieveProjectItems("Footage", s);
var projectFootageLength = projectFootage.length;
var projectFolder = retrieveProjectItems("Folder", s);
var projectFolderLength = projectFolder.length;
var solids = grabAllSolids(s);
var solidsLength = solids.length;
var preComps = grabAllPrecomps(s);
var preCompsLength = preComps.length;
var placeHolders = grabPlaceholders();
var placeHoldersLength = placeHolders.length;
cFolder = app.project.items.addFolder(myDefaults.myFolders[0]);
fFolder = app.project.items.addFolder(myDefaults.myFolders[1]);
tmpFolder = app.project.items.addFolder(myDefaults.myFolders[2]);
sFolder = app.project.items.addFolder(myDefaults.myFolders[3]);
pcFolder = app.project.items.addFolder(myDefaults.myFolders[4]);
if (placeHoldersLength > 0) { 
phFolder = app.project.items.addFolder("Placeholder");
phFolder.parentFolder = fFolder;
}
pwpWin.progBar.maxvalue = parseInt(projExtLength + projectCompsLength + projectFootageLength + projectFolderLength + solidsLength + preCompsLength + placeHoldersLength);
moveToFolder(projectFolder, tmpFolder, pwpWin);
moveToFolder(projectComps, cFolder, pwpWin);
moveToFolder(preComps, pcFolder, pwpWin);
pcFolder.parentFolder = cFolder;
moveToFolder(projectFootage, fFolder, pwpWin);
for (var pe = 0; pe < projExtLength; pe++) {
pf = app.project.items.addFolder(projExt[pe]);
s.text = "Creating " + projExt[pe].toString() + " folder...";
grabItems = grabSpecificExtType("FootageItem", projExt[pe].toString(), "", pwpWin);
pwpWin.progBar.maxvalue += grabItems.length;
moveToFolder(grabItems, pf, pwpWin);
pf.parentFolder = fFolder;
}
if (placeHoldersLength > 0) { 
moveToFolder(placeHolders, phFolder, pwpWin);
}
moveToFolder(solids, sFolder, pwpWin);
s.text = "Removing empty folders...";
tmpFolder.remove();
app.endUndoGroup();
pwpWin.progBar.value = pwpWin.progBar.maxvalue;
s.text = "All done!";
pwpWin.close();
}

  var myDefaults = new Object();
  myDefaults.myFolders = new Array("Comps", "Footage", "tmp", "Solids", " Precomps");
  myDefaults.myFolderObjects = new Array();
  myDefaults.myPlaceholderObjects = new Array();