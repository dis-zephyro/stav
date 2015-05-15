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

    $('.btn-send').click(function() {

        $('body').find('form:not(this)').children('label').removeClass('red'); //удаление всех сообщение об ошибке(валидатора)
        var answer = checkForm($(this).parent().get(0)); //ответ от валидатора
        if(answer != false)
        {
            var $form = $(this).parent(),
                name =     $('input[name="name"]', $form).val(),
                phone =    $('input[name="phone"]', $form).val();

            $.ajax({
                type: "POST",
                url: "form-handler.php",
                data: {name: name, phone: phone}
            }).done(function(msg) {
                $('.form').find('input[type=text], textarea').val('');
                $.fancybox.close();
                window.alert('«Ваше сообщение отправлено. Менеджер перезвонит Вам»');
                console.log('удачно')
            });
        }
    });
});

$(".popup-form").fancybox({
    'padding' : 0
});


$('.slider').slick({
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow : '<span class="slider-nav prev"></span>',
    nextArrow: '<span class="slider-nav next"></span>',
    responsive: [

        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 719,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


$('.topnav li a').click(function(){
    var str=$(this).attr('href');
    $.scrollTo(str, {offset:0});
    return false;
});