class Cloud extends MovableObjects{

y = 0;
width = 500;
height = 250;


    constructor(path){
        super().loadImage(path);
        this.x = 100 + Math.random() * 500;
    }
}