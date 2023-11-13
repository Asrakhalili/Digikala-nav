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