
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var engine,world
var tree,stone,boy,ground,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);
   
	engine = Engine.create();
	world = engine.world;
	
	tree=new Tree(700,500,200,500)
	boy=new Boy(300,400,100,150)
	stone=new Stone(200,400,20,20)
	ground=new Ground(400,550,1000,10)
	mango1=new Mango(700,200,10,10)
	mango2=new Mango(750,250,10,10)
	mango3=new Mango(760,210,10,10)
	mango4=new Mango(700,110,10,10)
	mango5=new Mango(750,155,10,10)
	mango6=new Mango(650,190,10,10)
	mango7=new Mango(650,250,10,10)
	mango8=new Mango(680,150,10,10)
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("red");
  tree.display()
  stone.display()
  boy.display()
  ground.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)
  detectCollision(stone,mango6)
  detectCollision(stone,mango7)
  detectCollision(stone,mango8)

  drawSprites();
 
}

function detectCollision(lstone,lmango){
	pos=lmango.body.position
	pos1=lstone.body.position
	 var distance=dist(pos1.x,pos1.y,pos.x,pos.y)
	 if(distance<=lmango.r+lstone.r){
		 Matter.body.SetStatic(lmango,false)
	 }
}
function keyPressed(){

	if(keyCode===32){
		
		stone.fly()
	}
}

