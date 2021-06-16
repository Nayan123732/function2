var fixedRect,movingRect;
function setup() {
  createCanvas(800,800);
 fixedRect = createSprite(400, 200, 80, 30);
 movingRect = createSprite(200, 200, 50, 80);
 fixedRect.shapeColor ="green";
 movingRect.shapeColor ="green";
 movingRect.velocityX = 5;
 movingRect.velocityY = 0.5;
}

function draw() {
  background(255,255,255); 
 fixedRect.shapeColor ="green";
 movingRect.shapeColor ="green";
  //movingRect.x = mouseX;
  //movingRect.y = mouseY;
  if(isTouching(movingRect,fixedRect)){
    fixedRect.shapeColor ="red";
    movingRect.shapeColor ="red";
  
  }
  bounceOff(movingRect,fixedRect)
 
  drawSprites();
}


