var bullet,wall,speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  
  bullet=createSprite(50, 200, 50, 10);
  speed=random(55,90);
  thickness=random(22,83);
  wall=createSprite(1500, 200, thickness, height/2);
  weight=random(400,1500);
  bullet.velocityX = speed;
}

function draw() {
  background("black");
  if(collided(bullet,wall)){
    bullet.velocityX=0;
    var d=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(d>10){
      bullet.shapeColor=("red");
    }
    if(d<10){
      bullet.shapeColor="green";
    }
  }
  drawSprites();
}
function collided(b,w){
br= b.x+b.width;
wl=w.x;
if(br>=wl){
  return true;

}
return false;
}