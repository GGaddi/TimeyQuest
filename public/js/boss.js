$(document).ready(function() {
	$('#boss-fight').hide();
	$('#boss-prompt').hide();

	$('#boss-yes').click(fightBoss);
	$('#boss-no').click(noFightBoss);
})

function fightBoss(e) {
	$('#boss-prompt').hide();
	$('#walking').hide();
	$('#boss-fight').show();
	$('#end-adv').hide();
}

function noFightBoss(e) {
	$('#boss-prompt').hide();
}