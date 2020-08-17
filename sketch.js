var monkey,  monkeyimage, ground, groundimage ;
var bananagroup, stonegroup;
var score;

function preload(){

//monkeyimage = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");

//groundimage =loadImage("ground.jpg");

}

function setup(){

    createCanvas(600,400);

    monkey = createSprite(100,350,50,50);
    //monkey.addAnimation("running",monkeyimage);

ground = createSprite(300,350,600,10);

//ground.addImage("ground",groundimage);

bananagroup = new Group();

stonegroup = new Group();

score=0;



}

function draw(){
background(0);

textSize(25);
text("Score :"+score,400,50);



if (keyDown("space")){
monkey.velocityY=-10;
}
monkey.velocityY=monkey.velocityY+0.8;

if (bananagroup.isTouching(monkey)){
score=score+1;
bananagroup.destroyEach();
}

monkey.collide(ground);
spawnBanana();
spawnrock ();
drawSprites();


}
function spawnBanana(){
     if (frameCount %100===0){
        var banana1 = createSprite(600,random(150,200));
        banana1.shapeColor = "Yellow";
          //banana1.setAnimation("Banana");
          banana1.velocityX=-5;
          banana1.lifetime=150;
          bananagroup.add(banana1);
          banana1.scale=0.05;
     }
}

function spawnrock (){


    
        if (frameCount %100===0){
        var stone1=createSprite(500,350,40,40);
        // stone1.setAnimation("Stone");
         stone1.velocityX=-5;
         stone1.lifetime=300;
         stonegroup.add(stone1);
         
        }

}