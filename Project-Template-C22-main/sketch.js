const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof,base;
var bob,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
    var bob_options ={
    restitution:0.9,}
	var roof_options ={
	isStatic:true,
}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);
	base = Bodies.rectangle(400,580,500,20,roof_options);
	World.add(world,base);
    bob = Bodies.circle(345,140,20,bob_options);
    World.add(world,bob);
	bob2 = Bodies.circle(365,140,20,bob_options);
	World.add(world,bob2);
	bob3 = Bodies.circle(380,140,20,bob_options);
	World.add(world,bob3);
	bob4 = Bodies.circle(400,140,20,bob_options);
	World.add(world,bob4);
    bob5 = Bodies.circle(425,140,20,bob_options);
	World.add(world,bob5);

    rope1 = new rope (bob,roof,-80,0)


	Engine.run(engine);  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);
  rect(base.position.x,base.position.y,500,20);

 ellipse(bob.position.x,bob.position.y,40);
 ellipse(bob2.position.x,bob2.position.y,40);
 ellipse(bob3.position.x,bob3.position.y,40);
 ellipse(bob4.position.x,bob4.position.y,40);
 ellipse(bob5.position.x,bob5.position.y,40);


}

function keyPressed() {
if (keyCode==UP_ARROW){
    Matter.body.applyForce(bob,{x:0,y:0},{x:0.5,y:0}) 

  }	
}