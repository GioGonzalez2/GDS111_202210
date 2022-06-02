var canvas;
var context;
var timer;
var player;
var paddle;
var run = 1;
var health = 100;
var interval = 1000/60;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d")

player = new GameObject();
player.width = 100;
player.height = 100;

paddle = new GameObject();
paddle.x = canvas.width/2;
paddle.y = 550;
paddle.height = 40;
paddle.width = 250;
paddle.color = "cyan";
paddle.vx = 0;
paddle.vy = 0;


timer = setInterval(animate, interval)

   

function animate(){
    context.clearRect(0,0,canvas.width, canvas.height);
    
    // Player 1 Move -------------------->>>>
    if(w){

        //console.log("moving up") ---
        player.y += -4 * run;
    }
    if(s){

        //console.log("moving down") ---
        player.y += 4 * run;
    }
    if(a){

        //console.log("moving up") ---
        player.x += -4 * run;
    }
    if(d){

        //console.log("moving down") ---
        player.x += 4 * run;
    }
    if(shift){
        run = 2;
    }
    if (shift == false){
        run = 1;
    }

    //Collision for P1 ------------------>>>>
    if(player.y < 60){

	    player.y = 60;

    }
    if(player.y + 60 > canvas.height){

	    player.y = canvas.height - 60;

    }
    
    
    if(player.x > canvas.width - player.width/2){
        player.x = canvas.width - player.width/2
        player.vx = -player.vx; 
    }
    if(player.x < 0 + player.width/2){
       player.x = 0 + player.width/2
        player.vx = -player.vx;
    }
    if(player.y > canvas.height - player.height/2){
        player.y = canvas.height - player.height/2
        player.vy = -player.vy; 
    }
    if(player.y < 0 + player.height/2){
        player.y = 0 + player.height/2
        player.vy = -player.vy;
    }
    if(health > 0){
    if(player.hitTestObject(paddle)){

        health--;
        player.vy =- 35;
        player.y = paddle.y - paddle.height/2 - player.height/2;
    }
    if(health == 0)
	{
		context.font = "bold 30px Arial";
		context.textAlign = "center";
		context.fillStyle = "black";
		context.fillText("You Lose", canvas.width/2, canvas.height/2);
		context.fillText("Ty.", canvas.width/2, canvas.height/2 + 100);
	}

    
}
    //# of bounces on paddle...
    context.font = "bold 32px Arial";
    context.fillStyle = "black";
    context.fillText("Health:", 80, 25)
    context.fillText(health,190, 25);
 
    player.drawCircle();
    paddle.drawRect();
}