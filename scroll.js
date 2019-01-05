window.addEventListener("scroll", scrollAnimate,false);
function scrollAnimate() {
    $(".H").css("transform", "translateY(-"+$(window).scrollTop()+"px)");
    $(".e").css("transform", "translateY(-"+$(window).scrollTop()*.9+"px)");
    $(".l").css("transform", "translateY(-"+$(window).scrollTop()*.7+"px)");
    $(".l1").css("transform", "translateY(-"+$(window).scrollTop()*.9+"px)");
    $(".o").css("transform", "translateY(-"+$(window).scrollTop()*1.2+"px)");
    $(".comma").css("transform", "translateY(-"+$(window).scrollTop()*.9+"px)");
    $(".A").css("transform", "translateY(-"+$(window).scrollTop()*.9+"px)");
    $(".u").css("transform", "translateY(-"+$(window).scrollTop()*1+"px)");
    $(".t").css("transform", "translateY(-"+$(window).scrollTop()*1.1+"px)");
    $(".i").css("transform", "translateY(-"+$(window).scrollTop()*.75+"px)");


}
