
var c = document.querySelector('canvas');
var context = c.getContext("2d");
var timer = requestAnimationFrame(main);
var gravity = 1;
var asteroids = new Array();
var powerup = new Array();
var numAsteroids = 10;
var numPowerup = 1;
var gameOver = true;
var score = 0;
var invincible = false

var gameStates = []
var currentState = 0
var ship

//IMAGE SPRITES FOR GAME
var shipSprite = new Image()
shipSprite.src = "images/finalgood.png"
shipSprite.onload = function(){

}
var asteroidSprite = new Image()
asteroidSprite.src = "images/amongus.png"
asteroidSprite.onload = function(){

}
var flameSprite = new Image()
flameSprite.src = "images/newamogusflame.png"
flameSprite.onload = function(){

}
var powerSprite = new Image()
powerSprite.src = "images/emergency.png"
powerSprite.onload = function(){

}
var menuimg = new Image()
menuimg.src = "images/startscreen.png"
menuimg.onload = function(){

}
var endimg = new Image()
endimg.src = "images/endscreen.png"
endimg.onload = function(){

}
var shieldSprite = new Image()
shieldSprite.src = "images/newgoodguy.png"
shieldSprite.onload = function(){

}


function randomRange(high, low){
    return Math.random() * (high-low) + low;
}

//Class for the Asteroids
function Asteroid(){
    this.radius = randomRange(10,2);
    this.x = randomRange(c.width - this.radius, 0 + this.radius ) + c.width
    this.y = randomRange(c.height - this.radius, 0 + this.radius)            ///////deleted thing here, added above
    this.vx = randomRange(-5, -10);
    this.vy = randomRange(10,5);
    this.color = "pink";

    this.draw = function(){
        context.save();
        context.beginPath();
        context.fillStyle = this.color;
        /*context.arc(this.x,this.y,this.radius,0,2*Math.PI,true);*/
        context.drawImage (asteroidSprite, this.x - this.radius, this.y - this.radius, this.radius*2, this.radius*2)
        context.closePath();
        context.fill();
        context.restore();
    }
}
function Powerup(){
    this.radius = randomRange(10,11);
    this.x = randomRange(c.width - this.radius, 0 + this.radius ) + c.width
    this.y = randomRange(c.height - this.radius, 0 + this.radius)           
    this.vx = randomRange(-5, -10);
    this.vy = randomRange(10,5);
    this.color = "yellow";

    this.draw = function(){
        context.save();
        context.beginPath();
        context.fillStyle = this.color;
        /*context.arc(this.x,this.y,this.radius,0,2*Math.PI,true);*/
        context.drawImage (powerSprite, this.x - this.radius, this.y - this.radius, this.radius*2, this.radius*2)
        context.closePath();
        context.fill();
        context.restore();
    }
}
function gameStart() {
    //for loop to create the intances of the asteroids
    for(var i = 0; i<numAsteroids; i++){
        asteroids[i] = new Asteroid();
        


        //create the instance of the ship for the game
        ship = new PlayerShip()
    }
}//gameStart() CLOSE


