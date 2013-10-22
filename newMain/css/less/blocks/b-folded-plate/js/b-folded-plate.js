(function ($) {
	$(function() {

		var text = '';

		$('.b-folded-plate__trigger').on('click', function(e) {
			var $this = $(this);

			text = $this.data('toggle-text');

			e.preventDefault();

			$this.parent().siblings('.b-folded-plate__hidden').toggle().parent().toggleClass('b-folded-plate_unfold_yes');
			$this.data('toggle-text', $this.html()).html(text);

		})
	})
})(jQuery);
