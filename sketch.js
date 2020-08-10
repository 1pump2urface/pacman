var topLine 
var bottomLine
var leftLine
var rightLine
var rect1Left
var rect2Left
var topRect1 , topRect2
var sB1 , sB2 , sB3 , sB4
var vB1 , vB2 , vB3 , vB4
var bottomRect
var mid1 , mid2 , mid3 , mid4
var crossHorizontal , crossVertical
var crossHorizontal2, crossVertical2
var obstVert1 ,obstVert2 , obstVert3
var obstHor1 , obstHor2
var l1 , l2 , l3 , l4 , l5 , l6  , l7, l8
var leftTurn1 , rightTurn1 , leftTurn2 , rightTurn2
var rightRect
var bt1,bt2,bt3,bt4,bt5,bt6,bt7,bt8,bt9,bt10
var bottomRect2
var s1 , s2 , s3 , sr1 , sr2 , sr3 





function preload(){

}
function setup(){
  createCanvas(1300,650)
  topline = createSprite(650 , 20 , 1300, 10);
  bottomline = createSprite(650, 600, 1300 , 10);
  leftLine = createSprite(20,300,10,600);
  rightLine = createSprite(1250,300,10,600);
  noFill();
  topRect1 = createSprite(100,65,40,80);
  
  rect1Left = createSprite(75,325,100,70);
  sB1 = createSprite(150,170,150,10);
  vB1 = createSprite(150,215,10,80);
  sB2 = createSprite(150,400,150,10);
  vB2 = createSprite(180,355,10,80);
  vB3 = createSprite(100,445,10,80);

 
  mid1 = createSprite(550,350,10,60);
  mid2 = createSprite(600,375,100,10);
  mid3 = createSprite(650,350,10,60);
  mid4 = createSprite(580,320,70,10);

  crossHorizontal = createSprite(760,270,100,10);
  crossVertical  = createSprite(760,270,10,100);
  crossHorizontal2 = createSprite(465,270,100,10);
  crossVertical2  = createSprite(465,270,10,100);
  obstHor1 = createSprite(355,163,100,10);
  obstVert1 = createSprite(355,190,10,60);

  obstHor2 = createSprite(615,163,100,10);
  obstVert2 = createSprite(615,190,10,60);

  obstHor3 = createSprite(845,163,100,10);
  obstVert3 = createSprite(845,190,10,60);
  leftTurn1 = createSprite(525,460,10,70);
  leftTurn2 = createSprite(490,429,70,10);
  rightRect = createSprite(1200,325,100,70);


  rightTurn1 = createSprite(695,460,10,70);
  rightTurn2 = createSprite(725,425,70,10);

  //liines
  l1 = createSprite(280,80,80,30);
  l2 = createSprite(500,80,80,30);
  l5 = createSprite(690,80,80,30);
  
  s1 = createSprite(390,333,60,10);
  s2 = createSprite(360,358,10,60);
  s3 = createSprite(334,385,60,10);

  sr1 = createSprite(830,333,60,10);
  sr2 = createSprite(856,358,10,60);
  sr3 = createSprite(885,383,60,10);
  rightRect = createSprite(1200,325,100,70)
  l3 = createSprite(1047,136,10,70);
  l4 = createSprite(1047,400,10,120);
  l6 = createSprite(385,65,20,80);
  l7 = createSprite(595,65,20,80);


  //Bottom
  bt1 = createSprite(180,560,200,10);
  bt2 = createSprite(213,525,10,60);
  bt3 = createSprite(305,500,100,10);
  bt4 = createSprite(320,530,10,60);
  bt5 = createSprite(410,560,100,10);
  bt6 = createSprite(400,530,10,60);
  bt7 = createSprite(580,560,100,10);
  bt8 = createSprite(760,560,100,10);
  bt9 = createSprite(970,560,100,10);
  




 
  

  
  

  

  
}
function draw(){

  background(0);
  drawSprites();
  dots();
}
function dots(){
  for(var i = 50; i < 1200; i++){

  
  if(World.frameCount % 2 == 0){
    var dot = createSprite(i,578,5,5);
    
  }
}
}