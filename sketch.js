const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Bodies;

var sun;
var engine,world;
var planet1,planet2;

function setup(){
  createCanvas(1365,625);
  engine = Engine.create();
  world = engine.world;


  sun = createSprite(682.5,312.5,75,75); 
  sun.shapeColor = "yellow";
  sun.setCollider("circle",0,0,50);
  
  planet1 = createSprite(682.5,162.5,50,50);
  planet1.shapeColor = "blue";
  planet2= createSprite(682.5,512.5,50,50);
  planet2.shapeColor = "red";
}
function draw(){
  background("white");
  if (World.frameCount%60 === 0){
    sun.width = sun.width+25;
    sun.height = sun.height +25;

  }
  if(isTouching(planet1,sun)){
    planet1.destroy();

  }
  if(isTouching(planet2,sun)){
    planet2.destroy();

  }
  if(sun.width>1000){
    back.shapeColor ="yellow";
  }
  drawSprites();
}
