const { model, Schema } = require("mongoose");
const mongoose = require('mongoose');

const USER = new Schema ({
    username : String,
    name: {
        type: String
    },
    password: {
        type: String
    },
    email :{
        type: String
    },
    number : {
        type : Number
    },
    dob : {
        type : Date
    },
    IsServiceProvider : {
        type : Boolean,
        default : false
    },
    profession : {
        type :String
    },
    isProfileComplete : {
        type:Boolean,
        default : false
    },
    professionDetails : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "proffesions"
    },
    location: {
        type: String
    },
    language : {
        type : Array
    },
    rating : {
        type : Number
    },
    rank: {
        type: Number

    },
    char : {
        type :Array
    }
});

const User = mongoose.model("User",USER);
module.exports = User;
