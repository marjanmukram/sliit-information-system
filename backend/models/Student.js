const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const Student = new Schema({
  regNumber: {
    type: String,
    length: 10,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  //   assignments: [
  //     {
  //       type: ObjectId,
  //       ref: "Assignment"
  //     }
  //   ],
  courses: [
    {
      type: ObjectId,
      ref: "Course"
    }
  ],
  //   exams: [
  //     {
  //       type: ObjectId,
  //       ref: "Exam"
  //     }
  //   ],
  submissions: [
    {
      type: ObjectId,
      ref: "Submission"
    }
  ]
});

module.exports = mongoose.model("student", Student);
