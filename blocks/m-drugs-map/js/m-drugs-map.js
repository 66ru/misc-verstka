(function() {
	$(function() {
		var mainBlockClassName = 'm-drugs-map',
			mainBlockMapShownClassName = 'm-drugs-map_show-map',
			mapWrapClassName = 'm-drugs-map__map-wrap',
			mapClassName = 'm-drugs-map__map',

			showListButtonClassName = 'm-drugs-map__list-button',
			showMapButtonClassName = 'm-drugs-map__map-button',
			currentButtonClassName = 'm-button_current',

			$window = $(window),
			mobileSafari;

			if(/iP/.test(navigator.platform) == /Safari/i.test(navigator.userAgent)) {
				mobileSafari = true;
				console.log(42)
			}

		$('.' + mainBlockClassName).each(function() {
			var $this = $(this),

				$mapWrap = $this.find('.' + mapWrapClassName),
				$map = $this.find('.' + mapClassName),

				$listButton = $this.find('.' + showListButtonClassName),
				$mapButton = $this.find('.' + showMapButtonClassName),

				windowHeight = $window.height(),
				mapOffsetTop = $mapButton.offset().top - 10;

			if (mobileSafari) {
				windowHeight += 70;
			}

			$listButton.on('click', function(ev) {
				$this.removeClass(mainBlockMapShownClassName);
				$listButton.addClass(currentButtonClassName);
				$mapButton.removeClass(currentButtonClassName);

				ev.preventDefault();
				ev.stopPropagation();
			});

			$mapButton.on('click', function(ev) {
				$this.addClass(mainBlockMapShownClassName);
				$mapButton.addClass(currentButtonClassName);
				$listButton.removeClass(currentButtonClassName);

				$(window).scrollTop(mapOffsetTop);

				ev.preventDefault();
				ev.stopPropagation();
			});

			$mapWrap.height(windowHeight);

			$window.on('resize', function() {
				windowHeight = $window.height();
				$mapWrap.height(windowHeight);
				mapOffsetTop = $mapButton.offset().top - 10;

				if ($this.hasClass(mainBlockMapShownClassName)) {
					$(window).scrollTop(mapOffsetTop);
				}
			});
		});
	});
})();
