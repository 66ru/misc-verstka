$(document).ready(function() {

	var $menu = $(".b-header-menu");

	$menu.menuAim({
		rowSelector: "> li",
		submenuSelector: '.js-header-menu__sub',
		activate: activateSubmenu,
		deactivate: deactivateSubmenu,
		submenuDirection: 'below'
	});



	function activateSubmenu(row) {
		var $row = $(row);
		$row.addClass("cur");

		$(".b-header-menu__item__sub").css("left", - $(".js-main-col").offset().left + "px");

		$(".b-header-menu__item__sub").width($(window).width() + "px");


		$row.find(".b-header-menu__item__sub").slideDown(150);
	}

	function deactivateSubmenu(row) {
		var $row = $(row);
		$row.removeClass("cur");
		$row.find(".b-header-menu__item__sub").hide();
	}



	$(".b-header-menu__item__sub").mouseout(function (e) {
		if (!$(e.relatedTarget).parents(".b-header-menu__item").length) {
			deactivateSubmenu($(this).parents(".b-header-menu__item"));
		};
	});

});
