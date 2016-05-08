var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var postsSchema = new Schema({
	topicId: {type: Schema.Types.ObjectId, ref: 'Topics'},
	post: String,
	author: {type: Schema.Types.ObjectId, ref: 'Users'},
	commentsCount: {type: Number, default: 0, min: 0}
});

module.exports = mongoose.model("Posts", postsSchema);