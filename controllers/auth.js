const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
var bodyParser = require('body-parser');
const session=require('express-session');
const async = require('hbs/lib/async');
const wbm = require('wbm');
const schedule = require('node-schedule');
const nodemailer = require('nodemailer');
const cron = require('node-cron');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

const db = mysql.createConnection({
    host: process.env.Database_host,
    user: process.env.Database_user,
    password: process.env.Database_password,
    database: process.env.Database
});


function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

//scheduler
let mailOptions ={
    from:'adherotesting@gmail.com',
    to:'rudranshj95@gmail.com',
    subject: 'A reminder from Adhero',
    text:'It is a healthy reminder to take your medicine'
};

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'adherotesting@gmail.com',
        pass:'adheroadhero'
    }
});

cron.schedule('0 9 * * *',()=>{
    console.log('Cornjob working...')
    let system_date = formatDate(new Date().toDateString())
    db.query('select patient_id as patid, prescription_id as presid from prescriptions where prescription_start<=? AND prescription_end>=?',[system_date,system_date],(err,res)=>{
        if(err)
        {
            console.log(err)
        }else{
            console.log(res);
            //console.log(res[0].patid);
            let length = res.length
            console.log('length: ',length);
            for(var i = 0; i < length; i ++){
                var patient_id = res[i].patid
                var prescription_id = res[i].presid
                db.query('SELECT email as mail from  patient where patient_id=?',[patient_id],(err1,res1)=>{
                    if(err1)
                    {
                        console.log(err1)
                    }else{
                        var email = res1[0].mail;
                        console.log(email);
                        db.query('SELECT medicine as medList from medicines where prescription_id=? and breakfast=?',[prescription_id,1],(err3,res3)=>{
                            if(err3)
                            {
                                console.log(err3)
                            }else{
                                //console.log(res3);
                                let newMedList = []
                                res3.forEach((elem)=>{
                                    newMedList.push(elem.medList)
                                })

                                console.log(res3[0].medList);
                                mailOptions.to = email
                                mailOptions.text = `It is an healthy reminder to take your medicine ${newMedList}`
                                transporter.sendMail(mailOptions,(error,info)=>{
                                    if(error)
                                    {
                                        console.log(error)
                                    }else{
                                        console.log('Email sent!')
                                    }
                                })
                            }
                        })
                    }
                })
            }

            // res.patid.forEach(aFunction)
            
            // function aFunction(item)
            // {
            //     db.query('SELECT email from patient where patient_id=?',[item],(er,re)=>{
                    
            //     })
            // }
        }
    })
  

})

cron.schedule('0 15 * * *',()=>{
    console.log('Cornjob working...')
    let system_date = formatDate(new Date().toDateString())
    db.query('select patient_id as patid, prescription_id as presid from prescriptions where prescription_start<=? AND prescription_end>=?',[system_date,system_date],(err,res)=>{
        if(err)
        {
            console.log(err)
        }else{
            console.log(res);
            //console.log(res[0].patid);
            let length = res.length
            console.log('length: ',length);
            for(var i = 0; i < length; i ++){
                var patient_id = res[i].patid
                var prescription_id = res[i].presid
                db.query('SELECT email as mail from  patient where patient_id=?',[patient_id],(err1,res1)=>{
                    if(err1)
                    {
                        console.log(err1)
                    }else{
                        var email = res1[0].mail;
                        console.log(email);
                        db.query('SELECT medicine as medList from medicines where prescription_id=? and lunch=?',[prescription_id,1],(err3,res3)=>{
                            if(err3)
                            {
                                console.log(err3)
                            }else{
                                //console.log(res3);
                                let newMedList = []
                                res3.forEach((elem)=>{
                                    newMedList.push(elem.medList)
                                })

                                console.log(res3[0].medList);
                                mailOptions.to = email
                                mailOptions.text = `It is an healthy reminder to take your medicine ${newMedList}`
                                transporter.sendMail(mailOptions,(error,info)=>{
                                    if(error)
                                    {
                                        console.log(error)
                                    }else{
                                        console.log('Email sent!')
                                    }
                                })
                            }
                        })
                    }
                })
            }

            // res.patid.forEach(aFunction)
            
            // function aFunction(item)
            // {
            //     db.query('SELECT email from patient where patient_id=?',[item],(er,re)=>{
                    
            //     })
            // }
        }
    })
  

})

