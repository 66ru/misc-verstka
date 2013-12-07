(function($) {
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
	var $window = $(window);

	$window.on('load', function () {
		var names = {
			content: 'sticky__content',
			parent: 'sticky__parent',
			after: 'sticky__after',
			sticky: 'sticky__content_sticky',
			bottom: 'sticky__content_bottom',
		};

		$('.' + names.content).each(function() {
			var $sticky = $(this),
				$parent = $sticky.parents('.' + names.parent),
				$after = $('.' + names.after),
				sticky = {}, parent = {}, state;

			if (!$after.length) $after = null;
			console.log($after);

			updateParams();
			reformPosition($window.scrollTop());

			$window.on('scroll', function() {
				reformPosition($window.scrollTop());
			});

			// $window.on('resize', function() {
			// 	makeRel();
			// 	updateParams();
			// 	reformPosition($window.scrollTop());
			// });

			// $sticky.on('click', function() {
			// 	sticky.height = $sticky.outerHeight();
			// 	reformPosition($window.scrollTop());
			// });

			// function isStickable() {
			// 	if (sticky.height < parent.contentHeight) { return true; }
			// }

			function updateParams() {
				parent.top = $parent.offset().top;
				parent.height = $parent.outerHeight();
				parent.bottom = parent.top + parent.height;

				if ($after) {
					sticky.top = $after.offset().top + $after.outerHeight();
				} else {
					sticky.top = $sticky.offset().top;
				}
				sticky.left = $sticky.offset().left;
				sticky.width = $sticky.outerWidth();
				sticky.height = $sticky.outerHeight();
				sticky.posLeft = sticky.left - $parent.offset().left;

				// console.log(parent.top, parent.height, parent.bottom, '',
				// 	sticky.top, sticky.left, sticky.width, sticky.height, sticky.posLeft);
			}

			function reformPosition(windowScrollTop) {
				if ( (sticky.top < windowScrollTop) /*&& isStickable()*/ ) {
					if (windowScrollTop + sticky.height < parent.bottom) {
						if (state !== 'sticky') { makeSticky(); }
					} else if (state !== 'bottom') { makeBot(); }
				} else if (state !== 'relative') { makeRel(); }
			}

			function makeRel() {
				state = 'relative';
				// console.log('relative');
				$sticky.removeClass(names.sticky)
					.removeClass(names.bottom)
						.css({
							left: 0,
							width: null
						});
			}

			function makeSticky() {
				state = 'sticky';
				// console.log('sticky');
				$sticky.removeClass(names.bottom)
					.addClass(names.sticky)
						.css({
							left: sticky.left,
							width: sticky.width
						});
			}

			function makeBot() {
				state = 'bottom';
				console.log('bottom');
				// $sticky.removeClass('b-doska-ncard__info_sticky_top')
				// 	.addClass('b-doska-ncard__info_sticky_parent-bottom');
				// $sticky.css({left: sticky.relLeft});
			}
		});
	});
}
})(jQuery);
