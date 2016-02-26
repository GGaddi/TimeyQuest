var nameChange;
var messageChange;

$(document).ready(function(){
	initializePage();
});

function initializePage() {
	$("#namebtn").click(editName);
	$("#namebtnconfirm").click(confirmName);
	$("#usermessage").click(editMsg);
	$("#save").click(saveChanges);
	nameChange = 0;
	messageChange = 0;
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
	}
	if (messageChange == 1){
		var user = JSON.parse(localStorage.getItem(localStorage.getItem("user")));
		user.message = document.getElementById("msgIn").value;//localStorage.getItem("newMessage");
		localStorage.setItem(localStorage.getItem("user"), JSON.stringify(user));
	}
	/*var newNameWhole = document.getElementById("namefield").innerHTML;
	var newName = newNameWhole.replace('<a href="#"><img src="http://placehold.it/15x15"/ id="namebtn"></a>', ''); */
	console.log(nameChange);
	console.log(messageChange);
}