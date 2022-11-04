class Coin extends MovableObjects {
    images = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png',
    ]
    x = 200;
    y = 180;
    height = 80;
    width = 80;


    constructor(x, y) {
        super().loadImage('img/8_coin/coin_1.png');
        this.loadImages(this.images);
        this.x = x;
        this.y = y;
        this.animateImages();
    }

    animateImages() {
        setIntervalIds(this.animateImagesDependingOnAction(this.images), 100);
    }
}
