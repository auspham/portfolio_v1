window.addEventListener("scroll", viewControl,false);
var lastScrollTop = 0;
var backgroundPos = 0;
function /* Control scroll show view */ viewControl() {
    var scroll = $(window).scrollTop();
    var height = window.innerHeight;
    let moonscroll;
    moonscroll = (-window.innerHeight + scroll*1.2);
    if /* third screen */(scroll >= height * 2) {
        $(".third .wrapper").css("opacity", "1");
        $("canvas").css("display","none");
        $(".menu").removeClass("d-menu");
        $(".right-scroll").removeClass("d-rightscroll");
        $(".scroll").removeClass("d-scroll");
        $(".small").removeClass("active")
        $(".small").eq(2).addClass("active");
        /* small screen 1-2 in scroll.js bc it's complex*/
        $(".second").css("z-index","1");
        $(".third").css("z-index","2");
        $(".third .wrapper .description").fadeIn();
        $(".third .third-bgWrap").fadeIn();
        $(".main-bot").fadeOut();
            /* trigger iphone scroll */
            let addUp = ($("body").height() - height * 2) / 1000;
            if(scroll > lastScrollTop) {
                /* scroll down */
                if(backgroundPos < 100) {
                    backgroundPos+=addUp;
                }
            } else {
                /* scroll up */
                if(backgroundPos > 0) {
                    backgroundPos-=addUp;
                }
            }
            $(".third .wrapper .iphoneX .iphoneX-screen").css("background-position-y", backgroundPos + "%")
        
       
    } else if/* second screen */(scroll >= height) {
        $(".third .wrapper").css("opacity", "0");

        $(".scroll").addClass("d-scroll");
        $("canvas").css("display","block");
        $(".third").css("z-index","1");
        $(".second").css("z-index","2");
        $(".third .third-bgWrap").fadeOut();
        $(".third .wrapper .description").fadeOut();
        if(height - scroll < -900) {
            $(".moon").css({
                transform: "translateY(" + (height - scroll)*1.5 +  "px) translateX(-50%)"
            });
        } else {
            $(".moon")/* moon goes up* */.css({
                transform: "translateY(" + (height - scroll)*1.2 +  "px) translateX(-50%)"
            });
        }
        
        if /*moon is out of the screen */ ((height - moonscroll) < 0) {
            $(".second .wrapper .description").fadeOut();
        }
        $(".main-bot").fadeIn();
    } else if /*first screen */ (scroll < height) {

    }
    lastScrollTop = scroll;
}