const express = require('express');
const router = express.Router();
const data = require("../data");
const User = data.users;
const path = require('path');


router.post('/profile',(req,res)=>{

	let name = req.body.name;
	let hobby = req.body.hobby;

	User.updateProfile(name,hobby).then(()=>{
		console.log(1);
		res.render('layouts/shopping');

	},(reject)=>{

		res.render("layouts/register",{message: `${reject}`});
	});


    
});

module.exports = router;