'use strict';

var Jwt = require('jsonwebtoken');
var jwtOptions = require('../jwtOptions.json');
var User = require('../models/userModel.js');

/**
*	Post credentials et get token if credentials matches
*	@param {string} username - user username
*	@param {string} password - user password
*/
exports.login = function(req, res) {
	var payload = {id: req.body.id};
	var token = Jwt.sign(payload, jwtOptions.privateKey);

	res.status(200).send({
		token: token,
		username: 'Yoann'
	});
};

/**
*	Register new user
*	@param {string} username - user username
*	@param {string} password - user password
*/
exports.register = function(req, res) {
	User.addUser(req.body.username, req.body.password, function(err, rows) {
		if (err) {
			res.json(err);
		} else {
			res.json(rows);
		}
	});
};

/**
* Get user by id
*	@param {int} id - user id
*/
exports.getUser = function(req, res) {
	res.send("get user");
};

/** Update user by id
*	@param {int} id - user id
*/
exports.updateUser = function(req, res) {
	res.send("update user");
};

/** Delete user by id
*	@param {int} id - user id
*/
exports.deleteUser = function(req, res) {
	res.send("delete user");
};