var express = require('express'); 
var routes = express.Router();

/** requires all classes that handles routes */ 
var AdminRoute = require('./admin/AdminRoute');

/** routes the request to the specified class */ 
routes.use('/admin',AdminRoute);

module.exports = routes;