var player1, player2, edges;
var punchesP = 0;
//var gameState = "Round 1";
var gameState = 0;
var playerCount;
var database;
var form, player, game;
var boxingRing;
var allPlayers;
var barrier;

function preload(){
  playerIMG = loadImage("PC.png");
  playerAfraidIMG = loadImage("PCAfraid.jpg");
  player2IMG = loadImage("Enemy.png");
  boxingRing = loadImage("BoxingRing.png");

}

function setup() {
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  barrier = createSprite(750, 400, 1750)
  barrier.visible = false;
  
}

function draw() {
background("white");
if (playerCount === 2) {
  game.update(1);
}

  if (gameState === 1) {
    game.play();
  }


//   if(keyDown("W" && gameState === "Round 1")){
//     enemy.x = player.x - 20;
//   }
  
//   if(keyWentDown("UP_ARROW")){
//    player.x = enemy.x-10;
//    //player.x= player.x + 20;
//   punchesP = punchesP + 1;
//   }
  

  
//   textSize(20);
//   text("Player Punches: " + punchesP, 200, 15);
  
//   if (punchesP === 20){
//     gameState = "Round 2";
//   }
  
//   if (gameState === "Round 2") {
//     enemy.changeImage("enemy2", enemy2IMG);
//   }
  
//   edges = createEdgeSprites() 
//   //player.collide(edges[1]);
//   enemy.collide(edges[1]);
//   player.depth = enemy.depth + 1;
  
//   console.log(gameState);
  
  drawSprites();
}
