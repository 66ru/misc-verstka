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


		// Hammer.gestures.Drag.defaults.drag_lock_to_axis = true;

		// var elem = document.body;
		// Hammer(elem).on('dragleft', function(ev) {
		// 	ev.gesture.preventDefault();
		// 	// $mainContainer.removeClass(menuShowMenuClass);
		// 	// $closeGlobal.removeClass(closeGlobalOnClass);
		// 	$('#t').html(ev.gesture.deltaX);
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
