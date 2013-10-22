$(document).ready(function() {
	
	$(".b-more__elem").on("click", function() {
		
		
		var curClass = "b-more__elem_cur";
		var elemClass = "b-more__elem";
		
		$(this).parent().find("." + elemClass).removeClass(curClass);
		$(this).addClass(curClass);
		
		var thisTitle = $(this).find("a").html();
		var thisHref = $(this).find("a").attr("href");
		
		$(this).parents(".b-more").find(".b-more__visible").attr("href", thisHref);
		$(this).parents(".b-more").find(".b-more__visible").html(thisTitle);
		
	});
	
	
	
});