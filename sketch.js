var f1,f2,f3,f4,f11,f12,f13,f14,monster,monster1,go,go1
var k1,k
var score=0
var fruitgroup
function preload(){
  f1=loadImage("fruit1.png");
   f2=loadImage("fruit2.png");
    f3=loadImage("fruit3.png");
  f4=loadImage("fruit4.png");
go1=loadImage("gameover.png")
 monster1=loadImage("alien1.png")
  k1=loadImage("sword.png")
  

}
function setup(){
  createCanvas(400,400)
  monster=createSprite(380,200,10,10)
  k=createSprite(200,200,10,10)
  fruitgroup=new Group()
}
function draw(){
background("white")
  text("score"+score,320,40)
  monster.addImage("m1",monster1)
  monster.velocityX=-6
  k.addImage("k1",k1)
  k.x=mouseX
  k.y=mouseY
  fruits()
  if(k.isTouching(fruitgroup)){
    score=score+1
  }
  drawSprites()
}
function fruits(){
  if(World.frameCount%60===0){
f11=createSprite(380,100,10,10)
    f11.velocityX=-6
    f11.y=Math.round(random(100,300))
    var x=Math.round(random(1,4))
    switch(x){
      case 1:f11.addImage("f1",f1)
        break
         case 2:f11.addImage("f2",f2)
        break
         case 3:f11.addImage("f3",f3)
        break
         case 4:f11.addImage("f4",f4)
        break
    }
  f11.scale=0.2   
        fruitgroup.add(f11)
  }
}