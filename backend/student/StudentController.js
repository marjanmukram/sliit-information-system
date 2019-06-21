const Student = require("../models/Student");

const StudentController = function() {
  // Update submission list of Student
  this.updateSubmissionList = (id, submissionId) => {
    return new Promise((resolve, reject) => {
      // Find student using id, update submission array then save.
      Student.findById(id)
        .then(student => {
          if (student) {
            student.submissions.push(submissionId);
            student
              .save()
              .then(() => {
                resolve({
                  status: 200,
                  confirmation: "Success",
                  message: "Updated Submissions List"
                });
              })
              .catch(err => {
                reject({
                  status: 500,
                  confirmation: "Fail",
                  message: "Error: " + err
                });
              });
          } else {
            reject({
              status: 404,
              confirmation: "Fail",
              message: "Student Not Found"
            });
          }
        })
        .catch(err => {
          reject({
            status: 500,
            confirmation: "Fail",
            message: "Error: " + err
          });
        });
    });
  };
};

module.exports = new StudentController();
