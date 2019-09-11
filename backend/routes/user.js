var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    id: String,
    firstname: String,
    lastname: String,
});

//
// GET user
//
router.get('/', function(req, res) {

	mongoose.connect('mongodb://' + req.app.get('username') + ':' +
		req.app.get('token') + '@' + req.app.get('hostname') + ":" +
		req.app.get('userPort') + '/user-info?authSource=admin',
		{useNewUrlParser: true});

	var db = mongoose.connection;

	db.on('error', console.error.bind(console, 'connection error:'));

	db.once('open', function() {

		var arrayContents = [];

                var User = mongoose.model('User', userSchema, 'user-data');

		var UsersPointer = db.collection('user-data');
		UsersPointer.find({}).toArray(function(err, docs) {

			console.log("GET Request Successful");
			res.send(docs);
		});
	});
});

//
// POST user
//
router.post('/', function(req, res) {

	mongoose.connect('mongodb://' + req.app.get('username') + ':' +
		req.app.get('token') + '@' + req.app.get('hostname') + ":" +
		req.app.get('userPort') + '/user-info?authSource=admin',
		{useNewUrlParser: true});

	var db = mongoose.connection;

	db.on('error', console.error.bind(console, 'connection error:'));

	db.once('open', function() {

                var User = mongoose.model('User', userSchema, 'user-data');

		var UsersPointer = db.collection('user-data');
		UsersPointer.drop();

		User.create(req.body, function (err) {
			if (err) console.log(err);
			console.log("POST Request Successful");
		});
	});
});

module.exports = router;
