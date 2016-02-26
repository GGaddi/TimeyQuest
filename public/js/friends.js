$(document).ready(function(){
	initializePage();
	$('.lookpop').hide();
	$('.addpop').hide();
	$('.delpop').hide();
});

function initializePage() {
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('tabe-curr');
		$('.flist').removeClass('flist-curr');

		$(this).addClass('tabe-curr');
		$("#"+tab_id).addClass('flist-curr');
		});

	$('.lookup').click(function() {
		$('.lookpop').show()
	});

	$('.adding').click(function() {
		$('.addpop').show()
	});

	$('.deleting').click(function() {
		$('.delpop').show()
	});

	$(".close").click(function(){
		$('.delpop').hide()
		$('.addpop').hide()
		$('.lookpop').hide()
	});

	//$('#toggledelete').click(deleteToggle);
	$('.delete-off').click(deleteOn);
	$('.delete-on').click(deleteOff);
}

// function deleteToggle (e) {
// 	e.preventDefault();

// 	var id = document.getElementById("action");
// 	var currClass = id.className;

// 	console.log(currClass);

// 	if (currClass == "prof lookup") {
// 		var buttonString = '<a href="#"><img src="imgs/friends-delete-toggleon.png" alt="delete friends"></a>';
// 		var profString = '<img src="/imgs/friends-delete.png"/><div class="prof-bg">&nbsp;</div>';

// 		$(currClass).html(profString);

// 		id.className = "prof deleting";
// 	}
// 	else if (currClass == "prof deleting") {
// 		var buttonString = '<a href="#"><img src="imgs/friends-delete-toggleoff.png" alt="delete friends"></a>';
// 		var profString = '<img src="/imgs/friends-viewprofile.png"/><div class="prof-bg">&nbsp;</div>';

// 		$(currClass).html(profString);

// 		id.className = "prof lookup";
// 	}

// 	$('#toggledelete').html(buttonString);
// }

function deleteOn (e) {
	e.preventDefault;

	var btnString = '<a href="#"><img src="imgs/friends-delete-toggleon.png" class="delete-on" alt="delete friends"></a>';
	var profString = '<div class="prof deleting"><img src="/imgs/friends-delete.png"/><div class="prof-bg">&nbsp;</div></div>';

	//$('#action').html(profString);
	$('#toggledelete').html(btnString);
	$('.delete-on').click(deleteOff);
}

function deleteOff (e) {
	e.preventDefault;

	var btnString = '<a href="#"><img src="imgs/friends-delete-toggleoff.png" class="delete-off" alt="delete friends"></a>';
	var profString = '<div class="prof lookup"><img src="/imgs/friends-viewprofile.png"/><div class="prof-bg">&nbsp;</div></div>';

	//$('#action').html(profString);
	$('#toggledelete').html(btnString);
	$('.delete-off').click(deleteOn);
}

function viewItem (e) {
	var itemID = $(this).closest('.entries').attr('id');
	var itemDesc = $(this).closest('.entries').attr('alt');
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
