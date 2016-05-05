module.exports = function(users_route, users) {

	users_route.get(function(req, res) {
		var userId = req.query.id;	
		if(userId) {
			users.findById(userId, function(err, user) {
				if(err) {
					res.send(err);
					return;
				}
				res.send(user);
			});
		} else {
			users.find(function(err, user) {
				if(err) {
					res.send(err);
					return;
				}
				res.send(user);
			});
		}
		
	});

	users_route.post(function(req, res) {
		var name 	 = req.body.name;
		var emailId  = req.body.emailId;

		if(!name || !emailId) {
			res.send("Invalid parameters");
			return;
		}

		var user 	 = new users({
			"name"	 : name,
			"emailId": emailId
		});
		
		user.save(function(err, createdUser) {
			if(err) {
				res.send(err);
				return;
			}

			res.send({
				status : 200,
				msg	   : "Created Successfully",
				user   : createdUser
			});
		});
	});

};