(function() {
var isMobile = {
	Android: function() {
		return navigator.userAgent.match(/Android/i) ? true : false;
	},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i) ? true : false;
	},
	iOS: function() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
	},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i) ? true : false;
	},
	any: function() {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
	}
};

if (!isMobile.any()) {
	jQuery(window).on('load', function () {
		$('.b-sticky-right-col__sticky').each(function() {

			var $window = $(window),
				$sticky = $(this),
				$parent = $sticky.parents('.b-sticky-right-col'),

				sticky = {},
				parent = {},
				state;

			getParams();
			repos($window.scrollTop());

			$window.on('scroll', function() {
				repos($window.scrollTop());
			});

			$window.on('resize', function() {
				makeStatic();
				getParams();
				repos($window.scrollTop());
			});

			$sticky.on('click', function() {
				sticky.height = $sticky.outerHeight();
				repos($window.scrollTop());
			});

			function isStickable() {
				if (sticky.height < parent.contentHeight) { return true; }
			}

			function getParams() {
				sticky.top = $sticky.offset().top;
				sticky.left = $sticky.offset().left;
				sticky.width = $sticky.outerWidth();
				sticky.height = $sticky.outerHeight();
				sticky.relLeft = $sticky.position().left;

				parent.top = $parent.offset().top;
				parent.height = $parent.outerHeight();
				parent.bottom = parent.top + parent.height;
				parent.contentHeight = $parent.height();
			}

			function makeStatic() {
				state = 'static';
				$sticky.removeClass('b-sticky-right-col_sticky_top');
				$sticky.css({
					top: '',
					left: '',
					width: ''
				});
			}

			function makeSticky() {
				state = 'sticky';
				$sticky.addClass('b-sticky-right-col_sticky_top');
				$sticky.css({
					top: '',
					left: sticky.left,
					width: sticky.width
				});
			}

			function makeStickyBottom() {
				state = 'parent-bottom';
				$sticky.removeClass('b-sticky-right-col_sticky_top');
				$sticky.css({
					top: parent.height - sticky.height + 15,
					left: sticky.relLeft,
					width: sticky.width
				});
			}

			function repos(windowScrollTop) {
				if ( (sticky.top - 15 < windowScrollTop) && isStickable() ) {
					if (windowScrollTop + sticky.height < parent.bottom) {
						if (state !== 'sticky') { makeSticky(); }
					} else if (state !== 'parent-bottom') { makeStickyBottom(); }
				} else if (state !== 'static') { makeStatic(); }
			}
		});
	});
}
})();
