var canvas = document.querySelector('canvas'); //chama o canvas do html
canvas.width = 1350; //define largura canvas
canvas.height = 610; //define tamanho canvas
var c = canvas.getContext('2d'); //define o contexto do canvas para 2d
var cenario = 1; //controle dos cenários

const botaoSom = document.querySelector('button') //adiciona o audio
botaoSom.addEventListener('click', function(){
    const audio = document.querySelector('audio')
    audio.play()
})

var tecla; //define variaveis captura teclas
var shift; 
var tecla_anterior;

var pulando = false; //define variavel controle pulo
var gravidade = 3; //define variavel gravidade
var hPulo = 0; //define variavel controle altura pulo

var colisaoChao = false; //define variaveis colisoes
var colisaoCima = false;
var colisaoEsquerda = false;
var colisaoDireita = false;

var quantidadeMoedas = 1; //define variaveis quantidade moedas, poções e vidas
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
]; //define array sprites Helena

var sorveteria; //define variaveis obejtos cenario
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
//coloca imagem background no canva com posições definidadas pelo addImagem
window.addEventListener('keydown', function(event) { //verifica teclas pressionadas
tecla = event.key;
shift = event.shiftKey;
tecla_anterior = tecla;
})
window.addEventListener('keyup', function(event) { //verifica teclas soltas
    tecla = '';
})

function apareceCenario(){ //controla imagem que devem aparecer em cada cenario
    if (cenario == 1){
        sorveteria = new addImagem("sprites_cenario/sorveteria.png",-50,110,587,441 );//coloca o sprite da sorveteria no canva com posições definidadas pelo objeto addImagem
        chao = new addImagem("sprites_cenario/chao1.png",0,482,640,128);//coloca o sprite do chão no canva com posições definidadas pelo objeto addImagem
        caixa = new addImagem("sprites_cenario/Crate.png",574,418,64,64);//coloca o sprite da caixa no canva com posições definidadas pelo objeto addImagem
        plat = new addImagem("sprites_cenario/plat.png",672,290,192,64);//coloca o sprite da plataforma1 no canva com posições definidadas pelo objeto addImagem
        plat1 = new addImagem("sprites_cenario/plat1.png",1158,322,192,64);//coloca o sprite da plataforma2 no canva com posições definidadas pelo objeto addImagem
        pico = new addImagem("sprites_cenario/pico.png",960,150,64,256);//coloca o sprite do "pico" no canva com posições definidadas pelo objeto addImagem
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


var coracao1 = new addImagem("hud_sprites/cora_cheio.png", 1100, 60, 50, 50); //adiciona imagens do hud (corações, poção e moeda)
var coracao2 = new addImagem("hud_sprites/cora_cheio.png", 1125, 60, 50, 50);
var coracao3 = new addImagem("hud_sprites/cora_cheio.png", 1150, 60, 50, 50);
var pocaoCura = new addImagem("hud_sprites/pocao.png", 1190, 51, 80, 80);
var moeda= new addImagem("hud_sprites/moeda.png", 1087, 20, 80, 80);

function textos(){ //adiciona textos do hud (quantidade moedas e poções) e de fim de jogo
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
    //representa tomar dano, alterando sprites de vida
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
            }
            else if(quantidadeVidas == 2){
                coracao2 = new addImagem("hud_sprites/cora_cheio.png", 1125, 60, 50, 50);
                coracao2.update();
                tecla = ' ';
            }      
            else if(quantidadeVidas == 1){
                coracao1 = new addImagem("hud_sprites/cora_cheio.png", 1100, 60, 50, 50);
                coracao1.update();
                tecla = ' ';
            } 
          }
        }
        //representa pegar poção de cura
        if(tecla == "P" || tecla == "p"){
            quantidadePocoes += 1;
                
            tecla = ' ';
        }
}

