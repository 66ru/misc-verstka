(function ($) {
	$(function() {
		$('.b-modal__trigger').each(function() {
			var $this = $(this),
				$modal = $this.closest('.b-modal'),
				$wrap = $modal.find('.b-modal__wrap'),
				$plate = $modal.find('.b-modal__plate'),
				$close = $modal.find('.b-modal__close');

			$this.on('click', function() {
				$wrap.fadeIn('fast');
			});

			$wrap.on('click', function() {
				$wrap.fadeOut('fast');
			});

			$plate.on('click', function(e) {
				e.stopPropagation();
			});

			$close.on('click', function() {
				$wrap.fadeOut('fast');
			});
		});
	});
})(jQuery);
