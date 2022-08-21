class MovableObjects{
    x;
    y;
    img;
    width;
    height;

    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }

    moverRight(){
        console.log('moves right');
    }

    moveLeft(){
        console.log('moves left');
    }
}