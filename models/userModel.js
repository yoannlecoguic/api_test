var db = require('../controllers/dbController');

/** add spot by id
*  @param {int} username - username
*  @param {int} password - password
*/
exports.addUser = function(username, password, callback) {
	return db.query("INSERT INTO api_test.users(username, password) VALUES(?, ?)", [username, password], callback);
};