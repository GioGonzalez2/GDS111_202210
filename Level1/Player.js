function Player(){
    
        this.x = canvas.width/2;
        this.y = canvas.height/2
    
        this.width = 100
        this.height = 100
    
        this.vx = 0
        this.vy = 0
    
        this.color = 'blue'
    
        this.draw = function(){
    
            context.save();
            context.fillStyle = this.color;
            context.translate(this.x, this.y)
            context.beginPath();
            context.arc(0,0,this.width/2,0,360*Math.PI/180,true)
            context.closePath();
            context.fill();
            context.restore();
            
        }
        this.move = function(){
    
            this.x += this.vx;
            this.y += this.vy;
        }
    
    }