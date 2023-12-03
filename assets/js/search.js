    $(document).ready(function(){
        $('.search-box').click(function(e){
        e.stopPropagation();
        // disabling scroll on window
        $('body').css('overflow', 'hidden');
            $('.search').fadeIn();
        $('.search').find('input').focus();
        $('.bg').fadeIn()
        });
    
    $(document).click(function(){
        $('.search').fadeOut()
        $('.bg').fadeOut()
    });
        

    });
$(document).ready(function(){
$('.search-logo-link').click(function(e){
    e.preventDefault()

})
})
$(document).ready(function(){
    $('first-sec,a').click(function(){
        $('.search').fadeOut()
        $('.bg').fadeOut()
        return false; 
    })
    })
    $(document).ready(function(){
        $(window).resize(function(){
            if(window.matchMedia('(max-width:1024px)').matches){
             
            $('.search-box').click(function(){
                $('.search').slideDown()
                $('.bg').css("display","none")
            })

            $('.hide-search-logo').click(function(e){
                e.preventDefault()
                $('.search').hide()
                
            })
            $('.search-logo-link').click(function(e){
    e.preventDefault()

})
            
            }else{

            }
        })
    $(window).resize()
    })
    
//     $(document).ready(function(){
//         $(window).resize(function(){
//             if(window.matchMedia('(min-width:1024px)').matches){
//         $('.search-box').click(function(e){
//         e.stopPropagation();
//         // disabling scroll on window
//         $('body').css('overflow', 'hidden');
//             $('.search').fadeIn();
//         $('.search').find('input').focus();
//         $('.bg').fadeIn()
//         });
    
//     $(document).click(function(){
//         $('.search').fadeOut()
//         $('.bg').fadeOut()
//     });
//     $('.search-logo-link').click(function(e){
//     e.preventDefault()

// })
//     $('first-sec,a').click(function(){
//         $('.search').fadeOut()
//         $('.bg').fadeOut()
//         return false; 
//     })
            
//             }else{

//             }
//         })
//     $(window).resize()
//     })
