var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  speed = random(45,60)
  weight = random(1500,3000)
  car = createSprite(50,200,50,50)
  wall = createSprite(1500,200,60, height/2)

}

function draw() {
  background(255,255,255);
  drawSprites();

  car.velocityX = speed;

   if(wall.x - car.x < (wall.width + car.width)/2 )
  {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500; 

    if(deformation>180)
     {
      car.shapeColor = color(255,0,0)
     }

    if(deformation<180 && deformation>100)
     {
      car.shapeColor = color(230,230,0)
     }
 
    if(deformation>80)
     {
      car.shapeColor = color(0,255,0)
     }

  }

}