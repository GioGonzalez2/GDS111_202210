var canvas;
var context;
var timer;
var player;
var interval = 1000/60;

var enemies=[]
var enemyAmount = 2;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d")

player = new GameObject();
player.width = 100;
player.height = 100;

field = new GameObject();
field.width = canvas.width;
field.height = canvas.height;


timer = setInterval(animate, interval)

for(var b = 0; b < 20; b++)
    {
        enemies[b] = new GameObject();
        enemies[b].width = 35;
        enemies[b].height = enemies[b].width
        enemies[b].color = "red";

        var enemyStart = Math.floor((Math.random() * (4.9999999 - 1) + 1));

        //Creates enemy at right of screen
        if (enemyStart == 1) {
            enemies[b].vx = Math.random() * (-6 - -4) + -6;
            enemies[b].vy = 0;
            enemies[b].x = canvas.width;
            enemies[b].y =  Math.random() * ((canvas.height - enemies[b].height)-(0 + enemies[b].height)) + (canvas.height - enemies[b].height);
        }

        //Creates enemy at left of screen
        if (enemyStart == 2) {
            enemies[b].vx = Math.random() * (6 - 4) + 4;
            enemies[b].vy = 0;
            enemies[b].x = 0;
            enemies[b].y = canvas.height/2;
        }

        //Creates enemy at bottom of screen
        if (enemyStart == 3) {
            enemies[b].vy = Math.random() * (-4 - -6) + -6;
            enemies[b].vx = 0;
            enemies[b].x = canvas.width/2;
            enemies[b].y = canvas.height;
        }

        //Creates enemy at top of screen
        if (enemyStart == 4) {
            enemies[b].vy = Math.random() * (6 - 4) + 4;
            enemies[b].vx = 0;
            enemies[b].x = canvas.width/2;
            enemies[b].y = 0;
        }
    }   

function animate(){
    context.clearRect(0,0,canvas.width, canvas.height);
     
    for(var b = 0; b < enemyAmount; b++) {
        enemies[b].move();
       
    if (!enemies[b].hitTestObject(field)) {
            var enemyStart = Math.floor((Math.random() * (4.9999999 - 1) + 1));
    
            //Creates enemy at right of screen
            if (enemyStart == 1) {
                enemies[b].vx = Math.random() * (-6 - -4) + -6;
                enemies[b].vy = 0;
                enemies[b].x = canvas.width;
                enemies[b].y = canvas.height/2;
            }
    
            //Creates enemy at left of screen
            if (enemyStart == 2) {
                enemies[b].vx = Math.random() * (6 - 4) + 4;
                enemies[b].vy = 0;
                enemies[b].x = 0;
                enemies[b].y = canvas.height/2;
            }
    
            //Creates enemy at bottom of screen
            if (enemyStart == 3) {
                enemies[b].vy = Math.random() * (-4 - -6) + -6;
                enemies[b].vx = 0;
                enemies[b].x = canvas.width/2;
                enemies[b].y = canvas.height;
            }
    
            //Creates enemy at top of screen
            if (enemyStart == 4) {
                enemies[b].vy = Math.random() * (6 - 4) + 4;
                enemies[b].vx = 0;
                enemies[b].x = canvas.width/2;
                enemies[b].y = 0;
            }
        }
    
    enemies[b].drawCircle();
    }

    //clear canvas here
    	
    // Player 1 Move -------------------->>>>
    if(w){

        //console.log("moving up") ---
        player.y += -4;
    }
    if(s){

        //console.log("moving down") ---
        player.y += 4;
    }
    if(a){

        //console.log("moving up") ---
        player.x += -4;
    }
    if(d){

        //console.log("moving down") ---
        player.x += 4;
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
    
 
    player.drawCircle();
}