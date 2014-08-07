(function($) {
	$(function() {
		var blockClassName = 'vert-carousel',
			strapClassName = 'vert-carousel__strap',
			buttonPrevClassName = 'vert-carousel__arrow_prev',
			buttonNextClassName = 'vert-carousel__arrow_next',
			buttonInactiveClassName = 'vert-carousel__arrow_inactive',

			$block = $('.' + blockClassName),
			$strap = $('.' + strapClassName),
			$buttonPrev = $('.' + buttonPrevClassName),
			$buttonNext = $('.' + buttonNextClassName),

			elemsCount = $strap.children().length,
			currentElem = 0,

			ELEM_HEIGHT = 500;

		function getTransformCss(val) {
			return {
				'-webkit-transform': 'translateY(' + val + 'px)',
				'-ms-transform': 'translateY(' + val + 'px)',
				'-o-transform': 'translateY(' + val + 'px)',
				'transform': 'translateY(' + val + 'px)',
			};
		}


		$buttonPrev.on('click', function() {
			if (currentElem === 0) {
				return false;
			} else {
				$strap.css(getTransformCss(-(currentElem - 1) * ELEM_HEIGHT));
				currentElem -= 1;

				if (currentElem === 0) {
					$(this).addClass(buttonInactiveClassName);
				}
			}
		});

		$buttonNext.on('click', function() {
			if (currentElem === elemsCount-1) {
				return false;
			} else {
				$strap.css(getTransformCss(-(currentElem + 1) * ELEM_HEIGHT));
				currentElem += 1;

				if (currentElem === elemsCount-1) {
					$(this).addClass(buttonInactiveClassName);
				}
			}
		});
	});
})(jQuery);
