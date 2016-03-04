$(document).ready(function(){
	$('.confirm').hide()

	$("#save-changes").click(function() {
		$('.confirm').show()
	});

	$(".close").click(function(){
		$('.confirm').hide()
	});

	$(".confirm button").click(function() {
		$('.confirm').hide()
	});
});