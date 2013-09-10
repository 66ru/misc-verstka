$(document).ready(function() {			
	
	
	
	var searchBlockElement = ".b-header-search";
	var searchBlock = $(".b-header-search");
	var searchBlockText = $(".b-header-search__text");
	var searchBlockSubm = $(".b-header-search__subm");
	var searchBlockClassActive = "b-header-search_state_active";
	var searchBlockLabel = "Поиск";


	searchBlockText.on("click", function(e) {
		$(this).parents(searchBlockElement).animate({width: "80%"}, 100);
		
		/*$(this).parents(searchBlockElement).css({background: "#fff"});
		$(this).css({color: "#000"});*/
		

		if (searchBlockText.val() == searchBlockLabel) {
			$(this).val("");
		}				
		
		var sClick = true;
		
		$(document).bind('click.myEvent', function(e) {
			if (!sClick && $(e.target).closest(searchBlockElement).length == 0) {
			
				searchBlock.animate({width: "60%"}, 100);
				/*searchBlock.css({background: "#afc971"});
				searchBlockText.css({color: "#fff"});*/
				
				if (searchBlockText.val() == searchBlockLabel) {
					searchBlockText.val(searchBlockLabel);					
				}
				
				searchBlock.removeClass(searchBlockClassActive);
				
				
				$(document).unbind("click.myEvent");
			}
			sClick = false;
		})
		
		e.preventDefault();
		
		searchBlock.addClass(searchBlockClassActive);
		
		
	});
});