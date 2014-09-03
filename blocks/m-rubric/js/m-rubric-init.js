$(function() {
	$('.m-rubric').each(function() {
		var $this = $(this),
			$name = $this.children('.m-rubric__name');

		if ($name.width() > $this.width() - 50) {
			$this.addClass('m-rubric_more-content');
		}
	})
});
