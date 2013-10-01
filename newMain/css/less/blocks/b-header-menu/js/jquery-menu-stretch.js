(function() {
	var $ = jQuery;

	$(document).ready(function() {
		checkAndFix();
	});

	$(window).load(function() {
		checkAndFix();
	});

	function checkAndFix() {
		$('.js-header-menu').css({overflow: 'hidden'});

		var widths = [],
			lastWidth,
			maxWidth,
			margin = 24,

			$menuContainer = $('.js-header-menu'),
			$menuItems = $('.b-header-menu__item__link'),
			$hiddenMenuItems = $('.b-header-menu__hidemenu__item'),

			menuWidth = $menuContainer.width(),
			logoWidth = $('.b-header-logo').outerWidth();

		var reorganizeMenu = function() {
			var newMenuWidth = $menuContainer.width(),
				n = widths.length - 1;

			for (n; n >= 0; n--) {
				if (newMenuWidth - lastWidth - logoWidth > widths[n]) { break;	}
			}

			$menuItems.each(function(index) {
				var $this = $(this);

				if (index <= n) {
					$this.show();
				} else {
					$this.hide();
				}

				if (index == $menuItems.length - 1) {
					$this.show();
				}
			});

			$hiddenMenuItems.each(function(index) {
				var $this = $(this);

				if (index > n) {
					$this.show();
				} else {
					$this.hide();
				}
			});
		}


		$menuItems.each(function() {
			var prev = 0;

			for (var i = 0; i < widths.length; i++) {
				prev =+ widths[i];
			}

			lastWidth = $(this).outerWidth();
			widths.push( $(this).outerWidth() + prev );

		});

		widths.pop();
		maxWidth = widths[widths.length - 1];

		$(window).on('resize', function() {
			reorganizeMenu();
		});

		$menuContainer.css({overflow: 'visible'});
		reorganizeMenu();
	}
})();
