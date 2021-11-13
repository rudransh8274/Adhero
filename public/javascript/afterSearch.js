const docDet = [
    {
        doctor_id: 3,
        first_name: 'Mahipal',
        last_name: 'Singh',
        consulting_charges: 500,
        degree: 'DM',
        specialization: 'ENT',
        clinic_name: 'Arihant Hospital',
        plot_number: 'o-99',
        landmark: 'Near clock tower',
        street: 'colaba',
        city: 'Delhi'
    },
    {
        doctor_id: 5,
        first_name: 'Mahendra',
        last_name: 'Bahubali',
        consulting_charges: 600,
        degree: 'MBBS',
        specialization: 'ENT',
        clinic_name: 'Arihant Hospital',
        plot_number: 'o-99',
        landmark: 'Near clock tower',
        street: 'colaba',
        city: 'Delhi'
    }
];

const pageTitle = document.getElementById("pageTitle");
pageTitle.innerText = `${docDet[0].specialization} Specialists Near You`;

(function (docDet) {

    const cardHolder = document.getElementById("cardHolder");
    cardHolder.innerHTML = "";
    //card.setAttribute("class", "d-flex flex-column p-5");
    //cardHolder.setAttribute("style","background-color:tomato;");

    let indexOfSelectedDoc = 0;
    docDet.forEach((e) => {

        const card = document.createElement("div");
        card.setAttribute("class", "container d-flex p-2 mb-3");
        card.setAttribute("style", "justify-content:space-evenly; align-items:center;background-color:gold; flex-wrap:wrap; text-transform: capitalize; color:black;");

        const cardData = document.createElement("div");
        cardData.setAttribute("class", "col-md-6");
        // cardData.setAttribute("style","background-color:tomato;");

        const title = document.createElement("h2");
        const name = document.createElement("b");
        name.innerText = `${e.first_name} ${e.last_name}`;
        const docDegree = document.createElement("span");
        docDegree.innerText = ` (${e.degree})`;
        name.appendChild(docDegree);
        title.appendChild(name);
        cardData.appendChild(title);

        const clinicName = document.createElement("h4");
        clinicName.innerText = `${e.clinic_name}`;
        cardData.appendChild(clinicName);

        const addressHolder = document.createElement("div");
        const plotNo = document.createElement("h6");
        plotNo.innerText = `${e.plot_number}`;
        const landmark = document.createElement("h6");
        landmark.innerText = `${e.landmark}`;
        const street = document.createElement("h6");
        street.innerText = `${e.street}`;
        const city = document.createElement("h6");
        city.innerText = `${e.city}`;
        addressHolder.appendChild(plotNo);
        addressHolder.appendChild(landmark);
        addressHolder.appendChild(street);
        addressHolder.appendChild(city);
        cardData.appendChild(addressHolder);

        const consultationChargesHolder = document.createElement("div");
        consultationChargesHolder.setAttribute("class", "d-flex flex-column");
        consultationChargesHolder.setAttribute("style", "height:200px; width:200px; justify-content:center; align-items:center;");
        const chargesTitle = document.createElement("h4");
        chargesTitle.setAttribute("style", "text-align:center; font-weight:bolder;");
        chargesTitle.innerText = `Consultation Charges`;
        const charges = document.createElement("h4");
        charges.setAttribute("class", "mt-2");
        charges.setAttribute("style", "font-weight:bolder;");
        charges.innerText = `Rs. ${e.consulting_charges}`;
        consultationChargesHolder.appendChild(chargesTitle);
        consultationChargesHolder.appendChild(charges);


        const viewAvailability = document.createElement("button");
        viewAvailability.setAttribute("value", indexOfSelectedDoc);
        viewAvailability.setAttribute("class", "btn btn-dark");
        viewAvailability.setAttribute("style", "height:40px;");
        viewAvailability.innerText = `Set An Appointment With Dr. ${e.first_name}`;
        viewAvailability.addEventListener("click", (event) => {
            // console.log(JSON.stringify(e));
            localStorage.setItem("choosenDocDet", JSON.stringify(e));
            window.open("./bookDoctor.html", "_blank");
        });

        // createModal(e,indexOfSelectedDoc);

        card.appendChild(cardData);
        card.appendChild(consultationChargesHolder);
        card.appendChild(viewAvailability);

        cardHolder.appendChild(card);
        ++indexOfSelectedDoc;
    });

})(docDet);