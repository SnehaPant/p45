const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var back
var helicopterImage
var heli
var monster=[]
var obs=[]
var x=800
var bg
function preload(){
back=loadImage("background2.png")
helicopterImage=loadAnimation("helicop1.png","helicop2.png","helicop3.png","helicop4.png")
}



function setup() {
  createCanvas(1530,500);
bg=createSprite(width/2,height/2)
bg.addImage(back)
bg.velocityX=-5
bg.scale=2.5
  engine = Engine.create();
  world = engine.world;
heli=new Helicop()
var options={
  isStatic:true
}
ground=Matter.Bodies.rectangle(width/2,height,width,20,options)
World.add(world,ground)
}

function draw() {
  background(0);  
  Engine.update(engine); 
  drawSprites();
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,width,20) 
  heli.display()
  if(frameCount%200==0){
    x+=300
    monster.push(new Monster(x,Math.round(random(100,450)),50))
  }
 
  if(frameCount%60==0){
    x+=300
    obs.push(new Obstacle(x,Math.round(random(100,450)),Math.round(random(50,90)),Math.round(random(100,150))))
  }
  
  if(bg.x<0){
    bg.x=width/2
  }
 
}

function mouseDragged(){
  Matter.Body.setPosition(heli.body,{x:100,y:mouseY})
}
