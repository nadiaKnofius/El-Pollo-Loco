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
        // console.log('Character:', this.x, this.width, this.y, this.height);
        // console.log('Object:', obj.x, obj.width, obj.y, obj.height);
        // if(this.x + this.width - this.offsetX > obj.x &&
        //     this.y + this.height + this.offsetY > obj.y &&
        //     this.x < obj.x &&
        //     this.y + this.offsetY < obj.y + obj.height) debugger;
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


    checkEnergyForStatusBar(obj, statusBar, i) {
        switch (true) {
            case obj.energy > 80:
                obj.setStatusBarValue(statusBar, 100, obj, i);
                break;
            case obj.energy <= 80 && obj.energy >= 60:
                obj.setStatusBarValue(statusBar, 80, obj, i);
                break;
            case obj.energy < 60 && obj.energy >= 40:
                obj.setStatusBarValue(statusBar, 60, obj, i);
                break;
            case obj.energy < 40 && obj.energy >= 20:
                obj.setStatusBarValue(statusBar, 40, obj, i);
                break;
            case obj.energy < 20 && obj.energy > 0:
                obj.setStatusBarValue(statusBar, 20, obj, i);
                break;
            case obj.energy <= 0:
                obj.setStatusBarValue(statusBar, 0, obj, i);
        }
    }


    checkValueOfStatusBar(obj, statusBar, i) {
        switch (true) {
            case statusBar.value == 100:
                obj.setStatusBarValue(statusBar, 100, obj, i);
                break;
            case statusBar.value == 80:
                obj.setStatusBarValue(statusBar, 80, obj, i);
                break;
            case statusBar.value == 60:
                obj.setStatusBarValue(statusBar, 60, obj, i);
                break;
            case statusBar.value == 40:
                obj.setStatusBarValue(statusBar, 40, obj, i);
                break;
            case statusBar.value == 20:
                obj.setStatusBarValue(statusBar, 20, obj, i);
                break;
            case statusBar.value == 0:
                obj.setStatusBarValue(statusBar, 0, obj, i);
        }
    }



    setStatusBarValue(statusBar, statusBarValue, obj, i) {
        statusBar.value = statusBarValue;
        obj.setStatusBarImage(statusBar, obj, i);
    }

    setStatusBarImage(statusBar, obj, i) {
        let index;
        if (statusBar.type == 'health') index = 2;
        if (statusBar.type == 'coin') {
            index = 1;
            if (statusBar.value < 100) obj.deleteObjFromArray(statusBar, i, world.coins, obj, obj.audio.audioCoins);
        }
        if (statusBar.type == 'bottle') {
            index = 3;
            if (statusBar.value < 100) obj.deleteObjFromArray(statusBar, i, world.bottles, obj, obj.audio.audioBottle);
        }
        statusBar.img.src = `img/7_statusbars/1_statusbar/${index}_statusbar_${statusBar.type}/green/${statusBar.value}.png`;
    }


    deleteObjFromArray(statusBar, i, objArray, character, audioObj) {
        statusBar.value += 20;
        objArray.splice(i, 1);
        character.playSound(audioObj, 0.3);
    }


    setStatusBar(obj, collidingObj, i) {
        obj.statusBars.forEach(statusBar => {
            if (statusBar.type == 'health' && Chicken.prototype.isPrototypeOf(collidingObj)) obj.character.checkEnergyForStatusBar(obj.character, statusBar, i);
            if (statusBar.type == 'coin' && Coin.prototype.isPrototypeOf(collidingObj)) obj.character.checkValueOfStatusBar(obj.character, statusBar, i);
            if (statusBar.type == 'bottle' && Bottle.prototype.isPrototypeOf(collidingObj)) obj.character.checkValueOfStatusBar(obj.character, statusBar, i);
        });
    }

    hit() {
        this.energy -= 2;
        if (this.energy < 0) this.energy = 0;
        this.animateImagesDependingOnAction(this.imagesHurt);
        timeAfterLastAction = new Date().getTime();
    }


    isDead(obj) {
        if (obj.energy <= 0) {
            obj.alive = false;
            return true;
        }
    }

}