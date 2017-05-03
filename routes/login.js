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

    if (req.user) {
        console.log(req.user);
        res.redirect("home");
    } else {
        console.log(req.user);
        res.render("layouts/login", { message: "Please input your username and password!" });
    }
});





router.get('/logout', (req, res)=> {

    req.logout();

    res.redirect('/home');
});


router.get('/login', (req, res)=> {

        
    res.render('layouts/login');
   
});


router.get("/home",(req,res)=>{
    console.log(req.user);
    res.render("layouts/home");

});

router.post('/login',
    passport.authenticate('local', {
        successRedirect: '/home',
        failureRedirect: '/login',
        failureFlash: true
    }));



module.exports = router;