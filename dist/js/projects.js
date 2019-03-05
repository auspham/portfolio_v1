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
            live.innerHTML = "<i class='fas fa-eye-slash'></i> No live Demo";
            git.setAttribute("href", git.getAttribute("href").replace(prevName, projectName.innerHTML));
            window.innerWidth > 1150 ? $(".iphoneX").fadeIn() : null ;
            break;

        case "2":
            projectName.innerHTML = "rostr";
            content.innerHTML = "Rostering tool for managers with text message support using <u>React.JS</u>, <u>Node.JS</u>, <u>Express.JS</u>, <u>Mongo</u><br /><br />Won a second-price in Downer hackathon 2018 and now is being test on <a href='https://www.spotless.com/' target='_blank'>Spotless</a>";
            live.innerHTML = "<a href='https://rostrlive.herokuapp.com/' target='_blank' data-toggle='tooltip' data-placement='bottom' title='See login details on Github'><i class='fas fa-eye'></i> Try Live Demo</a>";
            $('[data-toggle="tooltip"]').tooltip();
            git.setAttribute("href", git.getAttribute("href").replace(prevName, projectName.innerHTML));
            $(".iphoneX").hide();
            break;
        case "3":
            projectName.innerHTML = "Twitter-Heatmap";
            content.innerHTML = "Twitter-Heatmap is a small project that visualises heatmap based on twitter <i>#hashtag</i>. <br /><br /> The website used <u>Flask</u>, <u>Google Map API</u>, <u>Google Big Query</u>, <u>Amazon EC2</u> to collect and display the heatmap."
            live.innerHTML = "<i class='fas fa-eye-slash'></i> No Live Demo";
            git.setAttribute("href", git.getAttribute("href").replace(prevName, projectName.innerHTML));
            $(".iphoneX").hide();
            break;
    }
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
  