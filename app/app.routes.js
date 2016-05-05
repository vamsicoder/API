module.exports = function(router, models) {
	// Users Routes

	var users_route = router.route("/users");
	require('./modelRoutes/users.routes')(users_route, models.usersModel);

	// Topics Routes

	var topics_route = router.route("/topics");
	require('./modelRoutes/topics.routes')(topics_route, models.topicsModel);

	// Posts Routes

	var posts_route = router.route("/topics/:topicId/posts");
	require('./modelRoutes/posts.routes')(posts_route, models.postsModel);

	// Comments Routes

	var comments_route = router.route("/topics/:topicId/posts/:postId/comments");
	require('./modelRoutes/comments.routes')(comments_route, models.commentsModel);

};
