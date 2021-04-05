const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var grounD;

var plinkos = [];
var divisions = [];
var particles = [];

var divisionHeight = 300;

function setup() {
  var canvas = createCanvas(400,800);
  engine = Engine.create();
  world = engine.world;

  grounD=new Ground(width/2,height-5,400,10);

  for(var k=0;k<=width;k = k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
  }

  for(var j=40;j<=width;j=j+50){
    
    plinkos.push(new Plinko(j,50));
  }

  for(var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175));
  }

  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,300));
  }

  for(var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,425));
  }

  
 
}

function draw() {
  background(64,156,165); 
  Engine.update(engine);
  
  
grounD.display();

for(var k =0;k < divisions.length;k++){
  divisions[k].display();
}

for(var i =0;i < plinkos.length;i++){
  plinkos[i].display();
}

if(frameCount%60===0){
  particles.push(new Particles(random(190,210),15));
}

for(var j =0;j < particles.length;j++){
  particles[j].display();
}

  drawSprites();
}