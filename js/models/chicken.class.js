class Chicken extends MovableObjects {
    y = 342;
    width = 70;
    height = 70;
    imagesWalking = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];
    imagesDead = ['img/3_enemies_chicken/chicken_normal/2_dead/dead.png'];

    constructor(x) {
        super().loadImage(this.imagesWalking[0]);
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesDead);
        this.x = 200 + Math.random() * x;
        this.speed = 0.15 + Math.random() * 0.3;
        this.animateImages();
    }

    animateImages() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        setInterval(() => {
            this.animateImagesDependingOnAction(this.imagesWalking);
        }, 100);
    }
}