cron.schedule('0 21 * * *',()=>{
    console.log('Cornjob working...')
    let system_date = formatDate(new Date().toDateString())
    db.query('select patient_id as patid, prescription_id as presid from prescriptions where prescription_start<=? AND prescription_end>=?',[system_date,system_date],(err,res)=>{
        if(err)
        {
            console.log(err)
        }else{
            console.log(res);
            //console.log(res[0].patid);
            let length = res.length
            console.log('length: ',length);
            for(var i = 0; i < length; i ++){
                var patient_id = res[i].patid
                var prescription_id = res[i].presid
                db.query('SELECT email as mail from  patient where patient_id=?',[patient_id],(err1,res1)=>{
                    if(err1)
                    {
                        console.log(err1)
                    }else{
                        var email = res1[0].mail;
                        console.log(email);
                        db.query('SELECT medicine as medList from medicines where prescription_id=? and dinner=?',[prescription_id,1],(err3,res3)=>{
                            if(err3)
                            {
                                console.log(err3)
                            }else{
                                //console.log(res3);
                                let newMedList = []
                                res3.forEach((elem)=>{
                                    newMedList.push(elem.medList)
                                })

                                console.log(res3[0].medList);
                                mailOptions.to = email
                                mailOptions.text = `It is an healthy reminder to take your medicine ${newMedList}`
                                transporter.sendMail(mailOptions,(error,info)=>{
                                    if(error)
                                    {
                                        console.log(error)
                                    }else{
                                        console.log('Email sent!')
                                    }
                                })
                            }
                        })
                    }
                })
            }

            // res.patid.forEach(aFunction)
            
            // function aFunction(item)
            // {
            //     db.query('SELECT email from patient where patient_id=?',[item],(er,re)=>{
                    
            //     })
            // }
        }
    })
  

})


//scheduler

var patientIdForAllergy = 0;
// function addAllergy(item)
// {
//     db.query('INSERT into allergic_conditions SET ?',{patient_id: patientIdForAllergy,description:item.desc,start_date:item.startDate,end_date:item.endDate,is_allergy:item.isAllergy},(er,re)=>{
//         if(er){
//             console.log(er);
//         }else{
//             console.log('Allergy Added');
//         }
//     })
// }

var patientSess;

//for Patient login
exports.afterLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        db.query('Select * FROM patient WHERE email= ?', [email], async (error, results) => {
            const verified = bcrypt.compareSync(password,results[0].password);
            if(error){
                console.log(error);
            }
            //console.log(results);
            // else if (!results || !verified) {
            //     res.status(400).render('patientLogin', {
            //         message: 'Email or password is incorrect!',
            //         messageClass:'alert-warning'
            //     });
            // }

            else {
                //creating session
                db.query('select * from patient where email=?',[email],(err,result)=>{
                    if(err)
                    {
                        console.log(err);
                    }else{
                        
                        sess=req.session;
                        sess.patient={};
                        sess.patient.city=result[0].city;
                        sess.patient.name=result[0].first_name;
                        sess.patient.ids=result[0].patient_id;

                        
                       // console.log(sess.patient);
                        patientSess=Object.assign(sess.patient);
                        
                       // console.log(patientSess);
                
                    }
                });

                const id = results[0].id;
                const token = jwt.sign({ id }, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES_IN
                });
                console.log("Token is: " + token);

                const cookieOptions = {
                    expires: new Date(
                        Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
                    ),
                    httpOnly: true
                }
                res.cookie('jwt', token, cookieOptions);
                res.status(200).redirect("/patientHome");
            }
        })

    } catch (error) {
        console.log(error);
    }
}


