
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

// start nav down jq
$(document).ready(function(){
    $(window).resize(function(){
        if(window.matchMedia('(max-width:1024px)').matches){
$('nav>div:first').hide()
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
$(document).ready(function(){
    $(window).resize(function(){
        if(window.matchMedia('(max-width:1024px)').matches){
$('.brands>a').not('.brands-title').css("display","none")
        }else{
            $('.brands>a').show()
        }
    })
    $(window).resize()
})


// end nav down jq