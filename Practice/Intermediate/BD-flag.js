const canvas = document.querySelector('#canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'green';
ctx.fillRect(5, 5, 600, 350);
ctx.lineWidth = 3;
ctx.strokeRect(3, 3, 604, 354);
ctx.beginPath();
ctx.fillStyle = 'red';
ctx.arc(300, 175, 100, 0, 2 * Math.PI, true);
ctx.fill();
ctx.lineWidth = 4;
ctx.stroke();