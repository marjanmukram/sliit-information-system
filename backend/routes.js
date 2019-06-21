var express = require('express'); 
var routes = express.Router();

/** requires all classes that handles routes */ 
var AdminRoute = require('./admin/AdminRoute');
var InstructorRoute = require('./instructor/InstructorRoute');

/** routes the request to the specified class */ 
routes.use('/admin',AdminRoute);
routes.use('/instructor',InstructorRoute);

module.exports = routes;