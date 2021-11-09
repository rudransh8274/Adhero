const express=require('express');
var bodyParser= require('body-parser');

var urlencodedParser=bodyParser.urlencoded({extended:false});

const router=express.Router();

router.get('/',urlencodedParser,(req,res)=>{
    res.render("index");
});

// router.get('/doctorLogin',urlencodedParser,(req,res)=>{
//     res.render("doctorLogin");
// });


// router.get('/auth/searchDoctors',urlencodedParser,(req,res)=>{
//     res.render("searchDoctors");
// });

module.exports=router;