var doctorSess;
exports.doctorHome = async (req, res) => {
   
    try {
        const { email, password } = req.body;
      

        db.query('Select * FROM doctor WHERE email= ?', [email], async (error, results) => {
            if(error){
                console.log(error);
            }
           // console.log(results);
            // if (!results || !( await bcrypt.compare(password, results[0].password))) {
            //     res.status(400).render('doctorLogin', {
            //         message: 'Email or password is incorrect!',
            //         messageClass:'alert-warning'
            //     });
            // }

            else {
                //creating session
                db.query('select * from doctor where email=?',[email],(err,result)=>{
                    if(err)
                    {
                        console.log(err);
                    }else{
                        
                        sess=req.session;
                        console.log(sess);
                        sess.doc={};
                        //sess.doc.city=result[0].city;
                        sess.doc.clinic=result[0].clinic_id;
                        sess.doc.idss=result[0].doctor_id;
                        sess.doc.name=result[0].first_name;

                        
                       // console.log(sess.patient);
                        doctorSess=Object.assign(sess.doc);
                        
                        console.log(doctorSess);
                
                    }
                });

                
                const id = results[0].id;
                const token = jwt.sign({ id }, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES_IN
                });
                console.log("Token is: " + token);

                const cookieOptions = {
                    expires: new Date(
                        Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
                    ),
                    httpOnly: true
                }
                res.cookie('jwt', token, cookieOptions);

                //query for retreiving bookings for doctor
                // db.query('SELECT * FROM ((SELECT booking_id,patient_id,appointment_type, DATE_FORMAT(appointment_Dtime,"%Y-%m-%d %T") appointment_Dtime FROM booking WHERE doctor_id = ?) filtered_booking) LEFT JOIN ((SELECT * FROM ((SELECT patient_id, first_name, last_name, age, email FROM patient) filtered_patient) LEFT JOIN ((SELECT patient_id,contact_number contact_no FROM patient_contact group by patient_id) filtered_patient_contact) USING (patient_id)) filtered_patient_join) USING (patient_id)', [doctorSess.idss], (err, result) => {
        
                //     console.log(result);
            
                //     if (err) {
                //         console.log(err);
                //     }
            
                //     if (result.length === 0) {
                //         return res.render('viewBookingsDoc', {
                //             message: 'No Bookings Found',
                //             messageClass:'alert-warning'
                //         });
                //     }
                //     else{
                //         //res.status(200).redirect("/viewBookingsDoc",{bookingDetails:JSON.stringify(result)});
                //         return res.render('viewBookingsDoc',{bookingDetails:JSON.stringify(result)});
                //     }
                // });
                return res.render('doctorHome',{doctorDetails:JSON.stringify(doctorSess)});
                //below line needs to be deleted
                //res.status(200).redirect("/viewBookingsDoc");
            }
        })

    } catch (error) {
        console.log(error);
    }
}


exports.viewBookingsDoc = async (req, res) => {
   
    try {
      
                //query for retreiving bookings for doctor
                db.query(' SELECT * FROM ((SELECT appointment_id,patient_id,appointment_type, DATE_FORMAT(appointment_Dtime,"%Y-%m-%d %T") appointment_Dtime FROM appointment WHERE doctor_id =?) filtered_booking) LEFT JOIN ((SELECT patient_id, first_name, last_name, age, email, contact_no FROM patient) filtered_patient) ON filtered_booking.patient_id = filtered_patient.patient_id', [doctorSess.idss], (err, result) => {
                

                    console.log(result);
           
                    if (err) {
                        console.log(err);
                    }
            
                    if (result.length === 0) {
                        return res.render('viewBookingsDoc', {
                            message: 'No Bookings Found',
                            messageClass:'alert-warning'
                        });
                    }
                    else{
                        //res.status(200).redirect("/viewBookingsDoc",{bookingDetails:JSON.stringify(result)});
                        return res.render('viewBookingsDoc',{bookingDetails:JSON.stringify(result)});
                    }
                });
                //below line needs to be deleted
                //res.status(200).redirect("/viewBookingsDoc");
            
        

    } catch (error) {
        console.log(error);
    }
}

