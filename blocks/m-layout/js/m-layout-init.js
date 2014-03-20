(function() {
	$(function() {
		var $menuButton = $('.m-menu__button'),
			$mainContainer = $('.m-layout'),
			domMainContainer = $mainContainer[0],
			$closeGlobal = $('.m-layout__close-global'),

			menuShowMenuClass = 'm-layout_show-menu_yes',
			transitionClass = 'm-layout_transition',
			closeGlobalOnClass = 'm-layout__close-global_on';

		$menuButton.on('click', function() {
			$mainContainer.toggleClass(menuShowMenuClass);
			// $closeGlobal.addClass(closeGlobalOnClass);
		});

		$closeGlobal.on('click', function() {
			$mainContainer.removeClass(menuShowMenuClass);
			// $closeGlobal.removeClass(closeGlobalOnClass);
		});


		var hammerOptions = {
			drag: true,
			drag_lock_to_axis: true,
			drag_min_distance: 15
		};

		var isDragging = false;

		Hammer(domMainContainer, hammerOptions).on('dragright', function(e) {
			isDragging = true;
			e.gesture.preventDefault();

			var absDeltaX = Math.abs(e.gesture.deltaX);

			$mainContainer.removeClass(transitionClass);

			if (!$mainContainer.hasClass(menuShowMenuClass)) {
				$mainContainer.css({
					'-ms-transform': 'translateX(' + absDeltaX + 'px)',
					'-moz-transform': 'translateX(' + absDeltaX + 'px)',
					'-webkit-transform': 'translateX(' + absDeltaX + 'px)',
					'transform': 'translateX(' + absDeltaX + 'px)'
				});
			}

			displayCurrentValue(e, absDeltaX);
		});

		Hammer(domMainContainer, hammerOptions).on('dragleft', function(e) {
			isDragging = true;
			e.gesture.preventDefault();

			var absDeltaX = Math.abs(e.gesture.deltaX);

			$mainContainer.removeClass(transitionClass);

			if ($mainContainer.hasClass(menuShowMenuClass)) {
				$mainContainer.css({
					'-ms-transform': 'translateX(' + (260 - absDeltaX) + 'px)',
					'-moz-transform': 'translateX(' + (260 - absDeltaX) + 'px)',
					'-webkit-transform': 'translateX(' + (260 - absDeltaX) + 'px)',
					'transform': 'translateX(' + (260 - absDeltaX) + 'px)'
				});
			}

			displayCurrentValue(e, absDeltaX);
		});

		Hammer(domMainContainer).on('dragend', function(e) {
			e.stopPropagation();

			var absDeltaX = Math.abs(e.gesture.deltaX);

			if ($mainContainer.hasClass(menuShowMenuClass)) {
				if ((absDeltaX > 100) || (e.gesture.velocityX > 0.3)) {
					$mainContainer.removeClass(menuShowMenuClass);
				}
			} else if ((absDeltaX > 130) || (e.gesture.velocityX > 0.3)) {
				$mainContainer.addClass(menuShowMenuClass);
			}

			$mainContainer.css({
				'-ms-transform': null,
				'-moz-transform': null,
				'-webkit-transform': null,
				'transform': null
			});

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
			$('#that').html(Math.floor(e.gesture.deltaX) + ', ' + Math.floor(e.gesture.velocityX*100)/100);
		}
	});
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
			ev.preventDefault();
			$(this).addClass('m-button_activated');
			$('.m-comment, .m-authorize').show();
		});
	});
})();

window.addEventListener('load', function() {
    new FastClick(document.body);
}, false);
