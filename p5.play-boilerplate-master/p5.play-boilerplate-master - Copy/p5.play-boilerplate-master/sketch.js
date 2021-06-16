var car,wall
var speed,weight

function setup() {
  createCanvas(1600,400);
  speed=random(50,90)
  weight=random(400,1500)

car=createSprite(50,200,50,50)
wall=createSprite(1500,200,60,200)

car.velocityX=speed

}

function draw() {
  background(255,255,255);  
  
  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    var deformation=(0.5*speed*speed*weight)/22500;
    car.velocityX=0
    if(deformation>180)
    {
      car.shapeColor="red"
    }
    if(deformation>80&& deformation<180)
    {
      car.shapeColor="yellow"  
    }
    if(deformation<80)
    {
      car.shapeColor="green"
    }

  }
  drawSprites();
}