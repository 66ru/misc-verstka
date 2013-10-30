$(document).ready(function() {
		
		
	function fixMiddleBanner() {
		$(".js-banner-middle-layout").width($(".js-etalon-2col-width").width() + "px");
	}
	
	$(".b-ad-btn").hover(function() {
		$(this).animate({width: '80px'}, 100);
	}, function() {
		$(this).animate({width: '18px'}, 100);
	});
	
	fixMiddleBanner();
	
	$(window).resize(function() {
		fixMiddleBanner();
	}) 
		
	
	$(".js-tele-afisha-link-more").click(function() {
		$(".js-tele-afisha-hidden").toggle();
		$(".js-tele-afisha-link-more").toggle();
		return false;
	});
	


	
		
		
		
});