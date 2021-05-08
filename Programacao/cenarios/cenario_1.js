var canvas = document.querySelector('canvas');
canvas.width = 1350;
canvas.height = 610;
var c = canvas.getContext('2d');

var imgBackground = new addImagem("sprites_cenario/BG.png", 0, 0, canvas.width, canvas.height);

var chao1 = new addImagem("sprites_cenario/chao2.png",256,486,384,128)
var chao2 = new addImagem("sprites_cenario/1.png",1280,482,128,128)

var plat1 = new addImagem("sprites_cenario/plat2.png",-1,322,192,64)
var plat2 = new addImagem("sprites_cenario/plat.png",640,322,192,64)
var plat3 = new addImagem("sprites_cenario/plat3.png",768,460,406.4,78.4)

var pico = new addImagem("sprites_cenario/pico1.png",384,32,128,384)

var esp1 = new addImagem("sprites_cenario/Spike1.png",640,526,640,88)
var esp2 = new addImagem("sprites_cenario/Spike.png",938,401,64,64)

var serra1 = new addImagem("sprites_cenario/Saw.png",910,194,128,128)
var serra2 = new addImagem("sprites_cenario/Saw.png",910,66,128,128)


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

    chao1.update();
    chao2.update();
    pico.update();

    plat1.update();
    plat2.update();
    plat3.update();

    esp1.update();
    esp2.update();

    serra1.update();
    serra2.update();


}
animate();