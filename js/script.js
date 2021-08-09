$(document).ready(function () {
    $('.h__content').hover(function () {
        var windowWidth = $('body').innerWidth();
        if (windowWidth > 770) { $('.img__razers-1, .img__razers-2, .img__razers-3, .h__content-img').toggleClass('active'); }
        else { }
    });

    $('.finger').click(function (even) {
        $('.h__menu').toggleClass('active');
        $('body').toggleClass('active');
    })
});

let shopSlider = new Swiper('.shop', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',
        // Кружки под свайпером, где каждый кружок это страничка свайпа
        clickable: true,
        dynamicBullets: true,
        renderBullet: function(index, className) {
            return '<span class="'+ className + '">' + (index + 1) + '</span>';
        },
    },

    initialSlide: 0,


    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        }
    },

    autoHeight: false,

    spaceBetween: 30,

    loop: true,

    autoplay: {
        // Пауза между прокруткой
        delay: 10000,
        // Закончить на последнем слайде
        stopOnLastSlide: true,
        // отключить после ручного переключения
        disableOnInteraction: false
    },

    


});
