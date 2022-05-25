var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;

function Player()
{
	//player's location
	this.x = canvas.width/2;
	this.y = canvas.height/2;
	
	//player's dimensions
	this.width = 100;
	this.height = 100;
	
	//player's velocity or speed on each axis
	this.vx = 0;
	this.vy = 0;
	
	//player's color
	this.color = "#ff0000";
	
	//This draws the player to the screen
	this.draw = function()
	{
		context.save();
		context.fillStyle = this.color;
		context.translate(this.x, this.y);
		context.arc(100, 100, 50, 0, 360 * Math.PI/2, false);
        context.fillStyle = "red";
        context.fill()
		context.restore();
		
	}	
	
	//This changes the player's position
	this.move = function()
	{
		this.x += this.vx;
		this.y += this.vy;
	}
}
	//Set Up the Canvas
	canvas = document.getElementById("myCanvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	player = new Player();
	
	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//Move the Player
	player.x += 2;
	
	//Update the Screen
	player.draw();
}
