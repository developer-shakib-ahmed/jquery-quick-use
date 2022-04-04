jQuery(document).ready(function() {

	jQuery(document).click(function(event) {
		var eL = event.target;
		var popup = jQuery('div#headerLogin');
		if( eL.className == 'register-pop' || eL.className == 'show_login' ){event.preventDefault();popup.toggle();}
		else if( popup.is(eL) || popup.has(eL).length > 0 ){return true;}
		else{popup.hide();}
	});
	
});