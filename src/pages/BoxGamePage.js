import classes from "./Pages.module.css";
import BoxGame from "../components/projects/snakeGame/BoxGame";

function SnakeGamePage() {
  return (
    <div className={classes.app}>
      <div className={classes.box}>
        <BoxGame />
      </div>
    </div>
  );
}

export default SnakeGamePage;
