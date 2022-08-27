class Character extends MovableObjects {
    imagesIdle = [
        '../img/2_character_pepe/1_idle/idle/I-1.png',
        '../img/2_character_pepe/1_idle/idle/I-2.png',
        '../img/2_character_pepe/1_idle/idle/I-3.png',
        '../img/2_character_pepe/1_idle/idle/I-4.png',
        '../img/2_character_pepe/1_idle/idle/I-5.png',
        '../img/2_character_pepe/1_idle/idle/I-6.png',
        '../img/2_character_pepe/1_idle/idle/I-7.png',
        '../img/2_character_pepe/1_idle/idle/I-8.png',
        '../img/2_character_pepe/1_idle/idle/I-9.png',
        '../img/2_character_pepe/1_idle/idle/I-10.png'
    ];
    imagesWalking = [
        '../img/2_character_pepe/2_walk/W-21.png',
        '../img/2_character_pepe/2_walk/W-22.png',
        '../img/2_character_pepe/2_walk/W-23.png',
        '../img/2_character_pepe/2_walk/W-24.png',
        '../img/2_character_pepe/2_walk/W-25.png',
        '../img/2_character_pepe/2_walk/W-26.png',
    ];
    imagesJump = [
        '../img/2_character_pepe/3_jump/J-31.png',
        '../img/2_character_pepe/3_jump/J-32.png',
        '../img/2_character_pepe/3_jump/J-33.png',
        '../img/2_character_pepe/3_jump/J-34.png',
        '../img/2_character_pepe/3_jump/J-35.png',
        '../img/2_character_pepe/3_jump/J-36.png',
        '../img/2_character_pepe/3_jump/J-37.png',
        '../img/2_character_pepe/3_jump/J-38.png',
        '../img/2_character_pepe/3_jump/J-39.png',
    ];
    imagesHurt = [
        '../img/2_character_pepe/4_hurt/H-41.png',
        '../img/2_character_pepe/4_hurt/H-42.png',
        '../img/2_character_pepe/4_hurt/H-43.png',
    ];
    imagesDead = [
        '../img/2_character_pepe/5_dead/D-51.png',
        '../img/2_character_pepe/5_dead/D-52.png',
        '../img/2_character_pepe/5_dead/D-53.png',
        '../img/2_character_pepe/5_dead/D-54.png',
        '../img/2_character_pepe/5_dead/D-55.png',
        '../img/2_character_pepe/5_dead/D-56.png',
        '../img/2_character_pepe/5_dead/D-57.png',
    ];
    world;
    speed = 5;

    constructor() {
        super().loadImage('../../img/2_character_pepe/1_idle/idle/I-1.png');
        this.loadAllImages();
        this.x = 50;
        this.y = 170;
        this.width = 140;
        this.height = 250;
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

    animateWalkingImagesRight() {
        let i = this.currentImage % this.imagesWalking.length;
        let path = this.imagesWalking[i];
        this.img.src = this.imageCache[path];
        this.currentImage++;
    }

    animateWalkingImagesLeft() {
        let i = this.currentImage % this.imagesWalking.length;
        let path = this.imagesWalking[i];
        this.img.src = this.imageCache[path];
        this.currentImage++;
    }

    animateIdleImages() {
        let i = this.currentImageIdle % this.imagesIdle.length;
        let path = this.imagesIdle[i];
        this.img.src = this.imageCache[path];
        this.currentImageIdle++;
    }

    loadAllImages() {
        this.loadImages(this.imagesIdle);
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesHurt);
        this.loadImages(this.imagesDead);
        this.loadImages(this.imagesJump);
    }

    checkKeyboardForMoving() {
        switch (true) {
            case this.world.keyboard.right:
                this.x += this.speed;
                this.directionLeft = false;
                break;
            case this.world.keyboard.left:
                this.x -= this.speed;
                this.directionLeft = true;
                break;
            case this.world.keyboard.jump:
                this.y -= this.speed;
                this.directionLeft = false;
                break;
        }
        this.world.camera_x = -this.x;
    }

    checkKeyboardForAnimateImages() {
        switch (true) {
            case this.world.keyboard.right:
                this.animateWalkingImagesRight();
                break;
            case this.world.keyboard.left:
                this.animateWalkingImagesLeft();
                break;
            default:
                this.animateIdleImages();
                break;
        }
    }
}