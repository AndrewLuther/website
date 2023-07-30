class Box {
  constructor(canvas) {
    this.canvas = canvas;
    this.xCoord = Math.floor(Math.random() * (canvas.width - Box.WIDTH)) + 1;
    this.yCoord = Math.floor(Math.random() * (canvas.height - Box.HEIGHT)) + 1;
  }

  draw() {
    const ctx = this.canvas.element.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(this.xCoord, this.yCoord, Box.WIDTH, Box.HEIGHT);
  }
}

// Class Variables
Box.WIDTH = 10;
Box.HEIGHT = 10;
export default Box;
