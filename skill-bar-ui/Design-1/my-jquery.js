// jQuery(document).ready(function(){

// 	var skillbar = jQuery('div.skillbar');

// 	skillbar.each(function() {

// 		var skillbar_percent = jQuery(this).find('span.skillbar_percent');

// 		jQuery(this).attr( 'data-percent', skillbar_percent.text());

// 		jQuery(this).find('span.skillbar_bar').animate({
// 			width: jQuery(this).attr('data-percent'),
// 		}, 3000);
// 	});

// });






jQuery(document).ready(function(){

	var skillbar = jQuery('div.skillbar');

	alert(skillbar.length);

	skillbar.each(function(i) {

		var skillbar_percent = jQuery(this).find('span.skillbar_percent');

		jQuery(this).find('span.skillbar_bar').animate( { width: skillbar_percent.text() }, 1000 );

	});

});


















