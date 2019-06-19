const mongoose = require('mongoose')
const schema = mongoose.Schema
// const course = require('./Course')
const course;

var Instructor = new schema({
    regId:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    dateOfBirth:{
        type:Date,
        required:true
    },
    courses:[{
        type:schema.Types.ObjectId,
        ref:course
    }]
})

module.exports = mongoose.model('instructor',Instructor)