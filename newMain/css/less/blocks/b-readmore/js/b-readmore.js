$(document).ready(function() {
	$(".b-readmore__link").on("click", function() {
		$(this)
			.closest(".b-readmore")
				.find(".b-readmore__hide").slideToggle();
		return false;
	});
});