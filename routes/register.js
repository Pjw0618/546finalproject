const express = require('express');
const router = express.Router();
const data = require("../data");
const Register = data.register;
const path = require('path');
const xss = require('xss');


router.post("/register", (req, res) => {
    Register.registerUser(req.body.username, req.body.password, req.body.reenterpassword).then(resolve => {
        console.log("resolve");
        res.render("layouts/login");
    }).catch((error) => {
        // var error = document.getElementById("").value;
        //res.render("layouts/login", { message: `${error}` });
        res.render("layouts/register",{ message: xss(`${error}`) });
    });

});
module.exports = router;