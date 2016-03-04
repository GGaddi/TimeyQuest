$(document).ready(function() {
	$('#boss-fight').hide();
	$('#boss-prompt').hide();
	$('.boss-dialog').hide();

	$('#boss-yes').click(fightBoss);
	$('#boss-no').click(noFightBoss);
})

function fightBoss(e) {
	$('#boss-prompt').hide();
	$('#walking').hide();
	$('#boss-fight').show();
	$('#end-adv').hide();

	$('.battle-attack').click(function(){
		$('#boss-defeated').show();
		$('button').addClass('completed');
		$('button').attr("onclick","location.href = 'home';");
	});

	$('.battle-flee').click(function() {
		$('#boss-victory').show();
		$('button').addClass('completed');
		$('button').attr("onclick","location.href = 'home';");
	});
}

function noFightBoss(e) {
	$('#boss-prompt').hide();
	$('#you-coward').show();
}