//Class for the player ship
function PlayerShip(){
    this.x = c.width/2;
    this.y = c.height/2;
    this.w = 20;
    this.h = 20;
    this.vx = 0;
    this.vy = 0;
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.flamelength = 30;

    this.draw = function(){
        context.save();
        context.translate(this.x, this.y);
        //this drws the flame behind the ship
        if(this.right == true){
            context.save();
            //adjust the flame length for a flicker effect
            if(this.flamelength == 30){
                this.flamelength = 10;
            }
            else{
                this.flamelength = 30;
            }
            context.fillStyle = "blue";
            /*context.beginPath();
            context.moveTo(0, this.flamelength);
            context.lineTo(5, 5);
            context.lineTo(-5, 5);
            context.lineTo(0, this.flamelength);
            context.closePath();
            context.fill();
            context.restore();*/
            /*----------------------ADDED for W10D1----------------*/
            context.drawImage(flameSprite,-40,-20,40,40)
            console.log("flameSprite drawImage")

            /*if(invincible) { .... do somethingsssss} */
            context.restore()
        }
        /*context.beginPath();
        
        context.fillStyle = "cyan";
        context.moveTo(0, -13);
        context.lineTo(10, 10);
        context.lineTo(-10, 10);
        context.lineTo(0, -13);
        context.closePath();
        context.fill();*/
        if(invincible == false){
            context.drawImage(shipSprite,-20,-20,40,40)
            console.log("shipSprite drawImage")
            context.restore();
        }
        if(invincible == true){
            context.drawImage(shieldSprite,-20,-20,40,40)
            console.log("shieldSprite drawImage")
            context.restore();

        }
       

      
    }

    this.move = function(){
        this.x += this.vx;
        this.y += this.vy;
        
        //adds boundaries and keeps ship on the screen
        if(this.y > c.height - 20){
            this.y = c.height - 20;
            this.vy = 0;
        }
        //check to see if we are past the top of the canvas
        if(this.y < 0 + 13){
            this.y = 13;
            this.vy = 0;
        }
        //check to see if we are past right 0r left side of canvas
        if(this.x > c.width - 10){
            this.x = c.width - 10;
            this.vx = 0;
        }
        //left side
        if(this.x < 0 + 10){
            this.x =  10;
            this.vx = 0;
        }
    }
}

//create the instance of the ship for the game
//var ship = new PlayerShip();

document.addEventListener('keydown', keyPressDown);
document.addEventListener('keyup', keyPressUp);

function keyPressDown(e){
    console.log("keyPressDown()")
    console.log("key press down")

    //console.log("Key Down " + e.keyCode);

    if(gameOver == false) {
      if(e.keyCode === 38){
          ship.up = true;
        }
     if(e.keyCode === 40){
         ship.left = true;
        }
        if(e.keyCode === 39){
         ship.right = true;
        }
    }
    if(gameOver == true) {
        console.log("gameOver === true")


        if(e.keyCode === 13) {//enter key
            console.log("recog enter log")
            console.log("current state is 2")

            if(currentState == 2) {
                score = 0
                numAsteroids = 10
                asteroids = []
                gameStart()

                currentState = 0
            }

            else{

                gameStart()
                gameOver = false
                currentState = 1
                setTimeout(scoreTimer, 1000)
            }
        }
    }
}

function keyPressUp(e){
    //console.log("Key Up " + e.keyCode);
    if(e.keyCode === 38){
        ship.up = false;
    }
    if(e.keyCode === 40){
        ship.left = false;
    }
    if(e.keyCode === 39){
        ship.right = false;
    }
}

//GAME STATES for START MENU, GAMEPLAY, and GAME OVER

gameStates[0] = function() {
    context.save()
    context.drawImage(menuimg, 0, 0, 800, 600)
    context.font = "50px 'Inter'"
    context.fillStyle = "white"
    context.textAlign = "center"
    context.fillText("Amogus Avoidance", c.width/2, c.height/2 - 30)
    context.font = "30px 'Inter'"
    context.fillText("Press ENTER to Dodge Imposters!", c.width/2, c.height/2 + 20)
    context.restore()
}

