const express=require('express');
var bodyParser= require('body-parser');
const session=require('express-session');

var urlencodedParser=bodyParser.urlencoded({extended:false});

const authController=require('../controllers/auth');
const router=express.Router();

//after form submission, it has its action=auth/register then it wil call a funciton=register which is in auth controller
//which has been exported upwards, i.e. on another directory=contorllers/auth
router.post('/patientLogin', authController.patientSignup);
router.post('/registerPractice', authController.registerPractice);  
router.post('/afterLogin', authController.afterLogin);
router.post('/doctorLogin', authController.doctorSignup);
router.post('/searchDoctor', authController.searchDoctor);
router.post('/bookingEntry', authController.bookingEntry);
router.post('/addAllergies', authController.addAllergies);
router.post('/doctorHome', authController.doctorHome);
//router.post('/adhere', authController.adhere);
router.post('/viewBookingsPat', authController.viewBookingsPat);
router.post('/viewBookingsDoc', authController.viewBookingsDoc);
router.post('/viewPrescription', authController.viewPrescription);
router.post('/addPrescription', authController.addPrescription);
router.post('/cancelBookingsPat', authController.cancelBookingsPat);
router.post('/adhereResponse', authController.adhereResponse);
router.post('/viewFullPrescription', authController.viewFullPrescription);
router.post('/addingPrescription', authController.addingPrescription);//after doctor filled form
// router.post('/bookDoctor',authController.bookDoctor);




// router.post('/login', authController.login);
module.exports=router;