var fontValue = "sans";
var themeValue= "white";

$(document).ready(function() {
	var text_value = localStorage.getItem('value');

	$('textarea').val(text_value);
	
	$('textarea').on('keyup', function(event) {
		var value = $(this).val();
		localStorage.setItem("value", value);
	});

	if (localStorage.getItem('font') == "serif") {$('body').addClass('is-serif');}
	if (localStorage.getItem('theme') == "dark") {$('body').addClass('is-dark');}
	
});


$('.themeControl').click(function(e){
	e.preventDefault();
	$('body').toggleClass('is-dark');

	if ($('body').hasClass('is-dark')) {
		themeValue = "dark";
	} else {
		themeValue = "white";
	}
	
	localStorage.setItem("theme", themeValue);
});

$('.fontControl').click(function(e){
	e.preventDefault();
	
	$('body').toggleClass('is-serif');
	
	if ($('body').hasClass('is-serif')) {
		fontValue = "serif";
	} else {
		fontValue = "sans";
	}
	
	localStorage.setItem("font", fontValue);
});