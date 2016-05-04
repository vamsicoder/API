module.exports = function(users_route, users, errorFunc) {
	users_route.get(function(req, res) {
		var userId = req.query.name;	
		users.find({name: userId}, function(err, user) {
			if(err) {
				res.send(err);
				return;
			}
			res.send(user);
		});
	});

	users_route.post(function(req, res) {
		var name 	 = req.body.name;
		var emailId  = req.body.emailId;

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