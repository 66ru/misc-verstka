(function() {
	$(function() {
		var $menuButton = $('.m-menu__button'),
			$mainContainer = $('.m-layout'),
			$closeGlobal = $('.m-layout__close-global'),

			menuShowMenuClass = 'm-layout_show-menu_yes',
			closeGlobalOnClass = 'm-layout__close-global_on';

		$menuButton.on('click', function() {
			$mainContainer.toggleClass(menuShowMenuClass);
			$closeGlobal.addClass(closeGlobalOnClass);
		});

		$closeGlobal.on('click', function() {
			$mainContainer.removeClass(menuShowMenuClass);
			$closeGlobal.removeClass(closeGlobalOnClass);
		});




		// var elem = document.getElementById('main'),
		// 	dragThreshold = 15;

		// // Hammer.gestures.Drag.defaults.drag_lock_to_axis = true;

		// Hammer(elem).on('drag', function(e) {
		// 	var absDeltaX = Math.abs(e.gesture.deltaX),
		// 		toRight = e.gesture.deltaX > 0;

		// 	$('#that').html(e.gesture.deltaX + ' ' + $mainContainer.css('transform')) + ' ' + ($mainContainer.css('transform') - absDeltaX);

		// 	if (absDeltaX > dragThreshold) {
		// 		e.gesture.preventDefault();

		// 		var newLeft = toRight ? absDeltaX : parseInt($mainContainer.css('transform')) - absDeltaX;

		// 		if (newLeft < 0) newLeft = 0;
		// 		if (newLeft > 260) newLeft = 260;

		// 		$mainContainer.css({
		// 			transform: 'translationX(newLeft)'
		// 		});
		// 	}
		// });

		// Hammer(elem).on('dragend', function(e) {
		// 	var d = parseInt($mainContainer.css('left'));
		// 	if (d > 130) {
		// 		$mainContainer.addClass(menuShowMenuClass);
		// 	} else {
		// 		$mainContainer.removeClass(menuShowMenuClass);
		// 	}

		// 	$mainContainer.css({
		// 		left: null
		// 	});
		// });
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
