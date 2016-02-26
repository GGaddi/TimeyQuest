$(document).ready(function(){
	$('.confirm').hide()

	$("#checkout").click(function() {
		$('.confirm').show()
	});

	$(".close").click(function(){
		$('.confirm').hide()
	});

	$(".confirm button").click(function() {
		$('.confirm').hide()
	});
});