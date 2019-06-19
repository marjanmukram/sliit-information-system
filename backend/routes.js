var express = require('express'); 
var routes = express.Router();

/** requires all classes that handles routes */ 
var AdminRoute = require('./admin/AdminRoute');
var StudentRoute = require('./student/StudentRoute')

/** routes the request to the specified class */ 
routes.use('/admin',AdminRoute);
routes.use('/student', StudentRoute);

module.exports = routes;