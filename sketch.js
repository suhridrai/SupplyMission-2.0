var helicopterIMG, helicopterSprite, packageSprite,packageIMG,invSprite,bd1,bd2,bd3;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	invSprite=createSprite(width/2, 250,60,10)

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	bd1 = createSprite(width/2, 650, 200,20)
	bd1.shapeColor = color("Red")
	bd2 = createSprite(width/2-90, 590, 20,100)
	bd2.shapeColor = color("Red")
	bd3 = createSprite(width/2+90, 590, 20,100)
	bd3.shapeColor = color("Red")

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:false});
	World.add(world, packageBody);

	invSprite = Bodies.rectangle(width/2, 220, width, 10 , {isStatic:true} );
 	World.add(world, invSprite);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	bd1 = Bodies.rectangle(width/2, 650, 200, 60 , {isStatic:true} );
	World.add(world, bd1);
	bd2 = Bodies.rectangle(width/2-90, 590, 20, 200 , {isStatic:true} );
 	World.add(world, bd2);
	bd3 = Bodies.rectangle(width/2+90, 590, 20, 200 , {isStatic:true} );
	World.add(world, bd3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
 drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
		invSprite.position.y = invSprite.position.y + 200
  }
}