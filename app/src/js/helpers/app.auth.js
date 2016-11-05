app.factory("auth", function() {
	return {
		setUser: function(user) {
			$.jStorage.set("current-user", user)
		},
		isLoggedIn: function() {
			return $.jStorage.get("current-user")? true: false;
		},
		getUser: function() {
			return $.jStorage.get("current-user");
		}
	}
});