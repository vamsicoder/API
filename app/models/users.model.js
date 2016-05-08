var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require("bcrypt");
var SALT_WORK_FACTOR = 10;

var UserSchema = new Schema({
	name: String,
	emailId: {type: String, unique: true},
	password: String
});

UserSchema.pre("save", function(next) {
	var user = this;
	// Encrypt the Password of a User before saving
	bcrypt.hash(user.password, SALT_WORK_FACTOR, function(err, hashedPwd) {
		if(err) {
			return next(err);
		}
		// Changes the password to hash and saves
		user.password = hashedPwd;
		next();
	});
});

/*
	Validates Password 
*/
UserSchema.methods.comparePasswords = function(userPassword, cb) {
	bcrypt.compare(userPassword, this.password, function(err, isMatched) {
		if(err) {
			return cb(err);
		}
		console.log(isMatched);
		if(!isMatched) {
			return cb("Password mismatch.. Try again");
		}
		cb(null, isMatched);
	});

};

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


module.exports = mongoose.model("Users", UserSchema);;