app.controller("loginController", ["$scope","servicecalls","navigator", "auth", function($scope, servicecalls, navigator, auth) {
	
	function onLoginSuccess(res) {
		toastr.options = {
			"positionClass": "toast-top-center",
			"timeOut"	   : 2000
		};
		toastr["success"]("Sign up Successful. Login to experience the app");
		var user_data = res.data || {};
		auth.setUser(user_data);
		navigator.go("/topics");
	}

	function onSignUpSuccess(res) {		
		reset_data();
		$scope.showSignUp = false;
	}

	function onError(res) {
		toastr.options = {
			"positionClass": "toast-top-center",
			"timeOut"	   : 2000
		};
		toastr["error"](res.data || "Error");
	}

	function reset_data() {
		$scope.signUp_uname = '';
		$scope.signUp_pwd = '';
		$scope.signUp_emailId = '';
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

	function signUp() {
		var username = $scope.signUp_uname;
		var pwd = $scope.signUp_pwd;
		var email = $scope.signUp_emailId;

		var params = {
			name: username,
			password: pwd,
			emailId: email
		};

		servicecalls.requestService("signUp", params).then(onSignUpSuccess, onError);	
	}

	$scope.login = login;
	$scope.signup = signUp;
}]);
