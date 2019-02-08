var options = {
    animateThreshold: 400,
    scrollPollInterval: 20
}
$(".second .wrapper .description h1").AniView(options);
$(".second .wrapper .description h4").AniView();


$(".menu .burger").click(function () {
    $(".main-menu").css("display", "block");
})

$(".closebtn").click(function () {
    $(".main-menu").css("display", "none");
})
