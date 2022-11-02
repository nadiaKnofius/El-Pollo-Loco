let canvas;
let world;
let keyboard;

function init() {
    canvas = document.getElementById('canvas');
    keyboard = new Keyboard();
    world = new World(canvas, keyboard);
}

document.addEventListener("keydown", (event) => {
    switch (true) {
        case event.code == 'KeyD':
            keyboard.right = true;
            break;
        case event.code == 'KeyA':
            keyboard.left = true;
            break;
        case event.code == 'KeyW':
            keyboard.jump = true;
            world.character.y = world.character.y + 3;
            break;
        case event.code == 'Space':
            keyboard.shoot = true;
            console.log(keyboard.shoot);
            break;
    }
})

document.addEventListener("keyup", (event) => {
    switch (true) {
        case event.code == 'KeyD':
            keyboard.right = false;
            break;
        case event.code == 'KeyA':
            keyboard.left = false;
            break;
        case event.code == 'KeyW':
            keyboard.jump = false;
            break;
        case event.code == 'Space':
            keyboard.shoot = false;
            console.log(keyboard.shoot);
            break;
    }
})