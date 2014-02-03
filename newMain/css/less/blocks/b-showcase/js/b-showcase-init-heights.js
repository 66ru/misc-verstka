;(function($) {
	var jqShowcases = $('.b-showcase');

	jqShowcases.each(function() {
		var $this = $(this),
			showcaseWidth = $this.width(),
			jqImage = $this.find('.b-showcase__img'),
			imageWidth = jqImage.attr('width'),
			imageHeight = jqImage.attr('height'),
			imageAspect = Math.floor(imageWidth / imageHeight),

			showcaseNewHeight = showcaseWidth / imageAspect;

		// Check special cases
		if ($this.hasClass('b-showcase_lim-height_460') && (showcaseNewHeight > 460)) {
			showcaseNewHeight = 460;
		} else if (imageHeight < showcaseNewHeight) {
			showcaseNewHeight = imageHeight;
		}

		$(document).on('ready', function() {
			$this.height(showcaseNewHeight);
		});

		$(window).on('load', function() {
			$this.height('');
		});
	});
})(jQuery);
