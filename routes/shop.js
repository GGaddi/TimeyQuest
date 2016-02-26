// Get all of our friend data
//var accountData = require('../accounts.json');
var items = require('../shop-items.json');

exports.itemInfo = function (req, res) {
	var itemID = req.params.id;
	var item = items[0];
	console.log(item);
}

exports.view = function(req, res){
	//console.log(accountData);
	res.render('shop', {
		'top-items': [
			{
				'name': 'red shirt',
				'id': 't-001r',
				'lvl': 1,
				'price': 0,
				'img': 'imgs/items/t-001r.png',
				'description': 'the perfect shirt for a new adventurer with no money.'			
			},
			{
				'name': 'blue shirt',
				'id': 't-001bl',
				'lvl': 1,
				'price': 0,
				'img': 'imgs/items/t-001bl.png',
				'description': 'the perfect shirt for a new adventurer with no money.'			
			},
			{
				'name': 'green shirt',
				'id': 't-001g',
				'lvl': 1,
				'price': 0,
				'img': 'imgs/items/t-001g.png',
				'description': 'the perfect shirt for a new adventurer with no money.'			
			},
			{
				'name': 'white shirt',
				'id': 't-001w',
				'lvl': 1,
				'price': 5,
				'img': 'imgs/items/t-001w.png',
				'description': 'the perfect shirt for a new adventurer with no money.'			
			},
			{
				'name': 'black shirt',
				'id': 't-001bk',
				'lvl': 1,
				'price': 5,
				'img': 'imgs/items/t-001bk.png',
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
			},
			{
				'name': 'blue shorts',
				'id': 'b-001bl',
				'lvl': 1,
				'price': 0,
				'img': 'imgs/items/b-001bl.png',
				'description': 'they&apos;re comfy and easy to wear.'			
			},
			{
				'name': 'green shorts',
				'id': 'b-001g',
				'lvl': 1,
				'price': 0,
				'img': 'imgs/items/b-001g.png',
				'description': 'they&apos;re comfy and easy to wear.'			
			},
			{
				'name': 'white shorts',
				'id': 'b-001w',
				'lvl': 1,
				'price': 5,
				'img': 'imgs/items/b-001w.png',
				'description': 'they&apos;re comfy and easy to wear.'			
			},
			{
				'name': 'black shorts',
				'id': 'b-001bk',
				'lvl': 1,
				'price': 5,
				'img': 'imgs/items/b-001bk.png',
				'description': 'they&apos;re comfy and easy to wear.'			
			}
		],

		'hat-items': [
			{
				'name': 'red hairband',
				'id': 'h-001r',
				'lvl': 3,
				'price': 50,
				'img': 'imgs/items/h-001r.png',
				'description': 'it keeps the hair out of your eyes... supposedly.'			
			},
			{
				'name': 'blue hairband',
				'id': 'h-001bl',
				'lvl': 3,
				'price': 50,
				'img': 'imgs/items/h-001bl.png',
				'description': 'it keeps the hair out of your eyes... supposedly.'			
			},
			{
				'name': 'green hairband',
				'id': 'h-001g',
				'lvl': 3,
				'price': 50,
				'img': 'imgs/items/h-001g.png',
				'description': 'it keeps the hair out of your eyes... supposedly.'			
			},
			{
				'name': 'white hairband',
				'id': 'h-001w',
				'lvl': 3,
				'price': 55,
				'img': 'imgs/items/h-001w.png',
				'description': 'it keeps the hair out of your eyes... supposedly.'
			},
			{
				'name': 'black hairband',
				'id': 'h-001bk',
				'lvl': 3,
				'price': 55,
				'img': 'imgs/items/h-001bk.png',
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
				'img': 'imgs/items/s-001br.png',
				'description': 'nothing wrong with keeping it simple.'
			},
			{
				'name': 'new adventurer (black)',
				'id': 's-001bk',
				'lvl': 1,
				'price': 0,
				'img': 'imgs/items/s-001bk.png',
				'description': 'nothing wrong with keeping it simple.'
			},
			{
				'name': 'new adventurer (blonde)',
				'id': 's-001bd',
				'lvl': 1,
				'price': 0,
				'img': 'imgs/items/s-001bd.png',
				'description': 'nothing wrong with keeping it simple.'
			},
			{
				'name': 'new adventurer (red)',
				'id': 's-001r',
				'lvl': 1,
				'price': 0,
				'img': 'imgs/items/s-001r.png',
				'description': 'nothing wrong with keeping it simple.'
			}
		],

		'pet-items': [
			{
				'name': 'rock',
				'id': 'p-001',
				'lvl': 5,
				'price': 50,
				'img': 'http://placehold.it/105x105',
				'description': 'you can&apos;t even walk this.'
			}
		]
	});
};