window.addEventListener("scroll", scrollAnimate,false);
function scrollAnimate() {
    $(".H").css("transform", "translateY(-"+$(window).scrollTop()*1.7+"px)");
    $(".e").css("transform", "translateY(-"+$(window).scrollTop()*1.6+"px)");
    $(".l").css("transform", "translateY(-"+$(window).scrollTop()*1.8+"px)");
    $(".l1").css("transform", "translateY(-"+$(window).scrollTop()*1.7+"px)");
    $(".o").css("transform", "translateY(-"+$(window).scrollTop()*1.6+"px)");
    $(".comma").css("transform", "translateY(-"+$(window).scrollTop()*1.6+"px)");
    $(".A").css("transform", "translateY(-"+$(window).scrollTop()*1.8+"px)");
    $(".u").css("transform", "translateY(-"+$(window).scrollTop()*1.6+"px)");
    $(".t").css("transform", "translateY(-"+$(window).scrollTop()*1.5+"px)");
    $(".i").css("transform", "translateY(-"+$(window).scrollTop()*1.5+"px)");
    $(".rocket").css("transform", "translateY(-"+$(window).scrollTop()*2+"px)");
    universeScale();
}

function universeScale() {
    let value = $(window).scrollTop()*0.01;
    if(value >= 1) {
        $(".universe").css("transform", "scale(" + value + ")");
    } else {
        $(".universe").css("transform", "scale(" + 1 + ")");

    }
}