import classes from "./BoxGame.module.css";

function BoxGame() {
  const canvasWidth = visualViewport.width < 512 ? "512" : "256";
  const canvasHeight = visualViewport.width < 512 ? "512" : "256";
  return (
    <div>
      <h3>Box Game</h3>
      <button className={classes.button}>Start Game</button>
      <canvas width={canvasWidth} height={canvasHeight}></canvas>
    </div>
  );
}

export default BoxGame;
