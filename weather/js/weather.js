(function($) {
	var $weatherBlocks = $('.weather').not('.weather_primary'),
		$weatherExpandAll = $('.weather__expand-all-text');

	$weatherBlocks.each(function() {
		var $this = $(this);
			// $rowsToHide = $this.children('.weather__row').not('.weather__row_main');

		// $rowsToHide.hide();
		$this.on('click', function() {
			$this.toggleClass('weather_collapsed');
		});
	});

	$weatherExpandAll.on('click', function() {
		$weatherBlocks.removeClass('weather_collapsed');
	});

})(jQuery);
