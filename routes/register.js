
const express = require('express');
const router = express.Router();
const data = require("../data");
const Register = data.register;
const path = require('path');



router.post("/register", (req, res) => {

  Register.registerUser(req.body.username, req.body.password, req.body.reenterpassword).then(() => {
    console.log("Goto login!");
    res.render("layouts/login");

  }, (reject) => {
    res.render("layouts/register", { message: `${reject}` });
  }).catch((error) => {
    res.render("layouts/register", { message: `${error}` });
  });
})

module.exports = router;