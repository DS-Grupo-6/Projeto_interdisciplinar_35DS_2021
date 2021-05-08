var canvas = document.querySelector('canvas');
canvas.width = 1350;
canvas.height = 610;
var c = canvas.getContext('2d');

var imgBackground = new addImagem("sprites_cenario/BG.png", 0, 0, canvas.width, canvas.height);

var chao = new addImagem("sprites_cenario/chao.png",0,482,1350,128)

var arv1 = new addImagem("sprites_cenario/Tree_1.png",348,438,116,44)
var arv2= new addImagem("sprites_cenario/Tree_3.png",604,207,282,275)
var arb1 = new addImagem("sprites_cenario/Bush (3).png",677,435,73,47)
var arb2= new addImagem("sprites_cenario/Bush (4).png",823,435,73,47)
var arb3= new addImagem("sprites_cenario/Bush (4).png",885,435,73,47)
var pedra = new addImagem("sprites_cenario/Stone.png",450,455,45,27)

var placa = new addImagem("sprites_cenario/Sign.png",1100,350,200,200)

function addImagem(src, posX, posY, width, height) {
    this.image = new Image();
    this.image.src = src;
    this.width = width;
    this.height = height;   
    this.posX = posX;
    this.posY = posY;  

    this.update = function() {
        c.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,1350,610);
    imgBackground.update();

    chao.update();

    arv1.update();
    arv2.update();
    arb1.update();
    arb2.update();
    arb3.update();

    pedra.update();
    placa.update();


}
animate();