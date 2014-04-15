$(function() {
	var layoutClass = 'm-layout',
		layoutBodyClass = layoutClass + '__body',
		layoutMainClass = layoutClass + '__main',
		layoutMenuClass = layoutClass + '__menu',
		layoutMenuInnerClass = layoutClass + '__menu-inner',

		layoutBodyStopScrollClass = layoutBodyClass + '_stop-scroll',
		layoutMainOpenMenuClass = layoutMainClass + '_menu-open',

		$window = $(window),
		$layoutBody = $('.' + layoutBodyClass),
		$layoutMain = $('.' + layoutMainClass),
		$layoutMenuInner = $('.' + layoutMenuInnerClass),

		isMenuOpen = false,
		menuWidth = 260,
		menuHeight = $layoutMenuInner.height(),
		scrollTop = $window.scrollTop(),
		scrollingTimeout,
		mayScroll = true;

	$window.on('scroll', function() {
		clearTimeout(scrollingTimeout);
		scrollingTimeout = setTimeout(function() {
			if (mayScroll) {
				scrollTop = $window.scrollTop();
				if (scrollTop < 0) scrollTop = 0;
				$layoutMenuInner.css(getTransformCssObjectY(scrollTop));
			}
		}, 100);
	});

	$('input').on('click', function() {
		if (isMenuOpen) {
			scrollTop = $layoutMain.scrollTop();
			mayScroll = false;
			$layoutMain.removeClass(layoutMainOpenMenuClass);
			isMenuOpen = false;
			$layoutBody.removeClass(layoutBodyStopScrollClass);
			$window.scrollTop(scrollTop);
			mayScroll = true;
		} else {
			$layoutMain.addClass(layoutMainOpenMenuClass);
			isMenuOpen = true;
			$layoutBody.addClass(layoutBodyStopScrollClass);
			$layoutMain.scrollTop(scrollTop);
		}
	});

	function getTransformCssObject(val) {
		var cssVal = val ? 'translateX(' + val + 'px)' : null;

		return {
			'-ms-transform': cssVal,
			'-moz-transform': cssVal,
			'-webkit-transform': cssVal,
			'transform': cssVal
		};
	}

	function getTransformCssObjectY(val) {
		var cssVal = val ? 'translateY(' + val + 'px)' : null;

		return {
			'-ms-transform': cssVal,
			'-moz-transform': cssVal,
			'-webkit-transform': cssVal,
			'transform': cssVal
		};
	}
});
