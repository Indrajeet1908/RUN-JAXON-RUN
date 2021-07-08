var jaxon, jaxon_runing;
var pathImage;
var path;
var invisiablewall1, invisiablewall2;

function preload() {
  jaxon_runing = loadAnimation("Runner-1.png", "Runner-2.png");
  pathImage = loadImage("path.png");
}

function setup() {
  createCanvas(1000, 1000);

  path = createSprite(200,200);
  path.addImage(pathImage);
  path.velocityY = 4;
  path.scale=1.2;
  
  
  jaxon = createSprite(200, 500, 20, 50);
  jaxon.addAnimation("runing", jaxon_runing);
  jaxon.scale = 0.1;
  
  
  invisiablewall1 = createSprite(35,0,50,1500);
  invisiablewall1.visible = false;

  invisiablewall2 = createSprite(400,0,50,1500);
  invisiablewall2.visible = false;
  
}


function draw() {
  background("white");

  jaxon.x= mouseX

 if (path.y > 400) {
   path.y = height/4 ;
 }

 jaxon.collide(invisiablewall1);
 jaxon.collide(invisiablewall2); 



  
  drawSprites();
}