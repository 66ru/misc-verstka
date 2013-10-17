$(function(){
	var $sticky = $('.js-sticky'),
		$parent = $('.js-sticky-parent'),

		stickyTop = $sticky.offset().top,
		stickyLeft = $sticky.offset().left,
		stickyWidth = $sticky.outerWidth(),
		stickyHeight = $sticky.outerHeight(),
		stickyRelLeft = $sticky.position().left,

		parentTop = $parent.offset().top,
		parentHeight = $parent.outerHeight(),
		parentBottom = parentTop + parentHeight;

	$parent.css({
		position: 'relative'
	});

	$(window).scroll(function() {

		var windowTop = $(window).scrollTop();

		if (stickyTop < windowTop) {
			if ((windowTop + stickyHeight) < parentBottom) {
				$('.js-sticky').css({
					position: 'fixed',
					top: 0,
					left: stickyLeft,
					width: stickyWidth
				});
			} else {
				$('.js-sticky').css({
					position: 'absolute',
					bottom: 0,
					top: '',
					left: stickyRelLeft,
					width: stickyWidth
				});
			}

		} else {
			$('.js-sticky').css({
				position: 'static',
				width: ''
			});
		}

		// console.log(
		// 	windowTop,
		// 	stickyTop,
		// 	stickyHeight,
		// 	parentBottom
		// );
	});
});
