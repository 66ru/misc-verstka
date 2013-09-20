$(document).ready(function() {
	$(".b-tabs__item").on("click", function() {
		$(this).parent().find(".b-tabs__item").removeClass("b-tabs__item_active");
		$(this).addClass("b-tabs__item_active");
		return false;
	});
});