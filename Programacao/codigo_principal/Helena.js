var canvas = document.querySelector('canvas');
canvas.width = 1350;
canvas.height = 610;
var c = canvas.getContext('2d');
var cenario = 1;

const button = document.querySelector('button')
button.addEventListener('click', function(){
    const audio = document.querySelector('audio')
    audio.play()
    console.log("Tocando")
})

var tecla;
var shift;
var tecla_anterior;

var pulando = false;
var gravidade = 3;
var hPulo = 0;

var colisaoChao = false;
var colisaoCima = false;
var colisaoEsquerda = false;
var colisaoDireita = false;

var quantidadeMoedas = 1;
var quantidadePocoes = 3;
var quantidadeVidas = 3;

var sprites = [
    "sprites_Helena_ex/parada_d.png",
    "sprites_Helena_ex/parada_e.png",
    "sprites_Helena_ex/andar_d.png",
    "sprites_Helena_ex/andar_e.png",
    "sprites_helena_ex/correr_d.png",
    "sprites_helena_ex/correr_e.png",
    "sprites_helena_ex/pulo_1.png",
    "sprites_helena_ex/pulo_2.png",
];

var sorveteria;
var chao;
var chao1;
var chao2;
var caixa;
var plat;
var plat1;
var plat2;
var plat3;
var pico;
var arv;
var arv1;
var arv2;
var arb;
var arb1;
var arb2;
var arb3;
var esp1;
var serra1;
var serra2;
var objColisao;
var imgBackground = new addImagem("sprites_cenario/BG.png", 0, 0, canvas.width, canvas.height);//define a imagem de backgraund com o mesmo tamanho do canvas

window.addEventListener('keydown', function(event) {
tecla = event.key;
shift = event.shiftKey;
tecla_anterior = tecla;
})
window.addEventListener('keyup', function(event) {
    tecla = '';
})

