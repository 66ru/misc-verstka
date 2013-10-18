(function ($) {
	$(function() {
		$('.b-card-phone .b-nbtn').on('click', function() {
			var $this = $(this),
				$balloon = $this.siblings('.b-card-phone__balloon'),
				$phone = $this.siblings('.b-card-phone__phone'),
				phone = $phone.data('phone');

			$this.hide();
			$balloon.css( {display: 'inline-block'} );
			$phone.html(phone);
		});
	});
})(jQuery);
