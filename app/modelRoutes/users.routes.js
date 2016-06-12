module.exports = function(users_route, users) {

	users_route.get(function(req, res) {
		// Used to check for Admin purposes
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
		// Creates Users
		var name 	 = req.body.name;
		var emailId  = req.body.emailId;
		var password = req.body.password;
		
		if(!(name && emailId && password)) {
			res.status(400).send("Invalid parameters");			
			return;
		}

		var user = new users({
			"name"	  : name,
			"emailId" : emailId,
			"password": password
		});	

		user.save(function(err, createdUser) {
			if(err) {
				res.send(err);
				return;
			}

			res.status(200).send({				
				msg	   : "Created Successfully",
				user   : createdUser
			});
		});
	});

};
