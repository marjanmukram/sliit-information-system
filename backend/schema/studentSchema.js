const studentSchema = new studentSchema({
    regNumber : {
        type : String,
        length : 10,
        required : true,
    },
    name : {
        type : String,
        required : true,
    },
    dob : {
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
