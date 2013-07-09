function initSearchExampleWords(idInput, classWidgetContainer) {
	function getRandomInt(min, max) 	{
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	classWidgetContainer = "." + classWidgetContainer;
	$(".hintSearchZone").find(".hidden").removeClass("hidden");
	var text = $(classWidgetContainer + " .searchHint").html();
	var new_arr = [];
	var new_text = text.replace('<span class="hidden">', '').replace('</span>', '');
	new_arr = new_text.split(',');
	rnd_text = new_arr[getRandomInt(0, new_arr.length - 1)];
	$(classWidgetContainer + " .searchHint").text(rnd_text);
	$(classWidgetContainer).click(function() {
		$("#"+idInput).val(rnd_text.trim());
	});
}


function getKeystroke(e) {
var keynum;
   /* get keycode depending on IE vs. everyone else */
   if(window.event)
      { keynum = e.keycode }
   else if(e.which)
      { keynum = e.which }
   /* only interested in CTRL and ALT sequences */
   if((e.ctrlKey == 1) || (e.altKey == 1)) {
      switch(keynum)
      {
         case 13:  /* enter key */
            $("#jsCommentForm").submit();
            break;
      }
   }
}

(function ($) {
	/** Обработка ajax ошибок */
    $.ajaxSetup({
		error: function(xhr, error){
			/**
			 * Пока что выключим глобальное оповещение об ошибках, т.к. они
			 * могут возникать даже при загрузке скриптов с помощью jQuery, а
			 * мы не хотим, чтобы пользователи видели внезапные ошибки
	         */
			return;

			if (xhr.status==0) {
                $.popup.show({ title: 'Ошибка', content: 'Невозможно выполнить запрос' });
			}
            else if (xhr.status == 404) {
                $.popup.show({ title: 'Ошибка', content: 'Во время запроса произошла ошибка' });
			}
            else if (xhr.status == 500) {
                $.popup.show({ title: 'Ошибка', content: 'Во время запроса произошла ошибка' });
			}
            else if (error == 'parsererror') {
                $.popup.show({ title: 'Ошибка', content: 'Во время запроса произошла ошибка' });
			}
            else if (error == 'timeout'){
                $.popup.show({ title: 'Ошибка', content: 'Не получен ответ от сервера' });
			}
            else {
                $.popup.show({ title: 'Ошибка', content: 'Неизвестная ошибка: ' + xhr.responseText });
			}
		}
	});

    /**
     * Показываем, что у нас есть JS (о, боже!)
     */
    $(document).bind('documentbodyloadstart', function () {
        $('body').addClass('js');
    });


    /**
     * Включаем wysiwyg
     */
    $(document).bind('contentbodyload', function () {

        $('.js_wysiwyg_small').tinymce({
			body_class: 'content',
			language : 'ru',
            plugins: 'safari,xhtmlxtras,portalstyles,portallink',
            script_url : ($(document).data('portal.resources') || '') + '/common/js/tiny_mce/tiny_mce.js',
            skin: 'portal',
            theme: 'advanced',
            theme_advanced_toolbar_location: 'top',
            theme_advanced_buttons1: 'bold,italic,strikethrough,|,justifyleft,justifycenter,justifyright,bullist,numlist,|,blockquote,|,portallink',
            theme_advanced_buttons2: '',
            theme_advanced_buttons3: ''
        });

        $('.js_wysiwyg_medium').tinymce({
			body_class: 'content',
			language : 'ru',
            plugins: 'safari,xhtmlxtras,portalstyles,portallink',
            script_url : ($(document).data('portal.resources') || '') + '/common/js/tiny_mce/tiny_mce.js',
            skin: 'portal',
            theme: 'advanced',
            theme_advanced_toolbar_location: 'top',
            theme_advanced_buttons1: 'bold,italic,strikethrough,|,justifyleft,justifycenter,justifyright,bullist,numlist,|,blockquote,|,portallink, code',
            theme_advanced_buttons2: '',
            theme_advanced_buttons3: ''
        });

        $('.js_wysiwyg_admin').tinymce({
			body_class: 'content',
			language : 'ru',
            plugins: 'safari,xhtmlxtras,portalstyles,portallink',
            script_url : ($(document).data('portal.resources') || '') + '/common/js/tiny_mce/tiny_mce.js',
            skin: 'portal',
            theme: 'advanced',
            theme_advanced_toolbar_location: 'top',
            theme_advanced_buttons1: 'bold,italic,strikethrough,|,justifyleft,justifycenter,justifyright,bullist,numlist,|,blockquote,|,portallink, code',
            theme_advanced_buttons2: '',
            theme_advanced_buttons3: ''
        });
    });
})(jQuery);

$(document).ready(function () {
    try {
        $(".j-popap_map").each(function () {
            var title = $(this).attr("title_map");
            $(this).popup({
                title: title,
                content: "",
                width: "500px",
                height: "400px"
            }).bind("click", function (e) {
				var city = ($(this).attr("city_map")) ? ($(this).attr("city_map") + ", ") : "";
                var addr = city + $(this).attr("addr_map");
				workClock = "";
                phones = "";
				$("#cardBankHiddenBlockPhones").css("display", "block");
				$("#cardBankHiddenBlockWorkClock").css("display", "block");
                
				$(".js_popup_top-content").remove();
                if (! $(".js_popup_top-content").html()) {
                	$(".js_popup_content").before("<div class='js_popup_top-content'></div>");	
                }
                
		 		if ($(this).parents(".js-card-bank-table-str").find(".js-popup-work-clock").length || $(this).parents(".js-card-bank-table-str").find(".js-popup-phones").length) {
		 			$(".js_popup_top-content").html("");
		 			$("#cardBankHiddenBlockWorkClock").find("span").html("");
		 			$("#cardBankHiddenBlockPhones").find("span").html("");		 			
		 			
			 		if ($(this).parents(".js-card-bank-table-str").find(".js-popup-work-clock").length) {
			 			workClock = $(this).parents(".js-card-bank-table-str").find(".js-popup-work-clock").html();
			 			$("#cardBankHiddenBlockWorkClock").css("display", "block");
			 			$("#cardBankHiddenBlockWorkClock").find("span").html(workClock);//время работы
		 			} else $("#cardBankHiddenBlockWorkClock").css("display", "none");
			 		
			 		if ($(this).parents(".js-card-bank-table-str").find(".js-popup-phones").length) {
			 			phones = $(this).parents(".js-card-bank-table-str").find(".js-popup-phones").html();
			 			$("#cardBankHiddenBlockPhones").css("display", "block");
			 			$("#cardBankHiddenBlockPhones").find("span").html(phones);//телефоны
			 		} else $("#cardBankHiddenBlockPhones").css("display", "none");
			 		
			 		pic = $(".hotels_wrap_hotel-top-pic").attr("src");		 			
		 			
			 		$("#cardBankHiddenBlockPic").attr("src", pic);//картинка
			 		new_content = $(".card-bank-hidden-block").html();

		    		$(".js_popup_top-content").html(new_content);                
            	}
                
                $(".js_popup_content").each(function () {
                    var map = new YMaps.Map(this, 14);
                    var geocoder = new YMaps.Geocoder(addr);

                    // По завершению геокодирования инициализируем карту первым результатом
                    YMaps.Events.observe(geocoder, geocoder.Events.Load, function (geocoder) {
                        if (geocoder.length()) {
                            map.setCenter(geocoder.get(0).getGeoPoint(), 14);
                            var placemark = new YMaps.Placemark(geocoder.get(0).getGeoPoint());
                            placemark.description = addr;
                            map.addOverlay(placemark);
                        }
                    });

                    // Добавление элементов управления
                    map.addControl(new YMaps.TypeControl());
                    map.addControl(new YMaps.Zoom());
                    map.addControl(new YMaps.ScaleLine());
                    map.addControl(new YMaps.SearchControl());
                });
                e.preventDefault();
            });
        });
    } catch(e){}
});

$(document).ready(function() {
    // Обработка закрытия блока в аренде недвижимости
    var realty_cookie_name = 'realty_quality_dont_show';
    var realty_close_id = "#realty-quality-check-close";
    var realty_quality_check_div = "#realty-quality-check-div";

    $(document).delegate(realty_close_id, "click", function(e) {
        e.preventDefault();

        var c = $.cookie(realty_cookie_name);
        var expires_in = 999;

        $(realty_quality_check_div).hide();

        if (!c) {
            $.cookie(realty_cookie_name, true, { expires: expires_in, path: '/' });
        }
    });

    var c = $.cookie(realty_cookie_name);
    if (!c) {
        $(realty_quality_check_div).show();
    }
});

$(document).ready(function() {
    // TODO: todo as todo
    $('a.its_my_adv').click(function(e) {
        e.preventDefault();
        alert('click its my adv button');
        console.log('click its my adv button');
    });

    $('.js_choose-image').click(function(e) {
        var big_img = $($($(this)[0]).parent()).children('img').attr("full-size");
        var current_index = $('.js_choose-image').index(this);
        $('#full-size-image').attr("src", big_img);
        $('#full-size-image').attr("img-index", current_index);

        var items_w_shadow = $('.b-image__link__shadow');
        var items_w_zoom = $('.b-image__link__zoom');

        for (var i=0; i<items_w_shadow.length; i++) {
            if (i == current_index) {
                $(items_w_shadow[i]).attr('style', 'display: block;');
                $(items_w_zoom[i]).attr('style', 'display: block;');
            } else {
                $(items_w_shadow[i]).removeAttr('style');
                $(items_w_zoom[i]).removeAttr('style');
            }
        }
        return false;
    });

    $('.js_next-image').click(function(e) {
        var current_index = parseInt($(this).children('img').attr('img-index'));
        $($('.b-image__link__shadow')[current_index]).removeAttr('style');
        $($('.b-image__link__zoom')[current_index]).removeAttr('style');

        if ((current_index+1) > ($('.b-image__link__shadow').length-1)) {
            $($('.b-image__link__shadow')[0]).attr('style', 'display: block;');
            $($('.b-image__link__zoom')[0]).attr('style', 'display: block;');

            $('#full-size-image').attr("src", $($('.b-image__pic')[0]).attr('full-size'));
            $('#full-size-image').attr("img-index", "0");
        } else {
            $($('.b-image__link__shadow')[current_index+1]).attr('style', 'display: block;');
            $($('.b-image__link__zoom')[current_index+1]).attr('style', 'display: block;');

            $('#full-size-image').attr("src", $($('.b-image__pic')[current_index+1]).attr('full-size'));
            $('#full-size-image').attr("img-index", current_index+1);
        }

        return false;
    });

    // Поисковые подсказки
    $("a.b-wide-search__wrap__example__item").click(function (event) {
        event.preventDefault();
        $('input#search-input').val(this.text);
    });

    function process_complaint_cookie_group(human_id) {
        var cookie_name = 'cmpls';

        var c = $.cookie(cookie_name);
        var expires_in = 999;
        var hid = human_id;

        if (!c) {
            var hids = new Array();
            hids.push(hid);
        } else {
            hids = JSON.parse(c);
            if (hid in hids == false) {
                hids.push(hid);
            }
        }

        hids = JSON.stringify(hids);
        $.cookie(cookie_name, hids, { expires: expires_in, path: '/' });
    }

    // Отправить жалобу в списке объявлений группы
    $(".send_complaint_group").click(function (e) {
        e.preventDefault();

        var item = this;
        var description = this.text;
        var itemid = $(this).attr("itemid");
        var action = '/ajax/adv_complaint_add/' + itemid + '/';

        var data_to_send = { description: description }

        $.post(action, data_to_send, function (response) {
            // Обработаем ответ
            if (response.status != 0 && response.status != 2) {
                alert('При подаче жалобы произошла неизвестная ошибка.');
            } else {
                $(item).closest('.b-complaint-popup__text').html('<li>Жалоба принята</li>');

                process_complaint_cookie_group(response.human_id);

                // Закроем popup
                function complaint_popup_hide() {
                    $(item).closest(".b-complaint-popup").toggle();
                }

                setTimeout(complaint_popup_hide, 2000);
            }
        });
    });
});
