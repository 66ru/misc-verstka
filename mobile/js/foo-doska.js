(function() {
	$(function() {
		$('.m-doska-filter__head').on('click', function() {
			var $this = $(this);

			$this.parents('.m-doska-filter').toggleClass('m-doska-filter_expanded');
		});

		$('.m-doska-owner__toggle').on('click', function() {
			var $this = $(this);

			$this.toggleClass('m-doska-owner__link_activated');
			$this.siblings('.m-doska-owner__form').toggle();
		});
	});
})();
