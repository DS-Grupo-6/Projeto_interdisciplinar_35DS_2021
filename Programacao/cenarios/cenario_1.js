var canvas = document.querySelector('canvas'); //chama o canvas do html
canvas.width = 1350; //define a largura do canvas
canvas.height = 610; //define o tamanho do canva 
var c = canvas.getContext('2d'); // define o contexto do canvas para 2d

var imgBackground = new addImagem("sprites_cenario/BG.png", 0, 0, canvas.width, canvas.height); //define a imagem de backgraund com o mesmo tamanho do canvas
var sorveteria = new addImagem("sprites_cenario/sorveteria.png",0,148,457,334 ); //coloca o sprite da sorveteria no canva com posições definidadas pelo objeto addImagem
var chao = new addImagem("sprites_cenario/chao1.png",0,482,640,128); //coloca o sprite do chão no canva com posições definidadas pelo objeto addImagem
var caixa = new addImagem("sprites_cenario/crate.png",574,418,64,64); //coloca o sprite da caixa no canva com posições definidadas pelo objeto addImagem
var plat = new addImagem("sprites_cenario/plat.png",672,290,192,64); //coloca o sprite do plataforma1 no canva com posições definidadas pelo objeto addImagem
var pico = new addImagem("sprites_cenario/pico.png",960,96,64,256); //coloca o sprite d "pico" no canva com posições definidadas pelo objeto addImagem
var plat1 = new addImagem("sprites_cenario/plat1.png",1158,322,192,64); //coloca o sprite da plataforma2 no canva com posições definidadas pelo objeto addImagem
var arv = new addImagem("sprites_cenario/Tree_2.png",380,226,256,256); //coloca o sprite da árvore no canva com posições definidadas pelo objeto addImagem
var arb = new addImagem("sprites_cenario/Bush (1).png",380,430,106.4,52); //coloca o sprite do arbusto no canva com posições definidadas pelo objeto addImagem

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

    //usando o método update() do objeto addImagem para desenhar as imagens declaradas acima no canvas
    imgBackground.update();
    sorveteria.update();
    chao.update();
    caixa.update();
    arv.update();
    arb.update();
    plat.update();
    plat1.update();
    pico.update();
}
animate(); //chamando a função animate 
