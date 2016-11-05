app.controller("topicsController", ["$scope", "servicecalls", "auth",  function($scope, servicecalls, auth) {

	function onSuccess(res) {
		$scope.got_topics = true;
		if(!res.data.length) {
			$scope.no_topics = true;
		} else {
			// Show topics list
			$scope.topicsList = res.data;			
		}
	}
	
	function onCreateSuccess(res) {
		toastr.options = {
			"positionClass": "toast-top-center",
			"timeOut"	   : 2000
		};
		toastr["success"]("Topic created successfully");
		$scope.getTopics();
	}

	function onError(res) {
	}

	$scope.getTopics = function() {
		servicecalls.requestService("get_topics", {}).then(onSuccess, onError);	
	}
	

	function switchModal(topic) {		
		$scope.topicName = topic.topicName;
		$scope.topicDesc = topic.topicDesc;
		$('.topicCreateModal').modal('show');
	}

	function hideModal() {
		$('.topicCreateModal').modal('hide');	
	}

	function saveModal() {
		this.createOrEditTopic();
		hideModal();
	}

	$scope.createOrEditTopic = function() {
		var params = {
			tName: this.topicName,
			desc: this.topicDesc,
			tAuthor: auth.getUser()._id,
			tAuthorName: auth.getUser().name
		};

		servicecalls.requestService("create_topic", params).then(onCreateSuccess, onError);
	};

	$scope.switchModal = switchModal;
	$scope.hideModal   = hideModal;
	$scope.saveModal   = saveModal;

	// Initialize topics list
	$scope.getTopics();
}]);


app.directive("modal", function() {
	return {
		templateUrl: "/src/js/forms/modalDirective.html",
		restrict: 'EA',
        transclude: true,
        replace:true,
        scope:false,
        reqire: "ngModel",
        link: function postLink(scope, element, attrs, ngModelCtrl) {
        	scope.title = attrs.title;
        	scope.saveBtn = attrs.savebtn;        	
        	scope.changed = function() {
        		if(this.topicName) {
        			this.$parent.topicName = this.topicName;
        		}
        		if(this.topicDesc) {
        			this.$parent.topicDesc = this.topicDesc;
        		}
        	};        	
        }
	}
});