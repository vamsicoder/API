var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var commentsSchema = new Schema({
	topicId: [{type: Schema.Types.ObjectId, ref: 'Topics'}],
	postId: [{type: Schema.Types.ObjectId, ref: 'Posts'}],
	comment: String,
	author: [{type: Schema.Types.ObjectId, ref: 'Users'}]
});

module.exports = mongoose.model("Comments", commentsSchema);