var $ = jQuery.noConflict();
var ww = $('#pHead').width();
	
$('#openMenu').click(function(s){ 
    s.preventDefault();
    $(this).find(".button").toggleClass('open');
    $(this).toggleClass("active");
    $('.menu').toggleClass('open');
});
$(document).ready(function() {
	'use strict';
	adjustMenu();
});

$(window).on('resize orientationchange', function() {
	'use strict';
	ww = $('#pHead').width();
	adjustMenu();
});

var adjustMenu = function() {
	'use strict';
	if (ww < 800) {
		$(".sideMore").css("display", "inline-block");
		if (!$(".sideMore").hasClass("active")) {
			$(".menu").removeClass("open");
		} else {
			$(".menu").addClass("open");
		}
	} 
	else if (ww >= 800) {
		$(".sideMore").hide();
		$(".menu").show();
	}
};