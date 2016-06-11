app.factory("servicecalls", ["$http", "applicationConsts", function($http, applicationConsts) {
	var _exports = {};

	function makeCall(service_name, params) {
		var service = applicationConsts.services[service_name];		
		if(service.method === "get") {
			service.url = parseUrl(service.url, params);
		}
		return $http[service.method](service.url, params);
	}

	// Private function 
	function parseUrl(url, params) { // Need to  improve
		var queryString = "?"
		for(paramName in params) {
			queryString += (paramName + "=" + params[paramName] + "&");
		}
		return url + queryString;
	}

	_exports.requestService = makeCall;
	return _exports; 
}]);