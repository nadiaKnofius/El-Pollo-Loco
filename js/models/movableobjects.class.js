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
    offsetX = 0;
    offsetY = 0;
    alive = true;
    energy = 100;
    audio;

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
        this.speed_y = 20;
        this.y = y_newValue;
    }

    isAboveGround() {
        return this.y < this.y_ground;
    }

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speed_y > 0) {
                this.y -= this.speed_y;
                if (this.checkDifferenceYToGroundY()) {
                    this.y = this.y_ground;
                } else {
                    this.speed_y -= this.acceleration;
                }
            }
        }, 1000 / 25);
    }

    checkDifferenceYToGroundY() {
        return this.y - (this.speed_y -= this.acceleration) > this.y_ground;
    }


    isColliding(obj) {
        return this.x + this.width - this.offsetX > obj.x &&
            this.y + this.height + this.offsetY > obj.y &&
            this.x < obj.x &&
            this.y + this.offsetY < obj.y + obj.height
    }


    /**
     * sets volume and plays sound
     * @param {object} audioObj 
     * @param {number} volume //decimal, loudness of sound
     */
    playSound(audioObj, volume) {
        audioObj.volume = volume;
        audioObj.play();
    }


    checkEnergyForStatusBar(obj, statusBar) {
        switch (true) {
            case obj.energy > 80:
                obj.setHealthStatusBar(statusBar, 100);
                break;
            case obj.energy <= 80 && obj.energy >= 60:
                obj.setHealthStatusBar(statusBar, 80);
                break;
            case obj.energy < 60 && obj.energy >= 40:
                obj.setHealthStatusBar(statusBar, 60);
                break;
            case obj.energy < 40 && obj.energy >= 20:
                obj.setHealthStatusBar(statusBar, 40);
                break;
            case obj.energy < 20 && obj.energy > 0:
                obj.setHealthStatusBar(statusBar, 20);
                break;
            case obj.energy <= 0:
                obj.setHealthStatusBar(statusBar, 0);
        }
    }


    setHealthStatusBar(statusBar, statusBarValue) {
        statusBar.value = statusBarValue;
        statusBar.img.src = `img/7_statusbars/1_statusbar/2_statusbar_health/green/${statusBar.value}.png`;
    }


    setStatusBar(obj){
        obj.statusBars.forEach(statusBar => {
            if (statusBar.type == 'health') {
               obj.character.checkEnergyForStatusBar(obj.character, statusBar);
            }
        }); 
    }

    hit() {
        this.energy -= 2;
        if(this.energy < 0) this.energy = 0;
        this.animateImagesDependingOnAction(this.imagesHurt);
        timeAfterLastAction = new Date().getTime();
    }


    isDead(obj){
        if(obj.energy <= 0) {
            obj.alive = false;
            return true;
        }
    }

}