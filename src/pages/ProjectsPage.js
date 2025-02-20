import classes from "./Pages.module.css";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";
import Project from "../components/projects/Project";
import SnowKing from "../images/big_snow_king.png";
import Chord from "../images/chord.png";
import moreScore from "../images/moreScoreLogo.png";
import box from "../images/box.png";

function ProjectsPage() {
  const moreScoreText =
    "MoreScore is an application I developed during a research grant funded by NSERC under the supervision of " +
    "Dr. Antonina Kolokolova.";

  const kingdominoText =
    "Kingdomino is a digital version of the board game, developed in Java. " +
    "This was a group project with Ayon Debnath, Sahil Mahey, Benjamin Stanley, and Muhammad Bilal Naseer.";

  const chordText =
    "Chord Progression Generator outputs a random list of chords " +
    "in any user-defined major or minor scale (e.g. C major).";

  const boxText =
    "Box Game is a simple game I programmed to work on my skills in JavaScript. It is " +
    "inspired by the popular game 'Snake'. Click the link below to give it a try!";

  return (
    <div className={classes.app}>
      <div className={classes.box}>
        <Header />
      </div>

      <div className={classes.box}>
        <Project
          title="MoreScore"
          subTitle="August 2022, 2024"
          image={moreScore}
          text={moreScoreText}
          hasLink={true}
          link="https://morescore_website-silver-piano.reflex.run/"
          buttonText="Try"
        />
      </div>

      <div className={classes.box}>
        <Project
          title="Box Game"
          subTitle="July 2023"
          image={box}
          text={boxText}
          hasLink={true}
          link="box_game"
          buttonText="Play"
        />
      </div>

      <div className={classes.box}>
        <Project
          title="Chord Progression Generator"
          subTitle="April 2022"
          image={Chord}
          text={chordText}
          hasLink={true}
          link="https://github.com/AndrewLuther/Chord_Progression_Generator"
          buttonText="GitHub"
        />
      </div>

      <div className={classes.box}>
        <Project
          title="Kingdomino"
          subTitle="March 2022"
          image={SnowKing}
          text={kingdominoText}
          hasLink={true}
          link="https://github.com/AndrewLuther/Kingdomino"
          buttonText="GitHub"
        />
      </div>

      <div className={classes.box}>
        <Footer />
      </div>
    </div>
  );
}

export default ProjectsPage;
