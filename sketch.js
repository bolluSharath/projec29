
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body;
const Constraint = Matter.Constraint

var engine,world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21;
var ground;
var polygon;


function setup(){
    createCanvas(1400,600)

    engine = Engine.create();
    world = engine.world

    box1 = new Bluebox(700,500,20,30)
    box2 = new Yellowbox(25,0,20,30)
    box3 = new Greenbox(25,0,20,30)
    box4 = new Redbox(25,0,20,30)
    box5 = new Greenbox(25,0,20,30)
    box6 = new Yellowbox(25,0,20,30)

    box7 = new Redbox(-15,-35,20,30)
    box8 = new Orangebox(-25,0,20,30)
    box9 = new Yellowbox(-26,0,20,30)
    box10 = new Bluebox(-25,0,20,30)
    box11 = new  Greenbox(-25,0,20,30)

    box12 = new Orangebox(85,-35,20,30)
    box13 = new Redbox(-25,0,20,30)
    box14 = new Greenbox(-25,0,20,30)
    box15 = new Yellowbox(-25,0,20,30)

    box16 = new Bluebox(60,-35,20,30)
    box17 = new Redbox(-25,0,20,30)
    box18 = new Yellowbox(-25,0,20,30)

    box19 = new Orangebox(40,-35,20,30)
    box20 = new Greenbox(-25,0,20,30)

    box21 = new Purplebox(15,-35,20,30)

    ground =new Ground(10,200,200,10)
    
    polygon=new Polygon(-600,-10,30)

    launchobject = new launcher(polygon.body,{x: -600,y: -10})

}

function draw(){
    background(247,223,178)

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

    ground.display();
    polygon.display();
    launchobject.display();

    
    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    launchobject.fly();
}







