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

const passDataToNextPage = ()=>{

  var patient = {
    fname: "",
    lname: "",
    gender: "",
    maritalStatus: "",
    race: "",
    ethnicity: "",
    email: "",
    age: "",
    password: "",
    contact: "",
    altContact: "",
    address: "",
    city: "",
    county: "",
    caregiver: {
      fname: "",
      lname: "",
      email: "",
      contact: "",
    },
    healthcareCoverage: "",
    healthcareExpense: "",
    data: []
  };

  patient.fname = document.getElementById("fname").value;
  patient.lname = document.getElementById("lname").value;
  patient.gender = document.getElementById("gender").value;
  patient.maritalStatus = document.getElementById("marital-status").value;
  patient.race = document.getElementById("race").value;
  patient.ethnicity = document.getElementById("ethnicity").value;
  patient.email = document.getElementById("email").value;
  patient.age = document.getElementById("age").value;
  patient.password = document.getElementById("password").value;
  patient.contact = document.getElementById("contact").value;
  patient.altContact = document.getElementById("altContact").value;
  patient.address = document.getElementById("address").value;
  patient.city = document.getElementById("city").value;
  patient.county = document.getElementById("county").value;

  console.log("SIGNUP.JS");
  console.log(patient);
  localStorage.setItem("patient", JSON.stringify(patient));
}

function passwordMatcher() {
  confirmPassword.setCustomValidity(confirmPassword.value != password.value ? "Passwords do not match." : "");
}

const mySignupValidator = ()=>{
  passwordMatcher();
}