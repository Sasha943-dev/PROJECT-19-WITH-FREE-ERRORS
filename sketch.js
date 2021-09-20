var person,personImg;
var cloudImg;
var sky, skyImg;
var lives = 3;

function preload(){

  cloudImg = loadImage("download.png");
  personImg = loadImage("stickman.png");
}

function setup(){

  person = createSprite(200,395);
  person.addImage(personImg);



}

function draw(){

  createCanvas(400,400);
  drawSprites();
}