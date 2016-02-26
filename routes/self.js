// Get all of our friend data

var accountData = require('../accounts.json');
exports.view = function(req, res){
	console.log(accountData);
	res.render('self', accountData);
};

exports.viewProfile = function (req, res) {
	var id = req.params.id;

	console.log("id: " + id);

	res.render('profile', {
		'profileID': id
	});
};