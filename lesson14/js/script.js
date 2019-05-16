
$(document).ready(function(){

    $('.main_btna').on('click', function(){
        $('.overlay').fadeToggle(2000);       
        $('.modal').slideDown(1500);
    });

    $('.main_btn').on('click', function(){
        $('.overlay').fadeToggle(2000);       
        $('.modal').slideDown(1500); 
    });
    $('[href="#sheldure"]').on('click', function(){
        $('.overlay').fadeToggle(2000);       
        $('.modal').slideDown(1500);
    });
    $('.close').on('click', function(){
        $('.modal').slideUp(1500);
        $('.overlay').fadeToggle(2000);
    });
});
    