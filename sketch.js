var canvas;
var music;
var surface1,surface2,surface3,surface4;
var ball;
var edge1,edge2,edge3;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(400,400);

    //create 4 different surfaces
    surface1 = createSprite(50,380,100,10);
    surface1.shapeColor = "red";
    surface2 = createSprite(150,380,100,10);
    surface2.shapeColor = "blue";
    surface3 = createSprite(250,380,100,10);
    surface3.shapeColor = "yellow";
    surface4 = createSprite(350,380,100,10);
    surface4.shapeColor = "pink";

    //create box sprite and give velocity
    ball = createSprite(random(20,275),80,10,10);
    ball.velocityY = 5;

    //for creating edges
    edge1 = createSprite(0,200,10,800);
    edge1.visible = false;
    edge2 = createSprite(200,0,800,10);
    edge2.visible = false;
    edge3 = createSprite(400,200,10,800);
    edge3.visible = false;
}

function draw() {
    background(0,0,0);

    ball.bounceOff(edge1);
    ball.bounceOff(edge2);
    ball.bounceOff(edge3);

    if(Touching(ball,surface1)) {
        ball.velocityX = -2;
        ball.velocityY = -4;
        ball.shapeColor = "red";
        music.play();
        ball.velocityY = 0;
        ball.velocityX = 0;
    }
    else if(Touching(ball,surface2)) {
        ball.velocityX = 2;
        ball.velocityY = -4;
        ball.shapeColor = "blue";
    }
    else if(Touching(ball,surface3)) {
        ball.velocityX = 2;
        ball.velocityY = -4;
        ball.shapeColor = "yellow";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.play();
    }
    else if(Touching(ball,surface4)) {
        ball.velocityX = -2;
        ball.velocityY = -4;
        ball.shapeColor = "pink";
    }

    drawSprites();
}
