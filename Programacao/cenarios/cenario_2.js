var canvas = document.querySelector('canvas'); //chama o canvas do html
canvas.width = 1350; //define a largura do canvas
canvas.height = 610; //define o tamanho do canva 
var c = canvas.getContext('2d'); // define o contexto do canvas para 2d

var imgBackground = new addImagem("sprites_cenario/BG.png", 0, 0, canvas.width, canvas.height); //define a imagem de backgraund com o mesmo tamanho do canvas

var chao1 = new addImagem("sprites_cenario/chao2.png",256,486,384,128); //coloca o sprite da primeira parte do chão no canva com posições definidadas pelo objeto addImagem
var chao2 = new addImagem("sprites_cenario/1.png",1280,482,128,128); //coloca o sprite da segunda parte do chão no canva com posições definidadas pelo objeto addImagem

var plat1 = new addImagem("sprites_cenario/plat2.png",-1,322,192,64); //coloca o sprite da primeira plataforma no canva com posições definidadas pelo objeto addImagem
var plat2 = new addImagem("sprites_cenario/plat.png",640,322,192,64); //coloca o sprite da segunda plataforma no canva com posições definidadas pelo objeto addImagem
var plat3 = new addImagem("sprites_cenario/plat3.png",768,460,406.4,78.4); //coloca o sprite da terceira plataforma no canva com posições definidadas pelo objeto addImagem

var pico = new addImagem("sprites_cenario/pico1.png",384,32,128,384); //coloca o sprite do "pico" no canva com posições definidadas pelo objeto addImagem

var esp1 = new addImagem("sprites_cenario/Spike1.png",640,526,640,88); //coloca o sprite do primeiro espinho no canva com posições definidadas pelo objeto addImagem
var esp2 = new addImagem("sprites_cenario/Spike.png",938,401,64,64); //coloca o sprite do segundo espinho no canva com posições definidadas pelo objeto addImagem

var serra1 = new addImagem("sprites_cenario/Saw.png",910,194,128,128); //coloca o sprite da primeira serra no canva com posições definidadas pelo objeto addImagem
var serra2 = new addImagem("sprites_cenario/Saw.png",910,66,128,128); //coloca o sprite da primeira serra no canva com posições definidadas pelo objeto addImagem

var ObColisao2 = [chao1, chao2, plat1, plat2, plat3, pico, esp1, esp2, serra1, serra2]; //varável que armazena em um array todas as variáveis de sprite declaradas acima, essas variáveis representam objetos com colisão


function addImagem(src, posX, posY, width, height) { //objeto que facilita a adição de imagens no canva
    this.image = new Image();
    this.image.src = src;
    this.width = width;
    this.height = height;   
    this.posX = posX;
    this.posY = posY;  

    this.update = function() { //função de define a posição da imagem no canva
        c.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }
}

function animate(){ //função que desenha no canva
    requestAnimationFrame(animate);
    c.clearRect(0,0,1350,610);

    //usando o método update() do objeto addImagem para desenhar as imagens no canvas
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
animate(); //chamando a função animate