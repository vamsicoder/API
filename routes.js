var express = require("express");
var router = express.Router();

var users_route = router.route("/users");
users_route.get(function(req, res) {
	res.send("hiii users");
});

var topics_route = router.route("/topics");
topics_route.get(function(req, res) {
	
	res.send("hii topics");
;})

module.exports = router;