function addImagem(src, posX, posY, width, height) { //função para adicionar imagens
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

var Helena = new personagem(sprites[0],148,356,83,122,0); //criacao personagem Helena

function personagem(src, posX, posY, width, height,dy) { //funcao criaao personagens
    this.image = new Image(); //define parametros personagem
    this.image.src = src;
    this.width = width;
    this.height = height;   
    this.posX = posX;
    this.posY = posY;
    this.dy = dy;

    this.desenhar = function() { //adiciona imagem personagem na tela
    c.drawImage(this.image, this.posX, this.posY, this.width, this.height,);
    }

    this.andar = function () { //controla movimentos esquerda e direita personagem
        if (tecla == ''){ //altera sprite parada em relação ao movimento anterior (esquerda ou direita)
            this.image.src = sprites[0];
            if ((tecla_anterior == 'a')||(tecla_anterior == 'A')){
                this.image.src = sprites[1];
            }
            if ((tecla_anterior == 'w')||(tecla_anterior == 'W')){
                this.image.src = sprites[7];
            }
        }
        if(shift==true){ //verifica se shift está ativado, para movimento de corrida
            if(colisaoDireita==false){ //se não tiver colisão, corre para esquerda ou direita
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
        else{ //movimento de andar
            if(colisaoDireita==false){//se não tiver colisão, anda para esquerda ou direita
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

    this.pular = function () { //controla pulo personagem
        if((tecla=='w')||(tecla=='W')){ 
            if(pulando==false){ //se não estiver pulando, "ativa" o pulo
                pulando = true;
            }
        }
        if ((pulando==true)&&(colisaoCima==false)){ //se não houver colisão e houver pulo ativado, pula 
            pulando = true;
            this.dy = -7;
            hPulo += 1;
            this.image.src = sprites[6]
            if(hPulo >= 42.85){ //verifica se atingiu altura máx de pulo
                pulando = false; //para de pular
                hPulo = 0;
            }
        }
        this.posY += gravidade+this.dy; //adiciona gravidade ao movimento no eixo Y
        this.dy = 0;
        colisaoCima = false;
    }

    this.colisao = function(){ //verifica colisões
        var posicaoX = this.posX; //criação de variáveis para utilização no forEach
        var posicaoY = this.posY;
        var largura = this.width;
        var altura = this.height;
        var parametro = 7; //parametro de colisao (quanto a mais verifica de colisão)
        objColisao.forEach(function(item,indice){ //verifica colisao com todos os objetos que podem ter colisao
            if((posicaoX+largura >= objColisao[indice].posX) && (posicaoX <= objColisao[indice].posX+objColisao[indice].width) && (posicaoY+altura > objColisao[indice].posY) && (posicaoY+altura <= objColisao[indice].posY+parametro)){
                colisaoChao = true; //verifica se há colisão com o chão
                if(((indice==6)||(indice==7)||(indice==8))&&(cenario==2)){ //verifica se a colisao ocorreu com objetos que dão dano (serras e espinhos)
                    dano(); //chama a função de dano
                }
            }
            if((posicaoX+largura >= objColisao[indice].posX) && (posicaoX <= objColisao[indice].posX+parametro) && (posicaoY+altura > objColisao[indice].posY) && (posicaoY <= objColisao[indice].posY+objColisao[indice].height)||((posicaoX+largura>=canvas.width)&&(cenario==3))){
                colisaoEsquerda = true;
                if(((indice==6)||(indice==7)||(indice==8))&&(cenario==2)){ //verifica se a colisao ocorreu com objetos que dão dano (serras e espinhos)
                    dano(); //chama a função de dano
                }
            }
            if((posicaoX <= objColisao[indice].posX+objColisao[indice].width)&&(posicaoX >= objColisao[indice].posX+objColisao[indice].width-parametro)&&(posicaoY+altura > objColisao[indice].posY) && (posicaoY <= objColisao[indice].posY+objColisao[indice].height)||((posicaoX<=0)&&(cenario==1))){
                colisaoDireita = true;
                if(((indice==6)||(indice==7)||(indice==8))&&(cenario==2)){ //verifica se a colisao ocorreu com objetos que dão dano (serras e espinhos)
                    dano(); //chama a função de dano
                }
            }
            if((posicaoX+largura >= objColisao[indice].posX) && (posicaoX <= objColisao[indice].posX+objColisao[indice].width) && (posicaoY < objColisao[indice].posY+objColisao[indice].height)&& (posicaoY >= objColisao[indice].posY+objColisao[indice].height-parametro)||(posicaoY<=0)){
                colisaoCima = true;
                if(((indice==6)||(indice==7)||(indice==8))&&(cenario==2)){ //verifica se a colisao ocorreu com objetos que dão dano (serras e espinhos)
                    dano(); //chama a função de dano
                }
            }
        });
        if(colisaoChao == true){ //verifica se houve colisao com o chao
            gravidade = 0; //não há influencia da gravidade
        }
        else{
            gravidade = 3; //gravidade influencia
        }
        colisaoChao = false;
    }
    this.trocaCenario = function(){ //altera os cenarios de acordo com a movimentação
        if((cenario == 1)&&(this.posX>=canvas.width)){ //sai do cenario 1 se passar pelo lado direito da tela
            cenario = 2; //passa para o cenário 2
            this.posX = 0;
        }
        if((cenario == 2)&&(this.posX>=canvas.width)){ //sai do cenario 2 se passar pelo lado direito da tela
            cenario = 3; //passa para o cenário 3
            this.posX = 0;
        }
        if(((cenario == 2)&&(this.posX+this.width<=0))){ //sai do cenario 2 se passar pelo lado esquerdo da tela
            cenario = 1; //passa para o cenário 1
            this.posX = canvas.width-this.width;
        }
        if(((cenario == 3)&&(this.posX+this.width<=0))){ //sai do cenario 3 se passar pelo lado esquerdo da tela
            cenario = 2; //passa para o cenário 2
            this.posX = canvas.width-this.width;
        }
    }
 } 
    
function animate(){ //funcao de animação
    requestAnimationFrame(animate); //chama novamente a função de animação
    c.clearRect(0,0,1350,610); //apaga os objetos 
    apareceCenario(); //apresenta os objetos do cenário
    imgBackground.update(); //apresenta o background
    if(cenario == 1){ //chama as funções que apresentam os objetos do cenário 1
        sorveteria.update();
        chao.update();
        caixa.update();
        arv.update();
        arb.update();
        plat.update();
        plat1.update();
        pico.update();
    }
    if(cenario == 2){ //chama as funções que apresentam os objetos do cenário 2
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
    if(cenario == 3){ //chama as funções que apresentam os objetos do cenário 3
        chao.update();
        arv1.update();
        arv2.update();
        arb1.update();
        arb2.update();
        arb3.update();
        pedra.update();
        placa.update();
    }

    coracao1.update(); //chama as funções que apresentam os objetos do hud
    coracao2.update();
    coracao3.update();
    moeda.update();
    pocaoCura.update();
    textos(); //chama as funções que apresentam os textos do hud
    moedas(); //chama a função que controla as moedas
    tomarPocao(); //chama a função que controla o uso de poção
    
    Helena.desenhar(); //chama a função que apresenta a Helena
    Helena.colisao(); //chama a função que verifica a colisao da Helena
    Helena.andar(); //chama a função que realiza os movimentos da Helena
    Helena.pular(); //chama a função que realiza o pulo da Helena
    Helena.trocaCenario(); //chama a função que troca o cenario
}
animate(); //chama a função de animação