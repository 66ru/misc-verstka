$(document).ready(function() {
	$(".b-bank-exchange-table__row").on("click", function() {
		$(this).toggleClass("b-bank-exchange-table__row_opened");
		$(this).next(".b-bank-exchange-table__row_map").toggle();
	});
});

