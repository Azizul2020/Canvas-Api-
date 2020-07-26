const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

window.addEventListener('resize', function() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
});
let mouse = {
    x: undefined,
    y: undefined
}
window.addEventListener('mousemove', function(e) {
    mouse.x = e.x;
    mouse.y = e.y;
})

let maxRadius = 50;
let colors = ['red', 'green', 'tomato', 'lime', 'purple', 'yellow', 'blue', '#ddaf20', '#', '#44dd20', '#1649ec'];
class Circle {
    constructor(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRadius = radius;
    };
    //     minRadius = this.radius; is not acceptable

    color = colors[Math.floor(Math.random() * colors.length)];
    minRadius = this.radius;
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    update() {
        this.x += this.dx;
        this.y += this.dy;
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        //interacting
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if (this.radius < maxRadius) {
                this.radius++;
            }
        } else if (this.radius > this.minRadius) {
            this.radius--;
        }
        this.draw();
    }
};

let circleArr = [];

function init() {
    circleArr = [];
    for (i = 0; i < 900; i++) {
        radius = Math.random() * 3 + 1;
        x = Math.random() * (innerWidth - radius * 2) + radius;
        y = Math.random() * (innerHeight - radius * 2) + radius;
        dx = Math.random() - 0.5;
        dy = Math.random() - 0.5;
        circleArr.push(new Circle(x, y, dx, dy, radius));
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(animate);
    for (i = 0; i < circleArr.length; i++) {
        circleArr[i].update();
    }
}
animate();
init();


/*
     mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50
*/