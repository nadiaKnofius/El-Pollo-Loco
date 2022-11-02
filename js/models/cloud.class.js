class Cloud extends MovableObjects{

y = 0;
width = 500;
height = 250;
imagesCloud = [
    'img/5_background/layers/4_clouds/1.png'
]

    constructor(x){
        super().loadImage(this.imagesCloud[0]);
        this.x = Math.random() * x;
        this.moveLeft();
    }
}