import classes from "./BoxGame.module.css";
import GameCanvas from "./GameCanvas";
import PointCounter from "./PointCounter";
import BoxGame from "./gameLogic/game";
import Direction from "./gameLogic/direction";
import MobileControls from "./MobileControls";

function BoxGameHtml(props) {
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
    event.preventDefault();
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
    <div className={classes.boxGame} id="boxGameHtml">
      <div className={classes.gameTitleAndPoints}>
        <h2>Box Game</h2>
        <PointCounter />
      </div>
      <button
        id="boxGameStartButton"
        className={classes.button}
        onClick={() => onStartButtonClick(this)}
      >
        Start Game
      </button>
      <GameCanvas />
      <MobileControls game={game} />
    </div>
  );
}

export default BoxGameHtml;
