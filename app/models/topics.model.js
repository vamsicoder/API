var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var topicsSchema = new Schema({
	author: {type: Schema.Types.ObjectId, ref: 'Users'},
	topicName: {type: String, unique: true},
	topicDesc: String,
	postsCount: {type: Number, default: 0, min: 0}

});

module.exports = mongoose.model("Topics", topicsSchema);