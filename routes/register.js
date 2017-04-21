
const express = require('express');
const router = express.Router();
const data = require("../data");
const Register = data.register;
const path = require('path');

console.log("register");

router.post("/register", (req, res) => {
    Register.registerUser(req.body.username, req.body.password, req.body.reenterpassword).then(() => {
      console.log("Goto login!");
      res.render("layouts/login");
      //res.render("layouts/profile");

    }, (reject) => {
      res.render("layouts/register", { message: `${reject}` });
    });
  })

module.exports = router;