module.exports = function(oauth_routes, users) {	
	// For Login
	oauth_routes.post(function(req, res) {
		var username = req.body.name;
		var password = req.body.password;

		var user = new users({
			"name": username,
			"password": password
		});

		user.validateUser(username, password, function(err, user) {
			if(err) {
				return res.status(400).send(err);
			}
			// Sends whole User object other than Password
			res.send({
				_id: user._id,
				name: user.name,
				emailId: user.emailId
			}); 
		});
	});

	// Need to add SSO Login later

}; 	