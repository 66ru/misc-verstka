(function ($) {
	$.fn.sticky = function(opts) {

		return this.each(function() {

			var $sticky = $(this),
				$parent = $sticky.parent(),
				$info = $('.js-info'),

				sticky = {},
				parent = {},

				paddingTop = 15,

				staticClass = 'js-sticky_is_s',
				absoluteClass = 'js-sticky_is_a',
				fixedClass = 'js-sticky_is_f';

			if ($parent.css('position') === 'static') {
				$parent.css({
					position: 'relative'
				});
			}

			sticky.top = $sticky.offset().top;
			sticky.left = $sticky.offset().left;
			sticky.width = $sticky.outerWidth();
			sticky.height = $sticky.outerHeight();
			sticky.relLeft = $sticky.position().left;

			parent.top = $parent.offset().top;
			parent.height = $parent.outerHeight();
			parent.bottom = parent.top + parent.height;

			// move( $(window).scrollTop() );

			$(window).on('scroll', function() {
				sticky.height = $sticky.outerHeight();
				move( $(window).scrollTop() );
				updateInfo();
			});

			// $sticky.on('click', function() {
			// 	sticky.height = $sticky.outerHeight();
			// 	move( $(window).scrollTop() );
			// 	updateInfo();
			// });

			function move(windowTop) {
				if (sticky.top - paddingTop < windowTop) {
					if ((windowTop + sticky.height + paddingTop) < parent.bottom) {
						if (!$sticky.hasClass(fixedClass)) {
							$sticky.addClass(fixedClass).removeClass(absoluteClass).removeClass(staticClass);
							$sticky.css({
								position: 'fixed',
								top: paddingTop,
								bottom: '',
								left: sticky.left,
								width: sticky.width
							});
						}
					} else {
						if (!$sticky.hasClass(absoluteClass)) {
							$sticky.addClass(absoluteClass).removeClass(fixedClass).removeClass(staticClass);
							$sticky.css({
								position: 'absolute',
								top: '',
								bottom: 0,
								left: sticky.relLeft,
								width: sticky.width
							});
							// alert('BANG');
						}
					}
				} else {
					if (!$sticky.hasClass(staticClass)) {
						$sticky.addClass(staticClass).removeClass(fixedClass).removeClass(absoluteClass);
						$sticky.css({
							position: 'static',
							top: '',
							bottom: '',
							left: '',
							width: ''
						});
					}
				}
			}

			function updateInfo() {
				$info.html('sticky.top: ' + Math.round(sticky.top) + '<br>' +
					'sticky.left: ' + Math.round(sticky.left) + '<br>' +
					'sticky.width: ' + Math.round(sticky.width) + '<br>' +
					'sticky.height: ' + Math.round(sticky.height) + '<br>' +
					'sticky.relLeft: ' + Math.round($sticky.position().left) + '<br>' +
					'parent.top: ' + Math.round(parent.top) + '<br>' +
					'parent.height: ' + Math.round(parent.height) + '<br>' +
					'parent.bottom: ' + Math.round(parent.bottom) + '<br>' +
					'window.scroll: ' + Math.round($(window).scrollTop())
				);
			}
		});
	};
})(jQuery);