function apareceCenario(){
    if (cenario == 1){
        sorveteria = new addImagem("sprites_cenario/sorveteria.png",0,148,457,334 );//coloca o sprite da sorveteria no canva com posições definidadas pelo objeto addImagem
        chao = new addImagem("sprites_cenario/chao1.png",0,482,640,128);//coloca o sprite do chão no canva com posições definidadas pelo objeto addImagem
        caixa = new addImagem("sprites_cenario/Crate.png",574,418,64,64);//coloca o sprite da caixa no canva com posições definidadas pelo objeto addImagem
        plat = new addImagem("sprites_cenario/plat.png",672,290,192,64);//coloca o sprite da plataforma1 no canva com posições definidadas pelo objeto addImagem
        plat1 = new addImagem("sprites_cenario/plat1.png",1158,322,192,64);//coloca o sprite da plataforma2 no canva com posições definidadas pelo objeto addImagem
        pico = new addImagem("sprites_cenario/pico.png",960,140,64,256);//coloca o sprite do "pico" no canva com posições definidadas pelo objeto addImagem
        arv = new addImagem("sprites_cenario/Tree_2.png",380,226,256,256);//coloca o sprite da árvore no canva com posições definidadas pelo objeto addImagem
        arb = new addImagem("sprites_cenario/Bush (1).png",380,430,106.4,52);//coloca o sprite do arbusto no canva com posições definidadas pelo objeto addImagem
        objColisao = [chao, caixa, plat, pico, plat1];//varável que armazena em um array todas as variáveis de sprite declaradas acima, essas variáveis representam objetos com colisão
    }
    if(cenario == 2){
        chao1 = new addImagem("sprites_cenario/chao2.png",256,486,384,128); //coloca o sprite da primeira parte do chão no canva com posições definidadas pelo objeto addImagem
        chao2 = new addImagem("sprites_cenario/1.png",1280,482,128,128); //coloca o sprite da segunda parte do chão no canva com posições definidadas pelo objeto addImagem
        plat1 = new addImagem("sprites_cenario/plat2.png",-1,322,192,64); //coloca o sprite da primeira plataforma no canva com posições definidadas pelo objeto addImagem
        plat2 = new addImagem("sprites_cenario/plat.png",640,322,192,64); //coloca o sprite da segunda plataforma no canva com posições definidadas pelo objeto addImagem
        plat3 = new addImagem("sprites_cenario/plat3.png",768,460,406.4,78.4); //coloca o sprite da terceira plataforma no canva com posições definidadas pelo objeto addImagem
        pico = new addImagem("sprites_cenario/pico1.png",384,-30,128,384); //coloca o sprite do "pico" no canva com posições definidadas pelo objeto addImagem
        esp1 = new addImagem("sprites_cenario/Spike1.png",640,526,640,88); //coloca o sprite do primeiro espinho no canva com posições definidadas pelo objeto addImagem
        serra1 = new addImagem("sprites_cenario/Saw.png",960,194,128,128); //coloca o sprite da primeira serra no canva com posições definidadas pelo objeto addImagem
        serra2 = new addImagem("sprites_cenario/Saw.png",960,66,128,128); //coloca o sprite da primeira serra no canva com posições definidadas pelo objeto addImagem
        objColisao = [chao1, chao2, plat1, plat2, plat3, pico, esp1, serra1, serra2]; //varável que armazena em um array todas as variáveis de sprite declaradas acima, essas variáveis representam objetos com colisão
    }
    if (cenario == 3){
        chao = new addImagem("sprites_cenario/chao.png",0,482,1350,128); //coloca o sprite do chão no canvas com posições definidadas pelo objeto addImagem
        arv1 = new addImagem("sprites_cenario/Tree_1.png",348,438,116,44); //coloca o sprite da primeira árvore no canva com posições definidadas pelo objeto addImagem
        arv2= new addImagem("sprites_cenario/Tree_3.png",604,207,282,275); //coloca o sprite da segunda árvore no canva com posições definidadas pelo objeto addImagem
        arb1 = new addImagem("sprites_cenario/Bush (3).png",677,435,73,47); //coloca o sprite do primeiro arbusto no canva com posições definidadas pelo objeto addImagem
        arb2= new addImagem("sprites_cenario/Bush (4).png",823,435,73,47); //coloca o sprite do segundo arbusto no canva com posições definidadas pelo objeto addImagem
        arb3= new addImagem("sprites_cenario/Bush (4).png",885,435,73,47); //coloca o sprite do terceiro arbusto no canva com posições definidadas pelo objeto addImagem
        pedra = new addImagem("sprites_cenario/Stone.png",450,455,45,27); //coloca o sprite da pedra no canva com posições definidadas pelo objeto addImagem
        placa = new addImagem("sprites_cenario/Sign.png",1100,350,200,200); //coloca o sprite da placa no canva com posições definidadas pelo objeto addImagem
        objColisao = [chao]; //define uma variável que têm um array com as imagens que devem ter colisão

    }
}


var coracao1 = new addImagem("hud_sprites/cora_cheio.png", 1100, 60, 50, 50);
var coracao2 = new addImagem("hud_sprites/cora_cheio.png", 1125, 60, 50, 50);
var coracao3 = new addImagem("hud_sprites/cora_cheio.png", 1150, 60, 50, 50);
var pocaoCura = new addImagem("hud_sprites/pocao.png", 1190, 51, 80, 80);
var moeda= new addImagem("hud_sprites/moeda.png", 1087, 20, 80, 80);

function textos(){
    c.font = '18px Georgia';
    c.fillText("x" +quantidadeMoedas, 1145, 55);

    c.font = '18px Georgia';
    c.fillText("x" +quantidadePocoes, 1238, 89);  

    if(quantidadeVidas == 0){
        c.font = '30px Georgia';
        c.fillText("GAME OVER", 675, 305);
    }

}
function moedas(){
    //representa pegar moeda
    if(tecla == "I" || tecla == "i"){
        quantidadeMoedas += 1;
        
        tecla = ' ';
    }
    //representa usar moedas
    if(tecla == "J" || tecla == "j"){
        if(quantidadeMoedas >0){
        quantidadeMoedas -= 1;
    
        tecla = ' ';
        }
        }
}

