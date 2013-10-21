(function ($) {
	$.fn.sticky = function(opts) {
		var options = $.extend({}, $.fn.sticky.defaults, opts);

		return this.each(function() {

			var $sticky = $(this),
				$parent = $sticky.parent(),

				stickyParams = {},
				parentParams = {};

			stickyParams.top = $sticky.offset().top;
			stickyParams.left = $sticky.offset().left;
			stickyParams.width = $sticky.outerWidth();
			stickyParams.height = $sticky.outerHeight();
			stickyParams.relLeft = $sticky.position().left;

			parentParams.top = $parent.offset().top;
			parentParams.height = $parent.outerHeight();
			parentParams.bottom = parentParams.top + parentParams.height;

			if (parentParams.height - 50 <= stickyParams.height) {
				$(window).on('scroll', function() {
					var windowTop = $(window).scrollTop();

					if (stickyParams.top - options.paddingTop < windowTop) {
						$sticky.css({
							position: 'fixed',
							top: options.paddingTop,
							left: stickyParams.left,
							width: stickyParams.width
						});
					} else {
						$sticky.css({
							position: 'static',
							width: ''
						});
					}
				});
			} else {
				$(window).on('scroll', function() {
					var windowTop = $(window).scrollTop();

					$parent.css({
						position: 'relative'
					});

					if (stickyParams.top - options.paddingTop < windowTop) {
						if ((windowTop + stickyParams.height + options.paddingTop) < parentParams.bottom) {
							$sticky.css({
								position: 'fixed',
								top: options.paddingTop,
								left: stickyParams.left,
								width: stickyParams.width
							});
						} else {
							$sticky.css({
								position: 'absolute',
								bottom: 0,
								top: '',
								left: stickyParams.relLeft,
								width: stickyParams.width
							});
						}

					} else {
						$sticky.css({
							position: 'static',
							width: ''
						});
					}
				});
			}
		});
	};

	$.fn.sticky.defaults = {
		paddingTop: 15
	}
})(jQuery);
