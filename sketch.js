var naruto,narutoImage;
var road,roadImage;
var PLAY = 1;
var END = 0;
var gameState=PLAY;
var pain,painImage;
var left,right,leftImage,RightImage;
var painGroup;
var pains;
function preload(){
  narutoImage = loadImage("naruto.jpg");
  roadImage = loadImage("road.jpg");
  painImage = loadImage("pain.jpg");
  leftImage = loadImage("left.png");
  rightImage = loadImage("right.png");
}



function setup(){
createCanvas(600,600);
  road = createSprite(300,300);
  road.addImage(roadImage);
  naruto = createSprite(300,500);
  naruto.addImage(narutoImage);
  left = createSprite(200,200);
  left.addImage(leftImage);
  right = createSprite(400,200);
  right.addImage(rightImage);
  naruto.scale = 0.5
  naruto.scale = 0.5
  right.scale = 0.4
  left.scale = 0.4
  road.velocityY = 3;
  painGroup = new Group();
  road.scale = 5;
}

function draw(){
background("black");
  
  if(gameState==PLAY){
  
  if (keyDown("left_arrow")){
    naruto.x = naruto.x -5;
  }
  if (keyDown("right_arrow")){
    naruto.x = naruto.x +5;
  }
   pains();
  if (road.y>600){
    road.y = 400;
  }
    if (mousePressedOver(right)) {
    ( naruto.x = naruto.x +5);
    }
    
    if (mousePressedOver(left)) {
    ( naruto.x = naruto.x -5);
    }
  if(painGroup.isTouching(naruto)||naruto.y>600){
    gameState = END;
  }
 
  drawSprites();
}
   if(gameState==END){
    background("red");
     textSize(40);
     fill("blue");
     stroke("Black");
     text("GAME OVER",200,200)
  }
  
}

function pains(){
  if (frameCount % 100 ==0 ){
    pain = createSprite(Math.round(random(100,500)),-50)
    pain.addImage(painImage);
    pain.velocityY = 3;
    pain.scale = 0.5
        pain.lifetime = 250;
    pain.depth = naruto.depth
    naruto.depth +=1 ;
    painGroup.add(pain);
  }
}
