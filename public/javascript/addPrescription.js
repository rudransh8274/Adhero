var medicines = []
var operations = []

function addElement(){

  var medicine_object = {}
  medicine_object.morning = false
  medicine_object.afternoon = false
  medicine_object.dinner = false
   var check = document.getElementById("medicinename")
   var morning = document.getElementById("morning")
   var afternoon = document.getElementById("afternoon")
   var dinner = document.getElementById("dinner")
  var table = document.getElementById("medicinetable")
  var cost = document.getElementById("medicinecost")
var row = table.insertRow();
var randomNumber = Math.random().toFixed(5)
medicine_object.name = check.value
medicine_object.id = randomNumber
medicine_object.cost = parseFloat(cost.value)

row.setAttribute("id", `${randomNumber}`, 0);
// Insert new cells (<td> elements) :
var cell1 = row.insertCell();
var cell2 = row.insertCell();
var cell3 = row.insertCell();
var cell4 = row.insertCell();
var cell5 = row.insertCell();
var cell6 = row.insertCell();
cell1.innerHTML = `<td>${check.value}</td>`;
cell2.innerHTML = `<td>${cost.value}</td>`
if(morning.checked){
  medicine_object.morning = true
  cell3.innerHTML = "<td>&#9989;</td>"; 
}else{
  cell3.innerHTML = "<td>&#10060;</td>"; 
}
if(afternoon.checked){
  medicine_object.afternoon = true;
  cell4.innerHTML = "<td>&#9989;</td>"; 
}else{
  cell4.innerHTML = "<td>&#10060;</td>"; 
}
if(dinner.checked){
  medicine_object.dinner = true;
  cell5.innerHTML = "<td>&#9989;</td>"; 
}else{
  cell5.innerHTML = "<td>&#10060;</td>"; 
}
cell6.innerHTML = `<button onClick="removeElement(this.id)" id=${randomNumber} class="btn btn-sm btn-danger">Remove</button>`
medicines.push(medicine_object)

}

function removeElement(id){
  var row = document.getElementById(id);
  row.parentNode.removeChild(row);
  name = row.cells[0].innerHTML

medicines = medicines.filter((elem)=>{
  return elem.name !== name
})
}


function removeElement1(id){
  var row = document.getElementById(id);
  row.parentNode.removeChild(row);
  name = row.cells[0].innerHTML

operations = operations.filter((elem)=>{
  return elem.name !== name
})


}

function addOperation(){
var operation_object = {}
 var operation_name = document.getElementById("operation").value 
 var operation_cost = parseFloat(document.getElementById("operationcost").value)

 var table = document.getElementById("operationtable")
 var id = Math.random()
 operation_object.name = operation_name
 operation_object.cost = operation_cost
 operation_object.id = id

 
 var row = table.insertRow();



 row.setAttribute("id", `${id}`, 0);
 var cell1 = row.insertCell();
  var cell2 = row.insertCell();
  var cell3 = row.insertCell();

  cell1.innerHTML = `<td>${operation_name}</td>`
  cell2.innerHTML = `<td>${operation_cost}</td>`
  cell3.innerHTML = `<button onClick="removeElement1(this.id)" id=${id} class="btn btn-sm btn-danger">Remove</button>`
  


operations.push(operation_object)

}

function printobject(){
  var get_elem = document.getElementById("send-data")
  var form_data = {}

  var form = document.getElementById("mainform").elements
  for(var i = 0; i < form.length; i ++){
    form_data[form[i].name] = form[i].value
  }
  
 
  var final_data = {}
  final_data.operations = operations
  final_data.medicines = medicines
  final_data.form_elements = form_data
  get_elem.innerText = JSON.stringify(final_data)
  var url = "http://localhost:3000/auth/addingPrescription"
  var myHeaders = new Headers()
  myHeaders.append("Content-Type", "application/json");
              var raw = JSON.stringify(final_data)
              var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
  };
fetch("http://localhost:3000/auth/addingPrescription", requestOptions)
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log('error', error));
}

(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation');
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
  
          form.classList.add('was-validated')
        }, false);
      })
  })();

