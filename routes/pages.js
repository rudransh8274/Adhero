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

// router.get('/auth/searchDoctors',urlencodedParser,(req,res)=>{
//     res.render("searchDoctors");
// });

module.exports=router;