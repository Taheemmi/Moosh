import Player from './player.js';

class Game {
  constructor(canvas, playerColor) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.playerColor = playerColor; // saves player colour (bloody americans)
    this.player = new Player(50, 50, 20, 20, 5, canvas);
    this.keys = {};
    this.init();
  }

  init() {
    window.addEventListener('keydown', (e) => this.keys[e.key] = true);
    window.addEventListener('keyup', (e) => this.keys[e.key] = false);
    requestAnimationFrame(() => this.update());
  }

  update() {
    this.player.move(this.keys);
    
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawPlayer();

    requestAnimationFrame(() => this.update());
  }

  drawPlayer() {
    this.ctx.fillStyle = this.playerColor; // links to barn replace with sprites once made.
    this.ctx.fillRect(this.player.x, this.player.y, this.player.width, this.player.height);
  }
}

export default Game;
