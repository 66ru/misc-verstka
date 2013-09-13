$(document).ready(function() {
	$(".b-readmore__link").on("click", function() {
		$(this).prev(".b-readmore__hide").slideToggle();
		return false;
	});
});