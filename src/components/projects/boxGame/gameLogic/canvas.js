class Canvas {
  constructor() {
    this.element = document.getElementById("boxGameCanvas");
  }

  updateWidthAndHeight() {
    this.width = this.element.width;
    this.height = this.element.height;
  }

  displayGameOver() {
    var ctx = this.element.getContext("2d");
    ctx.font = "30px Garamond";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("GAME OVER", this.element.width / 2, this.element.height / 2);
  }
}

export default Canvas;
