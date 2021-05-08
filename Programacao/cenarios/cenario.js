var canvas = document.querySelector('canvas');
canvas.width = 1350;
canvas.height = 610;
var c = canvas.getContext('2d');

var imgBackground = new addImagem("sprites_cenario/BG.png", 0, 0, canvas.width, canvas.height);

var chao = new addImagem("sprites_cenario/chao1.png",0,482,640,128)

var caixa = new addImagem("sprites_cenario/crate.png",574,418,64,64)

var plat = new addImagem("sprites_cenario/plat.png",672,290,192,64)

var pico = new addImagem("sprites_cenario/pico.png",960,96,64,256)

var plat3 = new addImagem("sprites_cenario/13.png",1158,322,64,64)
var plat4 = new addImagem("sprites_cenario/14.png",1222,322,64,64)
var plat_f = new addImagem("sprites_cenario/14.png",1286,322,64,64)

var arv = new addImagem("sprites_cenario/Tree_2.png",320,226,256,256)
var arb = new addImagem("sprites_cenario/Bush (1).png",320,430,106.4,52)

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

    caixa.update();
    arv.update();
    arb.update();

    plat.update();

    pico.update();

    plat3.update();
    plat4.update();
    plat_f.update();

}
animate();
