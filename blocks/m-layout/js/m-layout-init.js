(function() {
	$(function() {
		var $menuButton = $('.m-menu__button'),
			$mainContainer = $('.m-layout'),
			$closeGlobal = $('.m-layout__close-global'),

			domMainContainer = $mainContainer[0],

			menuIsVisibleClass = 'm-layout_show-menu_yes',
			transitionClass = 'm-layout_transition',
			closeGlobalOnClass = 'm-layout__close-global_on',

			viewportWidth = $(window).width(),
			layoutWidthChangePoint = 319;


		$menuButton.on('click', function() {
			$mainContainer.toggleClass(menuIsVisibleClass);
			$closeGlobal.addClass(closeGlobalOnClass);
		});

		$closeGlobal.on('click', function() {
			$mainContainer.removeClass(menuIsVisibleClass);
			$closeGlobal.removeClass(closeGlobalOnClass);
		});


		var hammerOptions = {
			drag: true,
			drag_lock_to_axis: true,
			drag_min_distance: 15
		};

		var isDragging = false,
			scrollTopBeforeDrag;

		Hammer(domMainContainer, hammerOptions).on('dragright dragleft swipeleft swiperight', function(e) {
			var deltaX = e.gesture.deltaX,
				currentX = 0,
				newX = 0;

			isDragging = true;
			e.gesture.preventDefault();
			if (e.type == 'swipeleft' || e.type == 'swiperight') { return; }

			$mainContainer.removeClass(transitionClass);

			if (!$mainContainer.hasClass(menuIsVisibleClass)) {
				currentX = 0;
			} else currentX = 260;

			newX = currentX + deltaX;

			if (newX > 260) newX = 260;
			if (newX < 0) newX = 0;

			$mainContainer.css(getTransformCssObject(newX));

			displayCurrentValue(e);
		});

		Hammer(domMainContainer).on('dragstart', function(e) {
			scrollTopBeforeDrag = $mainContainer.scrollTop();
		});

		Hammer(domMainContainer).on('dragend', function(e) {
			e.stopPropagation();

			if (scrollTopBeforeDrag != $mainContainer.scrollTop()) {
				return;
			}

			var absDeltaX = Math.abs(e.gesture.deltaX);

			if ($mainContainer.hasClass(menuIsVisibleClass)) {
				if ((absDeltaX > 100) || (e.gesture.velocityX > 0.3)) {
					$mainContainer.removeClass(menuIsVisibleClass);
				}
			} else if ((e.gesture.direction == 'right') && ((absDeltaX > 130) || (e.gesture.velocityX > 0.3))) {
				$mainContainer.addClass(menuIsVisibleClass);
			}

			console.log(e.gesture.direction)

			$mainContainer.css(getTransformCssObject());

			$mainContainer.addClass(transitionClass);

			setTimeout(function() {
				isDragging = false;
			}, 100);
		});

		$('a').on('click', function() {
			if (isDragging) return false;
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
	});


	window.addEventListener('load', function() {
	    new FastClick(document.body);
	}, false);

	function displayCurrentValue(e) {
		$('#rrr').html(Math.floor(e.gesture.deltaX) + ', ' + Math.floor(e.gesture.velocityX*100)/100 + ', ' + e.gesture.direction);
	}
})();
