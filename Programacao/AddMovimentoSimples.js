var canvas = document.querySelector('canvas');
canvas.width = 1350;
canvas.height = 610;
var c = canvas.getContext('2d');
var tecla;
window.addEventListener('keydown', function(event) {
tecla = event.key;
})
var bolinha = new Ball(390,390,10,3,3,0);
function Ball (x,y,radius, color) {

    this.x = x;
    this.y = y;
    this.radius = radius;
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
        if((tecla=='a') || (tecla=='A')) {
            this.x = this.x - 3;
            tecla = '';
            }

        if((tecla=='d') || (tecla=='D')) {
            this.x = this.x + 3;
            tecla = '';
            }
        }
 } 
 function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,1350,610);
    bolinha.desenhar();
    bolinha.andar();
}
animate();