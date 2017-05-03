const express = require('express');
const router = express.Router();
const data = require("../data");
const User = data.users;
const path = require('path');


router.post('/profile',(req,res)=>{

	let id = req.user._id;
	let name = req.body.name;
	let hobby = req.body.hobby;

	User.updateProfile(id,name,hobby).then(()=>{
		
		res.render('layouts/home');

	},(reject)=>{

		res.render("layouts/userProfile",{message: "system error!"});
	});


    
});

router.get("/profile",(req,res)=>{

	if(user){

		res.render("layouts/userProfile",{user:req.user});

	}else{
		res.render("layouts/login",{message:"please login first"});
	}

	

});

module.exports = router;