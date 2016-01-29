// ************************************************
// user.server.model.js
//
// written by David L. Whitehurst
// January 28, 2016

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({

	firstName: String,
	lastName: String,
	email: String,
	username: String,
	password: String
	
});

mongoose.model('User', UserSchema);