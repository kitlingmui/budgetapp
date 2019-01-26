const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const PostSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    date: {
        type: Date
    },
    amount: {
        type: Number,
        required: true
    },
    merchant: {
        type: String,
        required: true
    },
    reason: {
        type: String
    }
});

module.exports = Post = mongoose.model('post', PostSchema);