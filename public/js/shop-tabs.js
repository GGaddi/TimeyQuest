$(document).ready(function(){
	initializePage();
});

function initializePage() {
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('tab-curr');
		$('.grid').removeClass('grid-curr');
		$('img.on').removeClass('img-curr');

		$(this).addClass('tab-curr');
		$("#"+tab_id).addClass('grid-curr');
		$('img.on',this).addClass('img-curr');
		});

	$('.entries').click(viewItem);
	
	$('#reset').click(function() {
		$('.entries').removeClass("item-curr");
		$('.clothes').remove();
	});
}

function viewItem (e) {
	var itemName = $(this).attr('name');
	var itemDesc = $(this).attr('alt');
	var itemType = $(this).attr('type');
	var itemID	 = $(this).attr('ids');
	var category = 0;
	if( itemType=="top" ) category = 1;
	else if ( itemType=="bottom") category = 2;
	else if ( itemType=="hat") category = 3;
	else if ( itemType=="weapon") category = 4;
	else if ( itemType=="style") category = 5;
	else category = 6;
	//console.log("user clicked on item " + itemID);

	$('.desc h1').html(itemName);
	$('.desc p').html(itemDesc);

	if ($(this).hasClass('item-curr')) {
		$(this).removeClass('item-curr');
	}
	else {
		$('#'+itemType).remove();
		$(this).addClass('item-curr');
		var imgS = '<img src="';
		var newItem = imgS.concat('/imgs/items/midi/',itemID,'.png" class="clothes" id="',itemType,'"/>');
		$('#avvie').append(newItem);
	}
	//var url = "/item/" + itemID;

	//$.get(url, callbackItem);
}

/*function callbackItem (result) {
	var itemName = $(result).attr('name');
	var itemDesc = $(result).attr('description');

	$('.desc h1').html(itemName);
	$('.desc p').html(itemDesc);
}*/
