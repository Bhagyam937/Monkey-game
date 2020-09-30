var monkey, sceneImage, monkey_walking, obstacleImage, bananaImage, bananaGroup, obstacle, obstacleGroup, score, scene, sceneImage, invisGround, gameState, PLAY, END, bananas, bananasImage,bananasGroup,survivalTime;  

function preload () {
monkey_walking = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png","Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  
sceneImage = loadImage("jungle2.jpg");
  
obstacleImage = loadImage("stone.png");
  
bananaImage = loadImage("Banana.png");
  
bananasImage = loadImage("Bananas.png");

}
  
function setup() {
scene = createSprite(0,0,0,0);
scene.addImage(sceneImage);
scene.x=scene.width/1.2;

monkey = createSprite(50,300,0,0);
monkey.addAnimation("walk", monkey_walking);
 
invisGround = createSprite(0,400,800,5);
invisGround.visible=false;
  
  obstacleGroup = createGroup();

  END=0;
  PLAY=1;
  gameState = PLAY;
  
  score=0;
  
  bananaGroup = createGroup();
  bananasGroup = createGroup();
}

function draw () {
createCanvas(800,400);
  background(0);
  monkey.scale=0.2;

  if(gameState===PLAY){
  scene.velocityX=-10;
  scene.scale=2;
  
  spawnbanana();
  //spawnbananas();
  spawnobstacle();
    
        switch(score) {
      case 10: monkey.scale=0.22;
              break;
      case 20: monkey.scale=0.24;
              break;
      case 30: monkey.scale=0.26;
              break;
      case 40: monkey.scale=0.28;
              break;
      case 50: monkey.scale=0.3;
              break;
      default: break;
    }
    
    if(monkey.isTouching(bananaGroup)){
    score=score+5;
    bananaGroup.destroyEach();
    }

    if(monkey.isTouching(bananasGroup)){
    score=score+10;
    bananasGroup.destroyEach();
    }
    
    if(monkey.isTouching(obstacleGroup)){
    score=0;
    monkey.scale=0.2;
    obstacleGroup.destroyEach();
    }
    
    
  if (keyDown("space")&&monkey.y>305) {
  monkey.velocityY=-12;
  }
  }
    monkey.velocityY= monkey.velocityY + 0.8;
  monkey.collide(invisGround)
  if(scene.x<-220){
  scene.x=scene.width/2
  }
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("survival Time: "+ survivalTime,100,50);
    
  
  stroke("white");
  textSize(20);
  fill("white");

  
  drawSprites();
  
  text("Score : " + score, 500, 50);
}

function spawnbanana () {
if (frameCount % 80 === 0){
  var banana = createSprite (800, 200, 0, 0);
  banana.velocityX=-10;
  banana.lifetime=100;
  banana.scale=0.1;
  banana.addImage(bananaImage);
  bananaGroup.add(banana);
}
}
function spawnbananas () {
if (frameCount % 150 === 0){
  var bananas = createSprite (800, 200, 0, 0);
  bananas.velocityX=-10;
  bananas.lifetime=100;
  bananas.scale=0.05;
  bananas.addImage(bananasImage);
  bananasGroup.add(bananas);
}
}
function spawnobstacle () {
if (frameCount % 80 === 0){
  var obstacle = createSprite (800, 350, 0, 0);
  obstacle.velocityX=-10;
  obstacle.lifetime=100;
  obstacle.scale=0.15;
  //obstacle.debug=true;
  obstacle.setCollider("rectangle",0,0,20 ,20);
  obstacle.addImage(obstacleImage);
  obstacleGroup.add(obstacle);
}
}