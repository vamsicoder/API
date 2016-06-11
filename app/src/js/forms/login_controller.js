app.controller("loginController", ["$scope","servicecalls","navigator", "auth", function($scope, servicecalls, navigator, auth) {
	
	function onLoginSuccess(res) {
		debugger;
		var user_data = res.data || {};
		auth.setUser(user_data);
		navigator.go("/topics");
	}

	function onError(res) {
		debugger;
	}

	function login() {
		var username = $scope.uname;
		var pwd = $scope.pwd;
		var params = {
			name: username,
			password: pwd
		};


		servicecalls.requestService("login", params).then(onLoginSuccess, onError);
	}
	$scope.login = login;
}]);
