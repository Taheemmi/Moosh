// player.js
class Player {
  constructor(x, y, width, height, speed, canvas) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.canvas = canvas;
  }

  move(keys) {
    // Arrow keys
    if (keys['ArrowUp'] && this.y > 0) this.y -= this.speed;
    if (keys['ArrowDown'] && this.y < this.canvas.height - this.height) this.y += this.speed;
    if (keys['ArrowLeft'] && this.x > 0) this.x -= this.speed;
    if (keys['ArrowRight'] && this.x < this.canvas.width - this.width) this.x += this.speed;

    // WASD keys
    if (keys['w'] && this.y > 0) this.y -= this.speed;
    if (keys['s'] && this.y < this.canvas.height - this.height) this.y += this.speed;
    if (keys['a'] && this.x > 0) this.x -= this.speed;
    if (keys['d'] && this.x < this.canvas.width - this.width) this.x += this.speed;

    //De Bug
    console.log(`Player position: (${this.x}, ${this.y})`);
    console.log(`Canvas dimensions: (${this.canvas.width}, ${this.canvas.height})`);
  }
}

export default Player;
