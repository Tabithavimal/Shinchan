const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var line;
var shinchan;
var shinchanImg,coinImg;
var score =0;

function preload(){

shinchanImg=loadImage("shinchan.png")
coinImg=loadImage("coin.png")
}



function setup() {
  createCanvas(900,1500);
  
  engine = Engine.create();
	world = engine.world;
 


ground= createSprite(width/2,1450,width,20)
line1= createSprite(170,260,300,20)
line1.shapeColor="orange"
line2= createSprite(600,200,200,20)
line2.shapeColor="pink"
line3= createSprite(300,500,200,20)
line3.shapeColor="green"
line4=createSprite(700,900,200,20)
line4.shapeColor="purple"
line5= createSprite(200,1000,200,20)
line5.shapeColor="yellow"
line6= createSprite(400,1350,200,20)
line6.shapeColor="blue"
line7= createSprite(550,700,200,20)
line7.shapeColor="white"
door1=new Door(170,150,300,250)

shinchan=createSprite(100,1400,90,100)
shinchan.addImage("shinchan",shinchanImg)
shinchan.scale=0.70



coin1=createSprite(600,150,70,50)
coin1.addImage("coin",coinImg)
coin1.scale=0.3
coin2=createSprite(300,450,70,50)
coin2.addImage("coin",coinImg)
coin2.scale=0.3
coin3=createSprite(700,850,70,50)
coin3.addImage("coin",coinImg)
coin3.scale=0.3
coin4=createSprite(550,650,70,50)
coin4.addImage("coin",coinImg)
coin4.scale=0.3
coin5=createSprite(200,950,70,50)
coin5.addImage("coin",coinImg)
coin5.scale=0.3
coin6= createSprite(400,1300,70,50)
coin6.addImage("coin",coinImg)
coin6.scale=0.3
  Engine.run(engine);


}

function draw() {
  background("black");  
 textSize(25)
text("score :"+score,770,50)




  if(keyDown("space"))
  { 
    shinchan.velocityY=-5
  
   }
shinchan.velocityY=shinchan.velocityY+0.8
shinchan.collide(ground)
shinchan.collide(line1)
shinchan.collide(line2)
shinchan.collide(line3)
shinchan.collide(line4)
shinchan.collide(line5)
shinchan.collide(line6)
shinchan.collide(line7)



 if(keyDown(RIGHT_ARROW)) 
 {
shinchan.x=shinchan.x+5

 }

 if(keyDown(LEFT_ARROW)) 
 {
shinchan.x=shinchan.x-5

 }

 door1.display();


if(shinchan.isTouching(coin1)){

coin1.visible=false;
coin1.destroy();
line2.visible=false;
}


if(shinchan.isTouching(coin2)){

  coin2.visible=false;
  coin2.destroy();
 line3.visible=false;
  }


  if(shinchan.isTouching(coin3)){

    coin3.visible=false;
    coin3.destroy();
   line4.visible=false;
    }


    if(shinchan.isTouching(coin4)){

     coin4.visible=false;
     coin4.destroy();
      line7.visible=false;
      }

      if(shinchan.isTouching(coin5)){

       coin5.visible=false;
       coin5.destroy();
        line5.visible=false;
    }


   if(shinchan.isTouching(coin6)){

     coin6.visible=false;
     coin6.destroy();
    line6.visible=false;

   score=score+1
  }





  drawSprites();
}