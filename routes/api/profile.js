const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//Load Validation
const validateProfileInput = require('../../validation/profile')

//Load models
const Profile = require('../../models/Profile');
const User = require('../../models/User');

// GET api/profile/test
// Tests
router.get('/test', (req, res) => res.json({ msg: 'Profile Works' }));

// GET api/profile
// Get current user profile
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const errors = {};

    Profile.findOne({ user: req.user.id })
        .populate('user', ['name', 'avatar'])
        .then(profile => {
            if (!profile) {
                errors.noprofile = 'There is no profile for this user'
                return res.status(404).json(errors);
            }
            res.json(profile);
        })
        .catch(err => res.status(404).json(err));
});

// POST api/profile
// Create user profile
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateProfileInput(req.body);

    //Check
    if (!isValid) {
        //Return any errors with 400 status
        return res.status(400).json(errors)
    }

    //Get fields
    const profileFields = {};
    profileFields.user = req.user.id;
    if (req.body.income) profileFields.income = req.body.income;

    Profile.findOne({ user: req.user.id })
        .then(profile => {
            if (profile) {
                //Update
                Profile.findOneAndUpdate(
                    { user: req.user.id },
                    { $set: profileFields },
                    { new: true }
                )
                    .then(profile => res.json(profile));
            } else {
                //Save
                new Profile(profileFields).save().then(profile => res.json(profile));
            }
        })
});

module.exports = router;