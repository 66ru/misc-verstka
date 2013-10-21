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

		
		/*var massItem = [];
		var parentTree = $(this).parents(".b-more__popup");
		var i = 0;
		
		parentTree.find(".b-more__elem > a").each(function() {
			massItem[i] = "[" + $(this).html() + "," + $(this).attr("href") + "]";
			i++;
		});
		
		var curItemIndex = $(this).index();
		
		var outText = $(this).parent().find(".b-more__elem").eq(curItemIndex).find("a").html();
		var outUrl = $(this).parent().find(".b-more__elem").eq(curItemIndex).find("a").attr("href");*/
		//alert(curItemIndex);
		
		
	});
	
	
	
});