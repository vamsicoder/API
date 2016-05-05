module.exports = function(comments_route, comments) {

	comments_route.get(function(req, res) {
		var topicId = req.params.topicId;
		var postId = req.params.postId;
		var commentId = req.query.commentId; // To get a specific comment else returns all comments
		if(!topicId || !postId) {
			res.send("Invalid Params");
			return;
		}

		if(commentId) {
			comments.findById(commentId, function(err, comment) {
				if(err) {
					res.send(err);
					return;
				}
				res.send(comment);
			});
		} else {
			comments.find(function(err, allcomments) {
				if(err) {
					res.send(err);
					return;
				} 
				res.send(allcomments);
			});
		}

	});

	comments_route.post(function(req, res){		

		if(!req.body.topicId || !req.body.postId || !req.body.cAuthor) {
			res.send("Invalid Params");
			return;
		}

		var comment = new comments({
			topicId : req.body.topicId,
			postId : req.body.postId,
			comment: req.body.comment,
			author: req.body.cAuthor
		});

		comment.save(function(err, createdComment) {
			if(err) {
				res.send(err);
				return;
			}
			res.send({
				status : 200,
				msg	   : "Created Successfully",
				comment   : createdComment
			});
		});

	})
};

//57224d6ccd4885781a26be24