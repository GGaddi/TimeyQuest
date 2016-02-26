var data = require("../data.json");

exports.addFriend = function(req, res) { 
	var newFriends = {
		"name": req.query.name,
		"description": req.query.description,
		"imageURL": "http://lorempixel.com/400/400/people"
	//$("#submitBtn")
	//console.log(data);
	}

	console.log(newFriends);
	data["friends"].push(newFriends);
	res.render('add', data);
	// Your code goes here
}