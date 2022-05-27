//Paddle Class Object ---------------------------------------------------->>>>>
function GameObject(x,y,w,h,color){

//Updates screen and draws player ---------->>>>
this.drawRect = function(){
    context.save();
    context.fillStyle = this.color;
    context.translate(this.x, this.y);
    context.fillRect((-this.width/2), (-this.height/2), this.width, this.height);
    context.restore();
    
}


}