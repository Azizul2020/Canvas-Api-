const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;


let mouse = {
    x: 10,
    y: 10
}
addEventListener('mousemove', function(e) {
    mouse.x = e.x;
    mouse.y = e.y;
    init();
})
addEventListener('resize', function() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
})
class Circle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
    draw() {

        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
    update() {
        this.draw();
    }
};


function init() {
    circle1 = new Circle(canvas.width / 2, canvas.clientHeight / 2, 120, 'black');
    circle2 = new Circle(mouse.x, mouse.y, 50, 'red');
};

function distance(x1, y1, x2, y2) {
    xdistance = x1 - x2;
    ydistance = y1 - y2;
    return Math.sqrt(Math.pow(xdistance, 2) + Math.pow(ydistance, 2));
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    circle1.update();
    circle2.update();

    if (distance(circle1.x, circle1.y, circle2.x, circle2.y) < circle1.radius + circle2.radius) {
        circle1.color = circle2.color;
    } else {
        circle1.color = 'black';
    }
}

init();
animate();




/*
     rules :
               xdistance = x1 - x2;
               ydistance = y1 - y2;
               return Math.sqrt(Math.pow(xdistance, 2) + Math.pow(ydistance, 2));
*/