function dano(){
        //representa tomar dano
    if(quantidadeVidas > 0){
        quantidadeVidas -= 1;

        if(quantidadeVidas == 2){
            coracao3 = new addImagem("hud_sprites/cora_vazio.png", 1150, 60, 50, 50);
            coracao3.update();
        }
        else if(quantidadeVidas == 1){
            coracao2 = new addImagem("hud_sprites/cora_vazio.png", 1125, 60, 50, 50);
            coracao2.update();
        }      
        else if(quantidadeVidas == 0){
            coracao1 = new addImagem("hud_sprites/cora_vazio.png", 1100, 60, 50, 50);
            coracao1.update();
        }  
    }
}

function tomarPocao(){
        //representa tomar poção
        if(tecla == "c" || tecla == "C"){
            if(quantidadePocoes >0){
            quantidadePocoes -= 1;
            quantidadeVidas += 1;
            
            tecla = ' ';
            if(quantidadeVidas >= 3){
                coracao3 = new addImagem("hud_sprites/cora_cheio.png", 1150, 60, 50, 50);
                coracao3.update();
                tecla = ' ';
                console.log("Vida:", quantidadeVidas);
            }
            else if(quantidadeVidas == 2){
                coracao2 = new addImagem("hud_sprites/cora_cheio.png", 1125, 60, 50, 50);
                coracao2.update();
                tecla = ' ';
                console.log("Vida:", quantidadeVidas);
            }      
            else if(quantidadeVidas == 1){
                coracao1 = new addImagem("hud_sprites/cora_cheio.png", 1100, 60, 50, 50);
                coracao1.update();
                tecla = ' ';
                console.log("Vida:", quantidadeVidas);
            } 
          }
        }
        //representa pegar poção de cura
        if(tecla == "P" || tecla == "p"){
            quantidadePocoes += 1;
                
            tecla = ' ';
        }
}

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

var Helena = new personagem(sprites[0],148,356,83,122,0)

