var key = localStorage.getItem("key");
var database = new Firebase('https://vivid-heat-9192.firebaseio.com/accounts/' + key);
async: true;

var itemBottom = 0;
var itemHat = 0;
var itemHead = 0;
var itemPet = 0;
var itemTop = 0;
var itemWeapon = 0;

$(document).ready(function(){
	var imgS;
	var newItem;
	database.on("value", function(data) {
		var snapshot = data;
		console.log(data.val());
		if(snapshot.val().itemBottom != 0){
			imgS = '<img src="';
			newItem = imgS.concat('/imgs/items/midi/',snapshot.val().itemBottom,'.png" class="clothes" id="bottom"/>');
			$('#avvie').append(newItem);
		}
		if(snapshot.val().itemHat != 0){
			imgS = '<img src="';
			newItem = imgS.concat('/imgs/items/midi/',snapshot.val().itemHat,'.png" class="clothes" id="hat"/>');
			$('#avvie').append(newItem);
		}
		if(snapshot.val().itemHead != 0){
			imgS = '<img src="';
			newItem = imgS.concat('/imgs/items/midi/',snapshot.val().itemHead,'.png" class="clothes" id="style"/>');
			$('#avvie').append(newItem);
		}
		if(snapshot.val().itemPet != 0){
			imgS = '<img src="';
			newItem = imgS.concat('/imgs/items/midi/',snapshot.val().itemPet,'.png" class="clothes" id="pet"/>');
			$('#avvie').append(newItem);
		}
		if(snapshot.val().itemTop != 0){
			imgS = '<img src="';
			newItem = imgS.concat('/imgs/items/midi/',snapshot.val().itemTop,'.png" class="clothes" id="top"/>');
			$('#avvie').append(newItem);
		}
		if(snapshot.val().itemWeapon != 0){
			imgS = '<img src="';
			newItem = imgS.concat('/imgs/items/midi/',snapshot.val().itemWeapon,'.png" class="clothes" id="weapon"/>');
			$('#avvie').append(newItem);
		}
	}, function (errorObject) {
  		console.log("The read failed: " + errorObject.code);
	});
	initializePage();
});

function initializePage() {
	$('.confirm').hide();

	$(".save-changes").click(saveChanges); 

	$("body").on("click",".closes",function(){
		$('.confirm').hide();
	});

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
	else if ( itemType == "pet") category = 6;
	//console.log("user clicked on item " + itemID);
	//console.log("category: " + category + " type: " + itemType);
	$('.desc h1').html(itemName);
	$('.desc p').html(itemDesc);

	if ($(this).hasClass('item-curr')) {
		$(this).removeClass('item-curr');
		$('#'+itemType).remove();
		if( itemType=="top" ) {
			itemTop = 0;
		}
		else if ( itemType=="bottom"){
			itemBottom = 0;
		}
		else if ( itemType=="hat") {
			itemHat = 0;
		}
		else if ( itemType=="weapon"){
			itemWeapon = 0;
		}
		else if ( itemType=="style") {
			itemHead = 0;
		}
		else{
			itemPet = 0;
		}
	}
	else {
		$('#tab-'+category+' .entries').removeClass('item-curr');
		$(this).addClass('item-curr');
		var imgS = '<img src="';
		var newItem = imgS.concat('/imgs/items/midi/',itemID,'.png" class="clothes" id="',itemType,'"/>');
		$('#avvie').append(newItem);
		if( itemType=="top" ) {
			itemTop = itemID;
		}
		else if ( itemType=="bottom"){
			itemBottom = itemID;
		}
		else if ( itemType=="hat") {
			itemHat = itemID;
		}
		else if ( itemType=="weapon"){
			itemWeapon = itemID;
		}
		else if ( itemType=="style") {
			itemHead = itemID;
		}
		else{
			itemPet = itemID;
		}
	}

	//var url = "/item/" + itemID;

	//$.get(url, callbackItem);
}
function saveChanges(e){
	$('.confirm').show();
	database.update({
		"itemBottom": itemBottom,
		"itemHat" : itemHat,
		"itemHead" : itemHead,
	 	"itemPet" : itemPet,
	 	"itemTop" : itemTop,
	 	"itemWeapon" : itemWeapon
	});
}

/*function callbackItem (result) {
	var itemName = $(result).attr('name');
	var itemDesc = $(result).attr('description');

	$('.desc h1').html(itemName);
	$('.desc p').html(itemDesc);
}*/
