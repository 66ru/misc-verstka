$(document).ready(function(){
	
	var div = $("<div>");
	div.addClass('tooltip arrow_box');
	div.attr("id", "globalTooltip");
	$("body").append(div);
	var globalTooltip = $("#globalTooltip");
	var isShown = false;

	$(".js-tooltip").mouseover(function() {
			var tooltipId = $(this).attr("tooltipId");
			var tooltip = $("#"+tooltipId);
			globalTooltip.html(tooltip.html());
			var leftCh = $(this).offset().left - 20;
			var topCh = $(this).offset().top - tooltip.height() - 8;
			globalTooltip.css({left: leftCh + "px", top: topCh + "px"}).show();
			isShown = true;
	});
	$(".js-tooltip").mouseout(function() {
			isShown = false;
			setTimeout(function() { if(!isShown) {globalTooltip.hide()} }, 500);
	});
	
	globalTooltip.mouseover(function() {
			globalTooltip.show();
			isShown = true;
	});
	globalTooltip.mouseout(function() {
			globalTooltip.hide();
			isShown = false;
	});
	/*вставка элемента на страницу*/
	/*
	htmlBubleBox = '<div class="arrow_box" style="display: none;"><div class="arrow_box__pad">Можно платить по программе<br /><a href="">&laquo;Партнерское кредитование&raquo;</a></div></div>';
	$("#frame").before(htmlBubleBox);
	*/
	
	/*его перетаскивание при наведении на монетки*/
	/*
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
*/
});