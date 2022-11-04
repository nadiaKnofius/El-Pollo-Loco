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

    audio = {
        audioCoins: new Audio('audio/coin.mp3'),
        audioBottle: new Audio('audio/bottle.mp3'),
        audioWalking: new Audio('audio/walking_2.mp3'),
        audioJumping: new Audio('audio/jump.mp3'),
        audioChicken: new Audio('audio/chicken.mp3')
    }
    world;
    speed = 5;
    y_ground = 170;
    offsetX = 20;
    offsetY = 85;
    energy = 100;
    constructor() {
        super().loadImage(this.imagesIdle[0]);
        this.loadAllImages();
        this.x = 10;
        this.y = this.y_ground;
        this.width = 140;
        this.height = 250;
        this.applyGravity();
        this.animateCharacter();
    }

    animateCharacter() {
        setIntervalIds(this.checkKeyboardForMoving.bind(this), 1000 / 60);
        setIntervalIds(this.checkKeyboardForAnimate.bind(this), 100);
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
            case this.world.keyboard.jump && !this.isAboveGround():
                this.speed_y = 20;
                this.jump(150);
                this.directionLeft = false;
                break;
            case this.world.keyboard.right && this.x <= 2900:
                this.moveRight();
                this.directionLeft = false;
                break;
            case this.world.keyboard.left && this.x >= 2:
                this.moveLeft();
                this.directionLeft = true;
                break;
        }
        this.world.camera_x = -this.x;
    }


    checkKeyboardForAnimate() {
        this.audio.audioWalking.pause();
        switch (true) {
            case this.world.keyboard.right && this.world.keyboard.jump:
                this.animateWalkingrightAndJumping();
                break;
            case this.world.keyboard.left && this.world.keyboard.jump:
                this.animateWalkingLeftAndJumping();
                break;
            case this.isAboveGround() && this.world.keyboard.left:
                this.animateImagesDependingOnAction(this.imagesJumping);
                break;
            case this.isAboveGround() && this.world.keyboard.right:
                this.animateImagesDependingOnAction(this.imagesJumping);
                break;
            case this.world.keyboard.right || this.world.keyboard.left:
                this.animateWalking();
                break;
            case this.isAboveGround() && this.world.keyboard.jump:
                this.animateJumping();
                break;
            case this.standForLongTime():
                this.animateImagesDependingOnAction(this.imagesLongIdle)
                break;
            default:
                this.animateImagesDependingOnAction(this.imagesIdle);
        }
    }

    animateJumping() {
        this.animateImagesDependingOnAction(this.imagesJumping);
        this.playSound(this.audio.audioJumping, 0.1);
    }


    animateWalking() {
        this.animateImagesDependingOnAction(this.imagesWalking);
        this.playSound(this.audio.audioWalking, 1);
    }


    animateWalkingrightAndJumping() {
        this.animateImagesDependingOnAction(this.imagesJumping);
        this.playSound(this.audio.audioJumping, 0.1);
    }


    animateWalkingLeftAndJumping() {
        this.animateImagesDependingOnAction(this.imagesJumping);
        this.playSound(this.audio.audioJumping, 0.1);
    }


    /**
     * compares current time with time stempel in timeAfterLastAction
     * if character does not do anything more than 4 seconds, function returns true
     * @returns true or false
     */
    standForLongTime() {
        let currentTime = new Date().getTime();
        let differenceTime = currentTime - timeAfterLastAction;
        if (differenceTime > 4000) return true;
        return false;
    }


    checkCollisionWithCollectableThings(objectArray, character) {
        objectArray.forEach((obj, i) => {
            if (character.isColliding(obj)) {
                level.statusBars.forEach(statusBar => {
                    if (statusBar.value + 20 <= 100 && statusBar.type == 'bottle') {
                        statusBar.img.src = `img/7_statusbars/1_statusbar/3_statusbar_bottle/green/${statusBar.value}.png`
                        character.playSound(character.audio.audioBottle, 0.3);
                        world.level.bottles.splice(i, 1);
                        statusBar.value += 20;
                    }
                    if (statusBar.value + 20 <= 100 && statusBar.type == 'coin') {
                        statusBar.img.src = `img/7_statusbars/1_statusbar/1_statusbar_coin/green/${statusBar.value}.png`;
                        character.playSound(character.audio.audioCoins, 0.3);
                        world.level.coins.splice(i, 1);
                        statusBar.value += 20;
                    }
                });
            }
        });
    }
}