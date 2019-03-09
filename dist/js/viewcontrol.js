window.addEventListener("scroll", viewControl,false);
var lastScrollTop = 0;
var backgroundPos = 0;
var tooltipShowed = 0;
var screen = 1; // default first screen
function /* Control scroll show view */ viewControl() {
    var scroll = $(window).scrollTop();
    var height = window.innerHeight;
    let moonscroll;
    moonscroll = (-window.innerHeight + scroll*1.2);
    if /* third screen */(scroll >= height * 2) {

        screen = 3;
      
        if(scroll > lastScrollTop) {
            /* scroll down */
            if(backgroundPos < 100) {
                backgroundPos+=3;
            }
        } else {
            /* scroll up */
            if(backgroundPos > 0) {
                backgroundPos-=3;
            }
        }
        $(".third .wrapper .iphoneX .iphoneX-screen").css("background-position-y", backgroundPos + "%")
        
       
    } else if/* second screen */(scroll >= height) {
        screen = 2;
     
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
    } else if (scroll > height*.7) {
        /* if just little bit passed first */ 
        $(".first").css("z-index","0");

    } else if /*first screen */ (scroll < height) {
        screen = 1;
    }
    lastScrollTop = scroll;
    showScreen(screen);
}

(function() /* intial view control */{
    $(".first").css("z-index","2");
    $(".second").css("z-index","1");
    $(".third").css("z-index","1");
})();

