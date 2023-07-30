import classes from "./BoxGame.module.css";

function PointCounter() {
  return (
    <div>
      <h3 id="boxGamePointCounter" className={classes.pointCounter}>
        Points: 0
      </h3>
    </div>
  );
}

export default PointCounter;
