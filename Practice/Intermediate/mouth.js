const canvas = document.querySelector('#canvas');
canvas.width = innerWidth;
canvas.height = innerHeight;
const ctx = canvas.getContext('2d');

let x = canvas.width / 2;
let y = canvas.height / 2;

//Draw head

ctx.beginPath();
ctx.arc(x, y, 150, 0, 2 * Math.PI, true);

//Draw mouth

ctx.moveTo(x + 75, y);
ctx.arc(x, y, 75, 0, Math.PI, false);


//Draw left eye
ctx.moveTo(x - 45, y - 70);
ctx.arc(x - 65, y - 70, 20, 0, 2 * Math.PI);

//Draw right eye
ctx.moveTo(x + 85, y - 70);
ctx.arc(x + 65, y - 70, 20, 0, 2 * Math.PI);
ctx.lineWidth = 2;
ctx.stroke();