$(document).ready(function() {


	var complaintPopupClass = "b-complaint-popup";
	var complaintLink = $(".b-link_layout_doska-ico-complaint");
	var complaintCloseLink = $(".b-complaint-popup__close-link");
	
	complaintLink.click(function() {
		$(this).parent().find("." + complaintPopupClass).toggle();
		$(this).parent().find("." + complaintPopupClass).css("left", $(this).position().left + "px");
		$(this).parent().find("." + complaintPopupClass).css("top", "19px");
		return false;
	});

	complaintCloseLink.click(function() {
		$(this).parents(".b-complaint-popup").toggle();
		return false;
	});
	
	$(".b-doska-goods-list__item").mouseout(function(e) {
		if (!$(e.relatedTarget).closest(".b-doska-goods-list__item").eq(0).length) {
			$(this).find(".b-complaint-popup").hide();
		}
	});
	
});


	
