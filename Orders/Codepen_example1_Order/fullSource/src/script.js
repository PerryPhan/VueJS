	jQuery('.page-slider').flexslider({
		selector: '.slides > .slide', 
        animation: 'slide',
		directionNav: true,
		prevText: '<i class="fa fa-chevron-left"></i>',
		nextText: '<i class="fa fa-chevron-right"></i>',
		smoothHeight: false,
		controlNav: true,
		slideshow:false,
		controlsContainer: '.page-slider-nav',
		manualControls: 'ul.menu > li.nav-button',
      });


jQuery('a.alt-btn').click(function(){
     $('.page-slider').flexslider('next');
});

jQuery("a#p1").click(function(){
 jQuery("body").css("background-image","url(https://static.wixstatic.com/media/a64726_320040b8bc694f8fa386a4fd04e8f0ce~mv2_d_1709_2367_s_2.jpg/v1/fill/w_539,h_747,al_c,q_90,usm_0.66_1.00_0.01/a64726_320040b8bc694f8fa386a4fd04e8f0ce~mv2_d_1709_2367_s_2.webp)"); 
  
  
  
  jQuery("body").addClass("p1");
  
});


jQuery("a#p2").click(function(){
 jQuery("body").css("background-image","url(https://static.wixstatic.com/media/a64726_fc48e4a7431b485ca486c0621fd3ec4e~mv2_d_2400_3000_s_4_2.jpg/v1/fill/w_598,h_747,al_c,q_90,usm_0.66_1.00_0.01/a64726_fc48e4a7431b485ca486c0621fd3ec4e~mv2_d_2400_3000_s_4_2.webp)"); 
  
  
  
  jQuery("body").addClass("p2");
  
});



jQuery("a#p3").click(function(){
 jQuery("body").css("background-image","url(https://static.wixstatic.com/media/a64726_b3c52835aa40473ba908cabfb89012be~mv2_d_2400_3000_s_4_2.jpg/v1/fill/w_598,h_747,al_c,q_90,usm_0.66_1.00_0.01/a64726_b3c52835aa40473ba908cabfb89012be~mv2_d_2400_3000_s_4_2.webp)"); 
  
  
  
  jQuery("body").addClass("p3");
  
});


jQuery("a#p4").click(function(){
 jQuery("body").css("background-image","url(https://static.wixstatic.com/media/a64726_4b3a35a859ab44b0ace7147bbdfd2b5c~mv2_d_1600_2000_s_2.jpg/v1/fill/w_598,h_747,al_c,q_90,usm_0.66_1.00_0.01/a64726_4b3a35a859ab44b0ace7147bbdfd2b5c~mv2_d_1600_2000_s_2.webp)"); 
  
  
  
  jQuery("body").addClass("p4");
  
});

jQuery("#close, .menu li a").click(function(){
  if ( $("body").hasClass("p1") ){
    $("body").removeClass("p1");
  }
   if ( $("body").hasClass("p2") ){
    $("body").removeClass("p2");
  }
    if ( $("body").hasClass("p3") ){
    $("body").removeClass("p3");
  }
    if ( $("body").hasClass("p4") ){
    $("body").removeClass("p4");
  }
  
  jQuery("body").css("background","none");
  
});