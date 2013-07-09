$(document).ready(function() {

	/*класс рукоятки при закрытом подробнее */
	var objLinkToggleSearchOpen = ".js-toggle-search__open";
	/*класс рукоятки при открытом подробнее */
	var objLinkToggleSearchClose = ".js-toggle-search__close";
	/*единый класс рукоятки*/
	var classHandle = "js-toggle-search-handle";
	/*класс содержимого подробнее*/
	var toggleClass = ".js-toggle-search__content";
	
	/*что б не нагромождать дом, добавим класс рукоятки при загрузке*/
	$(objLinkToggleSearchOpen).addClass(classHandle);
	$(objLinkToggleSearchClose).addClass(classHandle);
	
	var objLinkToggleSearchMod = "." + classHandle;
	
	/**/
	var open = false;

	$(document).delegate(objLinkToggleSearchMod, "click", function() {
		if (!open) {
			$(this).show();
			$(this).closest(".b-doska-form-filter").find(objLinkToggleSearchClose).show();
			$(this).closest(objLinkToggleSearchOpen).hide();
			open = true;
		} else {
			
			$(this).hide();
			$(this).closest(".b-doska-form-filter").find(objLinkToggleSearchOpen).show();
			open = false;
		}
		
		$(this).closest(".b-doska-form-filter").find(toggleClass).toggle();
		
		
		
		return false;
		
	});	
});