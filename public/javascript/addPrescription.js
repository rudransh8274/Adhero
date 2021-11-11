

function addElement(){
    var check = document.getElementById("medicinename")
    var morning = document.getElementById("morning")
    var afternoon = document.getElementById("afternoon")
    var dinner = document.getElementById("dinner")
   //  console.log(check.value)
   //  console.log(morning.checked)
   //  console.log(afternoon.checked)
   //  console.log(dinner.checked)
   var table = document.getElementById("medicinetable")
 //   for (let i in table.rows) {
 //     let row = table.rows[i]
 //     //iterate through rows
 //     //rows would be accessed using the "row" variable assigned in the for loop
 //     for (let j in row.cells) {
 //       let col = row.cells[j]
 //       console.log(col)
 //       //iterate through columns
 //       //columns would be accessed using the "col" variable assigned in the for loop
 //     }  
 // }
 var row = table.insertRow();
 var randomNumber = Math.random()
 row.setAttribute("id", `${randomNumber}`, 0);
 // Insert new cells (<td> elements) :
 var cell1 = row.insertCell();
 var cell2 = row.insertCell();
 var cell3 = row.insertCell();
 var cell4 = row.insertCell();
 var cell5 = row.insertCell();
 cell1.innerHTML = `<td>${check.value}</td>`;
 if(morning.checked){
   cell2.innerHTML = "<td>&#9989;</td>"; 
 }else{
   cell2.innerHTML = "<td>&#10060;</td>"; 
 }
 if(afternoon.checked){
   cell3.innerHTML = "<td>&#9989;</td>"; 
 }else{
   cell3.innerHTML = "<td>&#10060;</td>"; 
 }
 if(dinner.checked){
   cell4.innerHTML = "<td>&#9989;</td>"; 
 }else{
   cell4.innerHTML = "<td>&#10060;</td>"; 
 }
 cell5.innerHTML = `<button onClick="removeElement(this.id)" id=${randomNumber} class="btn btn-sm btn-danger">Remove</button>`
 }
 
 function removeElement(id){
   var row = document.getElementById(id);
   row.parentNode.removeChild(row);
 
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
 
 