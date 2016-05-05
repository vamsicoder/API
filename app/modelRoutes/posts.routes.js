module.exports = function(posts_route, posts) {

	posts_route.get(function(req, res) {
		var topicId = req.params.topicId; // Topic id for a post
		var postId = req.query.postId; // post id of a post

		if(!topicId) {
			res.send("Invalid Params");
			return;
		}
		
		if(postId) {
			posts.findById(postId, function(err, post) {
				if(err) {
					res.send(err);
					return;
				}
				res.send(post);
			});
		} else {
			posts.find(function(err, allPosts) {
				if(err) {
					res.send(err);
					return;
				} 
				res.send(allPosts);
			});
		}
		
	});

	posts_route.post(function(req, res) {

		if(!req.body.topicId || !req.body.pAuthor) {
			res.send("Invalid Params");
			return;
		}
		var post = new posts({
			"topicId" : req.body.topicId,
			"post"	: req.body.post,
			"author" : [req.body.pAuthor]
		});
		
		post.save(function(err, createdPost) {
			if(err) {
				res.send(err);
				return;
			}
			res.send({
				status : 200,
				msg	   : "Created Successfully",
				post   : createdPost
			});
		});
		
	});
};