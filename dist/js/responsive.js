window.addEventListener("resize", responsive, false);

function responsive() {
    if(window.innerWidth <= 700) {
        $(".scroll").addClass("d-scroll")
        $("h4").has("strong").css("width","inherit");
        $(".project-content").attr("data-toggle", "tooltip");
        $(".project-content").attr("data-placement", "top");
        $(".project-content").attr("title", "Scroll for more");
    }
}

responsive();
