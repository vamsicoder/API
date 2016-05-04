var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var topicsSchema = new Schema({
	author: [{type: Schema.Types.ObjectId, ref: 'Users'}],
	topicName: {type: String, unique: true},
	topicDesc: String
});

module.exports = mongoose.model("Topics", topicsSchema);