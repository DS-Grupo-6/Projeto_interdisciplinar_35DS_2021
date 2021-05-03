var canvas = document.querySelector('canvas');
canvas.width = 1350;
canvas.height = 610;
var c = canvas.getContext('2d');
var key;
var velocidade = 0;

var keysPressed={};

window.addEventListener('keydown', function (event) {
    keysPressed[event.key] = true;
 });
 
 window.addEventListener('keyup', function (event) {
     delete keysPressed[event.key];
 });
 
 window.addEventListener('keydown', function (event) {
    keysPressed[event.key] = true;
 });
  
 window.addEventListener('keyup', function (event) {
    delete keysPressed[event.key];
});

var bolinha = new Ball(390,390,10,3,3,0);
function Ball (x,y,radius, dx, dy, color) {

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.color = color;

    this.desenhar = function (){
        c.beginPath();
        c.strokeStyle = '#00AA00';
        c.fillStyle = this.color;
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        c.stroke();
        c.fill();
    }
    
        this.andar = function () {
            if((keysPressed['a']) || (keysPressed['A'])) {
                velocidade = - 3;
                this.x = this.x + velocidade; 
            }
            if((keysPressed['d']) || (keysPressed['D'])) {
                velocidade = 3;
                this.x = this.x + velocidade; 
            }
            if(keysPressed['Shift']) {
                velocidade *= 2;
                this.x = this.x + velocidade; 
            }
            velocidade = 0;    
        }
        
    this.desenhar();
 }
 function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,1350,610);
    bolinha.desenhar();
    bolinha.andar();
}
animate();