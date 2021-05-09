var backgroundImg,girlImg,diamondImg,goldcoinsImg,moneyImg,pearlsImg;
var score=0




function preload(){
backgroundImg =loadImage("background.png")
diamondImg =loadImage("diamond.png")
girlImg =loadAnimation("girl.png","girl2.png","girl3.png")
goldcoinsImg =loadImage("gold coins.png")
moneyImg =loadImage("money.png")
pearlsImg =loadImage("pearls.png")
}


function setup(){ 
createCanvas(displayWidth,displayHeight)
backgroundsprite=createSprite(500,500,displayWidth,displayHeight)
backgroundsprite.addImage(backgroundImg)
//backgroundsprite.velocityX=-6

groundsprite=createSprite(600,620,10000,10)
groundsprite.visible=false

girlSprite=createSprite(250,600,20,20)
girlSprite.addAnimation("running",girlImg)
girlSprite.scale=1.5

trasuresGroup =new Group();



}

function draw(){
background("black")
if(backgroundsprite.x<0){
   backgroundsprite.x=backgroundsprite.width/2
}

if(keyDown("space")){
   girlSprite.velocityY=-3
   girlSprite.velocityX=10
}
console.log(girlSprite.x)
girlSprite.velocityY=girlSprite.velocityY+0.1
girlSprite.collide(groundsprite)

camera.position.x=girlSprite.x
camera.position.y=displayHeight/2

spawntreasures();
drawSprites();
fill("black")
textSize(15)
text("SCORE:"+score,girlSprite.x,100)
}

function spawntreasures(){
    
      if(frameCount % 60 === 0) {
        var trasures = createSprite(Math.round(random(100,800)));
        //obstacle.debug = true;
        trasures.velocityX = -(6 + 3*score/100);
        
        //generate random obstacles
        var rand = Math.round(random(1,4));
        switch(rand) {
          case 1: trasures.addImage(diamondImg);
                  break;
          case 2: trasures.addImage(pearlsImg);
                  break;
          case 3: trasures.addImage(goldcoinsImg);
                  break;
          case 4: trasures.addImage(moneyImg);
                  break;
          
          default: break;
        }
        
        //assign scale and lifetime to the obstacle           
        trasures.scale = 0.5;
        trasures.lifetime = 300;
        //add each obstacle to the group
        trasuresGroup.add(trasures);
      }
    }
    
