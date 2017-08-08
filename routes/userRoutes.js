'use strict';

module.exports = function(app) {
	var userController = require('../controllers/userController');

	app.route('/login')
		.post(userController.login);

	app.route('/register')
		.post(userController.register);

	app.route('/users/:id')
		.get(userController.getUser)
		.put(userController.updateUser)
		.delete(userController.deleteUser);
};