var app = angular.module("myBlog", ["ngRoute"]);

app.config(function($locationProvider, $routeProvider) {
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});

	$routeProvider
		.when("/", {
			templateUrl: "/src/js/forms/login.html",
			controller: "loginController"
		})
		.otherwise({
			redirectTo: "/"
		});
});