app.factory("navigator", ["$location", function($location) {

	var exports = {};

	// Navigates to the specified path in the application
	exports.go = function(state) { 
		if(state) {
			$location.path(state);	
		}		
	}

	return exports;
}]);