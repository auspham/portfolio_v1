var pageView = 1; // by default it's BitStat
var defaultProject = "bitstat";
$(".project-git a")[0].setAttribute("href", $(".project-git a")[0].getAttribute("href").replace(":project",defaultProject));

$(".page").click(function () {
    $(".page").removeClass("page-active");
    $(this).addClass("page-active")
    pageView = this.innerHTML;
    $(".page-switcher").hide().fadeIn('fast');    //debug for chrome;
    setUpContent(pageView);
});


function setUpContent(pageView) {
    var projectName = $(".project-name")[0];
    var content = $(".project-content")[0];
    var git = $(".project-git a")[0];
    var live = $(".project-live")[0];
    let prevName = git.getAttribute("href").substring(git.getAttribute("href").lastIndexOf("/") + 1);
    switch (pageView) {
        case "1": 
            projectName.innerHTML = "bitstat";
            content.innerHTML = "BitStat is a site that <u>visualises</u> <u>Bitcoin</u> currency info and does currency exchange <u>real time</u> from Bitcoin (BTC) to selected currencies.";
            live.innerHTML = "<i class='fas fa-eye-slash'></i> No live demo";
            git.setAttribute("href", git.getAttribute("href").replace(prevName, projectName.innerHTML));
            window.innerWidth > 700 ? $(".iphoneX").fadeIn() : null ;
            break;
        case "2":
            projectName.innerHTML = "rostr";
            content.innerHTML = "Rostering tool for managers with text message support using <u>ReactJS</u>, <u>NodeJS</u>, <u>ExpressJS</u>, <u>Mongo</u>";
            live.innerHTML = "<a href='https://rostrlive.herokuapp.com/' target='_blank'><i class='fas fa-eye'></i> Live demo</a>";
            git.setAttribute("href", git.getAttribute("href").replace(prevName, projectName.innerHTML));
            $(".iphoneX").fadeOut();
            break;
    }
}