function personagem(src, posX, posY, width, height,dy) {
    this.image = new Image();
    this.image.src = src;
    this.width = width;
    this.height = height;   
    this.posX = posX;
    this.posY = posY;
    this.dy = dy;

    this.desenhar = function() {
    c.drawImage(this.image, this.posX, this.posY, this.width, this.height,);
    }

    this.andar = function () {
        if (tecla == ''){
            this.image.src = sprites[0];
            if ((tecla_anterior == 'a')||(tecla_anterior == 'A')){
                this.image.src = sprites[1];
            }
            if ((tecla_anterior == 'w')||(tecla_anterior == 'W')){
                this.image.src = sprites[7];
            }
        }
        if(shift==true){
            if(colisaoDireita==false){
                if((tecla=='a') || (tecla=='A')) {
                    this.posX = this.posX - 10;
                    this.image.src = sprites[5] 
                }
            }
            if(colisaoEsquerda==false){
                if((tecla=='d') || (tecla=='D')) {
                    this.posX = this.posX + 10;
                    this.image.src = sprites[4] 
                    }
            }
        }
        else{
            if(colisaoDireita==false){
                if((tecla=='a') || (tecla=='A')) {
                    this.posX = this.posX - 3;
                    this.image.src = sprites[3]
                    }
            }
            if(colisaoEsquerda==false){
                if((tecla == 'd') || (tecla == 'D')) {
                    this.posX = this.posX + 3;
                    this.image.src=sprites[2];
                    }
            }
        }
        colisaoEsquerda = false;
        colisaoDireita = false;
    }

    this.pular = function () {
        if((tecla=='w')||(tecla=='W')){
            if(pulando==false){
                pulando = true;
            }
        }
        if ((pulando==true)&&(colisaoCima==false)){
            pulando = true;
            this.dy = -7;
            hPulo += 1;
            this.image.src = sprites[6]
            if(hPulo >= 42.85){
                pulando = false;
                hPulo = 0;
            }
        }
        this.posY += gravidade+this.dy; 
        this.dy = 0;
        colisaoCima = false;
    }

    this.colisao = function(){
        var posicaoX = this.posX;
        var posicaoY = this.posY;
        var largura = this.width;
        var altura = this.height;
        var parametro = 3;
        objColisao.forEach(function(item,indice){
            if((posicaoX+largura >= objColisao[indice].posX) && (posicaoX <= objColisao[indice].posX+objColisao[indice].width) && (posicaoY+altura > objColisao[indice].posY) && (posicaoY+altura <= objColisao[indice].posY+parametro)){
                colisaoChao = true;
                if((indice==6)||(indice==7)||(indice==8)){
                    dano();
                }
            }
            if((posicaoX+largura >= objColisao[indice].posX) && (posicaoX <= objColisao[indice].posX+parametro) && (posicaoY+altura > objColisao[indice].posY) && (posicaoY <= objColisao[indice].posY+objColisao[indice].height)||((posicaoX+largura>=canvas.width)&&(cenario==3))){
                colisaoEsquerda = true;
                if((indice==6)||(indice==7)||(indice==8)){
                    dano();
                }
            }
            if((posicaoX <= objColisao[indice].posX+objColisao[indice].width)&&(posicaoX >= objColisao[indice].posX+objColisao[indice].width-parametro)&&(posicaoY+altura > objColisao[indice].posY) && (posicaoY <= objColisao[indice].posY+objColisao[indice].height)||((posicaoX<=0)&&(cenario==1))){
                colisaoDireita = true;
                if((indice==6)||(indice==7)||(indice==8)){
                    dano();
                }
            }
            if((posicaoX+largura >= objColisao[indice].posX) && (posicaoX <= objColisao[indice].posX+objColisao[indice].width) && (posicaoY < objColisao[indice].posY+objColisao[indice].height)&& (posicaoY >= objColisao[indice].posY+objColisao[indice].height-parametro)||((posicaoY<=0)&&(indice<6))){
                colisaoCima = true;
                if((indice==6)||(indice==7)||(indice==8)){
                    dano();
                }
            }
        });
        if(colisaoChao == true){
            gravidade = 0;
        }
        else{
            gravidade = 3;
        }
        colisaoChao = false;
    }
    this.trocaCenario = function(){
        if((cenario == 1)&&(this.posX>=canvas.width)){
            cenario = 2;
            this.posX = 0;
        }
        if((cenario == 2)&&(this.posX>=canvas.width)){
            cenario = 3;
            this.posX = 0;
        }
        if(((cenario == 2)&&(this.posX+this.width<=0))){
            cenario = 1;
            this.posX = canvas.width-this.width;
        }
        if(((cenario == 3)&&(this.posX+this.width<=0))){
            cenario = 2;
            this.posX = canvas.width-this.width;
        }
    }
 } 
    
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,1350,610);
    apareceCenario();
    imgBackground.update();
    if(cenario == 1){
        sorveteria.update();
        chao.update();
        caixa.update();
        arv.update();
        arb.update();
        plat.update();
        plat1.update();
        pico.update();
    }
    if(cenario == 2){
        plat1.update();
        plat2.update();
        plat3.update();
        chao1.update();
        chao2.update();
        pico.update();
        esp1.update();
        serra1.update();
        serra2.update();
    }
    if(cenario == 3){
        chao.update();
        arv1.update();
        arv2.update();
        arb1.update();
        arb2.update();
        arb3.update();
        pedra.update();
        placa.update();
    }

    coracao1.update();
    coracao2.update();
    coracao3.update();
    moeda.update();
    pocaoCura.update();
    textos();
    moedas();
    tomarPocao();
    
    Helena.desenhar();
    Helena.colisao();
    Helena.andar();
    Helena.pular();
    Helena.trocaCenario();
}
animate();

function mudaCenario(nCenario){
    cenario = nCenario;
}
