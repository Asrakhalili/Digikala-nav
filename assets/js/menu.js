$(document).ready(function(){
    $('.menu-link').hover(function(){
        $('.bg-menu').show() 
        $('.search').hide()
    $('.menu-item').first().addClass("mobile-hover")
    })  
    $('.menu-items').eq(1).removeClass("mobile-hover")

})