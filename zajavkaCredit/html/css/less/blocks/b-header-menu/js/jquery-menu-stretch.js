	var letterWidth = 8; //ширина строчной буквы шрифта в меню
	
	function skukogit() {
		alert("skukojit");
		var menuSize = jQuery(".b-header-menu > li").not(".hasSub").size() - 1; //количество пунктов
		element = jQuery(".b-header-menu li").eq(menuSize).html();
		jQuery(".b-header-menu li").eq(menuSize).remove();
		jQuery(".b-header-menu__submenu li").eq(0).before("<li>" + element + "</li>");
	}
	
	function raskukogit() {
		alert("razskukojit");
		/*var colSize = jQuery(".js-main-col").width();
		var logoSize = jQuery(".b-header-logo").width();			
		var menuWidth = jQuery(".js-menu-width").width();
		var menuSize = jQuery(".b-header-menu > li").not(".hasSub").size() - 1; //количество пунктов
		lastHiddenElementMenu = jQuery(".b-header-menu__submenu > li").eq(0);//элемент, который надо вернуть в меню 1 уровня
		var placeWidth = lastHiddenElementMenu.text().length * letterWidth + 20; //ширина вакантного места для возврата
		if ((logoSize + menuWidth + 45 + placeWidth) <= colSize) {//если слово влезает на вакантное место
			jQuery(".b-header-menu li").eq(menuSize).after("<li>" + lastHiddenElementMenu.html() + "</li>");
			lastHiddenElementMenu.remove();
		}*/
	}
	
	function checkMenu() {
		var colSize = jQuery(".js-main-col").width();
		var logoSize = jQuery(".b-header-logo").width();
		var menuSize = jQuery(".js-header-menu").width();			
		
		
		if ((logoSize + menuSize + 25) > colSize) {
			do {
				skukogit();
			} while (logoSize + menuSize + 45) > colSize);
		} else {
			//console.log("123");
			raskukogit();
		}
	}
	
jQuery(document).ready(function() {
	setTimeout(function() {
		checkMenu();
	},1000)
	
});	
	
	
jQuery(window).resize(function() {
	checkMenu();
}) 	