$(function() {
	var $creditInput = $('.b-credit-widget__input_control-input');

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

	$creditInput.on('input', function() {
		var $this = $(this),
			val = $this.val().replace(/\D/g, '');

		if (val) {
			val = formatNumber(val);
		}

		$this.val(val);
	});
});