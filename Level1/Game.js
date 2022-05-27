var canvas;
var context;
var timer;
var player;
var interval = 1000/60;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d")

player = new Player();
player.width = 100;
player.height = 100;
player.vx = 4;
player.vy = 4;

timer = setInterval(animate, interval)


function animate(){
     //colission --->>
     player.move();

    if(player.x > canvas.width - player.width/2){
        player.x = canvas.width - player.width/2
        player.vx = -player.vx; 
        player.color = "purple";
    }
    if(player.x < 0 + player.width/2){
       player.x = 0 + player.width/2
        player.vx = -player.vx;
        player.color = "cyan";
    }
    if(player.y > canvas.height - player.height/2){
        player.y = canvas.height - player.height/2
        player.vy = -player.vy; 
        player.color = "magenta";
    }
    if(player.y < 0 + player.height/2){
        player.y = 0 + player.height/2
        player.vy = -player.vy;
        player.color = "blue";
    }

    context.clearRect(0,0,canvas.width, canvas.height);	
    
 
    player.draw();
}