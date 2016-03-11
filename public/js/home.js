var key = localStorage.getItem("key");
var database = new Firebase('https://vivid-heat-9192.firebaseio.com/accounts/' + key);
async: true;

$(document).ready(function(){
	var imgS;
	var newItem;
	database.on("value", function(data) {
		var snapshot = data;
		console.log(data.val());
		if(snapshot.val().itemBottom != 0){
			imgS = '<img src="';
			newItem = imgS.concat('/imgs/items/maxi/',snapshot.val().itemBottom,'.png" class="clothes" id="bottom"/>');
			$('#avvie').append(newItem);
		}
		if(snapshot.val().itemHat != 0){
			imgS = '<img src="';
			newItem = imgS.concat('/imgs/items/maxi/',snapshot.val().itemHat,'.png" class="clothes" id="hat"/>');
			$('#avvie').append(newItem);
		}
		if(snapshot.val().itemHead != 0){
			imgS = '<img src="';
			newItem = imgS.concat('/imgs/items/maxi/',snapshot.val().itemHead,'.png" class="clothes" id="style"/>');
			$('#avvie').append(newItem);
		}
		if(snapshot.val().itemPet != 0){
			imgS = '<img src="';
			newItem = imgS.concat('/imgs/items/maxi/',snapshot.val().itemPet,'.png" class="clothes" id="pet"/>');
			$('#avvie').append(newItem);
		}
		if(snapshot.val().itemTop != 0){
			imgS = '<img src="';
			newItem = imgS.concat('/imgs/items/maxi/',snapshot.val().itemTop,'.png" class="clothes" id="top"/>');
			$('#avvie').append(newItem);
		}
		if(snapshot.val().itemWeapon != 0){
			imgS = '<img src="';
			newItem = imgS.concat('/imgs/items/maxi/',snapshot.val().itemWeapon,'.png" class="clothes" id="weapon"/>');
			$('#avvie').append(newItem);
		}
	}, function (errorObject) {
  		console.log("The read failed: " + errorObject.code);
	});
	initializePage();	
	console.log(user.privacy + "????");
	if( database.privacy == 'false') {
		console.log("DERLP");
	}
});