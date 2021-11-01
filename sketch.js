var map, boy1Img, boy2Img;
var foundSnd, countSnd;
var tree1, tree2, tree3, tree4, tree5, tree6, tree7, tree8;
var rock1, rock2, rock3, rock4, rock5, rock6, rock7;

function preload(){
  map = loadImage("./assets/map.png");
  boy1Img = loadImage("./assets/boy1.png");
  boy2Img = loadImage("./assets/boy2.png")
  foundSnd = loadSound("./assets/found.mp3");
  countSnd = loadSound("./assets/counting.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  tree1 = createSprite(400, 250, 50, 100);
  tree2 = createSprite(450, 680, 50, 80);
  tree3 = createSprite(730, 620, 50, 100);
  tree4 = createSprite(980, 510, 50, 100);
  tree5 = createSprite(1170, 825, 50, 65);
  tree6 = createSprite(1585, 825, 50, 80);
  tree7  = createSprite(1650, 265, 50, 100);
  tree8  = createSprite(1380, 240, 50, 80);
  rock1 = createSprite(200, 330, 220, 120);
}

function draw() {
  background(map);  
  drawSprites();
}