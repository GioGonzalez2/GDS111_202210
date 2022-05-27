var canvas;
var context;
var timer;
var player1;
var interval = 1000/60;

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
//--------------------------------------

timer = setInterval(animate, interval)

//function for animation
function animate(){

    //clear canvas here
    context.clearRect(0,0,canvas.width, canvas.height);	
    // Player 1 Move -------------------->>>>
    if(w){

        //console.log("moving up") ---
        player1.y += -4;
    }
    if(s){

        //console.log("moving down") ---
        player1.y += 4;
    }
	//update the canvas here
    player1.drawRect();
    Ball.drawCircle();
}