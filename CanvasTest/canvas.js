"use strict";
const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");
ctx.rect(10, 10, 100, 100);
// ctx.fill();
ctx.strokeStyle = "cyan";
ctx.lineWidth = 5;
ctx.stroke();
ctx.fillStyle = "rgb(255, 50, 150)";
let path = new Path2D();
path.rect(1000, 1000, 15, 15);
ctx.fill(path);
//# sourceMappingURL=canvas.js.map