var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.beginPath();
ctx.arc(190,100,40,0,360*Math.PI/2);
ctx.stroke();