$(document).ready(function(){
	$('.popup').hide()

	$("#faq").click(function() {
		$('.popup').show()
  		ga('send','event','help','click');
	});

	$("#close").click(function(){
		$('.popup').hide()
	});
});