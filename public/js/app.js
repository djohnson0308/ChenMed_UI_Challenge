$(window).resize(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth < 480) {
            $(".navbar-fixed-top").removeClass("navbar-fixed-top").addClass("navbar-static-top");
    }
})
