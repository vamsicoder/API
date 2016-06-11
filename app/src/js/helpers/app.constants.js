app.factory("applicationConsts", ["$location", function($location) {
	
	var exports = {};
	var _baseUrl = window.DEV_URL;
	var _api = "/api";
	var _services = {};

	// Add Services
	
	exports.services = _services;

	Object.freeze(exports);

	return exports;
}]);