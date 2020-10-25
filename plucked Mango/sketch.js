
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const bind = Matter.Constraint;


function preload(){
  root = loadImage("tree.png");
  boy = loadImage("boy.png");
}
function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
  world = engine.world;
  
  tree = createSprite(600,230,10,10);
  tree.addImage("mango",root);
  tree.scale = 0.3;

  man = createSprite(150,350,10,10);
  man.addImage("hiro",boy);
  man.scale = 0.09;

  ground = new Ground();
  iron = new stone(100,300);

  fruit1 = new mango(570,130);
  fruit2 = new mango(530,170);
  fruit3 = new mango(620,200);
  fruit4 = new mango(650,110);
  fruit5 = new mango(690,146);
  fruit6 = new mango(720,212);
  fruit7 = new mango(620,90);
  fruit8 = new mango(600,180);
  fruit9 = new mango(480,180);

  bow = new sling(iron.ore,{x:100,y:210});

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);

  background(rgb(40,90,200));

  drawSprites();

  ground.earth();

  iron.create();

  fruit1.grow();
  fruit2.grow();
  fruit3.grow();
  fruit4.grow();
  fruit5.grow();
  fruit6.grow();
  fruit7.grow();
  fruit8.grow();
  fruit9.grow();

  collide(iron,fruit1);
  collide(iron,fruit2);
  collide(iron,fruit3);
  collide(iron,fruit4);
  collide(iron,fruit5);
  collide(iron,fruit6);
  collide(iron,fruit7);
  collide(iron,fruit8);
  collide(iron,fruit9);
}

function mouseDragged(){
  Matter.Body.setPosition(iron.ore,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  bow.detach();
}
function collide(lstone,lmango){

  var pos =lstone.ore.position;
  var pos2 = lmango.juice.position;

  var right = pos.x + lstone.ore.width/2;
  var left = pos2.x - lmango.juice.diameter/2;

  if(right >= left ){
    Matter.Body.setStatic(lmango.body,false);
  }
}



