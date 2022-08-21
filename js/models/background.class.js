class Background extends MovableObjects{
    x = 0;
    y = 0;

    constructor(path){
        let canvas = document.getElementById('canvas');
        super().loadImage(path); 
        this.width = canvas.width;
        this.height = canvas.height;
    }
}