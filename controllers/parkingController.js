'use strict';

var Parking = require('../models/parkingModel.js');

/** get spot by id
*	@param {int} id - parking spot id
*/
exports.getSpot = function(req, res) {
	Parking.getSpot(req.params.id, function(err, rows) {
		if (err) {
			res.json(err);
		} else {
			res.json(rows);
		}
	});
};

/** add spot by id
*	@param {int} takenBy - taken by userId
*	@param {int} floor - which floort
*/
exports.addSpot = function(req, res) {
	Parking.addSpot(req.body.takenBy, req.body.floor, function(err, rows) {
		if (err) {
			res.json(err);
		} else {
			res.json(rows);
		}
	});
};

/** update spot by id
*	@param {int} id - parking spot id
*	@param {int} takenBy - taken by userId
*	@param {int} floor - which floort
*/
exports.updateSpot = function(req, res) {
	Parking.updateSpot(req.params.id, req.body.takenBy, req.body.floor, function(err, rows) {
		if (err) {
			res.json(err);
		} else {
			res.json(rows);
		}
	});
};

/** delete spot by id
*	@param {int} id - parking spot id
*/
exports.deleteSpot = function(req, res) {
	Parking.deleteSpot(req.params.id, function(err, rows) {
		if (err) {
			res.json(err);
		} else {
			res.json(rows);
		}
	});
};

/**
*	search spot using :
*	@param {int=|null} userId - Is the spot is free and by whom
*	@param {int=|null} floor - Search a spot by floor
*/
exports.search = function(req, res) {
	Parking.search(req.body.userId, req.body.floor, function(err, rows) {
		if (err) {
			res.json(err);
		} else {
			res.json(rows);
		}
	});
};