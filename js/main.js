// Мобильное меню.

$(function() {
    var pull = $('#pull');
    menu = $('.topnav-inner');

    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function(){
        var w = $(window).width();
        if(w > 718 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
});

$(document).ready(function(){

    $('input[placeholder], textarea[placeholder]').placeholder();

});
