var scrolling = 0;

$(document).ready(function() {
    wrapElement = $(".b-doska-card__wrap"); //главный враппер
    borderElement = $(".b-doska-card__wrap__contacts"); //врапер над мотающимся элементом
    borderElement.height(wrapElement.height() + "px");
    boxElement = $("#adv-info-float-box"); //плавающий элемент

    $(".b-text-ellipsed").click(function(){
        $(this).toggleClass("ellipsed");
        $(this).parent().find(".b-text-ellipsed-dot").toggle();
        $(this).parent().css("overflow", "visible");
        return false;
    });

});

$(window).scroll(function(e) {
	var w = borderElement.width();
	boxElement.width("260px");
	if (!boxElement.hasClass("opened")) {
		if ($(document).scrollTop() >= wrapElement.offset().top - 10) {
			scrolling = 0;
				if (scrolling == 0) {
					boxElement.css({"position": "fixed", "bottom": $(window).height() - boxElement.height() - 10 + "px" });
					if ($(window).scrollTop() >= wrapElement.offset().top + wrapElement.height() - boxElement.height()) {
                        if (wrapElement.height() > boxElement.height()) {
						    boxElement.css({"position": "absolute", "bottom": "-10px" });
                        } else {
                            boxElement.css({"position": "relative", "bottom": "auto"});
                        }
						scrolling = 0;					
					} else {
						scrolling = 1;
					}
				} else {
					scrolling = 0;
				}
		} else {
			boxElement.css({"position": "relative", "bottom": "auto"});
			scrolling = 1;
		}
		
	} else {}
});
