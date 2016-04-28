var express = require("express");
var router = express.Router();

var mongoose = require("mongoose");
mongoose.connect("mongodb://vamsi:vamsi93*V@ds021771.mlab.com:21771/vb");

// Models
var users = require("./app/models/users.model.js");
var topics = require("./app/models/topics.model.js");

// Users Routes
var users_route = router.route("/users");

users_route.get(function(req, res) {
	var userId = req.query.name;	
	users.find({name: userId}, function(err, user) {
		if(err) {
			res.send(err);
		}
		res.json(user);
	})
});

users_route.post(function(req, res) {
	var name 	 = req.body.name;
	var emailId  = req.body.emailId;

	var user 	 = new users();
	user.name 	 = name;
	user.emailId = emailId;

	user.save(function(err) {
		if(err) {
			res.send(err);
		}
		res.send("Saved Successfully");
	});
});


// Topics Routes

var topics_route = router.route("/topics");
topics_route.get(function(req, res) {
	
	res.send("hii topics");
;})

module.exports = router;