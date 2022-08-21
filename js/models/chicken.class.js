class Chicken extends MovableObjects{
    y = 342;
    width = 70;
    height = 70;

    constructor(path){
        super().loadImage(path);
        this.x = 200 + Math.random() * 500;
    }


    eat() {

    }
}