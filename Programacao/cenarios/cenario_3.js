var canvas = document.querySelector('canvas'); //chama o canvas do html
canvas.width = 1350; //define a largura do canvas
canvas.height = 610; //define o tamanho do canva 
var c = canvas.getContext('2d'); // define o contexto do canvas para 2d

var imgBackground = new addImagem("sprites_cenario/BG.png", 0, 0, canvas.width, canvas.height); //define a imagem de backgraund com o mesmo tamanho do canvas
var chao = new addImagem("sprites_cenario/chao.png",0,482,1350,128); //coloca o sprite do chão no canvas com posições definidadas pelo objeto addImagem
var arv1 = new addImagem("sprites_cenario/Tree_1.png",348,438,116,44); //coloca o sprite da primeira árvore no canva com posições definidadas pelo objeto addImagem
var arv2= new addImagem("sprites_cenario/Tree_3.png",604,207,282,275); //coloca o sprite da segunda árvore no canva com posições definidadas pelo objeto addImagem
var arb1 = new addImagem("sprites_cenario/Bush (3).png",677,435,73,47); //coloca o sprite do primeiro arbusto no canva com posições definidadas pelo objeto addImagem
var arb2= new addImagem("sprites_cenario/Bush (4).png",823,435,73,47); //coloca o sprite do segundo arbusto no canva com posições definidadas pelo objeto addImagem
var arb3= new addImagem("sprites_cenario/Bush (4).png",885,435,73,47); //coloca o sprite do terceiro arbusto no canva com posições definidadas pelo objeto addImagem
var pedra = new addImagem("sprites_cenario/Stone.png",450,455,45,27); //coloca o sprite da pedra no canva com posições definidadas pelo objeto addImagem
var placa = new addImagem("sprites_cenario/Sign.png",1100,350,200,200); //coloca o sprite da placa no canva com posições definidadas pelo objeto addImagem

var objColisao3 = [chao]; //define uma variável que têm um array com as imagens que devem ter colisão

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
    chao.update();
    arv1.update();
    arv2.update();
    arb1.update();
    arb2.update();
    arb3.update();
    pedra.update();
    placa.update();


}
animate(); //chamando a função animate