(function() {
	$(function() {
		var $window = $(window),
			$menuButton = $('.m-menu__button'),
			$mainContainer = $('.m-layout'),
			$closeGlobal = $('.m-layout__close-global'),

			menuShowMenuClass = 'm-layout_show-menu_yes',
			closeGlobalOnClass = 'm-layout__close-global_on';

		$menuButton.on('click', function() {
			$mainContainer.toggleClass(menuShowMenuClass);
			$closeGlobal.addClass(closeGlobalOnClass);
			// $(window).scrollTop(0);
		});

		$closeGlobal.on('click', function() {
			$mainContainer.removeClass(menuShowMenuClass);
			$closeGlobal.removeClass(closeGlobalOnClass);
		});
	});
})();
