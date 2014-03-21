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

		var isDragging = false;

		Hammer(domMainContainer, hammerOptions).on('dragright dragleft', function(e) {
			var deltaX = e.gesture.deltaX,
				currentX = 0,
				newX = 0;

			isDragging = true;
			e.gesture.preventDefault();

			$mainContainer.removeClass(transitionClass);

			if (!$mainContainer.hasClass(menuIsVisibleClass)) {
				currentX = 0;
			} else currentX = 260;

			newX = currentX + deltaX;

			if (newX > 260) newX = 260;
			if (newX < 0) newX = 0;

			$mainContainer.css(getTransformCssObject(newX));
		});

		Hammer(domMainContainer).on('dragend', function(e) {
			e.stopPropagation();

			var absDeltaX = Math.abs(e.gesture.deltaX);

			if ($mainContainer.hasClass(menuIsVisibleClass)) {
				if ((absDeltaX > 100) || (e.gesture.velocityX > 0.3)) {
					$mainContainer.removeClass(menuIsVisibleClass);
				}
			} else if ((absDeltaX > 130) || (e.gesture.velocityX > 0.3)) {
				$mainContainer.addClass(menuIsVisibleClass);
			}

			$mainContainer.css(getTransformCssObject());

			displayCurrentValue(e, absDeltaX);
			$mainContainer.addClass(transitionClass);

			setTimeout(function() {
				isDragging = false;
			}, 100);
		});

		$('a').on('click', function() {
			if (isDragging) return false;
		});

		function displayCurrentValue(e) {
			$('#that').html(Math.floor(e.gesture.deltaX) + ', ' + Math.floor(e.gesture.velocityX*100)/100 + ', ' + e.gesture.direction);
		}

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
})();







(function() {
	$(function() {
		$('.m-new-comment').hide();
		$('.m-authorize__button').on('click', function() {
			$('.m-authorize').hide();
			$('.m-new-comment').show();
			return false;
		});
		$('.m-new-comment__close').on('click', function() {
			$('.m-new-comment').hide();
			$('.m-authorize').show();
			return false;
		});
	});

	$(function() {
		$('.m-comment, .m-authorize').hide();

		$('#show-comments').on('click', function(ev) {
			var $this = $(this);
			ev.preventDefault();
			$this.addClass('m-button_loading');

			setTimeout(function() {
				console.log('bang!');
				$this.removeClass('m-button_loading');
				$this.addClass('m-button_activated');
				$('.m-comment, .m-authorize').show();
			}, 2000);
		});
	});
})();
