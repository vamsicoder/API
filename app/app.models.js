var users = require("./models/users.model");
var topics = require("./models/topics.model");
var posts = require("./models/posts.model");
var comments = require("./models/comments.model");

module.exports = {
	usersModel	 :  users,
	topicsModel	 :  topics,
	postsModel	 :  posts,
	commentsModel: comments
};

