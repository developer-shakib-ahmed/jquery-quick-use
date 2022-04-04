jQuery(document).ready(function() {
	jQuery(function() {
	  jQuery('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = jQuery(this.hash);
	      target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        jQuery('html, body').animate({
	          scrollTop: target.offset().top-44
	        }, 1000);
	        jQuery('section.marginTop').removeClass('marginTop');
	        return false;
	      }
	    }
	  });

	  var hashLocation = window.location.hash;	  
	  if(hashLocation){
	  	jQuery('section'+hashLocation).addClass('sectionMarginTop');
	  }

	});

	//console.log(window.location.hash);

});




// // Requires SmoothScroll and jQuery
// $(document).ready(function() {

//     /* Take over default page anchor functionality */

//     // Store hash location
//     var hashLocation = false;
//     if (location.hash) {
//         hashLocation = window.location.hash;
//         setTimeout(function() {
//             hashLocation = window.location.hash;
//         }, 1); // Execute at two moments for browser compatibility reasons
//     }

//     console.log(window.location.hash);

//     // If we have a hash location do stuff
//     if (hashLocation) {

//         // delay .1s for browser compatibility reasons
//         setTimeout(function() {

//             // Check hashLocation suffix
//             if( hashLocation.indexOf('_hash') < 0 ) {
//                 hashLocation = hashLocation + "_hash";
//             };

//             // Scroll to target
//             $.smoothScroll({
//                 scrollTarget: hashLocation
//             });

//         }, 1000);

//     };
// });