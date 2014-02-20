(function() {
	$(function() {
		var $menuButton = $('.m-menu__button'),
			$mainContainer = $('.m-layout'),
			$closeGlobal = $('.m-layout__close-global'),

			menuShowMenuClass = 'm-layout_show-menu_yes',
			closeGlobalOnClass = 'm-layout__close-global_on';

		$menuButton.on('click', function() {
			$('.m-sidemenu').show();
			$mainContainer.toggleClass(menuShowMenuClass);
			$closeGlobal.addClass(closeGlobalOnClass);
		});

		$closeGlobal.on('click', function() {
			$mainContainer.removeClass(menuShowMenuClass);
			$closeGlobal.removeClass(closeGlobalOnClass);
		});
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
})();
