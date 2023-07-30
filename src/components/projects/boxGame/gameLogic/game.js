import Player from "./player";
import Box from "./box";
import Canvas from "./canvas";

class BoxGame {
  constructor() {
    this.boxes = [];
    this.gameStarted = false;

    // fields that get set when the game starts
    this.player = null;
    this.intervalValue = null;
    this.interval = null;
    this.canvas = null;
  }

  startGame(startButton) {
    this.canvas = new Canvas();
    if (this.player) {
      this.player.resetPoints();
    }
    startButton.innerText = "End Game";
    this.gameStarted = true;
    this.intervalValue = 10;
    this.player = new Player(this);
    this.player.draw();
    this.interval = setInterval(() => this.player.move(), this.intervalValue);
    this.drawBox();
  }

  endGame(startButton) {
    startButton.innerText = "Start Game";
    this.gameStarted = false;
    clearInterval(this.interval);
    this.canvas.displayGameOver();
    this.boxes = [];
  }

  drawBox() {
    const box = new Box(this.canvas);
    this.boxes.push(box);
    this.updateCanvas();
  }

  updateCanvas() {
    const ctx = this.canvas.element.getContext("2d");
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.player.draw();
    for (const box of this.boxes) {
      box.draw();
    }
    this.checkBoxCollision();
    this.checkGameOver();
  }

  checkBoxCollision() {
    for (const box of this.boxes) {
      const collision =
        (Math.abs(this.player.xCoord - box.xCoord) < 10) &
        (Math.abs(this.player.yCoord - box.yCoord) < 10);
      if (collision) {
        this.boxes.pop(box);
        this.drawBox();
        this.player.addPoint();
        this.player.increaseSpeed();
      }
    }
  }

  checkGameOver() {
    const startButton = document.getElementById("boxGameStartButton");
    if (
      this.player.xCoord < 0 ||
      this.player.xCoord > this.canvas.width - Player.WIDTH
    ) {
      this.endGame(startButton);
    }
    if (
      this.player.yCoord < 0 ||
      this.player.yCoord > this.canvas.height - Player.HEIGHT
    ) {
      this.endGame(startButton);
    }
  }
}

export default BoxGame;
