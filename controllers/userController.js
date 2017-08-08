'use strict';

var Jwt = require('jsonwebtoken');
var jwtOptions = require('../jwtOptions.json');

exports.login = function(req, res) {
	// Task.find({}, function(err, task) {
	// 	if (err)
	// 		res.send(err);

	// 	res.json(task);
	// });

	var payload = {id: req.body.id};
	var token = Jwt.sign(payload, jwtOptions.privateKey);

	res.status(200).send({
		token: token,
		username: 'Yoann'
	});
};

exports.register = function(req, res) {
	res.send("register");
};

exports.getUser = function(req, res) {
	res.send("get user");
};

exports.updateUser = function(req, res) {
	res.send("update user");
};

exports.deleteUser = function(req, res) {
	res.send("delete user");
};