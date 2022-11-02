class World {
    clouds = level.clouds;
    character = new Character();
    enemies = level.enemies;
    boxes = level.boxes;
    coins = level.coins;
    bottles = level.bottles;
    ctx;
    canvas;
    background = level.background;
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
        this.drawBox();
        this.drawClouds();
        this.drawCharacter();
        this.drawEnemies();
        this.drawCoins();
        this.drawBottles();
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

    drawCoins() {
        this.addObjectsFromArrayToMap(this.coins);  
    }

    drawBottles() {
        this.addObjectsFromArrayToMap(this.bottles);  
    }

    drawClouds() {
        this.addObjectsFromArrayToMap(this.clouds);  
    }

    drawBackground() {
        this.addObjectsFromArrayToMap(this.background);    
    }

    drawBox() {
       this.addBoxesToMap(this.boxes);
    }

    addBoxesToMap(obj){
        obj.forEach(o =>{
            this.drawInMap(o);
        })     
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
        try {
            this.ctx.drawImage(obj.img, obj.x, obj.y, obj.width, obj.height);
        }
        catch(e){
            console.log('could not load image:', obj.img.src);
        }
        if (obj.directionLeft){
            obj.x = obj.x * -1;
            this.ctx.restore();
        }
    }

    drawInMap(obj) {
        this.ctx.fillStyle = obj.color;
        this.ctx.fillRect(obj.x, obj.y, obj.width, obj.height);
    }

    setCharacterWorld() {
        this.character.world = this;
    }
}