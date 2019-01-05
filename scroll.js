window.addEventListener("scroll", scrollAnimate,false);
function scrollAnimate() {
    $(".H").css("transform", "translateY(-"+$(window).scrollTop()+"px)");
    $(".e").css("transform", "translateY(-"+$(window).scrollTop()*.9+"px)");
    $(".l").css("transform", "translateY(-"+$(window).scrollTop()*.7+"px)");
    $(".l1").css("transform", "translateY(-"+$(window).scrollTop()*.9+"px)");
    $(".o").css("transform", "translateY(-"+$(window).scrollTop()*.6+"px)");
    $(".comma").css("transform", "translateY(-"+$(window).scrollTop()*.9+"px)");

}
