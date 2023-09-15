const { model, Schema } = require("mongoose");
const mongoose = require('mongoose');

const USER = new Schema({
    username: {
        type: String
    },
    firstname: {
        type: String
    },
    email: {
        type: String
    },
    number: {
        type: Number
    },
    dob: {
        type: Date
    },
    IsServiceProvider: {
        type: Boolean,
        default: false
    },
    profession: {
        type: Object
    },
    history: {
        type: Array
    },
    location: {
        type: Array
    },
    language: {
        type: Array
    },
    rating: {
        type: Number
    },
    rank: {
        type: number
    },
    char: {
        type: Array
    }
});

const User = mongoose.model("User", USER);
module.exports = User;