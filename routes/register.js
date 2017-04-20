const express = require('express');
const router = express.Router();
const data = require("../data");
const Register = data.register;
const path = require('path');

console.log("register");

router.post("/register", (req, res) => {
  Register.registerUser(req.body.username, req.body.password, req.body.reenterpassword).then(() => {
    console.log("goto login");
    res.render("layouts/login");
  }, (reject) => {
    res.render("layouts/register", { message: `${reject}` });
  });
});


module.exports = router;