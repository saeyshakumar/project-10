var seaimg,sea
function preload(){
seaimg = loadImage("sea.png")
shipimg= loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png")
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(400,200)
  sea.addImage("sea1",seaimg)
  sea.scale=0.3
  ship=createSprite(130,200,30,30);
  ship.addAnimation("ship1",shipimg)
  ship.scale=0.25
}

function draw() {
  background("blue");
  sea.velocityX=-5
  if(sea.x<0){
    sea.x=sea.width/8
  }
 drawSprites();
}