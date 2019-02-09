var options = {
    animateThreshold: 400,
    scrollPollInterval: 20
}
$(".second .wrapper .description h1").AniView(options);
$(".second .wrapper .description h4").AniView();
$(".third .wrapper .description h1").AniView(options);
$(".third .wrapper .description h4").AniView();

$(".menu .burger").add(".menu span").click(function () {
    $(".main-menu").css("display", "block");
    $(".main-menu .closebtn").css("animation-name", "play18")
   
})

$(".closebtn").click(function () {
    $(".main-menu").css("display", "none");

})
