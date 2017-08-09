var db = require('./controllers/dbController');

var express = require('express');
var bodyParser = require('body-parser');
var expressJwt = require('express-jwt');
var jwtOptions = require('./jwtOptions.json');

var app = express();
var port = process.env.PORT || 1337;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Use jwt to restrict access to api using jwt token
app.use(expressJwt({
	secret: jwtOptions.privateKey,
	getToken: function (req) {
		var token = req.headers['x-access-token'] ;
		if (token) {
			return token;
		}
		return null;
	}
}).unless({ path: [ '/login', '/register' ]}));

app.use(function (err, req, res, next) {
	if (err.name === 'UnauthorizedError') {
		return res.status(403).send({
			success: false,
			message: 'No token provided.'
		});
	}
});

var userRoutes = require('./routes/userRoutes');
userRoutes(app);
var parkingRoutes = require('./routes/parkingRoutes');
parkingRoutes(app);

//Send 404 error on url not found
app.use( (req, res) => {
	res.status(404).send({url: req.originalUrl + ' not found'})
});

//Prefill a db to test
db.query('CREATE DATABASE IF NOT EXISTS api_test;', function (err) {
	if (err) throw err;

	db.query(`CREATE TABLE IF NOT EXISTS api_test.users (
		id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
		username VARCHAR(30) NOT NULL,
		password VARCHAR(30) NOT NULL
	)`, function (err) {
		if (err) throw err;
		console.log('Users table created');

		db.query(`CREATE TABLE IF NOT EXISTS api_test.parking (
			id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
			takenBy users NULL,
			floor INT(6) NOT NULL,
			FOREIGN KEY (takenBy) REFERENCES Users(id)
		)`, function (err) {
			console.log('Parking table created');

			app.listen(port);
			console.log('RESTful API server started on: ' + port);
		});
	});

	console.log('Test Database created');
});
