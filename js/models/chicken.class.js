class Chicken extends MovableObjects{
    y = 342;
    width = 70;
    height = 70;
    imagesWalking = [
        '../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        '../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        '../img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];

    constructor(path){
        super().loadImage(path);
        this.loadImages(this.imagesWalking);
        this.x = 200 + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.3;
        this.animateImages();
    }

    animateImages() {
        this.moveLeft();
        setInterval(() => {
            let i = this.currentImage % this.imagesWalking.length;
            let path = this.imagesWalking[i];
            this.img.src = this.imageCache[path];
            this.currentImage++;
        }, 100);
    }
}