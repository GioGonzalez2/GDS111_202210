var canvas = document.getElementById("canvas")    //store canvas element as a js object
var ctx = canvas.getContext("2d")                   //set up the context object relative to canvas

var tracing = new Image()
tracing.src = "images/shapes.png"                   //<img src="filepath/filename.ext"

tracing.onload = function () {

    ctx.drawImage(tracing, 0, 0, 800, 800)


    // set up styling before actually drawing (fill color, stroke color, line width of stroke)
    ctx.fillStyle = "rgba(255, 0, 0 , 0.5)"

    //draw a rectangle
    //contextObject.fillRect(x, y, width, height)
    ctx.fillRect(66, 80, 119, 541)

    //lines do not have fill properties so we must apply a stroke style
    ctx.strokeStyle = "rgba(0,0,255,0.5)"

    //for lines, use moveTo to get the cursor to drop to the first point, then lineTo to draw the line
    ctx.moveTo(588, 222)
    ctx.lineTo(702, 68)
    ctx.stroke()

    //circles are made out of a completed arc
    //contextObject.arc(x, y, radius, startAngle, endAngle, counterClockwise)
    ctx.beginPath()
    ctx.arc(421, 206, 86, 0, (2 * Math.PI), false )
    ctx.lineTo(476, 141)
    ctx.closePath()
    ctx.fill()


    //set up your style first
    ctx.fillStyle = "rgba(0, 0, 255, 0.5)"

    //drawing irregular
    ctx.beginPath()
    ctx.moveTo(362, 448)
    ctx.lineTo(704, 326)
    ctx.lineTo(639, 683)
    ctx.closePath()
    ctx.fill()

    ctx.strokeStyle = "rgba(180, 0, 180, 0.5)"

    ctx.moveTo(41, 749)
    ctx.lineTo(758, 749)
    ctx.stroke()
}
