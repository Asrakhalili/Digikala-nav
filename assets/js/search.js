$(document).ready(function(){
    $('.search-box>span').click(function(e){
      e.stopPropagation();
        $('.search').fadeIn();
     $('.search').find('input').focus() ;
    });


$(document).click(function(){
    $('.search').hide()
});
    

});