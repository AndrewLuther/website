import classes from "./BoxGame.module.css";

function GameCanvas() {
  return (
    <div className={classes.gameCanvasContainer}>
      <canvas
        className={classes.gameCanvas}
        width={256}
        height={256}
        id="boxGameCanvas"
      ></canvas>
    </div>
  );
}

export default GameCanvas;
