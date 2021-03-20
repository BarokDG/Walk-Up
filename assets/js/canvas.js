var canvas = document.querySelector('#field');
var ctx = canvas.getContext('2d');

ctx.beginPath();

ctx.strokeStyle = "white";
ctx.lineWidth = 2;

ctx.moveTo(0, 600);
ctx.lineTo(1000, 600);
ctx.stroke();

ctx.moveTo(0, 600);
ctx.lineTo(150, 200);
ctx.stroke();

ctx.moveTo(1000, 600);
ctx.lineTo(850, 200);
ctx.stroke();

ctx.moveTo(150, 200);
ctx.lineTo(850, 200);
ctx.stroke();

ctx.moveTo(400, 200);
ctx.lineTo(400, 120);
ctx.stroke();

ctx.moveTo(400, 120);
ctx.lineTo(600, 120);
ctx.stroke();

ctx.moveTo(600, 120);
ctx.lineTo(600, 200);
ctx.stroke();

ctx.moveTo(662.5, 200);
ctx.lineTo(700, 300);
ctx.stroke();

ctx.moveTo(700, 300);
ctx.lineTo(300, 300);
ctx.stroke();

ctx.moveTo(300, 300);
ctx.lineTo(337.5, 200);
ctx.stroke();


// Circles

ctx.beginPath();
ctx.ellipse(500, 620, 200, 100, 0, 2 * Math.PI, false);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(500, 300, 20, 10, Math.PI, -1 * Math.PI, false);
ctx.stroke();

// ============================================================================

var canvas2 = document.querySelector('#field2');
var ctx2 = canvas2.getContext('2d');

ctx2.beginPath();

ctx2.strokeStyle = "white";
ctx2.lineWidth = 2;

ctx2.moveTo(0, 600);
ctx2.lineTo(1000, 600);
ctx2.stroke();

ctx2.moveTo(0, 600);
ctx2.lineTo(150, 200);
ctx2.stroke();

ctx2.moveTo(1000, 600);
ctx2.lineTo(850, 200);
ctx2.stroke();

ctx2.moveTo(150, 200);
ctx2.lineTo(850, 200);
ctx2.stroke();

ctx2.moveTo(400, 200);
ctx2.lineTo(400, 120);
ctx2.stroke();

ctx2.moveTo(400, 120);
ctx2.lineTo(600, 120);
ctx2.stroke();

ctx2.moveTo(600, 120);
ctx2.lineTo(600, 200);
ctx2.stroke();

ctx2.moveTo(662.5, 200);
ctx2.lineTo(700, 300);
ctx2.stroke();

ctx2.moveTo(700, 300);
ctx2.lineTo(300, 300);
ctx2.stroke();

ctx2.moveTo(300, 300);
ctx2.lineTo(337.5, 200);
ctx2.stroke();


// Circles

ctx2.beginPath();
ctx2.ellipse(500, 620, 200, 100, 0, 2 * Math.PI, false);
ctx2.stroke();

ctx2.beginPath();
ctx2.ellipse(500, 300, 20, 10, Math.PI, -1 * Math.PI, false);
ctx2.stroke();

