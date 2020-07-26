const canvas = document.querySelector('#canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

let colors = ['red', 'green', 'blue', 'orange', 'tomato', 'lime', 'black', 'yellow'];
// window.addEventListener('mousemove', function(e) {
for (let i = 0; i < 100; i++) {
    let color = Math.floor(Math.random() * colors.length);
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    ctx.beginPath();
    ctx.strokeStyle = colors[color];

    ctx.arc(x, y, 30, 0, Math.PI * 2, true);
    ctx.stroke();
}
// })