exports.addPrescription = (req,res) =>{
    return res.render('addPrescription');
}


exports.viewBookingsPat = (req,res) => {
    // console.log(req.body);

    // const { name, email, contact, plot, landmark, street, city } = req.body;

    db.query('SELECT DATE_FORMAT(appointment_Dtime,"%Y-%m-%d %T") appointment_Dtime,appointment_type,appointment_id,appointment.doctor_id,first_name,last_name,charges,degree,specialization,clinic_name,address,zip,city from appointment left join (SELECT doctor_id,clinic_id,first_name,last_name,charges,degree,specialization,clinic_name,address,zip,city FROM doctor JOIN clinic using (clinic_id) where city=?) as doc_clinic on appointment.doctor_id=doc_clinic.doctor_id where appointment.patient_id = ?', [patientSess.city,patientSess.ids], (error, results) => {
        
        console.log(results);

        if (error) {
            console.log(error);
        }

        if (results.length === 0) {
            return res.render('viewBookingsPat', {
                message: 'No Bookings Found',
                messageClass:'alert-warning'
            });
        }
        else{
            return res.render('viewBookingsPat',{bookingDetails:JSON.stringify(results)});
        }
    });
}

exports.addingPrescription =  (req,res) =>{
    var presId = 0;
    // console.log("reqbody below");
     console.log(req.body);
    const {operations,medicines,form_elements} = req.body;

    //retreiving patient emailid
    var patEmail = 'rj@gmail.com'
    db.query('SELECT email as em from patient where patient_id=?',[form_elements.patientid], (err,res)=>{
        if(err)
        {
            console.log(err)
        }else{
            patEmail = res[0].em;
            
        }
    });
   

    db.query('INSERT into prescriptions set ?',{doctor_id:doctorSess.idss,patient_id:form_elements.patientid,prescription_start:form_elements.sdate,prescription_end:form_elements.edate,symptoms:form_elements.symptoms},(err,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log("inserted into presciptions table")

        }
    });


    operations.forEach(myFunction);
     function myFunction(item)
     {
        // console.log(typeof(item));
         db.query('Insert into operations set ?',{patient_id:form_elements.patientid,doctor_id:doctorSess.idss,operation_desc:item.name,operation_cost:item.cost},(e,r)=>{
             if(e){
                 console.log(e);
             }else{
                 //console.log("Inserted into operations table");
             }
         });
     }

     db.query('select max(prescription_id) as maxId from prescriptions',(error,result)=>{
        console.log(result);
        if(error){
            console.log(error);
        }else{
           presId = result[0].maxId;
           console.log('prescription id: ',presId);

           medicines.forEach(myFunction2);
            function myFunction2(items)
            {
                db.query('Insert into medicines set ?',{prescription_id:presId,medicine:items.name,cost:items.cost,breakfast:items.morning,lunch:items.afternoon,dinner:items.dinner},(errors,results)=>{
                    if(errors)
                    {
                        console.log(errors);
                    }else{
                        console.log('Inserted into medicines table');
                    }
                })
            }
        }
    });
    //const {operations,medicines,form_elements} = req.body;
    
  
}


