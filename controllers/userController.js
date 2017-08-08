'use strict';

var Jwt = require('jsonwebtoken');
var jwtOptions = require('../jwtOptions.json');

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
*	@param {string} type - ROLE_ADMIN or ROLE_PUBLIC
*/
exports.register = function(req, res) {
	res.send("register");
};

/** Get user by id */
exports.getUser = function(req, res) {
	res.send("get user");
};

/** Update user by id */
exports.updateUser = function(req, res) {
	res.send("update user");
};

/** Delete user by id */
exports.deleteUser = function(req, res) {
	res.send("delete user");
};