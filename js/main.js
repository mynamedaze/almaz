$(document).ready(function () {
    let serviceImages1 = $('.service__item--1 .service__subimg-item');
    serviceImages1 = Array.prototype.slice.call(serviceImages1);

    let serviceButtons1 = $('.service__item--1 .service__button');
    serviceButtons1 = Array.prototype.slice.call(serviceButtons1);

    serviceButtons1.forEach(function (item, index) {
        $(item).click(function () {
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
});