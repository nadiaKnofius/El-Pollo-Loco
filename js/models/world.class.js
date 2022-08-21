class World {

    clouds = [
        new Cloud('../img/5_background/layers/4_clouds/1.png'),
        new Cloud('../img/5_background/layers/4_clouds/1.png')
    ];
    character = new Character('../../img/2_character_pepe/1_idle/idle/I-1.png', 50, 224);
    enemies = [
        new Chicken('../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png'),
        new Chicken('../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png'),
        new Chicken('../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png'),
        new Chicken('../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png'),
    ];
    ctx;
    canvas;
    background = [
        new Background('../img/5_background/layers/3_third_layer/1.png'),
        new Background('../img/5_background/layers/2_second_layer/1.png'),
        new Background('../img/5_background/layers/1_first_layer/1.png')
        
    ];
    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }


    /**
     * calls different draw functions
     * uses callback with requestAnimationFrame
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawBackground();
        this.drawClouds();
        this.drawCharacter();
        this.drawEnemies();
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    drawCharacter() {
        this.addToMap(this.character);
    }

    drawEnemies() {
        this.enemies.forEach(chicken => {
            this.addToMap(chicken);
        })
    }

    drawClouds() {
        this.clouds.forEach(cloud => {
            this.addToMap(cloud);
        })
    }

    drawBackground() {
        this.background.forEach(bg =>{
            this.addToMap(bg);
        })       
    }


    /**
     * draws objects in canvas
     * @param {object} obj 
     */
    addToMap(obj) {
        this.ctx.drawImage(obj.img, obj.x, obj.y, obj.width, obj.height);
    }
}