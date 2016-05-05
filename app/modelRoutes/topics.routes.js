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
		var tAuthor  = [];
		tAuthor.push(req.body.tAuthor);

		if (!req.body.tAuthor) {
			res.send("Invalid parameters");
			return;
		}

		var topic	= new topics({
			topicName : name,
			topicDesc : desc,
			author: tAuthor
		});


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