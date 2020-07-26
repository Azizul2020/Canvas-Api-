const canvas = document.querySelector('#canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.arc(200, 200, 50, 0, 2 * Math.PI, false);
ctx.strokeStyle = 'rgba(0,255,70,0.8)';
ctx.fillStyle = 'rgba(100,200,70,0.8)';
ctx.stroke();