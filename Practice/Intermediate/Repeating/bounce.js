const canvas = document.querySelector('#canvas');
canvas.width = innerWidth;
canvas.height = innerHeight;
const ctx = canvas.getContext('2d');
let circle = {
    x: 60,
    y: 60,
    r: 50,
    dx: 5,
    dy: 5
}


function makeCircle() {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2);
    ctx.lineWidth = 2;
    ctx.stroke();
}

function updateCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    makeCircle();
    circle.x += circle.dx;
    circle.y += circle.dy;
    if (circle.x + circle.r > canvas.width || circle.x - circle.r < 0) {
        circle.dx = -circle.dx;
    }
    if (circle.y + circle.r > canvas.height || circle.y - circle.r < 0) {
        circle.dy = -circle.dy;
    }
    requestAnimationFrame(updateCircle);
};
updateCircle();