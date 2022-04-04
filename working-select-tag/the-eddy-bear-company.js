jQuery(document).ready(function(){

  jQuery("div.header_bottom nav.right_side ul li:last-child a").removeAttr("href");
  
  jQuery(".woocommerce input").removeAttr("placeholder");

  jQuery("div.header_bottom nav ul li a span #search").click(function(){

    jQuery(this).css("color", "#CFDD3D");
    jQuery("header form.qode_search_form_3").slideToggle();

  });

  jQuery("div.qode_search_close a .qode_icon_font_awesome").click(function(){

     jQuery("header form.qode_search_form_3").slideToggle();

  });

jQuery("p#billing_bear_select_field").append("<div></div><div></div>");

jQuery("p#billing_bear_select_field> div:nth-child(odd)").addClass("select_bear_image image_one");

jQuery("p#billing_bear_select_field> div:nth-child(even)").addClass("select_bear_image image_two");



jQuery('#billing_bear_select').change(function(){
 jQuery('.select_bear_image[class*="image_"]').css('opacity', '.3');
 jQuery(jQuery('.select_bear_image[class*="image_"]')[jQuery(this)[0].selectedIndex]).css('opacity', '1');
});




});