class Coin{

    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
            
        
    this.image=loadImage("coin.png")
        this.body = Bodies.rectangle(x, y,width,height,options );
        this.width=width
        this.height=height
       
        World.add(world, this.body); 
    
    }
    
    
    
    display(){
    
        imageMode(CENTER);
        fill("brown")
        image(this.image,this.body.position.x, this.body.position.y, this.width, this.height);
       
    
    }


    
}