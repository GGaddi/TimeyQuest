var nameChange;
var messageChange;
var key = localStorage.getItem("key");
var database = new Firebase('https://vivid-heat-9192.firebaseio.com/accounts/' + key);
async: true;

$(document).ready(function(){
	initializePage();	
	console.log(user.privacy + "????");
	if( database.privacy == 'false') {
		console.log("DERLP");
	}
});

function initializePage() {
	$("#namebtn").click(editName);
	$("#namebtnconfirm").click(confirmName);
	$("#usermessage").click(editMsg);
	$("#save").click(saveChanges);
	$(".tabs img").click(displayEquipment);

	$("body").on("click",".close", function() {
		$('.equip-item').hide();
	});

	nameChange = 0;
	messageChange = 0;
}

function displayEquipment(e) {
	var type = $(this).attr('name');	
	var name = $(this).attr('title');	
	$('body').append('<div class="equip-item"><img src="imgs/items/t-001r.png"/><div class="item-name">'+name+'</div><div class="close">x</span></div>');
}

function editName (e) {
	e.preventDefault();

	var htmlString = '<input type="text" id="nameIn" placeholder="username" maxlength="10"></input>' + 
	'<a href="#"><img src="imgs/editaccept.png"/ id="namebtnconfirm"></a>';

	$('#namefield').html(htmlString);

	$("#namebtnconfirm").click(confirmName);
}

function confirmName (e) {
	e.preventDefault();

	var newName = $('#nameIn').val();
	localStorage.setItem("newName", newName);
	nameChange = 1;

	var htmlString = newName + 
	'<a href="#"><img src="imgs/editfield.png"/ id="namebtn"></a>';

	$('#namefield').html(htmlString);

	$("#namebtn").click(editName);
}

function editMsg (e) {
	messageChange = 1;
	var htmlString = '<textarea id="msgIn" placeholder="enter a personal message..."></textarea>';

	$("#messagefield").html(htmlString);
	/*console.log(document.getElementById("msgIn").value);
	var message = document.getElementById("msgIn").value);
	localStorage.setItem("newMessage", message); */
}

function saveChanges (e) {
	//var newName = $(this).val();
	console.log("I am working");
	if (nameChange == 1) {
		var user = JSON.parse(localStorage.getItem(localStorage.getItem("user")));
		user.charName = localStorage.getItem("newName");
		localStorage.setItem(localStorage.getItem("user"), JSON.stringify(user));
		database.update({
			"charName": localStorage.getItem("newName")
		});
		
	}
	if (messageChange == 1){
		var user = JSON.parse(localStorage.getItem(localStorage.getItem("user")));
		user.message = document.getElementById("msgIn").value;//localStorage.getItem("newMessage");
		localStorage.setItem(localStorage.getItem("user"), JSON.stringify(user));
		database.update({
			"message": document.getElementById("msgIn").value
		});
	}
	if ( $('input[type=checkbox]:checked') )
		database.update({
			"privacy":true
		});
	else {
		database.update({
			"privacy":false
		});
	}
	/*var newNameWhole = document.getElementById("namefield").innerHTML;
	var newName = newNameWhole.replace('<a href="#"><img src="http://placehold.it/15x15"/ id="namebtn"></a>', ''); */
	console.log(nameChange);
	console.log(messageChange);
}