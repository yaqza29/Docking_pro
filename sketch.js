var iss_i, spacebg_i, spacecraft1_i, spacecraft2_i, spacecraft3_i, spacecraft4_i;
var iss, spacecraft;
var hasDocked = false;

function preload(){
  iss_i = loadImage("pic/iss.png");
  spacebg_i = loadImage("pic/spacebg.jpg");
  spacecraft1_i = loadImage("pic/spacecraft1.png");
  spacecraft2_i = loadImage("pic/spacecraft2.png");
  spacecraft3_i = loadImage("pic/spacecraft3.png");
  spacecraft4_i = loadImage("pic/spacecraft4.png");
}

function setup() {
  createCanvas(800,400);
  iss = createSprite(400,150,10,10);
  iss.addImage(iss_i);
  iss.scale = 0.8;
  spacecraft = createSprite(200,300,10,10);
  spacecraft.addImage(spacecraft1_i);
  spacecraft.scale = 0.25;
}

function draw() {
  background(spacebg_i);  
  drawSprites();

  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1)
    if(keyDown(LEFT_ARROW)){
      spacecraft.addImage(spacecraft3_i);
      spacecraft.x = spacecraft.x - 1;
    }
    if(keyDown(RIGHT_ARROW)){
      spacecraft.addImage(spacecraft4_i);
      spacecraft.x = spacecraft.x + 1;
    }
    if(keyDown(DOWN_ARROW)){
      spacecraft.addImage(spacecraft2_i);
    }
    if(keyDown(UP_ARROW)){
      spacecraft.y = spacecraft.y - 3;
    }
  }

  if(spacecraft.y <=(iss.y+110) && spacecraft.x <=(iss.x-11)){
    hasDocked = true;
    fill("white");
    text("Docking succcessful",200,300);
  }
}