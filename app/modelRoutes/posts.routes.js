module.exports = function(posts_route, posts) {

	posts_route.get(function(req, res) {
		var topicId = req.params.topicId; // Topic id for a post
		var postId = req.query.postId; // post id of a post
		res.send("In progress");
	});

	posts_route.post(function(req, res) {
		var params = {
			// params to send for posts
			"topicId" : req.body.topicId,
			"post"	: req.body.post,
			"author" : [req.body.pAuthor]
		};
		res.send("In progress");
	});
};