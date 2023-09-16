const { model, Schema } = require("mongoose");
const mongoose = require('mongoose');

Occupation : 
Category : 
Experience : 
Salary :
Details : 
Education: 
BarNumber :
DateOfPractice :
Badges :
Tag:
NoOfCase:
IsLegalAdvisor :  BOOL
RateOfAdvise  :
ContactNumber :


const PROFESSION = new Schema({
    userid : String,
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
    NoOfCase: Number,
    IsLegalAdvisor : Boolean,
    RateOfAdvise  : Number,
    ContactNumber : Number,
    History : Array
})