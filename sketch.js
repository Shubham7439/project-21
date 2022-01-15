var car , wall,thickness;
var speed,weight;
function setup() {
  createCanvas(800,400);
 car=createSprite(50, 200, 20, 50);
 car.shapeColor="white";
 wall=createSprite(700,200,thickness,height/2)
 wall.shapeColor=color(80,155,60)
 speed=random(223,321)
 weight=random(32,52)
 thickness=random(22,83)
 car.velocityX=speed;
}

function draw() {
  background(0);  
  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX=0;
    var d=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(d>10){
      wall.shapeColor=color(255,0,0);
    }
    
    if(d<10){
      wall.shapeColor=color(0,255,0);
    }
  }

  drawSprites();
}