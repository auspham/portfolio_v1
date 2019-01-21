window.addEventListener("scroll", scrollAnimate,false);
function scrollAnimate() {
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
    $(".rocket").css("transform", "translateY(-"+scroll*2+"px)");
    $(".moon").css("transform", "translateY(" + (-window.innerHeight + scroll) +  "px)");
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
        $(".scroll").addClass("d-scroll");
    } else {
        // differnt section
        $(".menu").removeClass("d-menu");
        $(".right-scroll").removeClass("d-rightscroll");
        $(".small").removeClass("active")
        $(".small").eq(0).addClass("active");
        $(".scroll").removeClass("d-scroll");

    }
}

function universeScale() {
    let value = $(window).scrollTop()*0.01;
    if(value >= 1) {
        if(value > 10) {
            $(".universe").css("transform", "scale(" + 10 + ")");

        } else {
            $(".universe").css("transform", "scale(" + value + ")");
        }
    } else {
        $(".universe").css("transform", "scale(" + 1 + ")");

    }
}