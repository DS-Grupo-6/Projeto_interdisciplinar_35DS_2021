var canvas = document.querySelector('canvas');
canvas.width = 1350;
canvas.height = 610;
var c = canvas.getContext('2d');

var tecla;
var shift;
var tecla_anterior;

var pulando = false;
var gravidade = 2;
var hPulo = 0;
var nPulos = 0;

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
]

window.addEventListener('keydown', function(event) {
tecla = event.key;
shift = event.shiftKey;
tecla_anterior = tecla;
})
window.addEventListener('keyup', function(event) {
    tecla = '';
})

var imgBackground = new addImagem("sprites_cenario/BG.png", 0, 0, canvas.width, canvas.height);
var sorveteria = new addImagem("sprites_cenario/sorveteria.png",0,148,457,334 ); 
var chao = new addImagem("sprites_cenario/chao1.png",0,482,640,128);
var caixa = new addImagem("sprites_cenario/Crate.png",574,418,64,64);
var plat = new addImagem("sprites_cenario/plat.png",672,290,192,64);
var pico = new addImagem("sprites_cenario/pico.png",960,96,64,256);
var plat1 = new addImagem("sprites_cenario/plat1.png",1158,322,192,64);
var arv = new addImagem("sprites_cenario/Tree_2.png",380,226,256,256);
var arb = new addImagem("sprites_cenario/Bush (1).png",380,430,106.4,52)

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
    if(tecla == "K" || tecla == "k"){
        if(quantidadeVidas > 0){
        quantidadeVidas -= 1;

            if(quantidadeVidas == 2){
                requestAnimationFrame(animate);
                c.clearRect( 1150, 60, 50, 50);
                coracao3 = new addImagem("hud_sprites/cora_vazio.png", 1150, 60, 50, 50);
                coracao3.update();
                tecla = ' ';
            }
            else if(quantidadeVidas == 1){
                requestAnimationFrame(animate);
                c.clearRect(1125, 60, 50, 50);
                coracao2 = new addImagem("hud_sprites/cora_vazio.png", 1125, 60, 50, 50);
                coracao2.update();
                tecla = ' ';
            }      
            else if(quantidadeVidas == 0){
                requestAnimationFrame(animate);
                c.clearRect(1100, 60, 50, 50);
                coracao1 = new addImagem("hud_sprites/cora_vazio.png", 1100, 60, 50, 50);
                coracao1.update();
                tecla = ' ';

            }  
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
                requestAnimationFrame(animate);
                c.clearRect(1150, 60, 50, 50);
                coracao3 = new addImagem("hud_sprites/cora_cheio.png", 1150, 60, 50, 50);
                coracao3.update();
                tecla = ' ';
                console.log("Vida:", quantidadeVidas);
            }
            else if(quantidadeVidas == 2){
                requestAnimationFrame(animate);
                c.clearRect(1125, 60, 50, 50);
                coracao2 = new addImagem("hud_sprites/cora_cheio.png", 1125, 60, 50, 50);
                coracao2.update();
                tecla = ' ';
                console.log("Vida:", quantidadeVidas);
            }      
            else if(quantidadeVidas == 1){
                requestAnimationFrame(animate);
                c.clearRect(1100, 60, 50, 50);
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

var objColisao = [chao, caixa, plat, pico, plat1];

var Helena = new personagem(sprites[0],148,356,83,122,3,3,300)

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
function personagem(src, posX, posY, width, height, dy, dx, y) {
    this.image = new Image();
    this.image.src = src;
    this.width = width;
    this.height = height;   
    this.posX = posX;
    this.posY = posY;
    this.y = y;
    this.dx = dx;
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
                if((tecla=='d') || (tecla=='D')) {
                    this.posX = this.posX + 3;
                    this.image.src=sprites[2];
                    }
            }
        }
        colisaoEsquerda = false;
        colisaoDireita = false;
        this.x += this.dx;
        this.dx = 0;
    }

    this.pular = function () {
        if((tecla=='w')||(tecla=='W')){
            if(pulando==false){
                pulando = true;
            }
        }
        if ((pulando==true)&&(colisaoCima==false)){
            pulando = true;
            this.dy = -5;
            hPulo += 1;
            this.image.src = sprites[6]
            if(hPulo >= 30){
                pulando = false;
                hPulo = 0;
            }
        }
        this.posY += gravidade+this.dy; 
        this.dy = 0;
    }

    this.colisao = function(){
        var posicaoX = this.posX;
        var posicaoY = this.posY;
        var largura = this.width;
        var altura = this.height;
        var parametro = 6;
        objColisao.forEach(function(item,indice){
            if((posicaoX+largura >= objColisao[indice].posX) && (posicaoX <= objColisao[indice].posX+objColisao[indice].width) && (posicaoY+altura > objColisao[indice].posY) && (posicaoY+altura <= objColisao[indice].posY+parametro)){
                colisaoChao = true;
                if((indice==6)||(indice==7)||(indice==8)){
                    dano();
                }
            }
            if((posicaoX+largura >= objColisao[indice].posX)&&(posicaoX <= objColisao[indice].posX+parametro)&&(posicaoY+altura > objColisao[indice].posY) && (posicaoY <= objColisao[indice].posY+objColisao[indice].height)){
                colisaoEsquerda = true;
                if((indice==6)||(indice==7)||(indice==8)){
                    dano();
                }
            }
            if((posicaoX <= objColisao[indice].posX+objColisao[indice].width)&&(posicaoX >= objColisao[indice].posX+objColisao[indice].width+parametro)&&(posicaoY+altura > objColisao[indice].posY) && (posicaoY <= objColisao[indice].posY+objColisao[indice].height)){
                colisaoDireita = true;
                if((indice==6)||(indice==7)||(indice==8)){
                    dano();
                }
            }
            if((posicaoX+largura >= objColisao[indice].posX) && (posicaoX <= objColisao[indice].posX+objColisao[indice].width) && (posicaoY < objColisao[indice].posY+objColisao[indice].height)&& (posicaoY >= objColisao[indice].posY+objColisao[indice].height-parametro)){
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
            gravidade = 2;
        }
        colisaoChao = false;
    }
 } 
    
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,1350,610);

    imgBackground.update();
    sorveteria.update();
    chao.update();
    caixa.update();
    arv.update();
    arb.update();
    plat.update();
    plat1.update();
    pico.update();

    coracao1.update();
    coracao2.update();
    coracao3.update();
    moeda.update();
    pocaoCura.update();
    textos();
    moedas();
    dano();
    tomarPocao();
    
    Helena.desenhar();
    Helena.colisao();
    Helena.andar();
    Helena.pular();
}
animate();

