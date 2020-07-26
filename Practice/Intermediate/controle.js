const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;
const img = new Image();
img.src = 'media/me.jpg';

let x = 20;
let y = 20;
let w = 200;
let h = 200;
let dx = 0;
let dy = 0;

function speeds() {
    speed = Math.random() * 100 + 10;
    requestAnimationFrame(speeds);
}
speeds();

function init() {
    ctx.drawImage(img, x, y, w, h);
}
addEventListener('load', function() {
    init();
})
addEventListener('keydown', keydown);
addEventListener('resize', function() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
})

function keydown(e) {
    if (e.keyCode == 37) {
        moveLeft();
    } else if (e.keyCode == 38) {
        moveUp();
    } else if (e.keyCode == 39) {
        moveRight();
    } else if (e.keyCode == 40) {
        moveDown();
    }
    if (e.altKey == true && e.keycode == 37) {
        console.log(e);
    }


}

function setWalls() {
    if (x + w > innerWidth) {
        x = innerWidth - w;
    }
    if (x < 0) {
        x = 0;
    }
    if (y + h > innerHeight) {
        y = innerHeight - h;
    }
    if (y < 0) {
        y = 0;
    }
}

function moveDown() {
    y += speed;
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    setWalls();
    init();
}

function moveLeft() {
    x -= speed;
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    setWalls();
    init();

}

function moveRight() {
    x += speed;
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    setWalls();
    init();

}

function moveUp() {
    y -= speed;
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    setWalls();
    init();
}