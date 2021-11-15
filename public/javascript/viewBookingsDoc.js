const patDet= [
    {
      booking_id:2,
      first_name: 'Fateh',
      last_name: 'Sawarn',
      age: 34,
      contact_no: '8727265800',
      email: 'fateh@gmail.com',
      appointment_type:'Urgentcare',
      appointment_Dtime:'2021-06-04 17:45:00',
      description:'I think I broke my knee plate'
    },
    {
      booking_id:2,
      first_name: 'Fiza',
      last_name: 'Hussain',
      age: 29,
      contact_no: '9957265800',
      email: 'hussain@gmail.com',
      appointment_type:'Wellness',
      appointment_Dtime:'2021-06-08 15:00:00',
      description:'Regular blood work'
    },
];


(function (patDet) {

const cardHolder = document.getElementById("cardHolder");
cardHolder.innerHTML = "";
//card.setAttribute("class", "d-flex flex-column p-5");
//cardHolder.setAttribute("style","background-color:tomato;");

let indexOfSelectedPat = 0;
patDet.forEach((e) => {

  const card = document.createElement("div");
  card.setAttribute("class", "container d-flex p-2 mb-3 text-dark");
  if(e.appointment_type == "Ambulatory" || e.appointment_type == "Urgentcare"){
      card.setAttribute("style", "justify-content:space-evenly; align-items:center;background-color:lightcoral; flex-wrap:wrap; text-transform: capitalize;");
  }
  else{
      card.setAttribute("style", "justify-content:space-evenly; align-items:center;background-color:#ffdb58; flex-wrap:wrap; text-transform: capitalize;");
  }
  // background-color:#d6e5f3;
  const cardData = document.createElement("div");
  cardData.setAttribute("class", "col-md-5");
  // cardData.setAttribute("style","background-color:tomato;");

  const title = document.createElement("h2");
  const name = document.createElement("b");
  name.innerText = `${e.first_name} ${e.last_name}`;
  title.appendChild(name);
  cardData.appendChild(title);

  const age = document.createElement("h4");
  age.innerText = `${e.age} years old`;
  cardData.appendChild(age);

  // if(e.appointment_type == "Video Checkup"){
  //     const addressHolder = document.createElement("div");
  //     const plotNo = document.createElement("h6");
  //     plotNo.innerText = `${e.plot_number}`;
  //     const landmark = document.createElement("h6");
  //     landmark.innerText = `${e.landmark}`;
  //     const street = document.createElement("h6");
  //     street.innerText = `${e.street}`;
  //     const city = document.createElement("h6");
  //     city.innerText = `${e.city}`;
  //     addressHolder.appendChild(plotNo);
  //     addressHolder.appendChild(landmark);
  //     addressHolder.appendChild(street);
  //     addressHolder.appendChild(city);
  //     cardData.appendChild(addressHolder);
  // }


  const bookingDetailsHolder = document.createElement("div");
  bookingDetailsHolder.setAttribute("class", "d-flex flex-column");
  bookingDetailsHolder.setAttribute("style", "height:200px; width:200px; justify-content:center; align-items:center; border-radius:4%");
  const appointmentType = document.createElement("h4");
  appointmentType.setAttribute("style", "text-align:center;");
  appointmentType.setAttribute("class", "mb-3");
  appointmentType.innerText = `${e.appointment_type}`;
  const date = document.createElement("h6");
  date.setAttribute("style", "text-align:center;");
  date.innerText = `${new Date(e.appointment_Dtime).toDateString()}`;
  const time = document.createElement("h6");
  time.innerText = `Time : ${e.appointment_Dtime.slice(11,16)}`;
  bookingDetailsHolder.appendChild(appointmentType);
  bookingDetailsHolder.appendChild(date);
  bookingDetailsHolder.appendChild(time);


  const contactDetailsHolder = document.createElement("div");
  contactDetailsHolder.setAttribute("class", "d-flex flex-column");
  contactDetailsHolder.setAttribute("style", "height:200px; width:200px; justify-content:center; align-items:center;");
  const contactDetailsTitle = document.createElement("h4");
  contactDetailsTitle.setAttribute("style", "text-align:center;");
  contactDetailsTitle.innerText = `Contact Details`;
  const email = document.createElement("h6");
  email.innerText = `${e.email}`;
  if(e.contact_no){
    const phoneNumber = document.createElement("h6");
    phoneNumber.innerText = `${e.contact_no}`;
    contactDetailsHolder.appendChild(contactDetailsTitle);
    contactDetailsHolder.appendChild(phoneNumber);
    contactDetailsHolder.appendChild(email);
  }else{
      contactDetailsHolder.appendChild(contactDetailsTitle);
      contactDetailsHolder.appendChild(email);
  }

  const form = document.createElement("form");
  form.setAttribute("id","startDiagnosisForm"+indexOfSelectedPat);
  form.setAttribute("action","addPrescription");
  form.setAttribute("method", "POST");

  const startDiagnosis = document.createElement("button");
  startDiagnosis.setAttribute("value", `${e.booking_id}`);
  startDiagnosis.setAttribute("name", "booking_id");
  startDiagnosis.setAttribute("class", "btn btn-dark");
  startDiagnosis.setAttribute("type", "submit");
  startDiagnosis.setAttribute("form", "startDiagnosisForm"+indexOfSelectedPat);
  startDiagnosis.setAttribute("style", "height:40px;");
  startDiagnosis.innerText = `Cancel Appointment`;

  form.appendChild(startDiagnosis);

  card.appendChild(cardData);
  card.appendChild(bookingDetailsHolder);
  card.appendChild(contactDetailsHolder);
  card.appendChild(form);

  cardHolder.appendChild(card);
  ++indexOfSelectedPat;
});

})(patDet);