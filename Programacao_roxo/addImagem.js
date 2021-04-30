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