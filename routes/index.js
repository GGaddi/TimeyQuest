// Get all of our friend data
var accountData = require('../accounts.json');

exports.view = function(req, res){
	console.log(req.query);
	console.log(accountData);
	var id = accountData['accounts'].length +1;
	//console.log(id);
	var username = req.query.username;
	var password =  req.query.password;
	var email = req.query.email;
	var level = 1;
	var currency = 1000;
	var message = "enter a personal message here...";
	//console.log(username);
	var newAccount = {
		"id": id,
		"username": req.query.username,
		"charName": req.query.username,
		"password": req.query.password,
		"email": req.query.email,
		"level": level,
		"currency": currency,
		"message": message
	//$("#submitBtn")
	//console.log(data);
	};
	console.log(username);
	if(!username || !password || !email) {

	}
	else { 
		console.log(newAccount);
		accountData["accounts"].push(newAccount);
	}
	res.render('index');
};

exports.login = function(req, res) {
	console.log("I AM RUNNING!!!!!!")
	
	res.json(accountData);
}