exports.addAllergies = (req,res) =>{
    console.log("HERE");
    //const {caregiver} = req.body.caregiver;
    //console.log(req.body.caregiver.fname);
    //console.log(caregiver.fname);
    const caregiverFname=req.body.caregiver.fname;
    const caregiverLname=req.body.caregiver.lname;
    const caregiverEmail=req.body.caregiver.email;
    const caregiverContact=req.body.caregiver.contact;

    const {fname,lname,gender,maritalStatus,race,ethnicity,email,age,password,contact,address,city,county,caregiver,healthcareCoverage,healthcareExpense,data} = req.body;
    
    db.query('SELECT email from patient where email = ?', [email], async (error, results) => {
        if (error) {
            console.log(error);
        }


         if (results.length > 0) {
             console.log("result lenght > 0")
            return res.render('patientSignup', {
                message: 'The email is already in use',
                messageClass:'alert-warning'
            });
        }

       // else{
                let hashedPassword = await bcrypt.hash(password, 8);
                console.log(hashedPassword);
                var patID = 23;

                db.query('INSERT INTO patient SET ?', { first_name: fname, gender:gender,race:race, ethnicity:ethnicity,address:address, city:city, county:county, age:age, email:email, password: hashedPassword, marital_status:maritalStatus, email: email, password: hashedPassword ,last_name: lname, contact_no:contact,caregiver_fname:caregiver.fname,caregiver_lname:caregiver.lname,caregiver_contact:caregiver.contact,caregiver_email:caregiver.email,healthcare_coverage:healthcareCoverage,healthcare_expense:healthcareExpense }, (error, results) => {
                    if (error) {
                        console.log(error);
                    } else {

                        db.query('Select patient_id from patient where first_name=? and last_name=?',[fname,lname], (err,res)=>{
                            patID = res[0].patient_id;
                            patientIdForAllergy = patID;
                            console.log('Fetched patient id is: ',patID);

                            data.forEach(addAllergy);
                        
                            function addAllergy(item)
                            {
                                console.log("Function Call initiated")
                                
                                item = JSON.parse(item);
                                console.table(item);
                                
                                db.query('INSERT into allergic_conditions SET ?',{patient_id: patientIdForAllergy,description:item['desc'],start_date:item['startDate'],end_date:item['endDate'],is_allergy:item['isAllergy']},(er,re)=>{
                                    if(er){
                                        console.log(er);
                                    }else{
                                        console.log('Allergy Added');
                                    }
                                })
                            }
                        });

                        
                        
                
                        return res.render('PatientLogin', {
                            message: 'Please LogIn into the system',
                            messageClass:'alert-primary'
                        });
                    }

                });
            //}      

    });
    
    console.log(req.body);
    
   // return res.render('random');
}


exports.cancelBookingsPat = (req,res) => {
    console.log(req.body);
    const {appointment_id}=req.body;
    console.log(req.body);
  
    db.query('DELETE from appointment where appointment_id=?',[appointment_id],(errors,result)=>{
        if(errors){
            console.log(errors);
        }
    else{

    db.query('SELECT appointment_Dtime,appointment_type,appointment_id,appointment.doctor_id,first_name,last_name,charges,degree,specialization,clinic_name,zip,address,city from appointment left join (SELECT doctor_id,clinic_id,first_name,last_name,charges,degree,specialization,clinic_name,zip,address,city FROM doctor JOIN clinic using (clinic_id) where city=?) as doc_clinic on appointment.doctor_id=doc_clinic.doctor_id where appointment.patient_id = ?', [patientSess.city,patientSess.ids], (error, results) => {
        
        console.log(results);

        if (error) {
            console.log(error);
        }

        if (results.length === 0) {
            return res.render('viewBookingsPat', {
                message: 'No Bookings Found',
                messageClass:'alert-warning'
            });
        }
        else{
            return res.render('viewBookingsPat',{bookingDetails:JSON.stringify(results)});
        }
    });
    }
});
}



//function for patient registration
exports.patientSignup = (req, res) => {
    //console.log(req.body);

    // const { fname, lname, gender, marital_status,race,ethnicity,email, age, password, contact, altContact, address, city,country } = req.body;

    // db.query('SELECT email from patient where email = ?', [email], async (error, results) => {
    //     if (error) {
    //         console.log(error);
    //     }


        // if (results.length > 0) {
        //     return res.render('patientSignup', {
        //         message: 'The email is already in use',
        //         messageClass:'alert-warning'
        //     });
        // }


        // let hashedPassword = await bcrypt.hash(password, 8);
        // console.log(hashedPassword);


        // db.query('INSERT INTO patient SET ?', { first_name: fname, last_name: lname, email: email,password: hashedPassword, gender:gender, marital_status:marital_status, race:race,contact_no:contact, alt_contact:altContact, ethnicity: ethnicity, age: age, address: address, city: city,country:country }, (error, results) => {
        //     if (error) {
        //         console.log(error);
        //     } else {



   

                return res.render('completeProfile', {
                    message: 'User Registered!',
                    messageClass:'alert-primary'
                });
          //  }-------------------------->for else

        //});

        



   // });

    // res.send("Form Submitted");
}

