$(function() {
	var $inputToFormat = $('.js-format-thousands');

	function formatNumber(s) {
		return s.split('')
					.reverse()
						.join('')
							.match(/.{1,3}/g)
								.join(' ')
									.split('')
										.reverse()
											.join('');
	}

	$inputToFormat.on('input', function() {
		var $this = $(this),
			val = $this.val().replace(/\D/g, '');

		if (val) {
			val = formatNumber(val);
		}

		$this.val(val);
	});
});
