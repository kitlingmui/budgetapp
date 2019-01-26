const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//Post model
const Post = require('../../models/Post')

//Profile model
const Profile = require('../../models/Profile')

//Validation
const validatePostInput = require('../../validation/post')

// GET api/posts/test
// Tests
router.get('/test', (req, res) => res.json({ msg: 'Posts Works' }));

// GET api/posts
// Get post
router.get('/', (req, res) => {
    Post.find()
        .sort({ date: -1 })
        .then(posts => res.json(posts))
        .catch(err => res.status(404).json({ nopostsfound: 'No posts found' }));
}
)
// GET api/posts/:id
// Get post by id
router.get('/:id', (req, res) => {
    Post.findById(req.params.id)
        .then(post => res.json(post))
        .catch(err => res.status(404).json({ nopostfound: 'No post found with that ID' }));
})

// POST api/posts
// Create post
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    //Check Validation
    if (!isValid) {
        return res.status(400).json(errors)
    }

    const newPost = new Post({
        amount: req.body.amount,
        merchant: req.body.merchant,
        name: req.body.name,
        avatar: req.body.avatar,
        user: req.user.id
    });

    newPost.save().then(post => res.json(post));
})

// DELETE api/posts/:id
// Delete post by id
router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Profile.findOne({ user: req.user.id })
        .then(profile => {
            Post.findById(req.params.id)
                .then(post => {
                    // Check for post owner
                    if (post.user.toString() !== req.user.id) {
                        return res.status(401).json({ notauthorized: 'User not Authorized' });
                    }

                    //Delete
                    post.remove().then(() => res.json({ success: true }));
                })
                .catch(err => res.status(404).json({ postnotfound: 'No post found' }));
        });
})

module.exports = router;