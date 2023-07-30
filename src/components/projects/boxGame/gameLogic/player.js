import Direction from "./direction";

class Player {
  constructor(game) {
    this.game = game;

    this.pointsGained = 0;
    this.speed = 1;
    this.xCoord = 0;
    this.yCoord = 0;
    this.direction = Direction.RIGHT;
  }

  draw() {
    const ctx = this.game.canvas.element.getContext("2d");
    ctx.fillStyle = "green";
    ctx.fillRect(this.xCoord, this.yCoord, Player.WIDTH, Player.HEIGHT);
  }

  move() {
    switch (this.direction) {
      case Direction.DOWN:
        this.updatePosition(0, this.speed);
        break;
      case Direction.UP:
        this.updatePosition(0, this.speed * -1);
        break;
      case Direction.LEFT:
        this.updatePosition(this.speed * -1, 0);
        break;
      case Direction.RIGHT:
        this.updatePosition(this.speed, 0);
        break;
      default:
        break;
    }

    this.game.updateCanvas();
  }

  updatePosition(xChange, yChange) {
    this.xCoord += xChange;
    this.yCoord += yChange;
  }

  addPoint() {
    this.pointsGained += 1;
    this.updatePointDisplay();
  }

  resetPoints() {
    this.pointsGained = 0;
    this.updatePointDisplay();
  }

  updatePointDisplay() {
    const pointCounter = document.getElementById("boxGamePointCounter");
    pointCounter.textContent = "Points: " + this.pointsGained;
  }

  increaseSpeed() {
    if (this.speed < 2.5) {
      this.speed += 0.1;
    }
  }
}

// Class Variables
Player.WIDTH = 10;
Player.HEIGHT = 10;
export default Player;
