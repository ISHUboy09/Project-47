var MAN,MAN_img;
var ground,ground_img,grass_img; 
var back_img;
var obstacle,obstacle_img,obstacle_group;
var standingman,back_img;;
var panther,panther_img,panther_group; 
var score = 0;




function preload(){

 MAN_img = loadAnimation("S1.png","S2.png","S3.png","S4.png","S5.png","S6.png")
 back_img = loadImage("back4.jpg");
 obstacle_img = loadImage("obstacle1.png");
 ground_img = loadImage("ground 5.jpg");
 standingman = loadImage("S1.png");
 grass_img = loadImage("spareground.png");
 panther_img = loadImage("E1.png","E2.png","E3.png");

}


function setup() {
  createCanvas(displayWidth,655);
  
  
  MAN = createSprite(150, 489, 50, 50);
  MAN.addImage("standing",standingman);
  MAN.addAnimation("MAN",MAN_img)

  ground = createSprite(400,550,800,20);
  ground.addImage("GR1",grass_img);
  ground.velocityX = -5;


  panther_group = new Group();
  obstacle_group = new Group();


}

function draw() {
  background(back_img);  
  
  
  MAN.collide(ground);
  
  if(ground.x<480){
 ground.x = ground.width/2;   
  }

  if(keyDown("SPACE")){
   MAN.changeAnimation("MAN",MAN_img)
   MAN.velocityY = -5;

  }
  MAN.velocityY += 0.8;

 text("score = "+ score,200,200)



 

  spawnPanther();
  spawnObstacles();
  drawSprites();
}

function spawnObstacles(){
    
   if(frameCount %85 === 0 ){
     
    
      obstacle = createSprite(width-50,200,20,20);  
      obstacle.addImage("OB1",obstacle_img);
      obstacle.scale = 0.4;
      obstacle.velocityX = -6;
      obstacle.y = Math.round(random(120,220))
     
      obstacle.depth = MAN.depth;
      MAN.depth += 1;
     
      console.log(MAN.depth,obstacle.depth)
      obstacle_group.add(obstacle) 


    }  

}

function spawnPanther(){
  
  if(frameCount %85 === 0){
   
   
     panther = createSprite(width-50,489,20,20)
     panther.addImage("E1",panther_img);    
     panther.addAnimation("panther",panther_img)
   
   
     panther.velocityX = -6.5;
     panther.scale = 0.6;
     panther.depth = MAN.depth;
     MAN.depth += 1 
    panther_group.add(panther)


  }



}









//1) when the man is touching obstacle score should increase;
//2) man touching panther game over;
//3) reset button;
//4) animation for panther;
//5 obstacle; (done)
//6) stars;