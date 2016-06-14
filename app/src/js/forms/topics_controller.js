app.controller("topicsController", ["$scope", "servicecalls",  function($scope, servicecalls) {

	function onSuccess(res) {
		$scope.got_topics = true;
		if(!res.data.length) {
			$scope.no_topics = true;
		} else {
			// Have to add
		}
	}

	function onError(res) {
	}


	servicecalls.requestService("get_topics", {}).then(onSuccess, onError);

	function switchModal() {
		$scope.showModal = !$scope.showModal;
	}

	$scope.switchModal = switchModal;
}]);


app.directive("modal", function() {
	return {
		templateUrl: "/src/js/forms/modalDirective.html",
		restrict: 'E',
        transclude: true,
        replace:true,
        scope:true,
        link: function postLink(scope, element, attrs) {
        	scope.title = attrs.title;
        	scope.saveBtn = attrs.savebtn;
        	scope.$watch(attrs.show, function(show) {
        		if(show) {
        			$(element).modal("show");
        		} else {
        			$(element).modal("hide");
        		}
        	});
        }
	}
});