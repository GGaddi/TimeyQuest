$(document).ready(function(){
	$('.confirm').hide()

	$(".save-changes").click(function() {
		$('.confirm').show()
	});

	$("body").on("click",".closes",function(){
		$('.confirm').hide();
	});
});