const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world;
var engine;
var chao;
var parede1;
var parede2;
var bola;



function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;
 var propriedadesdochao={
	 isStatic:true
 }
 var bola_options={
	 isStatic:false,
	 restitution:0.3,
	 friction:0,
	 density:1.2
 }
 var propriedadesdaparede1={
	 isStatic:true
 }
 var propriedadesdaparede2={
	 isStatic:true
 }

	//Create the Bodies Here.
chao=Bodies.rectangle(0,670,2800,20,propriedadesdochao);
parede1=Bodies.rectangle(1100,600,20,120,propriedadesdaparede1);
parede2=Bodies.rectangle(1350,600,20,120,propriedadesdaparede2);
bola=Bodies.circle(100,600,30,bola_options);
	
rectMode(CENTER);
}


function draw() {
  background(0);
  Engine.update(engine);
  rect(chao.position.x,chao.position.y,2800,20);
 rect(parede1.position.x,parede1.position.y,20,120);
 rect(parede2.position.x,parede2.position.y,20,120);
 ellipse(bola.position.x,bola.position.y,30,30);
}
function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bola,bola.position,{x:85,y:-85});
	}
}


