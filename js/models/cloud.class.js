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
        this.setSpeed();
        this.animateClouds();
    }


    animateClouds(){
        setIntervalIds(this.moveLeft.bind(this), 200);
    }


    setSpeed() {
        this.speed = 6 * Math.random();
    }
}