class Bottle extends MovableObjects {
    y = 345;
    width = 50;
    height = 80;
    images = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
    ]


    constructor(path, x) {
        super().loadImage(this.images[0]);
        this.loadImages(this.images);
        this.x = x;
        this.animateImages();
    }

    animateImages() {
        setInterval(() => {
            this.animateImagesDependingOnAction(this.images);
        }, 100);
    }
}