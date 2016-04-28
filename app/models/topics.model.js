var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var topicsSchema = new Schema({
	author: String,
	topicName: String,
	topicDesc: String
});

module.exports = mongoose.model("Topics", topicsSchema);