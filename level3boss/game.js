// variables for objects within game...
var ball;
var player;
//other variables...
var canvas;
var context;
var timer;
var interval = 1000/60;
var score = 0;

var frictionX = .97;	
var frictionY = .98;
var gravity = 1;
var vy;
var vx;

// Canvas...
canvas = document.getElementById("canvas");
context = canvas.getContext("2d")

// ask how to draw a line because you forgot...

//Start of Game Code...
//Ball vvv...
ball = new GameObject();
ball.x = canvas.width/2;
ball.y = canvas.height/2;
ball.height = 80;
ball.width = 80;
ball.color = "cyan";
ball.vx = 5;
ball.vy = 0;
ball.force = 5;
//Player vvv...
player = new GameObject();
player.x = canvas.width/2;
player.y = 550;
player.height = 40;
player.width = 250;
player.color = "blue";
player.vx = 0;
player.vy = 0;

timer = setInterval(animate, interval)

function animate()
{
    //Canvas clear...
    context.clearRect(0,0,canvas.width, canvas.height);	
    // Player Move -------------------->>>>
    if(a)
    {
         //console.log("moving left")   ---
         player.vx += player.ax * -player.force;
         player.vx +=  player.ax * -player.force;
    }
    if(d)
    {
         //console.log("moving right ") ---
         player.vx += player.ax * player.force;
         player.vx +=  player.ax * player.force;
    }
    if(lft)
    {
        //console.log("moving left")   ---
        player.vx += player.ax * -player.force;
        player.vx +=  player.ax * -player.force;
    }
    if(rght)
    {
        //console.log("moving right ") ---
        player.vx += player.ax * player.force;
        player.vx +=  player.ax * player.force;
    }
    //--------------Apply Gravity to the Velocity Y-----------------------------------------
     player.x += player.vx;
     player.y += player.vy;
	player.vx *= frictionX;
	player.x += player.vx;
     //Collision for Player -------------->>>>
    if(player.x < 125)
    {
         player.vx = 0;
         player.x = 125;
    }
     if(player.x + 125 > canvas.width)
    {
         player.vx = 0;
         player.x = canvas.width - 125;
    }
     //----------------------------------->>>>

     //Ball collision with canvas...
     if(ball.y > canvas.height - ball.height/2){
          ball.y = canvas.height - ball.height/2
          ball.vy = -ball.vy * .67;
          score = 0; 
      }
      if(ball.y < 0 + ball.height/2){
          ball.y = 0 + ball.height/2
          console.log("bounce")
          ball.vy = -ball.vy; 
      }
    if(ball.x > canvas.width - ball.width/2)
    {
          ball.x = canvas.width - ball.width/2
          console.log("bounce")
          ball.vx = -ball.vx;
    }
    if(ball.x < 0 + ball.width/2)
    {
          ball.x = 0 + ball.width/2
          console.log("bounce")
          ball.vx = -ball.vx;
    }

     //ball gravity and friction...
     ball.vx *= frictionX;
     ball.vy *= frictionY;
     ball.vy += gravity;
	ball.move();
    
    //----------------------------------------
    
    if(ball.hitTestObject(player)){

     score++;
     ball.vy = -ball.vy - 10;
     ball.y = player.y - player.height/2 - ball.height/2;
     if(ball.x < player.x - player.width/6){
          ball.vx = -ball.force;
     }
     if(ball.x < player.x - player.width/3)
     {
          ball.vx = -ball.force * 5;
     }
     if(ball.x > player.x + player.width/6){
          ball.vx = ball.force;
     }
     if(ball.x > player.x + player.width/3){
          ball.vx = ball.force *5;
     }
 }
    //# of bounces on paddle...
    context.font = "bold 16px Arial";
    context.fillStyle = "grey";
    context.fillText("Score:", 480, 30)
    context.fillText(score,535, 30);

    //draws line....
    context.save();
    context.strokeStyle = "black";
    context.beginPath();
    context.moveTo(ball.x, ball.y);
    context.lineTo(player.x, player.y);
    context.closePath();
    context.lineWidth = 2; 
    context.stroke();
    context.restore();

    //Draw here...
    ball.drawCircle();
    player.drawRect();
}

