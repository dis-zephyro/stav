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

    // Анимация
    var Android = navigator.userAgent.search(/Android/i);
    var iPhone = navigator.userAgent.search(/iPhone/i);
    var iPad = navigator.userAgent.search(/iPad/i);
    if(Android != -1 || iPhone != -1 || iPad != -1) {

    } else {


        $(".scroll").each(function () { // анимация по скролу(используйте этот) достаточно добавить анимируемому блоку класс 'scroll' а css анимацию писать так: '.animated.класс_блока'
            var block = $(this);
            $(window).scroll(function() {
                var top = block.offset().top;
                var bottom = block.height()+top;
                top = top - $(window).height();
                var scroll_top = $(this).scrollTop();
                if ((scroll_top > top) && (scroll_top < bottom)) {
                    if (!block.hasClass("animated")) {
                        block.addClass("animated");
                    }
                } else {
                    block.removeClass("animated");
                }
            });
        });
        $('head').append('<link rel="stylesheet" type="text/css" href="css/animate.css" />'); //подключение файла animation.css если не мобильник
        $('head').append('<link rel="stylesheet" type="text/css" href="css/animation.css" />'); //подключение файла animation.css если не мобильник
    }


    $('input[placeholder], textarea[placeholder]').placeholder();

    $('.btn-send').click(function() {

        $('body').find('form:not(this)').children('label').removeClass('red'); //удаление всех сообщение об ошибке(валидатора)
        var answer = checkForm($(this).parent().get(0)); //ответ от валидатора
        if(answer != false)
        {
            var $form = $(this).parent(),
                name =     $('input[name="name"]', $form).val(),
                phone =    $('input[name="phone"]', $form).val(),
                quest =    $('textarea[name="quest"]', $form).val();

            $.ajax({
                type: "POST",
                url: "form-handler.php",
                data: {name: name, phone: phone, quest: quest}
            }).done(function(msg) {
                $('.form').find('input[type=text], textarea').val('');
                $.fancybox.close();
                window.alert('«Ваше сообщение отправлено. Менеджер перезвонит Вам»');
                console.log('удачно');
                console.log(quest)
            });
        }
    });



    $('.tab').hide();

    $('.all').click(function(event) {
        event.preventDefault(); // Для того чтобы при нажатии на ссылку не кидало вверх
        $('.tab').slideToggle();
        location.hash = this.hash;
    });

    if (location.hash == '.tab') {
        $('.preview').click();
    }
});

$(".popup-form, .gallery").fancybox({
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