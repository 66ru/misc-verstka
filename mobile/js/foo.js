(function() {
	$(function() {
		$('.m-new-comment').hide();
		$('.m-authorize__button').on('click', function() {
			$('.m-authorize').hide();
			$('.m-new-comment').show();
			return false;
		});
		$('.m-new-comment__close').on('click', function() {
			$('.m-new-comment').hide();
			$('.m-authorize').show();
			return false;
		});
	});

	$(function() {
		$('.m-comment, .m-authorize').hide();

		$('#show-comments').on('click', function(ev) {
			var $this = $(this);
			ev.preventDefault();
			$this.addClass('m-button_loading');

			setTimeout(function() {
				console.log('bang!');
				$this.removeClass('m-button_loading');
				$this.addClass('m-button_activated');
				$('.m-comment, .m-authorize').show();
			}, 2000);
		});
	});
})();
