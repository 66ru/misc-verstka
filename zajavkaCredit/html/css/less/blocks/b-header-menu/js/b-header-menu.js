	var letterWidth = 8; //ширина строчной буквы шрифта в меню
	
	
	countVisibleItem = 5;
	
	function skukogit() {
		var menuSize = jQuery(".b-header-menu__item").not(".b-header-menu__item_hidemenu_yes").size() - 1;
		elementText = jQuery(".b-header-menu__item").eq(menuSize).find(".b-header-menu__item__link").text();
		elementLink = jQuery(".b-header-menu__item").eq(menuSize).find(".b-header-menu__item__link").attr("href");
		newElementSubmenu = '<li class="b-header-menu__hidemenu__item"><a class="b-header-menu__hidemenu__item__link" href="'+ elementLink + '">'+ elementText +'</a></li>';

		jQuery(".b-header-menu__item").eq(menuSize).remove();
		jQuery(".b-header-menu__hidemenu").prepend(newElementSubmenu);
	}
	
	function raskukogit() {
		var menuSize = jQuery(".b-header-menu__item").not(".b-header-menu__item_hidemenu_yes").size() - 1;
		elementText = jQuery(".b-header-menu__hidemenu__item").eq(0).find(".b-header-menu__hidemenu__item__link").text();
		elementLink = jQuery(".b-header-menu__hidemenu__item").eq(0).find(".b-header-menu__hidemenu__item__link").attr("href");
		newElementSubmenu = '<li class="b-header-menu__item"><a class="b-header-menu__item__link" href="'+ elementLink + '">'+ elementText +'</a></li>';
		
		jQuery(".b-header-menu__hidemenu__item").eq(0).remove();
		jQuery(".b-header-menu__item").eq(menuSize).after(newElementSubmenu);
	}
	
	
	
	
	
	
	
	
	
	
	function checkMenu() {
		var colWidth = jQuery(".js-main-col").width();
		var logoSize = jQuery(".b-header-logo").width();
		var menuWidth = jQuery(".js-header-menu").width();			
		
		
		console.log(jQuery(".b-header-logo").width() + " + " + jQuery(".js-header-menu").width() + " + 25 > " + jQuery(".js-main-col").width());
		
		
		/*
		
		
		if ((logoSize + menuWidth + 25) > jQuery(".js-main-col").width()) {
		
			do {
				skukogit();
			} while ((jQuery(".b-header-logo").width() + jQuery(".js-header-menu").width() + 45) > jQuery(".js-main-col").width());
			
		} else {
			
			if ((jQuery(".b-header-logo").width() + jQuery(".js-header-menu").width() + 45) > jQuery(".js-main-col").width()) {
				raskukogit();
			}
			
			
		
		}*/
		

	}
	
jQuery(document).ready(function() {
	checkMenu();
});	
	
	
jQuery(window).resize(function() {
	checkMenu();
}) 	