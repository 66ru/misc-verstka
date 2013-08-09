$(function() {
	var $displayToggle = $('.js-credit-form__display-toggle-link'),
		$extra = $('.js-credit-form__display-toggle');

	$displayToggle.on('click', function() {
		$extra.toggleClass('js-hide');
		if ($displayToggle.text() == 'Расширенный подбор') {
			$displayToggle.text('Скрыть расширенный подбор');
		} else {
			$displayToggle.text('Расширенный подбор');
		}
	});
});