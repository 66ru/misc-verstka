$(document).ready(function() {

	var pageContentWidth = $(".page-col-1-span-15").width();
	var link = ".b-doska-other-rubrics__link";
	var wrapClass = "b-doska-other-rubrics__wrap";
	var objClass = 	"b-doska-other-rubrics__popup";
	var openedClass = "b-doska-other-rubrics_state_opened";
    var close = ".b-doska-other-rubrics__popup__close-link"

	
	$(link).click(function() {
        // Обработка клика по стрелочке
        var h = this;
        $(link).each(function(i, obj) {
            if (h != obj) {
                $(obj).parent().removeClass(openedClass);
            }
        });
		$(this).parent().toggleClass(openedClass);
		var width = pageContentWidth;
		var left = "-" + $(this).position().left;
		$(this).next("." + wrapClass).find("." + objClass).css("width", width + 22 + "px");
		$(this).next("." + wrapClass).find("." + objClass).css("left", left -13 + "px");
		return false;
	});

    $(close).click(function(e) {
        // Обработка клика по крестику во всплывающем окне
        e.preventDefault();
        $(link).each(function(i, obj) {
           obj = $(obj);
           if (obj.parent().hasClass(openedClass)) {
               obj.trigger('click');
           }
        });
    });
});
	
