import classes from "./BoxGame.module.css";

function PointCounter() {
  return (
    <div>
      <h2 id="boxGamePointCounter" className={classes.pointCounter}></h2>
    </div>
  );
}

export default PointCounter;
