'use strict'

var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
	name: String,
	surname: String,
	email: String,
	password: String,
	role: String,
	image: String,
});
	
module.exports = mongoose.model('User', UserSchema);


	/*name: {type: String},
	surname: {type: String},
	email: {type: String},
	password: {type: String},
	role: {type: String},
	image: {type: String},*/