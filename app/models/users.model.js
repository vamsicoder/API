var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	name: String,
	emailId: {type: String, unique: true}
});


module.exports = mongoose.model("Users", UserSchema);