$(function() {
	$('.js-job-list__name').on('click', function(e) {
		var $this = $(this);

		e.preventDefault();

		$this.closest('.b-job-list__vacancy')
			.find('.js-job-list__toggle-view')
				.toggle();
	});
});