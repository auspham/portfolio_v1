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
    if(window.innerHeight <= 900) {
        $(".rocket").css({
            transform: "translateY(-"+scroll*2+"px) scale(.8)"
        })
    } else {
        $(".rocket").css("transform", "translateY(-"+scroll*2+"px)");
    }
    let moonscroll;

    if(window.innerWidth <= 600) {
        moonscroll = (-window.innerHeight + scroll*1.2);
        responsive = true;
    } else {
        moonscroll = (-window.innerHeight + scroll);
        responsive = false;
    }
    
    if(moonscroll < 0){
        $(".moon").css({transform: "translateY(" + moonscroll +  "px) translateX(-50%)"});
        $(".credit").fadeOut();
        // $(".second .wrapper .description").removeClass("animated fadeIn");
        // $(".second .wrapper .description").addClass("animated fadeOut");
        $(".second .wrapper .description").fadeOut();


    } else if (moonscroll > 0 && moonscroll < window.innerHeight*2){
        // $(".moon").css({transform: "translateY(" + moonscroll +  "px) translateX(-50%)"});
        $(".credit").fadeIn();
        $(".second .btn").addClass("animated fadeIn")
        // $(".second .wrapper .description").removeClass("animated fadeOut");
        // $(".second .wrapper .description").addClass("animated fadeIn");
        $(".second .wrapper .description").fadeIn();
    }
    universeScale();
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
    } else {
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