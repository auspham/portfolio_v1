window.addEventListener("scroll", viewControl,false);
var lastScrollTop = 0;
var backgroundPos = 0;
var tooltipShowed = 0;
function /* Control scroll show view */ viewControl() {
    var scroll = $(window).scrollTop();
    var height = window.innerHeight;
    let moonscroll;
    var city = 4*height - scroll;
    moonscroll = (-window.innerHeight + scroll*1.2);
 
    if /* fourth screen */ (scroll >= height*3.5) {
        $(".menu").removeClass("d-menu");
        // $(".menu").css("opacity",".5")
        $(".right-scroll").removeClass("d-rightscroll");
        $(".small").removeClass("active")
        $(".small").eq(3).addClass("active");
        $(".first").css("z-index", "-1")
        $(".second").css("z-index","1");
        $(".third").css("z-index","1");
        $(".fourth").css("z-index", "2");
        $(".main-bot").fadeOut();
        $("section:not('.fourth') .wrapper").fadeOut();
        $(".third .third-bgWrap").fadeIn();

        $(".fourth .wrapper").fadeIn();
        $(".fourth .wrapper .description").fadeIn();
        $(".third .third-bgWrap").fadeIn();
        $(".fourth .fourth-bgWrap").fadeIn();
        if(scroll <= 4*height) {
            $(".fourth-bgWrap").css("transform", "translateY(" + city +"px)");
        }

    } else if /* third screen */(scroll >= height * 2) {
        // $(".menu").css("opacity","1")

        $(".third .wrapper").css("opacity", "1");
        $("canvas").css("display","none");
        $(".menu").removeClass("d-menu");
        $(".right-scroll").removeClass("d-rightscroll");
        $(".scroll").removeClass("d-scroll");
        $(".small").removeClass("active")
        $(".small").eq(2).addClass("active");
        /* small screen 1-2 in scroll.js bc it's complex*/
        $("section:not(.third)").css("z-index","1");
        $(".first").css("z-index", "-1");
        $(".third").css("z-index","2");
        $("section:not('.third') .wrapper").fadeOut();
        $(".fourth .fourth-bgWrap").fadeOut();

        $(".third .wrapper").fadeIn();

        $(".third .wrapper .description").fadeIn();
        $(".third .third-bgWrap").fadeIn();
        $(".main-bot").fadeOut();
        /* trigger iphone scroll */
            // let addUp = ($("body").height() - height * 2) / 1500;
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
        
        /* show tooltip for screen < 700 project-content*/
        if(window.innerWidth <= 700) {
            if(tooltipShowed == 0) {
                $(".project-content").mouseover();
                setInterval(()=>{
                    $(".project-content").mouseleave();
                },2000);
                tooltipShowed = 1;
            }
        }
       
    } else if/* second screen */(scroll >= height*.9) {
        $(".third .wrapper").css("opacity", "0");

        $(".scroll").addClass("d-scroll");
        $("canvas").css("display","block");
        $(".first").css("z-index", "-1")
        $("section:not(.second)").css("z-index","1");
        $(".second").css("z-index","2");
        $("section:not('.second') .wrapper").fadeOut();
        $(".second .wrapper").fadeIn();
        if(height - scroll < -900) {
            $(".moon").css({
                transform: "translateY(" + (height*.9 - scroll)*1.5 +  "px) translateX(-50%)"
            });
        } else {
            $(".moon")/* moon goes up* */.css({
                transform: "translateY(" + (height*.9 - scroll)*1.2 +  "px) translateX(-50%)"
            });
        }
        
        if /*moon is out of the screen */ ((height - moonscroll) < 0) {
            $(".second .wrapper .description").fadeOut();
        }
        $(".main-bot").fadeIn();
    } else if (scroll > height*.4) {
        /* if just little bit passed first */ 

        // $(".second .wrapper").fadeIn();
        $(".moon").fadeIn();
        $(".first").css("z-index","0");

    } else if /*first screen */ (scroll < height) {
        $(".first").css("z-index","2");
        $(".second .moon").fadeIn();
        $("section:not(.first)").css("z-index","1");
        $("section:not('.first') .wrapper .description").fadeOut();

    }
    lastScrollTop = scroll;
}

(function() /* intial view control */{
    $(".first").css("z-index","2");
    $(".second").css("z-index","1");
    $(".third").css("z-index","1");
})();

