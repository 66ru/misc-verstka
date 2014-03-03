(function($) {
	$(function() {
		var	$header = $('.l-header-wrap').first(),
			$menu = $header.find('.main-menu').first(),
			$elems = $menu.find('.main-menu__elem'),
			$more = $menu.find('.main-menu__more'),
			$globalWidthSubs = $menu.find('.main-menu__sub_width_global'),
			$moreSubElems = $('.flat-sub__elem'),

			menuWidth, moreWidth,
			widths = [], classes = {},

			SUBMENU_SHOW_DELAY = 250;

		classes.currentElem = 'main-menu__elem_current';
		classes.menuNoJs = 'main-menu_js_no';

		function getElemWidths() {
			$elems.each(function() {
				widths.push($(this).outerWidth());
			});
		}

		function getMenuWidth() {
			menuWidth = $menu.width();
		}

		function initMenu() {
			$menu.removeClass(classes.menuNoJs);
			moreWidth = $more.outerWidth() + 11; // + arrow image width
		}


		function setMenuLength() {
			var curWidth = moreWidth;

			$elems.each(function(i) {
				var $this = $(this);
				curWidth += $this.width();

				if (i + 1 == $elems.length) { return; }

				if (curWidth > menuWidth) {
					$this.hide();
					$moreSubElems.eq(i).show();
				} else {
					$this.show();
					$moreSubElems.eq(i).hide();
				}
			});
		}

		function setGlobalsWidths() {
			$globalWidthSubs
				.width($header.width())
					.css({left: -$menu.offset().left});
		}

		initMenu();
		getMenuWidth();
		getElemWidths();
		setMenuLength();
		setGlobalsWidths();

		$(window).on('resize', function() {
			getMenuWidth();
			setMenuLength();
			setGlobalsWidths();
		});

		$elems
			.on('mouseenter', function() {
				var $this = $(this);

				$menu.data('timer', setTimeout(function() {
					$elems.removeClass(classes.currentElem);
					$this.addClass(classes.currentElem);
				}, SUBMENU_SHOW_DELAY));
			})
			.on('mouseleave', function() {
				clearTimeout($menu.data('timer'));
			});

		$menu.on('mouseleave', function() {
			clearTimeout($menu.data('timer'));
			$elems.removeClass(classes.currentElem);
		});
	});
})(jQuery);
