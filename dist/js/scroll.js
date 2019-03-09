window.addEventListener("scroll", scrollAnimate,false);

// window.addEventListener("touchmove", scrollAnimate, false);
function scrollAnimate() {
    var responsive = false;
    var scroll = $(window).scrollTop();
    scrollControl();
    $(".H").css("transform", "translateY(-"+scroll*1.7+"px)");
    $(".e").css("transform", "translateY(-"+scroll*1.6+"px)");
    $(".l").css("transform", "translateY(-"+scroll*1.8+"px)");
    $(".l1").css("transform", "translateY(-"+scroll*1.7+"px)");
    $(".o").css("transform", "translateY(-"+scroll*1.6+"px)");
    $(".comma").css("transform", "translateY(-"+scroll*1.6+"px)");
    $(".A").css("transform", "translateY(-"+scroll*1.8+"px)");
    $(".u").css("transform", "translateY(-"+scroll*1.6+"px)");
    $(".t").css("transform", "translateY(-"+scroll*1.5+"px)");
    $(".i").css("transform", "translateY(-"+scroll*1.5+"px)");
    // $(".rocket").css("transform", "translateY(-"+scroll*2+"px)");
    if(window.innerHeight <= 900 && window.innerHeight >= 600) {
        $(".rocket").css({
            transform: "translateY(-"+scroll*2+"px) scale(.8)"
        })
    } else if(window.innerWidth <= 400) {
        $(".rocket").css({
            transform: "translateY(-"+scroll*2+"px) scale(.6)"
        })
    } else {
        $(".rocket").css("transform", "translateY(-"+scroll*2+"px)");
    }
    let moonscroll;

    moonscroll = (-window.innerHeight + scroll*1.2 /* how long it stops change in viewcontrol.js as well*/);
    
    if(moonscroll < 0){
        /*  moon goes down. For moon goes up see viewcontrol.js */
        $(".moon").css({transform: "translateY(" + moonscroll +  "px) translateX(-50%)"});
        $(".credit").fadeOut();
       


    } else if (moonscroll >= 0 && moonscroll <= window.innerHeight /* change depends on moon*/){
        if(window.innerHeight >= 1000 && window.innerWidth >= 600) {
            $(".credit").fadeIn();
        }
        $(".second .btn").addClass("animated fadeIn")
        $(".second .wrapper .description").fadeIn();

    }
    universeScale();
    cloudFly();
}
function cloudFly() {
    var scroll = $(window).scrollTop();
    var height = window.innerHeight;
    var cloud = height-scroll;
    var bgcloud = 3*height - scroll;
    var city = 3.5*height - scroll;

    $(".cloud").css("display", "block");
    if(scroll < height) {
        $(".cloud1").css("transform","translateY(" + cloud*1.1 + "px)");
        $(".cloud2").css("transform","translateY(" + cloud*1.5 + "px)");
        $(".cloud3").css("transform","translateY(" + cloud*.9 + "px)");
        $(".cloud4").css("transform","translateY(" + cloud*1.2 + "px)");
        $(".cloud5").css("transform","translateY(" + cloud*.8 + "px)");
        $(".cloud6").css("transform","translateY(" + cloud*1.4 + "px)");
    } else /* goes out second screen */if(scroll >= height * 1.5) {
        cloud = height*1.5 - scroll;
        $(".cloud1").css("transform","translateY(" + cloud*1.1 + "px)");
        $(".cloud2").css("transform","translateY(" + cloud*1.5 + "px)");
        $(".cloud3").css("transform","translateY(" + cloud*.6 + "px)");
        $(".cloud4").css("transform","translateY(" + cloud*1.2 + "px)");
        $(".cloud5").css("transform","translateY(" + cloud*.8 + "px)");
        $(".cloud6").css("transform","translateY(" + cloud*1.4 + "px)");
        if (scroll <= height * 7 && bgcloud > -200) {
            $(".third-bgWrap").css("transform","translateY(" + bgcloud + "px)");
            if(scroll <= 4*height) {
                $(".fourth-bgWrap").css("transform", "translateY(" + city*.7 +"px)");
            }
        }
        

    } else {
        cloud = 0;
        $(".cloud1").css("transform","translateY(" + cloud*1.1 + "px)");
        $(".cloud2").css("transform","translateY(" + cloud*1.5 + "px)");
        $(".cloud3").css("transform","translateY(" + cloud*.6 + "px)");
        $(".cloud4").css("transform","translateY(" + cloud*1.2 + "px)");
        $(".cloud5").css("transform","translateY(" + cloud*.8 + "px)");
        $(".cloud6").css("transform","translateY(" + cloud*1.4 + "px)");
    }
  

}

function scrollControl() {
    var scroll = $(window).scrollTop();

    if(scroll > window.innerWidth * 0.3) {
        // second section
        $(".menu").addClass("d-menu");
        $(".right-scroll").addClass("d-rightscroll");
        $(".small").removeClass("active")
        $(".small").eq(1).addClass("active");
        if(window.innerWidth <= 600) {
            // $(".scroll").removeClass("d-scroll");
        } else {
            $(".scroll").addClass("d-scroll");
        }
    } else if(scroll <= window.innerWidth * 0.3) {
        // differnt section
        $(".menu").removeClass("d-menu");
        $(".right-scroll").removeClass("d-rightscroll");
        $(".small").removeClass("active")
        $(".small").eq(0).addClass("active");
        if(window.innerWidth <= 600) {
            $(".scroll").addClass("d-scroll");
        } else {
            $(".scroll").removeClass("d-scroll");
        }

    }
}

function universeScale() {
    let value = $(window).scrollTop()*0.01;
    value = Math.round(value*100)/100;
    if(value >= 1) {
        if(value > 10) {
            $(".universe").css("transform", "scale(" + 10 + ")");

        } else {
            $(".universe").css("transform", "scale(" + ((window.innerHeight > 700)
             ? value : value*1.5) + ")");
        }
    } else {
        $(".universe").css("transform", "scale(" + 1 + ")");

    }
}