//Wen patient selects specialization
//Needed doctor- doctor name,cnsultationcharges,full name,degree,specialization
//Needed clinic-,clinic name and full address

exports.searchDoctor = (req, res) => {

    

    const { specialization } = req.body;

    db.query('SELECT * FROM doctor WHERE specialization = ?', [specialization], (error, results, fields) => {

        // console.log(results);
        if (error) {
            console.log(error);
        }


        if (results.length === 0) {
            return res.render('searchDoctor', {
                message: 'Sorry, no doctors for selected specialization in your city!',
                messageClass:'alert-warning'
            });

        }

        db.query('SELECT doctor_id,first_name,last_name,charges,degree,specialization,clinic_name,address,city FROM doctor JOIN clinic using (clinic_id) WHERE specialization=? and city=?',[specialization,patientSess.city],(err,data)=>{

            if(err)
            {
                console.log(err);
            }
            else if(data.length===0)
            {
                return res.render('searchDoctor', {
                message: 'Sorry, no doctors for selected specialization in your city!',
                messageClass:'alert-warning'   
            });
        }
            else{

                console.log(data);
            return res.render('afterSearch', { items: JSON.stringify(data)});

            }
        })
        
        // let clinicData = {};

        // const chirag = () => {
        //     return new Promise((resolve, reject)=>{
        //         setTimeout(()=>{
        //             var i = 0;
        //             results.forEach((e) => {
    
        //                 db.query('SELECT clinic_name,plot_number,landmark,street,city FROM clinic where clinic_id= ?', [e.clinic_id], (err, data) => {
         
        //                         if (err) {
        //                             console.log(err);
        //                         } else {
        
        //                             clinicData = Object.assign(clinicData, data[0]);
        //                            resolve(clinicData); 
        //                         }  
        //                     }
        //                 );      
        //             });

        //         },1000);
     
        //     });
        // }

        // const chiragCaller=async()=>{
        //     console.log(results);
        //     const clinicData2=await chirag();
        //     console.log(clinicData2);
            
        // }
        // chiragCaller();




        // db.query('')

        

    });


}




exports.doctorSignup = (req, res) => {
    console.log(req.body);

    const { clinicId, fname, lname, email, consultingCharges, password, contactNo, degree, specialization } = req.body;

    db.query('SELECT email from doctor where email = ?', [email], async (error, results) => {
        if (error) {
            console.log(error);
        }


        else if (results.length > 0) {
            return res.render('doctorSignup', {
                message: 'The email is already in use',
                messageClass:'alert-warning'
            });
        }

      
        else{
                let hashedPassword = await bcrypt.hash(password, 8);
                console.log(hashedPassword);

                //entering into table -> doctor
                db.query('INSERT INTO doctor SET ?', { first_name: fname, email: email, password: hashedPassword ,last_name: lname,clinic_id: clinicId, contact_no:contactNo , degree: degree,charges: consultingCharges, specialization: specialization }, (error, results) => {
                    if (error) {
                        console.log(error);
                    } else {
                
                        return res.render('doctorLogin', {
                            message: 'You can now LogIn into the system',
                            messageClass:'alert-primary'
                        });
                    }

                });

            // else {
            //     return res.render('doctorSignup', {
            //         message: 'Your clinic is not registered, kindly register your clinic first!',
            //         messageClass:'alert-warning'
            //     });
            // }
       
            }
        //End-for clinic id search       

    });

}

exports.bookDoctor=(req,res)=>{
    return res.render('bookDoctor');
}


