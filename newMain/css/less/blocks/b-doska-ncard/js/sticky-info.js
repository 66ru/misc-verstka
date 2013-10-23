jQuery(window).on('load', function () {
	$('.b-doska-ncard__info').each(function() {

		var $window = $(window),
			$sticky = $(this),
			$parent = $sticky.parents('.b-doska-ncard'),
			$content = $parent.children('.b-doska-ncard__content'),

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
			parent.contentHeight = $content.outerHeight();
		}

		function makeStatic() {
			state = 'static';
			$sticky.removeClass('b-doska-ncard__info_sticky_top')
				.removeClass('b-doska-ncard__info_sticky_parent-bottom');
		}

		function makeSticky() {
			state = 'sticky';
			$sticky.removeClass('b-doska-ncard__info_sticky_parent-bottom')
				.addClass('b-doska-ncard__info_sticky_top');
			$sticky.css({left: sticky.left});
		}

		function makeAbsolute() {
			state = 'parent-bottom';
			$sticky.removeClass('b-doska-ncard__info_sticky_top')
				.addClass('b-doska-ncard__info_sticky_parent-bottom');
			$sticky.css({left: sticky.relLeft});
		}

		function repos(windowScrollTop) {
			if ( (sticky.top < windowScrollTop) && isStickable() ) {
				if (windowScrollTop + sticky.height < parent.bottom) {
					if (state !== 'sticky') { makeSticky(); }
				} else if (state !== 'parent-bottom') { makeAbsolute(); }
			} else if (state !== 'static') { makeStatic(); }
		}
	});
});
