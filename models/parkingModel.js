var db = require('../controllers/dbController');

/** get spot by id
*	@param {int} id - parking spot id
*/
exports.getSpot = function(id, callback) {
	return db.query("SELECT * FROM api_test.parking WHERE id = ?", [id], callback);
};

/** add spot by id
*	@param {int} takenBy - taken by userId
*	@param {int} floor - which floor
*/
exports.addSpot = function(takenBy, floor, callback) {
	return db.query("INSERT INTO api_test.parking(takenBy, floor) VALUES(?, ?)", [takenBy, floor], callback);
};

/** update spot by id
*	@param {int} id - parking spot id
*	@param {int} takenBy - taken by userId
*	@param {int} floor - which floor
*/
exports.updateSpot = function(id, takenBy, floor, callback) {
	return db.query("INSERT INTO api_test.parking(takenBy, floor) VALUES(?, ?) WHERE id = ?", [takenBy, floor, id], callback);
};

/** delete spot by id
*	@param {int} id - parking spot id
*/
exports.deleteSpot = function(id, callback) {
	return db.query("DELETE FROM api_test.parking WHERE id = ?", [id], callback);
};

/**
*	search spot using :
*	@param {int=|null} userId - Is the spot is free and by whom
*	@param {int=|null} floor - Search a spot by floor
*/
exports.search = function(userId, floor, callback) {
	res.send("search spot");
	var sql = "SELECT * FROM api_test.parking";
	if (userId || floor) {
		sql = sql + " WHERE ";

		if (userId) {
			sql = sql +" userId = ? ";
		}

		if (floor) {
			sql = sql + (userId ? " AND " : "") + " floor = ? ";
		}
	}
	return db.query(sql, [userId, floor], callback);
};