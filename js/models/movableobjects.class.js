class MovableObjects {
    x;
    y;
    y_ground;
    img;
    width;
    height;
    imageCache = {};
    currentImage = 0;
    currentImageIdle = 0;
    speed = 0.15;
    directionLeft = false;
    speed_y = 0;
    acceleration = 1;

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

    animateImagesDependingOnAction(imagesArray) {
        let i = this.currentImage % imagesArray.length;
        let path = imagesArray[i];
        this.img.src = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    jump(y_newValue) {
        this.y = y_newValue;
    }

    isAboveGround(start_y) {
        return this.y < start_y;
    }

    applyGravity() {
        setInterval(() => {
            if (this.y < this.y_ground) {
                this.y -= this.speed_y;
                if (this.checkDifferenceYToGroundY()){
                    this.y = this.y_ground;
                }else{
                    this.speed_y -= this.acceleration;
                }
            }
        }, 1000 / 25);
    }

    checkDifferenceYToGroundY() {
       return this.y - (this.speed_y -= this.acceleration) > this.y_ground;
    }
}