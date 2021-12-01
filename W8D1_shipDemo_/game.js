//JS file that runs the game and connects the functionality of ship.js and controls.js to the HTML

var canvas 
var context

//variable for the animation timer
var timer

var ship //the ship!

var friction //slows down the velocity

//function to ready the canvas and starting position of the ship
$(document).ready(function(e) {

    //assign the canvas element to the canvas var
    canvas = $("canvas")//jQuery version of document.getElementById("#canvas")
    context = canvas.get(0).getContext("2d")

    ship = new Ship() //Ship() was defined in ship.js

    //friction and POWER
    friction = 0.95
    ship.power = 1
    timer = setInterval("animate();", 33) //33 milliseconds (1000 would be 1 second)


})//end of ready()

//LET'S DO STUFF!
function animate() {

    context.clearRect(0, 0, canvas.width(), canvas.height())

    //check to see if the keyCode values are up or down [connects to the controls.js]
    if(up) { //if the current value of 'up' is TRUE

        //when up key is TRUE (which means we are pressing the key down)
        ship.vy -= ship.ax * ship.power
        //line 39 same as: ship.vy = ship.vy - (ship.ax * ship.power)
        //ship's velocity of y axis is LOWERED by its current acceleration and power
    
    }

    if(down) { //current value of 'right' is TRUE 

        ship.vy += ship.ax * ship.power

    }

    if(right) {

        //add acceleration (moving towards the right! )
        ship.vx += ship.ax * ship.power
    }

    if(left) {

        //subtract acceleration
        ship.vx -= ship.ax * ship.power
    }

    //apply friction to the velocity -- realistic slow down, speed increases are never instant
    ship.vx *= friction
    ship.vy *= friction

    //move and redraw the ship!  .functions() are from ship.js [Ship()]
    ship.move()
    ship.draw()


    // if ship leaves edge of canvas it returns at opposite side

    //leaves at right returns on left
    if(ship.x > canvas.width() + 25) {
        
    ship.x = -25 //moves ships x coord
    }
    //leaves at bottom returns at top
    if(ship.y > canvas.height() + 25) {
        
    ship.y = -25 //moves ships y coord
    }
    //leaves at left returns on right
    if(ship.x < 0 - 25) {
        //0 is the x coord of left margin, 25 is the length of the ship
        //if the current ship x coord is greater than (beyond) the canvas width + 25
    ship.x = 825
    }
    //leaves at top returns at bottom
    if(ship.y < 0 - 25) {
        
    ship.y = 825
    }
    }

   
    