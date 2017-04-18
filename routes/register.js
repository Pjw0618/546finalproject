const express = require('express');
const router = express.Router();
const data = require("../data");
const User = data.users;
const path = require('path');

console.log("register");

router.post("/register", (req, res) => {

    // if (req.user) {
    //     res.redirect("private");
    // }
    // else {
    //     res.render("layouts/login",{ message: "Please input your username and password!"});
    // }
    console.log(1231);

    if(req.field.username==null){
    	console.log(req.field.username);

    	res.render("layouts/register",{message:"Please enter your username"});
    }else if(req.field.password==null){
    	console.log(req.field.password);

    	res.render("layouts/register",{message:"Please enter your password"});
    }else if(req.field.reenterpassword==null){
    	console.log(req.field.reenterpassword);
    	res.render("layouts/register",{message:"Please re-enter your username"});
    }else if(req.field.password!==null && req.field.reenterpassword){

    	res.render("layouts/register",{message:"your password does not match the first time you enter"});
    }else{
    	//db operation, insert data to db
    	res.redirect("login");
    }


});

// router.get("/private", (req, res, next) => {
//     if (!req.user) {
//         res.render("layouts/login", { message: "Please Login Firstly" });
//     }
//     else {
//         res.render("layouts/private", req.user);
//     }
// });



module.exports = router;