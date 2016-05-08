var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var port = process.env.PORT || 3000;

//Configure
function configure() {	
	app.use(bodyParser.urlencoded({extended:true}));
	app.use(bodyParser.json());
	app.use(express.static(__dirname + "/app"));
	app.use("/libs", express.static(__dirname + "/app/bower_components"));
	app.use("/src",  express.static(__dirname + "/app/src"))
}

configure();

// Default route

app.get("/", function(req, res) {
	res.renderFile("index.html");
});



// Custom Routes

var routes = require("./router");
app.use("/api", routes);


// Listen to port
app.listen(port, function() {
	console.log("Listening to port " + port);
});