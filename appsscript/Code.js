// Spreadsheet Information
var ss = SpreadsheetApp.openById("1z34KYGPUe5l2CYP-xzeXqvGzZmMg93NqrNibsificuY");
var sheet = ss.getSheetByName('Data');
var rows = sheet.getRange(1,1,sheet.getLastRow(),sheet.getLastColumn()).getValues();

var dataBody = [];
var body = rows.slice(1);


//body
body.forEach(function(res,i){
  dataBody.push(res);
});



function doGet(){
    
    var template = HtmlService.createTemplateFromFile("index");
    var output = template.evaluate();
    return output;
}


function getSheetJson(){

//var datos = Utilities.formatString("%s,%s",k,j)
//Logger.log(datos)

personas_Json = []

for(var i=0;i<dataBody.length;i++)
{
  personas_Json.push({id:dataBody[i][0],nombre:dataBody[i][1],apellido:dataBody[i][2],email:dataBody[i][3]}) 
}

    
return personas_Json   

}

function update_data(data)
{
  
  for(var i=0;i<dataBody.length;i++)
{
  
  if ( dataBody[i][0] === data.id){
  var range = sheet.getRange(i + 2,1,1,4);
  range.setValues([[data.id,data.nombre,data.apellido,data.email]]);

  }

  Logger.log([[data.id,data.nombre,data.apellido,data.email]])

}


  
}


function delete_data(id)

{
  
  for(var i=0;i<dataBody.length;i++)
{
  
  if ( dataBody[i][0] === id){
     ss.deleteRow(i + 2)
  }

}

}

function get_data(persona)
{
  
  var data = sheet.getDataRange().getDisplayValues()
  var id = ss.getLastRow() + 1
  sheet.appendRow([id,persona.nombre,persona.apellido,persona.email]);
  

  return persona

  throw("Registro incorrecto");

}