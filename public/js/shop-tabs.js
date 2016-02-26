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
	});
}

function viewItem (e) {
	var itemID = $(this).attr('id');
	var itemDesc = $(this).attr('alt');
	//console.log("user clicked on item " + itemID);

	$('.desc h1').html(itemID);
	$('.desc p').html(itemDesc);

	if ($(this).hasClass('item-curr'))
		$(this).removeClass('item-curr');
	else
		$(this).addClass('item-curr');

	//var url = "/item/" + itemID;

	//$.get(url, callbackItem);
}

/*function callbackItem (result) {
	var itemName = $(result).attr('name');
	var itemDesc = $(result).attr('description');

	$('.desc h1').html(itemName);
	$('.desc p').html(itemDesc);
}*/
