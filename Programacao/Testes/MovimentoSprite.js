var canvas = document.querySelector('canvas');
canvas.width = 1350;
canvas.height = 610;
var c = canvas.getContext('2d');
var tecla = [];
var shift;
var tecla_anterior;

window.addEventListener('keydown', function(event) {
tecla = event.key;
shift = event.shiftKey;
tecla_anterior = tecla;
})

window.addEventListener('keyup', function(event) {
tecla = '';
})

var sprites = [
    "parada_d.png",
    "parada_e.png",
    "andar_d.png",
    "andar_e.png",
]

//var imgBackground = new addImagem("sprites_cenario/BG.png", 0, 0, canvas.width, canvas.height);
var Helena = new personagem(sprites[0],390,390,91,133)

function addImagem(src, posX, posY, width, height) {
    this.image = new Image();
    this.image.src = src;
    this.width = width;
    this.height = height;   
    this.posX = posX;
    this.posY = posY;  

    this.update = function() {
      //  c.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }
}

function personagem(src, posX, posY, width, height) {
    this.image = new Image();
    this.image.src = src;
    this.width = width;
    this.height = height;   
    this.posX = posX;
    this.posY = posY;

    this.desenhar = function() {
    c.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }

    this.andar = function () {
        if (tecla == ''){
            this.image.src = sprites[0];
            if ((tecla_anterior == 'a')||(tecla_anterior == 'A')){
                this.image.src = sprites[1];
            }
        }
        else if(shift==true){
        if((tecla=='a') || (tecla=='A')) {
            this.posX = this.posX - 10;
        }
        if((tecla=='d') || (tecla=='D')) {
        this.posX = this.posX + 10;
        }
        }
        else{
        if((tecla=='a') || (tecla=='A')) {
        this.posX = this.posX - 3;
        this.image.src = sprites[3]
        }

        if((tecla=='d') || (tecla=='D')) {
        this.posX = this.posX + 3;
        this.image.src=sprites[2];
        }
        }
    }
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,1350,610);
  //  imgBackground.update();
    Helena.desenhar();
    Helena.andar();
}
animate();