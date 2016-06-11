app.controller("topicsController", ["$scope", "servicecalls",  function($scope, servicecalls) {

	function onSuccess(res) {
		debugger;
	}

	function onError(res) {
		debugger;
	}


	servicecalls.requestService("get_topics", {}).then(onSuccess, onError);
}]);