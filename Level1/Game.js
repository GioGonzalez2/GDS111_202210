var canvas;
var context;
var timer;
var player;
var interval = 1000/60;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d")

player = new Player();
player.vx = 4;
player.vy = -4;

timer = setInterval(animate, interval)


function animate(){
     //colission --->>
     if(player.x > canvas.width - player.width/2){
        player.vx = -player.vx; 
    }
    if(player.x < 0 + player.width/2){
        player.vx = -player.vx;
    }
   
    context.clearRect(0,0,canvas.width, canvas.height);	
    
    player.move();
 
    player.draw();
}