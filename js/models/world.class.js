class World {
    clouds = level.clouds;
    character = new Character();
    statusBars = level.statusBars;
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
        this.checkCollisions();
        this.setCharacterWorld();
    }

    /**
     * calls different draw functions
     * uses callback with requestAnimationFrame
     */
    draw() {
        this.clearCanvas();
        this.ctx.translate(this.camera_x + 80, 0);
        this.drawBackground();
        this.drawBox();
        this.drawClouds();
        this.drawEnemies();
        this.drawCoins();
        this.drawBottles();
        this.drawStatusBars();
        this.drawCharacter();
        this.ctx.translate(-this.camera_x - 80, 0)
        let self = this;
        requestAnimationFrame(() => {
            self.draw();
        });
    }


    checkCollisions() {
        setIntervalIds(this.checkCollisionWithEnemy.bind(this), 200);
        setIntervalIds(this.checkCollisionWithCollectableThings.bind(this, this.bottles), 200);
        setIntervalIds(this.checkCollisionWithCollectableThings.bind(this, this.coins), 200);
    }


    checkCollisionWithCollectableThings(objArray) {
        objArray.forEach((obj, i) => {
            if(this.character.isColliding(obj)) {
                this.character.setStatusBar(this, obj, i);
            }
        });
    }


    checkCollisionWithEnemy() {
        this.enemies.forEach((chicken) => {
            if (this.character.isColliding(chicken) && chicken.alive) {
                this.character.hit();
                this.character.setStatusBar(this, chicken);
            };
        });
    }

    clearCanvas() {
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

    drawStatusBars() {
        this.statusBars.forEach(statusBar => {
            if (this.camera_x) statusBar.x = 20 - this.camera_x - 80;
        })
        this.addObjectsFromArrayToMap(this.statusBars);
    }

    drawBox() {
        this.addBoxesToMap(this.boxes);
    }

    addBoxesToMap(obj) {
        obj.forEach(o => {
            this.drawInMap(o);
        })
    }

    /**
     * calls function addToMap for each object in array 
     * @param {object} obj 
     */
    addObjectsFromArrayToMap(obj) {
        obj.forEach(o => {
            this.addToMap(o);
        })
    }

    /**
     * draws objects in canvas
     * @param {object} obj 
     */
    addToMap(obj) {
        if (obj.directionLeft) {
            this.ctx.save();
            this.ctx.translate(obj.width, 0);
            this.ctx.scale(-1, 1);
            obj.x = obj.x * -1;
        }
        try {
            this.ctx.drawImage(obj.img, obj.x, obj.y, obj.width, obj.height);
            if (debugModus) this.startDebugModus(obj);
        }
        catch (e) {
            console.log('could not load image:', obj.img.src);
        }
        if (obj.directionLeft) {
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


    startDebugModus(obj) {
        if (Character.prototype.isPrototypeOf(obj) || Chicken.prototype.isPrototypeOf(obj)) {
            this.ctx.beginPath();
            this.ctx.lineWidth = '5';
            this.ctx.strokeStyle = 'white';
            this.ctx.rect(obj.x, obj.y + obj.offsetY, obj.width - obj.offsetX, obj.height - obj.offsetY);
            this.ctx.stroke();
            this.ctx.closePath();
        }
    }
}