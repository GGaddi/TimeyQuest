$(document).ready(function(){
	initializePage();
});

function initializePage() {
	$("#begin").click(beginAdventure);
	$("#start").click(beginGroupAdventure);
	$('p').click(chooseAdventure);
}

function beginAdventure(e){
	var hours = document.getElementById("boss-hr").value;
	var mins = document.getElementById("boss-min").value;
	var seconds = (hours*60*60) + (mins*60);
	console.log(seconds);
    localStorage.setItem("time", seconds);
}

function beginGroupAdventure(e){
	var hours = $("#boss-hr").text();
	var mins = $("#boss-min").text();
	var seconds = (hours*60*60) + (mins*60);
	console.log(seconds);
	localStorage.setItem("time", seconds);
}

function chooseAdventure(e){
	$('#start').attr("onclick","location.href = 'adventure';")
	$('p').removeClass("choose");
	$(this).addClass("choose");
}