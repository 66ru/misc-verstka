$(document).ready(function(){
	
	
	/*вставка элемента на страницу*/
	htmlBubleBox = '<div class="arrow_box" style="display: none;"><div class="arrow_box__pad">Можно платить по программе<br /><a href="">&laquo;Партнерское кредитование&raquo;</a></div></div>';
	$("#frame").before(htmlBubleBox);
	
	
	/*его перетаскивание при наведении на монетки*/
	$(".payMethodParnership").hover(
		function() {
			var leftCh = $(this).offset().left - 21;
			var topCh = $(this).offset().top - $(".arrow_box").height() - 19;
			$(".arrow_box").css({left: leftCh + "px", top: topCh + "px"}).show();
		},
		function() {
			$(".arrow_box").hide();
		}
	);
});