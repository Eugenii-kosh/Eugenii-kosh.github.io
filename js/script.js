$(document).ready(function() {
    $('.h__content').hover(function() {
        var windowWidth = $('body').innerWidth();
        if (windowWidth > 770) {$('.img__razers-1, .img__razers-2, .img__razers-3, .h__content-img').toggleClass('active');}
        else {}
    });

    $('.finger').click(function(even) {
        $('.h__menu').toggleClass('active');
        $('body').toggleClass('active');
    })
});