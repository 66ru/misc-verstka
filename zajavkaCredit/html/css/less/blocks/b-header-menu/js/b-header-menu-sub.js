$(document).ready(function() {	
	/*hover на есче*/
	$(".b-header-menu__item_hidemenu_yes").hover(function(e) {
		$(this).addClass("hover");
		$(this).find(".b-header-menu__hidemenu").show();
	}, function(e) {
		if (e.relatedTarget.className != "sub") {
			$(this).removeClass("hover");
			$(this).find(".b-header-menu__hidemenu").hide();
		}
	});
});