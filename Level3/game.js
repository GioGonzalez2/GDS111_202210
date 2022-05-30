var canvas;
var context;
var timer;
var player1;
var Ball
var Net;
var interval = 1000/60;

var player1Wins = 0;
var p2Wins = 0


//canvas/context
canvas = document.getElementById("canvas");
context = canvas.getContext("2d")
//Player 1 ----------------------------
player1 = new GameObject();
player1.x = 15;
player1.y = canvas.height/2;
player1.height = 120;
player1.width = 16;
player1.color = "Blue";
player1.vx = 0;
player1.vy = 0;
// Player 2 ---------------------------

p2 = new GameObject();
p2.x = 985;
p2.y = canvas.height/2;
p2.height = 120;
p2.width = 16;
p2.color = "red";
p2.vx = 0;
p2.vy = 0;
// ------------------------------------

//Ball --------------------------------
Ball = new GameObject();
Ball.x = canvas.width/2;
Ball.y = canvas.height/2;
Ball.height = 50;
Ball.width = 50;
Ball.color = "teal";
Ball.vx = -4;
Ball.vy = 4;
//-------------------------------------

//Net ---------------------------------
Net = new GameObject();
Net.x = canvas.width/2;
Net.y = canvas.height/2;
Net.height = canvas.height;
Net.width = 10;
Net.color = "black";
//-------------------------------------


timer = setInterval(animate, interval)

//function for animation
function animate(){

    //clear canvas here
    context.clearRect(0,0,canvas.width, canvas.height);	
    // Player 1 Move -------------------->>>>
    if(w){

        //console.log("moving up") ---
        player1.y += -3;
    }
    if(s){

        //console.log("moving down") ---
        player1.y += 3;
    }

    //Collision for P1 ------------------>>>>
    if(player1.y < 60){

	    player1.y = 60;

    }
    if(player1.y + 60 > canvas.height){

	    player1.y = canvas.height - 60;

    }
    // P2 MOVE -------------------------->>>>
    if(up){

        //console.log("moving up") ---
        p2.y += -3;
    }
    if(dwn){

        //console.log("moving down") ---
        p2.y += 3;
    }
    //----------------------------------->>>>

    //Collision for P2 ------------------>>>>
    if(p2.y < 60){

	    p2.y = 60;

    }
    if(p2.y + 60 > canvas.height){

	    p2.y = canvas.height - 60;

    }

    //Ball move / canvas collision ------------------------->>>>
    Ball.move();
    if(Ball.y > canvas.height - Ball.height/2){

        Ball.vy = -Ball.vy;
        
    }
    if(Ball.y < 0 + Ball.height/2){

        Ball.vy = -Ball.vy;
       
    }
     //Ball & Paddle Collision ---
     if(Ball.hitTestObject(player1)){

        Ball.vx = -Ball.vx;
        Ball.x = player1.x + player1.width/2 + Ball.width/2;
        if(Ball.y > player1.y){
            Ball.vy = 3;
        }
        if(Ball.y < player1.y){
            Ball.vy = -3;
        }
    }
      if(Ball.hitTestObject(p2)){

        Ball.vx = -Ball.vx;
        Ball.x = p2.x - p2.width/2 - Ball.width/2;
        if(Ball.y > p2.y - p2.height/3){
            Ball.vy += 5;
        }
        if(Ball.y < p2.y + p2.height/6){
            Ball.vy += -5;
        }
    }

    
    //Loops ball back to Screen center ->>>>
    //P2 scores
    if(Ball.x < 0){

        Ball.x = canvas.width/2;
        Ball.y = canvas.height/2;
        Ball.vx = -3;
        Ball.vy = 0;
        
        p2Wins += 1;

        console.log(p2Wins);
    }

    

    //P1 scores
    if(Ball.x > canvas.width){

        Ball.x = canvas.width/2;
        Ball.y = canvas.height/2;
        Ball.vx = 3;
        Ball.vy = 0;

        player1Wins += 1;

        console.log(player1Wins);
    }

    
    //draw on/update the canvas here
    Net.drawRect();
    player1.drawRect();
    p2.drawRect();
    Ball.drawCircle();

    //P1
    context.fillText("PLAYER 1", canvas.width/2 - 195, 20,)
    context.fillText(player1Wins, canvas.width/2 - 175, 30);

    //P2
    context.fillText("PLAYER 2", canvas.width/2 + 150, 20)
    context.fillText(p2Wins,  canvas.width/2 + 170, 30);

}
