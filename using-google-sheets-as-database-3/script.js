var employeeData;
$(document).ready(function(){
  $.get("https://sheets.googleapis.com/v4/spreadsheets/1t2Clw6VEPwh6dUQcBRwOU4alUXBp5IzUZhGEaEv0ATQ/values/Sheet1!A1:C?key="+key, function( data ) {
    employeeData = data;
    console.log(data);
  for(i=1;i<data.values.length;i++){
    var employeeName = data.values[i][2];
      $('#employeeSelect').append($('<option>', {
    value: employeeName,
    text: employeeName
}));
    
  }
    $('#employeeList').show();
    $('#loading').hide();
});
});

$('#employeeList').submit(function(e){
  e.preventDefault();
  displayEmployee($('#employeeSelect').val())
});

function displayEmployee(name){
  for(i=0;i<employeeData.values.length;i++){
    var employee = employeeData.values[i];
    if(employee[1] == name){
      $('#employeeDetails').html(
      "<br> ID: " +  employee[0] + 
      "<br> Name: " + employee[1] +
      "<br> Drink: " + employee[2]);
      $('#employeeDetails').show();
    }
  }
}
