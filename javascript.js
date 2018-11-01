$(function() {
    var nav = $(".navbar");
    var wlogo = $(".w-logo");

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 15) {
            nav.addClass("nav-scrolled");
            wlogo.addClass("logo-mini");
        } else {
            nav.removeClass("nav-scrolled");
            wlogo.removeClass("logo-mini");
        }
    });

});
