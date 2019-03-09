window.__forceSmoothScrollPolyfill__ = true;
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
    var height = window.innerHeight;
    switch (screen) {
        case 1:
            window.scroll({top: 0, left: 0, behavior: "smooth"})
            break;
        case 2:
            window.scroll({top: height, left: 0, behavior: "smooth"})
            break;
        case 3:
            window.scroll({top: height*2, left: 0, behavior: "smooth"})
            break;
        case 4:
            window.scroll({top: height*3.5, left: 0, behavior: "smooth"})
            break;

    }
    $(".main-menu").fadeOut("fast");
}