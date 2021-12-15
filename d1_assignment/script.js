var canvas = document.getElementById("canvas") 
var ctx = canvas.getContext("2d")

var shapes = new Image()
shapes.src = "images/shapes.png"

shapes.onload = function(){


    ctx.drawImage(shapes, 0, 0, 800, 800)

    //SQUARE
    ctx.fillStyle = "yellow"
    ctx.strokeStyle = "black"
    ctx.lineWidth = "5"

    ctx.fillRect(85,302,100,100)
    ctx.strokeRect(85,302,100,100)

    //LINE
    ctx.moveTo(85,683)
    ctx.lineTo(279,549)
    ctx.strokeStyle = "rgb(255,0,0)"
    ctx.lineWidth = "5"
    ctx.stroke()

    //CIRCLE
    ctx.fillStyle = "#ffff00"
    ctx.strokeStyle = "red"
    ctx.lineWidth = "5"
    ctx.beginPath()
    ctx.arc( 385.5, 441.5, 66, 0, (2 * Math.PI), false)
    ctx.lineTo(452,440)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()

    //PENTAGRAM
    ctx.fillStyle = "#ff00ff"
    ctx.strokeStyle = "#00ffff"
    ctx.lineWidth = "5"
    ctx.beginPath()
    ctx.moveTo(557,308)
    ctx.lineTo(668,284)
    ctx.lineTo(725,380)
    ctx.lineTo(651,465)
    ctx.lineTo(548,421)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()

    //STAR
    ctx.fillStyle = "#ffff00"
    ctx.strokeStyle = "rgb(32,32,32)"
    ctx.lineWidth = "5"
    ctx.beginPath()
    ctx.moveTo(635,496)
    ctx.lineTo(669,555)
    ctx.lineTo(734,568)
    ctx.lineTo(689,616)
    ctx.lineTo(697,682)
    ctx.lineTo(636,654)
    ctx.lineTo(575,682)
    ctx.lineTo(583,616)
    ctx.lineTo(538,567)
    ctx.lineTo(603,554)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()

}