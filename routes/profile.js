const express = require('express');
const router = express.Router();
const data = require("../data");
const User = data.users;
const path = require('path');


router.post('/profile', (req, res) => {

    let id = req.user._id;
    let name = req.body.name;
<<<<<<< HEAD
    let hobby = req.body.hobby;s
=======
    let hobby = req.body.hobby;

    User.updateProfile(id, name, hobby).then(() => {

        res.render('layouts/home');

    }, (reject) => {
>>>>>>> a0055aa52912b294ed766034eb58495d8043c77c

        res.render("layouts/userProfile", { message: "system error!" });
    });



});

router.get("/userProfile", (req, res) => {

    if (req.user) {

        res.render("layouts/userProfile", { user: req.user });

    } else {
        res.render("layouts/login", { message: "please login first" });
    }


<<<<<<< HEAD
=======

>>>>>>> a0055aa52912b294ed766034eb58495d8043c77c
});


module.exports = router;