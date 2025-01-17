const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: String,
	googleId: String,
	email: String,
	emailVerified: Boolean,
	picture: String,
	locale: String,
});

const User = mongoose.model('user', userSchema);

module.exports = User;
