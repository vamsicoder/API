module.exports = function(topics_route, topics) {
	topics_route.get(function(req, res) {
		var topicId = req.query.topicId;
		if(!topicId) {
			topics.find(function(err, topics) {
				if(err) {
					res.send(err);
					return;
				}
				res.send(topics);
			});	
		} else {
			topics.findById(topicId, function(err, topic) {
				if(err) {
					res.send(err);
					return;
				}
				res.send(topic);
			})
		}
		
	});

	topics_route.post(function(req, res) {
		var name 	= req.body.tName;
		var desc 	= req.body.desc || "";
		var tAuthor  = req.body.tAuthor;		
		var tAuthorName = req.body.tAuthorName;
		var topicObj = {
			topicName : name,
			topicDesc : desc,
			author: tAuthor,
			authorName: tAuthorName
		};
		var tId;
		if(tId = req.body.tId) {
			topics.findOneAndUpdate({ _id: tId }, { new: true }, topicObj, function(err, topicUpdated) {
				if(err) {
					res.send(err);
					return;
				}
				res.send({
					status: 200,
					msg: "Updated Successfully",
					"topic": topicUpdated
				});
				
			})
			return;
		}

		if (!req.body.tAuthor) {
			res.send("Invalid parameters");
			return;
		}

		var topic	= new topics(topicObj);


		topic.save(function(err, savedTopic) {
			if(err) {
				res.send(err);
				return;
			}			

			res.send({
				status: 200,
				msg: "Created Successfully",
				"topic": savedTopic
			});
		});

	});

};	