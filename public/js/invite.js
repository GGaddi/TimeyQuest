$(document).ready(function(){
	initializePage();
	$('.invlist img').click(function(){
		if( $(this).hasClass('curr') )
			$(this).removeClass('curr');
		else
			$(this).addClass('curr');
	});
});