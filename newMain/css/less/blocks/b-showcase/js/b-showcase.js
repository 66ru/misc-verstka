(function () {
var $ = jQuery;

$(function() {
	var $images = $('.b-showcase.js-center-image .b-showcase__img');

	$images.each(function() {
		var $this = $(this),
			imgHeight = $this.height(),
			containerHeight = $this.parents('.b-showcase__container').height();

		if (imgHeight > containerHeight) {
			$this.css({
				'margin-top': -(imgHeight - containerHeight) / 2
			});
		}
	});
});
})();
