//Declare my variables

var canvas;
var context;
var timer;
var interval;
var player;
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");

var plat = [];
var count = 3;
var angle = 90;
var y = canvas.height - 200;

	
	for(let i = 0; i < count; i++)
	{
		plat[i] = new GameObject();
		plat[i].color = "teal"
		plat[i].height = 50;
		angle += 90;
		rad = angle * Math.PI/180;
		plat[i].x =canvas.width/2 + Math.cos(rad) * 200;
		plat[i].y = y;
		y += -100;
	}
		

	player = new GameObject({x:100, y:canvas.height/2-100});
	goal = new GameObject({width:24, height:50, x:canvas.width-50, y:100, color:"#00ffff"});

	platform0 = new GameObject();
		platform0.width = 20;
		platform0.x = platform0.width/2;
		platform0.y = canvas.height - platform0.height/2;
		platform0.color = "#66ff33";

	platform1 = new GameObject();
		platform0.width = 300;
		platform1.height = 50;
		platform1.x = goal.x - platform1.width/2;
		platform1.y = goal.y + platform1.height + 150;
		platform1.color = "#66ff33";
	
	sun = new GameObject();
		sun.width = 0;
		sun.height = 0;
		sun.x = canvas.width/3;
		sun.y = canvas.height/3;
		sun.color = "yellow";
		
	
	

	var fX = .85;
	var fY = .97;
	
	var gravity = 1;

	interval = 1000/60;
	timer = setInterval(animate, interval);

function animate()
{
	
	context.clearRect(0,0,canvas.width, canvas.height);	

	if(w && player.canJump && player.vy ==0)
	{
		player.canJump = false;
		player.vy += player.jumpHeight;
	}

	if(a)
	{
		player.vx += -player.ax * player.force;
	}
	if(d)
	{
		player.vx += player.ax * player.force;
	}

	player.vx *= fX;
	player.vy *= fY;
	
	player.vy += gravity;
	
	player.x += Math.round(player.vx);
	player.y += Math.round(player.vy);
	

	while(platform0.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform0.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform0.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform0.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}
	while(platform0.hitTestPoint({x:player.left().x, y:player.bottom().y}) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform0.hitTestPoint({x:player.right().x, y:player.bottom().y}) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	//Platform1 ----
	while(platform1.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform1.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform1.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform1.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}
	while(platform1.hitTestPoint({x:player.left().x, y:player.bottom().y}) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform1.hitTestPoint({x:player.right().x, y:player.bottom().y}) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	
	
	//---------Objective: Treasure!!!!!!!---------------------------------------------------------------------------------------------------- 
	//---------Run this program first.
	//---------Get Creative. Find a new way to get your player from the platform to the pearl. 
	//---------You can do anything you would like except break the following rules:
	//---------RULE1: You cannot spawn your player on the pearl!
	//---------RULE2: You cannot change the innitial locations of platform0 or the goal! 
		
	for(let i = 0; i < count; i++)
	{
		while(plat[i].hitTestPoint(player.bottom()) && player.vy >=0)
		{
			player.y--;
			player.vy = 0;
			player.canJump = true;
		}
		while(plat[i].hitTestPoint({x:player.left().x, y:player.bottom().y}) && player.vy >=0)
		{
			player.y--;
			player.vy = 0;
			player.canJump = true;
		}
		while(plat[i].hitTestPoint({x:player.right().x, y:player.bottom().y}) && player.vy >=0)
		{
			player.y--;
			player.vy = 0;
			player.canJump = true;
		}
		plat[i].drawRect();
	}
	if(player.hitTestObject(goal))
	{
		goal.y = 10000;
	}
	if(goal.y == 10000)
	{
		context.font = "bold 30px Arial";
		context.textAlign = "center";
		context.fillStyle = "black";
		context.fillText("You did it!", canvas.width/2, canvas.height/2);
		context.fillText("Now get lost.", canvas.width/2, canvas.height/2 + 100);
	}

	
	platform0.drawRect();
	platform1.drawRect();

	//Show hit points

	sun.drawCircle();
	player.drawRect();
	goal.drawCircle();
}

