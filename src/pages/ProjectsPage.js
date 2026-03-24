import classes from "./Pages.module.css";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";
import Project from "../components/projects/Project";
import SnowKing from "../images/big_snow_king.png";
import Chord from "../images/chord.png";
import moreScore from "../images/moreScoreLogo.png";
import box from "../images/box.png";
import rps from "../images/rps.png"

function ProjectsPage() {
  const rpsText =
  "This project is a web-based multiplayer application created as a learning exercise to build upon my web-development skills. " + 
  "The frontend and backend are both written using TypeScript, with websockets for seamless games between players."

  const moreScoreText =
    "MoreScore is an application I developed thanks to 2 research grants funded by NSERC USRAs under the supervision of " +
    "Dr. Antonina Kolokolova. The application frontend was developed by Jack Harrhy and the MoreScore logo was created by Andrew Gosse.";

  const kingdominoText =
    "Kingdomino is a digital version of the board game, developed in Java. " +
    "This was a group project with Ayon Debnath, Sahil Mahey, Benjamin Stanley, and Muhammad Bilal Naseer.";

  const chordText =
    "Chord Progression Generator outputs a random list of chords " +
    "in any user-defined major or minor scale (e.g. C major).";

  const boxText =
    "Box Game is a simple game I programmed to work on my skills in JavaScript. It is " +
    "inspired by the popular game 'Snake'. The code for this project exists directly on this website. Click the link below to give it a try!";

  return (
    <div className={classes.app}>
      <div className={classes.box}>
        <Header />
      </div>

      <div className={classes.box}>
        <Project
          title="Rock Paper Scissors"
          subTitle="March 2026"
          image={rps}
          text={rpsText}
          hasLink={true}
          link="https://github.com/AndrewLuther/rock_paper_scissors"
          buttonText="GitHub"
        />
      </div>

      <div className={classes.box}>
        <Project
          title="MoreScore"
          subTitle="August 2022, 2024"
          image={moreScore}
          text={moreScoreText}
          hasLink={true}
          link="https://morescore.andrewluther.ca/"
          buttonText="Website"
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
