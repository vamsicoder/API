var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	name: String,
	emailId: String
});


module.exports = mongoose.model("Users", UserSchema);