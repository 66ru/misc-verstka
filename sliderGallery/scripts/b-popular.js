;(function($){
	$(function(){
		$('.b-popular__control_prev').hover(function(){$(this).addClass('b-popular__control_prev_hover')}, function(){$(this).removeClass('b-popular__control_prev_hover')});
		$('.b-popular__control_next').hover(function(){$(this).addClass('b-popular__control_next_hover')}, function(){$(this).removeClass('b-popular__control_next_hover')});
		
		var items_wrapper = $('.b-popular__items');
		var position = 0; // Базовая позиция = 0, но можно задать
		
		var prev_control = $('.b-popular__control_prev');
		var next_control = $('.b-popular__control_next');
		
		var total_items = $('.b-popular__items-item').size();
		
		function movePopular(to){
			if (to != 0) {
				position += to;
				
				items_wrapper.animate({'margin-left': "-" + position * 16.85 + "%"}, 200);
			}
			
			(position == 0 ? prev_control.hide() : prev_control.show());
			(position >= total_items - 6 ?  next_control.hide() : next_control.show());
		}
		
		prev_control.click(function(){
			movePopular(-1);
		})
		next_control.click(function(){
			movePopular(1);
		})
		
		movePopular(0);
	});
})(jQuery);