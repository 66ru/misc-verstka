(function($) {
	$(function() {
		var	domHeader = $('.l-header-wrap').first(),
			domMenu = domHeader.find('.main-menu').first(),
			domElems = domMenu.find('.main-menu__elem'),
			domMore = domMenu.find('.main-menu__more'),
			domGlobalWidthSubs = domMenu.find('.main-menu__sub_width_global'),
			domMoreSubElems = $('.flat-sub__elem'),

			menuWidth, moreWidth,
			widths = [], classes = {};

		classes.currentElem = 'main-menu__elem_current';
		classes.menuNoJs = 'main-menu_js_no';

		function activate(row) {
			var $this = $(row);
			$this.addClass(classes.currentElem);
		}

		function deactivate(row) {
			var $this = $(row);
			$this.removeClass(classes.currentElem);
		}

		function getElemWidths() {
			domElems.each(function() {
				widths.push($(this).outerWidth());
			});
		}

		function getMenuWidth() {
			menuWidth = domMenu.width();
		}

		function initMenu() {
			domMenu.removeClass(classes.menuNoJs);
			moreWidth = domMore.outerWidth() + 11; // + arrow image width
		}


		function setMenuLength() {
			var curWidth = moreWidth;

			domElems.each(function(i) {
				var $this = $(this);
				curWidth += $this.width();

				if (i + 1 == domElems.length) { return; }

				if (curWidth > menuWidth) {
					$this.hide();
					domMoreSubElems.eq(i).show();
				} else {
					$this.show();
					domMoreSubElems.eq(i).hide();
				}
			});
		}


		function setGlobalsWidths() {
			domGlobalWidthSubs
				.width(domHeader.width())
					.css({left: -domMenu.offset().left});
		}


		initMenu();
		getMenuWidth();
		getElemWidths();
		setMenuLength();
		setGlobalsWidths();

		domMenu.menuAim({
			activate: activate,
			deactivate: deactivate,
		});

		$(window).on('resize', function() {
			getMenuWidth();
			setMenuLength();
			setGlobalsWidths();
		});
	});
})(jQuery);
