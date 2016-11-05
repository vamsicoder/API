app.factory("applicationConsts", ["$location", function($location) {
	
	var exports = {};
	var _baseUrl = window.DEV_URL;
	var _api = "/api";
	var _services = {};

	// Add Services

	_services["login"] = {
		method: "post",
		url: _baseUrl + _api +"/oauth"
	}

	_services["signUp"] = {
		method: "post",
		url: _baseUrl + _api + "/users"
	}

	_services["get_topics"] = {
		method: "get",
		url: _baseUrl + _api + "/topics"
	}

	_services["create_topic"] = {
		method: "post",
		url: _baseUrl + _api + "/topics"
	}
	
	exports.services = _services;

	Object.freeze(exports);

	return exports;
}]);