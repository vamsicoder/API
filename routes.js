var express = require("express");
var router = express.Router();

var mongoose = require("mongoose");
mongoose.connect("mongodb://vamsi:vamsi93*V@ds021771.mlab.com:21771/vb");

// Models
var models = require("./app/app.models.js");
// Shared Functions


 // Routes for the App

 require("./app/app.routes.js")(router, models);

module.exports = router;