gameStates[1] = function() {//GAMEPLAY STATE
     //display score
     context.save();
    
     context.font = "15px 'Inter'"
     context.fillStyle = "white"
     context.fillText("Score: " + score.toString(), c.width - 150, 30);
     context.restore();
 
     //ship.vy += gravity;
 
     if(ship.up == true){
         ship.vy = -5;
     }
     else{
         ship.vy = 0;
     }
 
     if(ship.left == true){
         ship.vy = 5;
     }
     else if(ship.right == true){
         ship.vx = 3;
     }
     else{
         ship.vx = -4;
     }
 
     for(var i = 0; i<asteroids.length; i++){
         //using the distance formula to find distance between ship and asteroid
         var dX = ship.x - asteroids[i].x;
         var dY = ship.y - asteroids[i].y;
         var dist = Math.sqrt((dX*dX)+(dY*dY));
         
         //checks for collision with asteroid and ends game
         if(detectCollision(dist, (ship.h/2 + asteroids[i].radius)) && invincible == false){
            // console.log("We collided with Asteroid " + i);
             gameOver = true;
             currentState = 2 //this replaces removeEventListener need
             //document.removeEventListener('keydown', keyPressDown);
             //document.removeEventListener('keyup', keyPressUp);
         }
 
         //checks to see if asteroid ios off screen
         if(asteroids[i].y > c.height + asteroids[i].radius){
             //reset steroids position off screen 
             asteroids[i].y = randomRange(c.height - asteroids[i].radius, 0 + asteroids[i].radius)-c.height;
             asteroids[i].x = randomRange(c.width - asteroids[i].radius, 0 + asteroids[i].radius);
         }
         if(gameOver == false){
             asteroids[i].x += asteroids[i].vx;  /////////////////////////////changed the y's to x's
         }
         asteroids[i].draw();
     }

     for(var i = 0; i<powerup.length; i++){
        //using the distance formula to find distance between ship and asteroid
        var dX = ship.x - powerup[i].x;
        var dY = ship.y - powerup[i].y;
        var dist = Math.sqrt((dX*dX)+(dY*dY));
        
        //checks for collision with asteroid and ends game
        if(detectCollision(dist, (ship.h/2 + powerup[i].radius)) && invincible == false){
           // console.log("We collided with Asteroid " + i);
           invincible = true
           if(invincible == true){

            setTimeout(TimeInterval, 5000)
           }

             //this replaces removeEventListener need
            //document.removeEventListener('keydown', keyPressDown);
            //document.removeEventListener('keyup', keyPressUp);
        }

        //checks to see if asteroid ios off screen
        if(powerup[i].y > c.height + powerup[i].radius){
            //reset steroids position off screen 
            powerup[i].y = randomRange(c.height - powerup[i].radius, 0 + powerup[i].radius)-c.height;
           powerup[i].x = randomRange(c.width -powerup[i].radius, 0 + powerup[i].radius);
        }
        if(gameOver == false){
            powerup[i].x += powerup[i].vx;  /////////////////////////////changed the y's to x's
        }
       powerup[i].draw();
    }
 
     ship.draw();
     if(gameOver == false){
       ship.move();  
     }
     while(asteroids.length < numAsteroids){
         asteroids.push(new Asteroid());
     }
     while(powerup.length < numPowerup){
        powerup.push(new Powerup());
    }
}


gameStates[2] = function() {//GAME OVER STATE
    context.save()
    context.drawImage(endimg, 0, 0, 800, 600)
    context.font = "30px 'Inter'"
    context.fillStyle = "white"
    context.textAlign = "center"
    context.fillText("RED LOOKED SUS Your score was: " + score.toString(), c.width/2, c.height/2 - 30)
    context.font = "15px 'Inter'"
    context.fillText("Press ENTER to Play Again!", c.width/2, c.height/2 + 20)
    context.restore()

}


function main(){
    context.clearRect(0,0, c.width, c.height);

   /*
   where original gameplay code was
   */
    gameStates[currentState]() //allows screen to follow the appropriate state

    timer = requestAnimationFrame(main);
}

function scoreTimer(){
    if(gameOver == false){
        score++;
        //console.log(score);
        if(score % 2 == 0){
            numAsteroids += 15;
            console.log(numAsteroids);
        }
        if(score % 10 == 0){
            numPowerup += 1;
            console.log(numPowerup);
        }
        setTimeout(scoreTimer,1000);
    }
}
//scoreTimer();
function TimeInterval() {

    invincible = false
    clearTimeout()
}

function detectCollision(distance, calcDistance){
    return distance < calcDistance;
}