import classes from "./BoxGame.module.css";
import Direction from "./gameLogic/direction";

function MobileControls(props) {
  function changeDirection(direction) {
    if (props.game.gameStarted) {
      props.game.player.direction = direction;
    }
  }

  if (isMobileDevice()) {
    return (
      <div className={classes.mobileControls}>
        <button
          className={[classes.controlButton, classes.button].join(" ")}
          onClick={() => {
            changeDirection(Direction.UP);
          }}
        >
          UP
        </button>
        <div id="leftRightButtons">
          <button
            className={[classes.controlButton, classes.button].join(" ")}
            onClick={() => {
              changeDirection(Direction.LEFT);
            }}
          >
            LEFT
          </button>
          <button
            className={[classes.controlButton, classes.button].join(" ")}
            onClick={() => {
              changeDirection(Direction.RIGHT);
            }}
          >
            RIGHT
          </button>
        </div>
        <button
          className={[classes.controlButton, classes.button].join(" ")}
          onClick={() => {
            changeDirection(Direction.DOWN);
          }}
        >
          DOWN
        </button>
      </div>
    );
  } else {
    return null;
  }
}

function isMobileDevice() {
  const regexp = /android|iphone|kindle|ipad/i;
  return regexp.test(navigator.userAgent);
}

export default MobileControls;
