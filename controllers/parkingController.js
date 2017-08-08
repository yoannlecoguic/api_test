'use strict';

/** get spot by id
*	@param {int} id - user id
*/
exports.getSpot = function(req, res) {
	res.send("get spot");
};

/** add spot by id
*	@param {int} id - user id
*/
exports.addSpot = function(req, res) {
	res.send("add spot");
};

/** update spot by id
*	@param {int} id - user id
*/
exports.updateSpot = function(req, res) {
	res.send("update spot");
};

/** delete spot by id
*	@param {int} id - user id
*/
exports.deleteSpot = function(req, res) {
	res.send("delete spot");
};

/**
*	search spot using :
*	@param {int=|null} userId - Is the spot is free and by whom
*	@param {int=|null} floor - Search a spot by floor
*/
exports.search = function(req, res) {
	res.send("search spot");
};