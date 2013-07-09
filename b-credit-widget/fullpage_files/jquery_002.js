(function ($) {

var initialized = false,
    initCallbacks = [],
    currentOptions = {},
    $popup, $title, $content;

$.popup = {

    options: {
        animation: {
            show: 200,
            hide: 200
        },
        buttons: [
            {
                action: function (options, $popup) { $popup.popuphide(); },
                caption: 'Ok',
                highlited: true
            }
        ],
        content: '',
        height: false,
        popupshow: function () { },
        popuphide: function () { },
        title: '',
        width: false
    },

    initOptions: {
        classes: {
            close: 'js_popup_close',
            content: 'js_popup_content',
            frame: {
                self: 'js_frame js_popup_frame',
                wrap: 'js_frame_wrap js_popup_frame_wrap',
                content: 'js_frame_content js_popup_frame_content',
                topLeft: 'js_frame_top-left js_popup_frame_top-left',
                topRight: 'js_frame_top-right js_popup_frame_top-right',
                bottomLeft: 'js_frame_bottom-left js_popup_frame_bottom-left',
                bottomRight: 'js_frame_bottom-right js_popup_frame_bottom-right'
            },
            overlay: 'js_popup_overlay',
            self: 'js_popup',
            sizer: 'js_popup_sizer',
            title: 'js_popup_title'
        }
    },

    init: function (callback) {

        initCallbacks.push(callback);
    },

    show: function (_options) {

        var options = {};

        $.extend(true, options, $.popup.options, _options);

        if (typeof _options.buttons != undefined) {

            options.buttons = _options.buttons;
        }

        $(function () {

            if (!initialized) {

                init();
            }

            currentOptions = options;

            $popup.popupshow();
        });
    },

    hide: function () {

        $popup.popuphide();
    },

    getButton: $button,
    getButtons: $buttons
};

$.fn.popup = function (_options) {

    if (!initialized) {

        init();
    }

    var $currentPopup = this;

    var options = {};

    $.extend(true, options, $.popup.options, _options);

    if (typeof _options.buttons != undefined) {

        options.buttons = _options.buttons;
    }

    options.title = $('<div />').append(options.title).contents();
    options.content = $('<div />').append(options.content).contents();

    $currentPopup.each(function () {

        $(this).click(function (e) {

            e.preventDefault();
            e.stopPropagation();

            currentOptions = options;

            $popup.popupshow();

            return false;
        });
    });

    return $currentPopup;
}

function init() {

    if (initialized) {

        return;
    }

    var options = $.popup.initOptions;

    $popup = $(
        '<div class="' + options.classes.self + '">' +
        ' <div class="' + options.classes.overlay + '"></div>' +
        ' <div class="' + options.classes.sizer + '"></div>' +
        ' <div class="' + options.classes.frame.self + '">' +
        '  <div class="' + options.classes.frame.wrap+ '">' +
        '   <div class="' + options.classes.frame.topLeft + '"></div>' +
        '   <div class="' + options.classes.frame.topRight + '"></div>' +
        '   <div class="' + options.classes.frame.content + '">' +
        '    <div class="' + options.classes.close + '"></div>' +
        '    <div class="' + options.classes.title + '"></div>' +
        '    <div class="' + options.classes.content + ' rc5"></div>' +
        '   </div>' +
        '   <div class="' + options.classes.frame.bottomLeft + '"></div>' +
        '   <div class="' + options.classes.frame.bottomRight + '"></div>' +
        '  </div>' +
        ' </div>' +
        '</div>'
    );

    $title = $popup.find('.' + options.classes.title);
    $content = $popup.find('.' + options.classes.content);

    $popup.popuphide = function () {

        hide(currentOptions, $popup, $title, $content);

        return this;
    };

    $popup.popupshow = function () {

        $(function () {

            if (!initialized) {

                init();
            }

            show(currentOptions, $popup, $title, $content);
			$popup.css("top", $(document).scrollTop() + "px");
        });

        return this;
    };

    $popup.setTitle = function (title) {

        $title
            .contents()
                /**
                 * Просто .remove почему-то не отцепляет элементы от родителя, если
                 * ему передать true, чтобы сохранить эвенты и прочее
                 */
                .each(function () { this.parentNode.removeChild(this); })
                .end()
            .append(title);
    };

    $popup.setContent = function (content) {

        $content
            .contents()
                .each(function () { this.parentNode.removeChild(this); })
                .end()
            .append(content);
    };

    $popup
        .hide()
        .prependTo('body')
        .find('.' + options.classes.overlay + ', .' + options.classes.close)
        .click($popup.popuphide);

    $.each(initCallbacks, function (index, callback) {

        callback.apply($popup, [currentOptions, $popup, $title, $content]);
    })

    initialized = true;
}

function show(options, $popup, $title, $content) {

    $popup.setTitle(options.title);

	if (options.url) {
		$.post(options.url, function(data) {
			$popup.setContent(data);
		});
	}

    $popup.setContent(options.content);

    $content
        .css({
            width: options.width ? options.width : 'auto',
            height: options.height ? options.height : 'auto'
        });

    if (options.buttons && options.buttons.length) {

        $content.append($buttons(options.buttons));
    }

    rocon.process($popup.get(0));

    if (options.animation.show) {

        $popup.fadeIn(options.animation.show);
    }

    else {

        $popup.show();
    }

    $(window)
        .bind('keydown.popup', 'esc', $popup.popuphide);

    options.popupshow.call($popup, options, $popup, $title, $content);
}

function hide(options, $popup, $title, $content) {

    if (options.animation.hide) {

        $popup.fadeOut(options.animation.hide);
    }

    else {

        $popup.hide();
    }

    $(window).unbind('keydown.popup');

    options.popuphide.call($popup, options, $popup, $title, $content);
}

function $button(_options) {

    var options = {};

    $.extend(true, options, { caption: 'Ok', className: '', type: 'button' }, _options);

    var $button = $('<input class="forms_button js_popup_button ' + options.className + '" type="' + options.type + '">');

    $button.val(options.caption);

    if (options.action) {

        $button.click(function () { options.action.apply(this, [currentOptions, $popup, $title, $content]) });
    }

    if (options.highlited) {

        $button.addClass('js_popup_button-higlited');

        var $wrap = $('<i class="button buttons_wrap js_popup_button_wrap rc3"></i>');

        $('<b class="opera_inline-block-wrap"></b>')
            .append($button)
            .appendTo($wrap);

        $button = $wrap;
    }

    return $button;

}

function $buttons(buttons) {

    var $buttons = $('<div class="js_popup_buttons" />');

    $.each(buttons, function (index, button) {

        $buttons.append($button(button));
    });

    return $buttons;
}

})(jQuery);