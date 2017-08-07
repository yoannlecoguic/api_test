var express = require('express'),
	bodyParser = require('body-parser'),

	jwt = require('jsonwebtoken'),
	passport = require("passport"),
	passportJWT = require("passport-jwt"),

	ExtractJwt = passportJWT.ExtractJwt,
	JwtStrategy = passportJWT.Strategy;

	app = express(),
	port = process.env.PORT || 1337;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());




var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();
jwtOptions.secretOrKey = 'WeDidntStartTheFire';

var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
	console.log('payload received', jwt_payload);

	var user = jwt_payload.id == 1;
	if (user) {
		next(null, user);
	} else {
		next(null, false);
	}
});

passport.use(strategy);

var authentication = passport.authenticate('jwt', { session: false });

app.route('/login')
	.post( (req, res) => {
		var payload = {id: req.body.id};
		var token = jwt.sign(payload, jwtOptions.secretOrKey);

		res.status(200).send({
			token: token,
			username: 'Yoann'
		});
	});

app.route('/register')
	.post( (req, res) => {

	});

app.route('/users/:userId', authentication)
	.get( (req, res) => {
		res.status(200).send({
			username: 'goodboy'
		});
	})
	.put( (req, res) => {

	})
	.delete( (req, res) => {

	});

app.route('/parking/:spotId', authentication)
	.get( (req, res) => {

	})
	.post( (req, res) => {

	})
	.put( (req, res) => {

	})
	.delete( (req, res) => {

	});

app.route('/parking/search', authentication)
	.get( (req, res) => {

	});


app.use( (req, res) => {
	res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);
console.log('RESTful API server started on: ' + port);