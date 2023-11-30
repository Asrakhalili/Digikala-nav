
// $(document).ready(function(){
// $('.menu-link').mouseenter(function(
// ){
//     if($(this).is(':hover')){
//         $('.bg-menu').show()
//         $('body').css('overflow', 'hidden');
//         $('.menu-item').first().addClass("mobile-hover")
//         $('.search').hide()
//         $('.bg').hide()

//     }
    
// })

// $('.menu-items').mouseenter(function(){
//     if($(this).is(':hover')){
//         $('.bg-menu').show() 
//         $('.menu-item').first().addClass("mobile-hover")
//     }
    

// })

// $('.menu').mouseleave(function(){
//     if(!$(this).is(':hover')){
//         $('.bg-menu').hide() 
//     }
    

// })
// $('.menu-link').mouseleave(function(){
//     if(!$(this).is(':hover')){
//         $('.bg-menu').hide() 
//     }
    

// })






// })
// $(document).ready(function(){
//     $('.menu-item').eq(1).hover(function(){
//             $('.menu-item').first().removeClass("mobile-hover") ;
//             $('.elec-item').show();
//                $('.mobile-item').hide()
    
//     })
// })
// $(document).ready(function(){
//     $('.menu-item').eq(0).hover(function(){
//      $('.mobile-item').show()
//      $('.elec-item').hide();
//     })
// })

// $(document).ready(function(){
//     $('.menu-link').click(function(e){
// e.preventDefault()
//     })
// })

// start nav down jq
$(document).ready(function(){
    $(window).resize(function(){
        if(window.matchMedia('(max-width:1024px)').matches){
$('.brands>a').not('.brands-title').css("display","none")
$('nav>div:first').hide()
$('.circle-item').css("display","none")
$('.nav-down-item').eq(1).click(function(e){
e.preventDefault()
$('.bg-menu').show()
$('.menu-item').first().addClass("mobile-hover")
$('#chevdown').css("display","none")
$('#chevup').css("display","block")
$('#defaultshow').show()
$('.brands-title').first().css("border-bottom","none")
})
$('.brands-title').click(function(){
    if($('.circle-item').is(':visible')){
    $('.circle-item').hide()
 $('#chevdown').css("display","block")
$('#chevup').css("display","none")
$('.brands-title').css("border-bottom",".4px solid rgba(122, 122, 122, 0.219)")
    }
})
        }else{
            $('nav>div:first').show()
            $('.brands>a').show()
        }
    })
    $(window).resize()
})

$(document).ready(function(){
    $(window).resize(function(){
        if(window.matchMedia('(max-width:1024px)').matches){
$('.brands>a').not('.brands-title').css("display","none")
$('.elec-col-1>a').not('.elec-col-1-title').css("display","none")
        }else{
            $('.brands>a').show()
        }
    })
    $(window).resize()
})


// end nav down jq
// $(document).ready(function(){
// $(window).resize(function(){
//     if(window.matchMedia('(min-width:1024px)').matches){
//         $('.menu-link').mouseenter(function(
//             ){
//                 if($(this).is(':hover')){
//                     $('.bg-menu').show()
//                     $('body').css('overflow', 'hidden');
//                     $('.menu-item').first().addClass("mobile-hover")
//                     $('.search').hide()
//                     $('.bg').hide()
            
//                 }
                
            
//             })
//             $('.menu-items').mouseenter(function(){
//                 if($(this).is(':hover')){
//                     $('.bg-menu').show() 
//                     $('.menu-item').first().addClass("mobile-hover")
//                 }
                
            
//             })
//             $('.menu').mouseleave(function(){
//                 if(!$(this).is(':hover')){
//                     $('.bg-menu').hide() 
//                 }
                
            
//             })
//             $('.menu-link').mouseleave(function(){
//                 if(!$(this).is(':hover')){
//                     $('.bg-menu').hide() 
//                 }
//                 $('.menu-item').eq(1).hover(function(){
//                     $('.menu-item').first().removeClass("mobile-hover") ;
//                     $('.elec-item').show();
//                        $('.mobile-item').hide()
            
//             })
            
//             })
//             $('.menu-item').eq(0).hover(function(){
//                 $('.mobile-item').show()
//                 $('.elec-item').hide();
//                })
//                $('.menu-link').click(function(e){
//                 e.preventDefault()
//                     })
                    
//                     $('nav>div:first').show()
//                     $('.brands>a').show()
               

//     }else{
//         $('.circle-item').css("display","none")    
// $('.brands>a').not('.brands-title').css("display","none")
// $('nav>div:first').hide()
// $('.nav-down-item').eq(1).click(function(e){
// e.preventDefault()
// $('.bg-menu').show()
// })

//     }
// })
// $(window).resize()

// })