$(document).ready(function() {
	$(".b-read-more__control__label_layout_closed").click(function() {
		$(this).closest(".b-read-more").find(".b-read-more__text").show();
		$(this).closest(".b-read-more__control").removeClass("b-read-more__control_state_close").addClass("b-read-more__control_state_open");
		return false;
	});
	$(".b-read-more__control__label_layout_opened").click(function() {
		$(this).closest(".b-read-more").find(".b-read-more__text").hide();
		$(this).closest(".b-read-more__control").removeClass("b-read-more__control_state_open").addClass("b-read-more__control_state_close");		
		return false;
	});	
	$(".b-read-more__control__label_layout_innactive").click(function() {
		return false;
	});		
});

