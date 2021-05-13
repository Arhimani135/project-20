var bgImg , cat1 , cat2 , mouse1 , mouse2 ;
var cat , mouse ;
var cat4 ;


function preload() { 
   bgImg  = loadImage ("images/garden.png");
   cat1 = loadAnimation ("images/cat1.png");
   cat2 = loadAnimation ("images/cat2.png " , "images/cat3.png ","images/cat4.png");
   mouse1 = loadAnimation("images/mouse1.png");
   mouse2 = loadAnimation ("images/mouse2.png", "images/mouse3.png");
  
   cat4 = loadAnimation("images/cat4.png");
}

function setup(){
    createCanvas(1000,800);
   
    mouse = createSprite(200,600,50,50);
    mouse.addAnimation("mouseSitting",mouse1);
    mouse.scale = 0.2;

    cat = createSprite(800,600,50,50);
    cat.addAnimation("catSitting",cat1);
    cat.scale = 0.2;
    

}

function draw() {

    background(bgImg);
     
    if(cat.x - mouse.x <(cat.width - mouse.width) /2){
       cat.velocityX = 0;
       cat.addAnimation("catStop",cat4);
       cat.changeAnimation("catStop");
    }

    drawSprites();
}


function keyPressed(){

 if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouse2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;

 }

 if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mouse2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;

    cat.addAnimation("catWalking",cat2);
    cat.changeAnimation("catWalking");
    cat.velocityX = cat.velocityX - 3;

 }


}
