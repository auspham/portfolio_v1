let fullwidth = window.innerWidth;
let fullheigh = window.innerHeight;
const MAXSPEED = 2;
const MAXRADIUS = 50;
const MINSPEED = 1;
var MAX =20;
let canvas = document.querySelector('canvas')
canvas.width = fullwidth;
canvas.height = fullheigh;
shapeArr = [];
let c = canvas.getContext('2d')
window.addEventListener("resize",init,false);

window.onscroll = function(e) {
    for(let i = 0; i < shapeArr.length; i ++) {
        shapeArr[i].scroll(this.oldScroll > this.scrollY);
    }
    this.oldScroll = this.scrollY;
}


function Shape(x,y,dy,radius){
    this.x = x;
    this.y = y;
    this.dy = dy;
    this.radius = radius;
    this.color = "#000";
    this.scroll = 0;
    this.noscroll = false;
    var shape = Math.floor(Math.random() * Math.floor(4));
    this.render = function () {
      this.noscroll = false;
      c.beginPath();
      c.fillStyle = "white";
      c.strokeStyle = "black";
      c.lineWidth = 1;

      if(shape == 0) {
          // circle
          c.arc(this.x,this.y,this.radius*1.1,0,Math.PI*2,false);
          c.fillStyle = this.color;
          c.stroke();
      }
      if(shape == 1) {
          // rectangle
          c.strokeRect(this.x,this.y,this.radius, this.radius);
      }

      if(shape == 2) {
          c.moveTo(this.x + this.radius-1, this.y);
          c.lineTo(this.x, this.y + (this.radius-1) * 2);
          c.lineTo(this.x + (this.radius-1) * 2, this.y + (this.radius-1) * 2);
          c.lineTo(this.x + (this.radius-1), this.y);
          c.stroke();
      }

      if(shape == 3) {
          c.lineTo(this.x + this.radius-1, this.y);
          c.lineTo(this.x + (this.radius-1)/2, this.y + this.radius - 1);
          c.lineTo(this.x,this.y);
          c.lineTo(this.x + this.radius-1, this.y);
          c.stroke();
      }
      this.move();
    }
    this.renderDark = function() {
        this.noscroll = true;
        c.beginPath();
        c.fillStyle = "white";
        c.strokeStyle = "white";
        if(shape == 0) {
            // snowball
            c.arc(this.x,this.y,this.radius*0.5,0,Math.PI*2,false);
            c.stroke();
            c.fill();
        }
        if(shape == 1 ) {
            // plus
            let unit = this.radius;
            c.moveTo(this.x + unit/2, this.y);
            c.lineTo(this.x + unit/2, this.y + unit);
            c.moveTo(this.x, this.y + unit/2);
            c.lineTo(this.x + unit, this.y + unit/2);
            c.lineWidth = unit/4;
            c.stroke();
        }
        this.move();
    }
    this.move = function() {
        if(this.y > fullheigh) {
            this.y = 0;
            this.x = Math.random()*innerWidth;
        }
        this.y += this.dy;
    }
    this.scroll = function (e) {
        if(e == false && this.noscroll == false) {
            // down
            this.y -=  ($(window).scrollTop())*.3;
        } else if(e && this.noscroll == false){
            // up
            this.y +=  ($(window).scrollTop())*.3;
        }
        // limit
        if(this.y > fullheigh) {
            this.y = 0;
            this.x = Math.random()*innerWidth;
        }
        if(this.y < 0) {
            this.y = fullheigh;
            this.x = Math.random()*innerWidth;
        }
    }
}
function init() {
    shapeArr = [];
    for(let i = 0; i < MAX; i++) {
        var x = Math.random()*innerWidth;
        var y = Math.random()*innerHeight;
        var dy = (Math.random()) * MAXSPEED + MINSPEED;
        var radius = (Math.random() * 10) + 10; 
        var shape = new Shape(x,y,dy,radius);
        shapeArr.unshift(shape);
    }
}
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    if($(window).scrollTop() <= window.innerHeight*.6) {
        $("canvas").css("z-index", "-1")
        for(let i = 0; i < shapeArr.length; i ++) {
            shapeArr[i].render();
        }
    } else {
        $("canvas").css("z-index", "1")
        for(let i = 0; i < shapeArr.length; i ++) {
            shapeArr[i].renderDark();
        }
    }
}
animate();
init();