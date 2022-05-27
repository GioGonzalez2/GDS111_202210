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
//Ball Class Object ------------------------------------------------------>>>>>

    this.drawCircle = function(){

         context.save();
        context.fillStyle = this.color;
         context.translate(this.x, this.y)
         context.beginPath();
         context.arc(0,0,this.width/2,0,360*Math.PI/180,true)
         context.closePath();
        context.fill();
         context.restore();
        
     }
    //-------------------------------------------------------------------->>>>>
// Movement System ----------->>>>>>>
this.move = function(){

    this.x += this.vx;
    this.y += this.vy;

}
this.left = function() 
{
    return this.x - this.width/2;
}
this.right = function() 
{
    return this.x + this.width/2;
}

this.top = function() 
{
    return this.y - this.height/2;
}
this.bottom = function() 
{
    return this.y + this.height/2;
}

this.hitTestObject = function(obj)
{
    if(this.left() < obj.right() && 
       this.right() > obj.left() &&
       this.top() < obj.bottom() &&
       this.bottom() > obj.top())
    {
        return true
    }
    return false;
}
}