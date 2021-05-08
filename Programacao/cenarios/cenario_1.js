var canvas = document.querySelector('canvas');
canvas.width = 1350;
canvas.height = 610;
var c = canvas.getContext('2d');

var imgBackground = new addImagem("sprites_cenario/BG.png", 0, 0, canvas.width, canvas.height);

var plat1 = new addImagem("sprites_cenario/14.png",0,322,64,64)
var plat2 = new addImagem("sprites_cenario/14.png",64,322,64,64)
var plat_f = new addImagem("sprites_cenario/15.png",128,322,64,64)

var chao1 = new addImagem("sprites_cenario/1.png",256,482,128,128)
var chao2 = new addImagem("sprites_cenario/2.png",384,482,128,128)
var chao3 = new addImagem("sprites_cenario/3.png",512,482,128,128)
var chao4 = new addImagem("sprites_cenario/1.png",1280,482,128,128)

var pico1 = new addImagem("sprites_cenario/9.png",384,288,128,128)
var pico2 = new addImagem("sprites_cenario/5.png",384,160,128,128)
var pico3 = new addImagem("sprites_cenario/2.png",384,32,128,128)

var esp1 = new addImagem("sprites_cenario/Spike.png",640,482,128,128)
var esp2 = new addImagem("sprites_cenario/Spike.png",768,482,128,128)
var esp3 = new addImagem("sprites_cenario/Spike.png",896,482,128,128)
var esp4 = new addImagem("sprites_cenario/Spike.png",1024,482,128,128)
var esp5 = new addImagem("sprites_cenario/Spike.png",1152,482,128,128)
var esp6 = new addImagem("sprites_cenario/Spike.png",960,401,64,64)


var plat3 = new addImagem("sprites_cenario/plat.png",640,322,192,64)


var serra1 = new addImagem("sprites_cenario/Saw.png",910,194,128,128)
var serra2 = new addImagem("sprites_cenario/Saw.png",910,66,128,128)

var plat6 = new addImagem("sprites_cenario/13.png",864,465,64,64)
var plat7 = new addImagem("sprites_cenario/14.png",928,465,64,64)
var plat8 = new addImagem("sprites_cenario/14.png",992,465,64,64)
var plat9 = new addImagem("sprites_cenario/15.png",1056,465,64,64)


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
    plat1.update();
    plat2.update();
    plat_f.update();
    plat3.update();
   
    plat6.update();
    plat7.update();
    plat8.update();
    plat9.update();

    chao1.update();
    chao2.update();
    chao3.update();
    chao4.update();

    pico1.update();
    pico2.update();
    pico3.update();

    esp1.update();
    esp2.update();
    esp3.update();
    esp4.update();
    esp5.update();
    esp6.update();

    serra1.update();
    serra2.update();


}
animate();