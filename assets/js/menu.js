// $(document).ready(function(){
//     $('.menu-link').hover(function(){
//         $('.bg-menu').show() 
//         $('.search').hide()
//     $('.menu-item').first().addClass("mobile-hover")
//     })  

// })
$(document).ready(function(){
$('.menu-link').mouseenter(function(
){
    if($(this).is(':hover')){
        $('.bg-menu').show()
        $('body').css('overflow', 'hidden');
        $('.menu-item').first().addClass("mobile-hover")
        $('.search').hide()
        $('.bg').hide()

    }
    

})

$('.menu-items').mouseenter(function(){
    if($(this).is(':hover')){
        $('.bg-menu').show() 
        $('.menu-item').first().addClass("mobile-hover")
    }
    

})

$('.menu').mouseleave(function(){
    if(!$(this).is(':hover')){
        $('.bg-menu').hide() 
    }
    

})
$('.menu-link').mouseleave(function(){
    if(!$(this).is(':hover')){
        $('.bg-menu').hide() 
    }
    

})






})
$(document).ready(function(){
    $('.menu-item').eq(1).hover(function(){
            $('.menu-item').first().removeClass("mobile-hover") ;
            $('.elec-item').show();
               $('.mobile-item').hide()
    
    })
})
$(document).ready(function(){
    $('.menu-item').eq(0).hover(function(){
     $('.mobile-item').show()
     $('.elec-item').hide();
    })
})

$(document).ready(function(){
    $('.menu-link').click(function(e){
e.preventDefault()
    })
})
// $(window).scroll(function(){
//     if($(this).scrollTop() >=3){
//         $('.bg-menu').hide()
//     }else{
// $('.menu-link').hover(function(){
//     $('.bg-menu').show()
// })    }
// })
// start nav down jq
$(document).ready(function(){
    $(window).resize(function(){
        if(window.matchMedia('(max-width:1024px)').matches){
$('nav').hide()
$('.nav-down-item').eq(1).click(function(e){
e.preventDefault()
$('.bg-menu').show()

})
        }else{
            $('nav').show()
        }
    })
    $(window).resize()
})


// end nav down jq