var person,personImg;
var clouds,cloudImg, cloudsGrp;
var raindrops,rainImg,rainGrp;
var go,goImg;
var restart, restartImg;
var gameoversound;
var gameState = "play";
var score = 0;
var lives = 3;


function preload(){

  cloudImg = loadImage("download.png");
  personImg = loadImage("stickman.png");
  rainImg = loadImage("water drop.png");
  goImg = loadImage("go.jpg");
  restartImg = loadImage("restart Img.png");
  gameoversound = loadSound("loud buzzer.mp3");
}

function setup(){
 
   createCanvas(400,400);


  person = createSprite(200,395);
  person.addImage(personImg);

  go = createSprite(200,200);
  go.addImage(goImg);
  go.scale = 2;
  go.visible = false;

  restart = createSprite(200,250);
  restart.addImage(restartImg);
  restart.scale = 2;
  restart.visible = false;



  cloudsGrp = new Group();
rainGrp = new Group();

}

function draw(){

    if(gameState === "play"){

    
        if(keyDown("left")){
            person.x-=2;
          }
    
          if(keyDown("right")){
            person.x+=2;
          }
    
          if(keyDown("space")){
            person.velocityY =-5;
          }
           
          person.velocityY = person.velocityY + 0.8;

          if(frameCount%80 ===0){

            score = score+10;

            if(cloudsGrp.isTouching(person)||rainGrp.isTouching(person)){

                lives = lives-1;


            }
            if(lives===0){
                gameState = "end";
            }
            spawnClouds();
          }

          if(gameState === "end"){

         go.visible = true;
         restart.visible = true;
         gameoversound.play();

         if(mousePressedOver(restart)){

            gameState ="play";

         }
    

          }

        


    }
 

   


  drawSprites();
}

function spawnClouds(){

    if(frameCount%80 ===0){

        clouds = createSprite(200,Math.round(randomNumber(10,390)));
        clouds.addImage(cloudImg);
      clouds.scale = 1.2;
      clouds.velocityX =-2;

      raindrops = createSprite(100,200);
      raindrops.addImage(rainImg);
      raindrops.x = clouds.x;
      raindrops.y = clouds.y + 5;
      raindrops.velocityY +=3;
      raindrops.scale = 0.55;
      clouds.velocityX =-2;

      cloudsGrp.add(clouds);
      rainGrp.add(raindrops);
    }


}