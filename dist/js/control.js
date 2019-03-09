var options = {
    animateThreshold: 400,
    scrollPollInterval: 20
}
$("section:not(.first) .wrapper .description h1").AniView(options);
$("section:not(.first) .wrapper .description h4").AniView();

$(".third .wrapper .iphoneX").AniView();
$(".fourth .wrapper .description h2").AniView();

$(".menu .burger").add(".menu span").click(function () {
    $(".main-menu").css("display", "block");
    $(".main-menu .closebtn").css("animation-name", "play18")
   
})

$(".closebtn").click(function () {
    $(".main-menu").css("display", "none");

})

