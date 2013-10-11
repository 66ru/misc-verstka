$(document).ready(function() {
	$(".b-bank-exchange-table__row").not(".b-bank-exchange-table__row_innactive").on("click", function() {
		$(this).toggleClass("b-bank-exchange-table__row_opened");
		$(this).next(".b-bank-exchange-table__row_map").toggle();
	});
});