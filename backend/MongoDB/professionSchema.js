const { model, Schema } = require("mongoose");
const mongoose = require('mongoose');



const PROFESSION = new Schema({
    userid : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    Occupation : String,
    name:String,
    Category : String,
    Experience : String,
    Salary : Number,
    Details : String,
    Education: String,
    BarNumber : Number,
    DateOfPractice : Date,
    Badges : String,
    Tag: Array,
    Location:{
        type:String,
        default:"Agra"
    },
    NoOfCase: Number,
    IsLegalAdvisor : Boolean,
    RateOfAdvise  : Number,
    ContactNumber : Number,
    History : Array
})

const ProfessionModel = mongoose.model("proffesions",PROFESSION);
module.exports = ProfessionModel;