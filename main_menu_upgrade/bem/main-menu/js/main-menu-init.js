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

			SUBMENU_DELAY = 250;

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
			if ($menu.length > 0)
				$globalWidthSubs
					.width($header.width())
						.css({left: -$menu.offset().left});
		}

		function closeSub() {
			$elems.removeClass(classes.currentElem);
		}

		function setSubmenuTimeout(fun) {
			$menu.data('timer', setTimeout(fun, SUBMENU_DELAY));
		}

		jQuery.extend(jQuery.fn, {
			within: function(pSelector) {
				return $(this).closest(pSelector).length;
			}
		});

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

				clearTimeout($menu.data('timer'));

				setSubmenuTimeout(function() {
					closeSub();
					$this.addClass(classes.currentElem);
				});
			})
			.on('mouseleave', function() {
				clearTimeout($menu.data('timer'));
			});

		$menu.on('mouseleave', function(e) {
			var x = e.clientX, y = e.clientY,
				$elementMouseIsOver = $(document.elementFromPoint(x, y));

			// Submenu should disappear with delay when mouse is still on the header...
			if ($elementMouseIsOver.within($header)) {
				setSubmenuTimeout(function() {
					closeSub();
				});
			// ...but it should disappear instantly when mouse moves on page content.
			} else {
				closeSub();
			}
		});
	});
})(jQuery);
