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

app.listen(port);
console.log('RESTful API server started on: ' + port);