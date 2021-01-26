var box;
var edges;
var block1, block2, block3, block4;
var canvas;
var music;

function preload() {
    music = loadSound("music.mp3");
}


function setup() {
    canvas = createCanvas(800, 600);

    //create box sprite and give velocity
    box = createSprite(400, 300, 20, 20);
    box.velocityX = 4;
    box.velocityY = 8

    //create 4 different surfaces
    block1 = createSprite(125, 575, 150, 25);
    block1.shapeColor = "blue";
    block2 = createSprite(300, 575, 150, 25);
    block2.shapeColor = "orange";
    block3 = createSprite(475, 575, 150, 25);
    block3.shapeColor = "lime";
    block4 = createSprite(650, 575, 150, 25);
    block4.shapeColor = "cyan";

}

function draw() {
    background("black");
    edges = createEdgeSprites();
   
    box.bounceOff(edges);


    //add condition to check if box touching surface and make it box
    if(box.isTouching(block1) && box.bounceOff(block1)) {
        box.shapeColor = block1.shapeColor;
        music.play();
    }
    if(box.isTouching(block2) && box.bounceOff(block2)) {
        box.shapeColor = block2.shapeColor;
        music.stop();
    }
    if(box.isTouching(block3) && box.bounceOff(block3)) {
        box.shapeColor = block3.shapeColor;
        music.stop();
    }
    if(box.isTouching(block4) && box.bounceOff(block4)) {
        box.shapeColor = block4.shapeColor;
        music.play();
    }

    drawSprites();
    
}
