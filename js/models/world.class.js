class World {

    clouds = [
        new Cloud('../img/5_background/layers/4_clouds/1.png')];
    character = new Character();
    enemies = [
        new Chicken('../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png'),
        new Chicken('../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png'),
        new Chicken('../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png'),
        new Chicken('../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png'),
    ];
    ctx;
    canvas;
    background = [
        new Background('../img/5_background/layers/air.png'),
        new Background('../img/5_background/layers/3_third_layer/1.png'),
        new Background('../img/5_background/layers/2_second_layer/1.png'),
        new Background('../img/5_background/layers/1_first_layer/1.png')
        
    ];
    keyboard;
    camera_x;
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setCharacterWorld();
    }


    /**
     * calls different draw functions
     * uses callback with requestAnimationFrame
     */
    draw() {
        this.clearCanvas();
        this.ctx.translate(this.camera_x, 0);
        this.drawBackground();
        this.drawClouds();
        this.drawCharacter();
        this.drawEnemies();
        this.ctx.translate(-this.camera_x, 0)
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    clearCanvas(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawCharacter() {
        this.addToMap(this.character);
    }

    drawEnemies() {
        this.addObjectsFromArrayToMap(this.enemies);  
    }

    drawClouds() {
        this.addObjectsFromArrayToMap(this.clouds);  
    }

    drawBackground() {
        this.addObjectsFromArrayToMap(this.background);    
    }


    /**
     * calls function addToMap for each object in array 
     * @param {object} obj 
     */
    addObjectsFromArrayToMap(obj){
        obj.forEach(o =>{
            this.addToMap(o);
        })     
    }

    /**
     * draws objects in canvas
     * @param {object} obj 
     */
    addToMap(obj) {
        if (obj.directionLeft){
            this.ctx.save();
            this.ctx.translate(obj.width, 0);
            this.ctx.scale(-1, 1);
            obj.x = obj.x * -1;
        }
        this.ctx.drawImage(obj.img, obj.x, obj.y, obj.width, obj.height);
        if (obj.directionLeft){
            obj.x = obj.x * -1;
            this.ctx.restore();
        }
    }

    setCharacterWorld() {
        this.character.world = this;
    }
}