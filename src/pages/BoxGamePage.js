import classes from "./Pages.module.css";
import BoxGameHtml from "../components/projects/boxGame/BoxGameHtml";
import { Link } from "react-router-dom";

function BoxGamePage() {
  return (
    <div className={classes.app}>
      <div className={classes.box} id="boxGamePageBox">
        <div className={classes.headerButtons}>
          <Link to={"/projects"}>
            <button
              className={[classes.projectsButton, classes.button].join(" ")}
            >
              {"< Projects"}
            </button>
          </Link>
          <button
            className={[classes.howToPlayButton, classes.button].join(" ")}
          >
            How To Play
          </button>
        </div>

        <BoxGameHtml />
      </div>
    </div>
  );
}

export default BoxGamePage;
