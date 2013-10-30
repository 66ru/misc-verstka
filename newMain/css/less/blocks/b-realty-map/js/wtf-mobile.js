(function($) {
var isMobile = {
	Android: function() {
		return navigator.userAgent.match(/Android/i) ? true : false;
	},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i) ? true : false;
	},
	iOS: function() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
	},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i) ? true : false;
	},
	any: function() {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
	}
};

if (isMobile.any()) {
	$(function() {
		$('.b-realty-map__wtf').each(function() {
				var $this = $(this),
					$parent = $this.closest('.b-realty-map'),
					$more = $parent.find('.b-realty-map__more');


				$this.on('click', function() {
					$more.toggle();
				});

				$more.on('click', function() {
					$more.fadeOut();
				});
			});
		});
}
})(jQuery);
