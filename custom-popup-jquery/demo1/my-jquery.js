jQuery(document).ready(function(){

	var popUp = jQuery('section#pop-up');
	var cross = jQuery('span.cross');

	// cross.click(function() {
	// 	popUp.fadeOut();
	// });

	// popUp.click(function( element ) {

	// 	var targetedClass = element.target.className;
	// 	var targetedID    = element.target.id;

	// 	alert('Your target is: '+target);
	// 	popUp.fadeOut();

	// 	if( targetedID == 'pop-up' || targetedClass == 'cross'){
	// 		popUp.fadeOut();
	// 	}else{
	// 		// alert('Your target is not match');
	// 	}

	// });

	// setTimeout(function(){
	// 	popUp.fadeIn();
	// },1000);


	// alert();

	// promt();

	// confirm();


});









jQuery(document).ready(function() {
	var a = jQuery('section#pop-up'),
		b = jQuery('span.cross');


		setTimeout(function(){
			a.fadeIn();
		},1000);


		a.click(function( e ){
			var c = e.target.id,
				d = e.target.className;

				if( c == 'pop-up' || d == 'cross'){
					a.fadeOut();
				}
		});
});