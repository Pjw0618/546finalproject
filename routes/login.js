const express = require('express');
const router = express.Router();
const data = require("../data");
const User = data.users;
const path = require('path');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    },

    function(username, password, done) {

        User.getUserByUsernameAndPassword(username, password).then((user) => {

            console.log("success");
            return done(null, user);
        }, (reject) => {
            console.log("wrong!");

            return done(null, false);
        });
    }
));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

router.get("/", (req, res) => {

    // if (req.user) {

    //     res.redirect("home");
    // } else {
        console.log("layouts/home");
        res.render("layouts/home", { message: "Please input your username and password!" });
    // }
});





router.get('/logout', function(req, res) {

    req.logout();

    res.redirect('/home');
});


router.get('/login', function(req, res) {

    res.render('layouts/login');
});


router.post('/login',
    passport.authenticate('local', {
        successRedirect: '/home',
        failureRedirect: '/login',
        failureFlash: true
    }));



module.exports = router;