class Background extends MovableObjects{
    y = 0;
    imagesBackground = [
        'img/5_background/layers/air.png',
        'img/5_background/layers/3_third_layer/1.png',
        'img/5_background/layers/2_second_layer/1.png',
        'img/5_background/layers/1_first_layer/1.png'
    ]

    constructor(path, x){
        let canvas = document.getElementById('canvas');
        super().loadImage(path); 
        this.loadImages(this.imagesBackground);
        this.width = canvas.width;
        this.height = canvas.height;
        this.x = x;
    }
}