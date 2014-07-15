
$(document).ready(function() {
	document.onkeydown = NavigateThrough;

	var focusInInput = false;

	if (document.getElementsByTagName)
		onload = function () {
			var e, i = 0;
			while (e = document.getElementsByTagName('INPUT')[i++]) {
				if (e.type == 'text' || e.type == 'search') e.onfocus = function () {focusInInput = true};
				if (e.type == 'text' || e.type == 'search') e.onblur = function () {focusInInput = false};
			}
			i = 0;
			while (e = document.getElementsByTagName('TEXTAREA')[i++]) {
				e.onfocus = function () {focusInInput = true};
				e.onblur = function () {focusInInput = false};
			}
		};

		function NavigateThrough (event) {
			if (!document.getElementById) return;
			var link = false;
			var href = false;

			if (window.event) event = window.event;

			if ( (event.altKey || event.ctrlKey || event.metaKey) && event.which == 37 && !focusInInput) {
				event.preventDefault();
				link = document.getElementById('prev_arrow');
			}

			if ( (event.altKey || event.ctrlKey || event.metaKey) && event.which == 39 && !focusInInput) {
				event.preventDefault();
				link = document.getElementById('next_arrow');
			}

			if (link && link.href) document.location = link.href;
			if (href) document.location = href;
		}

		jQuery(function(){
			if(jQuery('.b-pager__left__key').size() > 0 && jQuery('.b-pager__right__key').size() > 0){
				if(navigator.userAgent.toLowerCase().indexOf("mac os x 10")!=-1){
					jQuery('.b-pager__left__key').html('<b>←</b>&nbsp;Alt');
					jQuery('.b-pager__right__key').html('Alt&nbsp;<b>→</b>');
				}
			}
		});

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


    var pageContentWidth = $(".grid__module.grid__module_col_1.grid__module_span_102").width();
    var link = ".b-doska-other-rubrics__link";
    var wrapClass = "b-doska-other-rubrics__wrap";
    var objClass = 	"b-doska-other-rubrics__popup";
    var openedClass = "b-doska-other-rubrics_state_opened";
    var close = ".b-doska-other-rubrics__popup__close-link";

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

    // Hash-ссылки
    $('a.lhash').each(function () {
    	$(this).attr('href', atob($(this).attr('data-lhash')));
    });
});
