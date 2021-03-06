$(document).ready(function () {
    let overlay = document.getElementsByClassName('overlay');

    let serviceImages1 = $('.service__item--1 .service__subimg-item');
    serviceImages1 = Array.prototype.slice.call(serviceImages1);

    let serviceButtons1 = $('.service__item--1 .service__button');
    serviceButtons1 = Array.prototype.slice.call(serviceButtons1);

    serviceButtons1.forEach(function (item, index) {
        $(item).click(function () {
            $(serviceButtons1).removeClass('active');
            $(item).addClass('active');
            $(serviceImages1).addClass('disable');
            $(serviceImages1[index]).removeClass('disable');
        })
    });

    let serviceImages2 = $('.service__item--2 .service__subimg-item');
    serviceImages2 = Array.prototype.slice.call(serviceImages2);

    let serviceButtons2 = $('.service__item--2 .service__button');
    serviceButtons2 = Array.prototype.slice.call(serviceButtons2);

    serviceButtons2.forEach(function (item, index) {
        $(item).click(function () {
            $(serviceButtons2).removeClass('active');
            $(item).addClass('active');
            $(serviceImages2).addClass('disable');
            $(serviceImages2[index]).removeClass('disable');
        })
    });

    let serviceImages3 = $('.service__item--3 .service__subimg-item');
    serviceImages3 = Array.prototype.slice.call(serviceImages3);

    let serviceButtons3 = $('.service__item--3 .service__button');
    serviceButtons3 = Array.prototype.slice.call(serviceButtons3);

    serviceButtons3.forEach(function (item, index) {
        $(item).click(function () {
            $(serviceButtons3).removeClass('active');
            $(item).addClass('active');
            $(serviceImages3).addClass('disable');
            $(serviceImages3[index]).removeClass('disable');
        })
    });

    $(".eq__list").owlCarousel({
        loop: true,
        dots: true,
        items: 1,
        responsive: {
            0: {
                nav: false
            },
            768: {
                nav: true
            }
        }
    });

    let mainNav = document.getElementsByClassName('main-nav');
    let pageHeaderBurgerBtn = document.getElementsByClassName('page-header__burger-btn');
    let mainNavCloseBtn = document.getElementsByClassName('main-nav__close-btn');

    $(pageHeaderBurgerBtn).click(function () {
        $(mainNav).addClass('active');
    });

    $(mainNavCloseBtn).click(function () {
        $(mainNav).removeClass('active');
    });

    let popup = document.getElementsByClassName('popup');
    let closeBtn = document.getElementsByClassName('close-btn');

    $(closeBtn).click(function () {
        $(popup).fadeOut(300);
        setTimeout(function () {
            $(overlay).fadeOut(300);
        }, 300);
    });

    $(overlay).click(function () {
        $(popup).fadeOut(300);
        setTimeout(function () {
            $(overlay).fadeOut(300);
        }, 300);
    });

    let appBtn = document.getElementsByClassName('app-btn');
    let popupApp = document.getElementsByClassName('popup-app');

    $(appBtn).click(function () {
        $(overlay).fadeIn(300);
        setTimeout(function () {
            $(popupApp).fadeIn(300);
        }, 300);
    });

    let callbackBtn = document.getElementsByClassName('callback-btn');
    let popupCallback = document.getElementsByClassName('popup-callback');

    $(callbackBtn).click(function () {
        $(overlay).fadeIn(300);
        setTimeout(function () {
            $(popupCallback).fadeIn(300);
        }, 300);
    });

    /*?????????????? ????????????*/
    $(function () {
        $('a[href^="#"]').on('click', function (event) {
            // ???????????????? ?????????????????????? ????????????????
            event.preventDefault();

            var sc = $(this).attr("href"),
                dn = $(sc).offset().top;
            /*
             * sc - ?? ???????????????????? ?????????????? ???????????????????? ?? ??????, ?? ???????????? ?????????? ???????? ??????????????
             * dn - ???????????????????? ?????????????????? ?????????? ???? ????????????????
             */

            $('html, body').animate({
                scrollTop: dn
            }, 1000);

            /*
             * 1000 ???????????????? ???????????????? ?? ??????????????????????????
             */
        });
    });
    /* */

    /*phone validate*/
    $('.phone-input').inputmask("+X (999) 999-9999", {
        definitions: {
            "X": {
                validator: "[7-9]",
            }
        },
        oncomplete: function(){
            $(this).val('+7' + $(this).val().substring(2));
        }
    });
    /* */

    /* ???????????????? ?????????? ?? ?????????? ?????????????? */
    let popupCallbackForm = $('#popup-callback-form');
    let popupSuccessCallback = document.getElementsByClassName('popup-success--callback');

    popupCallbackForm.submit(function (ev) {
        $.ajax({
            type: 'POST',
            url: '/mail-callback.php',
            data: popupCallbackForm.serialize(),
            success: function (data) {
                $('.phone-input').val('');
                $(popupCallback).fadeOut(300);
                setTimeout(function () {
                    $(popupSuccessCallback).fadeIn(300);
                }, 300);
            }
        });
        ev.preventDefault();
    });
    /* */

    /* ???????????????? ?????????? ?? ?????????? ???????????? */
    let popupAppForm = $('#popup-app-form');
    let popupSuccessApp = document.getElementsByClassName('popup-success--app');

    popupAppForm.submit(function (ev) {
        $.ajax({
            type: 'POST',
            url: '/mail-app.php',
            data: popupAppForm.serialize(),
            success: function (data) {
                $('.phone-input').val('');
                $(popupApp).fadeOut(300);
                setTimeout(function () {
                    $(popupSuccessApp).fadeIn(300);
                }, 300);
            }
        });
        ev.preventDefault();
    });
    /* */

    /*???????????????? ?????????? ???????????????? ?????????????? ??????????????????*/
    let masterForm = $('#master-form');
    masterForm.submit(function (ev) {
        $.ajax({
            type: 'POST',
            url: '/mail-master.php',
            data: masterForm.serialize(),
            success: function (data) {
                $('.phone-input').val('');
                $(overlay).fadeIn(300);
                setTimeout(function () {
                    $(popupSuccessApp).fadeIn(300);
                }, 300);
            }
        });
        ev.preventDefault();
    });
    /* */
});