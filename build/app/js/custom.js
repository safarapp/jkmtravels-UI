

$(window).load(function() {
    $('.flexslider').flexslider({
      animation: "slide"
    });/*
    $('.bxslider').bxSlider({
        pager: false,
        mode: 'horizontal',
        controls: true,
        minSlides: 4,
        maxSlides: 4,
        slideWidth: 450,
        slideMargin: 30
    });*/

    if($(window).width() > 767){
        $('.bxslider').bxSlider({
            pager: false,
            minSlides: 4,            
            maxSlides: 4,
            slideWidth: 450,
            slideMargin: 30
        });
        
    } else if($(window).width() > 567){
        $('.bxslider').bxSlider({
            pager: false,
            minSlides: 3,
            maxSlides: 3,
            slideWidth: 280,
            slideMargin: 20
        });
    }else if($(window).width() > 479){
        $('.bxslider').bxSlider({
           pager: false,
            minSlides: 2,
            maxSlides: 2,
            slideWidth: 200,
            slideMargin: 10
        });
        
    }else if($(window).width() > 300){
        $('.bxslider').bxSlider({
            pager: false,
            minSlides: 1,
            maxSlides: 1,
            slideWidth: 280,
            slideMargin: 10
        });        
    }else{
        $('.bxslider').bxSlider({
            pager: false,
            mode: 'horizontal',
            controls: true,
            minSlides: 4,
            maxSlides: 4,
            slideWidth: 450,
            slideMargin: 10
        });        
    }    
});