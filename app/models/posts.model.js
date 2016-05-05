var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var postsSchema = new Schema({
	topicId: {type: Schema.Types.ObjectId, ref: 'Topics'},
	post: String,
	author: {type: Schema.Types.ObjectId, ref: 'Users'}
});

module.exports = mongoose.model("Posts", postsSchema);