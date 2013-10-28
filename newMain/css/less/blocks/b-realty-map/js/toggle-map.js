(function ($) {
	$(function() {
		$('.b-realty-map__toggle').each(function() {
			var $this = $(this),
				$map = $this.parents('.b-realty-map')
					.children('.b-realty-map__map'),

				foldText = $this.data('fold-text');

			$this.on('click', function() {
				$map.toggle();

				$this.data('fold-text', $this.html());
				$this.html(foldText)

				console.log(foldText, $this.data('fold-text'));
			});
		});
	});
})(jQuery);
