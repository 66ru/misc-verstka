(function() {
	$(function() {
		var layoutClass = 'm-layout',
			layoutMainClass = layoutClass + '__main',
			layoutMainOpenMenuClass = layoutMainClass + '_menu-open',
			layoutMenuWrapClass = layoutClass + '__menu-wrap',
			layoutMenuToggleClass = layoutClass + '__toggle-menu',
			layoutOverlayClass = layoutClass + '__overlay',

			$layoutMain = $('.' + layoutMainClass),
			$layoutMenuWrap = $('.' + layoutMenuWrapClass),
			$layoutMenuToggle = $('.' + layoutMenuToggleClass),
			$layoutOverlay = $('.' + layoutOverlayClass),

			isMenuOpen = false,
			MENU_TRANSITION_TIME = 400;

		function openMenu() {
			$layoutMenuWrap.show();
			$layoutMain.addClass(layoutMainOpenMenuClass);
			$layoutOverlay.show();
			isMenuOpen = true;
		}

		function closeMenu() {
			$layoutMain.removeClass(layoutMainOpenMenuClass);
			$layoutOverlay.hide();
			setTimeout(function() {
				$layoutMenuWrap.hide();
			}, MENU_TRANSITION_TIME);
			isMenuOpen = false;
		}


		$layoutMenuToggle.on('click', function() {
			if (isMenuOpen) {
				closeMenu();
			} else {
				openMenu();
			}
		});

		$layoutOverlay.on('click', function() {
			closeMenu();
		});
	});

	window.addEventListener('load', function() {
	    new FastClick(document.body);
	}, false);
})();
