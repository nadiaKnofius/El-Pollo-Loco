class Cloud extends MovableObjects{

y = 0;
width = 500;
height = 250;


    constructor(path){
        super().loadImage(path);
        this.x = Math.random() * 500;
        this.moveLeft();
    }
}