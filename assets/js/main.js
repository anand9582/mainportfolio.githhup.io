$(function() {
    
    "use strict";

      //Animate the scroll to yop
      $('.main-login').on('click', function(event) {
        alert("hello");
    });
    
     //===== Back to top
    
    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.back-to-top').fadeIn(200)
        } else{
            $('.back-to-top').fadeOut(200)
        }
    });
    
    
    //Animate the scroll to yop
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });


       
  
    //=====  services progress

    if($('.our-services-progress').length){
        $('.our-services-progress').appear(function(){
            Circles.create({
                id: 'circles-1',
                radius: 50,
                value: 95,
                maxValue: 100,
                width: 3,
                text: function(value){return value + '%';},
                colors: ['#f0f0f0', '#f14836'],
                duration: 1000,
                wrpClass: 'circles-wrp',
                textClass: 'circles-text',
                styleWrapper: true,
                styleText: true,
            });
        });
    }
    
    if($('.our-services-progress').length){
        $('.our-services-progress').appear(function(){
            Circles.create({
                id: 'circles-2',
                radius: 50,
                value: 85,
                maxValue: 100,
                width: 3,
                text: function(value){return value + '%';},
                colors: ['#f0f0f0', '#f14836'],
                duration: 1000,
                wrpClass: 'circles-wrp',
                textClass: 'circles-text',
                styleWrapper: true,
                styleText: true,
            });
        });
    }
    
    if($('.our-services-progress').length){
        $('.our-services-progress').appear(function(){
            Circles.create({
                id: 'circles-3',
                radius: 50,
                value: 75,
                maxValue: 100,
                width: 3,
                text: function(value){return value + '%';},
                colors: ['#f0f0f0', '#f14836'],
                duration: 1000,
                wrpClass: 'circles-wrp',
                textClass: 'circles-text',
                styleWrapper: true,
                styleText: true,
            });
        });
    }
    
    if($('.our-services-progress').length){
        $('.our-services-progress').appear(function(){
            Circles.create({
                id: 'circles-4',
                radius: 50,
                value: 70,
                maxValue: 100,
                width: 3,
                text: function(value){return value + '%';},
                colors: ['#f0f0f0', '#f14836'],
                duration: 1000,
                wrpClass: 'circles-wrp',
                textClass: 'circles-text',
                styleWrapper: true,
                styleText: true,
            });
        });
    }
   
    
       /*-------------------------------------
          Select 2 Init
      -------------------------------------*/
      
		if ($.fn.select2 !== undefined) {
			$('.select2').select2({
			  width: '100%'
			});
		  }
	  }
    
    //=====  WOW active
    
    new WOW().init();
    
    
    
});