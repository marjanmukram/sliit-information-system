var express = require("express");
var routes = express.Router();

/** requires all classes that handles routes */

var AdminRoute = require("./admin/AdminRoute");
const AssignmentRoute = require("./Assignment/Assignment.route");

/** routes the request to the specified class */

routes.use("/admin", AdminRoute);
routes.use("/assignments", AssignmentRoute);

module.exports = routes;
