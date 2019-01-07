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
window.addEventListener("scroll", shapeScroll, false);
function shapeScroll() {
    for(let i = 0; i < shapeArr.length; i ++) {
        shapeArr[i].scroll();
    }
}

function Shape(x,y,dy,radius){
    this.x = x;
    this.y = y;
    this.dy = dy;
    this.radius = radius;
    this.color = "#000";
    this.scroll = 0;
    var shape = Math.floor(Math.random() * Math.floor(4));
    this.render = function () {
      c.beginPath();
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
    this.move = function() {
        if(this.y > fullheigh) {
            this.y = 0;
            this.x = Math.random()*innerWidth;
        }
        this.y += this.dy;
    }
    this.scroll = function () {
        this.y -=  ($(window).scrollTop())*.3;
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
    for(let i = 0; i < shapeArr.length; i ++) {
      shapeArr[i].render();
    }
}
animate();
init();