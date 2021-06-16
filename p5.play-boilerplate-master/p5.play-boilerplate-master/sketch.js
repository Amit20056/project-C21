var wall,thickness;
var bullet,speed,weight

function setup() {
  createCanvas(1600,400);
  speed=random(223,321)
  weight=random(30,51)
  thickness=random(22,83)

bullet=createSprite(50,200,50,50)
wall=createSprite(1200,200,thickness,height/2);

bullet.velocityX=speed

}

function draw() {
  background(255,255,255);  
  
  if(wall.x-bullet.x<(bullet.width+wall.width)/2)
  {
    var deformation=(0.5*speed*speed*weight)/22500;
    bullet.velocityX=0
    if(deformation>180)
    {
      bullet.shapeColor="red"
    }
    if(deformation>80&& deformation<180)
    {
      bullet.shapeColor="yellow"  
    }
    if(deformation<80)
    {
      bullet.shapeColor="green"
    }

  }
  function hasCollided(bullet,wall)
  {
    bulletRightEdge=bullet.x +bullet.width;
    wallLeftEdge=wall.x;
    if (bulletRightEdge>=bulletLeftEdge)
    {
      return true
    }
      return false
  }
  drawSprites();
}