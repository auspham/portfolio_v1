window.addEventListener("resize", responsive, false);

function responsive() {
    if(window.innerWidth <= 700) {
        $(".scroll").addClass("d-scroll")
        $("h4").has("strong").css("width","inherit");
    }
}

responsive();
// alert(window.innerWidth+ ":" + window.innerHeight)