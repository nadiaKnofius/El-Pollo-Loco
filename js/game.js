let canvas;
let world;
let keyboard;
let timeAfterLastAction;
let intervalIds = [];
let debugModus = false;

function init() {
    canvas = document.getElementById('canvas');
    keyboard = new Keyboard();
    world = new World(canvas, keyboard);
}

document.addEventListener("keydown", (event) => {
    switch (true) {
        case event.code == 'KeyD':
            keyboard.right = true;
            timeAfterLastAction = new Date().getTime();
            break;
        case event.code == 'KeyA':
            keyboard.left = true;
            timeAfterLastAction = new Date().getTime();
            break;
        case event.code == 'KeyW':
            keyboard.jump = true;
            world.character.y = world.character.y + 3;
            timeAfterLastAction = new Date().getTime();
            break;
        case event.code == 'Space':
            keyboard.shoot = true;
            timeAfterLastAction = new Date().getTime();
            break;
    }
})

document.addEventListener("keyup", (event) => {
    switch (true) {
        case event.code == 'KeyD':
            keyboard.right = false;
            timeAfterLastAction = new Date().getTime();
            break;
        case event.code == 'KeyA':
            keyboard.left = false;
            timeAfterLastAction = new Date().getTime();
            break;
        case event.code == 'KeyW':
            keyboard.jump = false;
            timeAfterLastAction = new Date().getTime();
            break;
        case event.code == 'Space':
            keyboard.shoot = false;
            timeAfterLastAction = new Date().getTime();
            break;
    }
})


function setIntervalIds(fn, time) {
    let intervalId = setInterval(fn, time);
    intervalIds.push(intervalId);
}