$( function() {

	var locations = [
		"Nashville, USA, 00000",
		"Michigan, USA, 11111",
	];

	$( "#loc" ).autocomplete({
		source: locations
	});

	$(".category-list").on("click", ".placeholder", function() {
		$(this).closest(".category-list").children('li:not(.placeholder)').toggle();
	});

	var allOptions = $(".category-list").children('li:not(.placeholder)');
	$(".category-list").on("click", "li:not(.placeholder)", function() {
		allOptions.removeClass('selected');
		$(this).addClass('selected');
		$(".category-list").children('.placeholder').html($(this).html());
		allOptions.toggle();
	});

});