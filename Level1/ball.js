var canvas;
var context;
var timer;

var interval = 1000/60;
var player;

function Player()
{
	
	this.x = canvas.width/2;
	this.y = canvas.height/2;
	
	
	this.width = 100;
	this.height = 100;
	
	
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
		context.arc(100, 100, 50, 0, 360 * Math.PI/2);
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
	context.clearRect(0,0,1000, 800);	
	
	//Move the Player
	player.x += 2;
	
	//Update the Screen
	player.draw();
}
