var canvas
var game, form
var database
var player
var ghost1, ghost2
var ghosts = [];

function setup() {
    canvas = createCanvas(windowWidth, windowHeight)
    database = firebase.database()
    game = new Game()
    game.getState();
    game.start()
}

function draw() {
        if (playerCount === 2) {
          game.update(1);
        }
      
        if (gameState === 1) {
          game.play();
        }
}




