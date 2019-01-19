var express = require('express');
var User = require('../models/account')

module.exports = app => {
    app.post('/register', function (req, res) {
        console.log("kyleskdjfasjf;a")
        if (req.body.firstName && req.body.lastName && req.body.email && req.body.password) {

            var userData = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password
            }

            User.create(userData, function (err, user) {
                if (err) {
                    // next(err)
                    console.log(err)
                } else {
                    req.session.userID = user._id
                    res.send('/AccountInfo')
                }
            });

            console.log(userData)
        }
    });

    // app.get('/MainPage', function (req, res, next) {
    //     User.findById(req.session.userId)
    // });

}