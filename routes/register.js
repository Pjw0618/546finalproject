const express = require('express');
const router = express.Router();
const data = require("../data");
const Register = data.register;
const path = require('path');

console.log("register");

router.post("/register", (req, res) => {
 Register.registerUser(username,password,reenterpassword).then(()=>{
    Register.registerUser(req.body.username,req.body.password,req.body.reenterpassword).then(()=>{
      	
 		res.render("layouts/login");
 		res.render("layouts/profile");
  
  }, (reject) => {
    res.render("layouts/register", { message: `${reject}` });
  });




    // if(!(req.body.username.length >= 6 && req.body.username.length <= 10)){
    // 	console.log(req.body.username);

    // 	res.render("layouts/register",{message:"Please enter your username and length must between 6 to 10"});
    // }else if(req.body.password.length <= 0){
    // 	console.log(req.body.password);

    // 	res.render("layouts/register",{message:"Please enter your password"});
    // }else if(req.body.reenterpassword <= 0 ){
    // 	console.log(req.body.reenterpassword);
    // 	res.render("layouts/register",{message:"Please re-enter your password"});
    // }else if(req.body.password <= 0 && req.body.password===req.body.reenterpassword){

    // 	res.render("layouts/register",{message:"your password does not match the first time you enter"});
    // }else{
    // 	//db operation, insert data to db
    // 	res.render("layouts/login");
    // }
    Register.registerUser(req.body.username,req.body.password,req.body.reenterpassword).then(()=>{
    	
		res.render("layouts/profile");


    },(reject)=>{

    	res.render("layouts/register",{message: `${reject}`});
    });


>>>>>>> 9b52077c0aa156cf41830ea43231466efebcc76b
});


module.exports = router;