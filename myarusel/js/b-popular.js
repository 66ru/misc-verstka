;(function($){
	$(function(){
	
		
	
		var elementWidth;
		var wrapperWidth;
		var items_wrapper = $('.b-popular__items');
		var items_vertical_wrapper = $(".horizontal-goods");
		var vStep = 131;
		var position = 0; // Базовая позиция = 0, но можно задать
		
		
		

		function resize() {
			wrapperWidth = $('.b-popular__items-wrapper').innerWidth();
			elementWidth = wrapperWidth / window.onPage;
			$('.b-popular__items-item').width(elementWidth);
			items_wrapper.animate({'margin-left': "-" + position * elementWidth},0);
		}
		resize();
		$(window).resize(resize);

		$("ul.b-popular__items img").lazyload({
			threshold : elementWidth,
			event: "scroll:myarusel"
		});

		var prev_control = $('.b-popular__control_prev');
		var next_control = $('.b-popular__control_next');

		var prev_vertical_control = $(".horizontal-goods-frame__control-top");
		var next_vertical_control = $(".horizontal-goods-frame__control-bottom");

		prev_control.hover(function(){$(this).addClass('b-popular__control_prev_hover')}, function(){$(this).removeClass('b-popular__control_prev_hover')});
		next_control.hover(function(){$(this).addClass('b-popular__control_next_hover')}, function(){$(this).removeClass('b-popular__control_next_hover')});
		
		prev_vertical_control.hover(function(){$(this).addClass('horizontal-goods-frame__control-top_hover')}, function(){$(this).removeClass('horizontal-goods-frame__control-top_hover')});
		next_vertical_control.hover(function(){$(this).addClass('horizontal-goods-frame__control-bottom_hover')}, function(){$(this).removeClass('horizontal-goods-frame__control-bottom_hover')});


		var total_items = $('.b-popular__items-item').size();
		var total_vertical_items = $(".horizontal-goods li").size();

		function movePopular(to){
			if (to != 0) {
				position += to;
				items_wrapper.animate({'margin-left': "-" + position * elementWidth}, 200, function () {
					$(document).trigger('scroll:myarusel');
				});
			}
			
			(position == 0 ? prev_control.hide() : prev_control.show());
			(position >= total_items - window.onPage ?  next_control.hide() : next_control.show());
		}
		
		function moveVerticalPopular(to){
			if (to != 0) {
				position += to;
				items_vertical_wrapper.animate({'top': "-" + position * vStep}, 200, function () {
					$(document).trigger('scroll:myarusel');
				});
			}

			(position == 0 ? prev_vertical_control.hide() : prev_vertical_control.show());
			(position >= total_vertical_items - window.onPage + 1 ?  next_vertical_control.hide() : next_vertical_control.show());
		}


		prev_control.click(function(){
			movePopular(-1);
		});
		next_control.click(function(){
			movePopular(1);
		});
		
		prev_vertical_control.click(function(){
			moveVerticalPopular(-1);
		});
		next_vertical_control.click(function(){
			moveVerticalPopular(1);
		});

		moveVerticalPopular(0);
		movePopular(0);
	});
})(jQuery);