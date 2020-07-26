const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;
const arm = 50;
const y = canvas.width / 2 - 50;

function any() {
    ctx.beginPath();
    ctx.moveTo(arm, y);
    ctx.lineTo(0, y + 50);
    ctx.lineTo(arm * 2, y + 50);
    ctx.closePath();
    ctx.stroke();
}