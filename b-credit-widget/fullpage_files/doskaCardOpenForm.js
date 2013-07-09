$(document).ready(function() {

	$(".js-open-send-message").click(function() {
		$(this).hide();
		$(this).next().show();
		$(this).parents(".b-doska-card__wrap-box").addClass("opened");
		$(".b-doska-card__wrap-box-shadow").show();
		return false;
	});
	
	$(".js-close-send-message").click(function() {
		$(this).closest(".b-doska-card-oppened-form").hide();
		$(this).closest("li").find(".js-open-send-message").show();
		$(this).parents(".b-doska-card__wrap-box").removeClass("opened");
		$(".b-doska-card__wrap-box-shadow").hide();
		return false;
	});	
	
});