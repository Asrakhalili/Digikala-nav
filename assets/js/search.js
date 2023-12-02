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
            $('.search-box-w').click(function(){
                $('.search').slideUp("slow")

            })
            $('.hide-search-logo').click(function(e){
                e.preventDefault()
                $('.search').slideDown()
                
            })
            $('.search-logo-link').click(function(e){
    e.preventDefault()

})
            
            }else{

            }
        })
    $(window).resize()
    })