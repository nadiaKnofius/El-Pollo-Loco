class MovableObjects {
    x;
    y;
    img;
    width;
    height;
    imageCache = {};
    currentImage = 0;
    currentImageIdle = 0;
    speed = 0.15;
    directionLeft = false;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(pathArray) {
        pathArray.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img.src;
        });
    }

    moveRight() {
        console.log('moves right');
    }

    moveLeft() {
        setInterval(() => {
           this.x -= this.speed;
        }, 1000 / 60);
    }
}