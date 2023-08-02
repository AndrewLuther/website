import classes from "./Pages.module.css";
import BoxGameHtml from "../components/projects/boxGame/BoxGameHtml";
import { Link } from "react-router-dom";
import { useState } from "react";
import HowToPlay from "../components/projects/boxGame/HowToPlay";

function BoxGamePage() {
  const [howToPlayOn, setHowToPlay] = useState(false);

  const onHowToPlay = () => {
    howToPlayOn ? setHowToPlay(false) : setHowToPlay(true);
  };

  const content = howToPlayOn ? <HowToPlay /> : <BoxGameHtml />;

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
            onClick={onHowToPlay}
          >
            How To Play
          </button>
        </div>
        <div className={classes.boxGameContent}>{content}</div>
      </div>
    </div>
  );
}

export default BoxGamePage;
