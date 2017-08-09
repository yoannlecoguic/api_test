'use strict';

module.exports = function(app) {
	var parkingController = require('../controllers/parkingController');

	app.route('/parking')
		.post(parkingController.addSpot);

	app.route('/parking/:id')
		.get(parkingController.getSpot)
		.put(parkingController.updateSpot)
		.delete(parkingController.deleteSpot);

	app.route('/parking/search')
		.get(parkingController.search);
};