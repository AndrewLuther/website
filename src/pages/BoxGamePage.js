import classes from "./Pages.module.css";
import BoxGameHtml from "../components/projects/boxGame/BoxGameHtml";

function BoxGamePage() {
  return (
    <div className={classes.app}>
      <div className={classes.box} id="boxGamePageBox">
        <BoxGameHtml />
      </div>
    </div>
  );
}

export default BoxGamePage;
