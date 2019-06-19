const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Student = new Schema({
    regNumber : {
        type : String,
        length : 10,
        required : true,
    },
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    phone : {
        type : String,    
    },
    dateOfBirth : {
        type : Date,
        required : true
    },
    address : {
        type : String,
        required : true,
    },
    assignments : {
        type : Array,
    },
    courses : {
        type : Array,
    },
    exams : {
        type : Array,
    },
})

module.exports = mongoose.model('student',Student)
