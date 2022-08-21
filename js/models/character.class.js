class Character extends MovableObjects{

    constructor(path, x, y){
        super().loadImage(path);
        this.x = x;
        this.y = y;
        this.width = 150;
        this.height = 190;
    }

    jump(){
        
    }
}