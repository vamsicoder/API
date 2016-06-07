var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var UserSchema = new Schema({
	name: String,
	emailId: {type: String, unique: true},
	password: String
});

UserSchema.pre("save", function(next) {
	var user = this;
	// Actions to be done before saving
	next();
});

/*
	Validates Password 
*/
UserSchema.methods.comparePasswords = function(userPassword, cb) {	

	var users = this;
	users.model("Users").findOne({"password": userPassword}, function(err, user) {
		if(err) {
			return cb("Password mismatch.. Try again");
		}		
		cb(null, true);
	});
}

/*
	Finds User Object for a User name
*/
UserSchema.methods.findUser = function(username, cb) {
	var users = this;
	users.model("Users").findOne({"name": username}, function(err, user) {
		if(err) {
			return cb(err);
		}		
		cb(null, user);
	})
}

/*
	Validates User name and Password - Login
*/
UserSchema.methods.validateUser = function(name, password, cb) {
	var users = this;
	users.findUser(name, function(err, user) {
		if(err) {
			return cb(err);
		}		
		users.comparePasswords(user.password, function(err, isMatched) {
			if(err) {
				return cb(err);
			}
			console.log("user data in final callback" + user);
			cb(null, user);
		});

	});
};


module.exports = mongoose.model("Users", UserSchema);