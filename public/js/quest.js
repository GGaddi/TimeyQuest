$(document).ready(function(){
	initializePage();
});

function initializePage() {
	$("#begin").click(beginAdventure);
	$("#start").click(beginGroupAdventure);
	$('p').click(chooseAdventure);
	$('.badtime').hide();
	$('.closes').click(function() {
		$('.badtime').hide();
	});
}

function beginAdventure(e){
	var hoursB = document.getElementById("boss-hr").value;
	var minsB = document.getElementById("boss-min").value;
	var hours = document.getElementById("boss-hr").value;
	var mins = document.getElementById("boss-min").value;
	var secondsB = (hoursB*60*60) + minsB*60;
	var seconds = (hours*60*60) + (mins*60);

	if( seconds < 2700 || secondsB < 1800 ) {
		e.preventDefault();
		$('.badtime').show();
	}
	else {
    	localStorage.setItem("time", seconds);
    	location.href = '/adventure';
    }
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