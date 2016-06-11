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
		.when("/topics", {
			templateUrl: "/src/js/forms/topics.html",
			controller: "topicsController"
		})
		.otherwise({
			redirectTo: "/"
		});
});

app.run(["$rootScope", "$location", "auth", function($rootScope, $location, auth) {
	$rootScope.$on("$routeChangeStart", function(evt) {

		if(!auth.isLoggedIn()) {
			// Redirects to login page
			$location.path("/");
		}

	})

}]);


