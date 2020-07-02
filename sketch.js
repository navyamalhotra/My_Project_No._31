const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var divisions = [];
var particles = [];
var plinkos = [];

var divisionHeight = 300;

function setup(){
    //var canvas = 
    createCanvas(480, 750);
    
    engine = Engine.create();
    world = engine.world;

   //box1 = new Box(100,697,50,50);
   border1 = new Ground2(240,748,480,15);
  // border2 = new Ground2(240,2  ,480,15);
   border3 = new Ground2(2  ,375,15, 750);
   border4 = new Ground2(478,375,15,750);

   ground = new Ground(240,735,460,15);

   for(var i = 0; i <= 480; i = i + 80 ) {
    divisions.push(new divisionBar(i,750-300/2,10,300));
}
for(var k = 40; k <= 470; k= k+50) {
    plinkos.push(new Plinko(k,75));
}
for(var k = 70; k<= 460; k=k+50) {
plinkos.push(new Plinko(k,175));
}
for(var k = 40;k<=480;k=k+50) {
    plinkos.push(new Plinko(k,275));
}
for(var k = 90;k<=400;k=k+50) {
plinkos.push(new Plinko(k,375));
}

/*for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }*/

    /*bar2 = new Ground((1150+1350)/2,698,200,20);
    bar3 = new Ground(1350,650,15,100);*/
    
    
}

function draw() {
    background(0);
    Engine.update(engine);
    
 //   box1.display();
    border1.display();
   // border2.display();
    border3.display();
    border4.display();
    
   /* dBar1.display();
    dBar2.display();
    dBar3.display();
    dBar4.display();*/
    ground.display();

    if(frameCount%60===0) {
        particles.push(new Particle(random(width/2-50,width/2+50),0,10));
    }
    for(var p = 0; p < particles.length;p++) {
particles[p].display();
    }
  
    for (var i = 0; i < divisions.length; i++) {
     
        divisions[i].display();
      }
      for(var k = 0; k < plinkos.length; k++) {
       plinkos[k].display();
    }
    
    
     //   divisions.display();
   // divisions.display();
    /*bar1.display();
    bar2.display();
    bar3.display(); */
}
/*function keyPressed() {
    if(keyCode === UP_ARROW){
       Matter.Body.applyForce(box1.body,box1.body.position,{x:200,y:-200});
    }
    if(keyCode === DOWN_ARROW) {
        Matter.Body.applyForce(box1.body,box1.body.position,{x:-200,y:-200});
    }
}
*/

