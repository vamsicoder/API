var express = require("express");
var router = express.Router();

var mongoose = require("mongoose");
mongoose.connect("mongodb://vamsi:vamsi93*V@ds021771.mlab.com:21771/vb");

// Models
var users = require("./app/models/users.model.js");
var topics = require("./app/models/topics.model.js");

// Shared Functions


// Users Routes

var users_route = router.route("/users");

require('./app/modelRoutes/users.routes.js')(users_route, users);



// Topics Routes

var topics_route = router.route("/topics");
require('./app/modelRoutes/topics.routes.js')(topics_route, topics);

// Posts Routes

var posts_route = router.route("/topics/:topicId/posts");
require('./app/modelRoutes/posts.routes.js')(posts_route);

// Comments Routes

var comments_route = router.route("/topics/:topicId/posts/:postId/comments");
require('./app/modelRoutes/comments.routes.js')(comments_route);

module.exports = router;