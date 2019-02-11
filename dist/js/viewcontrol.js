window.addEventListener("scroll", viewControl,false);

function /* Control scroll show view */ viewControl() {
    var scroll = $(window).scrollTop();
    var height = window.innerHeight;
    let moonscroll;
    moonscroll = (-window.innerHeight + scroll*1.2);
    if /* third screen */(scroll >= height * 2) {
        $(".menu").removeClass("d-menu");
        $(".right-scroll").removeClass("d-rightscroll");
        $(".small").removeClass("active")
        $(".small").eq(2).addClass("active");
        /* small screen 1-2 in scroll.js bc it's complex*/
        $(".second").css("z-index","1");
        $(".third").css("z-index","2");
        $(".third .wrapper .description").fadeIn();
        $(".third .third-bgWrap").fadeIn();
        $(".main-bot").fadeOut();
    } else if/* second screen */(scroll >= height) {

        $(".third").css("z-index","1");
        $(".second").css("z-index","2");
        $(".third .third-bgWrap").fadeOut();
        $(".third .wrapper .description").fadeOut();
        $(".moon")/* moon goes up* */.css({
            transform: "translateY(" + (height - scroll) +  "px) translateX(-50%)"
        });
        if /*moon is out of the screen */ ((height - moonscroll) < 0) {
            $(".second .wrapper .description").fadeOut();
        }
        $(".main-bot").fadeIn();
    } else if /*first screen */ (scroll < height) {

    }
}