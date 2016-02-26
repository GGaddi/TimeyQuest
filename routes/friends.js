// Get all of our friend data
var usernameFriends = require('../friends.json');

exports.view = function(req, res){
	console.log(usernameFriends);
	res.render('friends', usernameFriends);
};