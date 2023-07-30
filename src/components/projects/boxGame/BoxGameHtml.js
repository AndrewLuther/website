import classes from "./BoxGame.module.css";
import GameCanvas from "./GameCanvas";
import PointCounter from "./PointCounter";
import BoxGame from "./gameLogic/game";
import Direction from "./gameLogic/direction";

function BoxGameHtml() {
  const game = new BoxGame();

  function onStartButtonClick() {
    const startButton = document.getElementById("boxGameStartButton");
    if (!game.gameStarted) {
      game.startGame(startButton);
    } else {
      game.endGame(startButton);
    }
  }

  window.addEventListener("keydown", (event) => {
    if (event.defaultPrevented) {
      return;
    }
    switch (event.key) {
      case "ArrowDown":
        game.player.direction = Direction.DOWN;
        break;
      case "ArrowUp":
        game.player.direction = Direction.UP;
        break;
      case "ArrowLeft":
        game.player.direction = Direction.LEFT;
        break;
      case "ArrowRight":
        game.player.direction = Direction.RIGHT;
        break;
      default:
        return;
    }
  });

  return (
    <div>
      <h3>Box Game</h3>
      <button
        id="boxGameStartButton"
        className={classes.button}
        onClick={() => onStartButtonClick(this)}
      >
        Start Game
      </button>
      <GameCanvas />
      <PointCounter />
    </div>
  );
}

export default BoxGameHtml;
