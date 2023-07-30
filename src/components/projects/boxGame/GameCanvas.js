import { useState } from "react";
import classes from "./BoxGame.module.css";

function GameCanvas() {
  const [canvasWidth, setCanvasWidth] = useState(
    visualViewport.width < 512 ? "256" : "512"
  );

  const [canvasHeight, setCanvasHeight] = useState(
    visualViewport.width < 512 ? "256" : "512"
  );

  window.addEventListener("resize", onWindowChange);

  function onWindowChange() {
    if (visualViewport.width < 1000) {
      setCanvasWidth("256");
      setCanvasHeight("256");
    } else {
      setCanvasWidth("512");
      setCanvasHeight("512");
    }
  }

  return (
    <div className={classes.gameCanvasContainer}>
      <canvas
        className={classes.gameCanvas}
        width={canvasWidth}
        height={canvasHeight}
        id="boxGameCanvas"
      ></canvas>
    </div>
  );
}

export default GameCanvas;
