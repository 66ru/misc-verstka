$(document).ready(function() {			
	$(".b-header-search__text").on("click", function(e) {
		$(this).parents(".b-header-search").animate({width: "80%"}, 100);
		$(this).parents(".b-header-search").css({background: "#fff"});
		$(this).css({color: "#000"});
		
		
		
		
		
		if ($(".b-header-search__text").val() == "Поиск") {
			$(this).val("");
		}				
		
		
		
		var sClick = true;
		
		$(document).bind('click.myEvent', function(e) {
			if (!sClick && $(e.target).closest(".b-header-search").length == 0) {
				$(".b-header-search").animate({width: "60%"}, 100);
				$(".b-header-search").css({background: "#afc971"});
				$(".b-header-search__text").css({color: "#fff"});
				
				if ($(".b-header-search__text").val() == "Поиск") {
					$(".b-header-search__text").val("Поиск");					
				}
				
				$(".b-header-search__subm").removeClass("b-header-search__subm_state_active");
				
				
				console.log("раскликнули");
				$(document).unbind("click.myEvent");
			}
			sClick = false;
		})
		
		e.preventDefault();
		
		$(".b-header-search__subm").addClass("b-header-search__subm_state_active");
		
		
	});
});