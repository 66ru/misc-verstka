$(document).ready(function() {

	var popupObj = $(".b-popup-frame");
	var shadObj = $(".b-popup-frame__shadow");
	
	$(document).delegate("a.b-link_js_popup-gallery", "click", function() {
		var popupObjHalfWidth = $(".b-popup-frame").width()/2;
		var windowWidthHalf = $(window).width()/2;	
		shadObj.fadeIn("fast");
		popupObj.css("marginLeft", - popupObjHalfWidth + "px");
		popupObj.css("left", windowWidthHalf -12 + "px");
		
		topChords = ($(window).height() - popupObj.height())/2+$(window).scrollTop();
		if (topChords < 0) topChords = 0;
		
		
		popupObj.css("top",  topChords + "px");
		popupObj.show();
		return false;
	});
	
	$(window).resize(function() {
	
		var popupObjHalfWidth = $(".b-popup-frame").width()/2;
		var windowWidthHalf = $(window).width()/2;		
	
		topChords = ($(window).height() - popupObj.height())/2+$(window).scrollTop();
		
		if (topChords < 0) topChords = 0;
	
		popupObj.css("marginLeft", - popupObjHalfWidth + "px");
		popupObj.css("left", windowWidthHalf -12 + "px");		
		popupObj.css("top",  topChords + "px");
		
	});
	

});