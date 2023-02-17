
var sea; 
var seaImg;
var shipImg1;
var ship;

function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}


function setup(){
createCanvas(400,400);

sea = createSprite(200,200);
sea.addImage(seaImg);
sea.scale = 0.4;
sea.velocityX=-4;

ship = createSprite(200,200,20,20);
ship.addAnimation("ship", shipImg1);
ship.scale = 0.2;

}

function draw() {
background("blue");

if (sea.x < 0 ){
sea.x = sea.width/6
}

drawSprites();
}