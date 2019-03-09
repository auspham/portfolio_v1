var base_url = window.location.href.substring(0,window.location.href.indexOf("/")+1);
var changingScreen = false;
document.onreadystatechange = function(e)
{
  if(document.readyState=="interactive")
  {
    var all = document.getElementsByTagName("*");
    for (var i=0, max=all.length; i < max; i++) 
    {
      set_ele(all[i]);
    }
  }
}

function check_element(ele)
{
  var all = document.getElementsByTagName("*");
  var totalele=all.length;
  var per_inc=100/all.length;

  if($(ele).on())
  {
    var prog_width=per_inc+Number(document.getElementById("progress_width").value);
    document.getElementById("progress_width").value=prog_width;
    $("#bar1").animate({width:prog_width+"%"},10,function(){
      if(document.getElementById("bar1").style.width>="99%")
      {
        $(".progress").fadeOut("slow");
      }			
    });
  }

  else	
  {
    set_ele(ele);
  }
}

function set_ele(set_element)
{
  check_element(set_element);
}

function setUpScreen(screen) {
  /* Use to navigate to a screen */
    var height = window.innerHeight;
    changingScreen = true;
    console.log("changingScreen: - setupScreen " +changingScreen)
    switch (screen) {
        case 1:
            window.scrollTo(0,0);
            break;
        case 2:
            window.scrollTo(0,height);
            break;
        case 3:
            window.scrollTo(0,height*2);
            break;
    }
    changingScreen = false;
    console.log("changingScreen: - setupScreen " +changingScreen)
    $(".main-menu").fadeOut("fast");
    console.log("Height: " + height)
    console.log("Setting up: " + screen);
    // setUpUrl(screen);
}

function setUpUrl(screen) {
  let url_screen = "#";
  switch(screen) {
    case 1:
      url_screen = "#/home";
      break;
    case 2:
      url_screen = "#/aboutme";
      break;
    case 3:
      url_screen = "#/projects";
      break;
  }
  window.location.href = base_url + url_screen;
}

function showScreen(screen) {
  /* Use to control the screen effect */
  switch(screen) {
    case 1:
      $(".first").css("z-index","2");
      $(".second").css("z-index","1");
      $(".third").css("z-index","1");
      break;
    case 2:
      $(".third .wrapper").css("opacity", "0");
      $(".scroll").addClass("d-scroll");
      $("canvas").css("display","block");
      $(".first").css("z-index", "-1")
      $(".third").css("z-index","1");
      $(".second").css("z-index","2");
      $(".third .third-bgWrap").fadeOut();
      $(".third .wrapper .description").fadeOut();
      break;
    case 3:
      $(".third .wrapper").css("opacity", "1");
      $("canvas").css("display","none");
      $(".menu").removeClass("d-menu");
      $(".right-scroll").removeClass("d-rightscroll");
      $(".scroll").removeClass("d-scroll");
      $(".small").removeClass("active")
      $(".small").eq(2).addClass("active");
      /* small screen 1-2 in scroll.js bc it's complex*/
      $(".first").css("z-index", "-1")
      $(".second").css("z-index","1");
      $(".third").css("z-index","2");
      $(".third .wrapper .description").fadeIn();
      $(".third .third-bgWrap").fadeIn();
      $(".main-bot").fadeOut();
      break;
  }
  // if(changingScreen == false) setUpUrl(screen);
}

function initializeUrl(url) {
  let hash_index = url.indexOf("#");
  let sub_url = url.substring(hash_index);
  console.log("Initializing: " + sub_url);
  if(hash_index == -1) {
    /* User doesn't use link pointer */
      setUpScreen(1);
  } else {
    /* User uses link pointer */
    switch(sub_url) {
      case "#/home":
        setUpScreen(1);
        break;
      case "#/aboutme":
        setUpScreen(2);
        break;
      case "#/projects":
        setUpScreen(3);
        break;
    }
  }
}

initializeUrl(window.location.href);

// window.addEventListener("hashchange", function () {
//   console.log("HashChanged!")
//   initializeUrl(window.location.href);
// }, true);