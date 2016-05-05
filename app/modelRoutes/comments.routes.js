module.exports = function(comments_route, comments) {

	comments_route.get(function(req, res) {
		var topicId = req.params.topicId;
		var postId = req.params.postId;
		var commentId = req.query.commentId; // To get a specific comment else returns all comments
		res.send("In progress");
	});

	comments_route.post(function(req, res){
		var params = {
			// params to send for comments
			topicId : req.body.topicId,
			postId : req.body.postId,
			comment: req.body.comment,
			author: req.body.cAuthor
		};

		res.send("In progress");
	})
};