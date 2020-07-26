const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

ctx.beginPath();
ctx.moveTo(50, 70);
ctx.lineTo(300, 70);
ctx.arcTo(320, 70, 700, 1000, 50);
ctx.stroke();