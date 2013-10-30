(function ($) {
	$(function() {
		$('.b-realty-map__toggle').each(function() {
			var $this = $(this),
				$map = $this.parents('.b-realty-map')
					.children('.b-realty-map__map'),

				foldText;

			$this.on('click', function() {
				$map.toggle();
				$this.toggleClass('b-realty-map__toggle_unfolded_yes');

				foldText = $this.html();
				$this.html($this.data('fold-text'));
				$this.data('fold-text', foldText);
			});
		});
	});
})(jQuery);