//Clinic Registration
exports.registerPractice = (req, res) => {
    console.log(req.body);

    const { name, email, contact, address, zip, city } = req.body;

    db.query('SELECT clinic_email from clinic where clinic_email = ?', [email], async (error, results) => {
        if (error) {
            console.log(error);
        }

        if (results.length > 0) {
            return res.render('registerPractice', {
                message: 'The email is already in use',
                messageClass:'alert-warning'
            });
        }


        // let hashedPassword = await bcrypt.hash(password,8);
        // console.log(hashedPassword);

        db.query('INSERT INTO clinic SET ?', { clinic_name: name, clinic_email: email, contact_no: contact, address:address, zip:zip, city:city }, (error, results) => {
            if (error) {
                console.log(error);
            } else {
                console.log(results);

                return res.render('registerPractice', {
                    message: 'Authentication initiated...Please check your mail for document submission!',
                    messageClass:'alert-primary'
                });
            }
        });
    });


}

//Adherence Calculation
exports.adhereResponse = (req,res) => {
    const patientId = patientSess.ids;
    //final result
    var request = require('request');

    var totalCost = 0;
    //operations + medicines + doctor ki fees
    db.query('Select SUM(operation_cost) as toc from operations WHERE patient_id = ?',[patientSess.ids],(err,res)=>{
        console.log(patientSess.ids);
        if(err)
        {
            console.log(err)
        }
         totalCost += res[0].toc;
         db.query('SELECT SUM(doctor_charges) as dCharges from appointment where patient_id =?',[patientSess.ids],(err4,res4)=>{
             if(err4)
             {
                 console.log(err4)
             }else{
                 totalCost += res4[0].dCharges;
             }
         })
        db.query('Select prescription_id from prescriptions where patient_id =?',[patientSess.ids],(err1,res1)=>{
            if(err1)
            {
                console.log(err1);
            }else{
                res1.forEach(fxn);
                function fxn(item)
                {
                    //console.log(item.prescription_id);
                    db.query('Select SUM(cost) as medicost from medicines where prescription_id=?',[item.prescription_id],(err2,res2)=>{
                        if(err2)
                        {
                            console.log(err2)
                        }else{
                            //console.log(res2[0].medicost);
                            totalCost += res2[0].medicost; //caution:totalCost might not get updated
                            //console.log(totalCost);
                        }
                    })
                }
            }
        })

    });
    //healthCoverage and Exprese
    var healthCovEx = 0;
    db.query('SELECT patient_id, SUM(healthcare_coverage+healthcare_expense) as coverageExpense from patient group by patient_id having patient_id = ?',[patientSess.ids],(err5,res5)=>{
        if(err5)
        {
            console.log(err5);
        }else{
            healthCovEx += res5[0].coverageExpense;
        }
    });

    var countAllergies = 0;
    db.query('SELECT COUNT(patient_id) as number from allergic_conditions where patient_id=?',[patientSess.ids],(err6,res6)=>{
        if(err6)
        {
            console.log(err6);
        }else{
            countAllergies += res6[0].number;
        }
    });

    var operat = 0;
    db.query('SELECT count(patient_id) as num from operations where patient_id=?',[patientSess.ids],(err7,res7)=>{
        if(err7)
        {
            console.log(err7)
        }else{
            operat += res7[0].num;
        }
    });

    
    //dispenses = number of followups
    var dispens = 0;
    db.query('SELECT SUM(is_followup) as followSum from appointment where patient_id=?',[patientSess.ids],(err0,res0)=>{
        if(err0)
        {
            console.log(err0)
        }else{
            dispens += res0[0].followSum;
        }
    })
    
    
    var courseDura = 0;
    db.query('SELECT * from prescriptions where patient_id=?',[patientSess.ids],(error,response)=>{
        if(error)
        {
            console.log(error)
        }else{
            response.forEach(myfunction);
            function myfunction(items)
            {
                db.query('SELECT datediff(?,?) as dif',[items.prescription_start,items.prescription_end],(er,re)=>{
                    if(er)
                    {
                        console.log(er)
                    }else{
                        courseDura += re[0].dif;
                    }
                })
            }
        }
    })
    db.query('Select datediff(,)')

    var encDura = 0;
    var countApp = 0;
    db.query('SELECT COUNT(patient_id) as cout in appointment where patient_id=?',[patientSess.ids],(error,response)=>{
        if(error)
        {
            console.log(error)
        }else{
            countApp += response[0].cout;
            encDura = countApp *15 *60;
        }
    })


    var encount = 0;
    db.query('SELECT COUNT(patient_id) as numb from appointment where patient_id=?',[patientSess.ids],(err8,res8)=>{
        if(err8)
        {
            console.log(err8)
        }else{
            encount += res8[0].numb;
        }
    })

    var dose = 0;
    db.query('Select prescription_id from prescriptions where patient_id=?',[patientSess.ids], (err9,res9)=>{
        if(err9)
        {
            console.log(err9)
        }else{
            res9.forEach(fxn);
            function fxn(item)
            {
                db.query('SELECT COUNT(prescription_id) as cout from medicines where prescription_id=?',[item.prescription_id],(err10,res10)=>{
                    if(err10)
                    {
                        console.log(err10);
                    }else{
                       dose += res10[0].cout;
                    }
                })
            }
        }
    })


    var options = {
    'method': 'POST',
    'url': 'https://adherence-ml-model.herokuapp.com/api',
    'headers': {
    'Authorization': 'Token 640a7d80eba6e437e94e9fdce7f17af32bb8f82d',
    'Content-Type': 'application/json'
  },

  body: JSON.stringify({
    "key": "rwg2nilbso05ak918xcz",
    "ENCOUNTERS": encount,
    "ENCOUNTER_DURATION": encDura,
    "DOSES": dose,
    "DISPENSES": dispens,
    "Total Course Duration": courseDura,
    "PROCEDURES": operat,
    "Allergies + Conditions": countAllergies,
    "HEALTHCARE_EXPENSES + HEALTHCARE_COVERAGE": healthCovEx,
    "TOTAL_CALCULATED_COST": totalCost
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  
});

    
}


//Booking
exports.bookingEntry = (req, res) => {
    console.log(req.body);

    const { docId,docCharges, dateBooked,timeBooked,appointment_type,desc,isFollowUp} = req.body;
    const dTime=dateBooked + ' ' + timeBooked + ':00';

    db.query('SELECT appointment_Dtime,doctor_id from appointment where appointment_Dtime= ? and doctor_id = ?', [dTime,docId], async (error, results) => {
        if (error) {
            console.log(error);
        }

        if (results.length > 0) {
            return res.render('bookDoctor', {
                message: 'This slot is unavailable, try another slot!',
                messageClass:'alert-warning'
            });
        }

        
        console.log(patientSess);
        db.query('INSERT INTO appointment SET ?', { appointment_Dtime: dTime, patient_id:patientSess.ids, doctor_id: docId,appointment_type:appointment_type,doctor_charges:docCharges,is_followup:isFollowUp,description:desc}, (error, results) => {
            if (error) {
                console.log(error);
            } else {
                console.log(results);

                return res.render('bookDoctor', {
                    message: 'Appointment Fixed, want to book another?',
                    messageClass:'alert-primary'
                });
            }

        });
    });
    
}

exports.viewPrescription = (req,res)=>{
  
    db.query('SELECT * from prescriptions LEFT JOIN (SELECT doctor.clinic_id,doctor_id,first_name,last_name,degree,specialization,clinic_name,address,city,zip from doctor LEFT JOIN (SELECT clinic_id,clinic_name,address,city,zip from clinic)as clinicData ON doctor.clinic_id=clinicData.clinic_id) AS finalData ON finalData.doctor_id=prescriptions.doctor_id',(error,result)=>{
        if(error)
        {
            console.log(error);
        }else{
            console.log(result);
            return res.render('beforeViewPrescription', { items: JSON.stringify(result)});
        }
    })
}

exports.viewFullPrescription = (req,res)=>{
    console.log(req.body.booking_id);
    const {prescription_id} = req.body;
    //console.log(typeof prescription_id);
    //console.log(prescription_id);
     res.render('viewPrescription');
}