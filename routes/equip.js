// Get all of our friend data
var accountData = require('../accounts.json');

exports.view = function(req, res){
	//console.log(accountData);
	res.render('equip', {
		'top-items': [
			{
				'name': 'red shirt',
				'id': 't-001r',
				'lvl': 1,
				'price': 0,
				'img': 'imgs/items/t-001r.png',
				'description': 'the perfect shirt for a new adventurer with no money.'			
			}
		],

		'bottom-items': [
			{
				'name': 'red shorts',
				'id': 'b-001r',
				'lvl': 1,
				'price': 0,
				'img': 'imgs/items/b-001r.png',
				'description': 'they&apos;re comfy and easy to wear.'			
			}
		],

		'hat-items': [
			{
				'name': 'red hairband',
				'id': 'h-001r',
				'lvl': 3,
				'price': 50,
				'img': 'http://placehold.it/80x80',
				'description': 'it keeps the hair out of your eyes... supposedly.'			
			}
		],

		'weapon-items': [
			{
				'name': 'wooden stick',
				'id': 'w-001',
				'lvl': 1,
				'price': 0,
				'img': 'imgs/items/w-001.png',
				'description': 'we all have to start somewhere.'			
			}
		],

		'style-items': [
			{
				'name': 'new adventurer (brown)',
				'id': 's-001br',
				'lvl': 1,
				'price': 0,
				'img': 'http://placehold.it/80x80',
				'description': 'nothing wrong with keeping it simple.'
			}
		],

		'pet-items': [
			{
				'name': 'rock',
				'id': 'p-001',
				'lvl': 5,
				'price': 50,
				'img': 'http://placehold.it/80x80',
				'description': 'you can&apos;t even walk this.'
			}
		]
	});
};