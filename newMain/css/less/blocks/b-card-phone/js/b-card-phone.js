(function ($) {
	$(function() {
		var $phones = $('.b-card-phone');

		$phones.each(function() {
			var $this = $(this),
				$balloon = $this.children('.b-card-phone__balloon'),
				$phone = $this.children('.b-card-phone__phone'),
				$btn = $this.children('.b-nbtn'),
				phone = $phone.data('phone');

			if ($btn.length > 0) {
				$btn.on('click', function() {
					$btn.hide();
					$balloon.show();
					$phone.html(phone);
				});
			} else {
				$balloon.show();
			}
		});
	});
})(jQuery);
