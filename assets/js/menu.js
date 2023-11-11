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
        $('.menu-item').first().addClass("mobile-hover")
        $('.search').hide()
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