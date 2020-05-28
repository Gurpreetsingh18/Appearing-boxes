const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var background,platform;
var ball;
var support;
//var slingShot;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground2 = new Ground(1000,200,110,10);
    ground = new Ground(600,400,1200,20);
    platform = new Ground(150,405,300,170);

    //Top level
    box1 = new Box(1000,185,10,20);
    box2 = new Box(989,185,10,20);
    box3 = new Box(978,185,10,20);
    box4 = new Box(967,185,10,20);
    box5 = new Box(1011,185,10,20);
    box6 =  new Box(1022,185,10,20);
    box7 = new Box(1033,185,10,20);
    box8 = new Box(1022,165,10,20);
    box9 = new Box(1011,165,10,20);
    box10 = new Box(1000,165,10,20);
    box11 = new Box(989,165,10,20);
    box12 = new Box(978,165,10,20);
    box13 = new Box(1000,145,10,20);
    box14 = new Box(989,145,10,20);
    box15 = new Box(1011,145,10,20);
    box16 = new Box(1000,125,10,20);

    //Bottom Level
    box17 = new Box(1000,380,10,20);
    box18 = new Box(989,380,10,20);
    box19 = new Box(978,380,10,20);
    box20 = new Box(1011,380,10,20);
    box21 = new Box(1022,380,10,20);
    box22 = new Box(967,380,10,20);
    box23 = new Box(1033,380,10,20);
    box24 = new Box(1000,360,10,20);
    box25 = new Box(1011,360,10,20);
    box26 = new Box(1022,360,10,20);
    box27 = new Box(989,360,10,20);
    box28 = new Box(978,360,10,20);
    box29 = new Box(1000,340,10,20);
    box30 = new Box(1000,320,10,20);
    box31 = new Box(1011,340,10,20);
    box32 = new Box(989,340,10,20);


   ball = new Ball(590,300);
   //slingShot = new SlingShot(ball,{x: mouseX,y: mouseY});
   support = new Box(590,300)  
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    ground2.display();
    platform.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    ball.display();
   // slingShot.display();
    ground2.display();    
    text("Welcome to Ball Game",50,200);
    textSize(15);
    text("Drag the ball where ever  you want",50,250);
    textSize(15);
    text("Take the ball toward the top floor and sse the magic",50,300);
    textSize(15);
    text("There are in visible boxes which support the ball",200,150);
    textSize(15);

    
}

function mouseDragged(){
     Matter.Body.setPosition(ball.body,{x: mouseX,y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}
