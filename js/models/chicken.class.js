class Chicken extends MovableObjects {
    y = 342;
    width = 70;
    height = 70;
    energy = 100;
    type;
    imagesWalking = {
        'normal': [
            'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
            'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
            'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
        ],
        'small': [
            'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
            'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
            'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
        ]
    };
    imagesDead = {
        'normal': ['img/3_enemies_chicken/chicken_normal/2_dead/dead.png'],
        'small': ['img/3_enemies_chicken/chicken_small/2_dead/dead.png']};

    audio = {
        audioChicken: new Audio('audio/chicken.mp3')
    };    

    constructor(x, type) {
        super().loadImage(this.imagesWalking[type][0]);
        this.loadImages(this.imagesWalking[type]);
        this.loadImages(this.imagesDead[type]);
        this.type = type;
        this.x = 200 + Math.random() * x;
        this.speed = 0.15 + Math.random() * 0.3;
        this.setValuesOfSmallChicken();
        this.animate();
    }

    animate() {
        setIntervalIds(this.moveLeft.bind(this), 1000/60);
        setIntervalIds(this.animateSound.bind(this), 200);
        setIntervalIds(this.isChickenAlive.bind(this), 100);
    }


    isChickenAlive(){
        if(!this.isDead(this)) this.animateImagesDependingOnAction(this.imagesWalking[this.type]);
        if(this.isDead(this)) this.animateImagesDependingOnAction(this.imagesDead[this.type]);
    }


    animateSound() {
        if(this.isColliding(world.character)){
            this.playSound(this.audio.audioChicken, 0.3);
        }
    }
    

    setValuesOfSmallChicken() {
        if(this.type == 'small'){
            this.width = 50;
            this.height = 50;
            this.y = this.y + 20;
            this.speed = 1.8;
        }
    }
}