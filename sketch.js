
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
      paper=new Paper(50,650,20,20)
	   paper.shapeColor=color("pink")

	   dustbin=new Dustbin(655,680,100,20)
	   dustbin2=new Dustbin(699,650,20,100)
	   dustbin3=new Dustbin(599,650,20,100)
	   
	   ground=new Ground(400,695,800,20,{isStatic:true})
	   
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  paper.display();
  dustbin.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();

  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position.x,{x:85,y:85})
	}
}

