(function($) {
	$(function() {
		console.log('bang1')
		var rubricsPopupClassName = 'rubrics-popup',
			rubricsPopupExpandedClassName = 'rubrics-popup_expand',
			rubricsPopupWrapClassName = 'rubrics-popup__name-wrap',

			$rubricsPopup = $('.' + rubricsPopupClassName),
			$rubricsPopupWrap = $('.' + rubricsPopupWrapClassName);

		$rubricsPopupWrap.on('click', function() {
			$rubricsPopup.toggleClass(rubricsPopupExpandedClassName);

			console.log('bang')
		});
	});
})(jQuery);
