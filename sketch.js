var student
var gameState = CLASS
var CLASS = 1;
var OFFICE = 2;
var LIBRARY = 3;
var STORE = 4
var END = 0;
function preload() {

 boyAni = loadAnimation("images/boy1.png", "images/boy2.png", "images/boy3.png", "images/boy4.png", "images/boy5.png");
lockImg = loadImage("images/key1.png")
door1 = loadImage("images/door1.png")
door2 = loadImage("images/door2.png")

classImg = loadImage("images/classrom.jpg")
  officeImg = loadImage("images/office.png")
  libraryImg = loadImage("images/library.png")
  storeImg = loadImage("images/storeroom.png")

}

function setup() {
  createCanvas(displayWidth-20, displayHeight-20);

  edges = createEdgeSprites();

  ground1 = createSprite(150,750,5000,20)
  //ground1.visible = false

  ground2 = createSprite(270, 550, 250, 20)
  ///ground2.visible = false

  ground3 = createSprite(650, 550, 250, 20)
  //ground3.visible = false
  ground4 = createSprite(1100,550,250,20)
 
  lock = createSprite(280,520,50,50)
    lock.debug = true

 lock.addImage(lockImg)
  lock.scale = 0.2

  student = createSprite(100,100,30,50)
  student.debug = true
  student.addAnimation("study", boyAni);

door = createSprite(1200,460,20,20)
door.addImage(door1)
//door2 = createSprite(1250,460,20,20)
//door2.addImage(door2)
//door2.visible = false
}

function draw() {

  background(classImg)

student.collide(edges)
student.collide(ground1)
student.collide(ground2)
student.collide(ground3)
student.collide(ground4)

  if (keyDown("space") && student.y >= 100) {
    student.velocityY = -12;
  }

  student.velocityY = student.velocityY + 0.8
  if (keyDown("up")) {
    student.y = student.y - 10

  }
  if (keyDown("down")) {
    student.y = student.y + 10

  }
  if (keyDown("left")) {
    student.x = student.x - 10

  }
  if (keyDown("right")) {
    student.x = student.x + 10

  }
//if (student.isTouching(lock)  ){
  //lock.visible = false;

  //door1.changeImage(door2)
//console.log(lock.x)
//}
if(student.isTouching(lock) )
{ 
  lock.visible = false
    student.velocityX=0;
    //student.addImage( );
    //to.x =300;
   // tom.scale=0.2;
    //tom.changeAnimation("tomLastImage");
    door.addImage(door2);
    //jerry.scale=0.15;
    door.changeImage(door2);
}  

//if(gameState === CLASS){


//else{
//  lock.visible = true
//}


//}




//else if(gameState === OFFICE){
//  background(officeImg)
//}
//else if(gameState === LIBRARY){
//  background(libraryImg)
//
//
//
//
//
//
//}
//
//else if (gameState === STORE) {
//  background(storeImg)
//
//
//}
//
//else if(gameState === END){
//
//}
//
//
//
//
//
//   

 drawSprites();

}

//function isTouching(p1,p2){
//if(p1.x-p2.x<p1.width/2+p2.width/2 && 
//  p2.x-p1.x<p1.width/2+p2.width/2 &&
//  p1.y-p2.y<p1.height/2+p2.height/2 &&
//  p2.y-p1.y<p1.height/2+p2.height/2){
//    return true
//  }
//  else{
//    return false
//  }
//}