const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;
var bala
var canvas, angle, tower, ground, cannon;
var tower

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angle = 20;
  cannon = new Cannon(180,110,130,100,angle);
  bala = new Bala(cannon.x,cannon.y);
tower= new Tower (150,350,160,310);
  

  
}

function draw() {
  image(backgroundImg,0,0,1200,600)
  Engine.update(engine);
cannon.display();
bala.display();
tower.display();
  
 // rect(ground.position.x, ground.position.y, width * 2, 1);
  

 
}
