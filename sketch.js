const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5;
var pig,pig2;
var log,log2,log3,log4;
var log6;
var backgroundImg;
var score=0;
function preload(){
   getTime();
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform= new Ground(150,305,300,170);
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig= new Pig(810,350);
    log= new Log(810,260,300,PI/2);
    bird=new Bird(100,100)

    box3= new Box(700,240,70,70);
    box4= new Box(920,240,70,70);    
    pig2=new Pig(810,220)
    log2=new Log(810,180,300,PI/2)

    box5=new Box(810,160,70,70)
    log3=new Log(760,120,150,PI/7);
    log4=new Log(870,120,150,-PI/7);

    //log6=new Log(230,180,80,PI/2);
    chain=new Chain(bird.body,{x:200, y:50});
  
    
}

function draw(){
    if(backgroundImg)
    background(backgroundImg);

    noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    

    Engine.update(engine);

    box1.display();
    bird.display();
    box2.display();
    ground.display();
    pig.display();
    pig.score();
    log.display();
    box3.display();
    box4.display();
    pig2.display();
    pig2.score();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    //log6.display();
    chain.display();
    platform.display();
}
function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
    chain.fly()
}

function keyPressed(){
    if(keyCode===32 && bird.body.speed< 1){
        bird.path=[]
        Matter.Body.setPosition(bird.body, {x:200, y:50})
        chain.attach(bird.body)
    }
}

async function getTime(){
    var response= await fetch("http://worldtimeapi.org/api/timezone/america/new_york");
    var responseJson= await response.json();
   

    var datetime=responseJson.datetime;
    console.log(datetime);
    var hour= datetime.slice(11,13)

    if(hour>=06 && hour<=19){
        bg= "sprites/bg.png";
    }else {
        bg= "sprites/bg2.jpg";
    }
   backgroundImg= loadImage(bg);
}

var name= "kinjal";
var num= 10;
var array=[1,2,3,4,5];
        // 0 1 2 3 4
console.log(array[2]);

var array1=[name, num, "hello", 20];
        //    0    1      2      3
console.log(array1[3]);
console.log(array.length)
           //   0,1,2   0,1    0,   1
 var array3= [ [1,2,3], [2,3], [20, "Hello"]];
      //         0      1        2
      console.log(array3[2][1]);
