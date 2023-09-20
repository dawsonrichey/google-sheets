var employeeData;
$(document).ready(function(){
  $.get("https://sheets.googleapis.com/v4/spreadsheets/1tdvRfB7vHSBWfT27cvHGLi5riurc_BR2XCulJmAXGW4/values/Sheet1!A2:E100?key="+key, function( data ) {
    employeeData = data;
    console.log(data);
  for(i=0;i<data.values.length;i++){
    var employeeName = data.values[i][0];
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
    if(employee[0] == name){
      $('#employeeDetails').html("Name : " +  employee[0] + " Sales Target : " + employee[3] + " Sales Result : " + employee[4]);
      $('#employeeDetails').show();
    }
  }
}
