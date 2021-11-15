const express=require('express');
var bodyParser= require('body-parser');

var urlencodedParser=bodyParser.urlencoded({extended:false});

const router=express.Router();

router.get('/',urlencodedParser,(req,res)=>{
    res.render("index");
});

router.get('/doctorLogin',urlencodedParser,(req,res)=>{
    res.render("doctorLogin");
});
router.get('/doctorSignup',urlencodedParser,(req,res)=>{
    res.render("doctorSignup");
});
router.get('/registerPractice',urlencodedParser,(req,res)=>{
    res.render("registerPractice");
});
router.get('/patientLogin',urlencodedParser,(req,res)=>{
    res.render("patientLogin");
});
router.get('/patientSignup',urlencodedParser,(req,res)=>{
    res.render("patientSignup");
});
router.get('/addPrescription',urlencodedParser,(req,res)=>{
    res.render("addPrescription");
});

router.get('/addAllergies',urlencodedParser,(req,res)=>{
    res.render("addAllergies");
});
router.get('/completeProfile',urlencodedParser,(req,res)=>{
    res.render("completeProfile");
});
router.get('/searchDoctor',urlencodedParser,(req,res)=>{
    res.render("searchDoctor");
});
router.get('/afterSearch',urlencodedParser,(req,res)=>{
    res.render("afterSearch");
});
router.get('/bookDoctor',urlencodedParser,(req,res)=>{
    res.render("bookDoctor");
});
router.get('/patientHome',urlencodedParser,(req,res)=>{
    res.render("patientHome");
});
router.get('/doctorHome',urlencodedParser,(req,res)=>{
    res.render("doctorHome");
});

router.get('/viewPrescription',urlencodedParser,(req,res)=>{
    res.render("viewPrescription");
});
router.get('/random',urlencodedParser,(req,res)=>{
    res.render("random");
});
router.get('/viewBookingsPat',urlencodedParser,(req,res)=>{
    res.render("viewBookingsPat");
});
//Fictitious
router.get('/adhereResponse',urlencodedParser,(req,res)=>{
    res.render("adhereResponse");
});

// router.get('/afterPatLogin',urlencodedParser,(req,res)=>{
//     res.render("afterPatLogin");
// });

//After Authentication
router.get('/auth/patientLogin',urlencodedParser,(req,res)=>{
    res.render("patientLogin");
});
router.get('/auth/doctorLogin',urlencodedParser,(req,res)=>{
    res.render("doctorLogin");
});
router.get('/auth/afterPatLogin',urlencodedParser,(req,res)=>{
    res.render("afterPatLogin");
});
router.get('/auth/adhereResponse',urlencodedParser,(req,res)=>{
    res.render("adhereResponse");
});

//can be of no use
router.get('/auth/registerPractice',urlencodedParser,(req,res)=>{
    res.render("registerPractice");
});
router.get('/auth/random',urlencodedParser,(req,res)=>{
    res.render("random");
});


module.exports=router;