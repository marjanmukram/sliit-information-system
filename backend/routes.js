var express = require("express");
var routes = express.Router();


/** requires all classes that handles routes */
var AdminRoute = require('./admin/AdminRoute');
var InstructorRoute = require('./instructor/InstructorRoute');
const AssignmentRoute = require("./Assignment/Assignment.route");
const CourseRoute = require("./Course/Course.route");
var StudentRoute = require('./student/StudentRoute')

/** routes the request to the specified class */ 
routes.use("/admin", AdminRoute);
routes.use('/instructor',InstructorRoute);
routes.use("/assignments", AssignmentRoute);
routes.use("/courses", CourseRoute);
routes.use('/student', StudentRoute);


module.exports = routes;
