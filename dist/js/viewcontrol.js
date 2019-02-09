window.addEventListener("scroll", viewControl,false);

function /* Control scroll show view */ viewControl() {
    var scroll = $(window).scrollTop();
    var height = window.innerHeight;
    let moonscroll;
    moonscroll = (-window.innerHeight + scroll*1.2);

    if/* pass second screen */(scroll >= height) {
        $(".moon")/* moon goes up* */.css({
            transform: "translateY(" + (height - scroll) +  "px) translateX(-50%)"
        });
        if /*moon is out of the screen */ ((height - moonscroll) < 0) {
            $(".second .wrapper .description").fadeOut();
        }
    }

    if(scroll >= 2*height) {
        $(".third .wrapper .description").fadeIn();
    } else if(scroll < 2* height) {
        $(".third .wrapper .description").fadeOut();
    }

}