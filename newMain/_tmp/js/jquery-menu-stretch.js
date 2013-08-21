	var letterWidth = 8; //ширина строчной буквы шрифта в меню
	
	function skukogit() {
		var menuSize = $(".b-header-menu > li").not(".hasSub").size() - 1; //количество пунктов
		element = $(".b-header-menu li").eq(menuSize).html();
		$(".b-header-menu li").eq(menuSize).remove();
		$(".b-header-menu__submenu li").eq(0).before("<li>" + element + "</li>");
	}
	
	function raskukogit() {
		var colSize = $(".js-main-col").width();
		var logoSize = $(".b-header-logo").width();			
		var menuWidth = $(".js-menu-width").width();
		var menuSize = $(".b-header-menu > li").not(".hasSub").size() - 1; //количество пунктов
		lastHiddenElementMenu = $(".b-header-menu__submenu > li").eq(0);//элемент, который надо вернуть в меню 1 уровня
		var placeWidth = lastHiddenElementMenu.text().length * letterWidth + 20; //ширина вакантного места для возврата
		if ((logoSize + menuWidth + 45 + placeWidth) <= colSize) {//если слово влезает на вакантное место
			$(".b-header-menu li").eq(menuSize).after("<li>" + lastHiddenElementMenu.html() + "</li>");
			lastHiddenElementMenu.remove();
		}
	}
	
	function checkMenu() {
		var colSize = $(".js-main-col").width();
		var logoSize = $(".b-header-logo").width();
		var menuSize = $(".js-menu-width").width();			
		if (($(".b-header-logo").width() + $(".js-menu-width").width() + 25) > $(".js-main-col").width()) {
			do {
				skukogit();
			} while (($(".b-header-logo").width() + $(".js-menu-width").width() + 45) > $(".js-main-col").width());
		} else {
			raskukogit();
		}
	}
	
$(document).ready(function() {
	setTimeout(function() {
		checkMenu();
	},1000)
	
});	
	
	
$(window).resize(function() {
	checkMenu();
}) 	