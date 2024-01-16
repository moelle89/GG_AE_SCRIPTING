//Render Instant Frame 1.3
//Created By AJ Haines
//Updated 10/13/14
//www.ajhaines.com

var win = new Window('palette', 'Render Frame');
var btnSelect = win.add('button', undefined, 'Render Frame');
var btnSave = win.add('button', undefined, 'Save Location');
var filePath = win.add('statictext', undefined, 'File Path');

if (Folder.fs == "Windows"){
    var userType = win.add("edittext",undefined,"C:\\Documents and Settings\\username\\Desktop\\");
        userType.characters = 15;
}else{
    var userType = win.add("edittext",undefined,"~/desktop/");
        userType.characters = 15;
}
        
var fileName = win.add('statictext', undefined, 'File Name');
var userFileName = win.add("edittext",undefined,"");
    userFileName.characters = 15;
var myFile
     
btnSave.onClick = function pathName(){
    var saveLoc = Folder.selectDialog ("Select Save Location").toString();
    if (Folder.fs == "Windows"){
        userType.text = saveLoc + "\\";
    }else{
        userType.text = saveLoc + "/";
    }
}

btnSelect.onClick = function saveImage(){
    
    var compName = app.project.activeItem.name;
    var currentdate = new Date();
    var datetime = currentdate.getHours() + "_"
        + currentdate.getMinutes() + "_"
        + currentdate.getSeconds();
     var myProj = app.project;
     
     var myComp = myProj.activeItem;
     
     if(userFileName.text == "") {
        myFile = new File(userType.text + compName + "__" + datetime +".png");
     }else{
        myFile = new File(userType.text + userFileName.text + ".png");
        }
     

     if(myComp instanceof CompItem){
          myComp.saveFrameToPng(myComp.time, myFile);
     }
}


win.center();
win.show();