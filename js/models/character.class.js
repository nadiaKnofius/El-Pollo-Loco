class Character extends MovableObjects {
    imagesIdle = [
        'img/2_character_pepe/1_idle/idle/I-1.png',
        'img/2_character_pepe/1_idle/idle/I-2.png',
        'img/2_character_pepe/1_idle/idle/I-3.png',
        'img/2_character_pepe/1_idle/idle/I-4.png',
        'img/2_character_pepe/1_idle/idle/I-5.png',
        'img/2_character_pepe/1_idle/idle/I-6.png',
        'img/2_character_pepe/1_idle/idle/I-7.png',
        'img/2_character_pepe/1_idle/idle/I-8.png',
        'img/2_character_pepe/1_idle/idle/I-9.png',
        'img/2_character_pepe/1_idle/idle/I-10.png'
    ];
    imagesLongIdle = [
        'img/2_character_pepe/1_idle/long_idle/I-11.png',
        'img/2_character_pepe/1_idle/long_idle/I-12.png',
        'img/2_character_pepe/1_idle/long_idle/I-13.png',
        'img/2_character_pepe/1_idle/long_idle/I-14.png',
        'img/2_character_pepe/1_idle/long_idle/I-15.png',
        'img/2_character_pepe/1_idle/long_idle/I-16.png',
        'img/2_character_pepe/1_idle/long_idle/I-17.png',
        'img/2_character_pepe/1_idle/long_idle/I-18.png',
        'img/2_character_pepe/1_idle/long_idle/I-19.png',
        'img/2_character_pepe/1_idle/long_idle/I-20.png',
    ];
    imagesWalking = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png',
    ];
    imagesJumping = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png',
    ];
    imagesHurt = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png',
    ];
    imagesDead = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png',
    ];
    world;
    speed = 5;
    y_ground = 170;
    constructor() {
        super().loadImage('img/2_character_pepe/1_idle/idle/I-1.png');
        this.loadAllImages();
        this.x = 250;
        this.y = this.y_ground;
        this.width = 140;
        this.height = 250;
        this.applyGravity();
        this.animateImages();
    }

    animateImages() {
        setInterval(() => {
            this.checkKeyboardForMoving();
        }, 1000 / 60);

        setInterval(() => {
            this.checkKeyboardForAnimateImages();
        }, 100);
    }


    loadAllImages() {
        this.loadImages(this.imagesIdle);
        this.loadImages(this.imagesLongIdle);
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesHurt);
        this.loadImages(this.imagesDead);
        this.loadImages(this.imagesJumping);
    }

    checkKeyboardForMoving() {
        switch (true) {
            case this.world.keyboard.right && this.x <= 2900:
                this.moveRight();
                this.directionLeft = false;
                break;
            case this.world.keyboard.left && this.x >= 2:
                this.moveLeft();
                this.directionLeft = true;
                break;
            case this.world.keyboard.jump && !this.isAboveGround():
                this.speed_y = 20;
                this.jump(150);
                console.log(this);
                this.directionLeft = false;
                break;
        }
        this.world.camera_x = -this.x;
    }


    checkKeyboardForAnimateImages() {
        switch (true) {
            case this.world.keyboard.right || this.world.keyboard.left:
                this.animateImagesDependingOnAction(this.imagesWalking);
                break;
            case this.isAboveGround() && this.world.keyboard.jump:
                this.animateImagesDependingOnAction(this.imagesJumping);
                break;
            case this.checkTimeAfterLastAction():
                this.animateImagesDependingOnAction(this.imagesLongIdle)
                break;
            default: 
            this.animateImagesDependingOnAction(this.imagesIdle); 
        }
    }

    checkTimeAfterLastAction() {
        let currentTime = new Date().getTime();
        let differenceTime = currentTime - timeAfterLastAction;
        if (differenceTime > 4000) {
            return true;
        }
    }
}