let fullwidth = window.innerWidth;
let fullheigh = window.innerHeight;
const MAXSPEED = 2;
const MAXRADIUS = 50;
const MINSPEED = 1;
var MAX =10;
let canvas = document.querySelector('canvas')
canvas.width = fullwidth;
canvas.height = fullheigh;
shapeArr = [];
let c = canvas.getContext('2d')
function Shape(x,y,dy,radius){
    this.x = x;
    this.y = y;
    this.dy = dy;
    this.radius = radius;
    this.color = "#000";
    var shape = Math.floor(Math.random() * Math.floor(3));
    this.render = function () {
      c.beginPath();
      if(shape == 0) {
          // circle
          c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
          c.fillStyle = this.color;
          c.stroke();
      }
      if(shape == 1) {
          // rectangle
          c.strokeRect(this.x,this.y,this.radius, this.radius);
      }

      if(shape == 2) {
          c.moveTo(this.x + 5, this.y);
          c.lineTo(this.x, this.y + 10);
          c.lineTo(this.x + 10, this.y + 10);
          c.lineTo(this.x + 5, this.y);
          c.stroke();

      }

      // c.lineWidth = 5;
      // c.stroke();
      this.move();
    }
    this.move = function() {
        if(this.y > fullheigh) {
            this.y = 0;
            this.x += 1
        }
        this.y += this.dy;
    }
}
function init() {
    shapeArr = [];
    for(let i = 0; i < MAX; i++) {
        var x = Math.random()*innerWidth;
        var y = Math.random()*innerHeight;
        var dy = (Math.random()) * MAXSPEED + MINSPEED;
        var radius = (Math.random() * 10) + 5; 
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